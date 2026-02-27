import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import Faq from "@/components/Faq";

const title = "Leather Furniture Repair in San Diego | ReLeather";
const description =
  "Professional leather restoration, cleaning, dyeing, and reupholstery serving the San Diego area. Over 20 years of experience.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-furniture-repair-in-san-diego" },
  openGraph: { url: "/leather-furniture-repair-in-san-diego", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const beforeAfterItems = [
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-chair-tan-aniline-faded-and-oil-spotting-changed-color-to-dark-brown-artisan-style-upholstery-with-wooden-back-frame-and-nailhead-trim-san-diego-before.png",
    beforeAlt: "Tan aniline chair artisan style upholstery San Diego before leather dyeing",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-chair-tan-aniline-faded-and-oil-spotting-changed-color-to-dark-brown-artisan-style-upholstery-with-wooden-back-frame-and-nailhead-trim-san-diego-after.png",
    afterAlt: "Tan aniline chair artisan style upholstery San Diego after leather dyeing",
    caption:
      "The artisan-style tan aniline chair in San Diego with faded areas and oil spotting was carefully prepped, recolored to a dark brown shade, and finished. The process restored a uniform, deep color while preserving leather texture and visual richness.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-chair-tan-aniline-faded-headrest-oil-spotting-recliner-american-leather-orange-county-before.png",
    beforeAlt: "Tan aniline recliner American Leather Orange County before",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-dyeing-chair-tan-aniline-faded-headrest-oil-spotting-recliner-american-leather-orange-county-after.png",
    afterAlt: "Tan aniline recliner American Leather Orange County after",
    caption:
      "This tan aniline recliner from American Leather in Orange County had a faded headrest and oil spotting. The chair was cleaned, prepped, and recolored to restore a uniform dark brown finish while preserving the original texture and visual depth of the leather.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-chair-beige-pigmented-faded-soiled-morris-stickley-high-leg-style-laguna-niguel-before.png",
    beforeAlt: "Beige pigmented Morris Stickley high leg style chair Laguna Niguel before",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-chair-beige-pigmented-faded-soiled-morris-stickley-high-leg-style-laguna-niguel-after.png",
    afterAlt: "Beige pigmented Morris Stickley high leg style chair Laguna Niguel after",
    caption:
      "Beige Morris Stickley high-leg chair showed fading and surface dirt. Restoration involved cleaning, conditioning, and recoloring to restore the leather's original hue, texture, and visual appeal while preserving the chair's structure and style.",
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-chair-black-pigmented-faded-worn-oily-tired-restored-recolored-herman-miller-eames-before.png",
    beforeAlt: "Black pigmented Herman Miller Eames chair before restoration",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-chair-black-pigmented-faded-worn-oily-tired-restored-recolored-herman-miller-eames-after.png",
    afterAlt: "Black pigmented Herman Miller Eames chair after restoration",
    caption:
      "Black Herman Miller Eames chair leather showing fading, wear, oil stains, and tired appearance was cleaned, restored, recolored, and conditioned to achieve uniform color, improved texture, and enhanced comfort.",
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
    question: "Do you serve the San Diego area?",
    answer: (
      <p>
        Yes. ReLeather has been in the Leather Restoration and Leather Cleaning industry for over 20 years serving San Diego. We offer Leather Restoration, Leather Cleaning, Leather Dyeing, Leather Reupholstery, and Foam Replacement. <Link href="/estimate" title="Request a quote">Request a quote</Link> to get started.
      </p>
    ),
  },
];

const protectedLeatherThumb = "https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-protected-leather-thumb.jpg";
const pureAnilineThumb = "https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-pure-aniline-leather-thumb.jpg";
const semiAnilineThumb = "https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-semi-aniline-leather-thumb.jpg";
const nubuckThumb = "https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-nubuck-leather-thumb.jpg";
const waxPullUpThumb = "https://res.cloudinary.com/releather-com/image/upload/v1630971792/before-after/type-of-leather-wax-pull-up-thumb.jpg";

export default function LeatherFurnitureRepairInSanDiegoPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Leather Restoration San Diego"
            subtitle={<span className="text-xl">Professional Leather Restoration Serving San Diego area</span>}
            primaryCta={{
              href: "/estimate",
              title: "Leather Restoration San Diego Estimate",
              label: "Leather Restoring Estimate",
            }}
            secondaryCta={{
              href: "tel:+19495294727",
              title: "(949) 529-4727",
              label: "(949) 529-4727",
            }}
            rightContent={
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/v1632032856/before-after/releather-leather-restoration-san-diego-banner-after.jpg"
                  alt="ReLeather Leather Restoration San Diego Location"
                  title="ReLeather Leather Restoration San Diego Location"
                  width={560}
                  height={400}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
            }
            body={
              <>
                <p className="font-sans text-base leading-relaxed text-gray-800">
                  You love your leather furniture, but it&apos;s faded and discolored. It looks old and worn out..
                </p>
                <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
                  Look no further than ReLeather. We are leather specialists who have been in the Leather Restoration and Leather Cleaning industry for over 20 years serving San Diego. Leather can be damaged in many ways and our team knows how to restore it back into shape! You spent too much on your leather furniture to have them wear away prematurely. We will help you restore those leather couches and chairs to renewed quality with ease and save you some money!
                </p>
                <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
                  Please feel free to contact us and schedule a <Link href="/estimate" title="Leather Restoration San Diego Estimate">Leather Restoring Estimate.</Link>
                </p>
              </>
            }
          />

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="mb-4 border-b-2 border-releather-orange pb-2 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Service Area San Diego
            </h2>
            <p className="font-sans text-base font-medium text-gray-800">Available by Appointment</p>
            <h3 className="mt-6 font-display text-xl font-normal tracking-tight text-black">Professional Leather Services:</h3>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h4 className="mb-4 border-b-2 border-releather-orange pb-2 font-display text-xl font-normal tracking-tight text-black">
              Leather Restoration
            </h4>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Imagine having your favorite leather sofa restored back to its original color in just 1 to 2 weeks. With our professional <Link href="/services/leather-restoration" title="Leather Restoration San Diego">Leather Restoration service</Link>, we can bring life back into your furniture. We have years of experience restoring quality made leather furniture such as sofas and chairs. We restore the original color of your faded and discolored leather with our time-tested treatment process, remove surface stains, scratches, and spotting, and add a protective coating that ensures durability for years to come!
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">Before</h4><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/v1771848613/before-after/leather-restoration/furniture/tan/Leather-Recolor-Tan-Sofa-Before.jpg"
                  alt="Before Picture of Leather Restoration in San Diego"
                  width={550}
                  height={367}
                  loading="lazy"
                  className="border-2 border-[#23262f]"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">After</h4><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/v1771848613/before-after/leather-restoration/furniture/tan/Leather-Recolor-Tan-Sofa-After.jpg"
                  alt="After Picture of Leather Restoration in San Diego"
                  width={550}
                  height={367}
                  loading="lazy"
                  className="border-2 border-[#23262f]"
                />
              </div>
            </div>
            <h5 className="mt-8 font-display text-lg font-normal tracking-tight text-black">Recommended Leather For Leather Restoration</h5>
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-protected-leather.jpg" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-center"><Image unoptimized src={protectedLeatherThumb} alt="Type of leather Protected Leather" width={80} height={80} loading="lazy" className="border-2 border-[#23262f]" />
                <p className="font-sans text-sm text-gray-800">Protected Aniline Leather</p>
              </a>
              <a href="https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-pure-aniline-leather.jpg" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-center"><Image unoptimized src={pureAnilineThumb} alt="Type of leather Pure Aniline Leather" width={80} height={80} loading="lazy" className="border-2 border-[#23262f]" />
                <p className="font-sans text-sm text-gray-800">Pure Aniline Leather</p>
              </a>
              <a href="https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-semi-aniline-leather.jpg" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-center"><Image unoptimized src={semiAnilineThumb} alt="Type of leather Semi Aniline Leather" width={80} height={80} loading="lazy" className="border-2 border-[#23262f]" />
                <p className="font-sans text-sm text-gray-800">Semi Aniline Leather</p>
              </a>
              <a href="https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-nubuck-leather.jpg" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-center"><Image unoptimized src={nubuckThumb} alt="Type of leather Nubuck Leather" width={80} height={80} loading="lazy" className="border-2 border-[#23262f]" />
                <p className="font-sans text-sm text-gray-800">Nubuck Leather</p>
              </a>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h4 className="mb-4 border-b-2 border-releather-orange pb-2 font-display text-xl font-normal tracking-tight text-black">
              Leather Cleaning &amp; Conditioning, Retouching
            </h4>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              We can&apos;t believe you folks toss out good leather when it just needs an update! Rediscover the beauty of aged leather. The best-kept secret is our top rated, <Link href="/services/leather-cleaning" title="Leather Cleaning San Diego Estimate">Leather Cleaning, Conditioning, and Retouching</Link> service that removes deep dirt and stains without stripping away all that lovely natural patina. It saves you time not having to buy new furniture since we will have your old favorite pieces looking like they did when Obama was president!
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">Before</h4><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/v1631068175/before-after/leather-cleaning-conditioning-recoloring-leather-sofa-before-1.jpg"
                  alt="Before Picture of Leather Cleaning Sofa in San Diego"
                  width={550}
                  height={367}
                  loading="lazy"
                  className="border-2 border-[#23262f]"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">After</h4><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/v1631068175/before-after/leather-cleaning-conditioning-recoloring-leather-sofa-after-1.jpg"
                  alt="After Picture of Leather Cleaning Sofa in San Diego"
                  width={550}
                  height={367}
                  loading="lazy"
                  className="border-2 border-[#23262f]"
                />
              </div>
            </div>
            <h3 className="mt-8 font-display text-lg font-normal tracking-tight text-black">Recommended Leather for Leather Cleaning:</h3>
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-protected-leather.jpg" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-center"><Image unoptimized src={protectedLeatherThumb} alt="Type of leather Protected Leather" width={80} height={80} loading="lazy" className="border-2 border-[#23262f]" />
                <p className="font-sans text-sm text-gray-800">Protected Aniline Leather</p>
              </a>
              <a href="https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-pure-aniline-leather.jpg" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-center"><Image unoptimized src={pureAnilineThumb} alt="Type of leather Pure Aniline Leather" width={80} height={80} loading="lazy" className="border-2 border-[#23262f]" />
                <p className="font-sans text-sm text-gray-800">Pure Aniline Leather</p>
              </a>
              <a href="https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-semi-aniline-leather.jpg" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-center"><Image unoptimized src={semiAnilineThumb} alt="Type of leather Semi Aniline Leather" width={80} height={80} loading="lazy" className="border-2 border-[#23262f]" />
                <p className="font-sans text-sm text-gray-800">Semi Aniline Leather</p>
              </a>
              <a href="https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-wax-pull-up.jpg" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-center"><Image unoptimized src={waxPullUpThumb} alt="Type of leather Wax Pull Up Leather" width={80} height={80} loading="lazy" className="border-2 border-[#23262f]" />
                <p className="font-sans text-sm text-gray-800">Wax Pull Up</p>
              </a>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h4 className="mb-4 border-b-2 border-releather-orange pb-2 font-display text-xl font-normal tracking-tight text-black">
              Leather Dyeing
            </h4>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Do your leather couches &amp; chairs just not match the color of your wonderfully decorated home? Relax! We offer <Link href="/services/leather-dyeing" title="Leather Dyeing San Diego Estimate">Custom Leather Dyeing</Link> on just about any kind of leather furniture. Is it due to wear and tear, an unfortunate stain or spillage, or is it simply out-of-date? It&apos;s time to change those old colors! After we&apos;ve treated the base coatings on furniture pieces with fresh coats of dye, you&apos;ll have renewed items that fit into today&apos;s decor like never before!
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">Before</h4><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/v1631165753/before-after/Leather-Dyeing-Chair-Change-Color-Before.jpg"
                  alt="Before Picture of Leather Dyeing Chair Sofa in San Diego"
                  width={550}
                  height={367}
                  loading="lazy"
                  className="border-2 border-[#23262f]"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">After</h4><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/v1631165753/before-after/Leather-Dyeing-Chair-Change-Color-After.jpg"
                  alt="After Picture of Leather Dyeing Chair Sofa in San Diego"
                  width={550}
                  height={367}
                  loading="lazy"
                  className="border-2 border-[#23262f]"
                />
              </div>
            </div>
            <h3 className="mt-8 font-display text-lg font-normal tracking-tight text-black">Recommended Leather for Leather Dyeing:</h3>
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-protected-leather.jpg" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-center"><Image unoptimized src={protectedLeatherThumb} alt="Type of leather Protected Leather" width={80} height={80} loading="lazy" className="border-2 border-[#23262f]" />
                <p className="font-sans text-sm text-gray-800">Protected Aniline Leather</p>
              </a>
              <a href="https://res.cloudinary.com/releather-com/image/upload/v1630971788/before-after/type-of-leather-semi-aniline-leather.jpg" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-center"><Image unoptimized src={semiAnilineThumb} alt="Type of leather Semi Aniline Leather" width={80} height={80} loading="lazy" className="border-2 border-[#23262f]" />
                <p className="font-sans text-sm text-gray-800">Semi Aniline Leather</p>
              </a>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h4 className="mb-4 border-b-2 border-releather-orange pb-2 font-display text-xl font-normal tracking-tight text-black">
              Leather Reupholstery
            </h4>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              If your leather furniture is starting to look a little worse for wear, don&apos;t despair! ReLeather can help. We offer professional <Link href="/services/leather-upholstery" title="Leather Reupholstery Upholstery Replacement San Diego Service">Leather Reupholstery</Link> services for sofas, chairs, dining chairs, and more. We can replace old or damaged leather with new matching leather, or go for a full overhaul and replace the entire upholstery with new leather. So whether you&apos;re looking to breathe new life into an old favorite or want to update your furniture for a fresh look, we can help. Contact us today for a <Link href="/estimate" title="Leather Reupholstery Upholstery Replacement San Diego Estimate">free Leather Restoration quote!</Link>
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">Before</h4>
                <div className="flex flex-wrap gap-2"><Image unoptimized
                    src="https://res.cloudinary.com/releather-com/image/upload/v1652226337/before-after/leather-reupholstery-thomasville-sofa-before.jpg"
                    alt="Before Picture of Leather Reupholstery Thomasville Leather Sofa in San Diego"
                    width={275}
                    height={183}
                    loading="lazy"
                    className="border-2 border-[#23262f]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">After</h4>
                <div className="flex flex-wrap gap-2"><Image unoptimized
                    src="https://res.cloudinary.com/releather-com/image/upload/v1652226731/before-after/leather-reupholstery-thomasville-sofa-after.jpg"
                    alt="After Picture of Leather Reupholstery Thomasville Sofa San Diego"
                    width={275}
                    height={183}
                    loading="lazy"
                    className="border-2 border-[#23262f]"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h4 className="mb-4 border-b-2 border-releather-orange pb-2 font-display text-xl font-normal tracking-tight text-black">
              Foam Replacement
            </h4>
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Looking to give your old leather furniture a new lease on life? Our <Link href="/services/restuffing-foam-replacement" title="Leather Foam Replacement Upholstery San Diego Service">Foam Replacement</Link> service can help your old, saggy seat cushions and pillows. Our high density foam is comfortable and long lasting, so you can enjoy your furniture for years to come. Choose from soft or firm density High Resiliency (HR) foam – whichever best suits your needs. So bring in your old leather furniture and give it a fresh start today!
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">Before</h4>
                <div className="flex flex-wrap gap-2"><Image unoptimized
                    src="https://res.cloudinary.com/releather-com/image/upload/v1652227896/before-after/leather-sofa-foam-replacement-before.jpg"
                    alt="Before Picture of Leather Foam Replacement Leather Sofa in San Diego"
                    width={275}
                    height={183}
                    loading="lazy"
                    className="border-2 border-[#23262f]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">After</h4>
                <div className="flex flex-wrap gap-2"><Image unoptimized
                    src="https://res.cloudinary.com/releather-com/image/upload/v1652227896/before-after/leather-sofa-foam-replacement-after.jpg"
                    alt="After Picture of Leather Foam Replacement Leather Sofa in San Diego"
                    width={275}
                    height={183}
                    loading="lazy"
                    className="border-2 border-[#23262f]"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <h2 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Complete Leather Restoration &amp; Upholstery Services in San Diego
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
              <Link
                href="/services/restuffing-foam-replacement"
                title="Foam Replacement Service"
                className="inline-flex border-2 border-releather-orange bg-releather-orange px-4 py-2 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange"
              >
                Foam Replacement
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
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">Before</p><Image unoptimized
                        src={item.beforeSrc}
                        alt={item.beforeAlt}
                        width={300}
                        height={225}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover border-2 border-[#23262f]"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">After</p><Image unoptimized
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

          <Faq id="faq" heading="Frequently Asked Questions" items={locationFaqItems} />
        </div>
      </main>
      <Footer />
    </>
  );
}
