import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import { introImage, recommendationItems } from "./servicesData";
import LeatherCleaningSection from "./LeatherCleaningSection";
import LeatherRestorationSection from "./LeatherRestorationSection";
import LeatherDyeingSection from "./LeatherDyeingSection";
import LeatherUpholsterySection from "./LeatherUpholsterySection";
import FoamRestuffSection from "./FoamRestuffSection";

export const metadata: Metadata = {
  title: "Professional Leather Services | ReLeather",
  description:
    "At ReLeather we specialize in professional leather services for furniture upholstery, auto interiors, jackets, handbags, and accessories. Restoration, cleaning, dyeing, reupholstery.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Professional Leather Services | ReLeather",
    description:
      "At ReLeather we specialize in professional leather services for furniture upholstery, auto interiors, jackets, handbags, and accessories. Restoration, cleaning, dyeing, reupholstery.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Leather Services | ReLeather",
    description:
      "At ReLeather we specialize in professional leather services for furniture upholstery, auto interiors, jackets, handbags, and accessories. Restoration, cleaning, dyeing, reupholstery.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Professional Leather Services"
            subtitle={
              <>
                <em>Looking to restore your leather?</em> You have come to the
                right place.
              </>
            }
            body={
              <>
                At ReLeather we specialize in professional leather services for
                furniture upholstery, auto interiors, jackets, handbags, and
                accessories. We have thorough experience working with luxury
                leathers and designer brands. Our services are designed to
                restore, maintain, and preserve the lasting quality of your
                leather investments. We are committed to delivering the best
                value through skilled workmanship, cost-effective solutions,
                customer satisfaction, and quality materials.
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Get a leather services quote",
              label: (
                <>
                  Get <span className="hidden sm:inline">Leather Service </span>
                  Quote
                </>
              ),
            }}
            image={{
              src: introImage,
              alt: "Leather sofa restoration before and after",
              title: "ReLeather leather services sofa restoration",
              width: 600,
              height: 450,
            }}
          />

          <section
            id="recommendation"
            className="border-t-4 border-black pt-12"
          >
            <h6 className="inline-block border-2 border-black bg-releather-orange px-3 py-1 font-sans text-sm font-bold uppercase tracking-wider text-black">
              Recommended for:
            </h6>
            <p className="mt-3 font-sans text-lg font-bold text-black">
              Furniture Upholstery, Auto Interiors, Jackets, Handbags, Accessories
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5 lg:gap-4 lg:px-2">
              {recommendationItems.map((item) => (
                <li
                  key={item.id}
                  id={item.id}
                  className="flex flex-col"
                >
                  <Link
                    href={item.href}
                    className="flex flex-1 flex-col border-4 border-black transition hover:border-releather-orange"
                    title={item.title}
                  >
                    <span className="flex h-[200px] shrink-0 overflow-hidden border-b-4 border-black">
                      <Image unoptimized
                        src={item.imgSrc}
                        alt={item.alt}
                        title={item.title}
                        width={200}
                        height={200}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <strong className="flex min-h-[52px] flex-1 items-center justify-center border-t-2 border-black bg-white px-2 py-2 font-sans font-bold text-black text-center">
                      {item.label}
                    </strong>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <LeatherCleaningSection />
          <LeatherRestorationSection />
          <LeatherDyeingSection />
          <LeatherUpholsterySection />
          <FoamRestuffSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
