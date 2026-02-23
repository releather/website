import type { Metadata } from "next";

const title = "Before and After Portfolio | ReLeather";
const description =
  "Leather restoration, dyeing, and cleaning before and after gallery. Sofas, chairs, cars. Orange County and Southern California.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/gallery" },
  openGraph: { url: "/gallery", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
