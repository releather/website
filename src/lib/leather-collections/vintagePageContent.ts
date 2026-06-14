import type { CollectionPageContent } from "./collectionPageContent";

/** Cropped suburban ottoman photo for Showcase only (no Cloudinary label/swatch overlay). */
const vintageShowcaseSaddleLifestyleUrl =
  "https://res.cloudinary.com/leathera/image/upload/c_crop,g_south,h_0.88/v1781433593/leather/Vintage/examples/vintage-leather-saddle-color-ottoman-cushion-suburban-home_ce3a3u.jpg";

export const vintagePageContent = {
  ids: {
    section: "vintage-collection",
    heading: "vintage-heading",
    previewVideo: "vintage-preview-video",
    whatHeading: "vintage-what-heading",
    pullUpHeading: "vintage-pull-up-heading",
    showcase: "vintage-showcase",
    showcaseHeading: "vintage-showcase-heading",
    industryInsights: "vintage-industry-insights",
    industryInsightsHeading: "vintage-industry-insights-heading",
    insightsDesignHeading: "vintage-insights-design-heading",
    insightsWorkshopHeading: "vintage-insights-workshop-heading",
  },
  hero: {
    title: "Vintage Leather",
    tagline:
      "Multi-tonal pull-up depth with organic grain—ideal for a curated sofa.",
    posterAlt: "Close up of Vintage Leather",
    videoTitle: "Vintage leather preview video",
    accentColor: "#f8991d",
    getQuoteHref: "/leather-for-upholstery#collections",
    getQuoteTitle: "Browse upholstery leather collections",
    quoteSidebarHref: "/leather-for-upholstery#leather-material-quote",
  },
  swatchLabels: {
    groupAriaLabel: "Vintage leather color swatches",
    namePrefix: "Vintage",
    swatchAltPrefix: "Vintage leather",
    textureModalAltDescriptor: "texture — coal vintage leather",
  },
  whatIs: {
    heading: "What is Vintage Leather?",
    introParagraph: [
      { type: "strong", value: "Vintage Leather" },
      { type: "text", value: " is a premium " },
      {
        type: "link",
        link: {
          href: "/types-of-leather",
          title: "Types of leather for upholstery",
          label: "aniline-dyed",
        },
      },
      { type: "text", value: " leather with a distressed aesthetic and " },
      { type: "em", value: "multi-tonal depth" },
      { type: "text", value: ". Oils and waxes create a natural " },
      {
        type: "link",
        link: {
          href: "/types-of-leather#wax-pull-up-leather",
          title: "Wax pull-up leather types",
          label: "pull-up effect",
        },
      },
      {
        type: "text",
        value:
          " with layered tones and organic grain markings. Vintage hides vary naturally, making them ideal for authentic ",
      },
      {
        type: "link",
        link: {
          href: "/leather-for-upholstery#collections",
          title: "Leather for upholstery collections",
          label: "upholstery",
        },
      },
      {
        type: "text",
        value:
          " without a uniform look. Rugged and protective, it's recommended for:",
      },
    ],
    useCases: ["Furniture", "Bags", "Garments"],
    useCaseImage: {
      src: "https://res.cloudinary.com/leathera/image/upload/l_image:upload:leather:Vintage:Vintage_Leather_Coal/c_scale,fl_relative,w_0.13/o_100/fl_layer_apply,g_south_east,x_0.03,y_0.02/g_south_west,x_20,y_20,l_text:montserrat_75_style_light:Coal,co_rgb:ffffff/bo_1px_solid_rgb:000000/v1781433592/leather/Vintage/examples/vintage-leather-coal-color-upholstered-in-a-club-chair-tufted-back-english-arm-surburban-home-decor_bnrzwp.jpg",
      alt: "Club chair with tufted back and English arms upholstered in Coal vintage leather in a suburban home",
      caption:
        "Coal color option on accent seating in a residential interior.",
    },
    pullUpEffect: {
      imageSrc:
        "https://res.cloudinary.com/leathera/image/upload/c_scale,w_800/v1717001453/leather/Vintage/Vintage_Leather_Coal.jpg",
      imageAlt:
        "Close-up of coal vintage leather showing the pull-up effect, with lighter tones where oils and waxes shift under stress",
      imageTitle: "Vintage leather pull-up effect",
      label: "Pull-up effect",
      heading: "Understanding the Pull-Up Effect",
      paragraph: [
        { type: "text", value: "The pull-up effect is a defining characteristic of " },
        {
          type: "link",
          link: {
            href: "/leather-for-upholstery#collections",
            title: "Vintage leather upholstery collection",
            label: "vintage leather",
          },
        },
        {
          type: "text",
          value:
            ". It occurs when oils and waxes within the leather move under pressure or stretching, temporarily revealing lighter tones in those areas. This creates natural depth and variation across the surface, giving each hide a unique, evolving heritage character.",
        },
      ],
    },
  },
  showcase: {
    introParagraph: [
      { type: "text", value: "→ Vintage leather fits residential and contract projects where you want rich character plus " },
      {
        type: "link",
        link: {
          href: "/services/leather-upholstery",
          title: "Leather upholstery service",
          label: "upholstery-grade",
        },
      },
      {
        type: "text",
        value:
          " performance — from living rooms to hospitality and automotive trims.",
      },
    ],
    defaultVariantId: "saddle",
    captionCollectionLabel: "Vintage collection",
    variantAriaLabelSuffix: "vintage leather showcase",
    variants: [
      {
        id: "saddle",
        label: "Saddle",
        lifestyleSrc: vintageShowcaseSaddleLifestyleUrl,
        lifestyleAlt:
          "Ottoman cushion upholstered in Saddle vintage leather in a suburban home living room",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Saddle,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Vintage/Vintage_Leather_Saddle.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Saddle vintage leather swatch with warm pull-up grain",
        description:
          "Saddle vintage leather—warm tan pull-up grain, layered tonal depth, soft organic sheen. Ottoman cushion in a suburban home: versatile residential centerpiece & contract seating with heritage character",
      },
      {
        id: "latigo",
        label: "Latigo",
        lifestyleSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,g_south,h_0.88/v1781433592/leather/Vintage/examples/vintage-leather-latigo-color-upholstered-tufted-couch-surburban-home-orange-county_bxiuar.jpg",
        lifestyleAlt:
          "Tufted couch upholstered in Latigo vintage leather in a suburban Orange County home",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Latigo,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Vintage/Vintage_Leather_Latigo.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Latigo vintage leather swatch with rich pull-up texture",
        description:
          "Latigo vintage leather—deep brown pull-up grain, warm tonal highs and lows. Tufted couch in an Orange County home shows premium character for residential libraries & contract seating. Rich tone.",
      },
      {
        id: "deep-sea",
        label: "Deep Sea",
        lifestyleSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,g_south,h_0.88/v1781433593/leather/Vintage/examples/vintage-leather-deep-sea-upholstered-rouded-ottoman-in-law-firm-office-in-newport-beach_ilkdzs.jpg",
        lifestyleAlt:
          "Rounded ottoman upholstered in Deep Sea vintage leather in a law firm office in Newport Beach",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Deep%20Sea,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Vintage/Vintage_Leather_DeepSea.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Deep Sea vintage leather swatch with moody blue pull-up grain",
        description:
          "Deep Sea vintage leather—moody blue pull-up grain, layered highlights, dramatic presence. Rounded ottoman in a Newport Beach law office: bold professional interiors & contract-scale seating.",
      },
      {
        id: "coal",
        label: "Coal",
        lifestyleSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,g_south,h_0.88/v1781433592/leather/Vintage/examples/vintage-leather-coal-color-upholstered-in-a-club-chair-tufted-back-english-arm-surburban-home-decor_bnrzwp.jpg",
        lifestyleAlt:
          "Club chair with tufted back and English arms upholstered in Coal vintage leather in a suburban home",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Coal,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Vintage/Vintage_Leather_Coal.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Coal vintage leather swatch with deep multi-tonal pull-up texture",
        description:
          "Coal vintage leather—deep charcoal pull-up grain, warm tan highs, rugged elegance. Club chair with tufted back in a suburban home—refined residential seating & enduring everyday character.",
      },
    ],
  },
  industryInsights: {
    designArticle: {
      heading: "Why Choose Vintage Leather for Upholstery",
      subtitle: "Ask a Customer: Home Decor Perspective",
      imageFloat: "right",
      image: {
        src: "https://res.cloudinary.com/leathera/image/upload/c_crop,g_north,h_0.9/v1781442970/leather/Vintage/examples/vintage-leather-coal-color-upholstered-in-a-club-chair-tufted-back-english-arm-surburban-home-decor-customers-love-the-results_o9i49q.png",
        alt: "Coal vintage leather club chair with tufted back in a suburban home",
        title: "Vintage leather interior design selection",
        caption: "",
      },
      blocks: [
        {
          type: "paragraph",
          quoteLeft: true,
          parts: [
            {
              type: "text",
              value:
                "As a customer I tend to prefer leathers that feel authentic and full of character. I'm drawn to hides that have depth, variation, and a sense of history rather than a perfectly uniform appearance. I like seeing subtle shifts in tone, natural shading, and the kind of visual richness that gives a piece warmth and personality.",
            },
          ],
        },
        {
          type: "caption",
          parts: [
            {
              type: "text",
              value:
                "For me, leather should feel organic and lived-in, with a finish that creates interest and dimension from different angles.",
            },
          ],
        },
        {
          type: "paragraph",
          quoteRight: true,
          parts: [
            {
              type: "text",
              value:
                "Those qualities make furniture feel more timeless, inviting, and unique within a space.",
            },
          ],
        },
      ],
    },
    workshopArticle: {
      heading: "Vintage Leather in Residential and Commercial Interiors",
      subtitle: "Ask a Pro: Upholstery Workshop Perspective",
      imageFloat: "left",
      image: {
        src: "https://res.cloudinary.com/leathera/image/upload/c_crop,g_north,h_0.9/v1781442902/leather/Vintage/examples/vintage-leather-pet-scratches-warning_zoaa6q.jpg",
        alt: "Vintage leather upholstery showing pet scratch damage — keep pets away from aniline pull-up finishes",
        title: "Vintage leather pet scratch warning",
        caption:
          "Keep pets and sharp mishaps away from pull-up aniline leather.",
      },
      blocks: [
        {
          type: "paragraph",
          quoteLeft: true,
          parts: [
            {
              type: "text",
              value:
                "You know, what I like about this type of leather is that it adds value to the piece of furniture. If you're going to invest in a sofa, chair, or ottoman, you want it to not only pop and make a statement, but also make the expense feel worthwhile. This type of leather tends to check those boxes. It has depth, character, and a look that can really elevate a piece and make it stand out from something more standard or uniform.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              value:
                "The only caveat is that you want to keep it away from pets and the occasional mishap, whether that's spills, hard scratches, or anything that can leave a permanent mark. That's part of the charm of this type of leather—it has character—but it's also something to be mindful of when choosing it for your home.",
            },
          ],
        },
        {
          type: "caption",
          quoteRight: true,
          parts: [
            {
              type: "text",
              value:
                "The caveat: keep vintage leather away from pets, spills, and hard scratches that can leave permanent marks — part of its charm, but worth planning for in a busy home.",
            },
          ],
        },
      ],
    },
  },
  originFlag: {
    url: "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:ffffff,bo_1px_solid_rgb:555555,g_south,w_35,h_20/v1716563273/icons/flag-of-italy.jpg",
    alt: "Italy",
    title: "Italy",
  },
} as const satisfies CollectionPageContent;
