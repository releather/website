import type { Metadata } from "next";
import Image from "next/image";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import Benefits from "@/components/Benefits";
import Guide from "@/components/Guide";
import LeatherConditionerGuideContent from "./LeatherConditionerGuideContent";
import LeatherConditionerPayPal from "./LeatherConditionerPayPal";
import LeatherConditionerRecommendedFor from "./LeatherConditionerRecommendedFor";

const title = "Leather Conditioner | ReLeather";
const description =
  "ReLeather Care leather conditioner. Wax-free leather lotion to clean, condition, protect. For aniline, semi-aniline, pigmented leather. Buy online.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-conditioner" },
  openGraph: { url: "/leather-conditioner", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const conditionerBenefits = [
  {
    title: "CLEAN CONDITION PROTECT:",
    description:
      "Specialized wax-free leather lotion formulated by industry professionals.",
  },
  {
    title: "PROFESSIONAL GRADE FORMULA:",
    description:
      "Prolong the life of your leather investment like a pro.",
  },
  {
    title: "LONG LASTING TREATMENT:",
    description:
      "Keeps leather soft and supple. Treats dry, dull, and aging leather.",
  },
  {
    title: "WAX FREE FINISH:",
    description:
      "Renews the natural sheen that repels water spotting and cracking. Safely removes dirt, soil without sticky or greasy residue, and will not darken finish.",
  },
  {
    title: "RECOMMENDED FOR QUALITY LEATHERS:",
    description: <LeatherConditionerRecommendedFor />,
  },
  {
    title: "Directions",
    description:
      "Apply liberally with soft cloth, let dry and buff lightly. Caution: Do not take internally. Keep out of reach of children.",
  },
];

export default function LeatherConditionerPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Leather Conditioner"
            subtitle="Professional wax-free leather lotion to clean, condition, and protect."
            leftContent={
              <div id="buy" className="relative z-0 isolate max-w-full overflow-visible">
                <LeatherConditionerPayPal />
              </div>
            }
            rightContent={
              <div className="flex flex-col items-center text-center"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/v1643861241/logo/ReLeather-Leather-Conditioner.png"
                  alt="The Best Leather Conditioner for Leather Sofa Couch"
                  title="The Best Leather Conditioner for Leather Sofa Couch"
                  width={240}
                  height={240}
                  loading="lazy"
                  className="max-w-[30%] object-contain"
                />
                <p className="mt-4 font-sans text-lg font-bold text-black">
                  Price: $39.98 &nbsp; &nbsp; Shipping: $7.75
                </p>
              </div>
            }
          />

          <Benefits
            id="specifications"
            title="Leather Conditioner Benefits"
            subtitle="Specifications"
            benefits={conditionerBenefits}
          />

          <Guide
            id="guide"
            header={{
              badge: "Product Guide",
              title: "ReLeather Care Leather Conditioner",
            }}
          >
            <LeatherConditionerGuideContent />
          </Guide>
        </div>
      </main>
      <Footer />
    </>
  );
}
