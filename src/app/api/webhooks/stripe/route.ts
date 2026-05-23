import { NextResponse } from "next/server";
import type Stripe from "stripe";
import {
  sampleOrderDetailsFromCheckoutSession,
  sendSampleOrderNotificationEmail,
} from "@/lib/sampleOrderEmail";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("[webhooks/stripe] STRIPE_WEBHOOK_SECRET is not configured");
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 503 },
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 },
    );
  }

  let event: Stripe.Event;
  const rawBody = await request.text();

  try {
    event = getStripe().webhooks.constructEvent(
      rawBody,
      signature,
      webhookSecret,
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    console.error("[webhooks/stripe] signature verification failed:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const details = sampleOrderDetailsFromCheckoutSession(session);

    if (details) {
      try {
        await sendSampleOrderNotificationEmail(details);
      } catch (err) {
        console.error("[webhooks/stripe] sample order email failed:", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
