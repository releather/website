import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";

const title = "About Us | ReLeather";
const description =
  "Family owned leather restoration specialists. Over 25 years experience. Certified leather cleaning and restoration in Southern California since 2001.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about-us" },
  openGraph: { url: "/about-us", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const credentialItems = [
  {
    title: "We are licensed Furniture Upholsterers",
    org: "Department of Consumer Affairs\nState of California",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/icons/Leather-Restoration-California.png",
    imgAlt: "Leather Restoration California - Department of Consumer Affairs State of California",
  },
  {
    title: "We received our certification as Leather Cleaning Technicians (LCT)",
    org: "Institute of Inspection Cleaning & Restoration\nNorth Carolina, USA",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/icons/Leather-Certification-North-Carolina.jpg",
    imgAlt: "Leather Cleaning Technicians certification - Institute of Inspection Cleaning and Restoration North Carolina",
  },
  {
    title: "ReLeather has an A+ Rating with the Better Business Bureau",
    org: "Better Business Bureau\nOrange County, San Diego, Los Angeles USA",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/icons/bbb-rating.jpg",
    imgAlt: "ReLeather A+ Rating with the Better Business Bureau",
  },
  {
    title: "Top Rated Industry Leaders in Leather Finishing",
    org: "SIC Code: 7641, NAICS Code: 811420\nFurniture Reupholstery and Furniture Repair",
    useSicBadge: true,
  },
];

export default function AboutUsPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Who is ReLeather?"
            subtitle="We are a family owned and operated business with over 25 years of experience in the leather repair and upholstery industry. We are Southern California's leading leather restoration specialists dedicated to giving new life to your leather furniture, bags, garments, and more. We offer quality and certified leather cleaning, restoration, dyeing, and reupholstery services."
            primaryCta={{
              href: "/estimate",
              title: "Get a leather restoration quote",
              "aria-label": "Get a leather restoration quote",
              label: "Get Quote",
            }}
            secondaryCta={{
              href: "tel:+19495294727",
              title: "Call ReLeather",
              "aria-label": "Call ReLeather",
              label: "Call Us",
            }}
            rightContent={
              <>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <iframe
                    title="ReLeather"
                    src="https://www.youtube.com/embed/fIRl2aWCs2c?rel=0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full rounded-lg"
                  />
                </div>
                <div
                  className="mt-4 border-y-4 border-black py-4 text-center"
                  aria-hidden
                >
                  <span className="border-2 border-black bg-releather-orange px-3 py-1 font-display text-xl font-normal tracking-tight text-black sm:text-2xl">
                    reputable leather specialists since 2001.
                  </span>
                </div>
              </>
            }
            body={
              <>
                <h2 className="font-sans text-lg font-bold text-black">
                  LEATHER RESTORATION SPECIALISTS
                </h2>
                <p className="mt-1 font-sans text-base text-gray-700">
                  Serving Southern California Since 2001
                </p>
                <p className="mt-4 font-sans text-base text-gray-700">
                  Thank you for your interest in ReLeather and the opportunity to
                  earn your business. At ReLeather, we work hard to preserve and
                  restore your quality leather and offer the best solutions to
                  serve your leather needs.
                </p>
              </>
            }
          />

          <section
            id="how-started"
            className="border-t-4 border-black pt-12"
            aria-labelledby="how-started-heading"
          >
            <h2
              id="how-started-heading"
              className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              <span className="border-2 border-black bg-releather-orange px-2 py-0.5">
                <i className="fa fa-fw fa-briefcase" aria-hidden /> How Did You
                Get Started
              </span>
            </h2>
            <h3 className="mt-4 font-sans text-xl font-bold text-black">
              Over 25 Years Experience
            </h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              We specialized in leather as independent contractors. We performed
              leather repair and leather refinishing services for high-end stores
              beginning in the mid 1980s. Throughout the years we have gained
              valuable work experience and technical expertise. As leather
              restoration specialists, we are passionate about working with
              leather. With more leather consumers in the market, ReLeather was
              started from a growing demand for professional leather care. Since
              2001, providing quality leather repair and restoration remains
              our mission statement. We understand leather is an investment that
              customers make when purchasing sofas and cars or designer jackets
              and handbags. Our services aim to prolong the life to their leather
              upholstery and goods. ReLeather works with residential and
              commercial customers. Our customers are educated leather buyers
              who recognize leather involves regular TLC and understand the
              value in repairing over replacing.
            </p>
          </section>

          <section
            id="certifications"
            className="border-t-4 border-black pt-12"
            aria-labelledby="certifications-heading"
          >
            <h2
              id="certifications-heading"
              className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              <span className="border-2 border-black bg-releather-orange px-2 py-0.5">
                <i className="fa fa-fw fa-certificate" aria-hidden />
                Certifications and Credentials
              </span>
            </h2>
            <h3 className="mt-4 font-sans text-xl font-bold text-black">
              Certified Leather Technicians
            </h3>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <p className="font-sans text-base leading-relaxed text-gray-800">
                ReLeather holds certifications in leather care and maintenance.
                We are certified Leather Cleaning Technicians (LCT). We are the
                only Leather Restoration certified firm in Orange County with
                the IICRC. We have a A+ rating with the BBB. We are licensed
                Furniture Upholsterers
              </p><Image
                src="https://res.cloudinary.com/releather-com/image/upload/icons/certified-leather-restoration.jpg"
                alt="Certified leather restoration"
                width={150}
                height={120}
                loading="lazy"
                className="h-auto w-[150px] shrink-0 object-contain"
              />
            </div>
            <ul className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {credentialItems.map((item) => (
                <li
                  key={"useSicBadge" in item ? "sic" : item.imgAlt}
                  className="text-center"
                >
                  <div className="mx-auto max-w-[200px]">
                    {"useSicBadge" in item && item.useSicBadge ? (
                      <Link
                        href="https://siccode.com/business-profile/re-leather-llc-lnoa6d"
                        title="ReLeather LLC - SIC Code 7641 - NAICS Code 811420"
                        rel="external noopener"
                        target="_blank"
                        className="inline-block"
                      ><Image
                          src="https://businessbadges.siccode.com/badges/ea90/re-leather-llc-lnoa6d-detailed.png"
                          alt="ReLeather LLC - SIC Code 7641 - NAICS Code 811420 - Profile at SICCODE.com"
                          width={360}
                          height={120}
                          loading="lazy"
                        />
                      </Link>
                    ) : "imgSrc" in item && item.imgSrc ? (
                      <Image
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        width={200}
                        height={120}
                        loading="lazy"
                        className="h-auto w-full object-contain"
                      />
                    ) : null}
                    <strong className="mt-2 block px-2 py-2 font-sans text-sm font-bold text-black">
                      {item.title}
                    </strong>
                    <p className="whitespace-pre-line px-2 py-2 font-sans text-sm text-gray-800">
                      {item.org}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="reputation"
            className="border-t-4 border-black pt-12"
            aria-labelledby="reputation-heading"
          >
            <h2
              id="reputation-heading"
              className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              <span className="border-2 border-black bg-releather-orange px-2 py-0.5">
                <i className="fa fa-fw fa-star" aria-hidden /> Reputation
              </span>
            </h2>
            <h3 className="mt-4 font-sans text-xl font-bold text-black">
              A+ Rated Leather Restoration and Cleaning Service
            </h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              5 Star rating on Yelp. Read what customers are saying about our
              leather services on Yelp.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
