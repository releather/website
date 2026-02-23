"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { leatherDyeingColors } from "@/app/services/leatherDyeingColors";

type ColorOption = (typeof leatherDyeingColors)[number];

export type ColorOptionsProps = {
  /** Optional id for the wrapper (e.g. for anchor links) */
  id?: string;
  /** Optional heading text */
  heading?: string;
};

export default function ColorOptions({
  id,
  heading = "Color options",
}: ColorOptionsProps) {
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);

  const closeModal = useCallback(() => setSelectedColor(null), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedColor) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedColor, closeModal]);

  return (
    <div id={id}>
      <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-500">
        {heading}
      </h3>
      <div className="mt-4 flex flex-wrap gap-0.5">
        {leatherDyeingColors.map((color) => (
            <button
              key={color.name}
              type="button"
              onClick={() => setSelectedColor(color)}
              className="block transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
              title={color.name}
            >
              <Image
                src={color.thumb}
                alt={color.name}
                width={100}
                height={100}
                loading="lazy"
                className="h-[100px] w-[100px] object-cover"
              />
            </button>
          ))}
      </div>

      {selectedColor && (
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
          aria-label="Color preview"
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
            <div className="pt-2">
              <Image
                src={selectedColor.full}
                alt={selectedColor.name}
                width={800}
                height={600}
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
              />
            </div>
            <p className="mt-3 text-center font-sans text-base font-bold text-black">
              {selectedColor.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
