import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import JsonLd from "@/components/JsonLd";

const title = "What is Aniline Leather and Pigmented Leather? | ReLeather";
const description =
  "Gain valuable knowledge about aniline and pigmented leather used in furniture and auto upholstery. Technical differences to make an informed buying decision.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/what-is-aniline-leather-and-pigmented-leather" },
  openGraph: { url: "/blog/what-is-aniline-leather-and-pigmented-leather", title, description, type: "article" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What is Aniline Leather and Pigmented Leather?",
  description,
  url: "https://www.releather.com/blog/what-is-aniline-leather-and-pigmented-leather",
  publisher: { "@type": "Organization", name: "ReLeather LLC", url: "https://www.releather.com" },
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.releather.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.releather.com/blog" },
    { "@type": "ListItem", position: 3, name: "What is Aniline Leather and Pigmented Leather?", item: "https://www.releather.com/blog/what-is-aniline-leather-and-pigmented-leather" },
  ],
};

export default function WhatIsAnilineLeatherAndPigmentedLeatherPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="What is Aniline Leather and Pigmented Leather ?"
            body={
              <div className="overflow-hidden">
                <p className="font-sans text-base leading-relaxed text-gray-800">
                  Gain valuable knowledge about two of the most common types of leather used in furniture and auto upholstery and in the goods and garment industry. Understanding the technical difference between Aniline and Pigmented leather will help you make an informed decision when buying your next leather article.{" "}
                  <Link href="/services" title="Leather Restoration Services" className="font-medium text-releather-orange underline underline-offset-2 hover:text-black">
                    Leather Restoration Services
                  </Link>
                </p>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.releather.com/blog/what-is-aniline-leather-and-pigmented-leather"
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
              What is Aniline Leather and Pigmented Leather ?
            </h2>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              In today&apos;s high end showrooms leather furniture is commonly upholstered in aniline leather or pigmented leather. Aniline leather is dipped in aniline dye while pigmented leather is finished with a coating of pigmented dye. Pigmented coatings, which prevent liquids from penetrating the surface, can be cleaned with a damp cloth or customers inquire about our professional Leather Cleaning program. Aniline–dyed leather should especially be deep cleaned professionally.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="mb-6 border-b-2 border-releather-orange pb-2 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Whats the difference ?
            </h2>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Aniline Leather offers natural surface characteristics such as grain, pores, healed scars, wrinkles.Pigmented Leather offers more color consistency and wear durability.
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-4 font-sans text-base text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Protected Dyed Leather</dt>
                <dd>Pigmented</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Aniline Dyed Leather</dt>
                <dd>Aniline</dd>
              </div>
            </dl>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Aniline finished leather is not as resistant to wear and fading as is pigmented finished leather. However, all leather shows its wear over time (color fading, scratches, stains, etc). When that happens, regular deep cleaning does little to upgrade the appearance. In these cases our customers are recommended about our Leather Restoration and Leather Dyeing service to restore the color and finish of their furniture.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              To identify your type of leather, place a drop of water on an unseen area of the furniture. If the water doesn&apos;t soak in, the leather is likely pigmented and can be cleaned.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              Some customers are unaware of the difference and have ruined their leather. We find that the issue can be leather cleaning product itself which consist of wax and other chemical polishes. In an upcoming post, we highlight our recommended eco-friendly leather cleaner and conditioner available at ReLeather.com{" "}
              <Link href="/leather-conditioner" title="Leather Care" className="font-medium text-releather-orange underline underline-offset-2 hover:text-black">
                Leather Care
              </Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
