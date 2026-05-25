"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LeatherSwatchPreviewModal, {
  type LeatherSwatchPreview,
} from "@/components/LeatherSwatchPreviewModal";
import {
  COLOR_FAMILIES,
  describeColorFamily,
  getColorFamilyTitle,
  type ColorFamily,
  type ColorFamilyId,
  type ColorFamilyLeather,
} from "@/lib/leatherColorSelector";

const brutalistPanelClassName =
  "border-[6px] border-black bg-releather-orange p-2 shadow-[10px_10px_0_0_#000000] sm:p-3";

const brutalistInnerClassName = "border-4 border-black bg-white p-5 sm:p-6";

const resultCardClassName =
  "group w-full border-4 border-black bg-white text-left shadow-[6px_6px_0_0_#000000] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none";

type LeatherColorSelectorProps = {
  headingId?: string;
  headingTag?: "h1" | "h2" | "h3";
};

export default function LeatherColorSelector({
  headingId = "shop-by-leather-color-heading",
  headingTag: HeadingTag = "h1",
}: LeatherColorSelectorProps) {
  const [selectedId, setSelectedId] = useState<ColorFamilyId | null>(null);
  const [previewLeather, setPreviewLeather] = useState<LeatherSwatchPreview | null>(null);

  const selectedFamily: ColorFamily | undefined = selectedId
    ? COLOR_FAMILIES.find((family) => family.id === selectedId)
    : undefined;

  const colorInsight = selectedId ? describeColorFamily(selectedId) : null;

  useEffect(() => {
    setPreviewLeather(null);
  }, [selectedId]);

  function openLeatherPreview(leather: ColorFamilyLeather) {
    setPreviewLeather({
      imageSrc: leather.image,
      imageAlt: leather.name,
      name: leather.name,
      collectionHref: leather.url,
    });
  }

  return (
    <section
      className="not-prose mx-auto my-10 max-w-[1280px] scroll-mt-24 bg-white"
      aria-labelledby={headingId}
    >
      <HeadingTag
        id={headingId}
        className="text-balance text-center font-display text-3xl font-black uppercase leading-none tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Shop by Leather Color
      </HeadingTag>

      <p className="mt-6 text-balance text-center font-display text-xl font-black uppercase tracking-tight text-releather-orange sm:text-2xl md:text-3xl">
        Browse upholstery leather by color family
      </p>

      <p className="mx-auto mt-6 max-w-4xl text-balance text-center font-sans text-base font-semibold leading-relaxed text-black sm:text-lg">
        Choose a color from the palette below to explore matching Italian upholstery
        leathers across our collections—distressed, colorful, designer, waxed, and
        more.
      </p>

      <article className={`mt-10 ${brutalistPanelClassName}`} aria-labelledby="color-palette-heading">
        <div className={brutalistInnerClassName}>
          <h2
            id="color-palette-heading"
            className="border-b-[6px] border-releather-orange pb-3 font-display text-2xl font-black uppercase leading-none tracking-tight text-black sm:text-3xl"
          >
            Color Palette
          </h2>

          <ul className="mt-6 grid list-none grid-cols-4 gap-3 p-0 sm:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8">
            {COLOR_FAMILIES.map((family) => {
              const isSelected = selectedId === family.id;
              return (
                <li key={family.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(family.id)}
                    aria-pressed={isSelected}
                    aria-label={`Browse ${family.label} leather colors`}
                    className={`group w-full border-4 bg-white p-1 text-left transition-transform hover:translate-x-[1px] hover:translate-y-[1px] ${
                      isSelected
                        ? "border-releather-orange shadow-[4px_4px_0_0_#000000]"
                        : "border-black shadow-[3px_3px_0_0_#000000] hover:border-releather-orange"
                    }`}
                  >
                    <span className="relative block aspect-square overflow-hidden border-2 border-black bg-white">
                      <Image
                        src={family.swatchImage}
                        alt=""
                        fill
                        unoptimized
                        sizes="115px"
                        className="object-cover"
                      />
                    </span>
                    <span
                      className={`mt-2 block text-center font-display text-[0.65rem] font-black uppercase leading-none tracking-tight sm:text-xs ${
                        isSelected ? "text-releather-orange" : "text-black"
                      }`}
                    >
                      {family.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {!selectedFamily ? (
            <p className="mt-6 mb-0 font-sans text-sm font-semibold leading-relaxed text-black sm:text-base">
              Select a color above to see matching leathers and designer tips.
            </p>
          ) : null}
        </div>
      </article>

      {selectedFamily && colorInsight ? (
        <>
          <div
            className="mt-8 border-4 border-black bg-releather-orange p-3 shadow-[6px_6px_0_0_#000000]"
            role="status"
            aria-live="polite"
          >
            <div className="flex flex-wrap items-start gap-4 border-2 border-black bg-white px-4 py-4 sm:px-6">
              <span className="relative h-16 w-16 shrink-0 overflow-hidden border-4 border-black shadow-[4px_4px_0_0_#000000]">
                <Image
                  src={selectedFamily.swatchImage}
                  alt=""
                  fill
                  unoptimized
                  sizes="64px"
                  className="object-cover"
                />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-black uppercase tracking-wide text-black sm:text-base">
                  Selected color
                </p>
                <p className="mt-1 font-display text-2xl font-black uppercase leading-tight text-releather-orange sm:text-3xl">
                  {getColorFamilyTitle(selectedFamily.label)}
                </p>
                <p className="mt-3 font-sans text-sm font-semibold leading-relaxed text-black sm:text-base">
                  {colorInsight.designerTip}
                </p>
              </div>
            </div>
          </div>

          <section className="mt-10" aria-labelledby="color-family-leathers-heading">
            <h2
              id="color-family-leathers-heading"
              className="border-b-[6px] border-releather-orange pb-3 text-center font-display text-2xl font-black uppercase leading-none tracking-tight text-black sm:text-3xl"
            >
              {selectedFamily.label} Leathers
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-center font-sans text-sm font-semibold leading-relaxed text-black sm:text-base">
              {selectedFamily.leathers.length} leather
              {selectedFamily.leathers.length === 1 ? "" : "s"} in this color family.
              Click a swatch to preview the leather and visit its collection.
            </p>

            <ul className="mt-6 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {selectedFamily.leathers.map((leather) => (
                <li key={`${leather.url}-${leather.name}-${leather.image}`}>
                  <button
                    type="button"
                    onClick={() => openLeatherPreview(leather)}
                    title={`Preview ${leather.name}`}
                    className={resultCardClassName}
                  >
                    <div className="relative aspect-[360/230] overflow-hidden border-b-4 border-black bg-white">
                      <Image
                        src={leather.image}
                        alt={leather.name}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        className="object-cover transition-transform group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-3">
                      <p className="mb-0 font-sans text-xs font-bold leading-snug text-black sm:text-sm">
                        {leather.name}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : null}

      <p className="mx-auto mt-8 max-w-3xl border-l-[6px] border-releather-orange bg-white px-4 py-3 text-center font-sans text-sm font-semibold leading-relaxed text-black sm:text-base">
        Leather colors can look different in person depending on finish, lighting, and
        hide variation. Order samples before committing to a full upholstery order.
      </p>

      <LeatherSwatchPreviewModal
        preview={previewLeather}
        onClose={() => setPreviewLeather(null)}
      />
    </section>
  );
}
