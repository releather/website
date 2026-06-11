import { antiqueCollection } from "@/lib/leather-collections";
import { makeLeatherCollectionPageSchemas } from "@/lib/leather-collections/makeLeatherCollectionPageSchema";

const schemas = makeLeatherCollectionPageSchemas({
  slug: "antique-leather",
  collectionDetail: antiqueCollection,
  skuPrefix: "RL-ANTIQUE",
  collectionSku: "RL-ANTIQUE-COLLECTION",
  mpn: "ANTIQUE-UPHOLSTERY-IT",
  material: "European semi-aniline antique leather hide",
  countryOfOrigin: "Europe",
  sampleOfferName: "Antique leather swatch sample",
  quoteOfferDescription:
    "Request a leather material quote for antique upholstery hides.",
  itemListDescription:
    "Antique upholstery leather color swatches available from ReLeather.",
});

export const antiqueLeatherBreadcrumbSchema = schemas.breadcrumbSchema;
export const antiqueLeatherWebPageSchema = schemas.webPageSchema;
export const antiqueLeatherProductSchema = schemas.productSchema;
export const antiqueLeatherColorItemListSchema = schemas.colorItemListSchema;
export const antiqueLeatherVideoSchema = schemas.videoSchema;
