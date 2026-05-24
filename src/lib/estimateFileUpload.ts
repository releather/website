import {
  ESTIMATE_FILE_UPLOAD_FIELD_IDS,
  ESTIMATE_MAX_FILE_BYTES,
  ESTIMATE_MAX_FILES_PER_FIELD,
  type EstimateFileUploadFieldId,
} from "@/lib/estimateForm";

export type ParsedEstimateUploads = Partial<
  Record<
    EstimateFileUploadFieldId,
    Array<{ url: string; filename: string }>
  >
>;

function sanitizeFilename(name: string): string {
  const base = name.split(/[/\\]/).pop() ?? "upload";
  return base.replace(/[^\w.\-() ]+/g, "_").slice(0, 180) || "upload";
}

async function fileToDataUrl(file: File): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());
  const mimeType = file.type || "application/octet-stream";
  return `data:${mimeType};base64,${buffer.toString("base64")}`;
}

export async function parseEstimateUploads(
  formData: FormData,
): Promise<{ uploads: ParsedEstimateUploads; error?: string }> {
  const uploads: ParsedEstimateUploads = {};

  for (const fieldId of ESTIMATE_FILE_UPLOAD_FIELD_IDS) {
    const entries = formData
      .getAll(fieldId)
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    if (entries.length > ESTIMATE_MAX_FILES_PER_FIELD) {
      return {
        uploads,
        error: `Each photo field allows up to ${ESTIMATE_MAX_FILES_PER_FIELD} files`,
      };
    }

    const parsedFiles: Array<{ url: string; filename: string }> = [];

    for (const file of entries) {
      if (file.size > ESTIMATE_MAX_FILE_BYTES) {
        return {
          uploads,
          error: "Each file must be 20 MB or smaller",
        };
      }

      parsedFiles.push({
        url: await fileToDataUrl(file),
        filename: sanitizeFilename(file.name),
      });
    }

    if (parsedFiles.length > 0) {
      uploads[fieldId] = parsedFiles;
    }
  }

  return { uploads };
}

export function parseEstimateValues(raw: unknown) {
  if (!raw || typeof raw !== "object") return null;
  const body = raw as Record<string, unknown>;
  const address = body.address;
  if (!address || typeof address !== "object") return null;
  const addressRecord = address as Record<string, unknown>;

  const itemTypes = Array.isArray(body.itemTypes)
    ? body.itemTypes.filter((item): item is string => typeof item === "string")
    : [];

  return {
    firstName: typeof body.firstName === "string" ? body.firstName : "",
    lastName: typeof body.lastName === "string" ? body.lastName : "",
    address: {
      address:
        typeof addressRecord.address === "string" ? addressRecord.address : "",
      city: typeof addressRecord.city === "string" ? addressRecord.city : "",
      state: typeof addressRecord.state === "string" ? addressRecord.state : "",
      zipCode:
        typeof addressRecord.zipCode === "string" ? addressRecord.zipCode : "",
      country:
        typeof addressRecord.country === "string"
          ? addressRecord.country
          : "United States",
    },
    email: typeof body.email === "string" ? body.email : "",
    phone: typeof body.phone === "string" ? body.phone : "",
    service: typeof body.service === "string" ? body.service : "",
    itemTypes,
    colorSelection:
      typeof body.colorSelection === "string" ? body.colorSelection : null,
    detachableFixed:
      typeof body.detachableFixed === "string" ? body.detachableFixed : null,
    sofaCount: typeof body.sofaCount === "string" ? body.sofaCount : "1",
    chairCount: typeof body.chairCount === "string" ? body.chairCount : "1",
    cushionCount:
      typeof body.cushionCount === "string" ? body.cushionCount : "",
    attachPhotos: Boolean(body.attachPhotos),
    addDetails: Boolean(body.addDetails),
    detailsText: typeof body.detailsText === "string" ? body.detailsText : "",
    mailingList: Boolean(body.mailingList),
  };
}
