import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import Guide from "@/components/Guide";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import LeatherForUpholsteryGuideContent from "./LeatherForUpholsteryGuideContent";
import UpholsteryLeatherCollectionGrid from "@/components/UpholsteryLeatherCollectionGrid";
import LeatherMaterialQuoteEmbed from "./LeatherMaterialQuoteEmbed";
import LeatherForUpholsteryBenefits from "./LeatherForUpholsteryBenefits";
import LeatherForUpholsteryQuickTools from "./LeatherForUpholsteryQuickTools";
import {
  leatherForUpholsteryFaqItems,
  leatherForUpholsteryFaqSchema,
} from "./leatherForUpholsteryFaq";

const title = "Leather for Upholstery | ReLeather";
const description =
  "Italian upholstery leather and leather hides for furniture: sofa leather, furniture leather, and leather upholstery material by collection—distressed, aniline, pull-up, and more. Material quotes and reupholstery.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-for-upholstery" },
  openGraph: { url: "/leather-for-upholstery", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

export default function LeatherForUpholsteryPage() {
  return (
    <>
      <JsonLd data={leatherForUpholsteryFaqSchema} />
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Leather for Upholstery"
            subtitle={
              <>
                <em className="text-releather-orange">
                  Express any decorating style
                </em>
                <br />
                with our Italian leather!
              </>
            }
            primaryCta={{
              href: "#collections",
              title: "Browse upholstery leather collections",
              "aria-label": "Browse our leathers",
              label: "Browse our Leathers",
            }}
            leftContent={<LeatherForUpholsteryQuickTools />}
            rightContent={<LeatherMaterialQuoteEmbed />}
            gridClassName="lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start xl:grid-cols-[minmax(0,5fr)_minmax(0,8fr)]"
            gridGapClassName="gap-8 lg:gap-10"
          />

          <section
            id="collections"
            className="scroll-mt-24 mt-8 lg:mt-10"
            aria-label="Browse upholstery leather collections"
          >
            <UpholsteryLeatherCollectionGrid />
          </section>

          <section
            id="intro"
            className="scroll-mt-24 mt-8 lg:mt-10"
            aria-labelledby="intro-heading"
          >
            <h2
              id="intro-heading"
              className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              Why choose our leather?
            </h2>
            <div className="mt-4 overflow-hidden">
              <figure className="brutalist-image-frame float-right ml-6 mb-4 w-[280px] shrink-0 sm:w-[320px]"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/c_crop,g_south,h_240,w_435/v1654907997/leather/ReLeather-Leather-Types-Swatches-Selection-2.png"
                  alt="ReLeather leather types and swatches selection"
                  title="Leather types and swatches"
                  width={435}
                  height={240}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </figure>
              <p className="font-sans text-lg leading-relaxed text-gray-800">
                At ReLeather, our{" "}
                <Link
                  href="/leather-for-upholstery#collections"
                  title="Browse upholstery leather collections"
                  className="font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange"
                >
                  <strong>leather hides for furniture</strong>
                </Link>{" "}
                are finished in Italy and curated as a wide{" "}
                <Link
                  href="/types-of-leather"
                  title="Types of leather for upholstery"
                  className="font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange"
                >
                  <strong>leather upholstery material</strong>
                </Link>{" "}
                so you can match color, grain, sheen, and hand. Typical{" "}
                <strong>upholstery leather</strong> applications include
                residential sofas and sectionals, accent chairs, headboards,
                office seating, and hospitality pieces where durability and
                appearance both matter. We also offer our clients{" "}
                <Link href="/services/leather-upholstery">
                  <strong>leather reupholstery service</strong>
                </Link>{" "}
                when you want the material and the craft under one roof.
              </p>
            </div>
            <LeatherForUpholsteryBenefits />
          </section>

          <Guide
            id="guide"
            header={{
              badge: "Product Guide",
              title: "Start ReLeathering",
            }}
          >
            <LeatherForUpholsteryGuideContent />
          </Guide>

          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={leatherForUpholsteryFaqItems}
            defaultOpenFirst
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
