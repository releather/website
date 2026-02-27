"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const ACCENT_ORANGE = "#f8991d";
const BLOCK_BG = "#23262f";

const concertoMainImage = {
  thumb:
    "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_crop,g_south,r_max,w_300,y_257/v1639529981/leather/Concerto_Saddle_HI.jpg",
  full: "https://res.cloudinary.com/releather-com/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_crop,g_south,r_max,w_500,y_257/v1639529981/leather/Concerto_Saddle_HI.jpg",
  alt: "Close up of Aniline Distressed Leather",
  title: "Close up of Aniline Distressed Leather",
};

const concertoSwatches = [
  { name: "Chocolate", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Chocolate,co_rgb:ffffff,y_10/v1611289193/thumb/Concerto_Chocolate_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1639529300/leather/Concerto_Chocolate_HI.jpg" },
  { name: "Dark Brown", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Dark%20Brown,co_rgb:ffffff,y_10/v1611289193/thumb/Concerto_Dark-Brown_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1639529300/leather/Concerto_Dark-Brown_HI.jpg" },
  { name: "Mushroom", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Mushroom,co_rgb:ffffff,y_10/v1611289193/thumb/Concerto_Mushroom_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1639529300/leather/Concerto_Mushroom_HI.jpg" },
  { name: "Oatmeal", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Oatmeal,co_rgb:ffffff,y_10/v1611289193/thumb/Concerto_Oatmeal_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1639529300/leather/Concerto_Oatmeal_HI.jpg" },
  { name: "Saddle", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Saddle,co_rgb:ffffff,y_10/v1611289193/thumb/Concerto_Saddle_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1639529981/leather/Concerto_Saddle_HI.jpg" },
  { name: "Smoke", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Smoke,co_rgb:ffffff,y_10/v1611289193/thumb/Concerto_Smoke_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1639529300/leather/Concerto_Smoke_HI.jpg" },
  { name: "Whiskey", thumb: "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_12_style_light:Whiskey,co_rgb:ffffff,y_10/v1611289193/thumb/Concerto_Whiskey_thumb.jpg", full: "https://res.cloudinary.com/releather-com/image/upload/v1639529300/leather/Concerto_Whiskey_HI.jpg" },
] as const;

type Swatch = (typeof concertoSwatches)[number];

type PopImage = { full: string; alt: string; name: string };

const CONCERTO_PDF_URL =
  "https://res.cloudinary.com/releather-com/image/upload/v1654828623/leather/pdf/Concerto_-_Leather_for_Upholstery_-_Protected_Pigmented_Aniline_Leather_-_Fine_Grain.pdf";
const CONCERTO_YOUTUBE_URL = "https://www.youtube.com/watch?v=L_03JUcQRBk";

export default function ConcertoProductBlock() {
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
      full: concertoMainImage.full,
      alt: concertoMainImage.alt,
      name: "Concerto – Distressed",
    });

  const openSwatch = (s: Swatch) =>
    setPopImage({
      full: s.full,
      alt: `Concerto ${s.name} leather`,
      name: `Concerto ${s.name}`,
    });

  return (
    <section
      id="concerto"
      className="mt-12 border-t-4 border-black pt-12"
      aria-labelledby="concerto-heading"
    >
      <div className="border-4 p-6 sm:p-8" style={{ backgroundColor: BLOCK_BG, borderColor: ACCENT_ORANGE }}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2
              id="concerto-heading"
              className="font-display text-4xl font-light tracking-tight"
              style={{ color: ACCENT_ORANGE, margin: "0 0 -15px 15px" }}
            >
              Concerto Leather
            </h2>

            <button
              type="button"
              onClick={openMain}
              className="mt-4 block transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange focus:ring-offset-2"
              title={concertoMainImage.title}
            ><Image unoptimized
                src={concertoMainImage.thumb}
                alt={concertoMainImage.alt}
                title={concertoMainImage.title}
                width={300}
                height={300}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </button>

            <h3 className="mt-4 font-display text-[1.75rem] font-light" style={{ color: "#ffffff" }}>
              Wax Pull Up Aniline Leather
              <span className="mt-1 block text-[1.6rem] text-gray-400 sm:inline sm:mt-0 sm:ml-1">
                → Distressed
              </span>
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={CONCERTO_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center border-2 border-black px-5 py-3 font-sans text-base font-bold text-black transition hover:bg-black hover:text-white"
                style={{ backgroundColor: ACCENT_ORANGE }}
              >
                <i className="fa fa-download fa-2x mr-3" aria-hidden />
                Download Specs
              </a>
              <a
                href={CONCERTO_YOUTUBE_URL}
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
              {concertoSwatches.map((swatch) => (
                <button
                  key={swatch.name}
                  type="button"
                  onClick={() => openSwatch(swatch)}
                  title={`Concerto ${swatch.name}`}
                  className="block transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                ><Image unoptimized
                    src={swatch.thumb}
                    alt={`Leather Hide Upholstery Concerto ${swatch.name} Thumb`}
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
