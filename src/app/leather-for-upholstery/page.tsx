import type { Metadata } from "next";
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

const title = "Leather for Upholstery | ReLeather";
const description =
  "Finest leather for upholstery. Italian leather hides, full grain and top grain. Get a leather material quote. Reupholstery service available.";
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

const LEATHER_MATERIAL_QUOTE_URL =
  "https://forms.fillout.com/t/bPHjQmSpEVus";

export default function LeatherForUpholsteryPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Leather for Upholstery"
            subtitle={
              <>
                <em className="text-releather-orange">
                  Express any decorating style
                </em>
                <br />
                with our versatile Italian leather hides!
              </>
            }
            primaryCta={{
              href: LEATHER_MATERIAL_QUOTE_URL,
              title: "Leather for Upholstery Material Estimate",
              "aria-label": "Leather for Upholstery Material Estimate",
              label: "Get Leather Material Quote!",
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,g_auto,h_450,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_45_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1654915228/leather/Leather-Material.jpg",
              alt: "Buy Leather Upholstery Material",
              title: "Buy Leather Upholstery Material",
              width: 970,
              height: 450,
            }}
          />

          <section
            id="intro"
            className="border-t-4 border-black pt-12"
            aria-labelledby="intro-heading"
          >
            <h2
              id="intro-heading"
              className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              Choose your Leather!
            </h2>
            <div className="mt-4">
              <figure className="brutalist-image-frame float-right ml-6 mb-4 w-[280px] shrink-0 sm:w-[320px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
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
                We pride ourselves in offering the finest leather for upholstery in the market. Our leather is sourced from the highest quality hides and include a wide variety of colors and textures, so you&apos;re sure to find the perfect match for your project. In addition, we offer our clients <Link href="/services/leather-upholstery"><strong>leather reupholstery service</strong></Link>. So if you&apos;re looking for the best leather for your next upholstery project, look no further than ReLeather. Thanks for choosing us!
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

          <SedonaProductBlock />

          <PaletteProductBlock />

          <LuxorProductBlock />

          <ConcertoProductBlock />

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
