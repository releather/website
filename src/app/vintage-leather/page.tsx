import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import VintageProductBlock from "./VintageProductBlock";
import {
  vintageLeatherFaqItems,
  vintageLeatherFaqSchema,
} from "./vintageLeatherFaq";
import {
  vintageLeatherBreadcrumbSchema,
  vintageLeatherColorItemListSchema,
  vintageLeatherProductSchema,
  vintageLeatherVideoSchema,
  vintageLeatherWebPageSchema,
} from "./vintageLeatherSchema";
import {
  getUpholsteryLeatherCollection,
  makeLeatherCollectionMetadata,
} from "@/lib/upholsteryLeatherCollections";

const collection = getUpholsteryLeatherCollection("vintage-leather");

export const metadata = makeLeatherCollectionMetadata(collection);

export default function VintageLeatherPage() {
  return (
    <>
      <JsonLd data={vintageLeatherBreadcrumbSchema} />
      <JsonLd data={vintageLeatherWebPageSchema} />
      <JsonLd data={vintageLeatherProductSchema} />
      <JsonLd data={vintageLeatherColorItemListSchema} />
      {vintageLeatherVideoSchema ? (
        <JsonLd data={vintageLeatherVideoSchema} />
      ) : null}
      <JsonLd data={vintageLeatherFaqSchema} />
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="max-lg:max-w-none max-lg:px-0 lg:mx-auto lg:max-w-7xl lg:px-8 lg:pt-4">
          <VintageProductBlock />
        </div>
        <div className="mx-auto max-w-7xl px-2 pb-6 sm:px-6 lg:px-8 lg:pb-8">
          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={vintageLeatherFaqItems}
            defaultOpenFirst
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
