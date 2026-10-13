import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import WaxedProductBlock from "./WaxedProductBlock";
import {
  waxedLeatherFaqItems,
  waxedLeatherFaqSchema,
} from "./waxedLeatherFaq";
import {
  waxedLeatherBreadcrumbSchema,
  waxedLeatherColorItemListSchema,
  waxedLeatherProductSchema,
  waxedLeatherVideoSchema,
  waxedLeatherWebPageSchema,
} from "./waxedLeatherSchema";
import {
  getUpholsteryLeatherCollection,
  makeLeatherCollectionMetadata,
} from "@/lib/upholsteryLeatherCollections";

const collection = getUpholsteryLeatherCollection("waxed-leather");

export const metadata = makeLeatherCollectionMetadata(collection);

export default function WaxedLeatherPage() {
  return (
    <>
      <JsonLd data={waxedLeatherBreadcrumbSchema} />
      <JsonLd data={waxedLeatherWebPageSchema} />
      <JsonLd data={waxedLeatherProductSchema} />
      <JsonLd data={waxedLeatherColorItemListSchema} />
      {waxedLeatherVideoSchema ? (
        <JsonLd data={waxedLeatherVideoSchema} />
      ) : null}
      <JsonLd data={waxedLeatherFaqSchema} />
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="max-lg:max-w-none max-lg:px-0 lg:mx-auto lg:max-w-7xl lg:px-8 lg:pt-4">
          <WaxedProductBlock />
        </div>
        <div className="mx-auto max-w-7xl px-2 pb-6 sm:px-6 lg:px-8 lg:pb-8">
          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={waxedLeatherFaqItems}
            defaultOpenFirst
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
