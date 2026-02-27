import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import BlogPostSubsection from "@/components/BlogPostSubsection";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";

const title = "Restoring a Leather Top Desk | ReLeather";
const description =
  "Leather top desk restoration in Orange County. Cleaning, color and finish restoration, protective topcoat. Common wear issues, types of leather, before and after.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-desk-restoration" },
  openGraph: { url: "/leather-desk-restoration", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const processSteps = [
  {
    title: "Assessment Cleaning",
    body: "We thoroughly examine your leather top desk, identifying all damage types and creating a detailed restoration plan. Our experts clean away years of accumulated dirt, oils, and debris using specialized leather-safe products.",
  },
  {
    title: "Repair Preparation",
    body: "We repair any structural damage, resurface and refine the surface, and prepare the leather  for color restoration. This includes sanding rough areas and ensuring proper adhesion for the restoration process.",
  },
  {
    title: "Color Matching",
    body: "Our skilled technicians carefully match your desk's original color using  leather dyes. We apply multiple thin coats to achieve perfect color consistency and depth throughout the surface.",
  },
  {
    title: "Protective Finishing",
    body: "We apply premium leather conditioners and protective finishes to seal the restoration work. This final step ensures your top desk maintains its beauty and durability .",
  },
];

const deskRestorationFaqItems = [
  {
    question: "How long does desk restoration take?",
    answer: (
      <p>
        The work can be completed same day to a few days depending on the extent of damage and leather type.
      </p>
    ),
  },
  {
    question: "What types of leather can be restored?",
    answer: (
      <p>
        We treat and restore the leathers discussed in the leather info section. See <Link href="#leather-info">leather types for desk inlays</Link>.
      </p>
    ),
  },
  {
    question: "Will the restored color rub off?",
    answer: (
      <p>
        No. We apply a protective coating that seals the color treatment. It is safe, allows good adhesion, and prevents color transfer in normal use. Note: placing heavy objects may dent or damage the surface and can affect the color treatment.
      </p>
    ),
  },
  {
    question: "How much does desk restoration cost?",
    answer: (
      <p>
        Desk restoration costs vary based on size, leather type, and damage extent. We provide <Link href="/estimate" title="Request a leather desk restoration estimate">free estimates</Link> to give you an accurate quote for your specific restoration needs.
      </p>
    ),
  },
];

// JSON-LD: FAQPage (plain-text answers for schema; matches deskRestorationFaqItems)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How long does desk restoration take?", acceptedAnswer: { "@type": "Answer", text: "The work can be completed same day to a few days depending on the extent of damage and leather type." } },
    { "@type": "Question", name: "What types of leather can be restored?", acceptedAnswer: { "@type": "Answer", text: "We treat and restore the leathers discussed in the leather info section. See leather types for desk inlays." } },
    { "@type": "Question", name: "Will the restored color rub off?", acceptedAnswer: { "@type": "Answer", text: "No. We apply a protective coating that seals the color treatment. It is safe, allows good adhesion, and prevents color transfer in normal use. Note: placing heavy objects may dent or damage the surface and can affect the color treatment." } },
    { "@type": "Question", name: "How much does desk restoration cost?", acceptedAnswer: { "@type": "Answer", text: "Desk restoration costs vary based on size, leather type, and damage extent. We provide free estimates to give you an accurate quote for your specific restoration needs." } },
  ],
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.releather.com" },
    { "@type": "ListItem", position: 2, name: "Leather Desk Restoration", item: "https://www.releather.com/leather-desk-restoration" },
  ],
};

export default function LeatherDeskRestorationPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Restoring a Leather Top Desk"
            subtitle={
              <>
                <em>Restore Your Leather Desk</em>
                <br />
                Renew Its Value
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Request a Leather Top Desk Restoration Quote",
              label: (
                <>
                  Get
                  <span className="hidden sm:inline"> Leather Top Desk </span>
                  Quote
                </>
              ),
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,b_black,w_560,h_315,y_60,x_60,g_west/bo_10px_solid_rgb:f8991d/blog/leather-restoration-desk-technician.png",
              alt: "Leather restoration desk burgundy semi aniline faded staining top two tone finish restored newport coast after",
              title: "Leather Restoration Desk Burgundy Semi Aniline Faded Staining Top Two Tone Finish Restored Newport Coast After",
              width: 560,
              height: 315,
            }}
            body={
              <p>
                Leather top desk naturally show signs of wear over time, from light fading and ring marks to stains and minor scratches. In this post, we guide you through the complete restoration process: cleaning, color and finish restoration, and applying a protective topcoat to <strong>bring your leather desk back to its best </strong>while ensuring it withstands daily use. We also explore common wear-and-tear issues, the types of leather used in desk inlays, and showcase before-and-after projects to highlight the transformative results.
              </p>
            }
          />

          <section
            id="recommendation"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="recommendation-heading"
          >
            <h6 id="recommendation-heading" className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
              Recommended for:
            </h6>
            <p className="mt-2 font-sans font-bold text-black">
              Color Fading, Surface Scratches, Stains, Cracking, Discoloration
            </p>
            <ul className="mt-6 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-3">
              <li className="flex flex-col items-center border-4 border-black p-4"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_200,h_200/before-after/leather-restoration/example/leather-desk-discoloration-discolored-color-fading.png"
                  alt="Color Fading"
                  title="Color Fading"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <strong className="mt-2 font-sans text-black">Color Fading</strong>
              </li>
              <li className="flex flex-col items-center border-4 border-black p-4"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_200,h_200/before-after/leather-restoration/example/leather-desk-stain-spotting.png"
                  alt="Stain Spotting"
                  title="Stain Spotting"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <strong className="mt-2 font-sans text-black">Stain Spotting</strong>
              </li>
              <li className="flex flex-col items-center border-4 border-black p-4"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_200,h_200/before-after/leather-restoration/example/leather-desk-scraches.png"
                  alt="Surface Scratches"
                  title="Surface Scratches"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <strong className="mt-2 font-sans text-black">Surface Scratches</strong>
              </li>
            </ul>
          </section>

          <section
            id="process"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="process-heading"
          >
            <BlogPostSubsection
              title="Desk Restoration Process"
              tagline={<em> → Step by Step</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Our leather desk restoration includes four key steps: we begin with a thorough assessment and deep cleaning, followed by repairs and surface preparation. We then color-match and restore the finish, and complete the process with protective conditioning for long-lasting beauty and durability.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <ul className="list-none space-y-6 p-0">
                {processSteps.map((step, index) => (
                  <li key={index} className="border-4 border-black p-4">
                    <h5 className="font-display text-xl font-normal tracking-tight text-black">
                      {step.title}
                    </h5>
                    <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ul>
              <figure className="border-4 border-releather-orange p-2"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/before-after/leather-restoration-desk-burgundy-two-tone-after.png"
                  alt="Step 1 of leather desk restoration showing assessment and cleaning process"
                  title="Step 1 of leather desk restoration showing assessment and cleaning process"
                  width={450}
                  height={450}
                  loading="lazy"
                />
                <figcaption className="mt-2 font-sans text-sm text-gray-700">
                  Professional assessment and deep cleaning of leather desk for restoration.
                </figcaption>
              </figure>
            </div>
          </section>

          <section id="spotlight" className="mt-12 border-t-4 border-black pt-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2"><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,h_450,w_450,x_0,y_60/l_text:montserrat_40_style_light:Before,co_rgb:f8991d,g_south_west,y_25,x_25/bo_10px_solid_rgb:000000/before-after/leather-restoration-desk-burgundy-semi-aniline-faded-staining-top-two-tone-finish-restored-newport-coast-before.jpg"
                alt="Leather restoration desk burgundy semi aniline faded staining top two tone finish restored newport coast before"
                title="Leather Restoration Desk Burgundy Semi Aniline Faded Staining Top Two Tone Finish Restored Newport Coast Before"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-black object-cover"
              /><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,h_450,w_450,x_0,y_60/l_text:montserrat_40_style_light:After,co_rgb:f8991d,g_south_west,y_25,x_25/bo_10px_solid_rgb:000000/before-after/leather-restoration-desk-burgundy-semi-aniline-faded-staining-top-two-tone-finish-restored-newport-coast-after.jpg"
                alt="Leather restoration desk burgundy semi aniline faded staining top two tone finish restored newport coast after"
                title="Leather Restoration Desk Burgundy Semi Aniline Faded Staining Top Two Tone Finish Restored Newport Coast After"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-black object-cover"
              />
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Burgundy Desk Leather Restoration in Newport Coast"
              tagline={<em> → Two-Tone Leather Repair</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              This elegant burgundy desk restoration addresses stain damage on a two-tone leather finish. Our process first involved masking the fine gilded decorative border to protect it from the dye. <strong>Gilding is the technique of applying thin gold leaf or metallic foil borders to a leather desk inlay. </strong>We then treated the spotting damage and restored the two-tone burgundy colors, while preserving the leather&apos;s natural texture as much as possible. We completed the treatment by applying a protective layer for added durability.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-desk-burgundy-two-tone-before.png"
                alt="Leather restoration desk burgundy two tone before"
                title="Leather Restoration Desk Burgundy Two Tone Before"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-desk-burgundy-two-tone-after.png"
                alt="Leather restoration desk burgundy two tone after"
                title="Leather Restoration Desk Burgundy Two Tone After"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Leather Type</dt>
                <dd>Two-Tone Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Item Type</dt>
                <dd>Desk Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Brand</dt>
                <dd>Custom</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Service</dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Collection</dt>
                <dd>
                  <Link href="/leather-for-upholstery" title="Two-tone leather collection for desk restoration">
                    Two-Tone
                  </Link>
                </dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Color</dt>
                <dd><Image unoptimized
                    src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_250,h_50/bo_2px_solid_rgb:f8991d/leather/Luxor_Merlot_HI.jpg"
                    alt="Burgundy leather color swatch for desk restoration"
                    title="Burgundy leather color for desk restoration"
                    loading="lazy"
                    width={250}
                    height={50}
                  />
                </dd>
              </div>
            </dl>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Burgundy Desk Leather Restoration in Newport Coast"
              tagline={<em> → Semi-Aniline Faded Staining Leather Repair</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              This burgundy leather desk restoration, located in <Link href="/leather-restoration-orange-county">Newport Beach</Link>, was part of a luxury <strong>yacht interior</strong>. The semi-aniline leather had fading and staining, and the restoration brought back its original rich burgundy color while keeping the leather&apos;s natural character. Normal wear was removed, and the color and subtle sheen were restored for a refreshed, consistent appearance.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-desk-burgundy-semi-aniline-faded-staining-top-two-tone-finish-restored-interior-ship-newport-coast-before.jpg"
                alt="Leather restoration desk burgundy semi aniline faded staining top two tone finish restored interior ship newport coast before"
                title="Leather Restoration Desk Burgundy Semi Aniline Faded Staining Top Two Tone Finish Restored Interior Ship Newport Coast Before"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-desk-burgundy-semi-aniline-faded-staining-top-two-tone-finish-restored-interior-ship-newport-coast-after.jpg"
                alt="Leather restoration desk burgundy semi aniline faded staining top two tone finish restored interior ship newport coast after"
                title="Leather Restoration Desk Burgundy Semi Aniline Faded Staining Top Two Tone Finish Restored Interior Ship Newport Coast After"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Leather Type</dt>
                <dd>Semi-Aniline Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Item Type</dt>
                <dd>Desk Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Brand</dt>
                <dd>Interior Ship</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Service</dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Collection</dt>
                <dd>
                  <Link href="/leather-for-upholstery" title="Semi-Aniline leather collection for desk restoration">
                    Semi-Aniline
                  </Link>
                </dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Color</dt>
                <dd><Image unoptimized
                    src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_250,h_50/bo_2px_solid_rgb:f8991d/leather/Luxor_Merlot_HI.jpg"
                    alt="Burgundy leather color swatch for desk restoration"
                    title="Burgundy leather color for desk restoration"
                    loading="lazy"
                    width={250}
                    height={50}
                  />
                </dd>
              </div>
            </dl>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Black Desk Leather Restoration in Newport Beach"
              tagline={<em> → Pigmented Scratched Faded Leather Repair</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              This black desk restoration addresses normal scratching, fading, and scuffs, including a dull gilding pattern along the border. Our restoring involved masking the decorative border to protect it from the dye. We then resurfaced the scratches to smooth out the leather, and then restored the original black color. We complete the restoration by adding a protective coating to the leather.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-desk-black-pigmented-scratched-faded-surface-scuffs-newport-beach-before.jpg"
                alt="Leather restoration desk black pigmented scratched faded surface scuffs newport beach before"
                title="Leather Restoration Desk Black Pigmented Scratched Faded Surface Scuffs Newport Beach Before"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-desk-black-pigmented-scratched-faded-surface-scuffs-newport-beach-after.jpg"
                alt="Leather restoration desk black pigmented scratched faded surface scuffs newport beach after"
                title="Leather Restoration Desk Black Pigmented Scratched Faded Surface Scuffs Newport Beach After"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Leather Type</dt>
                <dd>Pigmented Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Item Type</dt>
                <dd>Desk Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Brand</dt>
                <dd>Custom</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Service</dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Collection</dt>
                <dd>
                  <Link href="/leather-for-upholstery" title="Pigmented leather collection for desk restoration">
                    Pigmented
                  </Link>
                </dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Color</dt>
                <dd><Image unoptimized
                    src="https://res.cloudinary.com/releather-com/image/upload/c_crop,w_250,h_50/bo_2px_solid_rgb:f8991d/leather/PALETTE_black_HI.jpg"
                    alt="Black leather color swatch for desk restoration"
                    title="Black leather color for desk restoration"
                    loading="lazy"
                    width={250}
                    height={50}
                  />
                </dd>
              </div>
            </dl>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Burgundy Desk Leather Restoration in Newport Coast"
              tagline={<em> → Semi-Aniline Two-Tone Leather Repair</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              This burgundy desk restoration, from a Newport Beach residence, addressed faded, dried, and dulled  leather. The desk needed color refreshing, repolishing, and a protective coating to restore its natural luster and sheen. The restoration evened out the color and brought back the subtle depth of the leather while preserving its character and enhancing durability.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-desk-burgundy-semi-aniline-two-tone-restored-before.jpg"
                alt="Leather restoration desk burgundy semi aniline two tone restored before"
                title="Leather Restoration Desk Burgundy Semi Aniline Two Tone Restored Before"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              /><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-desk-burgundy-semi-aniline-two-tone-restored-after.jpg"
                alt="Leather restoration desk burgundy semi aniline two tone restored after"
                title="Leather Restoration Desk Burgundy Semi Aniline Two Tone Restored After"
                width={450}
                height={450}
                loading="lazy"
                className="w-full border-[10px] border-releather-orange object-cover"
              />
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-2 font-sans text-gray-800 sm:grid-cols-2">
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Leather Type</dt>
                <dd>Semi-Aniline Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Item Type</dt>
                <dd>Desk Leather</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Brand</dt>
                <dd>Custom</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Service</dt>
                <dd>Leather Restoration</dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Collection</dt>
                <dd>
                  <Link href="/leather-for-upholstery" title="Semi-aniline leather collection for desk restoration">
                    Semi-Aniline
                  </Link>
                </dd>
              </div>
              <div className="border-b border-gray-300 py-2">
                <dt className="font-bold text-black">Color</dt>
                <dd><Image unoptimized
                    src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_250,h_50/bo_2px_solid_rgb:f8991d/leather/Luxor_Merlot_HI.jpg"
                    alt="Burgundy leather color swatch for desk restoration"
                    title="Burgundy leather color for desk restoration"
                    loading="lazy"
                    width={250}
                    height={50}
                  />
                </dd>
              </div>
            </dl>
          </section>

          <section
            id="leather-info"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="leather-info-heading"
          >
            <BlogPostSubsection
              title="Types of Leather Used in Desk Restoration"
              tagline={<em> → Skiver, Hide</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              For a fixed, inlaid leather desktop, skiver and cow hide are the primary materials, with Skiver being the most common historical choice. Many modern, high-quality leathers used for desks are also treated with pigment coats and a protective lacquer top for durability.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h4 className="font-display text-xl font-normal tracking-tight text-black">
                  Skiver
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  This is typically a fine quality, thin leather, often made from sheepskin (lamb-skin). It&apos;s the most common and traditional choice for desk linings, especially antique and reproduction desks. The typical thickness for skiver material used in desk inlays is 0.4 mm to 0.7 mm, as its thinness is essential for properly receiving the fine detail of gilding (gold tooling).
                </p>
              </div>
              <div className="flex justify-center"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/w_300,y_50,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Skiver,co_rgb:ffffff/leather/leather-skiver-desk-inlay-material.png"
                  alt="Skiver leather desk inlay material for desk restoration"
                  title="Skiver Leather Desk Inlay Material for Desk Restoration"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="border-[5px] border-releather-orange"
                />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h4 className="font-display text-xl font-normal tracking-tight text-black">
                  Hide
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  This is generally a thicker, more durable leather, usually from cow hide (cattle). Cow hides are much larger than skivers, making them suitable for covering larger desktop surfaces in a single, seamless piece. It is often considered harder wearing but may not accept gold embossing as deeply or as well as skiver.
                </p>
              </div>
              <div className="flex justify-center"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/w_300,y_50,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Hide,co_rgb:ffffff/leather/leather-hide-desk-inlay-material.png"
                  alt="Hide leather desk inlay material for desk restoration"
                  title="Hide Leather Desk Inlay Material for Desk Restoration"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="border-[5px] border-releather-orange"
                />
              </div>
            </div>
          </section>

          <section
            id="issues"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="issues-heading"
          >
            <BlogPostSubsection
              title="Common Leather Issues Found in Desk Restoration"
              tagline={
                <em>
                  {" "}
                  → Color Fading, Surface Scratches, Stains, Cracking, Discoloration
                </em>
              }
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Identifying common leather problems in desk restoration is essential for determining the most effective treatment approach. Each issue requires specific techniques and products to achieve optimal results while preserving the leather&apos;s integrity and appearance.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="border-4 border-black p-4"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_200,h_200/before-after/leather-restoration/example/leather-desk-discoloration-discolored-color-fading.png"
                  alt="Color fading issue example for desk restoration"
                  title="Color Fading Issue Example for Desk Restoration"
                  width={300}
                  height={285}
                  loading="lazy"
                />
                <h4 className="mt-4 font-display text-xl font-normal tracking-tight text-black">
                  Color Fading
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Color fading occurs when leather loses its original color due to UV exposure, age, or improper cleaning. This common issue affects the leather&apos;s appearance and requires professional color restoration techniques.
                </p>
              </div>
              <div className="border-4 border-black p-4"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_200,h_200/before-after/leather-restoration/example/leather-desk-stain-spotting.png"
                  alt="Stains issue example for desk restoration"
                  title="Stains Issue Example for Desk Restoration"
                  width={300}
                  height={285}
                  loading="lazy"
                />
                <h4 className="mt-4 font-display text-xl font-normal tracking-tight text-black">
                  Stains Spotting
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Stains on leather surfaces can be caused by spills, ink, or other substances. Professional stain removal requires careful assessment and appropriate cleaning solutions to avoid further damage.
                </p>
              </div>
              <div className="border-4 border-black p-4"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/c_scale,w_200,h_200/before-after/leather-restoration/example/leather-desk-scraches.png"
                  alt="Surface scratches issue example for desk restoration"
                  title="Surface Scratches Issue Example for Desk Restoration"
                  width={300}
                  height={285}
                  loading="lazy"
                />
                <h4 className="mt-4 font-display text-xl font-normal tracking-tight text-black">
                  Surface Scratches
                </h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Surface scratches are visible marks on leather caused by sharp objects or rough handling. These imperfections can be effectively repaired using resurfacing and color matching techniques.
                </p>
              </div>
            </div>
          </section>

          <Faq
            id="faq"
            heading="Frequently Asked Questions about Desk Restoration"
            items={deskRestorationFaqItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
