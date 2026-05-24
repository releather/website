import { NextResponse } from "next/server";
import {
  buildEstimateFilloutQuestions,
  validateEstimateForm,
  type EstimateFormValues,
} from "@/lib/estimateForm";
import { parseEstimateUploads, parseEstimateValues } from "@/lib/estimateFileUpload";
import { sendEstimateNotificationEmail } from "@/lib/estimateEmail";
import { createEstimateSubmission } from "@/lib/fillout";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const valuesRaw = formData.get("values");

    if (typeof valuesRaw !== "string") {
      return NextResponse.json({ error: "Missing form values" }, { status: 400 });
    }

    let parsedValues: unknown;
    try {
      parsedValues = JSON.parse(valuesRaw);
    } catch {
      return NextResponse.json({ error: "Invalid form values JSON" }, { status: 400 });
    }

    const values = parseEstimateValues(parsedValues);
    if (!values) {
      return NextResponse.json({ error: "Invalid form values" }, { status: 400 });
    }

    const errors = validateEstimateForm(values);
    const errorMessages = Object.values(errors);
    if (errorMessages.length > 0) {
      return NextResponse.json({ error: errorMessages[0], errors }, { status: 400 });
    }

    const { uploads, error: uploadError } = await parseEstimateUploads(formData);
    if (uploadError) {
      return NextResponse.json({ error: uploadError }, { status: 400 });
    }

    const questions = buildEstimateFilloutQuestions(
      values as EstimateFormValues,
      uploads,
    );
    const result = await createEstimateSubmission(questions);

    try {
      await sendEstimateNotificationEmail(
        values as EstimateFormValues,
        uploads,
        result.submissionId,
      );
    } catch (emailErr) {
      console.error("[estimate] email notification failed", emailErr);
    }

    return NextResponse.json({
      ok: true,
      submissionId: result.submissionId ?? null,
    });
  } catch (err) {
    console.error("[estimate]", err);
    const message =
      err instanceof Error ? err.message : "Unable to submit estimate request";
    const status = message.includes("FILLOUT_API_KEY") ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
