import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import BlogPostSubsection from "@/components/BlogPostSubsection";
import Faq from "@/components/Faq";

const title = "Restoration Hardware Leather Sofa Repair & Cleaning | ReLeather";
const description =
  "Restoration Hardware leather sofa repair, cleaning, and restoration. RH Maxwell, Modena, Lancaster. Leather refurbishing, restuffing, foam replacement. Southern California.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/restoration-hardware-leather-sofa-repair" },
  openGraph: { url: "/restoration-hardware-leather-sofa-repair", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const rhFaqItems = [
  {
    question: "Can you do the work on site or in my home?",
    answer: (
      <p>
        Yes, depending on our assessment of the condition of the leather sofa or chair, we can perform the work at your home, which should take a few hours. We prep the area to ensure nothing gets damaged during the process.
      </p>
    ),
  },
  {
    question: "Can you remove pen marks on my Restoration Hardware leather?",
    answer: (
      <p>
        Pen and ink can penetrate the lightly treated aniline leather. While we can often conceal these marks with our color creams, the success of this method varies depending on the level of the damage. Our team will assess the condition of your leather during our initial assessment and advise you accordingly. As for scratches, natural aniline wax pull-up leather can typically be lightly scratched and rubbed out to restore its appearance. However, if the scratches are deep and penetrate the wax layer, the restoration may be limited.{" "}<Image unoptimized
          src="https://res.cloudinary.com/releather-com/image/upload/v1715942429/before-after/leather-restoration/furniture/restoration-hardware/Aniline-Distressed-Leather-with-Pen-Ink-Mark-400px.jpg"
          alt="Aniline Distressed Leather with Pen Ink Mark Removal"
          title="Aniline Distressed Leather with Pen Ink Mark Removal"
          width={400}
          height={300}
          loading="lazy"
          className="mx-auto my-4 block"
        />
      </p>
    ),
  },
  {
    question: "Can you remove scratch marks on my Restoration Hardware leather?",
    answer: (
      <p>
        For scratch removal, natural aniline wax pull-up leather can typically be lightly scratched and rubbed out to restore its appearance. However, if the scratches are deep and penetrate the wax layer, the restoration may be limited.{" "}<Image unoptimized
          src="https://res.cloudinary.com/releather-com/image/upload/v1715794039/samples/repairs/Restoration-Hardware-Leather-Sofa-Couch-Scratches-Scratch-200.jpg"
          alt="Leather Seat Cushion Replacement Fixes Ripped Torn Leather Couch Sofa Chair - Close Image"
          title="Leather Seat Cushion Replacement Fixes Ripped Torn Leather Couch Sofa Chair - Close Image"
          width={200}
          height={150}
          loading="lazy"
          className="mx-auto my-4 block"
        />
      </p>
    ),
  },
  {
    question: "Do you refill the leather cushions with down feathers?",
    answer: (
      <p>
        Currently, we do not stock down feather material for refilling cushions. However, we offer polyester dacron padding material to add support to your back cushions and HR foam to your seat cushions. Down feathers provide a softer and more plush feel, allowing for a sinking sensation when seated. In contrast, dacron padding and HR foam, in particular, offer firmer support, providing a more structured and resilient feel.
      </p>
    ),
  },
];

const beforeAfterSlides: Array<{
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  caption: React.ReactNode;
}> = [
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1715954789/before-after/leather-restoration/furniture/restoration-hardware/aniline-leather-cleaning-restoration-couch-400px.jpg",
    beforeAlt: "Sun bleached distressed wax pull-up dark brown leather sofa and chair set restored in Laguna Niguel, California - Before Picture",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1715954790/before-after/leather-restoration/furniture/restoration-hardware/aniline-leather-cleaning-restoration-sofa-400px.jpg",
    afterAlt: "Sun bleached distressed wax pull-up dark brown leather sofa and chair set restored in Laguna Niguel, California - After Picture",
    caption: <>Sun bleached  distressed wax pull-up dark brown leather sofa and chair set <strong>restored</strong> in Laguna Niguel, California</>,
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,y_5/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1715959503/before-after/leather-restoration/furniture/restoration-hardware/Tufted-Wax-Pull-Up-Leather-Couch-Color-Restored-Before.jpg",
    beforeAlt: "Tufted leather designer sectional looking good again after recoloring, cleaning, moisturizing, and protecting - Before Picture",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320//v1715959502/before-after/leather-restoration/furniture/restoration-hardware/Tufted-Wax-Pull-Up-Leather-Couch-Color-Restored-After.jpg",
    afterAlt: "Tufted leather designer sectional looking good again after recoloring, cleaning, moisturizing, and protecting - After Picture",
    caption: <>Tufted leather  designer sectional  looking good again after <strong>recoloring</strong>, cleaning, moisturizing, and protecting.</>,
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,y_30/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1715960625/before-after/leather-restoration/furniture/restoration-hardware/Distressed-Leather-Back-Cushion-Color-Faded-Restored-Before-400px.jpg",
    beforeAlt: "Compare the faded, distressed leather with the leather treated with our specialized leather restoration treatment - After Picture",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_300,y_24,x_15/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1715960626/before-after/leather-restoration/furniture/restoration-hardware/Distressed-Leather-Back-Cushion-Color-Faded-Restored-After-400px.jpg",
    afterAlt: "Compare the faded, distressed leather with the leather treated with our specialized leather restoration treatment - After Picture",
    caption: <>Compare the faded, distressed leather with the leather treated with our specialized leather <strong>restoration treatment</strong>.</>,
  },
  {
    beforeSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_200,y_30,x_46/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1685891398/before-after/leather-restoration-tufted-lounge-chair-tan-color-before.jpg",
    beforeAlt: "Color faded, oily tan aniline leather chair successfully restored & back in the living room looking good - Before Picture",
    afterSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_200,y_50,x_33/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1685891398/before-after/leather-restoration-tufted-lounge-chair-tan-color-after.jpg",
    afterAlt: "Color faded, oily tan aniline leather chair successfully restored & back in the living room looking good - After Picture",
    caption: <>Color faded, oily tan aniline leather chair<strong> successfully restored</strong> &amp; back in the living room looking good.</>,
  },
];

export default function RestorationHardwareLeatherSofaRepairPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Restoration Hardware Leather Sofa Repair & Cleaning"
            subtitle={
              <>
                Leather Refurbished! Value Restored!
                <br />
                Restoration Hardware is Worth Restoring!
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Restoration Hardware Leather Sofa Repair Service Cost",
              "aria-label": "Restoration Hardware Leather Sofa Repair Service Cost",
              label: (
                <>
                  Get <span className="hidden sm:inline">Restoration Hardware Repair </span>Quote
                </>
              ),
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/f_webp/w_425/l_image:upload:logo:brands:restoration-hardware-logo-23AA81E6ED-seeklogo.com_ixzsy7/c_scale,fl_relative,w_0.30/o_100/fl_layer_apply,g_south_east,x_0.03,y_0.04/v1715792950/samples/service/Restoration-Hardware-Leather-Sofa-Repair-Service-400px.jpg",
              alt: "Restoration Hardware Leather Sofa Repair and Restoration Service",
              title: "Restoration Hardware Leather Sofa Repair and Restoration Service",
              width: 425,
              height: 400,
            }}
            body={
              <p>
                Welcome to ReLeather, your trusted specialist in the care and restoration of RH leather furniture. From sofas and couches to chairs and more, we handle a wide range of repairs including surface discoloration, dry and stiff leather, minor scuffs and scratches, as well as stains and spots. Our expert team use a specialized restoration process that includes leather cleaning, conditioning, retouching, recoloring, and protection, ensuring your Restoration Hardware pieces are refurbished, preserved, and remain a luxurious and comfortable part of your home decor. Based in Southern California, we are ready to serve you.  Contact us today for an assessment and quote tailored to your sofa&apos;s specific needs.
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
              RH Maxwell Sofa, Modena Chesterfield, Lancaster Sofa, Churchill Chairs and more.
            </p>
            <ul className="mt-6 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
              <li className="flex flex-col items-center border-4 border-black p-4"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/v1715829379/samples/repairs/Restoration-Hardware-Leather-Sofa-Dry-Leather-Repair.jpg"
                  alt="Leather Seat Cushion Replacement Fixes Ripped Torn Leather Couch Sofa Chair - Close Image"
                  title="Leather Seat Cushion Replacement Fixes Ripped Torn Leather Couch Sofa Chair - Close Image"
                  width={200}
                  height={200}
                  loading="lazy"
                  className="rounded"
                />
                <span className="mt-2 font-sans text-black">Dry &amp; Rough</span>
              </li>
              <li className="flex flex-col items-center border-4 border-black p-4"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/v1715827232/samples/repairs/Restoration-Hardware-Leather-Sofa-Discoloration-Repair-200px.jpg"
                  alt="Leather Cushion Replacement replaces cracked split leather seat sofa couch cushions"
                  title="Leather Cushion Replacement replaces cracked split leather seat sofa couch cushions"
                  width={200}
                  height={200}
                  loading="lazy"
                  className="rounded"
                />
                <span className="mt-2 font-sans text-black">Discoloration</span>
              </li>
              <li className="flex flex-col items-center border-4 border-black p-4"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/v1697020657/before-after/leather-reupholstery/leather-couch-worn-tired-fix-leather-recover-service-thumb.jpg"
                  alt="Leather Couch Seat Replacement Covers replaces worn out tired leather seats cushion"
                  title="Leather Couch Seat Replacement Covers replaces worn out tired leather seats cushion"
                  width={200}
                  height={200}
                  loading="lazy"
                  className="rounded"
                />
                <span className="mt-2 font-sans text-black">Oily Stains</span>
              </li>
              <li className="flex flex-col items-center border-4 border-black p-4"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/v1715828703/samples/repairs/Restoration-Hardware-Leather-Sofa-Saggy-Flat-Restuffing-Refill-Repair-200px.jpg"
                  alt="Leather Couch Seat Replacement Covers replaces worn out tired leather seats cushion"
                  title="Leather Couch Seat Replacement Covers replaces worn out tired leather seats cushion"
                  width={200}
                  height={200}
                  loading="lazy"
                  className="rounded"
                />
                <span className="mt-2 font-sans text-black">Saggy Cushions</span>
              </li>
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <ul className="list-none space-y-4 p-0">
              <li className="flex items-start gap-4 border-4 border-black p-4">
                <span className="font-display text-2xl font-normal text-releather-orange" aria-hidden>1</span>
                <div>
                  <h6 className="font-display text-lg font-normal text-black">Get Quote</h6>
                  <span className="font-sans text-gray-800">Submit form with photos</span>
                </div>
              </li>
              <li className="flex items-start gap-4 border-4 border-black p-4">
                <span className="font-display text-2xl font-normal text-releather-orange" aria-hidden>2</span>
                <div>
                  <h6 className="font-display text-lg font-normal text-black">Pickup/Dropoff</h6>
                  <span className="font-sans text-gray-800">Serving Orange County, Los Angeles, San Diego</span>
                </div>
              </li>
              <li className="flex items-start gap-4 border-4 border-black p-4">
                <span className="font-display text-2xl font-normal text-releather-orange" aria-hidden>3</span>
                <div>
                  <h6 className="font-display text-lg font-normal text-black">Delivery</h6>
                  <span className="font-sans text-gray-800">Average time 1-2 weeks</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Is Restoration Hardware Worth Restoring?"
              tagline={<em> → Restore your leather investment!</em>}
            />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="font-sans text-base leading-relaxed text-gray-800">
                  Restoration Hardware sofas are renowned for their exceptional leather quality and craftsmanship. Understanding the unique characteristics of Restoration Hardware leather, how to properly maintain it, and what to expect in terms of long-term care and costs can significantly enhance its longevity and appearance. <Link href="/services/leather-restoration" title="Leather Restoration for Leather Sofas">Restoring your Restoration Hardware leather sofa</Link> is a wise investment for several reasons:
                </p>
                <ul className="mt-4 list-none space-y-2 p-0 font-sans text-base leading-relaxed text-gray-800">
                  <li><strong>Repair vs. Replace Savings:</strong> Restoring a quality sofa is often more cost-effective than replacing it.</li>
                  <li><strong>Preserve Value:</strong> RH leather furniture holds its value well due to its reputation for quality and durability.</li>
                  <li><strong>Quality Leather: </strong> RH sofas are typically made with high-quality aniline leather, which is known for its durability and ability to develop a beautiful patina over time.</li>
                </ul>
              </div>
              <div className="flex justify-center"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/ar_1:1,w_450,h_350/v1715961720/before-after/leather-restoration/furniture/restoration-hardware/aniline-leather-fabric-sofa-distressed-wax-pull-up-restoration-service.jpg"
                  alt="Restoration Hardware Leather Sofa Repair Cleaning Restoration Restuffing Refilling Service"
                  title="Restoration Hardware Leather Sofa Repair Cleaning Restoration Restuffing Refilling Service"
                  loading="lazy"
                  width={450}
                  height={350}
                  className="rounded border-4 border-black"
                />
              </div>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="What Type of Leather Does Restoration Hardware Use?"
              tagline={<em> → Leather Description </em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Restoration Hardware uses various <Link href="/types-of-leather" title="Restoration Hardware Types of Leather">types of leather</Link> for its furniture collections, each selected for its unique characteristics and aesthetic appeal. Your Restoration Hardware leather sofa may be crafted from the following:
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h4 className="font-display text-xl font-normal tracking-tight text-black">Pure Aniline Leather</h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Top grain pure aniline leather is minimally treated to retain the hide&apos;s natural appearance and texture, making it the most luxurious and costly leather option. With minimal protective coating, it is more prone to staining, color fading, and surface scratches, thus requiring careful maintenance. This grade of leather upholstery is particularly valuable because it highlights the leather&apos;s inherent surface characteristics, adding unique character.
                </p>
              </div>
              <div className="flex justify-center"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/r_max,c_crop,w_300,y_50,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Pure%20Aniline,co_rgb:ffffff/v1652587080/leather/Aniline_Mustard_HI.jpg"
                  alt="Restoration Hardware Sofa Type of Leather Wax-Pull Up Leather"
                  title="Restoration Hardware Sofa Type of Leather Wax-Pull Up Leather"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="border-[5px] border-releather-orange"
                />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h4 className="font-display text-xl font-normal tracking-tight text-black">Distressed Leather</h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Distressed finished leather is treated to have an aged or worn look from the start, offering a rugged and vintage style. It features a rougher texture and more pronounced markings, creating an antique appeal that is both distinctive and durable. As it ages, distressed leather develops a patina that further enhances its vintage look, ensuring it remains a stylish and enduring choice for any setting.
                </p>
              </div>
              <div className="flex justify-center"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/r_max,c_crop,w_300,y_300,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Distressed,co_rgb:ffffff/v1639529300/leather/Concerto_Dark-Brown_HI.jpg"
                  alt="Restoration Hardware Sofa Type of Leather Wax-Pull Up Leather"
                  title="Restoration Hardware Sofa Type of Leather Wax-Pull Up Leather"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="border-[5px] border-releather-orange"
                />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h4 className="font-display text-xl font-normal tracking-tight text-black">Wax Pull-Up Leather</h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Wax pull-up finished leather is enhanced with oils and waxes to create a glossy or weathered look. This type is distinctive because stretching it redistributes the oils or waxes, lightening the color in those areas. At Restoration Hardware, twelve layers of wax are applied by hand, enhancing the leather&apos;s durability while maintaining a soft and flexible feel. However, this finished upholstery needs special leather care as it is susceptible to fading under direct sunlight and can easily pick up stains from body oils and water.
                </p>
              </div>
              <div className="flex justify-center"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/r_max,c_crop,w_300,y_400,b_rgb:23262f,bo_5px_solid_rgb:f8991d/g_center,l_text:montserrat_40_style_light:Wax%20Pull-Up,co_rgb:ffffff/v1653007848/leather/Harmony_Coffee_HI.jpg"
                  alt="Restoration Hardware Sofa Type of Leather Wax-Pull Up Leather"
                  title="Restoration Hardware Sofa Type of Leather Wax-Pull Up Leather"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="border-[5px] border-releather-orange"
                />
              </div>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="How We Restore Restoration Hardware Leather Sofa"
              tagline={<em> → Step by Step</em>}
            />
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <div className="space-y-6">
                <div className="border-4 border-black p-4">
                  <h5 className="font-display text-xl font-normal tracking-tight text-black">
                    <strong>Assessment</strong>
                  </h5>
                  <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                    As noted, the leather types used by Restoration Hardware require specific care methods. Their aniline leather, in particular, is soft and luxurious but highly sensitive to staining and sun damage. Before proceeding, we evaluate the leather&apos;s condition and finish.
                  </p>
                </div>
                <ol className="list-decimal space-y-6 pl-6 font-sans text-base leading-relaxed text-gray-800">
                  <li className="pl-2">
                    <h5 className="font-display text-xl font-normal tracking-tight text-black">
                      <strong>Leather Cleaning</strong>
                    </h5>
                    <p className="mt-2">
                      We start by gently removing surface dirt and buildup, which can obscure the leather&apos;s natural luster. Our cleaning methods deeply cleanse the leather surface, ensuring that all grime and contaminants are eliminated without harming the leather&apos;s integrity.
                    </p>
                  </li>
                  <li className="pl-2">
                    <h5 className="font-display text-xl font-normal tracking-tight text-black">
                      <strong>Leather Conditioning</strong>
                    </h5>
                    <p className="mt-2">
                      After cleaning, we apply our conditioner that is specially formulated for aniline leather. This step moisturizes, softens, and strengthens the leather, enhancing its durability. Our conditioning process also polishes the leather and provides a barrier against water spotting and cracking, keeping the leather supple and resilient.
                    </p>
                  </li>
                  <li className="pl-2">
                    <h5 className="font-display text-xl font-normal tracking-tight text-black">
                      <strong>Leather Recoloring</strong>
                    </h5>
                    <p className="mt-2">
                      Regular use can lead to minor scuffs and discoloration. Our specialized leather retouching service targets these imperfections, treating the leather to renew the color finish and return a uniform appearance.
                    </p>
                  </li>
                  <li className="pl-2">
                    <h5 className="font-display text-xl font-normal tracking-tight text-black">
                      <strong>Leather Protection</strong>
                    </h5>
                    <p className="mt-2">
                      We apply of a protective finish that seals the color finish and shields the leather from water spotting damage. This layer preserves its rich color and texture.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="space-y-4"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/l_text:montserrat_40_style_light:Before,co_rgb:000000,g_south_west,y_25,x_25/v1715885519/before-after/leather-restoration/furniture/restoration-hardware/Restoration-Hardware-Leather-Tufted-Leather-Color-Restoration-400px.jpg"
                  alt="Tufted Distressed Wax Pull Up Sectional Sofa Color Restored - Before"
                  title="Tufted Distressed Wax Pull Up Sectional Sofa Color Restored - Before"
                  loading="lazy"
                  width={375}
                  height={280}
                  className="w-full max-w-[375px] border-4 border-black object-cover"
                /><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/l_text:montserrat_40_style_light:After,co_rgb:000000,g_south_east,y_25,x_25/v1715886382/before-after/leather-restoration/furniture/restoration-hardware/Restoration-Hardware-Leather-Tufted-Leather-Color-Restoration-After-400px.jpg"
                  alt="Tufted Distressed Wax Pull Up Sectional Sofa Color Restored - After"
                  title="Tufted Distressed Wax Pull Up Sectional Sofa Color Restored - After"
                  loading="lazy"
                  width={375}
                  height={280}
                  className="w-full max-w-[375px] border-4 border-black object-cover"
                /><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/g_north,y_12,x_12,l_text:montserrat_25_style_light:Before%20and%20After,co_rgb:000000/v1715961471/before-after/leather-restoration/furniture/restoration-hardware/Distressed-Wax-Pull-Up-Leather-Sofa-Comparison-Before-and-After-400px.jpg"
                  alt="Leather and Fabric Wax Pull Up Sectional Sofa Color Restored - After"
                  title="Leather and Fabric Distressed Wax Pull Up Sectional Sofa Color Restored - After"
                  loading="lazy"
                  width={375}
                  height={280}
                  className="w-full max-w-[375px] border-4 border-black object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <p className="mb-6 text-center font-sans text-lg font-medium text-gray-800">
              <em> → 6 Common Restoration Hardware Repairs</em>
            </p>
            <ul className="grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,h_285,bo_5px_solid_rgb:f8991d/v1715928291/before-after/leather-restoration/furniture/restoration-hardware/Restoration-Hardware-Color-Faded-Leather-Sofa-Closeup-300px.jpg",
                  alt: "A comparison of sun-faded and original leather on a tufted RH couch, highlighting the  contrast between the exposed and covered areas. It needs our Leather Restoration service.",
                  title: "A comparison of sun-faded and original leather on a tufted Restoration Hardware couch, highlighting the  contrast between the exposed and covered areas. It needs our Leather Restoration service.",
                  h4: "Color Fading",
                  text: "A comparison of sun-faded and original leather on a tufted RH couch, highlighting the  contrast between the exposed and covered areas. It needs our Leather Restoration service.",
                },
                {
                  src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,h_285,bo_5px_solid_rgb:f8991d/v1715928782/before-after/leather-restoration/furniture/restoration-hardware/Restoration-Hardware-Leather-Sofa-Dry-Leather-Closeup-300px.jpg",
                  alt: "A  Restoration Hardware leather seat cushion, showing a really dry and rough surface from moisture loss, highlighting the need for moisturizing included in our Leather Conditioning treatment.",
                  title: "A  Restoration Hardware leather seat cushion, showing a really dry and rough surface from moisture loss, highlighting the need for moisturizing included in our Leather Conditioning treatment.",
                  h4: "Dry Leather",
                  text: "A  Restoration Hardware leather seat cushion, showing a really dry and rough surface from moisture loss, needs moisturizing to restore supple feel included in our Leather Conditioning treatment.",
                },
                {
                  src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,h_285,bo_5px_solid_rgb:f8991d/v1715929463/before-after/leather-restoration/furniture/restoration-hardware/Restoration-Hardware-Leather-Sofa-Cracked-Leather-Closeup-300px.jpg",
                  alt: "A Restoration Hardware backrest cushion showing cracking in areas stressed and creased from leaning back, highlighting lack of routine moisturizing. This couch needs our Leather Conditioning treatment.",
                  title: "A Restoration Hardware backrest cushion showing cracking in areas stressed and creased from leaning back, highlighting lack of routine moisturizing. This couch needs our Leather Conditioning treatment.",
                  h4: "Cracking Leather",
                  text: "A RH backrest cushion showing cracking in areas stressed and creased from leaning back, highlighting lack of routine moisturizing. This couch needs our Leather Conditioning treatment.",
                },
                {
                  src: "https://res.cloudinary.com/releather-com/image/upload/bo_5px_solid_rgb:f8991d/v1715930830/before-after/leather-restoration/furniture/restoration-hardware/Restoration-Hardware-Leather-Sofa-Stained-Spot-Leather-Closeup-300px.jpg",
                  alt: "A RH leather seat visibly stained with water spots that have seeped into the absorbent aniline leather, highlighting the need of stain removal and for our complete Leather Restoration service.",
                  title: "A RH leather seat visibly stained with water spots that have seeped into the absorbent aniline leather, highlighting the need of stain removal and for our complete Leather Restoration service.",
                  h4: "Stained Leather",
                  text: "A RH leather seat visibly stained with water spots that have seeped into the absorbent aniline leather, highlighting the need of stain removal and for our complete Leather Restoration service.",
                },
                {
                  src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,h_285,bo_5px_solid_rgb:f8991d/v1715930282/before-after/leather-restoration/furniture/restoration-hardware/Restoration-Hardware-Leather-Sofa-Saggy-Leather-Closeup-300px.jpg",
                  alt: "A RH leather couch with very saggy backrest cushions, lacking support and shape, will benefit from our Restuffing Cushion Service, which restores comfort and shape effectively",
                  title: "A RH leather couch with very saggy backrest cushions, lacking support and shape, will benefit from our Restuffing Cushion Service, which restores comfort and shape effectively",
                  h4: "Saggy Back Cushions",
                  text: "A RH leather couch with very saggy backrest cushions, lacking support and shape, will benefit from our Restuffing Cushion service, which restores comfort and shape effectively.",
                },
                {
                  src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,h_285,bo_5px_solid_rgb:f8991d/v1715930454/before-after/leather-restoration/furniture/restoration-hardware/Restoration-Hardware-Leather-Sofa-Loose-Leather-Closeup-300px.jpg",
                  alt: "A RH leather couch with  loose seats, stretched leather, and a soft, flat core that causes  discomfort, requires Foam Replacement  & Refilling service to restore its comfort & support.",
                  title: "A RH leather couch with  loose seats, stretched leather, and a soft, flat core that causes  discomfort, requires Foam Replacement  & Refilling service to restore its comfort & support.",
                  h4: "Loose Soft Seat Cushions",
                  text: "A RH leather couch with  loose seats, stretched leather, and a soft, flat core that causes  discomfort, requires Foam Replacement  & Refilling service to restore its comfort & support.",
                },
              ].map((item, index) => (
                <li key={index} className="border-4 border-releather-orange bg-releather-dark p-2">
                  <div className="flex justify-center"><Image unoptimized
                      src={item.src}
                      alt={item.alt}
                      title={item.title}
                      width={300}
                      height={285}
                      loading="lazy"
                    />
                  </div>
                  <h4 className="mt-3 font-display text-xl font-normal tracking-tight text-white">
                    {item.h4}
                  </h4>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-gray-300">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Can Restoration Hardware Sofas and Chairs Be Restuffed and Foam Replaced?"
              tagline={<em> → Filling Cushions and Foam Replacement</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Yes, Restoration Hardware sofas and chairs can be restuffed and have their foam replaced. Our <Link href="/services/restuffing-foam-replacement" title="Cushion Refilling service for Restoration Hardware Leather Sofa and Chairs">Cushion Refilling service</Link> adds extra padding (dacron/fiber) to refresh your cushions, providing better support and restoring their original shape. Our <Link href="/services/restuffing-foam-replacement" title="Foam Replacement service for Restoration Hardware Leather Sofa and Chairs">Foam Replacement service</Link> involves replacing the foam core of seat cushions and refilling back cushions with added polyester/fiber padding. We offer various grades of HR foam, including soft, medium, and firm densities, to suit your comfort preferences.
            </p>
            <figure className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/w_400,bo_5px_solid_rgb:000000/v1631068175/before-after/leather-cleaning-conditioning-recoloring-leather-sofa-before-1.jpg"
                alt=""
                title=""
                loading="lazy"
                width={450}
                height={340}
                className="w-full border-[5px] border-black object-cover"
              /><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/w_400,bo_5px_solid_rgb:000000/v1631068175/before-after/leather-cleaning-conditioning-recoloring-leather-sofa-after-1.jpg"
                alt=""
                title=""
                loading="lazy"
                width={450}
                height={340}
                className="w-full border-[5px] border-black object-cover"
              />
              <figcaption className="col-span-full font-sans text-base leading-relaxed text-gray-800">
                This RH sofa had fading, discoloration, dryness, and spotting on the leather, with sagging back cushions that lacked support and appeared loose. After our complete leather restoration, including cleaning, conditioning, and protection treatments, the sofa looks refreshed. Our Refilling and Restuffing service restored the back cushions to their original shape and provided much-needed support, resulting in a comfortable and renewed sofa.
              </figcaption>
            </figure>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection title="How Much Does It Cost to Restore a Leather Couch?" />
            <div className="mt-6 overflow-hidden"><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/w_250/b_rgb:23262f,bo_7px_solid_rgb:f8991d/v1716005399/samples/brands/restoration-hardware/Churchill-Leather-Recliner-Chair-300px.webp"
                alt="How Much Does It Cost to Restore a Leather Couch or Chair?"
                title="How Much Does It Cost to Restore a Leather Couch or Chair?"
                loading="lazy"
                width={250}
                height={250}
                className="float-right ml-4 mb-4 border-[7px] border-releather-orange"
              />
              <p className="font-sans text-base leading-relaxed text-gray-800">
                Restoring a leather couch, especially a high-quality piece from Restoration Hardware, is a worthwhile investment that extends the life and enhances the appearance of your furniture. The cost of restoration can vary significantly based on several factors:
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="border-4 border-black p-4">
                <h5 className="font-display text-lg font-normal text-black">
                  <strong>Condition of Leather:</strong>
                </h5>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Depending on the wear and tear your couch, a full restoration would include deep cleaning, conditioning, surface treatments, recoloring, and protective coating.
                </p>
              </div>
              <div className="border-4 border-black p-4">
                <h5 className="font-display text-lg font-normal text-black">
                  <strong>Type of Leather:</strong>
                </h5>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  Each leather type requires a different restoration technique. Aniline leather is delicate &amp; requires careful, labor-intensive methods compared to more durable leathers.
                </p>
              </div>
              <div className="border-4 border-black p-4">
                <h5 className="font-display text-lg font-normal text-black">
                  <strong>Size of Furniture</strong>
                </h5>
                <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">
                  The size of the furniture is a factor in the cost, as it determines the amount of materials and labor needed. Discount pricing is available for a set or multiple pieces.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection title="Meet Our Skilled Leather Restoration Technician:" />
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
              <div className="flex justify-center"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/v1715938940/samples/people/Restoration-Hardware-Leather-Cleaning-Repair-Technician.jpg"
                  alt="Restoration Hardware Leather Technician Cleaning and Repair Service Center Sharing Experience"
                  title="Restoration Hardware Leather Technician Cleaning and Repair Service Center Sharing Experience"
                  loading="lazy"
                  width={400}
                  height={300}
                  className="rounded border-4 border-black"
                />
              </div>
              <p className="font-sans text-base leading-relaxed text-gray-800 [&_em]:text-black">
                <em> → At ReLeather, we regularly perform deep cleaning and conditioning, carefully revitalizing leather surfaces to breathe new life into each RH piece. From reinforcing sagging structures to delicately cleaning and moisturizing, each repair is approached with passion and care. Whether it&apos;s adding fill materials for cushions or blending new leather with old, I strive to make our customers happy.</em>
              </p>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <BlogPostSubsection title="Restoration Hardware Leather Care" />
                <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
                  Restoration Hardware leather is a special type of aniline leather that requires high maintenance. Avoid from using harsh chemicals or abrasive cleaners, as they can damage the leather&apos;s finish.The leather is lightly treated, meaning that everyday use can wear down the integrity of your leather furniture, and exposure to direct sunlight can dry out its suppleness faster. To protect your investment, a cleaning and conditioning routine is needed to maintain its luxurious look and feel or scheduling professional services periodically to keep your sofa looking its best.
                </p>
              </div>
              <div className="flex justify-center"><Image unoptimized
                  src="https://res.cloudinary.com/releather-com/image/upload/f_webp/v1643861241/logo/ReLeather-Leather-Conditioner.png"
                  alt="ReLeather Best Leather Conditioner for Restoration Hardware Leather Sofa Couch Chair and More"
                  title="ReLeather Best Leather Conditioner for Restoration Hardware Leather Sofa Couch Chair and More"
                  loading="lazy"
                  width={240}
                  height={300}
                  className="h-auto max-h-[500px] w-auto object-contain"
                />
              </div>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection title="Restoration Hardware Leather Conditioner" />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              <Link href="/leather-conditioner" title="Leather Conditioner for Restoration Hardware Leather Sofa Couch Chair and More">ReLeather Leather Conditioner</Link> is ideal for Restoration Hardware leather furniture. Our conditioner offers protection and rejuvenation. Unlike traditional formulas, our leather conditioner is wax-free and non-oily, ensuring that your leather retains its natural sheen without an overly glossy finish. This makes a significant difference for aniline and distressed leather, as it restores its luster, enhancing the unique surface features of lightly treated leather. Apply our leather conditioner every 6 to 12 months to keep the leather hydrated and supple.
            </p>
            <div className="mt-6 flex flex-wrap gap-4"><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/a_90,b_rgb:23262f,bo_5px_solid_rgb:f8991d/c_pad,w_190/g_center,l_text:montserrat_40_style_light:After,co_rgb:ffffff/v1715943111/before-after/leather-restoration/furniture/restoration-hardware/Leather-Conditioner-Restoration-Hardware-Leather-Application-2-300px.jpg"
                alt=""
                title=""
                loading="lazy"
                width={190}
                height={190}
                className="border-[5px] border-releather-orange"
              /><Image unoptimized
                src="https://res.cloudinary.com/releather-com/image/upload/a_90,b_rgb:23262f,bo_5px_solid_rgb:f8991d/c_pad,w_190/g_center,l_text:montserrat_40_style_light:Before,co_rgb:ffffff/v1715943111/before-after/leather-restoration/furniture/restoration-hardware/Leather-Conditioner-Restoration-Hardware-Leather-Application-1-300px.jpg"
                alt=""
                title=""
                loading="lazy"
                width={190}
                height={190}
                className="border-[5px] border-releather-orange"
              />
            </div>
            <ul className="mt-6 list-none space-y-2 p-0 font-sans text-base leading-relaxed text-gray-800">
              <li><strong>Professional</strong> solution that cleans, moisturizes, and protects.</li>
              <li>
                Made for quality leather: <Link href="/types-of-leather" title="Leather Types for Leather for Leather Conditioner">aniline, semi-aniline, and protected leathers</Link>.
              </li>
              <li>
                Leaves leather with a <Link href="/services/leather-restoration#Types-Leather-Restoration-Finishes" title="Leather Finishes for Leather Conditioner">natural non glossy non shiny finish.</Link>
              </li>
              <li>Ideal for <strong>distressed leathers</strong> as it relusters natural surface character.</li>
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Restoration Hardware Leather Sofa Cleaning and Repair Near me "
              tagline={<em> → Orange County | Los Angeles | San Diego</em>}
            />
            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <div className="space-y-4 font-sans text-base leading-relaxed text-gray-800">
                <p>
                  <Link href="/leather-restoration-orange-county" title="Orange County Leather Restoration Shop for Restoration Hardware Leather Sofa Repair and Cleaning">
                    <em>ReLeather Leather Restoration</em>
                  </Link>
                  {" "}is located in Fullerton, CA, we are proud to serve as your <Link href="/about-us" title="Leather Restoration Company in Orange County, Los Angeles, and San Diego" target="_blank" rel="noopener noreferrer">Leather Restoration company</Link> in the care and restoration of Restoration Hardware leather furniture. Our professional services are available to all residents of Orange County. Whether you&apos;re in Irvine, Newport Beach, Laguna Niguel, Laguna Beach, or San Clemente, we are just a call away.
                </p>
                <p>
                  Are you in <Link href="/leather-furniture-repair-in-san-diego" title="Leather Furniture Repair Repair in San Diego">San Diego</Link> or <Link href="/leather-furniture-repair-in-los-angeles" title="Leather Furniture Repair in Los Angeles">Los Angeles</Link>? ReLeather has you covered we can come out to your area for pick up &amp; delivery for an additional service fee. Customers outside of our service area are also welcome to drop off their furniture for clearning or repair.
                </p>
              </div>
              <div className="flex justify-center">
                <iframe
                  title="ReLeather Leather Restoration location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13252.017814128076!2d-117.8912771!3d33.8637761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce91a59ff528b%3A0x31db5d81f76ea553!2sReLeather%20Leather%20Restoration!5e0!3m2!1sen!2sth!4v1715413627305!5m2!1sen!2sth"
                  width={475}
                  height={300}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 w-full max-w-[475px]"
                />
              </div>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title={
                <>
                  <i className="fa fa-fw fa-camera hidden sm:inline" aria-hidden /> Waxed &amp; Distressed Leather Restoration Before &amp; After
                </>
              }
            />
            <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
              {beforeAfterSlides.map((slide, index) => (
                <figure
                  key={index}
                  className="border-4 bg-releather-dark p-4"
                  style={{ borderColor: "#23262f" }}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                        Before
                      </p><Image unoptimized
                        src={slide.beforeSrc}
                        alt={slide.beforeAlt}
                        width={300}
                        height={225}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-contain border-2 border-[#23262f]"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                        After
                      </p><Image unoptimized
                        src={slide.afterSrc}
                        alt={slide.afterAlt}
                        width={300}
                        height={225}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-contain border-2 border-[#23262f]"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-4 border-t-2 border-gray-500 pt-4 font-sans text-base font-medium text-white [&_strong]:font-bold">
                    {slide.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={rhFaqItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
