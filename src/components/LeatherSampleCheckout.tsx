"use client";

import Image from "next/image";
import { cloudinaryDisplayUrl } from "@/lib/cloudinary";
import type { LeatherCollectionDetail } from "@/lib/leather-collections/types";
import {
  useLeatherSampleCheckout,
  type LeatherSampleCheckoutState,
} from "@/lib/leather-collections/useLeatherSampleCheckout";

type LeatherSampleCheckoutBarProps = {
  collection: LeatherCollectionDetail;
  checkout: LeatherSampleCheckoutState;
  /** Show pricing copy above the sticky bar (default true). */
  showPricingNote?: boolean;
  className?: string;
};

export default function LeatherSampleCheckoutBar({
  collection,
  checkout,
  showPricingNote = true,
  className = "",
}: LeatherSampleCheckoutBarProps) {
  const {
    selectedCount,
    totalDisplay,
    isSubmitting,
    errorMessage,
    handleOrderSamples,
  } = checkout;

  return (
    <div className={className}>
      {showPricingNote ? (
        <p className="mt-4 font-sans text-sm leading-relaxed text-gray-400">
          <strong className="font-semibold text-white">$25 flat for 1–4 samples</strong>
          , then <strong className="font-semibold text-white">$5</strong> for each
          additional {collection.name} swatch.
        </p>
      ) : null}

      {errorMessage ? (
        <p
          className="mt-4 font-sans text-sm font-semibold text-red-400"
          role="alert"
        >
          {errorMessage}
        </p>
      ) : null}

      <div
        className={`transition-all duration-300 ${
          selectedCount > 0
            ? "pointer-events-auto mt-4 translate-y-0 opacity-100"
            : "pointer-events-none mt-0 max-h-0 overflow-hidden opacity-0"
        }`}
        aria-hidden={selectedCount < 1}
      >
        <div className="sticky bottom-4 z-20 flex flex-col gap-3 border-4 border-black bg-[#23262f] p-4 shadow-[6px_6px_0_#f8991d] sm:flex-row sm:items-center sm:justify-between">
          <div className="font-sans text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-releather-orange">
              Sample order
            </p>
            <p className="mt-1 text-base sm:text-lg">
              <span className="font-semibold">{selectedCount}</span>{" "}
              {selectedCount === 1 ? "swatch" : "swatches"} selected ·{" "}
              <span className="font-display text-xl font-semibold text-releather-orange">
                {totalDisplay}
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={handleOrderSamples}
            disabled={isSubmitting || selectedCount < 1}
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 border-2 border-black bg-releather-orange px-6 py-3 font-sans text-base font-bold text-black transition hover:bg-black hover:text-releather-orange disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[200px]"
          >
            {isSubmitting ? (
              <>
                <i className="fa fa-spinner fa-spin" aria-hidden />
                Redirecting…
              </>
            ) : (
              <>
                <i className="fa fa-lock" aria-hidden />
                Order Samples
              </>
            )}
          </button>
        </div>
      </div>

      {selectedCount > 0 ? <div className="h-2" aria-hidden /> : null}
    </div>
  );
}

type LeatherSampleCheckoutGridProps = {
  collection: LeatherCollectionDetail;
  checkout: LeatherSampleCheckoutState;
};

/** Standalone swatch grid with checkboxes — for collection pages without a custom hero grid. */
export function LeatherSampleCheckoutGrid({
  collection,
  checkout,
}: LeatherSampleCheckoutGridProps) {
  const { isSelected, toggleSwatch, isSubmitting } = checkout;

  return (
    <div
      className={`grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${
        isSubmitting ? "pointer-events-none opacity-60" : ""
      }`}
      role="group"
      aria-label={`${collection.name} sample swatches`}
    >
      {collection.swatches.map((swatch) => {
        const selected = isSelected(swatch.id);
        const inputId = `sample-swatch-${collection.slug}-${swatch.id}`;

        return (
          <label
            key={swatch.id}
            htmlFor={inputId}
            className={`relative cursor-pointer overflow-hidden border-2 bg-black/20 transition focus-within:ring-2 focus-within:ring-releather-orange focus-within:ring-offset-2 focus-within:ring-offset-[#23262f] ${
              selected
                ? "border-releather-orange shadow-[0_0_0_1px_#f8991d]"
                : "border-white/20 hover:border-white/50"
            }`}
          >
            <input
              id={inputId}
              type="checkbox"
              className="sr-only"
              checked={selected}
              disabled={isSubmitting}
              onChange={() => toggleSwatch(swatch.id)}
            />
            <Image
              unoptimized
              src={cloudinaryDisplayUrl(swatch.thumbUrl)}
              alt={`${collection.name} ${swatch.name} sample swatch`}
              width={90}
              height={90}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
            <span className="flex items-center justify-between gap-2 border-t border-white/15 bg-black/50 px-2 py-1.5">
              <span className="font-sans text-xs font-semibold text-white">
                {swatch.name}
              </span>
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center border ${
                  selected
                    ? "border-releather-orange bg-releather-orange text-black"
                    : "border-white/40 bg-transparent"
                }`}
                aria-hidden
              >
                {selected ? <i className="fa fa-check text-[10px]" /> : null}
              </span>
            </span>
          </label>
        );
      })}
    </div>
  );
}

type LeatherSampleCheckoutSectionProps = {
  collection: LeatherCollectionDetail;
};

/** Full sample section with its own grid — for generic collection pages. */
export function LeatherSampleCheckoutSection({
  collection,
}: LeatherSampleCheckoutSectionProps) {
  const checkout = useLeatherSampleCheckout(collection);

  return (
    <section
      id="order-samples"
      className="relative scroll-mt-24 border-t border-gray-500 pt-8"
      aria-labelledby="order-samples-heading"
    >
      <header className="mb-6">
        <h3
          id="order-samples-heading"
          className="font-display text-xl font-normal text-releather-orange sm:text-2xl"
        >
          Order Leather Samples
        </h3>
        <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-gray-300 sm:text-base">
          Select the {collection.name} colors you want to evaluate. Pricing is based on
          your total sample count across all collections:{" "}
          <strong className="font-semibold text-white">
            $25 flat for 1–4 samples
          </strong>
          , then <strong className="font-semibold text-white">$5</strong> for each
          additional swatch. Use the sample cart at the bottom of the page to checkout.
        </p>
      </header>

      <LeatherSampleCheckoutGrid collection={collection} checkout={checkout} />
    </section>
  );
}
