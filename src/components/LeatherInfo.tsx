"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type LeatherInfoLeather = {
  name: string;
  thumb: string;
  full: string;
  alt: string;
  /** Optional link (e.g. /types-of-leather#Pigmented) for accessibility / SEO */
  href?: string;
};

export type LeatherInfoType = {
  /** Column title (e.g. "Unprotected Aniline") */
  title: string;
  /** Body text */
  text: React.ReactNode;
  /** Leather images that open in popup on click */
  leathers: LeatherInfoLeather[];
};

export type LeatherInfoProps = {
  /** Section heading (e.g. "Leather Identification") */
  heading?: string;
  /** Optional subheading with arrow */
  subheading?: string;
  /** Intro paragraph */
  intro?: React.ReactNode;
  /** Leather type rows (title + text + images) */
  types: LeatherInfoType[];
  id?: string;
  /** Optional square thumbnail size in px (e.g. 250 for 250×250). Default uses 115×100. */
  thumbSize?: number;
  /** Optional max height for the popup image (e.g. "90vh"). Default "75vh". */
  popupImageMaxHeight?: string;
};

export default function LeatherInfo({
  heading,
  subheading,
  intro,
  types,
  id,
  thumbSize,
  popupImageMaxHeight = "75vh",
}: LeatherInfoProps) {
  const [selectedLeather, setSelectedLeather] =
    useState<LeatherInfoLeather | null>(null);

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
    <section
      id={id}
      className="mt-12 border-t-4 border-black pt-12"
      aria-labelledby={heading && id ? `${id}-heading` : undefined}
    >
      {(heading || subheading) && (
        <header className="mb-8 text-center">
          {heading && (
            <div className="inline-block rounded-none border-4 border-black bg-releather-orange px-6 py-4 text-center sm:px-8 sm:py-5">
              <h2
                id={id ? `${id}-heading` : undefined}
                className="flex items-center justify-center gap-2 font-display text-2xl font-black uppercase leading-tight tracking-tighter text-black sm:text-3xl"
              >
                <i className="fa fa-check-square text-black" aria-hidden />
                {heading}
              </h2>
            </div>
          )}
          {subheading && (
            <p className="mt-4 font-sans text-xl font-bold leading-snug text-gray-800">
              → {subheading}
            </p>
          )}
        </header>
      )}

      {intro != null && (
        <div className="mb-8 font-sans text-base leading-relaxed text-gray-800 [&_p]:mt-3 [&_p]:first:mt-0">
          {intro}
        </div>
      )}

      <div className="space-y-10">
        {types.map((type, typeIndex) => (
          <div
            key={typeIndex}
            className="grid grid-cols-1 gap-6 border-4 border-black bg-white p-5 lg:grid-cols-[1fr_auto] lg:items-start"
          >
            <div className="min-w-0">
              <h4 className="font-display text-xl font-normal leading-tight text-gray-900">
                {type.title} Leather
              </h4>
              <div className="mt-3 font-sans text-base leading-relaxed text-gray-800 [&_em]:italic [&_strong]:font-bold [&_strong]:text-black">
                {type.text}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              {type.leathers.map((leather) => (
                <button
                  key={leather.name}
                  type="button"
                  onClick={() => setSelectedLeather(leather)}
                  title={leather.name}
                  className="block transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                >
                  <Image unoptimized
                    src={leather.thumb}
                    alt={leather.alt}
                    title={leather.alt}
                    width={thumbSize ?? 115}
                    height={thumbSize ?? 100}
                    loading="lazy"
                    className="rounded-lg border-2 border-black object-cover"
                    style={
                      thumbSize != null
                        ? { width: thumbSize, height: thumbSize }
                        : { width: 115, height: 100 }
                    }
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedLeather && (
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
              <Image unoptimized
                src={selectedLeather.full}
                alt={selectedLeather.alt}
                title={selectedLeather.alt}
                width={1200}
                height={900}
                className="w-auto max-w-full object-contain"
                style={{ maxHeight: popupImageMaxHeight }}
              />
            </div>
            <p className="mt-3 text-center font-display text-lg font-bold uppercase tracking-tight text-black">
              {selectedLeather.name}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
