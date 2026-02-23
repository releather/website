import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import FilloutEmbed from "./FilloutEmbed";

const title = "Estimate | ReLeather";
const description =
  "Get a leather restoration estimate. ReLeather is in Orange County. Contact us to schedule an appointment.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/estimate" },
  openGraph: { url: "/estimate", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

export default function EstimatePage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <section id="introduction" className="mb-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h1 className="font-display text-4xl font-normal tracking-tight text-black sm:text-5xl">
                  Get A Quote
                </h1>
                <div className="mt-4 font-sans text-xl font-medium text-gray-700 sm:text-2xl [&_em]:text-black">
                  We&apos;ll get back to you shortly. Thank you for your interest in
                  ReLeather.
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="tel:+19495294727"
                    title="Call ReLeather"
                    aria-label="Call ReLeather"
                    className="inline-flex items-center gap-2 border-2 border-releather-orange bg-releather-orange px-5 py-3 font-sans text-base font-bold text-black transition hover:bg-black hover:text-releather-orange"
                  >
                    <i className="fa fa-fw fa-phone" aria-hidden />
                    Call Us
                  </Link>
                </div>
              </div>
              <FilloutEmbed />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
