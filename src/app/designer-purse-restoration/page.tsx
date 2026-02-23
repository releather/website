import type { Metadata } from "next";
import Link from "next/link";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import BlogPostSubsection from "@/components/BlogPostSubsection";
import Faq from "@/components/Faq";

const title = "Designer Purse Restoration | ReLeather";
const description =
  "Designer purse and handbag restoration. Leather cleaning, conditioning, color restoration, color change. FENDI, CHANEL, PRADA, GUCCI, DIOR, COACH. Orange County and mail-in.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/designer-purse-restoration" },
  openGraph: { url: "/designer-purse-restoration", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const processSteps = [
  { title: "Get Quote", body: "Submit form with photos." },
  { title: "Dropoff/Mail", body: "Drop off or mail your purse." },
  { title: "Delivery", body: "Completion time 1-2 weeks." },
];

const commonIssues = [
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/v1714674582/before-after/leather-restoration/handbag-purse-bag/before-examples/Designer-Purse-Leather-Restoration-Scratches-Marks-200px.jpg",
    alt: "Restore the leather's smooth surface, eliminating scratches and scuffs for a renewed finish. ",
    title: "Restore the leather's smooth surface, eliminating scratches and scuffs for a renewed finish. ",
    h4: "Scratched Leather",
    text: "Restore the leather's smooth surface, eliminating scratches and scuffs for a renewed finish. ",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/v1714829299/before-after/leather-restoration/handbag-purse-bag/before-examples/Designer-Purse-Leather-Restoration-Fading-Faded-Sun-Discoloration-Closeup-200px.jpg",
    alt: "Revive faded leather, bringing back your luxury purse's original richness and depth of color and value.",
    title: "Revive faded leather, bringing back your luxury purse's original richness and depth of color and value.",
    h4: "Fading Leather",
    text: "Revive faded leather, bringing back your luxury purse's original richness and depth of color and value.",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/v1714830142/before-after/leather-restoration/handbag-purse-bag/before-examples/Designer-Purse-Leather-Restoration-Discoloration-Discolored-Discoloring-Closeup-200px.jpg",
    alt: "Remove stubborn discoloration and stains on your bag, restoring the leather's uniform look and luster.",
    title: "Remove stubborn discoloration and stains on your bag, restoring the leather's uniform look and luster.",
    h4: "Discoloring Leather",
    text: "Remove stubborn discoloration and stains on your bag, restoring the leather's uniform look and luster.",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/v1714830594/before-after/leather-restoration/handbag-purse-bag/before-examples/Designer-Purse-Leather-Restoration-Oily-Oil-Spots-Stains-200px.jpg",
    alt: "Treat and remove oily spots, restoring the leather bag's natural texture and appearance.",
    title: "Treat and remove oily spots, restoring the leather bag's natural texture and appearance.",
    h4: "Oily Leather",
    text: "Treat and remove oily spots, restoring the leather bag's natural texture and appearance.",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/v1714831275/before-after/leather-restoration/handbag-purse-bag/before-examples/Designer-Purse-Leather-Restoration-Dry-Drying-Rough-Stiff-200px.jpg",
    alt: "Moisturize and replenish dry, cracked leather purse, ensuring flexibility and longevity..",
    title: "Moisturize and replenish dry, cracked leather purse, ensuring flexibility and longevity.",
    h4: "Drying Leather",
    text: "Moisturize and replenish dry, cracked leather purse, ensuring flexibility and longevity.",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/v1714829578/before-after/leather-restoration/handbag-purse-bag/before-examples/Designer-Purse-Leather-Restoration-Staining-Stains-Spots-Spotting-200px.jpg",
    alt: "Remove unsightly stains, restoring your purse's appearance and enhancing the color.",
    title: "Remove unsightly stains, restoring your purse's appearance and enhancing the color.",
    h4: "Stain Leather",
    text: "Remove unsightly stains, restoring your purse's appearance and enhancing the color.",
  },
];

const beforeAfterSlides = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1714566267/before-after/leather-restoration/handbag-purse-bag/red/Leather-Restored-LOEWE-Designer-Red-Leather-Purse-Handbag-Before_400px.jpg",
    beforeAlt: "Leather Restored for a LOEWE-Color Faded Designer Red Leather Purse - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1714566267/before-after/leather-restoration/handbag-purse-bag/red/Leather-Restored-LOEWE-Designer-Red-Leather-Purse-Handbag-After_400px.jpg",
    afterAlt: "Leather Restored for a LOEWE-Color Faded Designer Red Leather Purse - After Picture",
    caption: "Leather Restored a red LOEWE Color Faded Purse",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1714885253/before-after/leather-restoration/handbag-purse-bag/blue/Designer-Purse-Leather-Restoration-Discoloration-Discolored-Discoloring-Before-400px.jpg",
    beforeAlt: "Leather Cole Haan Blue Handbag with Scuffs and Discolored Refurbished - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_lfill,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1714885301/before-after/leather-restoration/handbag-purse-bag/blue/Designer-Purse-Leather-Restoration-Discoloration-Discolored-Discoloring-After-400px.jpg",
    afterAlt: "Leather Cole Haan Blue Handbag with Scuffs and Discolored Refurbished - After Picture",
    caption: "Leather Cole Haan Blue Handbag with Scuffs Refurbished",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1714887196/before-after/leather-restoration/handbag-purse-bag/tan/Desinger-Purse-Leather-Restoration-Pen-Maker-Mark-Stain-Before-400px.jpg",
    beforeAlt: "Vintage Leather Bag with Blue Sharpie Stain Removed with Color Restoration - After Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_lfill,r_max,w_300/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1714887608/before-after/leather-restoration/handbag-purse-bag/tan/Desinger-Purse-Leather-Restoration-Pen-Maker-Mark-Stain-Stained-After-400px.jpg",
    afterAlt: "Vintage Leather Bag with Blue Sharpie Stain Removed with Color Restoration - After Picture",
    caption: "Vintage Leather Bag with Blue Sharpie Stain Removed ",
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300/l_,l_text:montserrat_50_style_light:Before,co_rgb:ffffff,g_south,y_320/v1714889820/before-after/leather-dyeing/handbag-purse-bag/black/Designer-Leather-Restoration-Redyeing-Tan-Purse-Bag-to-Black-Custom-Color-Recolor-Before-400px.jpg",
    beforeAlt: "Designer Brand Handbag Fully Redyed and Recolored to Matte Black - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_300,c_crop,g_south_west/l_,l_text:montserrat_50_style_light:After,co_rgb:ffffff,g_south,y_320/v1714889828/before-after/leather-dyeing/handbag-purse-bag/black/Designer-Leather-Restoration-Redyeing-Tan-Purse-Bag-to-Black-Custom-Color-Recolor-After-400px.jpg",
    afterAlt: "Designer Brand Handbag Fully Redyed and Recolored to Matte Black - After Picture",
    caption: "Designer Bag Fully Redyed and Recolored to Black",
  },
];

const designerPurseFaqItems = [
  {
    question: "Can you remove spots on my leather purse?",
    answer: (
      <>
        <p>
          Yes, we specialize in treating and blending unsightly spots on leather purses. By mixing colors to match your purse and carefully recoloring the affected area, we ensure a seamless blend that restores the appearance of your purse. However, please note that we cannot restore natural patina finishes as they are intrinsic to the leather&apos;s aging process.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/releather-com/image/upload/v1714900100/before-after/leather-restoration/handbag-purse-bag/before-examples/Designer-Purse-Leather-Restoration-Spots-Closeup-400px.jpg"
          title="Leather Purse Spot Removed Removing"
          alt="Leather Purse Spot Removed Removing"
          loading="lazy"
          width={400}
          height={300}
          className="rounded"
        />
      </>
    ),
  },
  {
    question: "Can you remove pen marks from my leather purse?",
    answer: (
      <>
        <p>
          While we can treat many pen marks on leather surfaces, ink penetration may pose challenges. In some cases, the ink cannot be lifted or removed entirely. However, we offer solutions such as redyeing the leather to its original color. Depending on the extent of the marks, we may need to dye the surrounding area for a seamless blend, ensuring the treated area is indistinguishable from the rest of the purse.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/releather-com/image/upload/v1714899406/before-after/leather-restoration/handbag-purse-bag/before-examples/Designer-Purse-Leather-Restoration-Staining-Pen-Marks-Sharpie-Marker-400px.jpg"
          title="Leather Purse Pen Mark Removed Removing"
          alt="Leather Purse Pen Mark Removed Removing"
          loading="lazy"
          width={400}
          height={300}
          className="rounded"
        />
      </>
    ),
  },
  {
    question: "Do you work On purse linings?",
    answer: (
      <>
        <p>
          We do not offer custom services for repairing or replacing purse linings. However, if your purse lining is lightly soiled or dirty, we provide complimentary light cleaning services for the interior of the purse. This ensures that not only the exterior but also the interior of your purse maintains its condition.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/releather-com/image/upload/v1714900435/before-after/leather-restoration/handbag-purse-bag/before-examples/Leather-Purse-Restoration-Lining.jpg"
          title="Can you clean the lining of my designer leather purse? - Prada Purse"
          alt="Can you clean the lining of my designer leather purse? - Prada Purse"
          loading="lazy"
          width={400}
          height={300}
          className="rounded"
        />
      </>
    ),
  },
];

export default function DesignerPurseRestorationPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <IntroductionSection
            title="Designer Purse Restoration"
            subtitle="Refurbish Quality & Valuable Leather"
            primaryCta={{
              href: "/estimate",
              title: "Designer Purse Restoration Service Cost",
              label: (
                <>
                  Get
                  <span className="hidden sm:inline"> Designer Purse Restoration </span>
                  Quote
                </>
              ),
            }}
            image={{
              src: "https://res.cloudinary.com/releather-com/image/upload/w_450,h_250,c_fill/v1714571001/samples/service/leather-restoration-service-drop-off-shop-for-repair.jpg",
              alt: "Designer Purse Restoration Service",
              title: "Designer Purse Restoration Service",
              width: 450,
              height: 250,
            }}
            body={
              <p>
                Breathe new life into your cherished designer purse with our expert restoration services. At ReLeather, we specialize in reviving the beauty and functionality of luxury handbags, restoring them to their former glory. Whether it&apos;s faded color, worn leather, or cosmetic damage, our skilled artisans employ precision techniques to ensure your accessory returns to you looking as luxurious as the day you first carried it.
              </p>
            }
          />

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="How Does Designer Purse Restoration Work?"
              tagline={<em> → 3 easy steps for a hassle-free experience</em>}
            />
            <ul className="list-none space-y-4 p-0">
              {processSteps.map((step, index) => (
                <li key={index} className="border-4 border-black p-4">
                  <h6 className="font-display text-xl font-normal tracking-tight text-black">
                    <em>{index + 1}</em> <br /> {step.title}
                  </h6>
                  <p className="mt-2 font-sans text-base leading-relaxed text-gray-800">{step.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Designer Purse Restoration Service Guide"
              tagline={<em> → ReLeather Leather Restoration&apos;s Expert Services </em>}
            />
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/releather-com/image/upload/v1714892183/before-after/leather-restoration/handbag-purse-bag/before-examples/Designer-Purse-Restoration-Black-Leather-Recolored-Restored-Closeup-400px.jpg"
                alt="Designer Purse Restoration Black Leather Recolored Restored Closeup"
                title="Designer Purse Restoration Black Leather Recolored Restored Closeup"
                loading="lazy"
                width={400}
                height={400}
                className="float-right ml-4 mb-4 rounded border-4 border-black"
              />
              <p className="font-sans text-base leading-relaxed text-gray-800">
                In the realm of fashion, designer handbags aren&apos;t just accessories; they&apos;re investments in style, sophistication, and luxury. However, like any prized possession, they require diligent care and maintenance to preserve their beauty and longevity. Enter ReLeather, the industry leader in designer purse restoration, offering a comprehensive range of services to breathe new life into your beloved bags. From leather restoration to color changes, ReLeather is dedicated to ensuring that your cherished handbags remain in pristine condition for years to come.
              </p>
            </div>
          </section>

          <section
            id="recommendation"
            className="mt-12 border-t-4 border-black pt-12"
            aria-labelledby="recommendation-heading"
          >
            <h6 id="recommendation-heading" className="font-sans text-sm font-bold uppercase tracking-wider text-gray-700">
              Recommended for:
            </h6>
            <p className="mt-2 font-sans font-medium text-gray-800 [&_em]:text-black">
              <em> → Luxury Brand Name Designer Purse, Handbag, Wallets</em>
            </p>
            <ul className="mt-6 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
              <li className="border-4 border-black p-4">
                <h6 className="font-display text-lg font-normal text-black">✅ FENDI </h6>
              </li>
              <li className="border-4 border-black p-4">
                <h6 className="font-display text-lg font-normal text-black">✅ CHANEL</h6>
              </li>
              <li className="border-4 border-black p-4">
                <h6 className="font-display text-lg font-normal text-black">✅ PRADA</h6>
              </li>
              <li className="border-4 border-black p-4">
                <h6 className="font-display text-lg font-normal text-black">✅ GUCCI</h6>
              </li>
              <li className="border-4 border-black p-4">
                <h6 className="font-display text-lg font-normal text-black">✅ DIOR</h6>
              </li>
              <li className="border-4 border-black p-4">
                <h6 className="font-display text-lg font-normal text-black">✅ COACH</h6>
              </li>
              <li className="border-4 border-black p-4">
                <h6 className="font-display text-lg font-normal text-black">✅ AMERICAN LEATHER CO.</h6>
              </li>
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Why Leather Cleaning Service?"
              tagline={<em> → Deep Leather Cleaning, Conditioning, Retouching, Protection</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              Leather, renowned for its durability and elegance, is a common material used in designer handbags. However, despite its resilience, leather is susceptible to wear and tear, especially when subjected to daily use and exposure to the elements. Over time, dirt, grime, and UV rays can take their toll, causing discoloration, fading, and a loss of suppleness in the leather.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              At ReLeather, we understand the significance of proper leather care.{" "}
              <Link href="/services/leather-cleaning" title="Leather Cleaning Service">
                Our Leather Cleaning service
              </Link>{" "}
              goes beyond surface cleaning, providing a deep cleanse to remove accumulated dirt and restore the leather&apos;s smooth texture. By moisturizing the leather, we prevent premature aging and maintain its softness, ensuring that your handbag feels as luxurious as the day you bought it.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              Our Leather Cleaning service is tailored to preserve and enhance the beauty of your designer purses.:
            </p>
            <ol className="mt-4 list-decimal space-y-4 pl-6 font-sans text-base leading-relaxed text-gray-800">
              <li>
                <h4 className="font-display text-xl font-normal text-black">Leather Cleaning:</h4> Our thorough process eliminates dirt and buildup, rejuvenating the leather&apos;s natural shine.
              </li>
              <li>
                <h4 className="font-display text-xl font-normal text-black">Leather Conditioning</h4>: We hydrate and soften the leather, fortifying it against future wear and tear.
              </li>
              <li>
                <h4 className="font-display text-xl font-normal text-black">Leather Retouching</h4>: Our skilled artisans expertly address minor scuffs and discoloration, restoring the bag&apos;s original color.
              </li>
              <li>
                <h4 className="font-display text-xl font-normal text-black">Leather Protection</h4>: We apply a protective coating to shield your handbag from stains and UV damage, ensuring lasting elegance.
              </li>
            </ol>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/releather-com/image/upload/g_south,x_-120,y_10,l_text:montserrat_50_style_light:Before,co_rgb:000000/v1714566267/before-after/leather-restoration/handbag-purse-bag/red/Leather-Restored-LOEWE-Designer-Red-Leather-Purse-Handbag-Before_400px.jpg"
                alt="Leather Restored Loewe Designer Red Leather Purse Handbag - Before"
                title="Leather Restored Loewe Designer Red Leather Purse Handbag - Before"
                width={400}
                loading="lazy"
                className="w-full rounded object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/releather-com/image/upload/g_south,x_-120,y_10,l_text:montserrat_50_style_light:After,co_rgb:000000/v1714566267/before-after/leather-restoration/handbag-purse-bag/red/Leather-Restored-LOEWE-Designer-Red-Leather-Purse-Handbag-After_400px.jpg"
                alt="Leather Restored Loewe Designer Red Leather Purse Handbag - After"
                title="Leather Restored Loewe Designer Red Leather Purse Handbag - After"
                loading="lazy"
                width={400}
                className="w-full rounded object-cover"
              />
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Leather Restoration to the Rescue"
              tagline={<em> → Restoring Beauty and Functionality</em>}
            />
            <p className="font-sans text-base leading-relaxed text-gray-800">
              For handbags that have endured years of neglect or significant sun exposure, ReLeather offers a specialized{" "}
              <Link href="/services/leather-restoration" title="Leather Restoration service">
                Leather Restoration service
              </Link>
              . Our skilled artisans meticulously treat common wear and tear, from scratches and scuffs to faded colors and rough textures. Using advanced techniques and premium products, we breathe new life into your handbag, restoring it to its original glory.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              Whether your bag requires a touch-up or a complete overhaul, our restoration experts have the expertise to deliver exceptional results. We understand that each designer purse is unique, which is why we tailor our restoration process to suit the specific needs of your handbag. Whether it&apos;s a matte, gloss, or medium sheen finish you desire, ReLeather ensures that your bag looks flawless from every angle.
            </p>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection title="Common Issues Solved by Purse Designer Leather Restoration:" />
            <ul className="mt-6 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {commonIssues.map((item, index) => (
                <li key={index} className="border-4 border-releather-orange bg-releather-dark p-2">
                  <div className="flex justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      title={item.title}
                      width={175}
                      height={175}
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
              title="Transformation with Color Change Service"
              tagline={<em> → Redyeing your purse and handbag to any custom color</em>}
            />
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/releather-com/image/upload/v1714893944/before-after/leather-dyeing/handbag-purse-bag/examples/Designer-Purse-Restoration-Recolor-Custom-Color-Change-200px.jpg"
                alt="Leather Restoration Recolor Custom Color Change Service"
                title="Leather Restoration Recolor Custom Color Change Service"
                loading="lazy"
                width={200}
                height={200}
                className="float-right ml-4 mb-4"
              />
              <p className="font-sans text-base leading-relaxed text-gray-800">
                Sometimes, a change in color is all it takes to rejuvenate a tired handbag and give it a fresh new look. At ReLeather, we offer a{" "}
                <Link href="/services/leather-dyeing" title="Color Change service">
                  Color Change service
                </Link>{" "}
                for customers seeking to{" "}
                <a href="https://www.releather.com/gallery/leather-redyeing-handbag" title="refresh their bags">
                  refresh their bags
                </a>{" "}
                or conceal stubborn stains and imperfections. With an extensive range of colors to choose from, ranging from classic neutrals to bold statement shades.
              </p>
            </div>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">
              Our color transformation process is carefully curated to ensure optimal results without compromising the integrity of the leather. Whether you&apos;re looking to match a new outfit or breathe new life into an old favorite, ReLeather can bring your vision to life.
            </p>
            <ul className="mt-6 list-none space-y-2 p-0 font-sans text-base leading-relaxed text-gray-800">
              <li>
                <strong>
                  <a href="https://www.releather.com/services/leather-dyeing#ColorOptions" title="Color Options for Leather Redyeing Color Change">
                    Color Range:
                  </a>
                </strong>{" "}
                From classic colors to modern tones, tailor your purse to your taste.
              </li>
              <li>
                <strong>
                  <a href="https://www.releather.com/types-of-leather" title="Leather Types for Leather Redyeing Color Change">
                    Leather Types:
                  </a>
                </strong>{" "}
                Recoloring is available for aniline, semi-aniline, and protected leathers.
              </li>
              <li>
                <strong>
                  <a href="https://www.releather.com/services/leather-restoration#Types-Leather-Restoration-Finishes" title="Leather Finishes for Leather Redyeing Color Change">
                    Finish Options:
                  </a>
                </strong>{" "}
                Choose from matte, glossy, or medium finishes to match your style.
              </li>
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title="Convenient Solutions for Every Customer:"
              tagline={<em> → Drop it off or Mail it to us!</em>}
            />
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/l_,l_text:montserrat_30_style_light:Drop%20Off,co_rgb:ffffff,g_south,y_200/v1714571173/samples/service/leather-restoration-service-drop-off-purse-handbag-shop-200px.jpg"
                alt="Bring us your Purse for Restoring"
                title="Bring us your Purse for Restoring"
                loading="lazy"
                width={175}
                height={175}
                className="float-right ml-4 mb-4"
              />
              <p className="font-sans text-base leading-relaxed text-gray-800">
                At ReLeather, we understand that convenience is key, which is why we offer multiple options for our customers to access our services. Whether you&apos;re local to Fullerton, CA, or located halfway across the globe, we&apos;ve got you covered. Customers can drop off their handbags at our{" "}
                <a href="https://www.releather.com/leather-restoration-orange-county" title="Orange County Leather Restoration Shop">
                  Orange County Leather Restoration shop location
                </a>{" "}
                for in-person service, where our team of experts will assess the condition of your bag and recommend the appropriate restoration solutions.
              </p>
            </div>
            <div className="mt-6 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto,r_max,w_175/l_,l_text:montserrat_30_style_light:Mailing,co_rgb:ffffff,g_south,y_200/v1714570998/samples/service/leather-restoration-mail-leather-purse-handbag-for-repair-200px.jpg"
                alt="Mail us your Purse for Refurbishing"
                title="Mail us your Purse for Refurbishing"
                loading="lazy"
                width={175}
                height={175}
                className="float-right ml-4 mb-4"
              />
              <p className="font-sans text-base leading-relaxed text-gray-800">
                For those unable to visit us in person, we offer a convenient mail-in service, allowing customers to ship their designer bags to us with ease. Our streamlined process ensures that your handbag receives the same meticulous attention to detail, regardless of how it reaches us. With ReLeather, restoring your prized possessions has never been easier or more accessible.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection
              title={
                <>
                  <i className="fa fa-fw fa-camera hidden sm:inline" aria-hidden /> Designer Purse Leather Restoration Before &amp; After
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
                      </p>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slide.beforeSrc}
                        alt={slide.beforeAlt}
                        width={300}
                        height={225}
                        loading="lazy"
                        className="aspect-[4/3] w-full border-2 border-[#23262f] object-contain"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                        After
                      </p>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slide.afterSrc}
                        alt={slide.afterAlt}
                        width={300}
                        height={225}
                        loading="lazy"
                        className="aspect-[4/3] w-full border-2 border-[#23262f] object-contain"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-4 border-t-2 border-gray-500 pt-4 font-sans text-base font-medium text-white">
                    {slide.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t-4 border-black pt-12">
            <BlogPostSubsection title="Conclusion" />
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/releather-com/image/upload/v1714892172/before-after/leather-restoration/handbag-purse-bag/before-examples/Designer-Purse-Restoration-Brown-Leather-Recolored-Restored-400px.jpg"
                alt="Designer Purse Restoration Brown Leather Recolored Restored"
                title="Designer Purse Restoration Brown Leather Recolored Restored"
                loading="lazy"
                width={400}
                height={400}
                className="float-right ml-4 mb-4 rounded border-4 border-black"
              />
              <p className="font-sans text-base leading-relaxed text-gray-800">
                In a world where disposable fashion is all too common, ReLeather uses its expertise in designer purse restoration to preserve the beauty and integrity of your cherished purses and handbags for generations to come. Whether it&apos;s leather cleaning, restoration, or color transformation, ReLeather is your trusted partner in luxury preservation. Experience the difference today and rediscover the timeless allure of your favorite designer handbags with ReLeather.
              </p>
            </div>
          </section>

          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={designerPurseFaqItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
