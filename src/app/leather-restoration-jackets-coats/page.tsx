import type { Metadata } from "next";
import Image from "next/image";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/IntroductionSection";
import LeatherRestorationBeforeAfter from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";
import type { LeatherRestorationBeforeAfterItem } from "@/app/leather-restoration-lounge-chairs/LeatherRestorationBeforeAfter";
import Process from "@/components/Process";
import Guide from "@/components/Guide";
import Faq from "@/components/Faq";

const title = "Leather Restoration Jackets and Coats | ReLeather";
const description =
  "Leather cleaning, restoration, and color repair for leather jackets and coats. Deep clean, restore color, remove stains, conditioning for designer and motorcycle jackets.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leather-restoration-jackets-coats" },
  openGraph: { url: "/leather-restoration-jackets-coats", title, description, type: "website" },
  twitter: { card: "summary_large_image" as const, title, description },
};

const recommendationImages = [
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_200,h_200,y_202,x_550/before-after/leather-restoration/jackets/black/color-restoration-black-jacket-before.jpg",
    alt: "Dry and Rough Leather Jacket",
    title: "Dry and Rough Leather Jacket",
    label: "Dry & Rough",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/w_200,h_200/before-after/leather-restoration/jackets/brown/Discoloration-Leather-Jacket-Close-Up.png",
    alt: "Discoloration Leather Jacket",
    title: "Discoloration Leather Jacket",
    label: "Discoloration",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_200,h_200,y_702,x_250/before-after/leather-restoration/jackets/brown/leather-jacket-stain-removal-before.jpg",
    alt: "Oily Stains Leather Jacket",
    title: "Oily Stains Leather Jacket",
    label: "Oily Stains",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/before-after/leather-restoration/jackets/examples/Leather-Restoration-for-Scuff-Black-Leather-Jacket.jpg",
    alt: "Scuffing Leather Jacket",
    title: "Scuffing Leather Jacket",
    label: "Scuffing",
  },
  {
    src: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_200,h_200,y_300,x_160/before-after/leather-restoration/jackets/brown/Distressed-Mens-Jacket-Stained-Worn-Before.png",
    alt: "Mold Leather Jacket",
    title: "Mold Leather Jacket",
    label: "Mold",
  },
];

const processSteps = [
  {
    title: "Assessment",
    description: (
      <p>
        <strong>Assessment:</strong> A customer brought us a worn, faded deep purple leather jacket. We examined the leather type, surface wear, and color loss to plan the right restoration. Using our full Leather Restoration process, we revived the original matte finish and rich tone, restoring the jacket&apos;s bold, custom look.
      </p>
    ),
  },
  {
    title: "Leather Cleaning",
    description: (
      <p>
        We gently clean the surface to remove dirt, oils, and buildup while preserving the original grain and finish. This step is essential to prep the leather for further treatment.
      </p>
    ),
  },
  {
    title: "Leather Conditioning",
    description: (
      <p>
        After cleaning, we rehydrate the leather using a professional-grade conditioner. This restores flexibility and prevents cracking while enhancing the jacket&apos;s texture and tone.
      </p>
    ),
  },
  {
    title: "Leather Recoloring",
    description: (
      <p>
        Using color-matched dyes, we restore the jacket&apos;s original hue — in this case, a rich deep purple. This corrects fading and discoloration while maintaining a natural matte finish.
      </p>
    ),
  },
  {
    title: "Leather Protection",
    description: (
      <p>
        We finish with a breathable protective coat to seal in color and shield the jacket from future damage caused by moisture, sun, or handling.
      </p>
    ),
  },
];

const beforeAfterItems: LeatherRestorationBeforeAfterItem[] = [
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/w_400,h_525/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration/jackets/brown/Distressed-Mens-Jacket-Stained-Worn-Before.png",
    beforeAlt: "Leather jacket before restoration – mold and discoloration – Before",
    beforeTitle: "Leather jacket before restoration – Before",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/w_400,h_525/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration/jackets/brown/Distressed-Mens-Jacket-Stained-Worn-After.png",
    afterAlt: "Leather jacket after restoration – mold removed, color restored – After",
    afterTitle: "Leather jacket after restoration – After",
    serviceType: "Leather Jacket Restoration",
    furniture: "Leather Jacket",
    color: "—",
    problem: "Distressed and moldy jacket restored",
    location: "—",
    description: (
      <>
        <p>
          This leather jacket had visible mold, surface damage, and discoloration. We fully cleaned, redyed, and restored the jacket to its original color and finish — inside and out. The leather was treated to remove mold and brought back to a usable and clean condition.
        </p>
      </>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-jacket-brown-aniline-oil-stain-removal-back-andrew-mac-orange-county-before.png",
    beforeAlt: "Andrew Marc Aniline leather jacket before restoration – oil stained spots – Before",
    beforeTitle: "Andrew Marc Aniline leather jacket before restoration – oil stained spots – Before",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration-jacket-brown-aniline-oil-stain-removal-back-andrew-mac-orange-county-after.png",
    afterAlt: "Andrew Marc Aniline leather jacket after restoration – oil stain removal – After",
    afterTitle: "Andrew Marc Aniline leather jacket after restoration – oil stain removal – After",
    serviceType: "Oil Stain Removal Aniline Leather Jacket",
    furniture: "Andrew Marc Jacket",
    color: "—",
    problem: "Oil Stained Spots Andrew Marc Jacket",
    location: "—",
    description: (
      <>
        <p>
          This is an Andrew Marc Aniline distressed leather jacket with visible oil spotting. We treated the affected areas and carefully recolored the leather to blend the finish as naturally as possible.
        </p>
        <p>
          Please note: This is natural leather, and some stains may not be fully removed. To achieve an even color blend, the surrounding area must also be treated. As a result, the finished area may appear more uniform and slightly more solid than the original patina. Due to the delicate nature of this leather, a full restoration cannot be guaranteed.
        </p>
      </>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_400,h_525/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration/jackets/brown/Wilson-Leather-Jacket-Leather-Restored-Recolor-Before.png",
    beforeAlt: "Wilson Leather jacket before restoration – faded and discoloration – Before",
    beforeTitle: "Wilson Leather jacket before restoration – faded and discoloration – Before",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_400,h_525/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration/jackets/brown/Wilson-Leather-Jacket-Leather-Restored-Recolor-After.png",
    afterAlt: "Wilson Leather jacket after restoration – faded, color restored – After",
    afterTitle: "Wilson Leather jacket after restoration – faded, color restored – After",
    serviceType: "Wilson Leather Jacket Restoration",
    furniture: "Wilson Leather Jacket",
    color: "—",
    problem: "Faded, discolored, and worn leather refreshed and revived",
    location: "—",
    description: (
      <p>
        This Wilson Leather brown jacket showed noticeable fading, surface wear, discoloration, and a rough texture. We fully cleaned, conditioned, and redyed the leather to restore its original rich brown tone and improve the feel. The jacket was brought back to a refreshed, supple, and wearable condition.
      </p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923661/before-after/leather-restoration/jackets/black/color-restoration-black-jacket-before.jpg",
    beforeAlt: "Black leather jacket with scuffs and faded color restored - Before Picture",
    beforeTitle: "Black leather jacket with scuffs and faded color restored - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923660/before-after/leather-restoration/jackets/black/color-restoration-black-jacket-after.jpg",
    afterAlt: "Black leather jacket with scuffs and faded color restored - After Picture",
    afterTitle: "Black leather jacket with scuffs and faded color restored - After Picture",
    serviceType: "Color Restoration",
    furniture: "Black Leather Jacket",
    color: "—",
    problem: "Scuff and faded color",
    location: "—",
    description: (
      <p>Black leather jacket with scuff, <strong>faded color</strong> restored to original self</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923588/before-after/leather-restoration/jackets/brown/leather-jacket-stain-removal-before.jpg",
    beforeAlt: "Light brown Coach jacket with grease stain before color treatment - Before Picture",
    beforeTitle: "Light brown Coach jacket with grease stain before color treatment - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923588/before-after/leather-restoration/jackets/brown/leather-jacket-stain-removal-after.jpg",
    afterAlt: "Light brown Coach jacket with grease stain removed and color refinished - After Picture",
    afterTitle: "Light brown Coach jacket with grease stain removed and color refinished - After Picture",
    serviceType: "Stain Removal",
    furniture: "Coach Jacket",
    color: "—",
    problem: "Grease stain",
    location: "—",
    description: (
      <p>Coach leather jacket with <strong>oil grease stain removed</strong>, refinished</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923473/before-after/leather-restoration/jackets/purple/recolor-leather-coat-jacket-before.jpg",
    beforeAlt: "Beige Bullock & Jones leather jacket recolored to deep purple - Before Picture",
    beforeTitle: "Beige Bullock & Jones leather jacket recolored to deep purple - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923474/before-after/leather-restoration/jackets/purple/recolor-leather-coat-jacket-after.jpg",
    afterAlt: "Beige Bullock & Jones leather jacket recolored to deep purple - After Picture",
    afterTitle: "Beige Bullock & Jones leather jacket recolored to deep purple - After Picture",
    serviceType: "Recoloring",
    furniture: "Bullock & Jones Jacket",
    color: "—",
    problem: "Recolored deep purple",
    location: "—",
    description: (
      <p>Bullock &amp; Jones beige leather jacket <strong>recolored</strong> deep purple</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923746/before-after/leather-restoration/jackets/costume/leather-jacket-dyeing-custom-color-before.jpg",
    beforeAlt: "Comic-Con trench coat leather jacket dyed to costume specifications - Before Picture",
    beforeTitle: "Comic-Con trench coat leather jacket dyed to costume specifications - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923744/before-after/leather-restoration/jackets/costume/custom-leather-recolor-redyeing-jacket-trench-coat.jpg",
    afterAlt: "Comic-Con trench coat leather jacket dyed to costume specifications - After Picture",
    afterTitle: "Comic-Con trench coat leather jacket dyed to costume specifications - After Picture",
    serviceType: "Costume Dyeing",
    furniture: "Trench Coat",
    color: "—",
    problem: "Costume specs",
    location: "—",
    description: (
      <p>Costume leather trench coat for Comic-Con <strong>dyed</strong> to character specs</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923307/before-after/leather-restoration/jackets/motorcycle-racing/recoloring-leather-motorcycle-jacket-before.jpg",
    beforeAlt: "White motorcycle racing jacket with wear and soiling - Before Picture",
    beforeTitle: "White motorcycle racing jacket with wear and soiling - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923305/before-after/leather-restoration/jackets/motorcycle-racing/recoloring-leather-motorcycle-jacket-after.jpg",
    afterAlt: "White motorcycle racing jacket restored to original solid white matte finish - After Picture",
    afterTitle: "White motorcycle racing jacket restored to original solid white matte finish - After Picture",
    serviceType: "Motorcycle Jacket Restoration",
    furniture: "White Motorcycle Racing Jacket",
    color: "—",
    problem: "Wear and soiling",
    location: "—",
    description: (
      <p>White motorcycle racing jacket <strong>restored</strong> to solid white matte finish</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923305/before-after/leather-restoration/jackets/motorcycle-racing/recoloring-leather-motorcycle-suit-before.jpg",
    beforeAlt: "Motorcycle racing suit with scrapes and discoloration - Before Picture",
    beforeTitle: "Motorcycle racing suit with scrapes and discoloration - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923304/before-after/leather-restoration/jackets/motorcycle-racing/recoloring-leather-motorcycle-suit-after.jpg",
    afterAlt: "Motorcycle racing suit restored to factory white - After Picture",
    afterTitle: "Motorcycle racing suit restored to factory white - After Picture",
    serviceType: "Motorcycle Suit Restoration",
    furniture: "Motorcycle Racing Suit",
    color: "—",
    problem: "Scrapes and discoloration",
    location: "—",
    description: (
      <p>Motorcycle racing suit <strong>restored</strong> to original factory white</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923305/before-after/leather-restoration/jackets/motorcycle-racing/color-restoration-motorcyle-suit-before.jpg",
    beforeAlt: "Red Alpinestars leather suit with heavy scuffing - Before Picture",
    beforeTitle: "Red Alpinestars leather suit with heavy scuffing - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923306/before-after/leather-restoration/jackets/motorcycle-racing/color-restoration-motorcyle-suit-after.jpg",
    afterAlt: "Red Alpinestars leather suit restored to original color - After Picture",
    afterTitle: "Red Alpinestars leather suit restored to original color - After Picture",
    serviceType: "Alpinestars Suit Restoration",
    furniture: "Alpinestars Red Leather Suit",
    color: "—",
    problem: "Heavy scuffing",
    location: "—",
    description: (
      <p>Alpinestars red leather suit <strong>restored</strong> from heavy scuffing</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923533/before-after/leather-restoration/jackets/white/leather-jacket-stained-recoloring-before.jpg",
    beforeAlt: "Faded Armani leather coat with yellow discoloration - Before Picture",
    beforeTitle: "Faded Armani leather coat with yellow discoloration - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_300,y_60/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_fill,g_auto/v1745923531/before-after/leather-restoration/jackets/white/leather-jacket-stained-recoloring-after.jpg",
    afterAlt: "Armani leather coat restored to original off white matte finish - After Picture",
    afterTitle: "Armani leather coat restored to original off white matte finish - After Picture",
    serviceType: "Armani Coat Restoration",
    furniture: "Armani Leather Coat",
    color: "—",
    problem: "Yellow discoloration",
    location: "—",
    description: (
      <p>Armani leather coat <strong>restored</strong> to original off white matte finish</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration/jackets/brown/Wilson-Leather-Jacket-Leather-Restored-Recolor-Before.png",
    beforeAlt: "Wilson leather jacket faded brown - Before Picture",
    beforeTitle: "Wilson leather jacket faded brown - Before Picture",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration/jackets/brown/Wilson-Leather-Jacket-Leather-Restored-Recolor-After.png",
    afterAlt: "Wilson leather jacket restored and recolored brown - After Picture",
    afterTitle: "Wilson leather jacket restored and recolored brown - After Picture",
    serviceType: "Wilson Jacket Recolor",
    furniture: "Wilson Leather Jacket",
    color: "—",
    problem: "Faded brown",
    location: "—",
    description: (
      <p>Wilson leather jacket <strong>restored</strong> and recolored to rich brown</p>
    ),
  },
  {
    beforeSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration/jackets/black/Leather-Restoration-Black-Leather-Jacket-Before.png",
    beforeAlt: "Before black leather jacket restoration",
    beforeTitle: "Before black leather jacket restoration",
    afterSrc:
      "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_200,h_200/bo_5px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/leather-restoration/jackets/black/Leather-Restoration-Black-Leather-Jacket-After.png",
    afterAlt: "After black leather jacket restoration",
    afterTitle: "After black leather jacket restoration",
    serviceType: "Black Jacket Restoration",
    furniture: "Black Leather Jacket",
    color: "—",
    problem: "Restoration",
    location: "—",
    description: (
      <p>Revived black leather jacket shows even tone and restoration.</p>
    ),
  },
];

const faqItems = [
  {
    question: "Do you repair ripped seams or damaged sections on leather jackets?",
    answer: (
      <p>We do not offer services like resewing seams, hand-stitching, patching rips or tears, or replacing leather sections or panels.</p>
    ),
  },
  {
    question: "Do you offer zipper repairs or replacements for leather jackets?",
    answer: (
      <p>Unfortunately, we do not provide zipper repairs or replacements. We specialize in leather restoration services.</p>
    ),
  },
  {
    question: "Do you repair or replace jacket linings?",
    answer: (
      <p>We do not repair, replace, or treat the lining of jackets. If you plan to have your jacket restored, we recommend re-lining it after completing our Leather Restoration service. Thank you.</p>
    ),
  },
];

export default function LeatherRestorationJacketsCoatsPage() {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <IntroductionSection
            title="Leather Restoration Jackets and Coats"
            subtitle={
              <>
                <strong>Restored Leather.</strong> Restored Value!
              </>
            }
            primaryCta={{
              href: "/estimate",
              title: "Leather Restoration for Jackets Coats Color Stain Wear Problem Service Cost",
              "aria-label": "Leather Restoration for Jackets Coats",
              label: (
                <>
                  Get <span className="hidden sm:inline">Leather Restoration Jacket </span>Quote
                </>
              ),
            }}
            videoEmbed={{ youtubeId: "gpRkgE1JJq0", title: "Leather Restoration Jackets and Coats" }}
            body={
              <>
                <p>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.releather.com/leather-restoration-jackets-coats"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="float-right ml-6 mb-4 inline-block border-4 border-black bg-[#3B5998] px-4 py-2 font-sans font-bold text-white shadow-[4px_4px_0_0_#000] hover:opacity-90"
                  >
                    Share on Facebook
                  </a>
                  Leather Coats and Jackets show normal wear and tear over time from hard use and the elements. We can preserve the life of our quality leather coats through regular leather care and maintenance. To treat surface wear such as color fading, scratches, scuffs, stains appear, seeking a professional leather restoration specialists is the most practical and cost effective option.
                </p>
              </>
            }
          />

          <section
            id="recommendation"
            className="pt-2"
            aria-labelledby="recommendation-heading"
          >
            <h2
              id="recommendation-heading"
              className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              <span className="border-2 border-black bg-releather-orange px-2 py-0.5">
                Recommended for:
              </span>
            </h2>
            <p className="mt-4 font-sans text-base font-bold text-gray-800">
              <strong>Designer Jacket, Blazer, Coat, Trench Coat, Vest, Bomber Jacket, Motorcycle Racing Jacket</strong>
            </p>
            <ul className="mt-8 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-4 lg:px-2">
              {recommendationImages.map((item) => (
                <li key={item.label} className="text-center">
                  <div className="mx-auto max-w-[200px] border-4 border-black"><Image
                      src={item.src}
                      alt={item.alt}
                      title={item.title}
                      width={200}
                      height={200}
                      loading="lazy"
                      className="h-[200px] w-full border-b-4 border-black object-cover"
                    />
                    <strong className="block border-t-2 border-black bg-white px-2 py-2 font-sans font-bold text-black">
                      {item.label}
                    </strong>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <Process
            id="process"
            title="How We Restore Leather Jackets"
            subtitle="→ Step by Step"
            steps={processSteps}
          />

          <Guide id="guide">
            <h2 className="border-b-2 border-releather-orange pb-1 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
              Leather Restoration: Bringing a Deep Purple Jacket Back to Life
            </h2>
            <div className="my-6 overflow-hidden">
              {/* 1 row × 3 columns: Before | After | Process */}
              <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-3">
                <figure><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/f_webp/l_text:montserrat_20_style_light:Before,co_rgb:000000,g_north_west,y_15,x_15/bo_10px_solid_rgb:f8991d/v1725782401/before-after/leather-restoration/jackets/purple/Leather-Restoration-Jacket-Stain-Discoloration-Spot-Area-Before.jpg"
                    alt="Leather Restoration: Bringing a Deep Purple Jacket Back to Life - Before"
                    title="Leather Restoration: Bringing a Deep Purple Jacket Back to Life - Before"
                    width={450}
                    height={450}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                  <figcaption className="brutalist-caption border-t-4 border-black bg-black px-3 py-2 font-sans font-bold uppercase tracking-wider text-white">
                    Before
                  </figcaption>
                </figure>
                <figure><Image
                    src="https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/f_webp/l_text:montserrat_20_style_light:After,co_rgb:000000,g_north_west,y_15,x_15/bo_10px_solid_rgb:f8991d/v1725782401/before-after/leather-restoration/jackets/purple/Leather-Restoration-Jacket-Stain-Discoloration-Spot-Area-After.jpg"
                    alt="Leather Restoration: Bringing a Deep Purple Jacket Back to Life - After"
                    title="Leather Restoration: Bringing a Deep Purple Jacket Back to Life - After"
                    width={450}
                    height={450}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                  <figcaption className="brutalist-caption border-t-4 border-black bg-black px-3 py-2 font-sans font-bold uppercase tracking-wider text-white">
                    After
                  </figcaption>
                </figure>
                <figure className="border-4 border-black"><Image
                    src="https://res.cloudinary.com/releather-com/image/upload//l_text:montserrat_20_style_light:Process,co_rgb:000000,g_north_west,y_15,x_15/v1725782401/before-after/leather-restoration/jackets/purple/Leather-Restoration-Jacket-Stain-Discoloration-Spot-Area-Process.jpg"
                    alt="Leather Restoration: Bringing a Deep Purple Jacket Back to Life - Process"
                    title="Leather Restoration: Bringing a Deep Purple Jacket Back to Life - Process"
                    width={450}
                    height={450}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                  <figcaption className="brutalist-caption border-t-4 border-black bg-black px-3 py-2 font-sans font-bold uppercase tracking-wider text-white">
                    Process
                  </figcaption>
                </figure>
              </div>
            </div>
          </Guide>

          <LeatherRestorationBeforeAfter
            items={beforeAfterItems}
            subtitle="Leather Jacket Restoration"
          />

          <Faq id="faq" heading="Frequently Asked Questions" items={faqItems} />
        </div>
      </main>
      <Footer />
    </>
  );
}
