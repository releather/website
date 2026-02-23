import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import Faq from "@/components/Faq";

const title = "Leather Furniture Repair in Los Angeles | ReLeather";
const description =
  "Leather restoration, cleaning, and reupholstery serving the Los Angeles area. Professional leather care for furniture, car seats, handbags, and more.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-furniture-repair-in-los-angeles" },
  openGraph: { url: "/leather-furniture-repair-in-los-angeles", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const beforeAfterItems = [
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-cleaning-tan-aniline-soiled-discolored-dark-tone-distressed-refreshed-tan-tone-restored-double-wide-chair-orange-county-before.png",
    beforeAlt: "Tan aniline double-wide chair soiled and distressed leather before cleaning",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-cleaning-tan-aniline-soiled-discolored-dark-tone-distressed-refreshed-tan-tone-restored-double-wide-chair-orange-county-after.png",
    afterAlt: "Tan aniline double-wide chair refreshed tan tone restored after cleaning",
    caption: "A tan aniline double-wide chair with soiled and distressed leather was cleaned and restored to a refreshed tan tone, improving its appearance and durability in Orange County.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-chair-beige-aniline-change-color-to-golden-brown--faded-oil-stain-spots-los-angeles-before.png",
    beforeAlt: "Beige aniline chair faded and oil-stained before color change to golden brown in Los Angeles",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-chair-beige-aniline-change-color-to-golden-brown--faded-oil-stain-spots-los-angeles-after.png",
    afterAlt: "Beige aniline chair dyed to golden brown after restoration in Los Angeles",
    caption: "This project involved dyeing a beige aniline chair in Los Angeles from its original shade to golden brown. The leather had faded and oil-stained spots that were corrected, recolored evenly, and restored to a smooth, consistent finish.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-chair-beige-pigmented-change-color-to-taupe-morris-chair-stickley-before.png",
    beforeAlt: "Beige pigmented Morris chair before color change to taupe",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-chair-beige-pigmented-change-color-to-taupe-morris-chair-stickley-after.png",
    afterAlt: "Beige pigmented Morris chair after dyeing to taupe",
    caption: "This project focused on dyeing a beige pigmented Morris chair from its original color to taupe. Leather surfaces were carefully prepped, dyed evenly, and finished to restore color uniformity and preserve texture.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-chair-brown-pigmented-faded-changed-to-dark-brown-barcalounger-before.png",
    beforeAlt: "Faded brown pigmented Barcalounger chair before dyeing to dark brown",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-chair-brown-pigmented-faded-changed-to-dark-brown-barcalounger-after.png",
    afterAlt: "Brown pigmented Barcalounger chair after dyeing to dark brown",
    caption: "This project focused on dyeing a faded brown pigmented Barcalounger chair to a darker brown shade. Leather surfaces were prepped, recolored evenly, and finished to restore uniform tone, depth, and a polished appearance.",
  },
];

const locationFaqItems = [
  {
    question: "How Much Does Leather Restoration Cost?",
    answer: (
      <p>
        We tailor our services to meet the specific needs of your furniture. Cost varies in terms of furniture size, condition, and upholstery type. We offer onsite inspections and take these factors into account.
      </p>
    ),
  },
  {
    question: "How Long Does Leather Restoration Take?",
    answer: (
      <p>
        Typically takes around 1 to 2 weeks to complete, although the duration may vary depending on services provided.
      </p>
    ),
  },
  {
    question: "What Type of Leather Can Be Restored?",
    answer: (
      <p>
        We treat and restore the following protected and unprotected aniline leather. See our <Link href="/types-of-leather" title="Types of leather">types of leather</Link> guide for more detail.
      </p>
    ),
  },
  {
    question: "Do you serve the Los Angeles area?",
    answer: (
      <p>
        Yes. ReLeather has been dedicated to leather problem solving in Los Angeles for years. We offer Leather Cleaning, Leather Restoration, and Leather Reupholstery for furniture, car seats, handbags, jackets, and other leather goods. <Link href="/estimate" title="Request a quote">Request a quote</Link> to get started.
      </p>
    ),
  },
];

export default function LeatherFurnitureRepairInLosAngelesPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Looking for Leather Restoration in Los Angeles?"
            subtitle={<span className="text-xl">ReLeather serves the Los Angeles Area</span>}
            primaryCta={{
              href: "/estimate",
              title: "Leather Restoration Los Angeles Quote",
              label: "Leather Restoration Quote",
            }}
            secondaryCta={{
              href: "tel:+19495294727",
              title: "(949) 529-4727",
              label: "(949) 529-4727",
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-cleaning-tan-aniline-soiled-discolored-dark-tone-distressed-refreshed-tan-tone-restored-double-wide-chair-orange-county-after.png",
              alt: "Tan aniline leather chair before and after cleaning and restoration in Orange County",
              title: "Tan aniline leather chair before and after cleaning and restoration in Orange County",
              width: 450,
              height: 450,
            }}
          />

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="mb-6 border-b-2 border-releather-orange pb-2 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Leather Restoration Los Angeles
            </h2>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              ReLeather has been dedicated to leather problem solving in Los Angeles for years. We know from decades of experience the variety of needs and challenges involved in owning quality leather. Leather Cleaning, Leather Restoration, and Leather Reupholstery are some of the service options available to help preserve and restore your quality leather furniture, car seats, handbags, jackets, and other leather goods.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              Owning leather is an investment that requires proper care and maintenance. Fixing normal wear and tear is not easy. Customers often try Do-It-Yourself leather kits and ultimately get poor results for their money!
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h3 className="mb-4 border-b-2 border-releather-orange pb-2 font-display text-xl font-normal tracking-tight text-black">
              Quality Leather calls for quality professional leather service and care
            </h3>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Thats where we come in! Leather restoration is what we do! We are licensed and experienced leather restoration specialists in Los Angeles. We know the needs and challenges of leather owners. We offer full leather service options that keep your leather looking like new and feeling soft and supple.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h3 className="mb-6 border-b-2 border-releather-orange pb-2 font-display text-xl font-normal tracking-tight text-black">
              What are some of the challenges of owning leather?
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-display text-lg font-normal tracking-tight text-black">
                  Sun Damage and Discoloration
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Living in LA means getting a whole lot of sunshine. The downside for your quality leather is the sunshine! Excessive ultraviolet light (UV) exposure can prematurely fade the color of your leather over time. Leather is prone to color fading. We offer Leather Restoration which restores the original color and finish of your leather.
                </p>
              </div>
              <div>
                <h4 className="font-display text-lg font-normal tracking-tight text-black">
                  Dryness and Cracking
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  When customers ignore cleaning and conditioning their leather, the leather surface can feel dry and stiff to the touch. Dry and cracked leather can become easier to tear and wear down. We offer Leather Cleaning and Conditioning which replenishes the natural oils of your leather to restore a soft and supple hand.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Complete Leather Restoration &amp; Upholstery Services in Los Angeles
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/services/leather-restoration"
                title="Leather Restoration Service"
                className="inline-flex border-2 border-releather-orange bg-releather-orange px-4 py-2 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange"
              >
                Leather Restoration
              </Link>
              <Link
                href="/services/leather-cleaning"
                title="Professional Leather Cleaning Service"
                className="inline-flex border-2 border-releather-orange bg-releather-orange px-4 py-2 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange"
              >
                Leather Cleaning
              </Link>
              <Link
                href="/services/leather-dyeing"
                title="Leather Dyeing Service"
                className="inline-flex border-2 border-releather-orange bg-releather-orange px-4 py-2 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange"
              >
                Leather Dyeing
              </Link>
              <Link
                href="/services/leather-upholstery"
                title="Leather Reupholstery Service"
                className="inline-flex border-2 border-releather-orange bg-releather-orange px-4 py-2 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange"
              >
                Leather Upholstery
              </Link>
            </div>
            <h4 className="mt-6 font-display text-lg font-normal tracking-tight text-black">
              → Luxury Leather Sofa, Chairs, Loveseats, Car Seats, Cushions
            </h4>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h5 className="mb-6 border-b-2 border-releather-orange pb-2 font-display text-xl font-normal tracking-tight text-black">
              Before and After
            </h5>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {beforeAfterItems.map((item, i) => (
                <figure key={i} className="border-4 bg-releather-dark p-4" style={{ borderColor: "#23262f" }}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">Before</p>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.beforeSrc}
                        alt={item.beforeAlt}
                        width={300}
                        height={225}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover border-2 border-[#23262f]"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">After</p>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.afterSrc}
                        alt={item.afterAlt}
                        width={300}
                        height={225}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover border-2 border-[#23262f]"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-4 border-t-2 border-gray-500 pt-4 font-sans text-sm font-medium text-white">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={locationFaqItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
