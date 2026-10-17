/**
 * Spam checks for the leather material quote form.
 * The live junk looks like one long mixed-case token in name, colors, and
 * quantity, plus a Gmail address broken up with extra dots.
 */

/** Field name posted with the quote form. Real people never see it. */
export const QUOTE_HONEYPOT_FIELD = "rl_hp";

/** Long enough that a person cannot fill the quote form, short enough for autofill after the page has loaded. */
export const MIN_QUOTE_SUBMIT_MS = 2000;

const MAX_QUOTE_SUBMIT_MS = 14 * 24 * 60 * 60 * 1000;
const CLOCK_SKEW_MS = 10 * 60 * 1000;

/**
 * True when a single word looks like the random tokens in the spam
 * ("JQSlutlWhTCyarqPLeMvIHdX"), not a name, color, or quantity.
 */
export function isGibberishText(value: string): boolean {
  return value
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .some(isGibberishToken);
}

function isGibberishToken(token: string): boolean {
  const letters = token.replace(/[^A-Za-z]/g, "");
  if (letters.length < 18) return false;
  if (letters.length / token.length < 0.8) return false;

  let upper = 0;
  let lower = 0;
  let transitions = 0;
  let previousWasUpper: boolean | null = null;

  for (const char of letters) {
    const isUpper = char >= "A" && char <= "Z";
    if (isUpper) upper += 1;
    else lower += 1;
    if (previousWasUpper !== null && previousWasUpper !== isUpper) {
      transitions += 1;
    }
    previousWasUpper = isUpper;
  }

  return upper >= 4 && lower >= 4 && transitions >= 8;
}

/** Gmail-style addresses like esexigu.v.u.be.4.6.4@gmail.com. */
export function isDotStuffedEmail(email: string): boolean {
  const local = email.trim().split("@")[0] ?? "";
  if (!local) return false;
  return (local.match(/\./g) ?? []).length >= 4;
}

export function isQuoteHoneypotTripped(value: unknown): boolean {
  if (typeof value === "string") return value.trim().length > 0;
  return value != null && value !== false;
}

export function isQuoteSubmittedTooFast(
  startedAt: unknown,
  now = Date.now(),
): boolean {
  if (typeof startedAt !== "number" || !Number.isFinite(startedAt)) return true;

  const elapsed = now - startedAt;
  if (elapsed < 0) return elapsed < -CLOCK_SKEW_MS;
  if (elapsed < MIN_QUOTE_SUBMIT_MS) return true;
  if (elapsed > MAX_QUOTE_SUBMIT_MS) return true;
  return false;
}
