import type { Metadata } from "next";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import JsonLd from "@/components/JsonLd";

const title = "3 Reasons to Repair Over Replacing Leather | ReLeather";
const description =
  "Save money and understand the value of repairing quality leather furniture instead of replacing it. Three reasons to restore leather.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/3-reasons-repair-vs-replace-leather" },
  openGraph: { url: "/blog/3-reasons-repair-vs-replace-leather", title, description, type: "article" },
  twitter: { card: "summary_large_image" as const, title, description },
};

// JSON-LD: Article for blog post
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "3 Reasons to Repair Over Replacing Leather",
  description,
  url: "https://www.releather.com/blog/3-reasons-repair-vs-replace-leather",
  publisher: { "@type": "Organization", name: "ReLeather LLC", url: "https://www.releather.com" },
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.releather.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.releather.com/blog" },
    { "@type": "ListItem", position: 3, name: "3 Reasons to Repair Over Replacing Leather", item: "https://www.releather.com/blog/3-reasons-repair-vs-replace-leather" },
  ],
};

export default function ThreeReasonsRepairVsReplaceLeatherPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="3 Reasons to Repair Over Replacing Leather"
            body={
              <p className="font-sans text-base leading-relaxed text-gray-800">
                Save money and understand the value of repairing quality leather furniture instead of replacing it. Below are three strong reasons to restore leather and extend the life of your investment. Browse our services page to find the right repair options for your leather furniture.
              </p>
            }
          />

          <section className="mt-12 border-t-4 border-black pt-12">
            <p className="font-sans text-base leading-relaxed text-gray-800">
              With more leather upholstery consumers in the market, there is a growing demand for professional leather care and restoration services. Industry data shows an average growth of 3% since 2014.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="mb-6 border-b-2 border-releather-orange pb-2 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              The Value of Repairing Over Replacing
            </h2>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Repairing leather furniture is often significantly more affordable than buying new high-end pieces. Leather cleaning and repair can cost a fraction of what you would pay for brand-new designer furniture.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              A new high-end living room sofa set can easily cost $6,000 or more, which may exceed a family&apos;s budget. Restoring existing furniture offers a practical and financially responsible alternative.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="mb-6 border-b-2 border-releather-orange pb-2 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Why Restore Leather?
            </h2>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Leather furniture is an investment, and regular maintenance helps preserve its beauty and durability. Leather improves with age, but occasional professional attention ensures it maintains its lasting quality.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="mb-4 font-display text-xl font-normal tracking-tight text-black sm:text-2xl">
              1. Quality Upholstery
            </h2>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Well-made leather furniture is an excellent candidate for repair. If your furniture has been in the family for years, it is likely constructed with high-quality materials and craftsmanship. Extending its life through restoration protects that value.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="mb-4 font-display text-xl font-normal tracking-tight text-black sm:text-2xl">
              2. One-of-a-Kind Design
            </h2>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Many homeowners are attached to the unique look and feel of their sofa. If you cannot find a similar style in today&apos;s showrooms, restoring your current piece allows you to keep the design you love.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              Quality materials such as the frame, hardware, and padding are often built to last, making repair a smart choice.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="mb-4 font-display text-xl font-normal tracking-tight text-black sm:text-2xl">
              3. Cost-Effective Option
            </h2>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              When comparing repair versus replacement, restoration consistently proves to be the more economical solution.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              Over the lifetime of your furniture, the total cost of cleaning and restoring leather is considerably lower than purchasing new pieces multiple times.
            </p>
            <p className="mt-6 font-sans text-base leading-relaxed text-gray-800">
              <em>Sources: FurnitureToday, HomeAdviser.com</em>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
