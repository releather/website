import { vintageCollection } from "@/lib/leather-collections";
import { makeLeatherCollectionPageSchemas } from "@/lib/leather-collections/makeLeatherCollectionPageSchema";

const schemas = makeLeatherCollectionPageSchemas({
  slug: "vintage-leather",
  collectionDetail: vintageCollection,
  skuPrefix: "RL-VINTAGE",
  collectionSku: "RL-VINTAGE-COLLECTION",
  mpn: "VINTAGE-UPHOLSTERY-IT",
  material: "Italian vintage aniline leather hide",
  countryOfOrigin: "Italy",
  sampleOfferName: "Vintage leather swatch sample",
  quoteOfferDescription:
    "Request a leather material quote for vintage upholstery hides.",
  itemListDescription:
    "Vintage upholstery leather color swatches available from ReLeather.",
  video: {
    name: "Vintage leather preview video",
    description:
      "Preview of Italian vintage upholstery leather grain, color, and pull-up character for furniture projects.",
  },
});

export const vintageLeatherBreadcrumbSchema = schemas.breadcrumbSchema;
export const vintageLeatherWebPageSchema = schemas.webPageSchema;
export const vintageLeatherProductSchema = schemas.productSchema;
export const vintageLeatherColorItemListSchema = schemas.colorItemListSchema;
export const vintageLeatherVideoSchema = schemas.videoSchema;
