"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  UPHOLSTERY_COLLECTION_FILTERS,
  collectionCompositeImageUrl,
  collectionsForUpholsteryFilter,
  upholsteryLeatherCollectionHref,
  type UpholsteryCollectionFilterId,
} from "@/lib/upholsteryLeatherCollections";

type UpholsteryLeatherCollectionGridProps = {
  /** Anchor target for in-page links (e.g. /leather-for-upholstery#collections) */
  id?: string;
  className?: string;
  /**
   * Tighter grid and smaller thumbs for the intro hero column (~half page width).
   */
  compact?: boolean;
};

export default function UpholsteryLeatherCollectionGrid({
  id,
  className = "",
  compact = false,
}: UpholsteryLeatherCollectionGridProps) {
  const [filterId, setFilterId] =
    useState<UpholsteryCollectionFilterId>("all");
  const [filterOpen, setFilterOpen] = useState(false);
  const filterWrapRef = useRef<HTMLDivElement>(null);

  const activeFilterLabel = useMemo(
    () =>
      UPHOLSTERY_COLLECTION_FILTERS.find((f) => f.id === filterId)?.label ??
      "All",
    [filterId],
  );

  const visible = useMemo(
    () => collectionsForUpholsteryFilter(filterId),
    [filterId],
  );

  useEffect(() => {
    if (!filterOpen) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const node = filterWrapRef.current;
      if (node && !node.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFilterOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [filterOpen]);

  const thumbWidth = compact ? 220 : 300;
  const gridClass = compact
    ? "grid list-none grid-cols-2 gap-2 p-0 md:grid-cols-3"
    : "grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-4";

  return (
    <div id={id} className={`scroll-mt-24 ${className}`.trim()}>
      <div className="mb-3 flex w-full flex-wrap items-center gap-2 sm:gap-3">
        <p
          className={`mb-0 shrink-0 font-display font-normal tracking-tight text-black ${
            compact ? "text-base sm:text-lg" : "text-lg sm:text-xl"
          }`}
        >
          Browse by collection
        </p>
        <div ref={filterWrapRef} className="relative shrink-0">
          <button
            type="button"
            onClick={() => setFilterOpen((o) => !o)}
            aria-expanded={filterOpen}
            aria-haspopup="listbox"
            aria-controls="upholstery-collection-filter-menu"
            aria-label={`Filter collections. Current: ${activeFilterLabel}`}
            className="inline-flex h-8 w-8 items-center justify-center border-2 border-black bg-white text-black transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-releather-orange sm:h-9 sm:w-9"
          >
            <i className="fa fa-filter text-sm sm:text-base" aria-hidden />
          </button>
          {filterOpen ? (
            <ul
              id="upholstery-collection-filter-menu"
              role="listbox"
              aria-label="Collection filters"
              className="absolute left-0 top-full z-30 mt-1 min-w-[11rem] border-2 border-black bg-white py-0 shadow-md"
            >
              {UPHOLSTERY_COLLECTION_FILTERS.map((o) => (
                <li
                  key={o.id}
                  role="option"
                  aria-selected={filterId === o.id}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    type="button"
                    className={`w-full px-3 py-2 text-left font-sans text-sm font-medium transition hover:bg-gray-100 ${
                      filterId === o.id ? "bg-gray-100 text-black" : "text-black"
                    }`}
                    onClick={() => {
                      setFilterId(o.id);
                      setFilterOpen(false);
                    }}
                  >
                    {o.label}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <ul className={gridClass}>
        {visible.map((c) => {
          const thumb = collectionCompositeImageUrl(
            c.overlayText,
            c.imageFile,
            thumbWidth,
          );
          return (
            <li key={c.slug} className="min-w-0">
              <Link
                href={upholsteryLeatherCollectionHref(c.slug)}
                className="group block border-4 border-black bg-white transition-colors hover:bg-gray-50"
                title={`${c.name} — upholstery leather collection`}
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden border-b-4 border-black">
                  <Image
                    unoptimized
                    src={thumb}
                    alt={`${c.name} — Italian upholstery leather thumbnail`}
                    title={c.name}
                    width={thumbWidth}
                    height={Math.round((thumbWidth * 2) / 3)}
                    className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
                    sizes={
                      compact
                        ? "(max-width: 768px) 45vw, 28vw"
                        : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    }
                  />
                </div>
                <span
                  className={`block px-1.5 py-2 text-center font-sans font-semibold leading-snug text-black sm:px-2 ${
                    compact
                      ? "text-[11px] leading-tight sm:text-xs"
                      : "text-sm sm:text-base"
                  }`}
                >
                  {c.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
