import type { Metadata } from "next";
import Image from "next/image";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import JsonLd from "@/components/JsonLd";
import BeforeAfter from "@/components/BeforeAfter";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import Guide from "@/components/Guide";
import Issues from "@/components/Issues";
import Process from "@/components/Process";
import LeatherInfo from "@/components/LeatherInfo";
import LeatherCleaningGuideContent from "./LeatherCleaningGuideContent";
import { leatherCleaningFaqItems } from "./leatherCleaningFaq";
import {
  leatherCleaningIssuesHeading,
  leatherCleaningIssuesItems,
} from "./leatherCleaningIssues";
import {
  leatherCleaningLeatherInfoHeading,
  leatherCleaningLeatherInfoIntro,
  leatherCleaningLeatherInfoTypes,
} from "./leatherCleaningLeatherInfo";

const title = "Leather Cleaning | ReLeather";
const description =
  "Professional leather couch, sofa, and chair cleaning and conditioning. We clean, moisturize, retouch, and waterproof your leather. Get a quote.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/leather-cleaning" },
  openGraph: { url: "/services/leather-cleaning", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const conditionImages = [
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_100/r_20,b_rgb:23262f/v1686222871/before-after/leather-cleaning/leather-cleaning-chair-dirty-soiled-grime-close-up.jpg",
    alt: "Leather Cleaning Fixes Chair Dirt Soiled Grime - Close Image",
    title: "Leather Cleaning Fixes Chair Dirt Soiled Grime - Close Image",
    label: "Dirt",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_100/r_20,b_rgb:23262f/v1686222871/before-after/leather-cleaning/leather-conditioning-couch-dry-rough-cracking-surface-close-up.jpg",
    alt: "Leather Conditioning treats dry rough cracking leather couch",
    title: "Leather Conditioning treats dry rough cracking leather couch",
    label: "Dry",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_scale,w_100/r_20,b_rgb:23262f/v1686222871/before-after/leather-cleaning/leather-retouching-scuffs-minor-discoloration-close-up.jpg",
    alt: "Leather Retouching fixes minor discoloration scuffs discolored leather furniture",
    title: "Leather Retouching fixes minor discoloration scuffs discolored leather furniture",
    label: "Scuffs",
  },
];

const leatherCleaningProcessSteps = [
  {
    title: "Leather Inspection",
    description:
      "We identify leather type, test an area, and determine the appropriate cleaning technique.",
  },
  {
    title: "Leather Cleaning",
    description:
      "We deep clean and remove surface dirt and grime from the grain texture.",
  },
  {
    title: "Leather Conditioning",
    description:
      "We soften and preserve leather, leaving a smooth finish and supple to the touch.",
  },
  {
    title: "Leather Retouching",
    description:
      "We refinish scuffs or minor discoloration. We color match and apply acrylic leather paint.",
  },
  {
    title: "Leather Protection",
    description:
      "We apply a protective sealer to help prevent water spotting and spills.",
  },
  {
    title: "Natural Coloring",
    description:
      "We treat and recolor natural aniline leather surfaces using natural color creams and oils, then polish.",
  },
];

const leatherCleaningBenefits = [
  {
    title: "Preserve Quality",
    description:
      "Regular leather cleaning preserves appearance, removes dirt, debris, dust, stains, preventing damage and discoloration.",
  },
  {
    title: "Extend Lifespan",
    description:
      "Leather cleaning is key in extending the lifespan of your furniture by preventing your leather from deteriorating prematurely.",
  },
  {
    title: "Added Durability",
    description:
      "Maintains the natural strength and structural integrity of the material by removing build up that can weaken the leather fibers.",
  },
];

const leatherCleaningBeforeAfterItems = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1686224919/before-after/leather-cleaning/leather-cleaning-sofa-sectional-before-300.jpg",
    beforeAlt:
      "Leather Cleaning and Conditioning for Soiled and Dry Creative Leather Sectional Sofa Set - Before Picture",
    beforeTitle:
      "Leather Cleaning and Conditioning for Soiled and Dry Creative Leather Sectional Sofa Set - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1686224919/before-after/leather-cleaning/leather-cleaning-sofa-sectional-after-300.jpg",
    afterAlt:
      "Leather Cleaning and Conditioning for Soiled and Dry Creative Leather Sectional Sofa Set - After Picture",
    afterTitle:
      "Leather Cleaning and Conditioning for Soiled and Dry Creative Leather Sectional Sofa Set - After Picture",
    caption:
      "Leather Cleaning and Conditioning for Soiled and Dry Creative Leather Sectional Sofa Set",
    detail: "Semi Aniline Leather",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1686224919/before-after/leather-cleaning/leather-cleaning-tufted-chair-before-300.jpg",
    beforeAlt:
      "Leather Cleaning and Conditioning for Dusty, DIrty, and Dry Antique Tufted Chippendale Wing Chair Set - Before Picture",
    beforeTitle:
      "Leather Cleaning and Conditioning for Dusty, DIrty, and Dry Antique Tufted Chippendale Wing Chair Set - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_lfill,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1686224919/before-after/leather-cleaning/leather-cleaning-tufted-chair-after-300.jpg",
    afterAlt:
      "Leather Cleaning and Conditioning for Dusty, Dirty, and Dry Antique Tufted Chippendale Wing Chair Set - After Picture",
    afterTitle:
      "Leather Cleaning and Conditioning for Dusty, Dirty, and Dry Antique Tufted Chippendale Wing Chair Set - After Picture",
    caption:
      "Leather Cleaning and Conditioning for Dusty, Dirty, and Dry Antique Tufted Chippendale Wing Chair Set",
    detail: "Semi Aniline Leather",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1686224919/before-after/leather-cleaning/leather-cleaning-italian-sofa-before-300.jpg",
    beforeAlt:
      "Leather Cleaning Ingrained Surface Soiling on Designer Contemporary Italian Sofa from Kelvin Giormani Luxury Sofas - After Picture",
    beforeTitle:
      "Leather Cleaning Ingrained Surface Soiling on Designer Contemporary Italian Sofa from Kelvin Giormani Luxury Sofas - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1686224713/before-after/leather-cleaning/leather-cleaning-italian-sofa-after-300.jpg",
    afterAlt:
      "Leather Cleaning Ingrained Surface Soiling on Designer Contemporary Italian Sofa from Kelvin Giormani Luxury Sofas - After Picture",
    afterTitle:
      "Leather Cleaning Ingrained Surface Soiling on Designer Contemporary Italian Sofa from Kelvin Giormani Luxury Sofas - After Picture",
    caption:
      "Leather Cleaning Ingrained Surface Soiling on Designer Contemporary Italian Sofa from Kelvin Giormani Luxury Sofas",
    detail: "Pigmented",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1686225984/before-after/leather-cleaning/leather-cleaning-conditioning-recoloring-leather-sofa-before-300.jpg",
    beforeAlt:
      "Leather Deep Cleaning and Retouching and Moisturize for Dry and Soiled Restoration Hardware Couch Set - Before Picture",
    beforeTitle:
      "Leather Deep Cleaning and Retouching and Moisturize for Dry and Soiled Restoration Hardware Couch Set - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1686225984/before-after/leather-cleaning/leather-cleaning-conditioning-recoloring-leather-sofa-after-300.jpg",
    afterAlt:
      "Leather Deep Cleaning and Retouching and Moisturize for Dry and Soiled Restoration Hardware Couch Set - After Picture",
    afterTitle:
      "Leather Deep Cleaning and Retouching and Moisturize for Dry and Soiled Restoration Hardware Couch Set - After Picture",
    caption:
      "Leather Deep Cleaning and Retouching and Moisturize for Dry and Soiled Restoration Hardware Couch Set",
    detail: "Aniline Leather",
  },
];

// JSON-LD: BreadcrumbList for multi-level route
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.releather.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.releather.com/services" },
    { "@type": "ListItem", position: 3, name: "Leather Cleaning", item: "https://www.releather.com/services/leather-cleaning" },
  ],
};

export default function LeatherCleaningPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Leather Cleaning"
            subtitle={
              <>
                <span className="text-releather-orange">
                  Is your leather couch due for cleaning?
                </span>
                <br />
                Preserve your quality leather!
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Leather Couch Sofa Chair Cleaning and Conditioning Service Cost",
              "aria-label": "Leather Couch Cleaning and Conditioning Service Cost",
              label: (
                <>
                  Get <span className="hidden sm:inline">Leather Cleaning </span>
                  Quote
                </>
              ),
            }}
            secondaryCta={{
              href: "tel:+19495294727",
              title: "Leather Couch Sofa Chair Cleaning and Conditioning Service Cost - Call Us",
              "aria-label": "Leather Couch Sofa Chair Cleaning and Conditioning Service Cost - Call Us",
              label: "Call Us",
            }}
            videoEmbed={{
              youtubeId: "dLhHB5pjwSA",
              title: "ReLeather leather cleaning",
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
                <i className="fa fa-fw fa-medkit" aria-hidden /> Service Overview
              </span>
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              Leather Cleaning keeps your upholstery leather looking fresh and
              feeling soft and supple. A clean sofa will last so it&apos;s key to
              check your leather for dirty, oily, dry areas and schedule
              professional cleaning. We&apos;ll extend the life of your valuable
              leather and ensure its clean, moisturized, retouched, and
              waterproofed.
            </p>
            <h3 className="mt-6 font-sans text-lg font-bold text-black sm:hidden">
              <em>Recommended for:</em>
              <br />
              Luxury Leather Sofa, Chairs, Loveseat, Ottoman
            </h3>
            <h3 className="mt-6 hidden font-sans text-lg font-bold text-black sm:block">
              <em>Recommended for:</em> Luxury Leather Sofa, Chairs, Loveseat,
              Ottoman
            </h3>
            <ul className="mt-8 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3 lg:gap-4 lg:px-2">
              {conditionImages.map((item) => (
                <li key={item.label} className="text-center">
                  <div className="mx-auto max-w-[200px] border-4 border-black"><Image unoptimized
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
            title="How Does Leather Cleaning Work?"
            subtitle="6 Step-by-Step Process"
            steps={leatherCleaningProcessSteps}
          />

          <Benefits
            id="benefits"
            title="Why Choose Leather Cleaning?"
            subtitle="3 Benefits of Leather Cleaning"
            benefits={leatherCleaningBenefits}
          />

          <BeforeAfter
            id="before-after"
            heading="Before & After"
            subheading="Leather Cleaning Results"
            items={leatherCleaningBeforeAfterItems}
          />

          <Guide
            id="guide"
            header={{
              badge: "Service Guide",
              title: "Leather Sofa Cleaning",
              tagline: "Got dirty leather? Lets get cleaning!",
            }}
          >
            <LeatherCleaningGuideContent />
          </Guide>

          <LeatherInfo
            id="leather-info"
            heading={leatherCleaningLeatherInfoHeading}
            intro={leatherCleaningLeatherInfoIntro}
            types={leatherCleaningLeatherInfoTypes}
          />

          <Issues
            id="issues"
            heading={leatherCleaningIssuesHeading}
            issues={leatherCleaningIssuesItems}
          />

          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={leatherCleaningFaqItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
