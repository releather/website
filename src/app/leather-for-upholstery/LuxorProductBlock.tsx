"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const ACCENT_ORANGE = "#f8991d";
const BLOCK_BG = "#23262f";

const luxorMainImage = {
  thumb:
    "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_crop,g_south,w_300,y_257/v1639529981/leather/Luxor_Saddle_HI.jpg",
  full: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_crop,g_south,w_500,y_257/v1639529981/leather/Luxor_Saddle_HI.jpg",
  alt: "Close up of Pigmented Pebble Grain Leather",
  title: "Close up of Pigmented Pebble Grain Leather",
};

const LUXOR_THUMB_BASE = "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light";
const LUXOR_FULL_BASE = "https://res.cloudinary.com/releather-com/image/upload/v1639529981/leather";
const LUXOR_THUMB_SUFFIX = ",y_10/v1611289175/thumb";

const luxorSwatches = [
  { name: "Aubergine", thumb: `${LUXOR_THUMB_BASE}:Aubergine,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Aubergine_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Aubergine_HI.jpg` },
  { name: "Bamboo", thumb: `${LUXOR_THUMB_BASE}:Bamboo,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Bamboo_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Bamboo_HI.jpg` },
  { name: "Bayou", thumb: `${LUXOR_THUMB_BASE}:Bayou,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Bayou_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Bayou_HI.jpg` },
  { name: "Black", thumb: `${LUXOR_THUMB_BASE}:Black,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Black_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Black_HI.jpg` },
  { name: "Brandy", thumb: `${LUXOR_THUMB_BASE}:Brandy,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Brandy_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Brandy_HI.jpg` },
  { name: "Canyon", thumb: `${LUXOR_THUMB_BASE}:Canyon,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Canyon_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Canyon_HI.jpg` },
  { name: "Chestnut", thumb: `${LUXOR_THUMB_BASE}:Chestnut,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Chestnut_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Chestnut_HI.jpg` },
  { name: "Chocolate", thumb: `${LUXOR_THUMB_BASE}:Chocolate,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Chocolate_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Chocolate_HI.jpg` },
  { name: "Coal", thumb: `${LUXOR_THUMB_BASE}:Coal,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Coal_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Coal_HI.jpg` },
  { name: "Cream", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Cream,co_rgb:666666,y_10/v1611289175/thumb/Luxor_Cream_thumb.jpg", full: `${LUXOR_FULL_BASE}/Luxor_Cream_HI.jpg` },
  { name: "Dark Brown", thumb: `${LUXOR_THUMB_BASE}:Dark%20Brown,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Dark-Brown_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Dark-Brown_HI.jpg` },
  { name: "Espresso", thumb: `${LUXOR_THUMB_BASE}:Espresso,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Espresso_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Espresso_HI.jpg` },
  { name: "Graphite", thumb: `${LUXOR_THUMB_BASE}:Graphite,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Graphite_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Graphite_HI.jpg` },
  { name: "Ivory", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Ivory,co_rgb:666666,y_10/v1611289175/thumb/Luxor_Ivory_thumb.jpg", full: `${LUXOR_FULL_BASE}/Luxor_Ivory_HI.jpg` },
  { name: "Merlot", thumb: `${LUXOR_THUMB_BASE}:Merlot,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Merlot_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Merlot_HI.jpg` },
  { name: "Navy", thumb: `${LUXOR_THUMB_BASE}:Navy,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Navy_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Navy_HI.jpg` },
  { name: "Ocean", thumb: `${LUXOR_THUMB_BASE}:Ocean,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Ocean_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Ocean_HI.jpg` },
  { name: "Olive", thumb: `${LUXOR_THUMB_BASE}:Olive,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Olive_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Olive_HI.jpg` },
  { name: "Paprika", thumb: `${LUXOR_THUMB_BASE}:Paprika,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Paprika_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Paprika_HI.jpg` },
  { name: "Pewter", thumb: `${LUXOR_THUMB_BASE}:Pewter,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Pewter_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Pewter_HI.jpg` },
  { name: "Praline", thumb: `${LUXOR_THUMB_BASE}:Praline,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Praline_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Praline_HI.jpg` },
  { name: "Red", thumb: `${LUXOR_THUMB_BASE}:Red,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Red_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Red_HI.jpg` },
  { name: "Riverstone", thumb: `${LUXOR_THUMB_BASE}:Riverstone,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Riverstone_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Riverstone_HI.jpg` },
  { name: "Saddle", thumb: `${LUXOR_THUMB_BASE}:Saddle,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Saddle_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Saddle_HI.jpg` },
  { name: "Silver", thumb: `${LUXOR_THUMB_BASE}:Silver,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Silver_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Silver_HI.jpg` },
  { name: "Spruce", thumb: `${LUXOR_THUMB_BASE}:Spruce,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Spruce_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Spruce_HI.jpg` },
  { name: "Taupe", thumb: `${LUXOR_THUMB_BASE}:Taupe,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Taupe_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Taupe_HI.jpg` },
  { name: "Turquoise", thumb: `${LUXOR_THUMB_BASE}:Turquoise,co_rgb:ffffff${LUXOR_THUMB_SUFFIX}/Luxor_Turquoise_thumb.jpg`, full: `${LUXOR_FULL_BASE}/Luxor_Turquoise_HI.jpg` },
  { name: "White", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:White,co_rgb:666666,y_10/v1611289175/thumb/Luxor_white_thumb.jpg", full: `${LUXOR_FULL_BASE}/Luxor_white_HI.jpg` },
] as const;

type Swatch = (typeof luxorSwatches)[number];

type PopImage = { full: string; alt: string; name: string };

const LUXOR_PDF_URL =
  "https://res.cloudinary.com/releather-com/image/upload/v1654828623/leather/pdf/Luxor_-_Leather_for_Upholstery_-_Protected_Pigmented_Aniline_Leather_-_Pebble_Grain.pdf";
const LUXOR_YOUTUBE_URL = "https://www.youtube.com/watch?v=4MAp1ZLv-AA";

export default function LuxorProductBlock() {
  const [popImage, setPopImage] = useState<PopImage | null>(null);

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

  const openMain = () =>
    setPopImage({
      full: luxorMainImage.full,
      alt: luxorMainImage.alt,
      name: "Luxor – Pebble Grain",
    });

  const openSwatch = (s: Swatch) =>
    setPopImage({
      full: s.full,
      alt: `Luxor ${s.name} leather`,
      name: `Luxor ${s.name}`,
    });

  return (
    <section
      id="luxor"
      className="mt-12 border-t-4 border-black pt-12"
      aria-labelledby="luxor-heading"
    >
      <div className="border-4 p-6 sm:p-8" style={{ backgroundColor: BLOCK_BG, borderColor: ACCENT_ORANGE }}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2
              id="luxor-heading"
              className="font-display text-4xl font-light tracking-tight"
              style={{ color: ACCENT_ORANGE, margin: "0 0 -15px 15px" }}
            >
              Luxor Leather
            </h2>

            <button
              type="button"
              onClick={openMain}
              className="mt-4 block transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange focus:ring-offset-2"
              title={luxorMainImage.title}
            ><Image unoptimized
                src={luxorMainImage.thumb}
                alt={luxorMainImage.alt}
                title={luxorMainImage.title}
                width={300}
                height={300}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </button>

            <h3 className="mt-4 font-display text-[1.75rem] font-light" style={{ color: "#ffffff" }}>
              Pigmented Aniline Leather
              <span className="mt-1 block text-[1.6rem] text-gray-400 sm:inline sm:mt-0 sm:ml-1">
                → Pebble Grain
              </span>
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={LUXOR_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center border-2 border-black px-5 py-3 font-sans text-base font-bold text-black transition hover:bg-black hover:text-white"
                style={{ backgroundColor: ACCENT_ORANGE }}
              >
                <i className="fa fa-download fa-2x mr-3" aria-hidden />
                Download Specs
              </a>
              <a
                href={LUXOR_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center border-2 border-black bg-red-600 px-5 py-3 font-sans text-base font-bold text-white transition hover:bg-black"
              >
                <i className="fab fa-youtube fa-2x mr-3" aria-hidden />
                Watch on YouTube
              </a>
            </div>
          </div>

          <div className="lg:border-l lg:border-gray-500 lg:pl-10">
            <h4 className="font-display text-xl font-normal" style={{ color: ACCENT_ORANGE }}>
              Color Swatches
            </h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {luxorSwatches.map((swatch) => (
                <button
                  key={swatch.name}
                  type="button"
                  onClick={() => openSwatch(swatch)}
                  title={`Luxor ${swatch.name}`}
                  className="block transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                ><Image unoptimized
                    src={swatch.thumb}
                    alt={`Leather Hide Upholstery Luxor ${swatch.name} Thumb`}
                    width={90}
                    height={90}
                    loading="lazy"
                    className="h-[90px] w-[90px] border-2 object-cover"
                    style={{ borderColor: ACCENT_ORANGE }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

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
            <div className="pt-2"><Image unoptimized
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
