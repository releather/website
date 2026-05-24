import nodemailer from "nodemailer";
import {
  showEstimateChairCount,
  showEstimateColorSelection,
  showEstimateCushionCount,
  showEstimateDetachableFixed,
  showEstimateSofaCount,
  type EstimateFormValues,
} from "@/lib/estimateForm";
import type { ParsedEstimateUploads } from "@/lib/estimateFileUpload";

const SMTP_HOST = "smtp.office365.com";
const SMTP_PORT = 587;

type EmailRow = {
  label: string;
  value: string;
  htmlValue?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeHtmlAttr(value: string): string {
  return escapeHtml(value);
}

function formatAddress(address: EstimateFormValues["address"]): string {
  const lines = [
    address.address.trim(),
    `${address.city.trim()}, ${address.state.trim()} ${address.zipCode.trim()}`,
    address.country.trim(),
  ].filter(Boolean);
  return lines.join("\n");
}

function isHostedFileUrl(url: string): boolean {
  return url.startsWith("https://") || url.startsWith("http://");
}

function collectUploadedFiles(
  uploads: ParsedEstimateUploads,
): Array<{ url: string; filename: string; hasAttachment: boolean }> {
  const files: Array<{ url: string; filename: string; hasAttachment: boolean }> =
    [];

  for (const fieldFiles of Object.values(uploads)) {
    if (!fieldFiles?.length) continue;
    for (const file of fieldFiles) {
      if (file.url) {
        files.push({
          url: file.url,
          filename: file.filename,
          hasAttachment: Boolean(file.attachment),
        });
      }
    }
  }

  return files;
}

function collectEmailAttachments(
  uploads: ParsedEstimateUploads,
): Array<{ filename: string; content: Buffer; contentType: string }> {
  const attachments: Array<{
    filename: string;
    content: Buffer;
    contentType: string;
  }> = [];

  for (const fieldFiles of Object.values(uploads)) {
    if (!fieldFiles?.length) continue;
    for (const file of fieldFiles) {
      if (file.attachment && !isHostedFileUrl(file.url)) {
        attachments.push({
          filename: file.filename,
          content: file.attachment.content,
          contentType: file.attachment.contentType,
        });
      }
    }
  }

  return attachments;
}

function formatUploadedFilesPlainText(uploads: ParsedEstimateUploads): string {
  const files = collectUploadedFiles(uploads);
  if (files.length === 0) return "—";

  return files
    .map((file) => {
      if (isHostedFileUrl(file.url)) {
        return `${file.filename}: ${file.url}`;
      }
      return file.hasAttachment
        ? `${file.filename} (attached)`
        : file.filename;
    })
    .join("\n");
}

function formatUploadedFilesHtml(uploads: ParsedEstimateUploads): string {
  const files = collectUploadedFiles(uploads);
  if (files.length === 0) return "—";

  return files
    .map((file) => {
      const label = escapeHtml(file.filename || "upload");

      if (isHostedFileUrl(file.url)) {
        return `<a href="${escapeHtmlAttr(file.url)}" target="_blank" rel="noopener noreferrer" style="color:#2563eb;text-decoration:underline;">${label}</a>`;
      }

      if (file.hasAttachment) {
        return `${label} <span style="color:#6b7280;">(attached)</span>`;
      }

      return label;
    })
    .join("<br>");
}

function buildRows(
  values: EstimateFormValues,
  uploads: ParsedEstimateUploads,
): EmailRow[] {
  const rows: EmailRow[] = [
    {
      label: "Name",
      value: `${values.firstName.trim()} ${values.lastName.trim()}`.trim() || "—",
    },
    { label: "Address", value: formatAddress(values.address) },
    { label: "Phone", value: values.phone.trim() || "—" },
    { label: "Email", value: values.email.trim() || "—" },
    { label: "Service", value: values.service.trim() || "—" },
    {
      label: "Item type(s)",
      value: values.itemTypes.length > 0 ? values.itemTypes.join(", ") : "—",
    },
  ];

  if (showEstimateColorSelection(values.service) && values.colorSelection) {
    rows.push({ label: "Color selection", value: values.colorSelection });
  }

  if (
    showEstimateDetachableFixed(values.service, values.itemTypes) &&
    values.detachableFixed
  ) {
    rows.push({
      label: "Seat cushions",
      value: values.detachableFixed,
    });
  }

  if (showEstimateSofaCount(values.itemTypes) && values.sofaCount) {
    rows.push({ label: "Sofas", value: values.sofaCount });
  }

  if (showEstimateChairCount(values.itemTypes) && values.chairCount) {
    rows.push({ label: "Chairs", value: values.chairCount });
  }

  if (showEstimateCushionCount(values.itemTypes) && values.cushionCount) {
    rows.push({ label: "Cushions", value: values.cushionCount });
  }

  rows.push({
    label: "Attach photos",
    value: values.attachPhotos ? "Yes" : "No",
  });

  if (values.attachPhotos) {
    rows.push({
      label: "Uploaded files",
      value: formatUploadedFilesPlainText(uploads),
      htmlValue: formatUploadedFilesHtml(uploads),
    });
  }

  rows.push({
    label: "Mailing list",
    value: values.mailingList ? "Yes" : "No",
  });

  if (values.addDetails && values.detailsText.trim()) {
    rows.push({
      label: "Further details",
      value: values.detailsText.trim(),
    });
  }

  return rows;
}

function buildNotificationHtml(
  values: EstimateFormValues,
  uploads: ParsedEstimateUploads,
  submissionId?: string,
): string {
  const tableRows = buildRows(values, uploads)
    .map(
      (row) => `
        <tr>
          <th align="left" valign="top" style="padding:10px 12px;border-bottom:1px solid #e5e7eb;background:#f9fafb;font-family:Arial,sans-serif;font-size:14px;color:#111;width:160px;">
            ${escapeHtml(row.label)}
          </th>
          <td valign="top" style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-family:Arial,sans-serif;font-size:14px;color:#374151;white-space:pre-wrap;">
            ${row.htmlValue ?? escapeHtml(row.value)}
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
          New estimate / quote request
        </h1>
      </div>
      <div style="padding:20px;">
        <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;color:#374151;">
          A quote form was submitted on the Estimate page.
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
  values: EstimateFormValues,
  uploads: ParsedEstimateUploads,
  submissionId?: string,
): string {
  const lines = [
    "New estimate / quote request",
    "",
    ...buildRows(values, uploads).map(
      (row) => `${row.label}: ${row.value.replace(/\n/g, ", ")}`,
    ),
  ];

  if (submissionId) {
    lines.push("", `Fillout submission ID: ${submissionId}`);
  }

  return lines.join("\n");
}

export async function sendEstimateNotificationEmail(
  values: EstimateFormValues,
  uploads: ParsedEstimateUploads,
  submissionId?: string,
): Promise<void> {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.warn(
      "[estimate] SMTP_USER or SMTP_PASS not configured; skipping email notification",
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

  const customerName =
    `${values.firstName.trim()} ${values.lastName.trim()}`.trim() || "Unknown";
  const subject = `Estimate quote request — ${customerName}`;

  const attachments = collectEmailAttachments(uploads).map((file) => ({
    filename: file.filename,
    content: file.content,
    contentType: file.contentType,
  }));

  await transporter.sendMail({
    from: smtpUser,
    to: smtpUser,
    replyTo: values.email.trim() || undefined,
    subject,
    text: buildPlainTextBody(values, uploads, submissionId),
    html: buildNotificationHtml(values, uploads, submissionId),
    attachments,
  });
}
