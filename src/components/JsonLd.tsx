/**
 * Renders JSON-LD structured data for SEO. Use for Organization, LocalBusiness,
 * Article, FAQPage, BreadcrumbList, etc. Safe to use in server components.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
