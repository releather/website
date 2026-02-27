import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import GoogleTagManager from "@/components/GoogleTagManager";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-sans",
});

// SEO: Base URL for absolute canonicals and Open Graph. All page metadata can rely on this.
const metadataBase = new URL("https://www.releather.com");

// Default OG image (1200x630 recommended for summary_large_image)
const defaultOgImage = "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_1200,h_630,f_auto/v1672061616/before-after/Leather-Restoration-Couch-Sofa.jpg";

export const metadata: Metadata = {
  metadataBase,
  title: "ReLeather | Professional Leather Repair & Restoration",
  description:
    "Certified leather restoration and repair for furniture, automotive, garments, and handbags. Get a free quote.",
  // Open Graph and Twitter defaults; pages merge with title/description/canonical
  openGraph: {
    siteName: "ReLeather",
    type: "website",
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: "ReLeather Leather Restoration" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

// JSON-LD: Organization (site-wide)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ReLeather LLC",
  url: "https://www.releather.com",
  logo: "https://res.cloudinary.com/releather-com/image/upload/v1771752856/logo/releather-emblem.png",
  description: "Professional leather repair and restoration for furniture, automotive, garments, and handbags.",
};

// JSON-LD: LocalBusiness (site-wide, matches Footer microdata)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ReLeather LLC",
  url: "https://www.releather.com",
  telephone: "+19495294727",
  email: "info@releather.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "751 S State College Blvd Unit 38",
    addressLocality: "Fullerton",
    addressRegion: "CA",
    postalCode: "92831",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.617073,
    longitude: -117.680747,
  },
  paymentAccepted: "cash, check, credit card, invoice, paypal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}>
      <head>
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager: script (afterInteractive) + noscript fallback */}
        <GoogleTagManager />
        {/* JSON-LD structured data for SEO */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        {children}
      </body>
    </html>
  );
}
