"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const SEDONA_ORANGE = "#f8991d";

const sedonaMainImage = {
  thumb:
    "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_crop,g_south,r_max,w_300,y_257/v1636920011/leather/SEDONA_cashew_HI.jpg",
  full: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_crop,g_south,r_max,w_500,y_257/v1636920011/leather/SEDONA_cashew_HI.jpg",
  alt: "Close up of Two-Tone Leather",
  title: "Close up of Two-Tone Leather",
};

const sedonaSwatches = [
  { name: "Aqua", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Aqua,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_aqua_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_aqua_HI.jpg" },
  { name: "Bamboo", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Bamboo,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_bamboo_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_bamboo_HI.jpg" },
  { name: "Bayou", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Bayou,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_bayou_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_bayou_HI.jpg" },
  { name: "Black", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Black,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_black_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_black_HI.jpg" },
  { name: "Cashew", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Cashew,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_cashew_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_cashew_HI.jpg" },
  { name: "Cream", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Cream,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_cream_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_cream_HI.jpg" },
  { name: "Dove", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Dove,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_dove_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_dove_HI.jpg" },
  { name: "Garden", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Garden,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_garden_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_garden_HI.jpg" },
  { name: "Ivory", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Ivory,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_ivory_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_ivory_HI.jpg" },
  { name: "Molasses", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Molasses,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_molasses_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_molasses_HI.jpg" },
  { name: "Orange", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Orange,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_orange_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_orange_HI.jpg" },
  { name: "Pinto", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Pinto,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_pinto_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_pinto_HI.jpg" },
  { name: "Pomegranate", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Pomegranate,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_pomegranate_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_pomegranate_HI.jpg" },
  { name: "Titanium", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Titanium,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_titanium_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1636920011/leather/SEDONA_titanium_HI.jpg" },
] as const;

type Swatch = (typeof sedonaSwatches)[number];

type PopImage = { full: string; alt: string; name: string };

const SEDONA_PDF_URL =
  "https://res.cloudinary.com/releather-com/image/upload/v1654828624/leather/pdf/Sedona_-_Leather_for_Upholstery_-_Protected_Semi-Aniline_Leather_-_Two-Tone.pdf";
const SEDONA_YOUTUBE_URL = "https://www.youtube.com/watch?v=oxrChnT0Foc";

export default function SedonaProductBlock() {
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
      full: sedonaMainImage.full,
      alt: sedonaMainImage.alt,
      name: "Sedona – Two-Tone",
    });

  const openSwatch = (s: Swatch) =>
    setPopImage({
      full: s.full,
      alt: `Sedona ${s.name} leather`,
      name: `Sedona ${s.name}`,
    });

  return (
    <section
      id="sedona"
      className="mt-12 border-t-4 border-black pt-12"
      aria-labelledby="sedona-heading"
    >
      <div className="border-4 p-6 sm:p-8" style={{ backgroundColor: "#23262f", borderColor: SEDONA_ORANGE }}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Column 1: title, main image, subtitle, buttons */}
          <div>
            <h2
              id="sedona-heading"
              className="font-display text-4xl font-light tracking-tight"
              style={{ color: SEDONA_ORANGE, margin: "0 0 -15px 15px" }}
            >
              Sedona Leather
            </h2>

            <button
              type="button"
              onClick={openMain}
              className="mt-4 block transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange focus:ring-offset-2"
              title={sedonaMainImage.title}
            ><Image unoptimized
                src={sedonaMainImage.thumb}
                alt={sedonaMainImage.alt}
                title={sedonaMainImage.title}
                width={300}
                height={300}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </button>

            <h3 className="mt-4 font-display text-[1.75rem] font-light" style={{ color: "#ffffff" }}>
              Semi-Aniline Leather
              <span className="mt-1 block text-[1.6rem] sm:inline sm:mt-0 sm:ml-1 text-gray-400">
                → Two-Tone
              </span>
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={SEDONA_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center border-2 border-black px-5 py-3 font-sans text-base font-bold text-black transition hover:bg-black hover:text-white"
                style={{ backgroundColor: SEDONA_ORANGE }}
              >
                <i className="fa fa-download fa-2x mr-3" aria-hidden />
                Download Specs
              </a>
              <a
                href={SEDONA_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center border-2 border-black bg-red-600 px-5 py-3 font-sans text-base font-bold text-white transition hover:bg-black"
              >
                <i className="fab fa-youtube fa-2x mr-3" aria-hidden />
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* Column 2: swatches */}
          <div className="lg:border-l lg:border-gray-500 lg:pl-10">
            <h4 className="font-display text-xl font-normal" style={{ color: SEDONA_ORANGE }}>
              Color Swatches
            </h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {sedonaSwatches.map((swatch) => (
                <button
                  key={swatch.name}
                  type="button"
                  onClick={() => openSwatch(swatch)}
                  title={`Sedona ${swatch.name}`}
                  className="block transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                ><Image unoptimized
                    src={swatch.thumb}
                    alt={`Leather Hide Upholstery Sedona ${swatch.name} Thumb`}
                    width={90}
                    height={90}
                    loading="lazy"
                    className="h-[90px] w-[90px] border-2 object-cover"
                  style={{ borderColor: SEDONA_ORANGE }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brutalist image pop (same as LeatherInfo on /services/leather-upholstery) */}
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
