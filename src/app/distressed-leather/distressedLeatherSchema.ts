import {
  collectionCompositeImageUrl,
  getUpholsteryLeatherCollection,
  LEATHER_MATERIAL_QUOTE_URL,
} from "@/lib/upholsteryLeatherCollections";
import { distressedCollection } from "@/lib/leather-collections";

const SITE_URL = "https://www.releather.com";
const PAGE_URL = `${SITE_URL}/distressed-leather`;
const HUB_URL = `${SITE_URL}/leather-for-upholstery`;
const PRODUCT_ID = `${PAGE_URL}#product`;
const WEBPAGE_ID = `${PAGE_URL}#webpage`;
const BREADCRUMB_ID = `${PAGE_URL}#breadcrumb`;

const collection = getUpholsteryLeatherCollection("distressed-leather");
const { specs, swatches, youtubeVideoId, heroPosterUrl } = distressedCollection;

const productImage = collectionCompositeImageUrl(
  collection.overlayText,
  collection.imageFile,
  1200,
);

const swatchVariants = swatches.map((swatch) => ({
  "@type": "Product" as const,
  name: `${collection.name} — ${swatch.name}`,
  sku: `RL-DISTRESSED-${swatch.id}`,
  color: swatch.name,
  image: swatch.thumbUrl,
  url: `${PAGE_URL}#order-samples`,
}));

export const distressedLeatherBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": BREADCRUMB_ID,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Leather for Upholstery",
      item: HUB_URL,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: collection.name,
      item: PAGE_URL,
    },
  ],
};

export const distressedLeatherWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": WEBPAGE_ID,
  url: PAGE_URL,
  name: collection.metaTitle,
  description: collection.metaDescription,
  isPartOf: {
    "@type": "CollectionPage",
    "@id": `${HUB_URL}#webpage`,
    url: HUB_URL,
    name: "Leather for Upholstery",
  },
  breadcrumb: { "@id": BREADCRUMB_ID },
  mainEntity: { "@id": PRODUCT_ID },
};

export const distressedLeatherProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": PRODUCT_ID,
  name: collection.name,
  description: collection.metaDescription,
  image: [productImage, ...swatches.map((s) => s.thumbUrl)],
  url: PAGE_URL,
  sku: "RL-DISTRESSED-COLLECTION",
  mpn: "DISTRESSED-UPHOLSTERY-IT",
  brand: {
    "@type": "Brand",
    name: "ReLeather",
  },
  manufacturer: {
    "@type": "Organization",
    name: "ReLeather LLC",
    url: SITE_URL,
  },
  category: "Upholstery Leather",
  material: "Italian distressed aniline leather hide",
  countryOfOrigin: {
    "@type": "Country",
    name: "Italy",
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Hide size",
      value: specs.size,
    },
    {
      "@type": "PropertyValue",
      name: "Thickness",
      value: specs.thickness,
    },
    {
      "@type": "PropertyValue",
      name: "Finish",
      value: specs.finish,
    },
    {
      "@type": "PropertyValue",
      name: "Leather type",
      value: specs.type,
    },
    {
      "@type": "PropertyValue",
      name: "Grain",
      value: specs.grain,
    },
    {
      "@type": "PropertyValue",
      name: "Texture",
      value: specs.texture.label,
    },
  ],
  hasVariant: swatchVariants,
  offers: [
    {
      "@type": "Offer",
      name: "Leather material quote",
      url: `${SITE_URL}${LEATHER_MATERIAL_QUOTE_URL}`,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      description:
        "Request a leather material quote for distressed upholstery hides.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: "Material pricing provided on quote",
      },
    },
    {
      "@type": "Offer",
      name: "Distressed leather swatch sample",
      url: `${PAGE_URL}#order-samples`,
      price: "25.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      description:
        "$25 flat for 1–4 swatch samples total, then $5 for each additional swatch.",
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        minValue: 1,
      },
    },
  ],
};

export const distressedLeatherColorItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${collection.name} color options`,
  description:
    "Distressed upholstery leather color swatches available from ReLeather.",
  numberOfItems: swatches.length,
  itemListElement: swatches.map((swatch, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: `${collection.name} — ${swatch.name}`,
    image: swatch.thumbUrl,
    url: `${PAGE_URL}#order-samples`,
  })),
};

export const distressedLeatherVideoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Distressed leather preview video",
  description:
    "Preview of Italian distressed upholstery leather grain, color, and pull-up character for furniture projects.",
  thumbnailUrl: heroPosterUrl,
  embedUrl: `https://www.youtube.com/embed/${youtubeVideoId}`,
  contentUrl: `https://www.youtube.com/watch?v=${youtubeVideoId}`,
  publisher: {
    "@type": "Organization",
    name: "ReLeather LLC",
    url: SITE_URL,
  },
};
