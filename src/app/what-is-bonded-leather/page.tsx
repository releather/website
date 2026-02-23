import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import Faq from "@/components/Faq";

const title = "What is Bonded Leather? | ReLeather";
const description =
  "Informative overview of bonded leather and faux leather upholstery. Peeling vs fading, repair and reupholstery options. Real leather transformation examples.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/what-is-bonded-leather" },
  openGraph: { url: "/what-is-bonded-leather", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const bondedLeatherFaqItems = [
  {
    question: "Is bonded leather real leather?",
    answer: (
      <p>
        No. Bonded leather is a man-made material with a polyurethane coating on a fabric core made from shredded leather scraps bonded with adhesive. It is not a genuine leather hide. If your furniture starts peeling or flaking, it has the tell-tale signs of bonded leather; real leather cracks and fades.
      </p>
    ),
  },
  {
    question: "Can bonded leather be repaired?",
    answer: (
      <p>
        Most bonded leather furniture cannot be repaired, dyed, or restored with lasting results. Once the top surface deteriorates, remedies are limited. We recommend investing in quality leather or reupholstering in genuine leather if you want to keep the frame and style of your piece.
      </p>
    ),
  },
  {
    question: "Can bonded leather furniture be reupholstered in real leather?",
    answer: (
      <p>
        Yes. We have reupholstered countless bonded leather sofas and chairs in quality Italian leather. Reupholstering adds value, style, and durability. If you value the style and frame of your bonded leather furniture, <Link href="/estimate" title="Request a reupholstery quote">request a quote</Link> for leather upholstery.
      </p>
    ),
  },
];

export default function WhatIsBondedLeatherPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="What is Bonded Leather ?"
            primaryCta={{
              href: "/estimate",
              title: "Request a Quote",
              label: "Get a Quote",
            }}
            body={
              <div className="overflow-hidden">
                <p>
                  Its leather-like but not quite leather! This informative overview should serve as a quick introduction into the world of faux leather upholstery to help you make an educated leather buying decision. Let&apos;s make sure your next leather sofa is the real thing!
                </p>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.releather.com/what-is-bonded-leather"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="float-right ml-4 mb-4 block font-sans font-medium text-releather-orange underline underline-offset-2 hover:text-black"
                >
                  Share on Facebook
                </a>
                <a
                  href="https://youtu.be/iy9JkYywEBA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="float-right ml-4 mb-4 block font-sans font-medium text-releather-orange underline underline-offset-2 hover:text-black"
                >
                  Watch on YouTube
                </a>
              </div>
            }
          />

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              What is Bonded Leather ?
            </h2>
            <h3 className="mt-1 font-sans text-lg font-medium text-gray-700 [&_em]:text-black">
              <em>&quot;The Leather Look-A-Like&quot;</em>
            </h3>
            <h6 className="mt-1 font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
              From a Leather Restoration Specialist Perspective
            </h6>
            <div className="overflow-hidden"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/flaking-peeling-leather.png"
                width={350}
                alt="Peeling and Flaking Leather"
                loading="lazy"
                className="float-right ml-4 mb-4"
              />
              <p className="font-sans text-base leading-relaxed text-gray-800">
                Is the leather real or fake? That is the question many leather consumers ask themselves and pose to us regularly. Making the distinction between genuine leather and man-made leather is not always easy based solely on the look and feel of the material. Bonded leather wears much differently than leather. If your leather furniture starts peeling or flaking, then your sofa or chair has all the signs of bonded leather!
              </p>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <div className="overflow-hidden"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/what-is-bonded-leather-survey.png"
                alt="What is Bonded Leather! Consumer Survey"
                loading="lazy"
                className="float-left mr-4 mb-4"
              />
              <p className="font-sans text-base leading-relaxed text-gray-800">
                Despite the tell-tale signs of this leather imitator, customers often struggle to make sense of the material. We often hear: What is bonded leather? What is bonded leather made out of?  Some customers explain that their bonded leather furniture was sold as genuine leather on the sales floor. Others are sold on the affordable price of faux leather, essentially outweighing the durability and quality of leather.
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
                In a home furnishing consumer survey, less than 10% knew bonded leather was an imitation leather,. However more than half (53.3%) believed bonded leather was real leather with enhanced performance, and the remaining 40% of consumers were not familiar with the term bonded leather!
              </p>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <div className="mb-6 border-b-2 border-releather-orange pb-2">
              <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
                Bonded Leather
              </h2>
              <h6 className="mt-1 font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
                Peeling Away The Truth
              </h6>
            </div>
            <div className="overflow-hidden">
              <figure className="float-right ml-4 mb-4"><Image
                  src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/anatomy-of-bonded-leather.png"
                  alt="Anatomy of Bonded Leather"
                  loading="lazy"
                />
                <figcaption className="mt-2 font-sans text-sm text-gray-600">
                  Approximate composition of bonded leather
                </figcaption>
              </figure>
              <p className="font-sans text-base leading-relaxed text-gray-800">
                Bonded leather is material with a polyurethane coating on a fabric core consisting of fibers from shredded leather scraps bonded with adhesive. It is not a genuine leather hide rather a man-made byproduct. Bonded leather is on the lower end of the upholstery market and is priced accordingly. Price conscious consumers are sold on the affordability of bonded leather and its similarity to the look and feel of real leather. Premium leather is on the higher end and offers durability and quality. Leather is better!
              </p>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <div className="mb-6 border-b-2 border-releather-orange pb-2">
              <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
                Bonded vs Real Leather
              </h2>
              <h6 className="mt-1 font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
                Flake vs Fade
              </h6>
            </div>
            <div className="overflow-hidden"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/bonded-leather-real-leather.jpg"
                alt="Bonded Leather vs Real Leather Comparison"
                width={500}
                loading="lazy"
                className="float-right ml-4 mb-4"
              />
              <p className="font-sans text-base leading-relaxed text-gray-800">
                When comparing bonded leather to real leather, general wear and aging marks the major differences between these two upholstery materials . We always tell customers that bonded leather peels and flakes while real leather cracks and fades! Bonded leather may imitate the natural characteristics of leather but it does not wear the same over time. The integrity of the material breaks down even from normal use.  The polyurethane face peels and flakes revealing the fabric core. Please refer to the image for a side by side comparison of bonded leather and real leather.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <div className="mb-6 border-b-2 border-releather-orange pb-2">
              <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
                Can Bonded Leather Be Repaired?
              </h2>
              <h6 className="mt-1 font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
                DIY Repair?
              </h6>
            </div>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Customers ask about the repair options for bonded leather. The reality check is that most bonded leather furniture cannot be repaired, dyed, or restored or at least with any lasting results. Once the top surface deteriorates available remedies are quite limited. Online leather repair kit makers recommend applying makeshift compound fillers and leather paint to the offending bonded leather surface. We would argue that bonded leather furniture is made to replace rather than restore. Save your money and invest in the quality and durability of leather. Reupholstering in quality leather is an option for those unwilling to split with their bonded leather furniture.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <div className="mb-6 border-b-2 border-releather-orange pb-2">
              <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
                Can Bonded Leather Be Reupholstered?
              </h2>
              <h6 className="mt-1 font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
                Bonded No More!
              </h6>
            </div>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Yes. Some customers value the style and frame of their bonded leather furniture and cannot find a comparable replacement. We have reupholstered countless of bonded leather sofas and chairs. Reupholstering in quality Italian leather adds value, style, and durability to your furniture.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <div className="mb-6 border-b-2 border-releather-orange pb-2">
              <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
                Other Faux Leather Terms
              </h2>
              <h6 className="mt-1 font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
                Leather Blacklist
              </h6>
            </div>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              We as leather restoration specialists we know better than most the countless names bonded leather goes by these days. Let&apos;s run off the names associated with bonded leather.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-6 font-sans text-base leading-relaxed text-gray-800">
              <li>Reconstituted Leather</li>
              <li>Blended Leather </li>
              <li> Durabend </li>
              <li> Faux Leather </li>
              <li> Processed Leather </li>
              <li> Composite Leather </li>
              <li> Ultraleather </li>
              <li> Leather Match </li>
              <li> Recycled Leather </li>
              <li>Bi-cast Leather or PU Leather often referred, as split leather is another material that does not fall under the genuine leather category</li>
              <li>Vinyl: Also beware of vinyl as some furniture manufactures combine leather with vinyl to cut costs. Typically the front facing upholstery is upholstered in leather while the frame side and back paneling or &quot;non-touch&quot; sections are upholstered in vinyl.</li>
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Before and After
            </h2>
            <h6 className="mt-1 font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
              Real Leather Transformation!
            </h6>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              We have upholstered countless bonded leather sofas and chairs and converted them to full genuine leather. Here are a few examples of our upholstery work:
            </p>

            <p className="mt-8 font-sans text-base leading-relaxed text-gray-800">
              Bonded Leather Dining Chairs and Bar Stools Reupholstered in Genuine Leather:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/leather-reupholstery-bonded-leather-chair.jpg"
                alt="Bonded Leather Chair Upholstered to Real Leather"
                width={350}
                loading="lazy"
                className="w-full border-4 border-black object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/leather-reupholstery-bonded-chair.jpg"
                alt="Bonded Leather Dining Chair Upholstered to Real Leather"
                width={350}
                loading="lazy"
                className="w-full border-4 border-black object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/bonded-leather-bar-stool-repair.jpg"
                alt="Bonded Leather Bar Stool Upholstered to Real Leather"
                width={350}
                loading="lazy"
                className="w-full border-4 border-black object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/bonded-leather-reupholster-chair.jpg"
                alt="Bonded Leather Elegant Dining Room Upholstered to Real Leather"
                width={350}
                loading="lazy"
                className="w-full border-4 border-black object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/bonded-leather-bar-stools-repair.jpg"
                alt="Bonded Leather Bar Stools Room Upholstered to Real Leather White Color"
                width={350}
                loading="lazy"
                className="w-full border-4 border-black object-cover"
              />
            </div>

            <p className="mt-10 font-sans text-base leading-relaxed text-gray-800">
              Bonded Leather Sofas Reupholstered in Genuine Leather:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/bonded-leather-sofa-reupholstery.jpg"
                alt="Bonded Leather Sofa Upholstered to Real Leather"
                width={350}
                loading="lazy"
                className="w-full border-4 border-black object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/bonded-leather-sofa-reupholstery-after.jpg"
                alt="Bonded Leather Sofa Upholstered to Real Leather"
                width={350}
                loading="lazy"
                className="w-full border-4 border-black object-cover"
              />
            </div>

            <p className="mt-10 font-sans text-base leading-relaxed text-gray-800">
              Bonded Leather Lounge Chairs and Recliners Reupholstered in Genuine Leather:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image
                src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/bi-cast-split-leather-chair-repair.jpg"
                alt="Bi-Cast Lounge Recliner Chair Upholstered to Real Leather"
                width={350}
                loading="lazy"
                className="w-full border-4 border-black object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/bi-cast-split-leather-chair.jpg"
                alt="Bi-Cast Lounge Recliner Chair Upholstered to Real Leather"
                width={350}
                loading="lazy"
                className="w-full border-4 border-black object-cover"
              /><Image
                src="https://res.cloudinary.com/releather-com/image/upload/blog/bonded/bonded-leather-red-lounge-chair.jpg"
                alt="Bonded Lounge Red Chair Upholstered to Real Leather"
                width={350}
                loading="lazy"
                className="w-full border-4 border-black object-cover"
              />
            </div>

            <p className="mt-10 font-sans text-base leading-relaxed text-gray-800">
              <em>Learn more about genuine leather reupholstery service for bonded leather furniture:</em>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/leather-upholstery"
                title="Leather Upholstery Service"
                className="inline-flex items-center gap-2 border-2 border-releather-orange bg-releather-orange px-5 py-3 font-sans text-base font-bold text-black transition hover:bg-black hover:text-releather-orange"
              >
                Leather Upholstery Service
              </Link>
              <Link
                href="/estimate"
                title="Get a Quote"
                className="inline-flex items-center gap-2 border-2 border-releather-orange bg-releather-orange px-5 py-3 font-sans text-base font-bold text-black transition hover:bg-black hover:text-releather-orange"
              >
                Get a Quote!
              </Link>
            </div>
          </section>

          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={bondedLeatherFaqItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
