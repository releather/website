import type { Metadata } from "next";
import Image from "next/image";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import LeatherRestorationBeforeAfter from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";
import type { LeatherRestorationBeforeAfterItem } from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Guide from "@/components/Guide";
import Issues from "@/components/Issues";

const title = "Car Seat Leather Restoration & Dyeing | ReLeather";
const description =
  "Leather cleaning, refinishing and redyeing for automotive interiors. Restore color, remove stains, treat wear and fading on luxury car seats.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/auto-leather-dyeing" },
  openGraph: { url: "/auto-leather-dyeing", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const processSteps = [
  {
    title: "Get Quote",
    description: <p>Fill out form. Include photos.</p>,
  },
  {
    title: "Drop Off Vehicle",
    description: <p>Our shop is located in Fullerton, CA.</p>,
  },
  {
    title: "Delivery",
    description: <p>1 day turnaround time.</p>,
  },
];

const benefitsData = [
  {
    title: "Leather Cleaning & Deodorizing",
    description: (
      <p>deep clean leather surface, remove ingrained surface soiling, renew natural fragrance of leather</p>
    ),
  },
  {
    title: "Leather Conditioning & Moisturizing",
    description: (
      <p>soften old and dry leather surface, replenish natural oils, restore natural luster and suppleness</p>
    ),
  },
  {
    title: "Leather Stain and Spot Removal",
    description: (
      <p>treat minor scuffs and spotting, remove color transfer stains, retouch discolored seat areas</p>
    ),
  },
  {
    title: "Leather Restoration and Redyeing",
    description: (
      <p>treat all surface wear, prepare leather surface for recoloring, restore original color and finish</p>
    ),
  },
  {
    title: "Leather Protection",
    description: (
      <p>apply finish protection, prevents water spotting and cracking, protects against oil based stains</p>
    ),
  },
  {
    title: "Leather Specialists",
    description: (
      <p>We specialize in luxury automotive brands.</p>
    ),
  },
];

const issuesData = [
  {
    title: "Color fading and discoloration",
    body: (
      <p>
        <strong>Color fading and discoloration</strong> on car seats is common from sun exposure and use. Our leather restoration and redyeing service restores the original color and finish, matching your interior for a seamless look.
      </p>
    ),
    media: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <Image unoptimized
        src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-light-beige-pigmented-worn-dirt-uneven-driver-seat-ashton-martin-newport-beach-before.jpg"
        alt="Auto leather dyeing and restoration"
        title="Auto leather dyeing and restoration"
        width={450}
        height={450}
        loading="lazy"
      />
    ),
  },
  {
    title: "Stained or soiled leather seats",
    body: (
      <p>
        <strong>Stained or soiled leather seats</strong> can be deep cleaned and refinished. We remove ingrained soiling, treat stains and spots, and apply protection to help prevent future damage from spills and oils.
      </p>
    ),
    media: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <Image unoptimized
        src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-steering-wheel-repair-beige-before.jpg"
        alt="Stained leather car seat restoration"
        title="Stained leather car seat restoration"
        width={450}
        height={450}
        loading="lazy"
      />
    ),
  },
  {
    title: "Dry or cracked leather",
    body: (
      <p>
        <strong>Dry or cracked leather</strong> loses suppleness and can crack with age. We condition and moisturize the leather, then refinish and protect the surface to restore look and feel and slow further wear.
      </p>
    ),
    media: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <Image unoptimized
        src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-grey-pigmented-wear-driver-seat-mercedes-benz-fullerton-before.jpg"
        alt="Dry cracked car leather conditioning"
        title="Dry cracked car leather conditioning"
        width={450}
        height={450}
        loading="lazy"
      />
    ),
  },
];

const beforeAfterItems: LeatherRestorationBeforeAfterItem[] = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-seat-restoration-beige-infiniti-before.jpg",
    beforeAlt: "Infiniti car seat before restoration – beige leather",
    beforeTitle: "Infiniti car seat before restoration – beige leather",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-seat-restoration-beige-infiniti-after.jpg",
    afterAlt: "Infiniti car seat after restoration – beige leather",
    afterTitle: "Infiniti car seat after restoration – beige leather",
    serviceType: "Leather Restoration",
    furniture: "Infiniti Car Seat",
    color: "Beige",
    problem: "Whole seat restoration",
    location: "—",
    description: (
      <p>Full beige leather car seat restoration for an Infiniti vehicle, focusing on cleaning, repairing wear, and restoring the leather&apos;s original appearance and texture.</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-black-pigmented-worn-scratched-worn-driver-seat-newport-beach-before.jpg",
    beforeAlt: "BMW driver seat before restoration – Newport Beach",
    beforeTitle: "BMW driver seat before restoration – Newport Beach",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-black-pigmented-worn-scratched-worn-driver-seat-newport-beach-after.jpg",
    afterAlt: "BMW driver seat after restoration – Newport Beach",
    afterTitle: "BMW driver seat after restoration – Newport Beach",
    serviceType: "Leather Restoration",
    furniture: "BMW Driver Seat",
    color: "Black",
    problem: "Worn, scratched driver seat",
    location: "Newport Beach",
    description: (
      <p>This leather restoration project involved the black pigmented driver seat of a BMW in Newport Beach. The leather had heavy wear, scratches, and fading, all of which were restored to near-original condition with professional care.</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-seats-black-ferrari-before.png",
    beforeAlt: "Ferrari car seats before restoration – black leather",
    beforeTitle: "Ferrari car seats before restoration – black leather",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-seats-black-ferrari-after.png",
    afterAlt: "Ferrari car seats after restoration – black leather",
    afterTitle: "Ferrari car seats after restoration – black leather",
    serviceType: "Leather Restoration",
    furniture: "Ferrari Car Seats",
    color: "Black",
    problem: "Whole interior",
    location: "—",
    description: (
      <p>This Ferrari leather restoration focused on reviving the black leather car seats. The job involved rejuvenating the entire seating area, restoring luxury aesthetics, and maintaining the premium Ferrari feel without altering the original design.</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-light-grey-pigmented-worn-soiled-driver-seat-lexus-before.jpg",
    beforeAlt: "Lexus driver seat before restoration – light grey",
    beforeTitle: "Lexus driver seat before restoration – light grey",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-light-grey-pigmented-worn-soiled-driver-seat-lexus-after.jpg",
    afterAlt: "Lexus driver seat after restoration – light grey",
    afterTitle: "Lexus driver seat after restoration – light grey",
    serviceType: "Leather Restoration",
    furniture: "Car Lexus",
    color: "Light Grey",
    problem: "Worn, soiled driver seat",
    location: "—",
    description: (
      <p>This Lexus driver seat had heavy wear and soiling on the light grey pigmented leather. The restoration improved both appearance and usability by rejuvenating the seat surface and restoring tone.</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-orange-pigmented-refinishing-seat-porsche-mission-viejo-before.jpg",
    beforeAlt: "Porsche seat before restoration – Mission Viejo",
    beforeTitle: "Porsche seat before restoration – Mission Viejo",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-orange-pigmented-refinishing-seat-porsche-mission-viejo-after.jpg",
    afterAlt: "Porsche seat after restoration – Mission Viejo",
    afterTitle: "Porsche seat after restoration – Mission Viejo",
    serviceType: "Leather Restoration",
    furniture: "Porsche Seat",
    color: "Orange",
    problem: "Refinishing",
    location: "Mission Viejo",
    description: (
      <p>Light orange pigmented leather steering wheel of a Porsche in Fullerton showed fading, soil and oil stains. An extra-image shot provided context. The restoration work likely involved deep cleaning and revitalizing to restore grip and finish.</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-red-pigmented-wear-cracking-seat-mercedes-benz-sl-550-orange-county-before.jpg",
    beforeAlt: "Mercedes Benz SL 550 seat before restoration – Orange County",
    beforeTitle: "Mercedes Benz SL 550 seat before restoration – Orange County",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-car-red-pigmented-wear-cracking-seat-mercedes-benz-sl-550-orange-county-after.jpg",
    afterAlt: "Mercedes Benz SL 550 seat after restoration – Orange County",
    afterTitle: "Mercedes Benz SL 550 seat after restoration – Orange County",
    serviceType: "Leather Restoration",
    furniture: "Mercedes Benz SL 550 Seat",
    color: "Red",
    problem: "Wear, cracking",
    location: "Orange County",
    description: (
      <p>Red Mercedes Benz SL 550 seat exhibited wear and cracking. Restoration included leather cleaning, crack repair, conditioning, and color rejuvenation to restore a uniform, supple, and visually appealing surface.</p>
    ),
  },
];

export default function AutoLeatherDyeingPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Car Seat Leather Restoration & Dyeing"
            subtitle={
              <>
                <strong>Looking to restore your quality leather car seats?</strong>
                <br />
                <em>Preserve the value of your luxury car by restoring your auto interior!</em>
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Auto Leather Restoration Quote",
              "aria-label": "Auto Leather Restoration Quote",
              label: "Auto Leather Dyeing Quote",
            }}
            videoEmbed={{ youtubeId: "coVbmIaYYaE", title: "Auto Leather Restoration" }}
            body={
              <>
                <p>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.releather.com/auto-leather-dyeing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="float-right ml-6 mb-4 inline-block border-4 border-black bg-[#3B5998] px-4 py-2 font-sans font-bold text-white shadow-[4px_4px_0_0_#000] hover:opacity-90"
                  >
                    Share on Facebook
                  </a>
                  We offer full service leather cleaning, refinishing and redyeing for automotive interiors. We perform leather services that treat normal wear and tear such as color discoloration, scuffs, stains, color fading, dry leather surface, and more.
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
            title="Leather services we provide to automotive interiors"
            benefits={benefitsData}
          />

          <Guide id="guide">
            <h2 className="border-b-2 border-releather-orange pb-1 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Auto Leather Dyeing
            </h2>
            <div className="my-6 overflow-hidden">
              <div className="float-right ml-6 mb-4 w-[280px] shrink-0 sm:w-[320px]"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/before-after/auto-leather-dyeing.png"
                  alt="Before and after auto leather dyeing"
                  title="Before and after auto leather dyeing"
                  width={560}
                  height={315}
                  loading="lazy"
                  className="max-w-full"
                />
              </div>
              <p>
                Old car leather upholstery can be restored combining deep leather cleaning and refinishing service. Our specialized auto leather dyeing service is not only one of the best options to improve and preserve your leather seats but also saves you money by avoiding costly upgrades like recovering your auto upholstery. Full leather restoration of your interior can also add value to your car if you decide to resell your used car.
              </p>
              <p>
                When working with luxury auto upholstery, we rely on our extensive training and experience to achieve the best before and after results for your leather seating. Below we outline the leather repair process.
              </p>
            </div>

            <h3 className="mt-6 font-display text-xl font-normal tracking-tight text-black">
              Mercedes-Benz Leather Restoration
            </h3>
            <p className="mt-2 font-sans text-gray-800">
              <strong>Mercedes-Benz Leather Interior Transformation!</strong> The black leather on these car seats had signs of wear and tear. Is your perforated leather feeling dry and looking faded? We offer professional Full Leather Restoration service to restore and preserve your luxury leather. The best part is that we can match the color of your leather and apply protection against premature aging and damage from penetrating spills and stains.
            </p>
            <p className="mt-6 font-sans text-gray-800">
              <strong>How long does auto leather restoration take?</strong>
            </p>
            <p className="font-sans text-gray-800">
              Turnaround time depends on the scope of work and current schedule. Typical jobs range from a few days to about a week. We can give you an estimate when you submit your quote request with photos.
            </p>
            <p className="mt-4 font-sans text-gray-800">
              <strong>Do you work on all car leather types?</strong>
            </p>
            <p className="font-sans text-gray-800">
              We work on pigmented and aniline automotive leather from luxury and standard brands. Our services include cleaning, conditioning, stain removal, color restoration, and redyeing to match your interior.
            </p>
            <p className="mt-4 font-sans text-gray-800">
              <strong>Can you match my car&apos;s existing leather color?</strong>
            </p>
            <p className="font-sans text-gray-800">
              Yes. We match factory colors so repaired or redyed areas blend with the rest of your interior. We can also apply protection to help prevent premature fading and staining.
            </p>
          </Guide>

          <Issues
            id="issues"
            heading="Common auto leather problems"
            issues={issuesData}
            columnsPerRow={3}
            mediaAboveTitle
          />

          <LeatherRestorationBeforeAfter
            items={beforeAfterItems}
            subtitle="Auto Leather Restoration"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
