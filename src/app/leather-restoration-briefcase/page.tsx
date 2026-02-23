import type { Metadata } from "next";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import LeatherRestorationBeforeAfter from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";
import type { LeatherRestorationBeforeAfterItem } from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";

const title = "Leather Refurbishing & Restoring Leather Briefcase | ReLeather";
const description =
  "Leather cleaning, conditioning, and restoration for briefcases, suitcases, garment bags, and travel cases. Deep cleaning and refurbishing for business briefcases.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-restoration-briefcase" },
  openGraph: { url: "/leather-restoration-briefcase", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const processSteps = [
  {
    title: "Get Quote",
    description: <p>Fill out form. Include photos.</p>,
  },
  {
    title: "Pick Up or Mail",
    description: <p>Free local pick up or Mail-in item.</p>,
  },
  {
    title: "Delivery",
    description: <p>Average lead time 1 week.</p>,
  },
];

const benefitsData = [
  {
    title: "Leather Cleaning and Deodorizing",
    description: (
      <p>deep cleaning and deodorizing is necessary to preserve and freshen up your leather briefcase; remove ingrained surface soiling, dirt, and grime, restore natural fragrance of leather</p>
    ),
  },
  {
    title: "Color Restoration and Refinishing",
    description: (
      <p>treat sun damaged and color faded leather surface, restore original color and finish; excessive sunlight exposure can prematurely color fade your leather bag and briefcase</p>
    ),
  },
  {
    title: "Leather Softening and Moisturizing",
    description: (
      <p>moisturize leather and replenish natural oils, soften leather and restore soft and supple feel; regular reconditioning preserves your leather briefcase and prevent dryness and cracking</p>
    ),
  },
  {
    title: "Leather Stain Removal",
    description: (
      <p>treat penetrating stains and water spotting, apply color coating</p>
    ),
  },
  {
    title: "Leather Dyeing | Change Color",
    description: (
      <p>redye leather surface with a custom color, penetrating pigmentation process</p>
    ),
  },
  {
    title: "Leather Protection",
    description: (
      <p>apply finish protection, prevents water spotting and cracking</p>
    ),
  },
];

const beforeAfterItems: LeatherRestorationBeforeAfterItem[] = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-black-pigmented-faded-scratches-refurbish-business-fullerton-before.jpg",
    beforeAlt: "Briefcase before restoration – business Fullerton faded scratches",
    beforeTitle: "Briefcase before restoration – business Fullerton faded scratches",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-black-pigmented-faded-scratches-refurbish-business-fullerton-after.jpg",
    afterAlt: "Briefcase after restoration – business Fullerton faded scratches",
    afterTitle: "Briefcase after restoration – business Fullerton faded scratches",
    serviceType: "Leather Restoration",
    furniture: "Briefcase",
    color: "Black",
    problem: "Faded Scratches",
    location: "Fullerton",
    description: (
      <p>A black pigmented business briefcase in Fullerton with faded scratches was refurbished, restoring a clean and polished leather surface.</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-black-pigmented-faded-scratches-refurbish-lawyer-case-style-fullerton-before.jpg",
    beforeAlt: "Briefcase before restoration – lawyer case style Fullerton faded scratches",
    beforeTitle: "Briefcase before restoration – lawyer case style Fullerton faded scratches",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-black-pigmented-faded-scratches-refurbish-lawyer-case-style-fullerton-after.jpg",
    afterAlt: "Briefcase after restoration – lawyer case style Fullerton faded scratches",
    afterTitle: "Briefcase after restoration – lawyer case style Fullerton faded scratches",
    serviceType: "Leather Restoration",
    furniture: "Briefcase",
    color: "Black",
    problem: "Faded Scratches",
    location: "Fullerton",
    description: (
      <p>A black pigmented lawyer-style briefcase in Fullerton was refurbished to remove faded scratches, restoring the leather&apos;s clean finish.</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-black-pigmented-faded-scratches-refurbish-tumi-fullerton-before.jpg",
    beforeAlt: "Briefcase before restoration – Tumi Fullerton faded scratches",
    beforeTitle: "Briefcase before restoration – Tumi Fullerton faded scratches",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-black-pigmented-faded-scratches-refurbish-tumi-fullerton-after.jpg",
    afterAlt: "Briefcase after restoration – Tumi Fullerton faded scratches",
    afterTitle: "Briefcase after restoration – Tumi Fullerton faded scratches",
    serviceType: "Leather Restoration",
    furniture: "Briefcase",
    color: "Black",
    problem: "Faded Scratches",
    location: "Fullerton",
    description: (
      <p>A black pigmented Tumi briefcase in Fullerton was refurbished, removing faded scratches and renewing the leather&apos;s surface.</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-brown-two-tone-before.png",
    beforeAlt: "Briefcase before restoration – brown two-tone",
    beforeTitle: "Briefcase before restoration – brown two-tone",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-brown-two-tone-after.png",
    afterAlt: "Briefcase after restoration – brown two-tone",
    afterTitle: "Briefcase after restoration – brown two-tone",
    serviceType: "Leather Restoration",
    furniture: "Briefcase",
    color: "Brown",
    problem: "Whole",
    location: "—",
    description: (
      <p>Brown two-tone leather briefcase underwent a full restoration. Surface wear and discoloration were corrected, bringing back original color vibrancy and durability while preserving classic styling.</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-brown-aniline-waxed-finish-restored-reconditioned-hartmann-orange-county-before.png",
    beforeAlt: "Briefcase before restoration – Hartmann Orange County waxed finish",
    beforeTitle: "Briefcase before restoration – Hartmann Orange County waxed finish",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-brown-aniline-waxed-finish-restored-reconditioned-hartmann-orange-county-after.png",
    afterAlt: "Briefcase after restoration – Hartmann Orange County waxed finish",
    afterTitle: "Briefcase after restoration – Hartmann Orange County waxed finish",
    serviceType: "Leather Restoration",
    furniture: "Briefcase",
    color: "Brown",
    problem: "Waxed Finish Restored Reconditioned",
    location: "Orange County",
    description: (
      <p>A brown aniline Hartmann briefcase in Orange County with a waxed finish was fully reconditioned, restoring its polished and refined look.</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-dark-brown-vintage-doctor-bag-refurbishment-cracking-fullerton-before.jpg",
    beforeAlt: "Briefcase before restoration – Fullerton vintage doctor bag",
    beforeTitle: "Briefcase before restoration – Fullerton vintage doctor bag",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-dark-brown-vintage-doctor-bag-refurbishment-cracking-fullerton-after.jpg",
    afterAlt: "Briefcase after restoration – Fullerton vintage doctor bag",
    afterTitle: "Briefcase after restoration – Fullerton vintage doctor bag",
    serviceType: "Leather Restoration",
    furniture: "Briefcase",
    color: "Dark Brown",
    problem: "Vintage Doctor Bag Refurbishment Cracking",
    location: "Fullerton",
    description: (
      <p>Looking to restore a family heirloom? This leather fix is a great example of restoring and preserving a vintage doctor bag passed down from generations. Back in the day this bag made of genuine top grain cowhide was a rich dark brown color with a subtle sheen. Then age and wear naturally transformed the leather into a more weathered and distressed piece. Surface wear and cracking on corners and handles were treated. A combination of deep cleaning and softening made the bag feel flexible again. A dark brown transparent finish was applied to enhance its antique look. Despite its once rough condition this sentimental doctor bag now sits in a showcase looking fresh.</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-tan-semi-aniline-refurbished-color-restored-fullerton-before.jpg",
    beforeAlt: "Briefcase before restoration – Irvine, ca refurbished color",
    beforeTitle: "Briefcase before restoration – Irvine, ca refurbished color",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-briefcase-tan-semi-aniline-refurbished-color-restored-fullerton-after.jpg",
    afterAlt: "Briefcase after restoration – Irvine, ca refurbished color",
    afterTitle: "Briefcase after restoration – Irvine, ca refurbished color",
    serviceType: "Leather Restoration",
    furniture: "Briefcase",
    color: "Tan",
    problem: "Refurbished Color Restored",
    location: "Fullerton",
    description: (
      <p>A tan semi-aniline briefcase in Fullerton had its faded color restored and surface refinished for a refreshed look.</p>
    ),
  },
];

export default function LeatherRestorationBriefcasePage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Leather Refurbishing & Restoring Leather Briefcase"
            subtitle={
              <>
                <strong>Looking to restore a leather briefcase?</strong>
                <br />
                <em>Don&apos;t Replace! Restore &amp; Save!</em>
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Leather Briefcase Refurbishing Restoration and Cleaning Quote",
              "aria-label": "Leather Briefcase Refurbishing Restoration and Cleaning Quote",
              label: "Get Quote to Refurbish your Leather Briefcase",
            }}
            videoEmbed={{ youtubeId: "Y5867f7ntjM", title: "Leather Briefcase Restoration" }}
            body={
              <>
                <p>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.releather.com/leather-restoration-briefcase"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="float-right ml-6 mb-4 inline-block border-4 border-black bg-[#3B5998] px-4 py-2 font-sans font-bold text-white shadow-[4px_4px_0_0_#000] hover:opacity-90"
                  >
                    Share on Facebook
                  </a>
                  We offer Leather Cleaning, Conditioning, and Leather Restoration for briefcases, suitcases, garment bags, and other travel cases. Do you have a bag thats showing its age? Are you hard on your business briefcase and need surface scratches, scuffs, and discoloration fixed? Our professional leather deep cleaning and refurbishing can liven up your everyday bag.
                </p>
              </>
            }
          />

          <Process
            id="process"
            title="How Does It Work? Easy..."
            subtitle="3 steps"
            steps={processSteps}
          />

          <Benefits
            id="benefits"
            title="Leather services we provide to briefcases"
            benefits={benefitsData}
          />

          <LeatherRestorationBeforeAfter
            items={beforeAfterItems}
            subtitle="Leather Briefcase Refurbishing and Restoration"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
