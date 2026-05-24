import crypto from "crypto";

const DEFAULT_CLOUD_NAME = "releather-com";
const ESTIMATE_UPLOAD_FOLDER = "estimate-uploads";

type CloudinaryConfig = {
  cloudName: string;
  apiKey: string;
  apiSecret: string;
};

type CloudinaryUploadResponse = {
  secure_url?: string;
  error?: { message?: string };
};

export function isCloudinaryConfigured(): boolean {
  return Boolean(
    process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET,
  );
}

function getCloudinaryConfig(): CloudinaryConfig {
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!apiKey || !apiSecret) {
    throw new Error("CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET are required");
  }

  return {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME ?? DEFAULT_CLOUD_NAME,
    apiKey,
    apiSecret,
  };
}

function signCloudinaryParams(
  params: Record<string, string>,
  apiSecret: string,
): string {
  const payload = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  return crypto.createHash("sha1").update(`${payload}${apiSecret}`).digest("hex");
}

function cloudinaryResourceType(mimeType: string, filename: string): "image" | "raw" {
  if (mimeType.startsWith("image/")) return "image";

  const extension = filename.split(".").pop()?.toLowerCase() ?? "";
  if (["jpg", "jpeg", "png", "gif", "webp", "heic", "heif", "avif", "bmp", "tif", "tiff"].includes(extension)) {
    return "image";
  }

  return "raw";
}

/** Upload a form file to Cloudinary and return its HTTPS URL. */
export async function uploadFileToCloudinary(
  file: File,
  filename: string,
): Promise<string> {
  const { cloudName, apiKey, apiSecret } = getCloudinaryConfig();
  const buffer = Buffer.from(await file.arrayBuffer());
  const mimeType = file.type || "application/octet-stream";
  const resourceType = cloudinaryResourceType(mimeType, filename);
  const timestamp = Math.floor(Date.now() / 1000).toString();

  const paramsToSign: Record<string, string> = {
    folder: ESTIMATE_UPLOAD_FOLDER,
    timestamp,
  };

  const signature = signCloudinaryParams(paramsToSign, apiSecret);
  const body = new FormData();
  body.append(
    "file",
    new Blob([buffer], { type: mimeType }),
    filename,
  );
  body.append("api_key", apiKey);
  body.append("timestamp", timestamp);
  body.append("folder", ESTIMATE_UPLOAD_FOLDER);
  body.append("signature", signature);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
    {
      method: "POST",
      body,
    },
  );

  const data = (await response.json()) as CloudinaryUploadResponse;

  if (!response.ok || !data.secure_url) {
    throw new Error(
      data.error?.message ?? "Unable to upload file to Cloudinary",
    );
  }

  return data.secure_url;
}

export function isHostedHttpsUrl(url: string): boolean {
  return url.startsWith("https://");
}
