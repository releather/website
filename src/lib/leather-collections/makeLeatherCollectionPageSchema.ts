import {
  collectionCompositeImageUrl,
  getUpholsteryLeatherCollection,
  LEATHER_MATERIAL_QUOTE_URL,
} from "@/lib/upholsteryLeatherCollections";
import type { LeatherCollectionDetail } from "./types";

const SITE_URL = "https://www.releather.com";
const HUB_URL = `${SITE_URL}/leather-for-upholstery`;

export type LeatherCollectionSchemaConfig = {
  slug: string;
  collectionDetail: LeatherCollectionDetail;
  skuPrefix: string;
  collectionSku: string;
  mpn: string;
  material: string;
  countryOfOrigin: string;
  sampleOfferName: string;
  quoteOfferDescription: string;
  itemListDescription: string;
  video?: {
    name: string;
    description: string;
  };
};

export function makeLeatherCollectionPageSchemas(config: LeatherCollectionSchemaConfig) {
  const PAGE_URL = `${SITE_URL}/${config.slug}`;
  const PRODUCT_ID = `${PAGE_URL}#product`;
  const WEBPAGE_ID = `${PAGE_URL}#webpage`;
  const BREADCRUMB_ID = `${PAGE_URL}#breadcrumb`;

  const hubCollection = getUpholsteryLeatherCollection(config.slug);
  const { specs, swatches, youtubeVideoId, heroPosterUrl } = config.collectionDetail;

  const productImage = collectionCompositeImageUrl(
    hubCollection.overlayText,
    hubCollection.imageFile,
    1200,
  );

  const swatchVariants = swatches.map((swatch) => ({
    "@type": "Product" as const,
    name: `${hubCollection.name} — ${swatch.name}`,
    sku: `${config.skuPrefix}-${swatch.id}`,
    color: swatch.name,
    image: swatch.thumbUrl,
    url: `${PAGE_URL}#order-samples`,
  }));

  const breadcrumbSchema = {
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
        name: hubCollection.name,
        item: PAGE_URL,
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": WEBPAGE_ID,
    url: PAGE_URL,
    name: hubCollection.metaTitle,
    description: hubCollection.metaDescription,
    isPartOf: {
      "@type": "CollectionPage",
      "@id": `${HUB_URL}#webpage`,
      url: HUB_URL,
      name: "Leather for Upholstery",
    },
    breadcrumb: { "@id": BREADCRUMB_ID },
    mainEntity: { "@id": PRODUCT_ID },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": PRODUCT_ID,
    name: hubCollection.name,
    description: hubCollection.metaDescription,
    image: [productImage, ...swatches.map((s) => s.thumbUrl)],
    url: PAGE_URL,
    sku: config.collectionSku,
    mpn: config.mpn,
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
    material: config.material,
    countryOfOrigin: {
      "@type": "Country",
      name: config.countryOfOrigin,
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
        description: config.quoteOfferDescription,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          description: "Material pricing provided on quote",
        },
      },
      {
        "@type": "Offer",
        name: config.sampleOfferName,
        url: `${PAGE_URL}#order-samples`,
        price: "25.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        description:
          "$25 for 1–4 swatch samples total, then $5 for each additional swatch.",
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          minValue: 1,
        },
      },
    ],
  };

  const colorItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${hubCollection.name} color options`,
    description: config.itemListDescription,
    numberOfItems: swatches.length,
    itemListElement: swatches.map((swatch, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${hubCollection.name} — ${swatch.name}`,
      image: swatch.thumbUrl,
      url: `${PAGE_URL}#order-samples`,
    })),
  };

  const videoSchema =
    config.video && youtubeVideoId
      ? {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: config.video.name,
          description: config.video.description,
          thumbnailUrl: heroPosterUrl,
          embedUrl: `https://www.youtube.com/embed/${youtubeVideoId}`,
          contentUrl: `https://www.youtube.com/watch?v=${youtubeVideoId}`,
          publisher: {
            "@type": "Organization",
            name: "ReLeather LLC",
            url: SITE_URL,
          },
        }
      : null;

  return {
    breadcrumbSchema,
    webPageSchema,
    productSchema,
    colorItemListSchema,
    videoSchema,
  };
}
