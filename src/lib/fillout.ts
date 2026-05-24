import { ESTIMATE_FORM_ID } from "@/lib/estimateForm";
import type { FilloutQuestionSubmission } from "@/lib/filloutTypes";
import { LEATHER_MATERIAL_QUOTE_FORM_ID } from "@/lib/upholsteryLeatherCollections";

const DEFAULT_FILLOUT_API_BASE = "https://api.fillout.com/v1/api";

export function getFilloutApiBaseUrl(): string {
  return process.env.FILLOUT_API_BASE_URL ?? DEFAULT_FILLOUT_API_BASE;
}

export function getFilloutApiKey(): string {
  const key = process.env.FILLOUT_API_KEY;
  if (!key) {
    throw new Error("FILLOUT_API_KEY is not configured");
  }
  return key;
}

type CreateFilloutSubmissionResult = {
  submissionId?: string;
};

export async function createFilloutSubmission(
  formId: string,
  questions: FilloutQuestionSubmission[],
): Promise<CreateFilloutSubmissionResult> {
  const response = await fetch(
    `${getFilloutApiBaseUrl()}/forms/${formId}/submissions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getFilloutApiKey()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        submissions: [{ questions }],
      }),
    },
  );

  const data = (await response.json()) as {
    submissions?: Array<{ submissionId?: string }>;
    message?: string;
    error?: string;
  };

  if (!response.ok) {
    throw new Error(
      data.message ?? data.error ?? "Unable to submit quote request",
    );
  }

  return {
    submissionId: data.submissions?.[0]?.submissionId,
  };
}

export async function createLeatherMaterialQuoteSubmission(
  questions: FilloutQuestionSubmission[],
): Promise<CreateFilloutSubmissionResult> {
  return createFilloutSubmission(LEATHER_MATERIAL_QUOTE_FORM_ID, questions);
}

export async function createEstimateSubmission(
  questions: FilloutQuestionSubmission[],
): Promise<CreateFilloutSubmissionResult> {
  return createFilloutSubmission(ESTIMATE_FORM_ID, questions);
}

type FilloutSubmissionQuestion = {
  id: string;
  type?: string;
  value?: unknown;
};

type FilloutSubmissionResponse = {
  submission?: {
    questions?: FilloutSubmissionQuestion[];
  };
};

export async function getFilloutSubmission(
  formId: string,
  submissionId: string,
): Promise<FilloutSubmissionQuestion[]> {
  const response = await fetch(
    `${getFilloutApiBaseUrl()}/forms/${formId}/submissions/${submissionId}`,
    {
      headers: {
        Authorization: `Bearer ${getFilloutApiKey()}`,
      },
    },
  );

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as FilloutSubmissionResponse;
  return data.submission?.questions ?? [];
}
