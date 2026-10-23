import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * The estimate page uses the Fillout embed. The native form is not rendered.
 * Bots were still posting the old form here, which created a Fillout submission
 * and sent the estimate email. Ignore those posts.
 */
export async function POST() {
  console.warn("[estimate] ignored submission to the unused native estimate form");
  return NextResponse.json({ ok: true, submissionId: null });
}
