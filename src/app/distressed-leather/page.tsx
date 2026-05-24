import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import DistressedProductBlock from "./DistressedProductBlock";
import {
  distressedLeatherFaqItems,
  distressedLeatherFaqSchema,
} from "./distressedLeatherFaq";
import {
  distressedLeatherBreadcrumbSchema,
  distressedLeatherColorItemListSchema,
  distressedLeatherProductSchema,
} from "./distressedLeatherSchema";
import {
  getUpholsteryLeatherCollection,
  makeLeatherCollectionMetadata,
} from "@/lib/upholsteryLeatherCollections";

const collection = getUpholsteryLeatherCollection("distressed-leather");

export const metadata = makeLeatherCollectionMetadata(collection);

export default function DistressedLeatherPage() {
  return (
    <>
      <JsonLd data={distressedLeatherBreadcrumbSchema} />
      <JsonLd data={distressedLeatherProductSchema} />
      <JsonLd data={distressedLeatherColorItemListSchema} />
      <JsonLd data={distressedLeatherFaqSchema} />
      <HeaderWrapper />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-2 pb-6 pt-3 sm:px-6 sm:pt-4 lg:px-8 lg:pb-8">
          <DistressedProductBlock />
          <Faq
            id="faq"
            heading="Frequently Asked Questions"
            items={distressedLeatherFaqItems}
            defaultOpenFirst
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
