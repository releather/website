"use client";

import LeatherCollectionProductBlock from "@/components/LeatherCollectionProductBlock";
import { colorfulCollection } from "@/lib/leather-collections";
import { colorfulPageContent } from "@/lib/leather-collections/colorfulPageContent";

export default function ColorfulProductBlock() {
  return (
    <LeatherCollectionProductBlock
      collection={colorfulCollection}
      content={colorfulPageContent}
    />
  );
}
