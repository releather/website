/**
 * Adds Cloudinary `f_auto` so the CDN serves WebP/AVIF when the browser supports it.
 * Use for on-page display URLs only — not lightbox / full-resolution popups.
 */
export function cloudinaryDisplayUrl(url: string): string {
  if (!url.includes("res.cloudinary.com")) return url;
  if (url.includes("/f_auto") || url.includes("/f_webp")) return url;
  return url.replace("/upload/", "/upload/f_auto/");
}
