import type { Metadata } from "next";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import BeforeAfter from "@/components/BeforeAfter";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import Guide from "@/components/Guide";
import Issues from "@/components/Issues";
import Process from "@/components/Process";
import LeatherInfo from "@/components/LeatherInfo";
import LeatherRestorationGuideContent from "./LeatherRestorationGuideContent";
import { leatherRestorationFaqItems } from "./leatherRestorationFaq";
import {
  leatherRestorationIssuesHeading,
  leatherRestorationIssuesItems,
} from "./leatherRestorationIssues";
import {
  leatherRestorationLeatherInfoHeading,
  leatherRestorationLeatherInfoSubheading,
  leatherRestorationLeatherInfoTypes,
} from "./leatherRestorationLeatherInfo";

const title = "Leather Restoration | ReLeather";
const description =
  "Professional leather restoration: repair faded, cracked, scratched, and stained leather. Recolor and refinish furniture, auto interiors, handbags. Get a quote.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/leather-restoration" },
  openGraph: { url: "/services/leather-restoration", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const conditionImages = [
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1653700009/before-after/faded-leather-couch.png",
    alt: "Faded Leather Sofa",
    title: "Faded Leather Sofa",
    label: "Faded",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1653699338/before-after/cracked-leather-cushion-restoration.png",
    alt: "Cracked Leather Cushion",
    title: "Cracked Leather Cushion",
    label: "Cracked",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1653624183/before-after/stained-leather-chair-restoration.png",
    alt: "Stained Leather Sofa Chair",
    title: "Stained Leather Sofa Chair",
    label: "Stained",
  },
];

const leatherRestorationProcessSteps = [
  {
    title: "Get Quote",
    description: "Fill out form. Include photos.",
  },
  {
    title: "Pick Up",
    description: "Free local leather furniture pick up.",
  },
  {
    title: "Delivery",
    description: "Average lead time is 1 week.",
  },
];

const leatherRestorationBenefits = [
  {
    title: "Leather Cleaning",
    description:
      "deep clean, remove ingrained dirt and soiling, wipe away body oil build up, spot and site clean stains",
  },
  {
    title: "Leather Conditioning",
    description:
      "condition leather adding natural oils back into leather, rub leather lotion into pores of leather, soften and preserve leather leaving smooth finish and supple touch",
  },
  {
    title: "Leather Protection",
    description:
      "apply protective finish or coat, protects against stains and spotting without altering its original appearance and promotes durability",
  },
  {
    title: "Leather Restoration",
    description:
      "renew color, dye, and refinish original manufacturer color with long-lasting water based leather dye sealed which will not peel, crack, or rub off. Hand applied and/or spray gun",
  },
  {
    title: "Leather Finishes",
    description:
      "preserves natural leather surface grain characteristics, original factory finish",
  },
];

const leatherRestorationBeforeAfterItems = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/f_auto/v1654052391/before-after/Leather-Recolor-Tan-Sofa-Before.jpg",
    beforeAlt: "Recolor Tan Leather Sofa - Before",
    beforeTitle: "Recolor Tan Leather Sofa - Before",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/f_auto/v1654052391/before-after/Leather-Recolor-Tan-Sofa-After.jpg",
    afterAlt: "Recolor Tan Leather Sofa - After",
    afterTitle: "Recolor Tan Leather Sofa - After",
    caption: "Leather Restoration for Ethan Allen Leather Loveseat",
  },
];

export default function LeatherRestorationPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Leather Restoration"
            subtitle={
              <>
                <span className="text-releather-orange">
                  Looking to revive your worn furniture?
                </span>
                <br />
                Lets restore your quality leather!
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Leather Restoration Estimate for Couch",
              "aria-label": "Leather Restoration Estimate for Couch",
              label: "Get Leather Restoration Quote Now!",
            }}
            secondaryCta={{
              href: "tel:+19495294727",
              title: "Leather Restoration - Call Us",
              "aria-label": "Leather Restoration - Call Us",
              label: "Call Us",
            }}
            videoEmbed={{
              youtubeId: "Po1Rx119hJA",
              title: "How Does It Work? Easy...",
            }}
          />

          <section
            id="service-overview"
            className="border-t-4 border-black pt-12"
            aria-labelledby="service-overview-heading"
          >
            <h2
              id="service-overview-heading"
              className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              <span className="border-2 border-black bg-releather-orange px-2 py-0.5">
                <i className="fa fa-fw fa-medkit" aria-hidden /> Service
                Overview
              </span>
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              Leather Restoration treats and removes all surface wear such as
              color fading, discoloration, oil spotting, grease and ink stains,
              scuff marks, scratches, and cracking. Leather recoloring applies a
              new foundation restores a fresh new color with lasting results.
            </p>
            <h3 className="mt-6 font-sans text-lg font-bold text-black sm:hidden">
              <em>Recommended for:</em>
              <br />
              Leather sofa, chair, recliner, dining chairs, auto interiors,
              handbags, jackets, accessories
            </h3>
            <h3 className="mt-6 hidden font-sans text-lg font-bold text-black sm:block">
              <em>Recommended for:</em> Leather sofa, chair, recliner, dining
              chairs, auto interiors, handbags, jackets, accessories
            </h3>
            <ul className="mt-8 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3 lg:gap-4 lg:px-2">
              {conditionImages.map((item) => (
                <li key={item.label} className="text-center">
                  <div className="mx-auto max-w-[200px] border-4 border-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      title={item.title}
                      width={200}
                      height={200}
                      loading="lazy"
                      className="h-[200px] w-full border-b-4 border-black object-cover"
                    />
                    <strong className="block border-t-2 border-black bg-white px-2 py-2 font-sans font-bold text-black">
                      {item.label}
                    </strong>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <Process
            id="how-it-works"
            title="How Does It Work? Easy..."
            subtitle="3 Steps"
            steps={leatherRestorationProcessSteps}
          />

          <Benefits
            id="benefits"
            title="Why Choose Leather Restoration?"
            benefits={leatherRestorationBenefits}
          />

          <BeforeAfter
            id="before-after"
            heading="Before & After"
            subheading="Leather Restoration Results"
            items={leatherRestorationBeforeAfterItems}
          />

          <Guide
            id="guide"
            header={{
              badge: "Service Guide",
              title: "Leather Restoration",
              tagline: "Fix the leather problem!",
            }}
          >
            <LeatherRestorationGuideContent />
          </Guide>

          <LeatherInfo
            id="leather-info"
            heading={leatherRestorationLeatherInfoHeading}
            subheading={leatherRestorationLeatherInfoSubheading}
            types={leatherRestorationLeatherInfoTypes}
          />

          <Issues
            id="issues"
            heading={leatherRestorationIssuesHeading}
            subheading="Faded, Cracked, Scratched, Stained."
            issues={leatherRestorationIssuesItems}
          />

          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={leatherRestorationFaqItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
