import type { MetadataRoute } from "next";

/**
 * Dynamic sitemap for SEO (Next.js App Router).
 * Served at /sitemap.xml. Lists all public pages with absolute URLs (metadataBase).
 * Add or remove paths here when new pages are added. Optional lastModified for indexing.
 */
const BASE = "https://www.releather.com";

function url(path: string, lastModified?: Date): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE}${path}`,
    lastModified: lastModified ?? new Date(),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    url("/", now),
    url("/services", now),
    url("/estimate", now),
    url("/about-us", now),
    url("/blog", now),
    url("/gallery", now),
    url("/testimonials", now),
    url("/sitemap", now),
    // Locations
    url("/leather-restoration-orange-county", now),
    url("/leather-furniture-repair-in-los-angeles", now),
    url("/leather-furniture-repair-in-san-diego", now),
    // Products
    url("/leather-conditioner", now),
    url("/leather-for-upholstery", now),
    // Services (sub)
    url("/services/leather-cleaning", now),
    url("/services/leather-restoration", now),
    url("/services/leather-dyeing", now),
    url("/services/leather-upholstery", now),
    url("/services/restuffing-foam-replacement", now),
    // Blog posts
    url("/blog/3-reasons-repair-vs-replace-leather", now),
    url("/blog/how-to-safely-clean-your-leather-sofa", now),
    url("/blog/what-is-aniline-leather-and-pigmented-leather", now),
    url("/blog/5-leather-issues-of-leather-furniture", now),
    // Works / Gallery
    url("/leather-sofa-dyeing", now),
    url("/leather-restoration-lounge-chairs", now),
    url("/leather-restoration-dining-chairs", now),
    url("/gallery/leather-redyeing-handbag", now),
    url("/leather-restoration-briefcase", now),
    url("/leather-restoration-jackets-coats", now),
    url("/auto-leather-dyeing", now),
    url("/aircraft-leather-cleaning", now),
    // Content / info
    url("/types-of-leather", now),
    url("/aniline-leather-cleaning", now),
    url("/what-is-bonded-leather", now),
    url("/leather-desk-restoration", now),
    url("/eames-chair-repair", now),
    url("/replacement-cushions-for-leather-couch", now),
    url("/designer-purse-restoration", now),
    url("/tumi-briefcase-repair", now),
    url("/restoration-hardware-leather-sofa-repair", now),
    url("/leather-car-steering-wheel-restoration-in-orange-county", now),
  ];
}
