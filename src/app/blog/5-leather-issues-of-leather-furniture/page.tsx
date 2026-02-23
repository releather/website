import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import JsonLd from "@/components/JsonLd";

const title = "5 Common Issues of Leather Furniture | ReLeather";
const description =
  "Learn about the most common leather problems with couches, chairs, dining chairs, and more. Professional leather services that resolve each issue.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/5-leather-issues-of-leather-furniture" },
  openGraph: { url: "/blog/5-leather-issues-of-leather-furniture", title, description, type: "article" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 Common Issues of Leather Furniture",
  description,
  url: "https://www.releather.com/blog/5-leather-issues-of-leather-furniture",
  publisher: { "@type": "Organization", name: "ReLeather LLC", url: "https://www.releather.com" },
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.releather.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.releather.com/blog" },
    { "@type": "ListItem", position: 3, name: "5 Common Issues of Leather Furniture", item: "https://www.releather.com/blog/5-leather-issues-of-leather-furniture" },
  ],
};

const issues = [
  {
    title: "Direct Light",
    body: "Over time exposure to direct sunlight causes color fading and discoloration in leather upholstery. Sun damage can eventually dry out, harden, and crack formerly rich and supple leather.",
    offer: "We offer Leather Restoration to treat color fading, drying, and discoloration.",
  },
  {
    title: "Pet Damage",
    body: "Dogs and cats are the usual suspects when delicate leather cushions are chewed, scratched or clawed. We make routine house calls to customers with puppies that like to dismantle leather chairs and couches.",
    offer: "We offer Leather Upholstery to replace damaged leather with new matching leather.",
  },
  {
    title: "Accidents",
    category: "Leather Accidents Rips Cuts Tears",
    body: "Accidental stains, tears, or burns can present challenging problems. Some finished leathers are more susceptible to stains caused by soft drinks, milk, cosmetics, and ink. Finer grades of leather are also easier to rip and puncture.",
    offer: "We offer Leather Restoration to treat stained leather and Leather Upholstery to reupholster new matching leather.",
  },
  {
    title: "Body Oils",
    category: "Leather Accidents Rips Cuts Tears",
    body: "Leather is a natural product that absorbs body oils and perspiration from skin and hair. Over time oil accumulation darkens and later cracks leather upholstery such as headrests and armrests.",
    offer: "We offer Leather Restoration to treat stained leather and Leather Upholstery to reupholster new matching leather.",
  },
  {
    title: "Poor Care",
    category: "Leather Care Poor Maintenance",
    body: "Damage due to improper cleaning techniques or negligence is a major issue. We recommend using natural cleaning solutions and preparations to periodically clean and maintain leather upholstery.",
    offer: "We offer Leather Cleaning and Conditioning service. We also offer our eco-friendly ReLeather Cleaner and specialized wax-free ReLeather Conditioner.",
  },
];

export default function FiveLeatherIssuesOfLeatherFurniturePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="5 Common Issues with Leather Furniture"
            body={
              <div className="overflow-hidden">
                <p className="font-sans text-base leading-relaxed text-gray-800">
                  Learn about the most common leather problems customers experience with leather couches, chairs, dining chairs, and more. We highlight the corresponding professional leather service that resolves each issue.{" "}
                  <Link href="/services" title="Leather Restoration Services" className="font-medium text-releather-orange underline underline-offset-2 hover:text-black">
                    Leather Restoration Services
                  </Link>
                  .
                </p>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.releather.com/blog/5-leather-issues-of-leather-furniture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="float-right ml-4 mb-4 block font-sans font-medium text-releather-orange underline underline-offset-2 hover:text-black"
                >
                  Share on Facebook
                </a>
              </div>
            }
          />

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="mb-6 border-b-2 border-releather-orange pb-2 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              5 Common Issues of Leather Furniture
            </h2>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              As leather repair technicians we are the first line of defense in treating unexpected and expected leather issues.  We have seen and fixed the many sticky situations leather owners face during the life of their leather furniture. Keeping leather looking good and intact is not an easy thing. Leather buyers should be well aware of this disclaimer.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              This informative list is intended for leather consumers, designer, manufacturers, and retailers. Research shows retail sales associates with common leather knowledge boosts retail sales of furniture. Advising the consumer about the potential problems associated with leather is a win-win situation for both the retailer and the customer. Below we outline 5 common leather issues and our recommended leather fixes:
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <ul className="list-none space-y-10 p-0">
              {issues.map((issue, index) => (
                <li key={index} className="border-4 border-black p-6">
                  {issue.category != null && (
                    <h3 className="font-display text-lg font-normal tracking-tight text-black">
                      {issue.category}
                    </h3>
                  )}
                  <h2 className="mt-2 font-display text-xl font-normal tracking-tight text-black sm:text-2xl">
                    {issue.title}
                  </h2>
                  <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
                    {issue.body}
                  </p>
                  <p className="mt-4 font-sans text-base font-medium leading-relaxed text-gray-800">
                    {issue.offer}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
