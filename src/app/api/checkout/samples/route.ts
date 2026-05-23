import { NextResponse } from "next/server";
import {
  calculateSampleTotalCents,
  getLeatherCollectionDetailOrThrow,
} from "@/lib/leather-collections";
import type { LeatherSwatch } from "@/lib/leather-collections/types";
import { sampleCartItemKey } from "@/lib/leather-collections/sampleCartTypes";
import {
  getSampleCheckoutCancelUrl,
  getSampleCheckoutSuccessUrl,
  getStripe,
} from "@/lib/stripe";

const MAX_DESCRIPTION_LENGTH = 500;

type ValidatedSampleLine = {
  collectionSlug: string;
  collectionName: string;
  swatch: LeatherSwatch;
};

type CheckoutSamplesRequestBody = {
  collectionSlug?: unknown;
  swatchIds?: unknown;
  items?: unknown;
};

function parseCheckoutItems(body: CheckoutSamplesRequestBody): unknown[] | null {
  if (Array.isArray(body.items)) {
    return body.items;
  }

  if (
    typeof body.collectionSlug === "string" &&
    body.collectionSlug.trim() &&
    Array.isArray(body.swatchIds)
  ) {
    return body.swatchIds.map((swatchId) => ({
      collectionSlug: body.collectionSlug,
      swatchId,
    }));
  }

  return null;
}

function validateCheckoutItems(
  rawItems: unknown[],
): { lines: ValidatedSampleLine[]; error?: string } {
  if (rawItems.length < 1) {
    return { lines: [], error: "Select at least one swatch" };
  }

  const lines: ValidatedSampleLine[] = [];
  const seen = new Set<string>();

  for (const raw of rawItems) {
    if (!raw || typeof raw !== "object") {
      return { lines: [], error: "Each cart item must be an object" };
    }

    const entry = raw as Record<string, unknown>;
    const collectionSlug = entry.collectionSlug;
    const swatchId = entry.swatchId;

    if (typeof collectionSlug !== "string" || !collectionSlug.trim()) {
      return { lines: [], error: "Each item requires a collectionSlug" };
    }
    if (typeof swatchId !== "string" || !swatchId.trim()) {
      return { lines: [], error: "Each item requires a swatchId" };
    }

    const slug = collectionSlug.trim();
    const id = swatchId.trim();
    const key = sampleCartItemKey({ collectionSlug: slug, swatchId: id });
    if (seen.has(key)) continue;

    const collection = getLeatherCollectionDetailOrThrow(slug);
    const swatch = collection.swatches.find((s) => s.id === id);
    if (!swatch) continue;

    seen.add(key);
    lines.push({
      collectionSlug: slug,
      collectionName: collection.name,
      swatch,
    });
  }

  if (lines.length < 1) {
    return { lines: [], error: "No valid swatches selected" };
  }

  return { lines };
}

function buildProductDescription(lines: ValidatedSampleLine[]): string {
  const byCollection = new Map<string, string[]>();
  for (const line of lines) {
    const names = byCollection.get(line.collectionName) ?? [];
    names.push(line.swatch.name);
    byCollection.set(line.collectionName, names);
  }

  const parts = Array.from(byCollection.entries()).map(
    ([collectionName, swatchNames]) =>
      `${collectionName}: ${swatchNames.join(", ")}`,
  );

  const description = `Samples — ${parts.join("; ")}`;
  if (description.length <= MAX_DESCRIPTION_LENGTH) {
    return description;
  }
  return `${description.slice(0, MAX_DESCRIPTION_LENGTH - 3)}...`;
}

export async function POST(request: Request) {
  try {
    let body: CheckoutSamplesRequestBody;
    try {
      body = (await request.json()) as CheckoutSamplesRequestBody;
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const rawItems = parseCheckoutItems(body);
    if (!rawItems) {
      return NextResponse.json(
        { error: "Provide items[] or collectionSlug with swatchIds[]" },
        { status: 400 },
      );
    }

    const { lines, error } = validateCheckoutItems(rawItems);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const validSwatchCount = lines.length;
    const totalCents = calculateSampleTotalCents(validSwatchCount);
    const productDescription = buildProductDescription(lines);

    const collectionSlugs = Array.from(
      new Set(lines.map((l) => l.collectionSlug)),
    );
    const isMultiCollection = collectionSlugs.length > 1;

    const productName = isMultiCollection
      ? `Leather Samples (${validSwatchCount}) — ${collectionSlugs.length} collections`
      : `${lines[0].collectionName} — Leather Samples (${validSwatchCount})`;

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: totalCents,
            product_data: {
              name: productName,
              description: productDescription,
            },
          },
        },
      ],
      metadata: {
        sampleCount: String(validSwatchCount),
        collectionSlugs: collectionSlugs.join(","),
        swatchKeys: lines
          .map((l) => `${l.collectionSlug}:${l.swatch.id}`)
          .join(","),
        swatchNames: lines.map((l) => l.swatch.name).join(","),
        collectionNames: Array.from(
          new Set(lines.map((l) => l.collectionName)),
        ).join(","),
      },
      success_url: getSampleCheckoutSuccessUrl(),
      cancel_url: getSampleCheckoutCancelUrl(),
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Unable to create checkout session" },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout/samples]", err);
    const message =
      err instanceof Error ? err.message : "Checkout session failed";
    const status = message.includes("Unknown leather collection") ? 404 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
