import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import LeatherColorMatcher from "@/components/LeatherColorMatcher";
import { LEATHER_MATERIAL_QUOTE_URL } from "@/lib/upholsteryLeatherCollections";

const title = "Leather Color Matcher | ReLeather";
const description =
  "Upload a photo and click to sample any color. Match upholstery leather hides from our Italian collections by color—distressed, colorful, designer, waxed, and more.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-match" },
  openGraph: { url: "/leather-match", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

export default function LeatherMatchPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="leather-match-page min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <LeatherColorMatcher headingTag="h1" headingId="leather-color-matcher-heading" />

          <p className="mx-auto mt-10 max-w-3xl text-center font-sans text-base font-semibold leading-relaxed text-gray-800 sm:text-lg">
            Need yardage too? Try our{" "}
            <Link
              href="/leather-calculator"
              title="Leather Calculator"
              className="font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange"
            >
              Leather Calculator
            </Link>{" "}
            or browse{" "}
            <Link
              href="/leather-for-upholstery"
              title="Leather for Upholstery"
              className="font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange"
            >
              upholstery leather collections
            </Link>{" "}
            and{" "}
            <Link
              href={LEATHER_MATERIAL_QUOTE_URL}
              title="Leather for Upholstery Material Estimate"
              className="font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange"
            >
              request a material quote
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
