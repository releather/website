import type { Metadata } from "next";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import BeforeAfter from "@/components/BeforeAfter";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import Guide from "@/components/Guide";
import Process from "@/components/Process";
import ColorOptions from "@/components/ColorOptions";
import LeatherDyeingGuideContent from "./LeatherDyeingGuideContent";
import { leatherDyeingFaqItems } from "./leatherDyeingFaq";

const title = "Leather Dyeing | ReLeather";
const description =
  "Leather dyeing and color change for furniture, handbags, jackets. Redye to a new factory color with protective coating. Get a quote.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/leather-dyeing" },
  openGraph: { url: "/services/leather-dyeing", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const leatherDyeingProcessSteps = [
  {
    title: "Leather Inspection",
    description:
      "We identify the type of leather and the condition. Some aniline leathers are not recommended for dyeing such as Wax/Oil Pull Up.",
  },
  {
    title: "Leather Cleaning",
    description:
      "We deep clean, remove build up soiling and grease, stubborn dirt in the pores of the leather, and old sealants.",
  },
  {
    title: "Leather Conditioning",
    description:
      "We thoroughly condition the leather surface with leather lotion, softening and preserving it's smooth and supple feel.",
  },
  {
    title: "Leather Dyeing",
    description:
      "We hand dye and change the color of the leather surface from the foundation using penetrating leather dye for a durable surface coat.",
  },
  {
    title: "Leather Protection",
    description:
      "We apply a sealant to leather to prevent color transfer and body oil absorption. Sealant options: natural, matte, gloss.",
  },
  {
    title: "Color Options",
    description:
      "Choose from our assortment of color swatches to find the perfect color and finish for your leather.",
  },
];

const leatherDyeingBenefits = [
  {
    title: "Restoration",
    description:
      "Restoring worn out or faded leather renews the value of your leather.",
  },
  {
    title: "Customization",
    description:
      "Customizing your leather to match personal preference or complementing interior decor.",
  },
  {
    title: "Savings",
    description:
      "Saving money by avoiding the cost of xpensive replacement furniture, handbags, or jackets.",
  },
];

const leatherDyeingBeforeAfterItems = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1686138306/before-after/leather-dyeing/Laguna-Hills-Leather-Dyeing-American-Leather-Couch-Sleeper-Set-Before-5-300.jpg",
    beforeAlt:
      "Color Change to Espresso Brown for American Leather Sleeper Sofa Set in Laguna Hills, CA - Before Picture",
    beforeTitle:
      "Color Change to Espresso Brown for American Leather Sleeper Sofa Set in Laguna Hills, CA - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1686138305/before-after/leather-dyeing/Laguna-Hills-Leather-Dyeing-American-Leather-Couch-Sleeper-Set-After-3-300.jpg",
    afterAlt:
      "Color Change to Espresso Brown for American Leather Sleeper Sofa Set in Laguna Hills, CA - After Picture",
    afterTitle:
      "Color Change to Espresso Brown for American Leather Sleeper Sofa Set in Laguna Hills, CA - After Picture",
    caption:
      "Color Change to Espresso Brown for American Leather Sleeper Sofa Set in Laguna Hills, CA",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1686138718/before-after/leather-dyeing/Laguna-Hills-Leather-Dyeing-American-Leather-Couch-Sleeper-Set-Before-7-300.jpg",
    beforeAlt:
      "American Leather Brand Leather Lounge Chair Dyed to Expresso Brown Matte Finish - Before Picture",
    beforeTitle:
      "American Leather Brand Leather Lounge Chair Dyed to Expresso Brown Matte Finish - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_lfill,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1685970580/before-after/leather-dyeing/Laguna-Hills-Leather-Dyeing-American-Leather-Couch-Sleeper-Set-After-1-300.jpg",
    afterAlt:
      "American Leather Brand Leather Lounge Chair Dyed to Expresso Brown Matte Finish - After Picture",
    afterTitle:
      "American Leather Brand Leather Lounge Chair Dyed to Expresso Brown Matte Finish - After Picture",
    caption:
      "American Leather Brand Leather Lounge Chair Dyed to Expresso Brown Matte Finish",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1685970582/before-after/leather-dyeing/leather-dyeing-thomasville-sofa-before-300.jpg",
    beforeAlt:
      "Thomasville Sectional Top Grain Leather Sofa Medium to Dark Brown in Coto De Caza, CA - Before Picture",
    beforeTitle:
      "Thomasville Sectional Top Grain Leather Sofa Medium to Dark Brown in Coto De Caza, CA - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1685970582/before-after/leather-dyeing/leather-dyeing-thomasville-sofa-after-300.jpg",
    afterAlt:
      "Thomasville Sectional Top Grain Leather Sofa Medium to Dark Brown in Coto De Caza, CA - After Picture",
    afterTitle:
      "Thomasville Sectional Top Grain Leather Sofa Medium to Dark Brown in Coto De Caza, CA - After Picture",
    caption:
      "Thomasville Sectional Top Grain Leather Sofa Medium to Dark Brown in Coto De Caza, CA",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1685891548/before-after/leather-couch-color-change-orange-county-custom-charcoal-grey-before-300px.jpg",
    beforeAlt:
      "Color Change to Custom Grey fro Arizona Leather Sectional Sofa with Chaise in Lake Forest, CA - Before Picture",
    beforeTitle:
      "Color Change to Custom Grey fro Arizona Leather Sectional Sofa with Chaise in Lake Forest, CA - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1685891548/before-after/leather-couch-color-change-orange-county-custom-charcoal-grey-after_300px.jpg",
    afterAlt:
      "Color Change to Custom Grey fro Arizona Leather Sectional Sofa with Chaise in Lake Forest, CA - After Picture",
    afterTitle:
      "Color Change to Custom Grey fro Arizona Leather Sectional Sofa with Chaise in Lake Forest, CA - After Picture",
    caption:
      "Custom Grey Color Change for Arizona Leather Sectional Sofa with Chaise in Lake Forest, CA",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1685972468/before-after/leather-dyeing/Leather-Dyeing-Chair-Change-Color-Before-300.jpg",
    beforeAlt:
      "Beige American Leather Recliner Chair Dyed and Restored Custom Brown in San Diego, CA - Before Picture",
    beforeTitle:
      "Beige American Leather Recliner Chair Dyed and Restored Custom Brown in San Diego, CA - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1685972468/before-after/leather-dyeing/Leather-Dyeing-Chair-Change-Color-After-300.jpg",
    afterAlt:
      "Beige American Leather Recliner Chair Dyed and Restored Custom Brown in San Diego, CA - After Picture",
    afterTitle:
      "Beige American Leather Recliner Chair Dyed and Restored Custom Brown in San Diego, CA - After Picture",
    caption:
      "Beige American Leather Recliner Chair Dyed and Restored Custom Brown in San Diego, CA",
  },
];

export default function LeatherDyeingPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Leather Dyeing"
            subtitle={
              <>
                <span className="text-releather-orange">Change Color</span>
                <br />
                Refresh your quality leather!
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Leather Couch Restoration Service Cost",
              "aria-label": "Leather Couch Restoration Service Cost",
              label: (
                <>
                  Get <span className="hidden sm:inline">Leather Dyeing </span>
                  Quote
                </>
              ),
            }}
            secondaryCta={{
              href: "tel:+19495294727",
              title: "Leather Couch Restoration Service Cost - Call Us",
              "aria-label": "Leather Couch Restoration Service Cost - Call Us",
              label: "Call Us",
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/v1685357132/leather-restoration/process/leather-couch-restoration-recoloring-dyeing-restoring-original-color.jpg",
              alt: "Leather Dyeing Change Color for Leather Couch Sofa Loveseat Chair Handbags Jackets Briefcase",
              title:
                "Leather Dyeing Change Color for Leather Couch Sofa Loveseat Chair Handbags Jackets Briefcase",
              width: 600,
              height: 450,
            }}
          />

          <section
            id="service-overview"
            className="border-t-4 border-black pt-12"
            aria-labelledby="service-overview-heading"
          >
            <span id="ColorOptions" className="block" aria-hidden />
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
              Leather Dyeing transforms your leather to a new look making it
              ideal for customers or designers who wish to refresh home decor
              with contrasting colors and finishes. Redyeing service treats the
              old finish and restores a new factory color with a protective
              coating. Leather finishes are natural and retain the grain
              characteristics of your leather.{" "}
              <a href="#ColorOptions">Check out our color swatches!</a>
            </p>
            <h3 className="mt-6 font-sans text-lg font-bold text-black sm:hidden">
              <em>Recommended for:</em>
              <br />
              Luxury Leather Sofa, Chairs, Loveseat, Cushions, Ottoman,
              Handbags, Jackets, Coats, Briefcases
            </h3>
            <h3 className="mt-6 hidden font-sans text-lg font-bold text-black sm:block">
              <em>Recommended for:</em> Luxury Leather Sofa, Chairs, Loveseat,
              Cushions, Ottoman, Handbags, Jackets, Coats, Briefcases
            </h3>
            <div className="mt-8 border-4 border-black bg-white p-5">
              <ColorOptions id="ColorOptions" heading="Color options" />
            </div>
          </section>

          <Process
            id="how-it-works"
            title="How Does Leather Dyeing Work?"
            subtitle="6 Step-by-Step Process"
            steps={leatherDyeingProcessSteps}
          />

          <Benefits
            id="benefits"
            title="Why Choose Leather Dyeing?"
            subtitle="3 Benefits of Leather Color Change"
            benefits={leatherDyeingBenefits}
          />

          <BeforeAfter
            id="before-after"
            heading="Before & After"
            subheading="Leather Dyeing Results"
            items={leatherDyeingBeforeAfterItems}
          />

          <Guide
            id="guide"
            header={{
              badge: "Service Guide",
              title: "Leather Recoloring Guide",
              tagline: "Change Color? No Problem!",
            }}
          >
            <LeatherDyeingGuideContent />
          </Guide>

          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={leatherDyeingFaqItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
