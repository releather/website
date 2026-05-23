import nodemailer from "nodemailer";
import type Stripe from "stripe";

const SMTP_HOST = "smtp.office365.com";
const SMTP_PORT = 587;

export const LEATHER_SAMPLES_ORDER_TYPE = "leather_samples" as const;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatShippingAddress(
  address: Stripe.Address | null | undefined,
): string {
  if (!address) return "—";
  const lines = [
    address.line1,
    address.line2,
    [address.city, address.state, address.postal_code].filter(Boolean).join(", "),
    address.country,
  ].filter(Boolean);
  return lines.join("\n");
}

function parseSwatchLines(metadata: Stripe.Metadata): string[] {
  const keys = metadata.swatchKeys?.split(",").filter(Boolean) ?? [];
  const names = metadata.swatchNames?.split(",").filter(Boolean) ?? [];

  if (keys.length === 0) {
    return names.length > 0 ? names : ["—"];
  }

  return keys.map((key, index) => {
    const name = names[index]?.trim();
    if (name) return name;
    const [, swatchId] = key.split(":");
    return swatchId ?? key;
  });
}

export type SampleOrderEmailDetails = {
  sessionId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingName: string;
  shippingAddress: string;
  swatchLines: string[];
  sampleCount: string;
  collectionNames: string;
  amountTotalCents: number | null;
  currency: string | null;
};

export function sampleOrderDetailsFromCheckoutSession(
  session: Stripe.Checkout.Session,
): SampleOrderEmailDetails | null {
  if (session.metadata?.orderType !== LEATHER_SAMPLES_ORDER_TYPE) {
    return null;
  }

  const shipping = session.collected_information?.shipping_details;
  const shippingAddress =
    shipping?.address ?? session.customer_details?.address;
  const shippingName =
    shipping?.name?.trim() ||
    session.customer_details?.name?.trim() ||
    "—";

  const customerName =
    session.customer_details?.name?.trim() ||
    shippingName ||
    "—";

  const customerEmail =
    session.customer_details?.email?.trim() ||
    session.customer_email?.trim() ||
    "—";

  const customerPhone = session.customer_details?.phone?.trim() || "—";

  return {
    sessionId: session.id,
    customerName,
    customerEmail,
    customerPhone,
    shippingName,
    shippingAddress: formatShippingAddress(shippingAddress),
    swatchLines: parseSwatchLines(session.metadata ?? {}),
    sampleCount: session.metadata?.sampleCount ?? "—",
    collectionNames: session.metadata?.collectionNames ?? "—",
    amountTotalCents: session.amount_total,
    currency: session.currency,
  };
}

function formatAmount(amountTotalCents: number | null, currency: string | null): string {
  if (amountTotalCents == null) return "—";
  const code = (currency ?? "usd").toUpperCase();
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
  }).format(amountTotalCents / 100);
}

function buildNotificationHtml(details: SampleOrderEmailDetails): string {
  const swatchList = details.swatchLines
    .map(
      (line) =>
        `<li style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:14px;color:#374151;">${escapeHtml(line)}</li>`,
    )
    .join("");

  const rows: Array<{ label: string; value: string }> = [
    { label: "Name", value: details.customerName },
    { label: "Email", value: details.customerEmail },
    { label: "Phone", value: details.customerPhone },
    { label: "Ship to (name)", value: details.shippingName },
    { label: "Shipping address", value: details.shippingAddress },
    { label: "Collections", value: details.collectionNames },
    { label: "Sample count", value: details.sampleCount },
    {
      label: "Amount paid",
      value: formatAmount(details.amountTotalCents, details.currency),
    },
  ];

  const tableRows = rows
    .map(
      (row) => `
        <tr>
          <th align="left" valign="top" style="padding:10px 12px;border-bottom:1px solid #e5e7eb;background:#f9fafb;font-family:Arial,sans-serif;font-size:14px;color:#111;width:160px;">
            ${escapeHtml(row.label)}
          </th>
          <td valign="top" style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-family:Arial,sans-serif;font-size:14px;color:#374151;white-space:pre-wrap;">
            ${escapeHtml(row.value)}
          </td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#ffffff;">
    <div style="max-width:640px;margin:0 auto;border:2px solid #000;">
      <div style="padding:16px 20px;background:#f8991d;border-bottom:2px solid #000;">
        <h1 style="margin:0;font-family:Arial,sans-serif;font-size:20px;font-weight:700;color:#000;">
          New leather sample order
        </h1>
      </div>
      <div style="padding:20px;">
        <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;color:#374151;">
          A customer completed sample checkout on Stripe.
        </p>
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:1px solid #e5e7eb;margin-bottom:16px;">
          ${tableRows}
        </table>
        <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#111;">
          Swatches ordered
        </p>
        <ul style="margin:0;padding-left:20px;">
          ${swatchList}
        </ul>
        <p style="margin:16px 0 0;font-family:Arial,sans-serif;font-size:12px;color:#6b7280;">
          Stripe session ID: ${escapeHtml(details.sessionId)}
        </p>
      </div>
    </div>
  </body>
</html>`;
}

function buildPlainTextBody(details: SampleOrderEmailDetails): string {
  return [
    "New leather sample order",
    "",
    `Name: ${details.customerName}`,
    `Email: ${details.customerEmail}`,
    `Phone: ${details.customerPhone}`,
    `Ship to (name): ${details.shippingName}`,
    `Shipping address: ${details.shippingAddress.replace(/\n/g, ", ")}`,
    `Collections: ${details.collectionNames}`,
    `Sample count: ${details.sampleCount}`,
    `Amount paid: ${formatAmount(details.amountTotalCents, details.currency)}`,
    "",
    "Swatches ordered:",
    ...details.swatchLines.map((line) => `- ${line}`),
    "",
    `Stripe session ID: ${details.sessionId}`,
  ].join("\n");
}

export async function sendSampleOrderNotificationEmail(
  details: SampleOrderEmailDetails,
): Promise<void> {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.warn(
      "[sample-order] SMTP_USER or SMTP_PASS not configured; skipping email notification",
    );
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subject = `Leather sample order — ${details.customerName}`;

  await transporter.sendMail({
    from: smtpUser,
    to: smtpUser,
    replyTo:
      details.customerEmail !== "—" ? details.customerEmail : undefined,
    subject,
    text: buildPlainTextBody(details),
    html: buildNotificationHtml(details),
  });
}
