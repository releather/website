export type CollectionProseLink = {
  href: string;
  title: string;
  label: string;
};

export type CollectionProsePart =
  | { type: "text"; value: string }
  | { type: "link"; link: CollectionProseLink }
  | { type: "strong"; value: string }
  | { type: "em"; value: string };

export type CollectionShowcaseVariant = {
  id: string;
  label: string;
  lifestyleSrc: string;
  lifestyleAlt: string;
  lifestyleWidth: number;
  lifestyleHeight: number;
  swatchSrc: string;
  swatchWidth: number;
  swatchHeight: number;
  swatchAlt: string;
  description: string;
};

export type CollectionIds = {
  section: string;
  heading: string;
  previewVideo: string;
  whatHeading: string;
  pullUpHeading: string;
  showcase: string;
  showcaseHeading: string;
  industryInsights: string;
  industryInsightsHeading: string;
  insightsDesignHeading: string;
  insightsWorkshopHeading: string;
};

export type CollectionHeroContent = {
  title: string;
  tagline: string;
  posterAlt: string;
  videoTitle: string;
  accentColor: string;
  getQuoteHref: string;
  getQuoteTitle: string;
  quoteSidebarHref: string;
};

export type CollectionSwatchLabels = {
  groupAriaLabel: string;
  namePrefix: string;
  swatchAltPrefix: string;
  textureModalAltDescriptor: string;
};

export type CollectionWhatIsContent = {
  heading: string;
  introParagraph: CollectionProsePart[];
  useCases: string[];
  useCaseImage: {
    src: string;
    alt: string;
    caption: string;
  };
  pullUpEffect: {
    imageSrc: string;
    imageAlt: string;
    imageTitle: string;
    label: string;
    heading: string;
    paragraph: CollectionProsePart[];
  };
};

export type CollectionShowcaseContent = {
  introParagraph: CollectionProsePart[];
  variants: readonly CollectionShowcaseVariant[];
  defaultVariantId: string;
  captionCollectionLabel: string;
  variantAriaLabelSuffix: string;
};

export type CollectionInsightBlock =
  | {
      type: "paragraph";
      parts: CollectionProsePart[];
      quoteLeft?: boolean;
      quoteRight?: boolean;
    }
  | {
      type: "caption";
      parts: CollectionProsePart[];
      quoteRight?: boolean;
    };

export type CollectionInsightArticle = {
  heading: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
    title: string;
    caption: string;
  };
  blocks: CollectionInsightBlock[];
  imageFloat: "left" | "right";
};

export type CollectionIndustryInsightsContent = {
  designArticle: CollectionInsightArticle;
  workshopArticle: CollectionInsightArticle;
};

export type CollectionPageContent = {
  ids: CollectionIds;
  hero: CollectionHeroContent;
  swatchLabels: CollectionSwatchLabels;
  whatIs: CollectionWhatIsContent;
  showcase: CollectionShowcaseContent;
  industryInsights: CollectionIndustryInsightsContent;
  originFlag?: {
    url: string;
    alt: string;
    title: string;
  };
};
