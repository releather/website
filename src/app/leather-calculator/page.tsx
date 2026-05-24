import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import LeatherMaterialCalculator from "@/components/LeatherMaterialCalculator";
import { LEATHER_MATERIAL_QUOTE_URL } from "@/lib/upholsteryLeatherCollections";

const title = "Leather Calculator | ReLeather";
const description =
  "Convert upholstery fabric yardage to leather square footage and estimate how many hides you need. Free leather material calculator for furniture and upholstery projects.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-calculator" },
  openGraph: { url: "/leather-calculator", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

export default function LeatherCalculatorPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <LeatherMaterialCalculator headingTag="h1" headingId="leather-calculator-heading" />

          <p className="mx-auto mt-10 max-w-3xl text-center font-sans text-base font-semibold leading-relaxed text-gray-800 sm:text-lg">
            Planning a reupholstery project? Browse our{" "}
            <Link
              href="/leather-for-upholstery"
              title="Leather for Upholstery"
              className="font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange"
            >
              Italian upholstery leather collections
            </Link>{" "}
            or{" "}
            <Link
              href={LEATHER_MATERIAL_QUOTE_URL}
              title="Leather for Upholstery Material Estimate"
              className="font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange"
            >
              request a material quote
            </Link>{" "}
            and we will help confirm yardage, hide count, and grade for your job.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
