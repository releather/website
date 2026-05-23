import { NextResponse } from "next/server";
import {
  buildFilloutQuestionSubmissions,
  validateLeatherMaterialQuoteForm,
  type LeatherMaterialQuoteFormValues,
} from "@/lib/leatherMaterialQuoteForm";
import { createLeatherMaterialQuoteSubmission } from "@/lib/fillout";
import { sendLeatherMaterialQuoteNotificationEmail } from "@/lib/leatherMaterialQuoteEmail";

type LeatherMaterialQuoteRequestBody = {
  values?: unknown;
};

function isAddress(value: unknown): value is LeatherMaterialQuoteFormValues["address"] {
  if (!value || typeof value !== "object") return false;
  const a = value as Record<string, unknown>;
  return (
    typeof a.address === "string" &&
    typeof a.city === "string" &&
    typeof a.state === "string" &&
    typeof a.zipCode === "string" &&
    typeof a.country === "string"
  );
}

function parseFormValues(raw: unknown): LeatherMaterialQuoteFormValues | null {
  if (!raw || typeof raw !== "object") return null;
  const body = raw as Record<string, unknown>;
  if (!isAddress(body.address)) return null;

  return {
    name: typeof body.name === "string" ? body.name : "",
    company: typeof body.company === "string" ? body.company : "",
    address: body.address,
    phone: typeof body.phone === "string" ? body.phone : "",
    email: typeof body.email === "string" ? body.email : "",
    leatherServiceOptionId:
      typeof body.leatherServiceOptionId === "string"
        ? body.leatherServiceOptionId
        : body.leatherServiceOptionId === null
          ? null
          : null,
    colors: typeof body.colors === "string" ? body.colors : "",
    quantity: typeof body.quantity === "string" ? body.quantity : "",
    addFurtherDetails: Boolean(body.addFurtherDetails),
    furtherDetails: typeof body.furtherDetails === "string" ? body.furtherDetails : "",
    mailingList: Boolean(body.mailingList),
  };
}

export async function POST(request: Request) {
  try {
    let body: LeatherMaterialQuoteRequestBody;
    try {
      body = (await request.json()) as LeatherMaterialQuoteRequestBody;
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const values = parseFormValues(body.values);
    if (!values) {
      return NextResponse.json({ error: "Invalid form values" }, { status: 400 });
    }

    const errors = validateLeatherMaterialQuoteForm(values);
    const errorMessages = Object.values(errors);
    if (errorMessages.length > 0) {
      return NextResponse.json({ error: errorMessages[0], errors }, { status: 400 });
    }

    const questions = buildFilloutQuestionSubmissions(values);
    const result = await createLeatherMaterialQuoteSubmission(questions);

    try {
      await sendLeatherMaterialQuoteNotificationEmail(
        values,
        result.submissionId,
      );
    } catch (emailErr) {
      console.error(
        "[leather-material-quote] email notification failed",
        emailErr,
      );
    }

    return NextResponse.json({
      ok: true,
      submissionId: result.submissionId ?? null,
    });
  } catch (err) {
    console.error("[leather-material-quote]", err);
    const message =
      err instanceof Error ? err.message : "Unable to submit quote request";
    const status = message.includes("FILLOUT_API_KEY") ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
