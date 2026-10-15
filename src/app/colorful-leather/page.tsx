import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import ColorfulProductBlock from "./ColorfulProductBlock";
import {
  colorfulLeatherFaqItems,
  colorfulLeatherFaqSchema,
} from "./colorfulLeatherFaq";
import {
  colorfulLeatherBreadcrumbSchema,
  colorfulLeatherColorItemListSchema,
  colorfulLeatherProductSchema,
  colorfulLeatherVideoSchema,
  colorfulLeatherWebPageSchema,
} from "./colorfulLeatherSchema";
import {
  getUpholsteryLeatherCollection,
  makeLeatherCollectionMetadata,
} from "@/lib/upholsteryLeatherCollections";

const collection = getUpholsteryLeatherCollection("colorful-leather");

export const metadata = makeLeatherCollectionMetadata(collection);

export default function ColorfulLeatherPage() {
  return (
    <>
      <JsonLd data={colorfulLeatherBreadcrumbSchema} />
      <JsonLd data={colorfulLeatherWebPageSchema} />
      <JsonLd data={colorfulLeatherProductSchema} />
      <JsonLd data={colorfulLeatherColorItemListSchema} />
      {colorfulLeatherVideoSchema ? (
        <JsonLd data={colorfulLeatherVideoSchema} />
      ) : null}
      <JsonLd data={colorfulLeatherFaqSchema} />
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="max-lg:max-w-none max-lg:px-0 lg:mx-auto lg:max-w-7xl lg:px-8 lg:pt-4">
          <ColorfulProductBlock />
        </div>
        <div className="mx-auto max-w-7xl px-2 pb-6 sm:px-6 lg:px-8 lg:pb-8">
          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={colorfulLeatherFaqItems}
            defaultOpenFirst
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
