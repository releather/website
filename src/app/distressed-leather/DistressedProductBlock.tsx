"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LiteYouTube from "@/components/LiteYouTube";
import { cloudinaryDisplayUrl } from "@/lib/cloudinary";
import { useCollectionSampleCart } from "@/lib/leather-collections/useCollectionSampleCart";
import {
  distressedCollection,
  type LeatherSwatch,
} from "@/lib/leather-collections";

const { specs, swatches, youtubeVideoId, heroPosterUrl } = distressedCollection;

const HERO_POSTER_ALT = "Close up of Distressed Leather";

const ACCENT = "#f8991d";

const proseLinkClass =
  "font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange";

const italyFlagUrl =
  "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:ffffff,bo_1px_solid_rgb:555555,g_south,w_35,h_20/v1716563273/icons/flag-of-italy.jpg";

/** Hospitality lounge chair — distressed Chocolate leather (example use case). */
const distressedUseCaseExampleUrl =
  "https://res.cloudinary.com/leathera/image/upload/l_image:upload:leather:Distressed:Distressed_Leather_Chocolate/c_scale,fl_relative,w_0.13/o_100/fl_layer_apply,g_south_east,x_0.03,y_0.02/g_south_west,x_20,y_20,l_text:montserrat_75_style_light:Chocolate,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Distressed/examples/high-end_lounge_side_chair_in_a_luxurious_hospitality_setting_upholstered_in_distressed_chocolate_brown_leather.webp";

/** Cropped hospitality chair photo for Showcase only (no Cloudinary label/swatch overlay). */
const distressedShowcaseChocolateLifestyleUrl =
  "https://res.cloudinary.com/leathera/image/upload/c_crop,g_south,h_0.88/leather/Distressed/examples/high-end_lounge_side_chair_in_a_luxurious_hospitality_setting_upholstered_in_distressed_chocolate_brown_leather.webp";

/** Macro pull-up on distressed leather — lighter tones where waxes migrate under stress. */
const distressedPullUpEffectImageUrl =
  "https://res.cloudinary.com/leathera/image/upload/v1778893871/leather/Distressed/examples/distressed-leather-pull-up-effect.jpg";

/** Industry Insights — interior design color selection. */
const distressedInteriorDesignSelectionUrl =
  "https://res.cloudinary.com/leathera/image/upload/c_crop,g_north,h_0.9/leather/Distressed/examples/distressed-leather-interior-design-selection.png";

/** Industry Insights — upholstery workshop hide selection. */
const distressedUpholsteryShopSelectionUrl =
  "https://res.cloudinary.com/leathera/image/upload/c_crop,g_north,h_0.9/leather/Distressed/examples/distressed-leather-upholstery-shop-selection-explained-selection.png";

const distressedShowcaseVariants = [
  {
    id: "baby-blue" as const,
    label: "Baby Blue",
    lifestyleSrc:
      "https://res.cloudinary.com/leathera/image/upload/c_crop,g_south,h_0.82/leather/Distressed/examples/distressed-leather-baby-blue-color-leather-ottoman.png",
    lifestyleAlt:
      "Round button-tufted ottoman in muted Baby Blue distressed leather in a bright living room",
    lifestyleWidth: 900,
    lifestyleHeight: 600,
    swatchSrc:
      "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Baby%20Blue,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Distressed/Distressed_Leather_BabyBlue.jpg",
    swatchWidth: 400,
    swatchHeight: 80,
    swatchAlt: "Baby Blue distressed leather swatch with fine crackle texture",
    /** Exactly 200 characters. */
    description:
      "Baby Blue distressed leather—muted steel-blue with fine crackle grain, tonal depth, soft matte sheen. Tufted round ottoman in a bright living room: versatile residential centerpiece & contract seating",
  },
  {
    id: "chocolate" as const,
    label: "Chocolate",
    lifestyleSrc: distressedShowcaseChocolateLifestyleUrl,
    lifestyleAlt:
      "High-end wingback lounge chair in distressed chocolate brown leather in a luxury hospitality interior",
    lifestyleWidth: 900,
    lifestyleHeight: 600,
    swatchSrc:
      "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Chocolate,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Distressed/Distressed_Leather_Chocolate.jpg",
    swatchWidth: 400,
    swatchHeight: 80,
    swatchAlt: "Chocolate distressed leather swatch with crackled vintage texture",
    /** Exactly 200 characters. */
    description:
      "Chocolate distressed leather—deep cocoa crackle grain, warm tonal highs and lows. Wingback chair in a hospitality lobby shows premium character for residential libraries & contract seating. Rich tone.",
  },
  {
    id: "black" as const,
    label: "Black",
    lifestyleSrc:
      "https://res.cloudinary.com/leathera/image/upload/v1778880309/leather/Distressed/examples/distressed-leather-black-color-option-oversized-sectional-sofa-with-chaise-upscale-condo-setting.png",
    lifestyleAlt:
      "Oversized distressed black leather sectional with chaise in an upscale condo living space",
    lifestyleWidth: 900,
    lifestyleHeight: 600,
    swatchSrc:
      "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Black,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Distressed/Distressed_Leather_Black.jpg",
    swatchWidth: 400,
    swatchHeight: 80,
    swatchAlt: "Black distressed leather swatch with deep crackle grain",
    /** Showcase caption (~200 characters). */
    description:
      "Black distressed leather—deep charcoal crackle grain, silvery ridge highlights, dramatic presence. Oversized sectional with chaise in an upscale condo: bold open-plan living & contract-scale seating.",
  },
  {
    id: "sand" as const,
    label: "Sand",
    lifestyleSrc:
      "https://res.cloudinary.com/leathera/image/upload/v1778880300/leather/Distressed/examples/distressed-leather-sand-color-option-bed-headboard-footboard-nailhead-trim-in-surburban-home.png",
    lifestyleAlt:
      "Bed with headboard and footboard in Sand distressed leather with nailhead trim in a suburban home",
    lifestyleWidth: 900,
    lifestyleHeight: 600,
    swatchSrc:
      "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Sand,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Distressed/Distressed_Leather_Sand.jpg",
    swatchWidth: 400,
    swatchHeight: 80,
    swatchAlt: "Sand distressed leather swatch with warm brown crackle texture",
    /** Showcase caption (~200 characters). */
    description:
      "Sand distressed leather—warm earthy brown, cream crackle veining, tonal depth. Bed with headboard, footboard & nailhead trim in a suburban home—relaxed bedrooms, hospitality-caliber durability & fit.",
  },
  {
    id: "ivory" as const,
    label: "Ivory",
    lifestyleSrc:
      "https://res.cloudinary.com/leathera/image/upload/v1778881205/leather/Distressed/examples/distressed-leather-ivory-color-option-restaurant-dining-chairs-in-fine-dining-setting.png",
    lifestyleAlt:
      "Fine-dining restaurant dining chairs upholstered in Ivory distressed leather around a dark wood table",
    lifestyleWidth: 900,
    lifestyleHeight: 600,
    swatchSrc:
      "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Ivory,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Distressed/Distressed_Leather_ivory.jpg",
    swatchWidth: 400,
    swatchHeight: 80,
    swatchAlt: "Ivory distressed leather swatch with warm off-white crackle texture",
    /** Exactly 200 characters. */
    description:
      "Ivory distressed leather—neutral beige, matte grain & tonal variation. Fine-dining restaurant chairs showcase hospitality-ready upholstery: refined commercial interiors & enduring everyday durability.",
  },
] as const;

type ShowcaseVariantId = (typeof distressedShowcaseVariants)[number]["id"];

/** Same crop chain as desktop (`…h_80,w_400`), resized for narrow screens — keeps 5:1 strip. */
function distressedShowcaseSwatchSrcMobile(fullSrc: string): string {
  return fullSrc.replace(
    "c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:",
    "c_crop,h_50,w_200/c_scale,g_south_west,x_15,y_15,l_text:montserrat_25_style_light:",
  );
}

type PopImage = { full: string; alt: string; name: string };

export default function DistressedProductBlock() {
  const [popImage, setPopImage] = useState<PopImage | null>(null);
  const [previewVideoActive, setPreviewVideoActive] = useState(false);
  const previewVideoRef = useRef<HTMLDivElement>(null);
  const [showcaseVariantId, setShowcaseVariantId] =
    useState<ShowcaseVariantId>("baby-blue");

  const showcaseVariant =
    distressedShowcaseVariants.find((v) => v.id === showcaseVariantId) ??
    distressedShowcaseVariants[0];

  const sampleCart = useCollectionSampleCart(distressedCollection);

  const closeModal = useCallback(() => setPopImage(null), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (popImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [popImage, closeModal]);

  const handlePreviewClick = useCallback(() => {
    setPreviewVideoActive(true);
    previewVideoRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  const openSwatch = (s: LeatherSwatch) =>
    setPopImage({
      full: s.fullUrl ?? s.thumbUrl,
      alt: `Distressed ${s.name} leather`,
      name: `Distressed ${s.name}`,
    });

  const openTexture = () =>
    setPopImage({
      full: specs.texture.fullUrl ?? specs.texture.thumbUrl,
      alt: `${specs.texture.label} texture — black distressed leather`,
      name: specs.texture.label,
    });

  return (
    <section
      id="distressed-collection"
      className="-mx-2 pt-0 sm:mx-0"
      aria-labelledby="distressed-heading"
    >
      <div
        className="border-4 p-4 sm:p-8"
        style={{ backgroundColor: "#23262f", borderColor: ACCENT }}
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h1
              id="distressed-heading"
              className="font-display text-4xl font-light tracking-tight"
              style={{ color: ACCENT, margin: "0 0 -15px 15px" }}
            >
              Distressed Leather
            </h1>

            <div
              id="distressed-preview-video"
              ref={previewVideoRef}
              className="mt-4 scroll-mt-24"
            >
            <LiteYouTube
              videoId={youtubeVideoId!}
              title="Distressed leather preview video"
              posterSrc={cloudinaryDisplayUrl(heroPosterUrl)}
              posterAlt={HERO_POSTER_ALT}
                aspectClass="aspect-[3/2]"
                className="w-full max-w-[600px] rounded-none border-[5px] border-[#f8991d] opacity-90 transition hover:opacity-100"
                embedParams="rel=0"
                activated={previewVideoActive}
                onActivatedChange={setPreviewVideoActive}
              />
            </div>

            <p className="mt-4 font-sans text-base font-normal leading-snug text-gray-300 sm:text-lg">
              Relaxed, timeworn grain with natural character—ideal for a curated
              sofa.
            </p>

            <div className="mt-6 flex flex-nowrap gap-3">
              <Link
                href="/leather-for-upholstery"
                className="flex min-w-0 flex-1 basis-0 items-center justify-center gap-2 border-2 border-black px-3 py-3 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-white sm:px-5 sm:text-base"
                style={{ backgroundColor: ACCENT }}
              >
                <i
                  className="fa fa-shopping-cart fa-lg hidden shrink-0 sm:inline"
                  aria-hidden
                />
                Get Quote
              </Link>
              <button
                type="button"
                onClick={handlePreviewClick}
                aria-label="Preview video"
                className="flex min-w-0 flex-1 basis-0 items-center justify-center gap-2 border-2 border-black bg-red-600 px-3 py-3 font-sans text-sm font-bold text-white transition hover:bg-black sm:px-5 sm:text-base"
              >
                <i className="fab fa-youtube fa-lg shrink-0" aria-hidden />
                <span className="hidden sm:inline">Preview</span>
              </button>
            </div>
          </div>

          <div
            id="order-samples"
            className="scroll-mt-24 lg:border-l lg:border-gray-500 lg:pl-10"
          >
            <h3 className="font-display text-xl font-normal" style={{ color: ACCENT }}>
              Color Swatches
            </h3>
            <p className="mt-2 font-sans text-sm text-gray-400">
              Tap swatch to preview · Check to order sample
            </p>
            <div
              className={`mt-4 flex flex-wrap gap-3 ${
                sampleCart.isSubmitting ? "pointer-events-none opacity-60" : ""
              }`}
              role="group"
              aria-label="Distressed leather color swatches"
            >
              {swatches.map((swatch) => {
                const selected = sampleCart.isSelected(swatch.id);
                const checkboxId = `hero-swatch-${swatch.id}`;

                return (
                  <div
                    key={swatch.id}
                    className={`relative w-fit shrink-0 ${selected ? "ring-2 ring-releather-orange ring-offset-2 ring-offset-[#23262f]" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => openSwatch(swatch)}
                      title={`Distressed ${swatch.name}`}
                      className="block opacity-90 transition hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                    >
                      <Image
                        unoptimized
                        src={cloudinaryDisplayUrl(swatch.thumbUrl)}
                        alt={`Distressed leather ${swatch.name} swatch`}
                        width={90}
                        height={90}
                        loading="lazy"
                        className={`h-[90px] w-[90px] border-2 object-cover ${
                          selected ? "border-releather-orange" : ""
                        }`}
                        style={selected ? undefined : { borderColor: ACCENT }}
                      />
                    </button>
                    <label
                      htmlFor={checkboxId}
                      className="absolute left-0.5 top-0.5 flex h-4 w-4 cursor-pointer items-center justify-center border border-black bg-black/70 transition hover:bg-black"
                      title={`Order ${swatch.name} sample`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        id={checkboxId}
                        type="checkbox"
                        className="peer sr-only"
                        checked={selected}
                        disabled={sampleCart.isSubmitting}
                        onChange={() => sampleCart.toggleSwatch(swatch)}
                        aria-label={`Order ${swatch.name} sample`}
                      />
                      <span
                        className={`flex h-full w-full items-center justify-center border border-white/30 peer-checked:border-releather-orange peer-checked:bg-releather-orange peer-checked:text-black ${
                          selected ? "border-releather-orange bg-releather-orange text-black" : "text-transparent"
                        }`}
                        aria-hidden
                      >
                        <i className="fa fa-check text-[8px]" />
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 font-sans text-sm leading-relaxed text-gray-400">
              <strong className="font-semibold text-white">$25 flat for 1–4 samples.</strong>{" "}
              <strong className="font-semibold text-white">$5</strong> for each additional.
            </p>
          </div>
        </div>

        <div
          id="specs"
          className="mt-10 border-t border-gray-500 pt-8 lg:col-span-2"
        >
          <div className="flex flex-wrap items-baseline gap-2 sm:gap-2.5">
            <h3
              className="font-display text-xl font-normal leading-tight sm:text-2xl"
              style={{ color: ACCENT }}
            >
              Specifications
            </h3>
            <a
              href={specs.specsPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-0.5 text-base leading-none text-white transition hover:text-releather-orange focus:outline-none focus:ring-2 focus:ring-releather-orange sm:p-1 sm:text-lg"
              title="Download specifications PDF"
              aria-label="Download specifications PDF"
            >
              <i className="fas fa-file-pdf" aria-hidden />
            </a>
          </div>
          <div
            className="mt-4 overflow-x-auto rounded-sm border border-white/25 bg-black/15 shadow-inner"
            role="region"
            aria-label="Product specifications"
          >
            <div className="grid min-w-[520px] grid-cols-4 sm:min-w-0">
              {/* Row 1: Size | value | Thickness | value */}
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Size
              </div>
              <div className="border-b border-r border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                {specs.size}
              </div>
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Thickness
              </div>
              <div className="border-b border-white/20 px-2 py-2.5 font-sans text-xs leading-snug text-white sm:px-3 sm:text-sm md:text-base">
                {specs.thickness}
              </div>

              {/* Row 2: Origin | Italy + flag | Material | Cowhide */}
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Origin
              </div>
              <div className="border-b border-r border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                <span className="inline-flex flex-wrap items-center gap-2">
                  <span>{specs.origin}</span>
                  <Image
                    unoptimized
                    src={cloudinaryDisplayUrl(italyFlagUrl)}
                    alt="Italy"
                    title="Italy"
                    width={35}
                    height={20}
                    loading="lazy"
                    className="inline-block h-5 w-auto shrink-0 border border-white/25 object-cover"
                  />
                </span>
              </div>
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Material
              </div>
              <div className="border-b border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                {specs.material}
              </div>

              {/* Row 3: Type | Aniline | Finish | value */}
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Type
              </div>
              <div className="border-b border-r border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                {specs.type}
              </div>
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Finish
              </div>
              <div className="border-b border-white/20 px-2 py-2.5 font-sans text-xs leading-snug text-white sm:px-3 sm:text-sm md:text-base">
                {specs.finish}
              </div>

              {/* Row 4: Grain | Top Grain | Category | Protected */}
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Grain
              </div>
              <div className="border-b border-r border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                {specs.grain}
              </div>
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Category
              </div>
              <div className="border-b border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                {specs.category}
              </div>

              {/* Row 5: Uses | value | Texture | texture content (same row, 4 cols) */}
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Uses
              </div>
              <div className="border-b border-r border-white/20 px-2 py-2.5 font-sans text-xs leading-snug text-white sm:px-3 sm:text-sm md:text-base">
                {specs.uses}
              </div>
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Texture
              </div>
              <div className="border-b border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                <span className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={openTexture}
                    title={`${specs.texture.label} — view larger`}
                    className="inline-block shrink-0 border border-white/25 opacity-90 transition hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                  >
                    <Image
                      unoptimized
                      src={cloudinaryDisplayUrl(specs.texture.thumbUrl)}
                      alt={`${specs.texture.label} texture thumbnail`}
                      width={100}
                      height={100}
                      loading="lazy"
                      className="h-[56px] w-[56px] object-cover sm:h-[72px] sm:w-[72px] md:h-[84px] md:w-[84px]"
                    />
                  </button>
                  <span className="font-medium leading-tight">{specs.texture.label}</span>
                </span>
              </div>
            </div>
          </div>
          <p className="mt-3">
            <a
              href={specs.prop65PdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-white transition hover:text-releather-orange focus:outline-none focus:ring-2 focus:ring-releather-orange sm:text-base"
              title="California Proposition 65"
              aria-label="California Proposition 65 PDF"
            >
              <i className="fas fa-exclamation-triangle" aria-hidden />
              Prop 65
            </a>
          </p>
        </div>
      </div>

      <section
        className="border-t-4 border-black pt-12"
        aria-labelledby="distressed-what-heading"
      >
        <h2
          id="distressed-what-heading"
          className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
        >
          What is Distressed Leather?
        </h2>
        <div className="mt-4">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-5">
            <div className="order-2 space-y-4 font-sans text-lg leading-relaxed text-gray-800 md:order-1">
              <p>
                <strong>Distressed Leather</strong> is an aniline-dyed leather with a
                soft feel and <em>vintage-rustic</em> look. Oils and waxes create a
                pull-up effect that develops lighter tones under stress, adding character
                and depth. Distressed hides vary naturally, making them ideal for authentic
                upholstery without a uniform look. Durable and protective, it&apos;s recommended for:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-releather-orange">
                <li>Furniture</li>
                <li>Interiors</li>
                <li>Bags, Garments</li>
              </ul>
            </div>
            <figure className="order-1 mx-auto w-full max-w-[250px] sm:max-w-[270px] md:order-2 md:mx-0 md:max-w-[300px]">
              <div className="brutalist-image-frame border-4 shadow-[4px_4px_0_#f8991d]">
                <Image
                  src={cloudinaryDisplayUrl(distressedUseCaseExampleUrl)}
                  alt="High-end lounge chair in a luxury hospitality setting upholstered in distressed chocolate brown leather"
                  width={600}
                  height={600}
                  unoptimized
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-2.5 max-w-[300px] font-sans text-sm leading-relaxed text-gray-700">
                Chocolate color option on accent seating in a hospitality interior.
              </figcaption>
            </figure>
          </div>
          <div className="mt-6 border-t border-gray-200 pt-5">
            <div className="float-none mx-auto mb-4 flex w-full max-w-[200px] flex-col border-4 border-black sm:float-left sm:mb-4 sm:mr-6 sm:shrink-0">
              <span className="flex h-[200px] shrink-0 overflow-hidden border-b-4 border-black">
                <Image
                  unoptimized
                  src={cloudinaryDisplayUrl(distressedPullUpEffectImageUrl)}
                  alt="Close-up of brown distressed leather showing the pull-up effect, with lighter tones where oils and waxes shift under stress"
                  title="Distressed leather pull-up effect"
                  width={200}
                  height={200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </span>
              <strong className="flex min-h-[52px] flex-1 items-center justify-center border-t-2 border-black bg-white px-2 py-2 text-center font-sans text-sm font-bold text-black sm:text-base">
                Pull-up effect
              </strong>
            </div>
            <h2
              id="distressed-pull-up-heading"
              className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              Understanding the Pull-Up Effect
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-gray-800">
              The pull-up effect is a defining characteristic of{" "}
              <Link
                href="/types-of-leather#wax-pull-up-leather"
                title="Wax pull up leather"
                className={proseLinkClass}
              >
                waxed distressed leather
              </Link>
              . It occurs when oils and waxes within the leather move under pressure or
              stretching, temporarily revealing lighter tones in those areas. This creates
              natural depth and variation across the surface, giving each hide a unique,
              evolving aged character.
            </p>
            <div className="clear-both" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section
        id="distressed-showcase"
        className="mt-12 border-t-4 border-black pt-12"
        aria-labelledby="distressed-showcase-heading"
      >
        <header className="mb-10 text-center">
          <div className="inline-block rounded-none border-4 border-black bg-releather-orange px-6 py-4 text-center sm:px-8 sm:py-5">
            <h2
              id="distressed-showcase-heading"
              className="font-display text-4xl font-black uppercase leading-tight tracking-tighter text-black sm:text-5xl lg:text-6xl"
            >
              Showcase
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-4xl px-2 font-sans text-lg font-bold leading-relaxed text-gray-800 sm:text-xl">
            → Distressed leather fits residential and contract projects where you want
            rich character plus upholstery-grade performance — from living rooms to
            hospitality and automotive trims.
          </p>
        </header>

        <figure className="border-4 border-black bg-releather-dark p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="min-w-0 flex-1 space-y-2">
              <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                Applications
              </p>
              <div className="aspect-[3/2] max-h-[500px] w-full overflow-hidden border-2 border-black">
                <Image
                  key={showcaseVariant.id}
                  unoptimized
                  src={cloudinaryDisplayUrl(showcaseVariant.lifestyleSrc)}
                  alt={showcaseVariant.lifestyleAlt}
                  width={showcaseVariant.lifestyleWidth}
                  height={showcaseVariant.lifestyleHeight}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="w-full shrink-0 space-y-2 sm:w-auto sm:max-w-[min(100%,400px)]">
              <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                Swatches
              </p>
              <div className="grid grid-cols-2 gap-x-2 gap-y-3 sm:flex sm:flex-col sm:gap-3">
                {distressedShowcaseVariants.map((v) => {
                  const selected = v.id === showcaseVariant.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      aria-pressed={selected}
                      aria-label={`Show ${v.label} distressed leather showcase`}
                      onClick={() => setShowcaseVariantId(v.id)}
                      className={`flex w-full min-w-0 justify-center overflow-hidden bg-black/20 p-0 opacity-90 transition hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange focus:ring-offset-2 focus:ring-offset-releather-dark sm:block sm:w-[400px] sm:justify-start ${
                        selected
                          ? "border-4 border-releather-orange opacity-100"
                          : "border-2 border-black"
                      }`}
                    >
                      <picture className="leading-none">
                        <source
                          media="(max-width: 639px)"
                          srcSet={cloudinaryDisplayUrl(
                            distressedShowcaseSwatchSrcMobile(v.swatchSrc),
                          )}
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element -- <picture> mobile srcSet + responsive layout */}
                        <img
                          src={cloudinaryDisplayUrl(v.swatchSrc)}
                          alt={v.swatchAlt}
                          width={v.swatchWidth}
                          height={v.swatchHeight}
                          loading="lazy"
                          decoding="async"
                          className="h-auto w-[200px] max-w-full object-cover sm:w-full"
                        />
                      </picture>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <figcaption className="mt-4 border-t-2 border-gray-500 pt-4">
            <p className="font-sans text-base font-medium text-white">
              {showcaseVariant.description}
            </p>
            <p className="mt-1 font-sans text-sm font-medium italic text-gray-300">
              Distressed collection · {showcaseVariant.label}
            </p>
          </figcaption>
        </figure>
      </section>

      <section
        id="distressed-industry-insights"
        className="mt-12 border-t-4 border-black pt-12"
        aria-labelledby="distressed-industry-insights-heading"
      >
        <header className="mb-10 text-center">
          <div className="inline-block rounded-none border-4 border-black bg-releather-orange px-6 py-4 text-center sm:px-8 sm:py-5">
            <h2
              id="distressed-industry-insights-heading"
              className="font-display text-4xl font-black uppercase leading-tight tracking-tighter text-black sm:text-5xl lg:text-6xl"
            >
              Industry Insights
            </h2>
          </div>
        </header>

        <div className="space-y-10">
          <article aria-labelledby="distressed-insights-design-heading">
            <h3
              id="distressed-insights-design-heading"
              className="border-b-2 border-releather-orange pb-1 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              <i
                className="fa fa-check-square mr-2 text-releather-orange"
                aria-hidden
              />
              Why Choose Distressed Leather for Upholstery
            </h3>
            <p className="mt-3 font-sans text-base font-bold uppercase tracking-wider text-releather-orange sm:text-lg">
              Ask a Pro: Interior Design Perspective
            </p>
            <div className="mt-6 space-y-4 font-sans text-lg leading-relaxed text-gray-800">
              <figure className="float-none mx-auto mb-6 block w-full max-w-[280px] text-center sm:float-right sm:mx-0 sm:mb-4 sm:ml-6 sm:w-[320px] sm:shrink-0 sm:text-left">
                <div className="brutalist-image-frame">
                  <Image
                    src={cloudinaryDisplayUrl(distressedInteriorDesignSelectionUrl)}
                    alt="Distressed leather color swatches and samples laid out for interior design selection"
                    title="Distressed leather interior design selection"
                    width={900}
                    height={900}
                    unoptimized
                    loading="lazy"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-sans text-sm leading-relaxed text-gray-700">
                  Designer selects colorways
                </figcaption>
              </figure>
              <p>
                <i
                  className="fa-solid fa-quote-left mr-2 text-releather-orange"
                  aria-hidden
                />
                When I choose distressed leather for a project, I&apos;m usually trying to
                bring warmth and character into a space that would otherwise feel too flat or
                modern. The appeal is that it doesn&apos;t look manufactured or overly perfect
                — it feels lived-in from day one. That&apos;s something clients respond to
                immediately, especially in residential living spaces.
              </p>
              <div className="brutalist-caption [&_p]:m-0 font-sans text-lg not-italic">
                <p>
                  What I like most is how it evolves over time, developing a natural patina
                  and tonal shifts that make it look more refined and layered rather than
                  worn.
                </p>
              </div>
              <p>
                From a design perspective, it&apos;s also incredibly forgiving. Natural
                variation in the hide means you&apos;re not fighting imperfections —
                you&apos;re working with them. That makes it ideal for large statement pieces
                like sofas or lounge chairs where you want texture, depth, and a slightly
                rustic luxury feel.
                <i
                  className="fa-solid fa-quote-right ml-2 text-releather-orange"
                  aria-hidden
                />
              </p>
              <div className="clear-both" aria-hidden="true" />
            </div>
          </article>

          <article aria-labelledby="distressed-insights-workshop-heading">
            <h3
              id="distressed-insights-workshop-heading"
              className="border-b-2 border-releather-orange pb-1 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              <i
                className="fa fa-check-square mr-2 text-releather-orange"
                aria-hidden
              />
              Distressed Leather in Residential and Commercial Interiors
            </h3>
            <p className="mt-3 font-sans text-base font-bold uppercase tracking-wider text-releather-orange sm:text-lg">
              Ask a Pro: Upholstery Workshop Perspective
            </p>
            <div className="mt-6 space-y-4 font-sans text-lg leading-relaxed text-gray-800">
              <figure className="float-none mx-auto mb-6 block w-full max-w-[280px] text-center sm:float-left sm:mx-0 sm:mb-4 sm:mr-6 sm:w-[320px] sm:shrink-0 sm:text-left">
                <div className="brutalist-image-frame">
                  <Image
                    src={cloudinaryDisplayUrl(distressedUpholsteryShopSelectionUrl)}
                    alt="Distressed leather hides and swatches selected in an upholstery workshop"
                    title="Distressed leather upholstery shop selection"
                    width={900}
                    height={900}
                    unoptimized
                    loading="lazy"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-sans text-sm leading-relaxed text-gray-700">
                  Upholsterer selects leather colorways for customer&apos;s home decor.
                </figcaption>
              </figure>
              <p>
                <i
                  className="fa-solid fa-quote-left mr-2 text-releather-orange"
                  aria-hidden
                />
                From an{" "}
                <Link
                  href="/services/leather-upholstery"
                  title="Leather upholstery workshop"
                  className={proseLinkClass}
                >
                  upholstery
                </Link>{" "}
                standpoint, distressed leather is one of the most practical materials we work
                with in higher-end furniture builds at our{" "}
                <Link
                  href="/leather-restoration-orange-county"
                  title="Leather restoration and upholstery shop in Orange County"
                  className={proseLinkClass}
                >
                  upholstery shop in Orange County
                </Link>
                . It&apos;s durable, but more importantly, it hides the natural signs of use in a
                way that still looks intentional. That&apos;s a big reason it gets specified for
                hospitality projects.
              </p>
              <p>
                In residential work, we see it used heavily on{" "}
                <Link
                  href="/replacement-cushions-for-leather-couch"
                  title="Replacement cushions for leather couch"
                  className={proseLinkClass}
                >
                  sofa cushions
                </Link>
                , sectionals, and accent chairs. Homeowners like it because it doesn&apos;t feel
                sterile — it feels
                warm and slightly aged from the start. Even after years of use, it tends to
                look better rather than worse, which is not something you can say about all
                finishes.
              </p>
              <div className="brutalist-caption [&_p]:m-0 font-sans text-lg not-italic">
                <p>
                  For hotels, restaurants, and lounges, distressed leather is ideal for
                  high-traffic seating because its tonal variation helps hide wear while
                  maintaining a refined look.
                  <i
                    className="fa-solid fa-quote-right ml-2 text-releather-orange"
                    aria-hidden
                  />
                </p>
              </div>
              <div className="clear-both" aria-hidden="true" />
            </div>
          </article>
        </div>
      </section>

      {popImage && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center px-6 py-10"
          style={{
            background: [
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 70%, rgba(255,255,255,0.2) 0%, transparent 45%)",
              "rgba(0,0,0,0.35)",
            ].join(", "),
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Leather preview"
          onClick={closeModal}
        >
          <div
            className="relative w-fit max-w-[95vw] overflow-visible rounded-none border-4 border-black bg-white p-5 shadow-[8px_8px_0_0_#000]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-none border-2 border-black bg-releather-orange text-xl font-bold text-black transition hover:bg-black hover:text-releather-orange"
              aria-label="Close"
            >
              ×
            </button>
            <div className="pt-2">
              <Image
                unoptimized
                src={popImage.full}
                alt={popImage.alt}
                title={popImage.alt}
                width={1200}
                height={900}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            <p className="mt-3 text-center font-display text-lg font-bold uppercase tracking-tight text-black">
              {popImage.name}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
