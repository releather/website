import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import JsonLd from "@/components/JsonLd";

const title = "How to Safely Clean your Leather Sofa | ReLeather";
const description =
  "Learn the recommended steps and instructions to make your next leather cleaning a success. Quick guide and leather care products.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/how-to-safely-clean-your-leather-sofa" },
  openGraph: { url: "/blog/how-to-safely-clean-your-leather-sofa", title, description, type: "article" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Safely Clean your Leather Sofa",
  description,
  url: "https://www.releather.com/blog/how-to-safely-clean-your-leather-sofa",
  publisher: { "@type": "Organization", name: "ReLeather LLC", url: "https://www.releather.com" },
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.releather.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.releather.com/blog" },
    { "@type": "ListItem", position: 3, name: "How to Safely Clean your Leather Sofa", item: "https://www.releather.com/blog/how-to-safely-clean-your-leather-sofa" },
  ],
};

export default function HowToSafelyCleanYourLeatherSofaPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="How to Safely Clean your Leather Sofa"
            body={
              <div className="overflow-hidden">
                <p className="font-sans text-base leading-relaxed text-gray-800">
                  Learn the recommended steps and instructions needed to make your next leather cleaning duties a success. Use this quick guide and see results.{" "}
                  <Link href="/services/leather-cleaning" title="Leather Cleaning Services" className="font-medium text-releather-orange underline underline-offset-2 hover:text-black">
                    Leather Cleaning Services
                  </Link>
                </p>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.releather.com/blog/how-to-safely-clean-your-leather-sofa"
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
              How to Safely Clean your Leather Sofa
            </h2>
            <p className="mb-6 font-sans text-lg font-medium text-gray-700">
              Leather Cleaning Conditioning Best Leather Cleaner Product
            </p>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              When house cleaning is on the agenda, your comfy leather couch is something you don&apos;t want to miss. Regular cleaning and conditioning at least once a month or every three months helps extend the life of your furniture. Choosing the right leather care products makes the difference.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              Knowing the type of leather you have in your living room is important (refer to our previous post). Chemical polishes and oily cleaners can damage delicate leathers. Our customers trust our professional Leather Conditioner which is a unique wax free lotion, ReLeather Leather Care Lotion. It cleans polishes and protects leaving a soft, satiny finish that prevents water spotting and cracking on leather.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              You can safely apply this lotion with a sponge or dry cloth on smooth leathers, reptiles, and exotic skins. Not for nubuck or suede.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              Add this unique conditioning formula to your cleaning supplies. You will notice the difference next time you wipe down your leather sofa.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="mb-6 border-b-2 border-releather-orange pb-2 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Where to buy?
            </h2>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              <Link href="/leather-conditioner" title="Buy Leather Conditioner Available on ReLeather.com" className="font-medium text-releather-orange underline underline-offset-2 hover:text-black">
                Buy Leather Conditioner Available on ReLeather.com
              </Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
