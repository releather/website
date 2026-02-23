import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import LeatherUpholsteryBeforeAfter from "./LeatherUpholsteryBeforeAfter";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import Guide from "@/components/Guide";
import Issues from "@/components/Issues";
import Process from "@/components/Process";
import LeatherInfo from "@/components/LeatherInfo";
import LeatherUpholsteryGuideContent from "./LeatherUpholsteryGuideContent";
import { leatherUpholsteryFaqItems } from "./leatherUpholsteryFaq";
import {
  leatherUpholsteryIssuesHeading,
  leatherUpholsteryIssuesIntro,
  leatherUpholsteryIssuesItems,
} from "./leatherUpholsteryIssues";
import {
  leatherUpholsteryLeatherInfoHeading,
  leatherUpholsteryLeatherInfoIntro,
  leatherUpholsteryLeatherInfoTypes,
} from "./leatherUpholsteryLeatherInfo";

const title = "Leather Upholstery | ReLeather";
const description =
  "Full and partial leather reupholstery. Recover sofas, chairs, sectionals with Italian leather. Foam replacement, custom upholstery. Get a quote.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/leather-upholstery" },
  openGraph: { url: "/services/leather-upholstery", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const conditionImages = [
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/leather-recover-tear-hole-cushion-sofa.png",
    alt: "Fix torn leather sofa cushion - Recover and Reupholster",
    title: "Fix torn leather sofa cushion - Recover and Reupholster",
    label: "Torn",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/recover-leather-ripped-seams-cushion.png",
    alt: "Fix ripped seams leather sofa cushion - Recover and Reupholster Leather",
    title: "Fix ripped seams leather sofa cushion - Recover and Reupholster Leather",
    label: "Seams",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/fix-chewed-leather-dog-pet-damage-leather-sofa-cushion.png",
    alt: "Leather Material Swatches Colors",
    title: "Leather Material Swatches Colors",
    label: "Pet Damage",
  },
];

const leatherUpholsteryProcessSteps = [
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
    description: "We deliver your reupholstered furniture.",
  },
];

const leatherUpholsteryBenefits = [
  {
    title: "Leather Upholstery",
    description:
      "fully reupholster furniture with new leather of your choice, disassemble and replace old leather",
  },
  {
    title: "Leather Reupholstery",
    description:
      "partially reupholster furniture, replace badly worn or ripped leather with new matching leather",
  },
  {
    title: "Leather Material",
    description:
      "Types ⊕ Aniline-Luxury ⊕ Protected ⊕ Distressed ⊕ Embossed ⊕ Hair Hide Origin American ⊕ Itallian",
  },
  {
    title: "Foam Replacement",
    description: (
      <>
        restructure sinking seat cushions replace sinking foam material quality
        grade foam available.{" "}
        <Link
          href="https://www.releather.com/services/restuffing-foam-replacement"
          title="Foam Replacement and Restuffing Sofa Cushions"
        >
          Foam Replacement and Restuffing Sofa Cushions
        </Link>
      </>
    ),
  },
  {
    title: "Custom Upholstery",
    description:
      "Types ⊕ Chairs ⊕ Sofa ⊕ Dining ⊕ Chaise ⊕ Sectionals Material ⊕ Leather ⊕ No Fabric",
  },
];

const leatherUpholsteryBeforeAfterItems = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/recover-leather-recliner-chair-1.jpg",
    beforeAlt: "Leather Reupholstery Wingback Recliner Chair - Before",
    beforeTitle: "Leather Reupholstery Wingback Recliner Chair - Before",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/recover-leather-recliner-chair-2.jpg",
    afterAlt: "Leather Reupholstery Wingback Recliner Chair - After",
    afterTitle: "Leather Reupholstery Wingback Recliner Chair - After",
    caption: "Oiled Spotting on Recliner Chair",
    detail:
      "This aniline bustle-back recliner developed dark oil spotting from regular contact with hands and hair. Because aniline leather absorbs easily, restoration was limited. The chair was fully reupholstered in distressed tan leather, giving it a fresh, durable, like-new finish.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/leather-reupholstery-tufted-ottoman-b.jpg",
    beforeAlt: "Leather Upholstery Tufted Leather Ottoman - Before",
    beforeTitle: "Leather Upholstery Tufted Leather Ottoman - Before",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/leather-reupholstery-tufted-ottoman-a.jpg",
    afterAlt: "Leather Upholstery Tufted Leather Ottoman After",
    afterTitle: "Leather Upholstery Tufted Leather Ottoman After",
    caption: "Leather Reupholstery for Designer Tufted Ottoman",
    detail:
      "This tufted leather ottoman was originally upholstered in aniline leather. After years of use the leather surface became dry and worn out. In addition color loss from sun fading made this ottoman a good candidate for full leather upholstering. We recovered the hassock with new Italian leather.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/reupholster-designer-couch.jpg",
    beforeAlt:
      "Leather Reupholstery for Scandinavian Designer Leather Couch - Before",
    beforeTitle:
      "Leather Reupholstery for Scandinavian Designer Leather Couch - Before",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/reupholster-designer-couch-after.jpg",
    afterAlt:
      "Leather Reupholstery for Scandinavian Designer Leather Couch - After",
    afterTitle:
      "Leather Reupholstery for Scandinavian Designer Leather Couch - After",
    caption: "Leather Reupholstery for Scandinavian Designer Leather Couch",
    detail:
      "This pair of loveseats of approximately 30 years old deserved a transformation. We were pleased to restore this quality piece of Scandinavian leather furniture. While the structure of the couches were still in great shape, the leather upholstery was looking tired and marked with makeshift duct tape patches. The wear on the seats and armrests were especially worn down. The customer chose to recover the couch with the style, durability, and most of all the quality of Italian aniline leather. Thats all this softly upholstered couch needed to come back to life!",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/Huntington-Beach-Classic-Brown-Leather-Couch-Leather-Reupholstery-Upholstery-Seat-Cushions-Before.jpg",
    beforeAlt:
      "Classic Brown Leather Couch Reupholstered Seat Cushions in Huntington Beach, CA Before",
    beforeTitle:
      "Classic Brown Leather Couch Reupholstered Seat Cushions in Huntington Beach, CA Before",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/Huntington-Beach-Classic-Brown-Leather-Couch-Leather-Reupholstery-Upholstery-Seat-Cushions-After.jpg",
    afterAlt:
      "Classic Brown Leather Couch Reupholstered Seat Cushions in Huntington Beach, CA After",
    afterTitle:
      "Classic Brown Leather Couch Reupholstered Seat Cushions in Huntington Beach, CA After",
    caption: "Refurbish and Recover Seat Cushions",
    detail:
      "This classic brown leather sofa in Huntington Beach had dry, heavily worn cushions that began tearing. We replaced them with matching brown leather and restored the piece for a seamless, cohesive look that blends perfectly with the original frame.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/leather-reupholstery-wingback-chair-b.jpg",
    beforeAlt: "Leather Reupholstery for Classic Recliner Chair - Before",
    beforeTitle: "Leather Reupholstery for Classic Recliner Chair - Before",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/leather-reupholstery-wingback-chair-a.jpg",
    afterAlt: "Leather Reupholstery for Classic Recliner Chair - After",
    afterTitle: "Leather Reupholstery for Classic Recliner Chair - After",
    caption: "Leather Reupholstery for Classic Recliner Chair",
    detail:
      "This burgundy semi-aniline recliner was tearing in high-use areas. The customer selected protected pigmented leather in Merlot, imported from Italy. With a pebble grain texture and protective topcoat, it offers durability, easy maintenance, and a refined look.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/replace-fabric-with-leather-upholstery-ottoman-before.jpg",
    beforeAlt: "Fabric Foot Stool Gets Leather Makeover - Before",
    beforeTitle: "Fabric Foot Stool Gets Leather Makeover - Before",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/replace-fabric-with-leather-upholstery-ottoman-after.jpg",
    afterAlt: "Fabric Foot Stool Gets Leather Makeover - After",
    afterTitle: "Fabric Foot Stool Gets Leather Makeover - After",
    caption: "Fabric Foot Stool Gets Leather Makeover",
    detail:
      "This fabric foot stool and companion pieces were reupholstered in protected pigmented leather. The upgrade improves durability, wear resistance, and overall appearance, making the piece more practical for everyday use while enhancing its style.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/leather-reupholstery-wingback-chair-b.jpg",
    beforeAlt: "Oversized Chair – New Leather, New Color - Before",
    beforeTitle: "Oversized Chair – New Leather, New Color - Before",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/leather-reupholstery-wingback-chair-a.jpg",
    afterAlt: "Oversized Chair – New Leather, New Color - After",
    afterTitle: "Oversized Chair – New Leather, New Color - After",
    caption: "Oversized Chair – New Leather, New Color",
    detail:
      "This oversized Arizona chair showed fading and surface wear. Originally aniline leather, it was recovered in rich dark brown espresso leather. The color upgrade adds strength, depth, and improved durability for long-term everyday use.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/leather-reupholstery-chair-westnofa-furniture-before.jpg",
    beforeAlt: "Fabric Designer Chair Recovered - Before",
    beforeTitle: "Fabric Designer Chair Recovered - Before",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/leather-reupholstery-chair-westnofa-furniture-after.jpg",
    afterAlt: "Fabric Designer Chair Recovered - After",
    afterTitle: "Fabric Designer Chair Recovered - After",
    caption: "Fabric Designer Chair Recovered",
    detail:
      "This designer fabric chair was ready for a new look. The customer chose semi-aniline red leather with a subtle two-tone finish. We preserved the original button styling to maintain its character while enhancing durability and visual impact.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/recover-leather-ottoman.jpg",
    beforeAlt: "Recover Bonded Leather Ottoman Hassock",
    beforeTitle: "Recover Bonded Leather Ottoman Hassock",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/recover-leather-ottoman.jpg",
    afterAlt: "Recover Bonded Leather Ottoman Hassock",
    afterTitle: "Recover Bonded Leather Ottoman Hassock",
    caption: "RECOVER BONDED LEATHER OTTOMAN/HASSOCK",
    detail:
      "This large bonded leather storage ottoman received a complete facelift. The fiber leather material was worn through and peeling away. The solution was to re-upholstery new genuine leather. Here we see our customer chose an exotic cowhide leather stenciled in cheetah.",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/leather-recover-leather-chewed-by-dog-before.jpg",
    beforeAlt: "Recover Leather Couch Chewed by Dog - Before",
    beforeTitle: "Recover Leather Couch Chewed by Dog - Before",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-reupholstery/leather-recover-leather-chewed-by-dog-after.jpg",
    afterAlt: "Recover Leather Couch Chewed by Dog - After",
    afterTitle: "Recover Leather Couch Chewed by Dog - After",
    caption: "Recover Leather Couch Chewed by Dog",
    detail:
      "My dog used my couch as a chew toy. The vendor was of no help so I turned to ReLeather. Good call. They picked up, repaired, delivered, sourced the material and did an excellent repair. Awesome communication, customer service, and workmanship. Highly recommend in San Juan Capistrano.",
  },
];

export default function LeatherUpholsteryPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Leather Upholstery"
            subtitle="Give your leather new life!"
            primaryCta={{
              href: "/estimate",
              title: "Leather Upholstery Service Cost",
              "aria-label": "Leather Upholstery Service Cost",
              label: (
                <>
                  Get <span className="hidden sm:inline">Leather Upholstery </span>
                  Quote
                </>
              ),
            }}
            secondaryCta={{
              href: "tel:+19495294727",
              title: "Leather Upholstery - Call Us",
              "aria-label": "Leather Upholstery - Call Us",
              label: "Call Us",
            }}
            videoEmbed={{
              youtubeId: "BpivfJnFUxs",
              title: "ReLeather leather upholstery",
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
              Why replace your quality made furniture when you can recover with
              your choice of quality Italian leather. As leather upholstery
              experts we specialize in the complete reupholstering and recovering
              all types of leather furniture with the use of a variety of
              leathers. We are licensed upholsterers and certified leather
              technicians offering the best solutions to transform for your old
              leather furniture into like new furniture.
            </p>
            <h3 className="mt-6 font-sans text-lg font-bold text-black sm:hidden">
              <em>Recommended for:</em>
              <br />
              Chairs, Sofa, Dining, Chaise, Sectionals. Material: Leather.
            </h3>
            <h3 className="mt-6 hidden font-sans text-lg font-bold text-black sm:block">
              <em>Recommended for:</em> Chairs, Sofa, Dining, Chaise,
              Sectionals. Material: Leather.
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
            title="How Does Leather Upholstery Work?"
            subtitle="3 Steps"
            steps={leatherUpholsteryProcessSteps}
          />

          <Benefits
            id="benefits"
            title="Why Choose Leather Upholstery?"
            subtitle="Full, Partial, Material, Foam, Custom"
            benefits={leatherUpholsteryBenefits}
          />

          <LeatherUpholsteryBeforeAfter
            items={leatherUpholsteryBeforeAfterItems}
          />

          <Guide
            id="guide"
            header={{
              badge: "Service Guide",
              title: "Complete Leather Reupholstery Guide",
              tagline:
                "Don't Replace! Recover and Save! All you need to know to upholster your furniture:",
            }}
          >
            <LeatherUpholsteryGuideContent />
          </Guide>

          <LeatherInfo
            id="leather-info"
            heading={leatherUpholsteryLeatherInfoHeading}
            intro={leatherUpholsteryLeatherInfoIntro}
            types={leatherUpholsteryLeatherInfoTypes}
          />

          <Issues
            id="issues"
            heading={leatherUpholsteryIssuesHeading}
            subheading={leatherUpholsteryIssuesIntro}
            issues={leatherUpholsteryIssuesItems}
            columnsPerRow={4}
            mediaBelowTitle
          />

          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={leatherUpholsteryFaqItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
