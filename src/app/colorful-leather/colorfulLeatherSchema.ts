import { colorfulCollection } from "@/lib/leather-collections";
import { makeLeatherCollectionPageSchemas } from "@/lib/leather-collections/makeLeatherCollectionPageSchema";

const schemas = makeLeatherCollectionPageSchemas({
  slug: "colorful-leather",
  collectionDetail: colorfulCollection,
  skuPrefix: "RL-COLORFUL",
  collectionSku: "RL-COLORFUL-COLLECTION",
  mpn: "COLORFUL-UPHOLSTERY-IT",
  material: "Italian protected aniline leather hide",
  countryOfOrigin: "Italy",
  sampleOfferName: "Colorful leather swatch",
  quoteOfferDescription:
    "Request a leather material quote for colorful upholstery hides.",
  itemListDescription:
    "Colorful upholstery leather color swatches available from ReLeather.",
});

export const colorfulLeatherBreadcrumbSchema = schemas.breadcrumbSchema;
export const colorfulLeatherWebPageSchema = schemas.webPageSchema;
export const colorfulLeatherProductSchema = schemas.productSchema;
export const colorfulLeatherColorItemListSchema = schemas.colorItemListSchema;
export const colorfulLeatherVideoSchema = schemas.videoSchema;
