"use client";

import LeatherCollectionProductBlock from "@/components/LeatherCollectionProductBlock";
import { distressedCollection } from "@/lib/leather-collections";
import { distressedPageContent } from "@/lib/leather-collections/distressedPageContent";

export default function DistressedProductBlock() {
  return (
    <LeatherCollectionProductBlock
      collection={distressedCollection}
      content={distressedPageContent}
    />
  );
}
