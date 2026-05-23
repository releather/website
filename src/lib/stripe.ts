import Stripe from "stripe";

let stripeClient: Stripe | null = null;

export function getStripe(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  if (!stripeClient) {
    stripeClient = new Stripe(secretKey);
  }

  return stripeClient;
}

export function getCheckoutBaseUrl(): string {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? "";
  if (configured) {
    return configured.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export function getSampleCheckoutSuccessUrl(): string {
  return (
    process.env.STRIPE_CHECKOUT_SUCCESS_URL ??
    `${getCheckoutBaseUrl()}/leather-for-upholstery?sample_order=success`
  );
}

export function getSampleCheckoutCancelUrl(): string {
  return (
    process.env.STRIPE_CHECKOUT_CANCEL_URL ??
    `${getCheckoutBaseUrl()}/leather-for-upholstery?sample_order=cancelled`
  );
}
