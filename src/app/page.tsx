import type { Metadata } from "next";
import HeaderWrapper from "@/components/HeaderWrapper";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HighlightsSection from "@/components/HighlightsSection";
import BrandTrustSection from "@/components/BrandTrustSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ReLeather | Professional Leather Repair & Restoration",
  description:
    "Certified leather restoration and repair for furniture, automotive, garments, and handbags. Get a free quote.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ReLeather | Professional Leather Repair & Restoration",
    description:
      "Certified leather restoration and repair for furniture, automotive, garments, and handbags. Get a free quote.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReLeather | Professional Leather Repair & Restoration",
    description:
      "Certified leather restoration and repair for furniture, automotive, garments, and handbags. Get a free quote.",
  },
};

export default function Home() {
  return (
    <>
      <HeaderWrapper />
      <main>
        <HeroSection />
        <ServicesSection />
        <HighlightsSection />
        <BrandTrustSection />
      </main>
      <Footer />
    </>
  );
}
