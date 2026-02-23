import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";

/**
 * HTML Sitemap for SEO and human-readable discovery.
 * Lists all main site pages and categories. Minimal styling to avoid layout changes.
 */
export const metadata: Metadata = {
  title: "Sitemap | ReLeather",
  description: "List of all pages on ReLeather. Services, blog, gallery, locations, and leather restoration resources.",
  alternates: { canonical: "/sitemap" },
  openGraph: { url: "/sitemap", title: "Sitemap | ReLeather", description: "List of all pages on ReLeather.", type: "website" },
  twitter: { card: "summary_large_image" as const, title: "Sitemap | ReLeather", description: "List of all pages on ReLeather." },
};

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/estimate", label: "Estimate" },
  { href: "/about-us", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
];

const serviceLinks = [
  { href: "/services/leather-cleaning", label: "Leather Cleaning" },
  { href: "/services/leather-restoration", label: "Leather Restoration" },
  { href: "/services/leather-dyeing", label: "Leather Dyeing" },
  { href: "/services/leather-upholstery", label: "Leather Upholstery" },
  { href: "/services/restuffing-foam-replacement", label: "Restuffing / Foam Replacement" },
];

const productLinks = [
  { href: "/leather-conditioner", label: "Leather Conditioner" },
  { href: "/leather-for-upholstery", label: "Leather for Upholstery" },
];

const worksLinks = [
  { href: "/gallery", label: "Gallery (Featured)" },
  { href: "/leather-sofa-dyeing", label: "Couches" },
  { href: "/leather-restoration-lounge-chairs", label: "Lounge Chairs" },
  { href: "/leather-restoration-dining-chairs", label: "Dining Chairs" },
  { href: "/gallery/leather-redyeing-handbag", label: "Handbags" },
  { href: "/leather-restoration-briefcase", label: "Briefcase" },
  { href: "/leather-restoration-jackets-coats", label: "Jackets" },
  { href: "/auto-leather-dyeing", label: "Automotive" },
  { href: "/aircraft-leather-cleaning", label: "Aircraft" },
];

const blogLinks = [
  { href: "/blog/3-reasons-repair-vs-replace-leather", label: "3 Reasons to Repair Over Replacing Leather" },
  { href: "/blog/how-to-safely-clean-your-leather-sofa", label: "How to Safely Clean your Leather Sofa" },
  { href: "/blog/what-is-aniline-leather-and-pigmented-leather", label: "What is Aniline Leather and Pigmented Leather?" },
  { href: "/blog/5-leather-issues-of-leather-furniture", label: "5 Common Issues of Leather Furniture" },
];

const locationLinks = [
  { href: "/leather-restoration-orange-county", label: "Orange County" },
  { href: "/leather-furniture-repair-in-los-angeles", label: "Los Angeles" },
  { href: "/leather-furniture-repair-in-san-diego", label: "San Diego" },
];

const infoLinks = [
  { href: "/types-of-leather", label: "Types of Leather" },
  { href: "/aniline-leather-cleaning", label: "Aniline Leather Cleaning" },
  { href: "/what-is-bonded-leather", label: "What is Bonded Leather?" },
  { href: "/leather-desk-restoration", label: "Leather Desk Restoration" },
  { href: "/eames-chair-repair", label: "Eames Chair Repair" },
  { href: "/replacement-cushions-for-leather-couch", label: "Replacement Cushions for Leather Couch" },
  { href: "/designer-purse-restoration", label: "Designer Purse Restoration" },
  { href: "/tumi-briefcase-repair", label: "Tumi Briefcase Repair" },
  { href: "/restoration-hardware-leather-sofa-repair", label: "Restoration Hardware Leather Sofa Repair" },
  { href: "/leather-car-steering-wheel-restoration-in-orange-county", label: "Leather Car Steering Wheel Restoration" },
];

function LinkSection({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <section className="border-b border-gray-200 pb-6 last:border-b-0">
      <h2 className="mb-3 font-display text-xl font-normal tracking-tight text-black">
        {title}
      </h2>
      <ul className="list-none space-y-1.5 p-0">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="font-sans text-base text-gray-800 underline underline-offset-2 hover:text-releather-orange"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function SitemapPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <h1 className="mb-8 font-display text-3xl font-normal tracking-tight text-black sm:text-4xl">
            Sitemap
          </h1>
          <p className="mb-10 font-sans text-base text-gray-700">
            All main pages on ReLeather. Use this list to find services, blog posts, gallery items, locations, and leather care resources.
          </p>
          <div className="space-y-8">
            <LinkSection title="Main" links={mainLinks} />
            <LinkSection title="Services" links={serviceLinks} />
            <LinkSection title="Products" links={productLinks} />
            <LinkSection title="Works &amp; Gallery" links={worksLinks} />
            <LinkSection title="Blog" links={blogLinks} />
            <LinkSection title="Locations" links={locationLinks} />
            <LinkSection title="Leather Care &amp; Info" links={infoLinks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
