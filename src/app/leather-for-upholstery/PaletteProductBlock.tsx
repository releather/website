"use client";

import { useCallback, useEffect, useState } from "react";

const ACCENT_ORANGE = "#f8991d";
const BLOCK_BG = "#23262f";

const paletteMainImage = {
  thumb:
    "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_crop,g_south,r_max,w_300,y_257/v1638909286/leather/PALETTE_tan_HI.jpg",
  full: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_crop,g_south,r_max,w_500,y_257/v1638909286/leather/PALETTE_tan_HI.jpg",
  alt: "Close up of Pigmented Fine Grain Leather",
  title: "Close up of Pigmented Fine Grain Leather",
};

const THUMB_BASE = "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light";
const FULL_BASE = "https://res.cloudinary.com/releather-com/image/upload/v1638909286/leather";

const paletteSwatches = [
  { name: "Avocado", thumb: `${THUMB_BASE}:Avocado,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_avocado_thumb.jpg`, full: `${FULL_BASE}/PALETTE_avocado_HI.jpg` },
  { name: "Baby Camel", thumb: `${THUMB_BASE}:Baby%20Camel,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_baby-camel_thumb.jpg`, full: `${FULL_BASE}/PALETTE_baby-camel_HI.jpg` },
  { name: "Bamboo", thumb: `${THUMB_BASE}:Bamboo,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_bamboo_thumb.jpg`, full: `${FULL_BASE}/PALETTE_bamboo_HI.jpg` },
  { name: "Bayou", thumb: `${THUMB_BASE}:Bayou,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_bayou_thumb.jpg`, full: `${FULL_BASE}/PALETTE_bayou_HI.jpg` },
  { name: "Black", thumb: `${THUMB_BASE}:Black,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_black_thumb.jpg`, full: `${FULL_BASE}/PALETTE_black_HI.jpg` },
  { name: "Charcoal", thumb: `${THUMB_BASE}:Charcoal,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_charcoal_thumb.jpg`, full: `${FULL_BASE}/PALETTE_charcoal_HI.jpg` },
  { name: "Chocolate", thumb: `${THUMB_BASE}:Chocolate,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_chocolate_thumb.jpg`, full: `${FULL_BASE}/PALETTE_chocolate_HI.jpg` },
  { name: "Coal", thumb: `${THUMB_BASE}:Coal,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_coal_thumb.jpg`, full: `${FULL_BASE}/PALETTE_coal_HI.jpg` },
  { name: "Cream", thumb: `${THUMB_BASE}:Cream,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_cream_thumb.jpg`, full: `${FULL_BASE}/PALETTE_cream_HI.jpg` },
  { name: "Dove", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Dove,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE-dove_thumb.jpg", full: `${FULL_BASE}/PALETTE_dove_HI.jpg` },
  { name: "Espresso", thumb: `${THUMB_BASE}:Espresso,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_espresso_thumb.jpg`, full: `${FULL_BASE}/PALETTE_espresso_HI.jpg` },
  { name: "Fire Engine Red", thumb: `${THUMB_BASE}:Fire%20Engine%20Red,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_fire-engine-red_thumb.jpg`, full: `${FULL_BASE}/PALETTE_fire-engine-red_HI.jpg` },
  { name: "Fog", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Fog,co_rgb:666666,y_10/v1611289193/thumb/PALETTE-fog_thumb.jpg", full: `${FULL_BASE}/PALETTE_fog_HI.jpg` },
  { name: "Fuchsia", thumb: `${THUMB_BASE}:Fuchsia,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_fuchsia_thumb.jpg`, full: `${FULL_BASE}/PALETTE_fuchsia_HI.jpg` },
  { name: "Grey", thumb: `${THUMB_BASE}:Grey,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_grey_thumb.jpg`, full: `${FULL_BASE}/PALETTE_grey_HI.jpg` },
  { name: "Harness Brown", thumb: `${THUMB_BASE}:Harness%20Brown,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_harness-brown_thumb.jpg`, full: `${FULL_BASE}/PALETTE_harness-brown_HI.jpg` },
  { name: "Hazelnut", thumb: `${THUMB_BASE}:Hazelnut,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_hazelnut_thumb.jpg`, full: `${FULL_BASE}/PALETTE_hazelnut_HI.jpg` },
  { name: "Henna", thumb: `${THUMB_BASE}:Henna,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_henna_thumb.jpg`, full: `${FULL_BASE}/PALETTE_henna_HI.jpg` },
  { name: "Iolite", thumb: `${THUMB_BASE}:Iolite,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_iolite_thumb.jpg`, full: `${FULL_BASE}/PALETTE_iolite_HI.jpg` },
  { name: "Iris", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Iris,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE-iris_thumb.jpg", full: `${FULL_BASE}/PALETTE_iris_HI.jpg` },
  { name: "Ivory", thumb: `${THUMB_BASE}:Ivory,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_ivory_thumb.jpg`, full: `${FULL_BASE}/PALETTE_ivory_HI.jpg` },
  { name: "Khaki", thumb: `${THUMB_BASE}:Khaki,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_khaki_thumb.jpg`, full: `${FULL_BASE}/PALETTE_khaki_HI.jpg` },
  { name: "Mango", thumb: `${THUMB_BASE}:Mango,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_mango_thumb.jpg`, full: `${FULL_BASE}/PALETTE_mango_HI.jpg` },
  { name: "Mist Blue", thumb: `${THUMB_BASE}:Mist%20Blue,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_mist-blue_thumb.jpg`, full: `${FULL_BASE}/PALETTE_mist-blue_HI.jpg` },
  { name: "Mocha", thumb: `${THUMB_BASE}:Mocha,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_mocha_thumb.jpg`, full: `${FULL_BASE}/PALETTE_mocha_HI.jpg` },
  { name: "Navy", thumb: `${THUMB_BASE}:Navy,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_navy_thumb.jpg`, full: `${FULL_BASE}/PALETTE_navy_HI.jpg` },
  { name: "Ocean", thumb: `${THUMB_BASE}:Ocean,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_ocean_thumb.jpg`, full: `${FULL_BASE}/PALETTE_ocean_HI.jpg` },
  { name: "Oxblood", thumb: `${THUMB_BASE}:Oxblood,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_oxblood_thumb.jpg`, full: `${FULL_BASE}/PALETTE_oxblood_HI.jpg` },
  { name: "Pebble", thumb: `${THUMB_BASE}:Pebble,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_pebble_thumb.jpg`, full: `${FULL_BASE}/PALETTE_pebble_HI.jpg` },
  { name: "Plum", thumb: `${THUMB_BASE}:Plum,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_plum_thumb.jpg`, full: `${FULL_BASE}/PALETTE_plum_HI.jpg` },
  { name: "Saddle", thumb: `${THUMB_BASE}:Saddle,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_saddle_thumb.jpg`, full: `${FULL_BASE}/PALETTE_saddle_HI.jpg` },
  { name: "Sandstone", thumb: `${THUMB_BASE}:Sandstone,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_sandstone_thumb.jpg`, full: `${FULL_BASE}/PALETTE_sandstone_HI.jpg` },
  { name: "Smoke Grey", thumb: `${THUMB_BASE}:Smoke%20Grey,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_smoke-grey_thumb.jpg`, full: `${FULL_BASE}/PALETTE_smoke-grey_HI.jpg` },
  { name: "Star", thumb: `${THUMB_BASE}:Star,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_star_thumb.jpg`, full: `${FULL_BASE}/PALETTE_star_HI.jpg` },
  { name: "Stone", thumb: `${THUMB_BASE}:Stone,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_stone_thumb.jpg`, full: `${FULL_BASE}/PALETTE_stone_HI.jpg` },
  { name: "Tan", thumb: `${THUMB_BASE}:Tan,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_tan_thumb.jpg`, full: `${FULL_BASE}/PALETTE_tan_HI.jpg` },
  { name: "Taupe", thumb: `${THUMB_BASE}:Taupe,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_taupe_thumb.jpg`, full: `${FULL_BASE}/PALETTE_taupe_HI.jpg` },
  { name: "White", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:White,co_rgb:666666,y_10/v1611289193/thumb/PALETTE_white_thumb.jpg", full: `${FULL_BASE}/PALETTE_white_HI.jpg` },
  { name: "Wine", thumb: `${THUMB_BASE}:Wine,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_wine_thumb.jpg`, full: `${FULL_BASE}/PALETTE_wine_HI.jpg` },
] as const;

type Swatch = (typeof paletteSwatches)[number];

type PopImage = { full: string; alt: string; name: string };

const PALETTE_PDF_URL =
  "https://res.cloudinary.com/releather-com/image/upload/v1654828623/leather/pdf/Palette_-_Leather_for_Upholstery_-_Protected_Pigmented_Aniline_Leather_-_Fine_Grain.pdf";
const PALETTE_YOUTUBE_URL = "https://www.youtube.com/watch?v=28BVQAmBuxI";

export default function PaletteProductBlock() {
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
      full: paletteMainImage.full,
      alt: paletteMainImage.alt,
      name: "Palette – Fine Grain",
    });

  const openSwatch = (s: Swatch) =>
    setPopImage({
      full: s.full,
      alt: `Palette ${s.name} leather`,
      name: `Palette ${s.name}`,
    });

  return (
    <section
      id="palette"
      className="mt-12 border-t-4 border-black pt-12"
      aria-labelledby="palette-heading"
    >
      <div className="border-4 p-6 sm:p-8" style={{ backgroundColor: BLOCK_BG, borderColor: ACCENT_ORANGE }}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2
              id="palette-heading"
              className="font-display text-4xl font-light tracking-tight"
              style={{ color: ACCENT_ORANGE, margin: "0 0 -15px 15px" }}
            >
              Palette Leather
            </h2>

            <button
              type="button"
              onClick={openMain}
              className="mt-4 block transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange focus:ring-offset-2"
              title={paletteMainImage.title}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={paletteMainImage.thumb}
                alt={paletteMainImage.alt}
                title={paletteMainImage.title}
                width={300}
                height={300}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </button>

            <h3 className="mt-4 font-display text-[1.75rem] font-light" style={{ color: "#ffffff" }}>
              Pigmented Aniline Leather
              <span className="mt-1 block text-[1.6rem] text-gray-400 sm:inline sm:mt-0 sm:ml-1">
                → Fine Grain
              </span>
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={PALETTE_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center border-2 border-black px-5 py-3 font-sans text-base font-bold text-black transition hover:bg-black hover:text-white"
                style={{ backgroundColor: ACCENT_ORANGE }}
              >
                <i className="fa fa-download fa-2x mr-3" aria-hidden />
                Download Specs
              </a>
              <a
                href={PALETTE_YOUTUBE_URL}
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
              {paletteSwatches.map((swatch) => (
                <button
                  key={swatch.name}
                  type="button"
                  onClick={() => openSwatch(swatch)}
                  title={`Palette ${swatch.name}`}
                  className="block transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={swatch.thumb}
                    alt={`Leather Hide Upholstery Palette ${swatch.name} Thumb`}
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
            <div className="pt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={popImage.full}
                alt={popImage.alt}
                title={popImage.alt}
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
