"use client";

import LeatherCollectionProductBlock from "@/components/LeatherCollectionProductBlock";
import { vintageCollection } from "@/lib/leather-collections";
import { vintagePageContent } from "@/lib/leather-collections/vintagePageContent";

export default function VintageProductBlock() {
  return (
    <LeatherCollectionProductBlock
      collection={vintageCollection}
      content={vintagePageContent}
    />
  );
}
