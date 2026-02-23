"use client";

import { useCallback, useEffect, useState } from "react";

const CLOUDINARY_BASE =
  "https://res.cloudinary.com/releather-com/image/upload";
const FINISH_IMAGES_BASE = `${CLOUDINARY_BASE}/c_scale,w_300/l_,l_text:montserrat_30_style_light`;

const finishes = [
  {
    name: "Untreated Finish",
    src: `${FINISH_IMAGES_BASE}:Untreated,co_rgb:ffffff/v1653279850/before-after/leather-dyeing-untreated-finish.jpg`,
    alt: "Untreated Leather for Leather Restoration",
    description: (
      <>
        <strong>Untreated Finish</strong> has been left in its natural state.
        The following 3 finish treatments were applied to the surface using
        this leather. Each finish creates its own unique appearance.
      </>
    ),
  },
  {
    name: "Natural Finish",
    src: `${FINISH_IMAGES_BASE}:Natural%20Finish,co_rgb:ffffff/v1653279850/before-after/leather-dyeing-natural-finish.jpg`,
    alt: "Natural Finish Coating for Leather Restoration",
    description: (
      <>
        <strong>Natural Finish</strong> was applied to the surface of this
        leather sample. This finish creates a subtle sheen look, appealing for
        those who want something neither too shiny nor dull, but just right!
      </>
    ),
  },
  {
    name: "Glossy Finish",
    src: `${FINISH_IMAGES_BASE}:Glossy%20Finish,co_rgb:ffffff/v1653279850/before-after/leather-dyeing-glossy-finish.jpg`,
    alt: "Glossy Finish Coating for Leather Restoration",
    description: (
      <>
        <strong>Glossy Finish</strong> was applied to the surface of this
        leather, creating a shiny, waxy appearance. The finish is a sleek and
        smooth gloss. This shine will enrich your leather.
      </>
    ),
  },
  {
    name: "Matte Finish",
    src: `${FINISH_IMAGES_BASE}:Matte%20Finish,co_rgb:ffffff/v1653279850/before-after/leather-dyeing-matte-finish.jpg`,
    alt: "Matte Finish Coating for Leather Restoration",
    description: (
      <>
        <strong>Matte Finish</strong> was applied to the surface of this
        leather. This finish produces a natural-looking, uncoated leather
        surface. It&apos;s perfect for those who want their leather to be
        subtle.
      </>
    ),
  },
];

export default function LeatherRestorationFinishes() {
  const [selected, setSelected] = useState<{
    name: string;
    src: string;
    alt: string;
  } | null>(null);

  const closeModal = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (selected) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selected, closeModal]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {finishes.map((finish) => (
          <div
            key={finish.name}
            className="flex flex-col border-4 border-black bg-white p-4"
          >
            <h4 className="font-display text-xl font-normal leading-tight text-gray-900">
              {finish.name}
            </h4>
            <button
              type="button"
              onClick={() =>
                setSelected({
                  name: finish.name,
                  src: finish.src,
                  alt: finish.alt,
                })
              }
              title={finish.alt}
              className="mt-3 block w-full transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={finish.src}
                alt={finish.alt}
                loading="lazy"
                className="w-full border-2 border-black object-cover"
              />
            </button>
            <p className="mt-3 font-sans text-base leading-relaxed text-gray-800">
              {finish.description}
            </p>
          </div>
        ))}
      </div>

      {selected && (
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
          aria-label="Finish preview"
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
                src={selected.src}
                alt={selected.alt}
                title={selected.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            <p className="mt-3 text-center font-display text-lg font-bold uppercase tracking-tight text-black">
              {selected.name}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
