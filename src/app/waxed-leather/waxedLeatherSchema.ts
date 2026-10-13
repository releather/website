import { waxedCollection } from "@/lib/leather-collections";
import { makeLeatherCollectionPageSchemas } from "@/lib/leather-collections/makeLeatherCollectionPageSchema";

const schemas = makeLeatherCollectionPageSchemas({
  slug: "waxed-leather",
  collectionDetail: waxedCollection,
  skuPrefix: "RL-WAXED",
  collectionSku: "RL-WAXED-COLLECTION",
  mpn: "WAXED-UPHOLSTERY-IT",
  material: "Italian waxed semi-aniline leather hide",
  countryOfOrigin: "Italy",
  sampleOfferName: "Waxed leather swatch sample",
  quoteOfferDescription:
    "Request a leather material quote for waxed upholstery hides.",
  itemListDescription:
    "Waxed upholstery leather color swatches available from ReLeather.",
});

export const waxedLeatherBreadcrumbSchema = schemas.breadcrumbSchema;
export const waxedLeatherWebPageSchema = schemas.webPageSchema;
export const waxedLeatherProductSchema = schemas.productSchema;
export const waxedLeatherColorItemListSchema = schemas.colorItemListSchema;
export const waxedLeatherVideoSchema = schemas.videoSchema;
