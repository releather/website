"use client";

import { useCallback } from "react";
import type { LeatherCollectionDetail, LeatherSwatch } from "@/lib/leather-collections/types";
import { useSampleCart } from "@/components/SampleCartProvider";

/** Collection-page helper: read/write swatches in the global sample cart. */
export function useCollectionSampleCart(collection: LeatherCollectionDetail) {
  const cart = useSampleCart();

  const isSelected = useCallback(
    (swatchId: string) => cart.isInCart(collection.slug, swatchId),
    [cart, collection.slug],
  );

  const toggleSwatch = useCallback(
    (swatch: LeatherSwatch) => {
      cart.toggleItem({
        collectionSlug: collection.slug,
        collectionName: collection.name,
        swatchId: swatch.id,
        swatchName: swatch.name,
        thumbUrl: swatch.thumbUrl,
      });
    },
    [cart, collection.name, collection.slug],
  );

  return {
    isSelected,
    toggleSwatch,
    isSubmitting: cart.isSubmitting,
    cartItemCount: cart.itemCount,
    cartTotalDisplay: cart.totalDisplay,
  };
}
