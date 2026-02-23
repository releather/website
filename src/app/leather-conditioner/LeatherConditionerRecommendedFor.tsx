"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const leatherConditionerRecommended = [
  {
    name: "Aniline",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Aniline,co_rgb:ffffff,y_10/v1611289193/thumb/Concerto_Saddle_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Aniline,co_rgb:ffffff,y_10/v1639529981/leather/Concerto_Saddle_HI.jpg",
    alt: "Leather Cleaning recommended for Aniline Leather",
  },
  {
    name: "Semi-Aniline",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Semi-Aniline,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_Cashew_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Semi-Aniline,co_rgb:ffffff,y_10/v1636920011/leather/SEDONA_cashew_HI.jpg",
    alt: "Leather Restoration recommended for Pure Semi-Aniline Leather",
  },
  {
    name: "Pigmented",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Pigmented,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_tan_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Pigmented,co_rgb:ffffff,y_10/v1638909291/leather/PALETTE_tan_HI.jpg",
    alt: "Leather Restoration recommended for Pigmented Leather",
  },
] as const;

type LeatherOption = (typeof leatherConditionerRecommended)[number];

export default function LeatherConditionerRecommendedFor() {
  const [selectedLeather, setSelectedLeather] = useState<LeatherOption | null>(null);

  const closeModal = useCallback(() => setSelectedLeather(null), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedLeather) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedLeather, closeModal]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        {leatherConditionerRecommended.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setSelectedLeather(item)}
            title={item.alt}
            className="inline-block transition opacity-90 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange focus:ring-offset-2 focus:ring-offset-white"
          ><Image
              src={item.thumb}
              alt={item.alt}
              width={100}
              height={100}
              loading="lazy"
              className="h-[100px] w-[100px] object-cover"
            />
          </button>
        ))}
      </div>

      {selectedLeather && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center px-6 py-10 backdrop-blur-sm"
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
            className="relative w-fit max-w-[95vw] overflow-visible rounded-2xl border-2 border-[#f8991d] bg-white p-5 pb-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full text-xl font-bold transition"
              style={{ backgroundColor: "#f8991d", color: "#000" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#000";
                e.currentTarget.style.color = "#f8991d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f8991d";
                e.currentTarget.style.color = "#000";
              }}
              aria-label="Close"
            >
              ×
            </button>
            <div className="pt-2"><Image
                src={selectedLeather.full}
                alt={selectedLeather.alt}
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
              />
            </div>
            <p className="mt-3 text-center font-sans text-base font-bold text-black">
              {selectedLeather.name}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
