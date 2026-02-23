import type { Metadata } from "next";
import Image from "next/image";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import BeforeAfter from "@/components/BeforeAfter";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import Guide from "@/components/Guide";
import Issues from "@/components/Issues";
import Process from "@/components/Process";
import RestuffingFoamReplacementGuideContent from "./RestuffingFoamReplacementGuideContent";
import { restuffingFoamReplacementFaqItems } from "./restuffingFoamReplacementFaq";
import {
  restuffingFoamReplacementIssuesHeading,
  restuffingFoamReplacementIssuesItems,
} from "./restuffingFoamReplacementIssues";

const title = "Refilling Cushions Foam Replacement | ReLeather";
const description =
  "Leather seat cushion foam replacement and restuffing refilling. Replace flat, sagging, broken down cushions. HR foam, dacron. Get a quote.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/restuffing-foam-replacement" },
  openGraph: { url: "/services/restuffing-foam-replacement", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const conditionImages = [
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1682776095/before-after/sagging-leather-couch-cushions-no-support-stuffing.jpg",
    alt: "Saggy Cushions - Leather couch cushions sagging no support stuffing",
    title: "Saggy Cushions - Leather couch cushions sagging no support stuffing",
    label: "Saggy Cushions",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1682776671/before-after/flat-leather-seat-cushions-sofa-no-padding.jpg",
    alt: "Flat Cushions - Leather seat cushions flat no padding stuffing",
    title: "Flat Cushions - Leather seat cushions flat no padding stuffing",
    label: "Flat Cushions",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/v1682773688/before-after/leather-couch-cushions-saggy-broken-down-too-soft-lumpy.jpg",
    alt: "Lumpy Cushions - Leather couch cushions saggy broken down too soft lumpy",
    title: "Lumpy Cushions - Leather couch cushions saggy broken down too soft lumpy",
    label: "Lumpy Cushions",
  },
];

const restuffingProcessSteps = [
  {
    title: "Seat Cushion Foam Replacement",
    description:
      "We'll remove the old foam core of your seat cushion and replace it with a high-quality foam core that meets your comfort and support requirements.",
  },
  {
    title: "Back Cushion Refilling",
    description:
      "For reclining back cushions, we'll refill them with additional polyester/fiber padding to ensure optimal comfort.",
  },
];

const restuffingBenefits = [
  {
    title: "Foam Replacement",
    description: (
      <>
        <ul className="list-inside list-disc space-y-1">
          <li>replace flat, loose, soft, broken down cushions and pillows</li>
          <li>reinstall new custom cut foam cushions</li>
          <li>restores seat firmness and support</li>
          <li>promotes maximum degree of comfort and support over time</li>
        </ul>
        <p className="mt-3">
          <em>My leather couch cushions are broken down, too soft, sink, have no support!</em>
        </p>
      </>
    ),
  },
  {
    title: "Refilling Cushions",
    description: (
      <>
        <ul className="list-inside list-disc space-y-1">
          <li>refill new quality padding to seating and back inserts</li>
          <li>including seats, back pillows and armrests cushions</li>
          <li>promotes greater level of comfort/softness while remodeling shape and style cushioning</li>
        </ul>
        <p className="mt-3">
          <em>My leather sofa cushions are flat, sag, no padding or enough stuffing!</em>
        </p>
      </>
    ),
  },
  {
    title: "Frame Support",
    description: (
      <ul className="list-inside list-disc space-y-1">
        <li>inspect and reinforce the suspension of the furniture</li>
        <li>including the high resistance/coils/jute webbing mounted on the frame</li>
        <li>reinforce the support of the wooden structure</li>
        <li>promotes frame stability and resistance under various stress and load conditions of everyday use</li>
      </ul>
    ),
  },
  {
    title: "Foam Material",
    description: (
      <>
        <ul className="list-inside list-disc space-y-1">
          <li>High Resiliency (HR) foam is the highest grade of polyurethane foam</li>
          <li>weighing 2.5 lbs or more per cubic foot</li>
          <li>various high density grades available</li>
          <li>⊕ soft ⊕ medium ⊕ firm ⊕ extra firm</li>
        </ul>
        <p className="mt-3 flex justify-center"><Image
            src="https://res.cloudinary.com/releather-com/image/upload/v1682585176/samples/foam-padding-seat-cushion-sample.png"
            alt="Leather Cushion Foam Material Cushion Insert"
            title="Leather Cushion Foam Material Cushion Insert"
            width={275}
            height={206}
            loading="lazy"
          />
        </p>
      </>
    ),
  },
  {
    title: "Padding Material",
    description: (
      <>
        <ul className="list-inside list-disc space-y-1">
          <li>Types of padding include ⊕ Polyester loose fiber ⊕ dacron</li>
          <li>Polyester loose fiber filling</li>
          <li>1 - 2 oz. dacron filling</li>
        </ul>
        <p className="mt-3 flex justify-center"><Image
            src="https://res.cloudinary.com/releather-com/image/upload/v1682585887/samples/refill-cushions-dacron-padding-material.jpg"
            alt="Refill Restuffing Cushions with Dacron Padding"
            title="Refill Cushions with Dacron Padding Refill Restuffing Cushions with Dacron Padding"
            loading="lazy"
          />
        </p>
      </>
    ),
  },
];

const restuffingBeforeAfterItems = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_350/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff/v1682860440/before-after/Leather-Upholstery-Service-Replace-Foam-Restuffing-Before.jpg",
    beforeAlt:
      "Before Featured  Work - Replaced Old Broken Down Leather Couch Cushion Foams with Firm HR Foam",
    beforeTitle:
      "Before Featured  Work - Replaced Old Broken Down Leather Couch Cushion Foams with Firm HR Foam",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/e_brightness:30/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_350/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff/v1682860440/before-after/Leather-Upholstery-Service-Replace-Foam-Restuffing-After.jpg",
    afterAlt:
      "After Featured  Work - Replaced Old Broken Down Leather Couch Cushion Foams with Firm HR Foam",
    afterTitle:
      "After Featured  Work - Replaced Old Broken Down Leather Couch Cushion Foams with Firm HR Foam",
    caption: "Replace Foam Restuffing",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_350/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff/v1682776095/before-after/sagging-leather-couch-cushions-no-support-stuffing.jpg",
    beforeAlt:
      "Before Featured Work - Refilled Restuffed Down Feather Cushions with Added Padding Stuffing Cushioning Restoration Hardware Leather Couch",
    beforeTitle:
      "Before Featured Work - Refilled Restuffed Down Feather Cushions with Added Padding Stuffing Cushioning Restoration Hardware Leather Couch",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_350/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff/v1631067838/before-after/leather-cleaning-conditioning-recoloring-leather-sofa-after.jpg",
    afterAlt:
      "After Featured Work - Refilled Restuffed Down Feather Cushions with Added Padding Stuffing Cushioning Restoration Hardware Leather Couch",
    afterTitle:
      "After Featured Work - Refilled Restuffed Down Feather Cushions with Added Padding Stuffing Cushioning Restoration Hardware Leather Couch",
    caption: "Refilled Restuffed Cushions with Added Padding",
  },
];

export default function RestuffingFoamReplacementPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Refilling Cushions Foam Replacement"
            subtitle="Give your leather cushions firm support!"
            primaryCta={{
              href: "/estimate",
              title:
                "Leather Seat Cushion Foam Replacement and Restuffing Refilling Service Quote Estimate for Couch, Sofa, Recliner, or Chair",
              "aria-label":
                "Leather Seat Cushion Foam Replacement and Restuffing Refilling Service Quote Estimate for Couch, Sofa, Recliner, or Chair",
              label: (
                <>
                  Get <span className="hidden sm:inline">Cushion Foam Replacement </span>
                  Quote!
                </>
              ),
            }}
            secondaryCta={{
              href: "tel:+19495294727",
              title:
                "Leather Seat Cushion Foam Replacement and Restuffing - Call Us",
              "aria-label":
                "Leather Seat Cushion Foam Replacement and Restuffing - Call Us",
              label: "Call Us",
            }}
            videoEmbed={{
              youtubeId: "UxSOMQr2IeU",
              title: "ReLeather foam replacement restuffing",
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
              If you&apos;re looking for a{" "}
              <em>cost-effective and efficient way to improve the comfort and durability of your seating</em>
              , High Resilience Foam (HR Foam) is a great solution. At ReLeather,
              we specialize in using HR Foam to replace old, worn-out seat foams,
              giving your furniture a new lease on life.
            </p>
            <h3 className="mt-6 font-sans text-lg font-bold text-black sm:hidden">
              <em>Recommended for:</em>
              <br />
              Saggy Cushions, Flat Cushions, Lumpy Cushions
            </h3>
            <h3 className="mt-6 hidden font-sans text-lg font-bold text-black sm:block">
              <em>Recommended for:</em> Saggy Cushions, Flat Cushions, Lumpy Cushions
            </h3>
            <ul className="mt-8 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3 lg:gap-4 lg:px-2">
              {conditionImages.map((item) => (
                <li key={item.label} className="text-center">
                  <div className="mx-auto max-w-[200px] border-4 border-black"><Image
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
            title="How Does Foam Replacement & Restuffing Work?"
            steps={restuffingProcessSteps}
            extraMedia={
              <figure className="brutalist-image-frame w-full max-w-[320px]"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/bo_32px_solid_white/a_10/b_rgb:23262f/before-after/restuffed-refilled-leather-couch-cushions-sectional.jpg"
                  alt="Restuffed refilled leather couch cushions sectional"
                  title="Restuffed refilled leather couch cushions sectional"
                  width={320}
                  height={240}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </figure>
            }
          />

          <Benefits
            id="benefits"
            title="Foam Replacement & Refilling Benefits"
            benefits={restuffingBenefits}
          />

          <BeforeAfter
            id="before-after"
            heading="Before & After"
            subheading="New Foam Cushion Results"
            intro="Got an old saggy couch? Add life and comfort to your sagging and broken down cushions with foam replacements and re-stuffing. Couch seat and back cushions lose their firmness and comfy feel over time. If your seat cushions sink down and offer no support we recommend replacing the foam inserts. We can custom cut any size and shape. We stock many grades of foam from firm or high density to soft or low density. If the cushions just need extra filling we can add durable stuffing materials."
            items={restuffingBeforeAfterItems}
          />

          <Guide
            id="guide"
            header={{
              badge: "Service Guide",
              title: "Foam Replacement & Restuffing",
            }}
          >
            <RestuffingFoamReplacementGuideContent />
          </Guide>

          <Issues
            id="issues"
            heading={restuffingFoamReplacementIssuesHeading}
            issues={restuffingFoamReplacementIssuesItems}
            mediaBelowTitle
            columnsPerRow={3}
          />

          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={restuffingFoamReplacementFaqItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
