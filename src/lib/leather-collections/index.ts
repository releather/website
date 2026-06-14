import { distressedCollection } from "./distressed";
import { antiqueCollection } from "./antique";
import { vintageCollection } from "./vintage";
import type { LeatherCollectionDetail } from "./types";

export type { LeatherCollectionDetail, LeatherSpecs, LeatherSwatch, LeatherTextureSpec } from "./types";
export { calculateSampleTotalCents, formatSampleTotalUsd } from "./utils";
export { useLeatherSampleCheckout } from "./useLeatherSampleCheckout";
export { useCollectionSampleCart } from "./useCollectionSampleCart";
export type { SampleCartItem, SampleCartCheckoutItem } from "./sampleCartTypes";
export { SAMPLE_CART_STORAGE_KEY, SAMPLE_CART_MINIMIZED_KEY, sampleCartItemKey } from "./sampleCartTypes";
export { distressedCollection } from "./distressed";
export { antiqueCollection } from "./antique";
export { vintageCollection } from "./vintage";

/** Registry of collection detail configs keyed by URL slug. */
export const LEATHER_COLLECTION_DETAILS: Record<
  string,
  LeatherCollectionDetail
> = {
  [distressedCollection.slug]: distressedCollection,
  [antiqueCollection.slug]: antiqueCollection,
  [vintageCollection.slug]: vintageCollection,
};

export const LEATHER_COLLECTION_SLUGS = Object.keys(
  LEATHER_COLLECTION_DETAILS,
) as (keyof typeof LEATHER_COLLECTION_DETAILS)[];

export function getLeatherCollectionDetail(
  slug: string,
): LeatherCollectionDetail | undefined {
  return LEATHER_COLLECTION_DETAILS[slug];
}

export function getLeatherCollectionDetailOrThrow(
  slug: string,
): LeatherCollectionDetail {
  const collection = getLeatherCollectionDetail(slug);
  if (!collection) {
    throw new Error(`Unknown leather collection: ${slug}`);
  }
  return collection;
}

export function getAllLeatherCollectionDetails(): LeatherCollectionDetail[] {
  return Object.values(LEATHER_COLLECTION_DETAILS);
}
