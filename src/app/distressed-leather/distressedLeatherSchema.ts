import {
  collectionCompositeImageUrl,
  getUpholsteryLeatherCollection,
  LEATHER_MATERIAL_QUOTE_URL,
} from "@/lib/upholsteryLeatherCollections";
import { distressedCollection } from "@/lib/leather-collections";

const SITE_URL = "https://www.releather.com";
const PAGE_URL = `${SITE_URL}/distressed-leather`;

const collection = getUpholsteryLeatherCollection("distressed-leather");

const productImage = collectionCompositeImageUrl(
  collection.overlayText,
  collection.imageFile,
  1200,
);

export const distressedLeatherBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
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
      item: `${SITE_URL}/leather-for-upholstery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: collection.name,
      item: PAGE_URL,
    },
  ],
};

export const distressedLeatherProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: collection.name,
  description: collection.metaDescription,
  image: [productImage],
  url: PAGE_URL,
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
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}${LEATHER_MATERIAL_QUOTE_URL}`,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    description: "Request a leather material quote for distressed upholstery hides.",
  },
};

export const distressedLeatherColorItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${collection.name} color options`,
  description:
    "Distressed upholstery leather color swatches available from ReLeather.",
  numberOfItems: distressedCollection.swatches.length,
  itemListElement: distressedCollection.swatches.map((swatch, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: `${collection.name} — ${swatch.name}`,
    image: swatch.thumbUrl,
  })),
};
