"use client";

import LeatherCollectionProductBlock from "@/components/LeatherCollectionProductBlock";
import { waxedCollection } from "@/lib/leather-collections";
import { waxedPageContent } from "@/lib/leather-collections/waxedPageContent";

export default function WaxedProductBlock() {
  return (
    <LeatherCollectionProductBlock
      collection={waxedCollection}
      content={waxedPageContent}
    />
  );
}
