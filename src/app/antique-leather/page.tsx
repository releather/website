import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import AntiqueProductBlock from "./AntiqueProductBlock";
import {
  antiqueLeatherFaqItems,
  antiqueLeatherFaqSchema,
} from "./antiqueLeatherFaq";
import {
  antiqueLeatherBreadcrumbSchema,
  antiqueLeatherColorItemListSchema,
  antiqueLeatherProductSchema,
  antiqueLeatherVideoSchema,
  antiqueLeatherWebPageSchema,
} from "./antiqueLeatherSchema";
import {
  getUpholsteryLeatherCollection,
  makeLeatherCollectionMetadata,
} from "@/lib/upholsteryLeatherCollections";

const collection = getUpholsteryLeatherCollection("antique-leather");

export const metadata = makeLeatherCollectionMetadata(collection);

export default function AntiqueLeatherPage() {
  return (
    <>
      <JsonLd data={antiqueLeatherBreadcrumbSchema} />
      <JsonLd data={antiqueLeatherWebPageSchema} />
      <JsonLd data={antiqueLeatherProductSchema} />
      <JsonLd data={antiqueLeatherColorItemListSchema} />
      {antiqueLeatherVideoSchema ? (
        <JsonLd data={antiqueLeatherVideoSchema} />
      ) : null}
      <JsonLd data={antiqueLeatherFaqSchema} />
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="max-lg:max-w-none max-lg:px-0 lg:mx-auto lg:max-w-7xl lg:px-8 lg:pt-4">
          <AntiqueProductBlock />
        </div>
        <div className="mx-auto max-w-7xl px-2 pb-6 sm:px-6 lg:px-8 lg:pb-8">
          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={antiqueLeatherFaqItems}
            defaultOpenFirst
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
