export type SampleCartItem = {
  collectionSlug: string;
  collectionName: string;
  swatchId: string;
  swatchName: string;
  thumbUrl: string;
};

export type SampleCartCheckoutItem = {
  collectionSlug: string;
  swatchId: string;
};

export const SAMPLE_CART_STORAGE_KEY = "releather-leather-sample-cart";
export const SAMPLE_CART_MINIMIZED_KEY = "releather-leather-sample-cart-minimized";

export function sampleCartKey(collectionSlug: string, swatchId: string): string {
  return `${collectionSlug}:${swatchId}`;
}

export function sampleCartItemKey(item: SampleCartCheckoutItem): string {
  return sampleCartKey(item.collectionSlug, item.swatchId);
}
