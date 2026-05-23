import nodemailer from "nodemailer";
import {
  LEATHER_QUOTE_IMAGE_OPTIONS,
  type LeatherMaterialQuoteFormValues,
} from "@/lib/leatherMaterialQuoteForm";

const SMTP_HOST = "smtp.office365.com";
const SMTP_PORT = 587;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatAddress(address: LeatherMaterialQuoteFormValues["address"]): string {
  const lines = [
    address.address.trim(),
    `${address.city.trim()}, ${address.state.trim()} ${address.zipCode.trim()}`,
    address.country.trim(),
  ].filter(Boolean);
  return lines.join("\n");
}

function getLeatherServiceLabel(values: LeatherMaterialQuoteFormValues): string {
  if (!values.leatherServiceOptionId) return "—";
  return (
    LEATHER_QUOTE_IMAGE_OPTIONS.find((o) => o.id === values.leatherServiceOptionId)
      ?.label ?? "—"
  );
}

function buildNotificationHtml(
  values: LeatherMaterialQuoteFormValues,
  submissionId?: string,
): string {
  const rows: Array<{ label: string; value: string }> = [
    { label: "Name", value: values.name.trim() || "—" },
    { label: "Company", value: values.company.trim() || "—" },
    { label: "Address", value: formatAddress(values.address) },
    { label: "Phone", value: values.phone.trim() || "—" },
    { label: "Email", value: values.email.trim() || "—" },
    { label: "Leather service", value: getLeatherServiceLabel(values) },
    { label: "Colors", value: values.colors.trim() || "—" },
    { label: "Quantity", value: values.quantity.trim() || "—" },
    {
      label: "Mailing list",
      value: values.mailingList ? "Yes" : "No",
    },
  ];

  if (values.addFurtherDetails && values.furtherDetails.trim()) {
    rows.push({
      label: "Further details",
      value: values.furtherDetails.trim(),
    });
  }

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

  const submissionLine = submissionId
    ? `<p style="margin:16px 0 0;font-family:Arial,sans-serif;font-size:12px;color:#6b7280;">Fillout submission ID: ${escapeHtml(submissionId)}</p>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#ffffff;">
    <div style="max-width:640px;margin:0 auto;border:2px solid #000;">
      <div style="padding:16px 20px;background:#f8991d;border-bottom:2px solid #000;">
        <h1 style="margin:0;font-family:Arial,sans-serif;font-size:20px;font-weight:700;color:#000;">
          New leather material quote request
        </h1>
      </div>
      <div style="padding:20px;">
        <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;color:#374151;">
          A quote form was submitted on the Leather for Upholstery page.
        </p>
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:1px solid #e5e7eb;">
          ${tableRows}
        </table>
        ${submissionLine}
      </div>
    </div>
  </body>
</html>`;
}

function buildPlainTextBody(
  values: LeatherMaterialQuoteFormValues,
  submissionId?: string,
): string {
  const lines = [
    "New leather material quote request",
    "",
    `Name: ${values.name.trim() || "—"}`,
    `Company: ${values.company.trim() || "—"}`,
    `Address: ${formatAddress(values.address).replace(/\n/g, ", ")}`,
    `Phone: ${values.phone.trim() || "—"}`,
    `Email: ${values.email.trim() || "—"}`,
    `Leather service: ${getLeatherServiceLabel(values)}`,
    `Colors: ${values.colors.trim() || "—"}`,
    `Quantity: ${values.quantity.trim() || "—"}`,
    `Mailing list: ${values.mailingList ? "Yes" : "No"}`,
  ];

  if (values.addFurtherDetails && values.furtherDetails.trim()) {
    lines.push(`Further details: ${values.furtherDetails.trim()}`);
  }

  if (submissionId) {
    lines.push("", `Fillout submission ID: ${submissionId}`);
  }

  return lines.join("\n");
}

export async function sendLeatherMaterialQuoteNotificationEmail(
  values: LeatherMaterialQuoteFormValues,
  submissionId?: string,
): Promise<void> {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.warn(
      "[leather-material-quote] SMTP_USER or SMTP_PASS not configured; skipping email notification",
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

  const customerName = values.name.trim() || "Unknown";
  const subject = `Leather material quote request — ${customerName}`;

  await transporter.sendMail({
    from: smtpUser,
    to: smtpUser,
    replyTo: values.email.trim() || undefined,
    subject,
    text: buildPlainTextBody(values, submissionId),
    html: buildNotificationHtml(values, submissionId),
  });
}
