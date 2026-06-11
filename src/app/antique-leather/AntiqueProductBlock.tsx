"use client";

import LeatherCollectionProductBlock from "@/components/LeatherCollectionProductBlock";
import { antiqueCollection } from "@/lib/leather-collections";
import { antiquePageContent } from "@/lib/leather-collections/antiquePageContent";

export default function AntiqueProductBlock() {
  return (
    <LeatherCollectionProductBlock
      collection={antiqueCollection}
      content={antiquePageContent}
    />
  );
}
