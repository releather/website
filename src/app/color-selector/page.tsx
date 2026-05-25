import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import LeatherColorSelector from "@/components/LeatherColorSelector";
import { LEATHER_MATERIAL_QUOTE_URL } from "@/lib/upholsteryLeatherCollections";

const title = "Shop by Leather Color | ReLeather";
const description =
  "Browse Italian upholstery leather by color—black, brown, grey, tan, blue, burgundy, and more. Select a color family to explore matching hides across our collections.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/color-selector" },
  openGraph: { url: "/color-selector", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

export default function ColorSelectorPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="color-selector-page min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <LeatherColorSelector headingTag="h1" headingId="shop-by-leather-color-heading" />

          <p className="mx-auto mt-10 max-w-3xl text-center font-sans text-base font-semibold leading-relaxed text-gray-800 sm:text-lg">
            Have a specific shade in mind? Try the{" "}
            <Link
              href="/leather-match"
              title="Leather Color Matcher"
              className="font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange"
            >
              Leather Color Matcher
            </Link>{" "}
            to upload a photo and find the closest match, or browse{" "}
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
