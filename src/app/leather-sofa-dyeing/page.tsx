import type { Metadata } from "next";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import LeatherRestorationBeforeAfter from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";
import type { LeatherRestorationBeforeAfterItem } from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import Guide from "@/components/Guide";

const title = "Restoring Leather Couches | ReLeather";
const description =
  "Leather cleaning, restoration, and dyeing for sofas and couches. Restore fading, discoloration, dryness. Change color or convert to pigmented finish. Sectionals, sleepers, loveseats.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-sofa-dyeing" },
  openGraph: { url: "/leather-sofa-dyeing", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const benefitsData = [
  { title: "Repair vs. Replace Savings:", description: <></> },
  { title: "Preserve Value:", description: <></> },
  { title: "Quality Leather:", description: <></> },
];

const beforeAfterItems: LeatherRestorationBeforeAfterItem[] = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-brown-nubuck-faded-change-to-pigmented-finish-sectional-arizona-leather-lake-forest-before.png",
    beforeAlt: "Arizona Leather sectional brown nubuck before restoration Lake Forest",
    beforeTitle: "Arizona Leather sectional brown nubuck before restoration Lake Forest",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-brown-nubuck-faded-change-to-pigmented-finish-sectional-arizona-leather-lake-forest-after.png",
    afterAlt: "Arizona Leather sectional after leather restoration Lake Forest",
    afterTitle: "Arizona Leather sectional after leather restoration Lake Forest",
    serviceType: "Leather Restoration",
    furniture: "Sectional",
    color: "Brown",
    leatherType: "Nubuck",
    problem: "Faded change to pigmented finish",
    location: "Lake Forest",
    description:
      "This Arizona Leather sectional in Lake Forest underwent a complete color transformation from faded nubuck to a durable pigmented finish, revitalizing both the appearance and practicality of the seating area.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-brown-aniline-faded-discoloration-surface-changed-to-pigmented-coating-morris-stickley-newport-beach-before.jpg",
    beforeAlt: "Morris Stickley brown aniline sofa before restoration Newport Beach",
    beforeTitle: "Morris Stickley brown aniline sofa before restoration Newport Beach",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-brown-aniline-faded-discoloration-surface-changed-to-pigmented-coating-morris-stickley-newport-beach-after.jpg",
    afterAlt: "Morris Stickley sofa after pigmented coating Newport Beach",
    afterTitle: "Morris Stickley sofa after pigmented coating Newport Beach",
    serviceType: "Leather Restoration",
    furniture: "Sofa",
    color: "Brown",
    leatherType: "Aniline",
    problem: "Faded discoloration surface changed to pigmented coating",
    location: "Newport Beach",
    description:
      "This Morris Stickley sofa in brown aniline leather showed faded discoloration. The surface was converted to a pigmented coating for added protection, restoring rich color and durability for extended use in Newport Beach.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-burgundy-protected-american-leather-before.png",
    beforeAlt: "American Leather burgundy protected sofa before restoration",
    beforeTitle: "American Leather burgundy protected sofa before restoration",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-burgundy-protected-american-leather-after.png",
    afterAlt: "American Leather burgundy sofa after restoration",
    afterTitle: "American Leather burgundy sofa after restoration",
    serviceType: "Leather Restoration",
    furniture: "Sofa",
    color: "Burgundy",
    leatherType: "Protected",
    problem: "Restoration",
    location: "—",
    description:
      "Restoration of a burgundy protected leather sofa from American Leather involved refinishing and revitalizing the surface to restore its luxurious tone and texture.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-yellow-aniline-faded-dry-tufted-style-couch-designer-brand-orange-county-before.png",
    beforeAlt: "Yellow aniline tufted couch before restoration Orange County",
    beforeTitle: "Yellow aniline tufted couch before restoration Orange County",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-yellow-aniline-faded-dry-tufted-style-couch-designer-brand-orange-county-after.png",
    afterAlt: "Yellow aniline tufted couch after restoration Orange County",
    afterTitle: "Yellow aniline tufted couch after restoration Orange County",
    serviceType: "Leather Restoration",
    furniture: "Tufted Style Couch",
    color: "Yellow",
    leatherType: "Aniline",
    problem: "Faded dry",
    location: "Orange County",
    description:
      "This yellow aniline tufted style couch from Orange County had faded and dry leather. Restoration included cleaning, conditioning, and recoloring to restore color vibrancy, smooth texture, and overall refreshed appearance.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-sofa-brown-pigmented-change-color-to-expresso-sleeper-american-leather-laguna-hills-before.jpg",
    beforeAlt: "Brown pigmented sleeper sofa before dyeing to expresso Laguna Hills",
    beforeTitle: "Brown pigmented sleeper sofa before dyeing to expresso Laguna Hills",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-sofa-brown-pigmented-change-color-to-expresso-sleeper-american-leather-laguna-hills-after-extra.jpg",
    afterAlt: "Sleeper sofa after expresso leather dyeing Laguna Hills",
    afterTitle: "Sleeper sofa after expresso leather dyeing Laguna Hills",
    serviceType: "Leather Dyeing",
    furniture: "Sleeper",
    color: "Brown to Expresso",
    leatherType: "Pigmented",
    problem: "Change color to expresso",
    location: "Laguna Hills",
    description:
      "This project involved dyeing a brown pigmented sleeper sofa by American Leather in Laguna Hills, changing its color to expresso. The service included detailed preparation and precise application to achieve a rich, uniform finish on a high-use furniture piece.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-change-color-sofa-sectional-tan-grey-fullerton-before.png",
    beforeAlt: "Tan sectional sofa before leather dyeing to grey Fullerton",
    beforeTitle: "Tan sectional sofa before leather dyeing to grey Fullerton",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-change-color-sofa-sectional-tan-grey-fullerton-after.png",
    afterAlt: "Sectional sofa after leather dyeing to grey Fullerton",
    afterTitle: "Sectional sofa after leather dyeing to grey Fullerton",
    serviceType: "Leather Dyeing",
    furniture: "Sectional",
    color: "Tan to Grey",
    leatherType: "Pigmented",
    problem: "Change color",
    location: "Fullerton",
    description:
      "Sectional sofa in Fullerton was restored through leather dyeing, shifting its color from tan to grey for a modernized look and feel.",
  },
];

const faqItems = [
  {
    question: "How often should I have my leather sofa restored or redyed?",
    answer: (
      <>
        <p>
          The frequency depends on use and exposure. Many owners schedule professional leather restoration or dyeing every 5 to 7 years. Regular conditioning and keeping the sofa out of direct sun can extend the time between full restorations.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-brown-nubuck-faded-change-to-pigmented-finish-sectional-arizona-leather-lake-forest-after.png"
          alt="Leather sectional after restoration and pigmented finish"
          title="Leather sectional after restoration and pigmented finish"
          width={450}
          height={450}
          loading="lazy"
        />
      </>
    ),
  },
  {
    question: "Can you change the color of my leather sofa?",
    answer: (
      <>
        <p>
          Yes. We offer leather dyeing and color change for sofas, sectionals, and sleepers. We can restore the original color or change it to a new shade (e.g., brown to expresso, tan to grey). The process includes preparation, dye application, and protection for a durable, even finish.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-sofa-brown-pigmented-change-color-to-expresso-sleeper-american-leather-laguna-hills-after-extra.jpg"
          alt="Sleeper sofa after leather dyeing color change"
          title="Sleeper sofa after leather dyeing color change"
          width={450}
          height={450}
          loading="lazy"
        />
      </>
    ),
  },
  {
    question: "What is converting aniline or nubuck to a pigmented finish?",
    answer: (
      <>
        <p>
          Aniline and nubuck leather can be refinished with a pigmented (protected) top coat. This adds durability and stain resistance while refreshing color. It is a good option when the leather is faded, stained, or you want easier maintenance without reupholstering.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-brown-aniline-faded-discoloration-surface-changed-to-pigmented-coating-morris-stickley-newport-beach-after.jpg"
          alt="Aniline sofa after conversion to pigmented coating"
          title="Aniline sofa after conversion to pigmented coating"
          width={450}
          height={450}
          loading="lazy"
        />
      </>
    ),
  },
];

export default function LeatherSofaDyeingPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Restoring Leather Couches"
            subtitle={
              <>
                <em>Restore Color. Change Color. Protect.</em>
                <br />
                Sofas, Sectionals & Couches
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Request a quote for leather sofa restoration, dyeing, or color change",
              "aria-label": "Request a quote for leather sofa dyeing and restoration",
              label: (
                <>
                  Get <span className="hidden sm:inline">Leather Sofa </span>Quote
                </>
              ),
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/c_fit,w_560,h_315/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-brown-nubuck-faded-change-to-pigmented-finish-sectional-arizona-leather-lake-forest-after.png",
              alt: "Arizona Leather sectional after leather restoration and pigmented finish",
              title: "Arizona Leather sectional after leather restoration and pigmented finish",
              width: 560,
              height: 315,
            }}
            body={
              <p>
                We provide leather cleaning, restoration, and dyeing for sofas, sectionals, loveseats, and sleepers. Services address fading, discoloration, dryness, scuffs, and stains. We can restore original color or change it entirely, and convert aniline or nubuck to a durable pigmented finish for better wear and easier care.
              </p>
            }
          />

          <Benefits
            id="benefits"
            title="Restoring & Dyeing Quality Leather Sofas:"
            subtitle="→ A Smart Investment"
            intro={
              <>
                <figure className="brutalist-image-frame w-[280px] sm:w-[320px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_350/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-sofa-burgundy-protected-american-leather-after.png"
                    alt="Leather sofa restoration and dyeing results"
                    title="Leather sofa restoration and dyeing results"
                    width={450}
                    height={350}
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                </figure>
                <p className="font-sans text-base font-medium leading-relaxed text-gray-700">
                  Quality leather sofas and sectionals from brands like American Leather, Morris Stickley, and Arizona Leather are built to last. Professional restoration and dyeing preserve their look and value while addressing fading, wear, and color change needs.
                </p>
              </>
            }
            benefits={benefitsData}
          />

          <Guide
            id="guide"
            header={{
              title: "Leather Sofa Restoration & Dyeing",
              tagline: "→ When to Restore, Recolor, or Change Color",
            }}
          >
            <p>
              <strong>Restoration</strong> brings back faded or worn leather with cleaning, conditioning, and color matching. <strong>Recoloring</strong> refreshes the existing shade. <strong>Dyeing</strong> or color change gives you a new color (e.g., brown to expresso, tan to grey). For aniline or nubuck sofas that need more durability, we can <em>convert the surface to a pigmented finish</em>, which adds protection and makes the sofa easier to maintain.
            </p>
          </Guide>

          <LeatherRestorationBeforeAfter items={beforeAfterItems} />

          <Faq id="faq" heading="Frequently Asked Questions" items={faqItems} />
        </div>
      </main>
      <Footer />
    </>
  );
}
