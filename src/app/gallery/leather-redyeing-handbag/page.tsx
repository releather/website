import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import JsonLd from "@/components/JsonLd";
import LeatherRestorationBeforeAfter from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";
import type { LeatherRestorationBeforeAfterItem } from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Guide from "@/components/Guide";
import Issues from "@/components/Issues";

const title = "Leather Dyeing Handbags & Purses | ReLeather";
const description =
  "Leather cleaning, dyeing, and color restoration for designer handbags and purses. Deep clean, restore color, change color, stain removal, leather conditioning.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/gallery/leather-redyeing-handbag" },
  openGraph: { url: "/gallery/leather-redyeing-handbag", title, description, type: "website" },
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
    title: "Leather Cleaning and Conditioning",
    description: (
      <p>deep clean and polish &amp; remove surface dirt, replenish natural oils</p>
    ),
  },
  {
    title: "Color Restoration and Refinishing",
    description: (
      <p>treat surface wear and restore original color and finish</p>
    ),
  },
  {
    title: "Leather Softening and Moisturizing",
    description: (
      <p>soften and preserve leather leaving smooth finish</p>
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

const issuesData = [
  {
    title: "Dirty or soiled leather",
    body: (
      <p>
        <strong>Dirty or soiled leather</strong> builds up over time and hard use along with poor maintenance. Our leather deep cleaning service removes grime and surface dirt agitating tough soiling within the pores of the leather. We use eco-friendly leather cleaning solutions to thoroughly clean the leather surface and reveal the natural color. We add a finish protection to prevent water spotting. Leather cleaning service adds years to the life of your handbag.
      </p>
    ),
    media: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src="https://res.cloudinary.com/releather-com/image/upload/before-after/leather-dyeing/handbag-purse-bag/dirty-leather-handbag.jpg"
        alt="Dirty Soiled Leather Handbag Purse"
        title="Dirty Soiled Leather Handbag Purse"
        width={400}
        height={400}
        loading="lazy"
      />
    ),
  },
  {
    title: "Sun and color faded leather",
    body: (
      <p>
        <strong>Sun and color faded leather</strong> gradually loses its factory color and finish over time with exposure to sunlight. UV damage causes a discolored, uneven patina, blotchy colored leather surface. A combination of Leather Cleaning and Conditioning and Leather Restoration brings life back to the leather handbag. We add a finish protection to prevent premature color loss or fading.
      </p>
    ),
    media: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src="https://res.cloudinary.com/releather-com/image/upload/before-after/leather-dyeing/handbag-purse-bag/sun-color-faded-leather-handbag.jpg"
        alt="Sun Color Faded Leather Handbag Purse"
        title="Sun Color Faded Leather Handbag Purse"
        width={400}
        height={400}
        loading="lazy"
      />
    ),
  },
  {
    title: "Stained or spotting leather",
    body: (
      <p>
        <strong>Stained or spotting leather</strong> can be spot treated or refinished entirely to blend the color and finish. Usually accidental stains such as water spotting, pen or ink marks, bodily oils, make up or nail polish cannot be removed with spot cleaning. Harsh penetrating stains seep through the surface of porous leather. Seek our Leather Restoration and Dyeing services to restore the color and finish of your handbag.
      </p>
    ),
    media: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src="https://res.cloudinary.com/releather-com/image/upload/before-after/leather-dyeing/handbag-purse-bag/stained-spot-leather-handbag.jpg"
        alt="Stain Spot Leather Handbag Purse"
        title="Stain Spot Leather Handbag Purse"
        width={400}
        height={400}
        loading="lazy"
      />
    ),
  },
  {
    title: "Dried out or stiff leather",
    body: (
      <p>
        <strong>Dried out or stiff leather</strong> occurs when failing to moisturize or condition your leather handbag on a routine basis. The stiffness of dry leather is unyielding to the touch. Healthy leather is conditioned regularly to prevent premature dryness and cracking. Seek our Leather Conditioning and Softening service to get your leather feeling as soft and supple as possible. Feel the difference!
      </p>
    ),
    media: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src="https://res.cloudinary.com/releather-com/image/upload/before-after/leather-dyeing/handbag-purse-bag/dry-stiff-leather-handbag.jpg"
        alt="Dried Out Stiff Leather Handbag Purse"
        title="Dried Out Stiff Leather Handbag Purse"
        width={400}
        height={400}
        loading="lazy"
      />
    ),
  },
  {
    title: "Scratched or scuffed leather",
    body: (
      <p>
        <strong>Scratched or scuffed leather</strong> is normal rough wear and tear and can be spot treated or fully redyed to restore the original color and finish of the leather. Scuffing or surface scratches can damage or remove the grain of the leather. Restoring the leather can conceal imperfections of the leather. Try our Leather Restoration and Dyeing service to get your leather back in shape.
      </p>
    ),
    media: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src="https://res.cloudinary.com/releather-com/image/upload/before-after/leather-dyeing/handbag-purse-bag/scratched-scuffed-leather-handbag.jpg"
        alt="Scratched Scuffed Leather Handbag Purse"
        title="Scratched Scuffed Leather Handbag Purse"
        width={400}
        height={400}
        loading="lazy"
      />
    ),
  },
  {
    title: "Wrong colored leather",
    body: (
      <p>
        <strong>Wrong colored leather</strong> can change to a color of your desire. We recommend dyeing from a light color foundation to a darker one. We have a wide range of colors from which to choose. For those customers looking for a change in color to add style to their leather handbag, we recommend seeking our Leather Dyeing service.
      </p>
    ),
    media: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src="https://res.cloudinary.com/releather-com/image/upload/before-after/leather-dyeing/handbag-purse-bag/change-color-leather-handbag.jpg"
        alt="Change Color Dye Leather Handbag Purse"
        title="Change Color Dye Leather Handbag Purse"
        width={400}
        height={400}
        loading="lazy"
      />
    ),
  },
];

const beforeAfterItems: LeatherRestorationBeforeAfterItem[] = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-dyeing/handbag-purse-bag/leather-dyeing-handbag-1.jpg",
    beforeAlt: "Leather Color Restoring Designer Handbag",
    beforeTitle: "Leather Color Restoring Designer Handbag",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-dyeing/handbag-purse-bag/leather-dyeing-handbag-1.jpg",
    afterAlt: "Leather Color Restoring Designer Handbag",
    afterTitle: "Leather Color Restoring Designer Handbag",
    serviceType: "Leather Refinishing",
    furniture: "Handbag",
    color: "—",
    problem: "Color fading and discoloration",
    location: "Colorado, USA",
    description: (
      <>
        <p>
          We received this designer handbag for deep cleaning but the color seemed to be fading. The customer wondered if it could be re-colored and sealed with a protectant to make it last longer. We treated the light color fading and discoloration, restoring the original color and applying a sealant for added protection. The sealer protects the color finish and acts as a barrier against body oils and water spotting.
        </p>
        <p className="mt-2">
          <Link
            href="/services/leather-restoration"
            className="inline-block border-4 border-black bg-releather-orange px-4 py-2 font-sans font-bold text-white shadow-[4px_4px_0_0_#000] hover:bg-black hover:text-white"
            style={{ color: "white" }}
          >
            Leather Refinishing
          </Link>
        </p>
      </>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-dyeing/handbag-purse-bag/purse-redyeing-stain-spot-removal-front.jpg",
    beforeAlt: "Leather Color Redyeing Stain Removal Fossil Purse Handbag",
    beforeTitle: "Leather Color Redyeing Stain Removal Fossil Purse Handbag",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-dyeing/handbag-purse-bag/purse-redyeing-stain-spot-removal-back.jpg",
    afterAlt: "Leather Redye Purse Spot Removal Back View",
    afterTitle: "Leather Redye Purse Spot Removal Back View",
    serviceType: "Leather Redyeing Purse",
    furniture: "Purse",
    color: "—",
    problem: "Water stain removal and redyeing",
    location: "Orange County, USA",
    description: (
      <>
        <p>
          Here we have a leather purse from the brand Fossil. The customer wanted to have the water spotting along the bottom removed and the entire handbag dyed. This type of leather does not repel water effectively as compared to protected finished leathers. Removing the staining and redyeing the leather to the manufacturer color and polished finish brought this purse back to life.
        </p>
        <p className="mt-2">
          <Link
            href="/services/leather-restoration"
            className="inline-block border-4 border-black bg-releather-orange px-4 py-2 font-sans font-bold text-white shadow-[4px_4px_0_0_#000] hover:bg-black hover:text-white"
            style={{ color: "white" }}
          >
            Leather Redyeing Purse
          </Link>
        </p>
      </>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-dyeing/handbag-purse-bag/leather-redying-color-gucci-bag.jpg",
    beforeAlt: "Leather Color Redyeing Gucci Handbag",
    beforeTitle: "Leather Color Redyeing Gucci Handbag",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/before-after/leather-dyeing/handbag-purse-bag/leather-redying-color-gucci-bag.jpg",
    afterAlt: "Leather Color Redyeing Gucci Handbag",
    afterTitle: "Leather Color Redyeing Gucci Handbag",
    serviceType: "Leather Redyeing Gucci Handbag",
    furniture: "Gucci Handbag",
    color: "—",
    problem: "Surface wear, drying, oil build up, color fading",
    location: "South Orange County, USA",
    description: (
      <>
        <p>
          This Gucci leather handbag was dropped off to our shop looking for major leather help including treating surface wear, drying, oil build up, and light soiling and spotting, and color fading. Designer bags from high end fashion houses such as Prada, Gucci and Thomas Wylde produce high quality natural leather supple and smooth to the touch and finished with minimal protective coating. Naturally untreated aniline leather loses some of these characteristics from normal wear and tear and sun fading. We have experience restoring the color and finish to make the handbag look and feel great and fashionable again.
        </p>
        <p className="mt-2">
          <Link
            href="/services/leather-restoration"
            className="inline-block border-4 border-black bg-releather-orange px-4 py-2 font-sans font-bold text-white shadow-[4px_4px_0_0_#000] hover:bg-black hover:text-white"
            style={{ color: "white" }}
          >
            Leather Redyeing Gucci Handbag
          </Link>
        </p>
      </>
    ),
  },
];

// JSON-LD: BreadcrumbList for multi-level route
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.releather.com" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://www.releather.com/gallery" },
    { "@type": "ListItem", position: 3, name: "Leather Dyeing Handbags & Purses", item: "https://www.releather.com/gallery/leather-redyeing-handbag" },
  ],
};

export default function LeatherRedyeingHandbagPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Leather Dyeing Handbags & Purses"
            subtitle={
              <>
                <strong>Looking to revive a quality leather handbag in your closet?</strong>
                <br />
                <em>Preserve your quality leather!</em>
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Handbag Leather Dyeing",
              "aria-label": "Handbag Leather Dyeing",
              label: "Handbag Leather Dyeing Quote",
            }}
            videoEmbed={{ youtubeId: "SuUbSUudhBk", title: "Handbag Leather Dyeing" }}
            body={
              <>
                <p>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.releather.com/leather-dyeing-handbag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="float-right ml-6 mb-4 inline-block border-4 border-black bg-[#3B5998] px-4 py-2 font-sans font-bold text-white shadow-[4px_4px_0_0_#000] hover:opacity-90"
                  >
                    Share on Facebook
                  </a>
                  Overview: We offer Leather Cleaning, Dyeing, and Color Restoration for your favorite designer handbags and purses. If you own a handbag or purse that&apos;s looking dingy and stained, showing wear and tear, discolored and color faded, or simply needs a new color, we have you covered! Our leather dyeing handbag service restores life and style to your bag.
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
            title="Leather services we provide to handbags and purses"
            benefits={benefitsData}
          />

          <Guide id="guide">
            <h2 className="border-b-2 border-releather-orange pb-1 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Handbag and Purse Leather Cleaning, Restoration, and Dyeing
            </h2>
            <div className="my-6 overflow-hidden">
              <div className="float-right ml-6 mb-4 w-[280px] shrink-0 sm:w-[320px]">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/tZ_fUWosXCU?rel=0&showinfo=0"
                  title="Leather handbag restoration and dyeing"
                  allow="encrypted-media"
                  allowFullScreen
                  className="max-w-full border-4 border-black"
                />
              </div>
              <p>
                At ReLeather we apply leather problem solving to your valuable leather bags and goods using our many years of industry experience. When you chose us as your go to leather experts, one of our certified Leather Cleaning Technicians (LCT) carefully inspects your leather handbags for damage and other signs of wear and tear and offers a service that best suits your leather. Using a multistep cleaning and dyeing process, we deliver a fully restored and revitalized leather handbag or purse aided by a careful quality check. Among our wide variety of leather services we provide to handbags and purses are leather deep cleaning and moisturizing, leather conditioning and softening, leather dying and redyeing, leather restoration and refinishing, change color, stain and spot removal. ReLeather understands the value of leather and designer handbags and takes pride in providing the best results.
              </p>
            </div>
            <blockquote className="brutalist-caption my-6 font-sans text-lg">
              <p>
                If you are looking to repair or service your leather handbag or purse, we love to hear from you. We can identify the issue and provide our recommendations and pricing. ReLeather is here to help!
              </p>
            </blockquote>
            <p>
              <strong>How much does it cost to clean, dye, restore, or redye my leather handbag?</strong>
            </p>
            <p>The cost varies depending on size, style, and condition of the leather item.</p>
            <p>
              <strong>How long does it take to complete the leather repair job?</strong>
            </p>
            <p>The length of time to complete the job depends on the type of service. The typical turnaround time is 3-5 days.</p>
          </Guide>

          <Issues
            id="issues"
            heading="6 Common Leather Problems with Leather Handbags / Purses"
            issues={issuesData}
            columnsPerRow={3}
            mediaAboveTitle
          />

          <LeatherRestorationBeforeAfter
            items={beforeAfterItems}
            subtitle="Leather Bag Recolored and Change Color"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
