import type { Metadata } from "next";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import LeatherRestorationBeforeAfter from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";
import type { LeatherRestorationBeforeAfterItem } from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Guide from "@/components/Guide";
import Issues from "@/components/Issues";

const title = "Aircraft Leather Restoration | ReLeather";
const description =
  "Full service leather cleaning, detailing, and refinishing for aircraft interiors including private jet, charters, business jet. Services that meet aircraft maintenance standards.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/aircraft-leather-cleaning" },
  openGraph: { url: "/aircraft-leather-cleaning", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const processSteps = [
  {
    title: "Get Quote",
    description: <p>Fill out form. Include photos.</p>,
  },
  {
    title: "Onsite Maintenence",
    description: <p>LAX, John Wayne Airport, more</p>,
  },
  {
    title: "Delivery",
    description: <p>Fast and Flexible Turnaround</p>,
  },
];

const benefitsData = [
  {
    title: "Leather Cleaning and Deodorizing",
    description: (
      <p>deep cleaning and deodorizing for aircraft leather; remove ingrained surface soiling, restore natural fragrance of leather</p>
    ),
  },
  {
    title: "Color Restoration and Refinishing",
    description: (
      <p>treat sun damaged and color faded leather; restore original color and finish for a refreshed aircraft interior</p>
    ),
  },
  {
    title: "Leather Conditioning and Moisturizing",
    description: (
      <p>moisturize leather and replenish natural oils; prevent surface drying and cracking from sunlight exposure</p>
    ),
  },
  {
    title: "Leather Stain and Spot Removal",
    description: (
      <p>treat minor scuffs, stains, spills, and oil spotting; refinishing solutions tailored to each type of issue</p>
    ),
  },
  {
    title: "Leather Protection",
    description: (
      <p>apply finish protection; helps prevent premature fading, cracking, and wear</p>
    ),
  },
  {
    title: "Aircraft Interior Specialists",
    description: (
      <p>We perform leather services that meet aircraft maintenance standards for private jet, charters, and business jet.</p>
    ),
  },
];

const issuesData = [
  {
    title: "Soiled and faded leather",
    body: (
      <p>
        <strong>Soiled and faded leather</strong> on aircraft seats and interior surfaces is common after repeated use. Our aircraft leather restoration includes deep cleaning and pigmentation touch-ups to restore a clean, luxurious look that meets aircraft maintenance standards.
      </p>
    ),
  },
  {
    title: "Sun damage and color fading",
    body: (
      <p>
        <strong>Sun damage and color fading</strong> can make aircraft leather look worn before its time. We use conditioning and color restoration solutions tailored specifically to each type of issue. Routine maintenance helps keep your leather looking luxurious for every flight.
      </p>
    ),
  },
  {
    title: "Scuffs, stains, and surface wear",
    body: (
      <p>
        <strong>Scuffs, stains, and surface wear</strong> from daily use can be addressed with our time-tested leather refinishing techniques. From minor scuffs and spills to oil spotting and surface scratches, our skilled technicians deliver refreshed and renewed results for your aircraft interior.
      </p>
    ),
  },
];

const beforeAfterItems: LeatherRestorationBeforeAfterItem[] = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-aircraft-beige-pigmented-soiled-faded-private-jet-project-interior-newport-beach-before.jpg",
    beforeAlt: "Aircraft interior before restoration – beige pigmented private jet Newport Beach",
    beforeTitle: "Aircraft interior before restoration – beige pigmented private jet Newport Beach",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-aircraft-beige-pigmented-soiled-faded-private-jet-project-interior-newport-beach-after.jpg",
    afterAlt: "Aircraft interior after restoration – beige pigmented private jet Newport Beach",
    afterTitle: "Aircraft interior after restoration – beige pigmented private jet Newport Beach",
    serviceType: "Leather Restoration",
    furniture: "Aircraft",
    color: "Beige",
    problem: "Soiled Faded",
    location: "Newport Beach",
    description: (
      <p>This project restored the interior of a beige pigmented private jet. The leather was soiled and faded; restoration included cleaning, color correction, and finishing to rejuvenate the luxurious aircraft interior, with extra images documenting recoloring work.</p>
    ),
  },
];

export default function AircraftLeatherCleaningPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Aircraft Leather Restoration"
            subtitle={
              <>
                <strong>Looking to restore your aircraft leather interior?</strong>
                <br />
                <em>Professional leather care for private jets and business aircraft.</em>
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Aircraft Leather Restoration",
              "aria-label": "Aircraft Leather Restoration",
              label: "Aircraft Leather Refurbishing Quote",
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/before-after/leather-restoration-aircraft-beige-pigmented-soiled-faded-private-jet-project-interior-newport-beach-extra.jpg",
              alt: "Aircraft leather interior restoration – private jet Newport Beach",
              title: "Aircraft leather interior restoration – private jet Newport Beach",
              width: 450,
              height: 450,
            }}
            body={
              <>
                <p>
                  We offer full service leather cleaning, detailing, and refinishing for aircraft interiors including private jet, charters, business jet. We perform leather services that meet aircraft maintenance standards.
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
            title="Leather services we provide to aircraft interiors"
            benefits={benefitsData}
          />

          <Guide id="guide">
            <h2 className="border-b-2 border-releather-orange pb-1 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              The Best Way To Restore &amp; Protect Your Aircraft Leather Seats
            </h2>
            <p className="mt-2 font-sans text-lg font-semibold text-black">
              John Wayne Airport, Orange County, CA
            </p>

            <div className="my-6 border-l-4 border-releather-orange bg-gray-100 p-4 shadow-[4px_4px_0_0_#000] sm:p-5">
              <p className="font-sans text-gray-800">
                Leather is the perfect material for an aircraft interior for its comfort and luxury, especially on a long flight. If you don&apos;t take care of it, leather will start to look shabby after just one or two flights. Our aircraft leather restoration service will make sure your leather is looking its best during every trip with our expert leather care techniques which involve more than just cleaning off dirt—we use conditioning and color restoration solutions tailored specifically towards each type of issue, no matter what kind of stains or wear.
              </p>
            </div>

            <div className="my-6 border-l-4 border-black bg-white p-4 shadow-[4px_4px_0_0_#000] sm:p-5">
              <p className="font-sans text-gray-800">
                Investing in a professional leather care and maintenance plan will help you maintain the integrity of your aircraft&apos;s leather interior. Leather needs to be cleaned on occasion so that it doesn&apos;t fade, crack, or show wear before its time. Make sure your plane always has clean and well-maintained leather seats. If you&apos;re looking to offer your customers some added value, this is a perfect way. Scheduling routine maintenance will help keep your leather looking luxurious. So don&apos;t overlook its importance!
              </p>
            </div>

            <div className="my-6 border-l-4 border-releather-orange bg-gray-100 p-4 shadow-[4px_4px_0_0_#000] sm:p-5">
              <p className="font-sans text-gray-800">
                Leather seats are a great way to add class and luxury on any aircraft. The problem? Every day sunlight exposure can lead to premature color fading, surface drying and cracking, if not treated by a professional leather specialist! Make sure to leave an impressive looking leather interior for your airplane passengers to enjoy and praise.
              </p>
            </div>

            <div className="my-6 border-l-4 border-black bg-white p-4 shadow-[4px_4px_0_0_#000] sm:p-5">
              <p className="font-sans text-gray-800">
                We at ReLeather use time tested and proven Leather Refinishing techniques to get the best results for our customers. Getting your leather looking refreshed and renewed is paramount. As specialists in the leather service industry with years of experience under our belt, we have seen almost all of the issues that can arise when it comes to restoring and renewing leather. From minor scuffs, stains or spills, surface scratches; oil spotting due excessive use over time—we&apos;re here for you!
              </p>
            </div>

            <div className="my-6 border-l-4 border-releather-orange bg-gray-100 p-4 shadow-[4px_4px_0_0_#000] sm:p-5">
              <p className="font-sans text-gray-800">
                When your leather needs professional TLC, there is no better solution than our skilled technicians. Do-it yourself treatments will only provide temporary relief and kits often fail to give the desired results because they&apos;re inadequate for natural materials like leather which demand more than a one size fits all remedy. We are at ReLeather offer specialized attention for your valuable leather private jet interior and it will make all the difference. Request a quote today. Make sure to send pictures with your inquiry.
              </p>
            </div>

            <h3 className="mt-10 border-b-2 border-black pb-1 font-display text-xl font-normal tracking-tight text-black sm:text-2xl">
              Before &amp; After
            </h3>
            <div className="my-6 grid grid-cols-1 gap-4 border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#f8991d] sm:grid-cols-2 sm:gap-6 sm:p-5">
              <figure className="overflow-hidden border-4 border-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-aircraft-beige-pigmented-soiled-faded-private-jet-project-interior-newport-beach-before.jpg"
                  alt="Aircraft leather interior before restoration – Newport Beach"
                  width={450}
                  height={450}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
                <figcaption className="brutalist-caption border-t-4 border-black bg-black px-3 py-2 font-sans font-bold uppercase tracking-wider text-white">
                  Before
                </figcaption>
              </figure>
              <figure className="overflow-hidden border-4 border-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-aircraft-beige-pigmented-soiled-faded-private-jet-project-interior-newport-beach-after.jpg"
                  alt="Aircraft leather interior after restoration – Newport Beach"
                  width={450}
                  height={450}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
                <figcaption className="brutalist-caption border-t-4 border-black bg-black px-3 py-2 font-sans font-bold uppercase tracking-wider text-white">
                  After
                </figcaption>
              </figure>
            </div>

            <div className="mt-10 border-4 border-black bg-gray-100 p-4 sm:p-5">
              <p className="font-sans text-gray-800">
                <strong>How much does aircraft leather restoration cost?</strong>
              </p>
              <p className="mt-2 font-sans text-gray-800">
                Cost depends on the scope of work—interior size, number of seats, and condition of the leather. Request a quote with photos for an estimate tailored to your aircraft.
              </p>
              <p className="mt-4 font-sans text-gray-800">
                <strong>How long does aircraft leather restoration take?</strong>
              </p>
              <p className="mt-2 font-sans text-gray-800">
                Turnaround time varies by project size and schedule. Typical jobs range from a few days to about a week. We can provide an estimate when you submit your inquiry.
              </p>
              <p className="mt-4 font-sans text-gray-800">
                <strong>Do you service aircraft at John Wayne Airport or other locations?</strong>
              </p>
              <p className="mt-2 font-sans text-gray-800">
                We serve aircraft owners and operators in Orange County, CA, including John Wayne Airport, and can work with your schedule for drop-off, pickup, or on-site coordination. Send pictures with your quote request to get started.
              </p>
            </div>
          </Guide>

          <Issues
            id="issues"
            heading="Common aircraft leather problems"
            issues={issuesData}
            columnsPerRow={3}
            mediaAboveTitle
          />

          <LeatherRestorationBeforeAfter
            items={beforeAfterItems}
            subtitle="Aircraft Leather Restoration"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
