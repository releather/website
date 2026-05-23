"use client";

import { useCallback, useMemo } from "react";
import { calculateSampleTotalCents, formatSampleTotalUsd } from "@/lib/leather-collections";
import type { LeatherCollectionDetail } from "@/lib/leather-collections/types";
import { useSampleCart } from "@/components/SampleCartProvider";

/**
 * Per-collection view of the global sample cart (legacy hook shape for page components).
 */
export function useLeatherSampleCheckout(collection: LeatherCollectionDetail) {
  const cart = useSampleCart();

  const selectedIds = useMemo(
    () =>
      new Set(
        cart.items
          .filter((item) => item.collectionSlug === collection.slug)
          .map((item) => item.swatchId),
      ),
    [cart.items, collection.slug],
  );

  const selectedCount = selectedIds.size;
  const totalCents = useMemo(
    () => calculateSampleTotalCents(cart.itemCount),
    [cart.itemCount],
  );
  const totalDisplay = formatSampleTotalUsd(totalCents);

  const isSelected = useCallback(
    (swatchId: string) => cart.isInCart(collection.slug, swatchId),
    [cart, collection.slug],
  );

  const toggleSwatch = useCallback(
    (swatchId: string) => {
      const swatch = collection.swatches.find((s) => s.id === swatchId);
      if (!swatch) return;
      cart.toggleItem({
        collectionSlug: collection.slug,
        collectionName: collection.name,
        swatchId: swatch.id,
        swatchName: swatch.name,
        thumbUrl: swatch.thumbUrl,
      });
    },
    [cart, collection.name, collection.slug, collection.swatches],
  );

  return {
    selectedIds,
    selectedCount,
    totalCents,
    totalDisplay,
    cartTotalCount: cart.itemCount,
    cartTotalDisplay: cart.totalDisplay,
    isSubmitting: cart.isSubmitting,
    errorMessage: cart.errorMessage,
    isSelected,
    toggleSwatch,
    handleOrderSamples: cart.checkout,
    clearCart: cart.clearCart,
  };
}

export type LeatherSampleCheckoutState = ReturnType<
  typeof useLeatherSampleCheckout
>;

export { formatSampleTotalUsd };
