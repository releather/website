"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { cloudinaryDisplayUrl } from "@/lib/cloudinary";
import { SAMPLE_CART_MINIMIZED_KEY } from "@/lib/leather-collections/sampleCartTypes";
import { useSampleCart } from "@/components/SampleCartProvider";

function loadMinimizedFromStorage(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(SAMPLE_CART_MINIMIZED_KEY) === "1";
  } catch {
    return false;
  }
}

function persistMinimized(minimized: boolean) {
  if (typeof window === "undefined") return;
  try {
    if (minimized) {
      window.localStorage.setItem(SAMPLE_CART_MINIMIZED_KEY, "1");
    } else {
      window.localStorage.removeItem(SAMPLE_CART_MINIMIZED_KEY);
    }
  } catch {
    // ignore
  }
}

export default function SampleCartBar() {
  const {
    items,
    itemCount,
    totalDisplay,
    isHydrated,
    isSubmitting,
    errorMessage,
    removeItem,
    clearCart,
    checkout,
    clearError,
  } = useSampleCart();

  const [expanded, setExpanded] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    setMinimized(loadMinimizedFromStorage());
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    persistMinimized(minimized);
  }, [isHydrated, minimized]);

  useEffect(() => {
    if (itemCount < 1) {
      setMinimized(false);
      setExpanded(false);
    }
  }, [itemCount]);

  const minimizeCart = useCallback(() => {
    setExpanded(false);
    setMinimized(true);
  }, []);

  const restoreCart = useCallback(() => {
    setMinimized(false);
  }, []);

  const groupedItems = useMemo(() => {
    const groups = new Map<string, typeof items>();
    for (const item of items) {
      const list = groups.get(item.collectionName) ?? [];
      list.push(item);
      groups.set(item.collectionName, list);
    }
    return Array.from(groups.entries());
  }, [items]);

  useEffect(() => {
    if (!isHydrated || itemCount < 1 || minimized) {
      document.body.style.paddingBottom = "";
      return;
    }

    document.body.style.paddingBottom = expanded ? "min(280px, 45vh)" : "88px";

    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [expanded, isHydrated, itemCount, minimized]);

  if (!isHydrated || itemCount < 1) {
    return null;
  }

  if (minimized) {
    return (
      <button
        type="button"
        onClick={restoreCart}
        className="fixed bottom-4 left-1/2 z-[10001] flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-3 border-4 border-black bg-releather-orange px-4 py-3 font-sans text-base font-bold text-black shadow-[6px_6px_0_#000] transition-colors hover:border-[#f8991d] hover:bg-black hover:text-releather-orange focus:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:gap-4 sm:px-5 sm:py-3.5 md:bottom-6 md:left-auto md:right-[calc(1.5rem+3rem+0.75rem)] md:max-w-none md:translate-x-0"
        aria-label={`Open sample cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
      >
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-black text-releather-orange sm:h-11 sm:w-11">
          <i className="fa fa-shopping-cart text-lg sm:text-xl" aria-hidden />
          <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full border-2 border-black bg-white px-1 text-[11px] font-bold text-black">
            {itemCount}
          </span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-2 text-sm font-bold sm:text-base">
          <i className="fa fa-chevron-up" aria-hidden />
          Show
        </span>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[10001]"
      role="region"
      aria-label="Leather sample cart"
    >
      <div className="mx-auto flex max-w-4xl justify-end px-4 sm:px-6">
        <button
          type="button"
          onClick={minimizeCart}
          disabled={isSubmitting}
          className="inline-flex min-h-[48px] items-center gap-2.5 border-4 border-b-0 border-black bg-releather-orange px-5 py-2.5 font-sans text-sm font-bold text-black shadow-[4px_-4px_0_#000] transition hover:bg-black hover:text-releather-orange disabled:cursor-not-allowed disabled:opacity-60 sm:min-h-[52px] sm:gap-3 sm:px-6 sm:text-base"
          aria-label="Hide sample cart footer"
        >
          <i className="fa fa-chevron-down text-lg" aria-hidden />
          Hide
        </button>
      </div>

      <div className="border-t-4 border-black bg-[#23262f] shadow-[0_-6px_0_#f8991d]">
        {errorMessage ? (
          <p
            className="border-b border-red-900/50 bg-red-950/40 px-4 py-2 text-center font-sans text-sm font-semibold text-red-300"
            role="alert"
          >
            {errorMessage}
            <button
              type="button"
              onClick={clearError}
              className="ml-2 underline hover:text-white"
            >
              Dismiss
            </button>
          </p>
        ) : null}

        {expanded ? (
          <div className="max-h-[45vh] overflow-y-auto border-b border-gray-600 px-4 py-3">
            <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
              <p className="font-sans text-sm font-bold uppercase tracking-wider text-releather-orange">
                Your sample selection
              </p>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="font-sans text-sm font-semibold text-gray-300 underline hover:text-white"
              >
                Collapse
              </button>
            </div>
            <ul className="mx-auto mt-3 max-w-4xl space-y-4">
              {groupedItems.map(([collectionName, collectionItems]) => (
                <li key={collectionName}>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-gray-400">
                    {collectionName}
                  </p>
                  <ul className="mt-2 space-y-2">
                    {collectionItems.map((item) => (
                      <li
                        key={`${item.collectionSlug}:${item.swatchId}`}
                        className="flex items-center gap-3 border border-white/15 bg-black/25 p-2"
                      >
                        <Image
                          unoptimized
                          src={cloudinaryDisplayUrl(item.thumbUrl)}
                          alt=""
                          width={40}
                          height={40}
                          className="h-10 w-10 shrink-0 border border-white/20 object-cover"
                        />
                        <span className="min-w-0 flex-1 font-sans text-sm font-medium text-white">
                          {item.swatchName}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            removeItem(item.collectionSlug, item.swatchId)
                          }
                          disabled={isSubmitting}
                          className="shrink-0 font-sans text-xs font-semibold text-gray-400 underline hover:text-white disabled:opacity-50"
                          aria-label={`Remove ${item.swatchName} sample`}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-3 max-w-4xl font-sans text-xs text-gray-400">
              $25 flat for 1–4 samples total, then $5 for each additional swatch
              across all collections.
            </p>
          </div>
        ) : null}

        <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 font-sans text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-releather-orange">
              Sample cart
            </p>
            <p className="mt-0.5 text-base sm:text-lg">
              <span className="font-semibold">{itemCount}</span>{" "}
              {itemCount === 1 ? "swatch" : "swatches"} ·{" "}
              <span className="font-display text-xl font-semibold text-releather-orange">
                {totalDisplay}
              </span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:justify-end">
            <button
              type="button"
              onClick={() => setExpanded((open) => !open)}
              disabled={isSubmitting}
              className="inline-flex min-h-[44px] items-center justify-center border-2 border-white/30 px-4 py-2 font-sans text-sm font-bold text-white transition hover:border-white hover:bg-white/10 disabled:opacity-50"
            >
              {expanded ? "Hide" : "Review"}
            </button>
            <button
              type="button"
              onClick={clearCart}
              disabled={isSubmitting}
              className="inline-flex min-h-[44px] items-center justify-center border-2 border-white/30 px-4 py-2 font-sans text-sm font-bold text-white transition hover:border-white hover:bg-white/10 disabled:opacity-50"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={checkout}
              disabled={isSubmitting}
              className="inline-flex min-h-[44px] min-w-[160px] flex-1 items-center justify-center gap-2 border-2 border-black bg-releather-orange px-5 py-2 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange disabled:cursor-not-allowed disabled:opacity-70 sm:flex-none sm:text-base"
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
      </div>
    </div>
  );
}
