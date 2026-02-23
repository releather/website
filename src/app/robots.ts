import type { MetadataRoute } from "next";

/**
 * Robots.txt for SEO (Next.js App Router).
 * Served at /robots.txt. Allows crawlers by default; add disallow rules below for any
 * staging, admin, or private segments. Placeholders are left for manual review.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow placeholders (uncomment and adjust paths if you add staging/admin routes):
        // disallow: ["/staging/", "/admin/", "/api/private/"],
      },
    ],
    sitemap: "https://www.releather.com/sitemap.xml",
  };
}
