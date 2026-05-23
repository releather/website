import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Guide from "@/components/Guide";
import LeatherForUpholsteryGuideContent from "./LeatherForUpholsteryGuideContent";
import SedonaProductBlock from "./SedonaProductBlock";
import PaletteProductBlock from "./PaletteProductBlock";
import LuxorProductBlock from "./LuxorProductBlock";
import ConcertoProductBlock from "./ConcertoProductBlock";
import UpholsteryLeatherHub from "@/components/UpholsteryLeatherHub";
import UpholsteryLeatherCollectionGrid from "@/components/UpholsteryLeatherCollectionGrid";
import LeatherMaterialQuoteEmbed from "./LeatherMaterialQuoteEmbed";
import { LEATHER_MATERIAL_QUOTE_URL } from "@/lib/upholsteryLeatherCollections";

const title = "Leather for Upholstery | ReLeather";
const description =
  "Italian upholstery leather and leather hides for furniture: sofa leather, furniture leather, and leather upholstery material by collection—distressed, aniline, pull-up, and more. Material quotes and reupholstery.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-for-upholstery" },
  openGraph: { url: "/leather-for-upholstery", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const leatherForUpholsteryProcessSteps = [
  {
    title: "Get Quote",
    description: "Choose leather. Fill out form.",
  },
  {
    title: "Place Order",
    description: "Accept quote and pay invoice.",
  },
  {
    title: "Delivery",
    description: "Average lead time is 1 week.",
  },
];

const leatherForUpholsteryBenefits = [
  {
    title: "Italian Finished Upholstery Leather",
    description:
      "Our leather is finished in Italy, known for its quality and craftsmanship. Expect rich color, beautiful texture, and a refined look.",
  },
  {
    title: "Large Range of Colors & Textures",
    description:
      "We stock high-end upholstery leather in many colors, grains, and finishes — from smooth and modern to natural and textured.",
  },
  {
    title: "Built for Residential & Commercial Use",
    description:
      "Our leather is durable and made to last. Ideal for sofas, chairs, offices, hospitality spaces, and high-traffic areas.",
  },
  {
    title: "Expert Leather Matching",
    description:
      "We can match your existing leather in both color and texture, making repairs and additions seamless.",
  },
  {
    title: "Samples Available",
    description:
      "Order leather samples to see and feel the material before you commit. Check the color and finish in your own space.",
  },
  {
    title: "Trusted by Designers & Upholsterers",
    description:
      "We supply premium upholstery leather to designers, homeowners, and commercial projects that require quality materials.",
  },
];

export default function LeatherForUpholsteryPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Leather for Upholstery"
            subtitle={
              <>
                <em className="text-releather-orange">
                  Express any decorating style
                </em>
                <br />
                with our Italian leather!
              </>
            }
            primaryCta={{
              href: LEATHER_MATERIAL_QUOTE_URL,
              title: "Leather for Upholstery Material Estimate",
              "aria-label": "Leather for Upholstery Material Estimate",
              label: "Get Leather Material Quote!",
            }}
            rightContent={<LeatherMaterialQuoteEmbed />}
            gridClassName="lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start xl:grid-cols-[minmax(0,5fr)_minmax(0,8fr)]"
            gridGapClassName="gap-8 lg:gap-10"
          />

          <section
            id="collections"
            className="scroll-mt-24 mt-8 lg:mt-10"
            aria-label="Browse upholstery leather collections"
          >
            <UpholsteryLeatherCollectionGrid />
          </section>

          <UpholsteryLeatherHub />

          <section
            id="intro"
            className="border-t-4 border-black pt-12"
            aria-labelledby="intro-heading"
          >
            <h2
              id="intro-heading"
              className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              Choose your line: Sedona, Palette, Luxor &amp; Concerto
            </h2>
            <div className="mt-4">
              <figure className="brutalist-image-frame float-right ml-6 mb-4 w-[280px] shrink-0 sm:w-[320px]"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/c_crop,g_south,h_240,w_435/v1654907997/leather/ReLeather-Leather-Types-Swatches-Selection-2.png"
                  alt="ReLeather leather types and swatches selection"
                  title="Leather types and swatches"
                  width={435}
                  height={240}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </figure>
              <p className="font-sans text-lg leading-relaxed text-gray-800">
                Beyond the <Link href="/leather-for-upholstery#collections" className="font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange">style collections above</Link>, we stock named Italian lines below—each tuned for real upholstery work. Our hides span colors and grains so you can match a project precisely. We also offer our clients{" "}
                <Link href="/services/leather-upholstery">
                  <strong>leather reupholstery service</strong>
                </Link>{" "}
                when you want the material and the craft under one roof.
              </p>
            </div>
          </section>

          <Process
            id="how-it-works"
            title="How Does It Work? Easy..."
            subtitle="Get Quote, Place Order, Delivery"
            steps={leatherForUpholsteryProcessSteps}
          />

          <Benefits
            id="benefits"
            title="Leather Benefits"
            benefits={leatherForUpholsteryBenefits}
          />

          <section id="sedona-leather" className="scroll-mt-24">
            <SedonaProductBlock />
          </section>

          <section id="palette-leather" className="scroll-mt-24">
            <PaletteProductBlock />
          </section>

          <section id="luxor-leather" className="scroll-mt-24">
            <LuxorProductBlock />
          </section>

          <section id="concerto-leather" className="scroll-mt-24">
            <ConcertoProductBlock />
          </section>

          <Guide
            id="guide"
            header={{
              badge: "Product Guide",
              title: "Leather for Upholstery",
            }}
          >
            <LeatherForUpholsteryGuideContent />
          </Guide>
        </div>
      </main>
      <Footer />
    </>
  );
}
