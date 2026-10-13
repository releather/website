import type { CollectionPageContent } from "./collectionPageContent";

const VERSION = "v1730626091";

function hideCloseup(file: string): string {
  return `https://res.cloudinary.com/leathera/image/upload/c_fill,g_auto,w_900,h_600/${VERSION}/leather/Waxed/${file}`;
}

function showcaseSwatch(label: string, file: string): string {
  return `https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:${encodeURIComponent(label)},co_rgb:ffffff/bo_1px_solid_rgb:000000/${VERSION}/leather/Waxed/${file}`;
}

export const waxedPageContent = {
  ids: {
    section: "waxed-collection",
    heading: "waxed-heading",
    previewVideo: "waxed-preview-video",
    whatHeading: "waxed-what-heading",
    pullUpHeading: "waxed-finish-heading",
    showcase: "waxed-showcase",
    showcaseHeading: "waxed-showcase-heading",
    industryInsights: "waxed-industry-insights",
    industryInsightsHeading: "waxed-industry-insights-heading",
    insightsDesignHeading: "waxed-insights-design-heading",
    insightsWorkshopHeading: "waxed-insights-workshop-heading",
  },
  hero: {
    title: "Waxed Leather",
    tagline:
      "Hand-antiqued wax and a soft fine grain—Italian hides for residential and contract seating.",
    posterAlt: "Close up of Waxed Leather",
    videoTitle: "Waxed leather preview",
    accentColor: "#f8991d",
    getQuoteHref: "/leather-for-upholstery#collections",
    getQuoteTitle: "Browse upholstery leather collections",
    quoteSidebarHref: "/leather-for-upholstery#leather-material-quote",
  },
  swatchLabels: {
    groupAriaLabel: "Waxed leather color swatches",
    namePrefix: "Waxed",
    swatchAltPrefix: "Waxed leather",
    textureModalAltDescriptor: "texture — black waxed leather",
  },
  whatIs: {
    heading: "What is Waxed Leather?",
    introParagraph: [
      { type: "strong", value: "Waxed Leather" },
      { type: "text", value: " is a premium " },
      {
        type: "link",
        link: {
          href: "/types-of-leather#semi-aniline-leather",
          title: "Semi-aniline leather types",
          label: "semi-aniline",
        },
      },
      { type: "text", value: " hide with a hand-antiqued, " },
      { type: "em", value: "waxy finish" },
      {
        type: "text",
        value:
          ". Oils and waxes form a light protective coat that keeps the natural fine grain visible while helping the surface stand up to everyday use. A light ",
      },
      {
        type: "link",
        link: {
          href: "/types-of-leather#wax-pull-up-leather",
          title: "Wax pull-up leather types",
          label: "pull-up",
        },
      },
      {
        type: "text",
        value:
          " shift can appear where the hide flexes, so each skin has depth without a flat, coated look. That makes it a practical choice for ",
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
        value: " in homes and in busier contract rooms. It's recommended for:",
      },
    ],
    useCases: ["Furniture", "Hospitality"],
    useCaseImage: {
      src: `https://res.cloudinary.com/leathera/image/upload/c_fill,w_800,h_700,g_center/g_south_west,x_20,y_20,l_text:montserrat_75_style_light:Whiskey,co_rgb:ffffff/bo_1px_solid_rgb:000000/${VERSION}/leather/Waxed/Waxed_Leather_Whiskey.jpg`,
      alt: "Close-up of Whiskey waxed leather showing the hand-antiqued fine grain",
      caption: "Whiskey, a warm colorway for residential seating.",
    },
    pullUpEffect: {
      imageSrc: `https://res.cloudinary.com/leathera/image/upload/c_fill,w_800,h_800,g_center/${VERSION}/leather/Waxed/Waxed_Leather_Black.jpg`,
      imageAlt:
        "Close-up of black waxed leather showing the hand-antiqued wax finish and natural fine grain",
      imageTitle: "Waxed leather hand-antiqued finish",
      label: "Waxed finish",
      heading: "Understanding the Waxed Finish",
      paragraph: [
        { type: "text", value: "The waxed finish is what sets " },
        {
          type: "link",
          link: {
            href: "/leather-for-upholstery#collections",
            title: "Waxed leather upholstery collection",
            label: "waxed leather",
          },
        },
        {
          type: "text",
          value:
            " apart from a plain dyed hide. Oils and waxes are worked into the surface so it feels soft and slightly antiqued, with a coat that helps resist everyday scuffs and light moisture. Where the leather flexes, the tone can shift just enough to show depth across arms, cushions, and backs — character you can see, with more protection than an open aniline.",
        },
      ],
    },
  },
  showcase: {
    introParagraph: [
      {
        type: "text",
        value:
          "→ Waxed leather fits residential and contract projects where you want a refined hand plus ",
      },
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
          " wear — from living-room sofas to hospitality lounges and office seating.",
      },
    ],
    defaultVariantId: "whiskey",
    captionCollectionLabel: "Waxed collection",
    variantAriaLabelSuffix: "waxed leather showcase",
    variants: [
      {
        id: "whiskey",
        label: "Whiskey",
        lifestyleSrc:
          "https://res.cloudinary.com/releather-com/image/upload/c_pad,w_1180,h_780/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/full-leather-reupholstery-chair-tan-waxed-wingback-after.png",
        lifestyleAlt:
          "Tan waxed wingback chair after a full reupholstery in Whiskey leather",
        lifestyleWidth: 1200,
        lifestyleHeight: 800,
        swatchSrc: showcaseSwatch("Whiskey", "Waxed_Leather_Whiskey.jpg"),
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Whiskey waxed leather swatch with warm amber grain",
        description:
          "Whiskey waxed leather—warm amber tone, fine grain, and a soft waxed hand. Tan wingback after a full reupholstery: a worn chair brought back to a clean, polished seat.",
      },
      {
        id: "black",
        label: "Black",
        lifestyleSrc: hideCloseup("Waxed_Leather_Black.jpg"),
        lifestyleAlt:
          "Close-up of Black waxed leather with a hand-antiqued fine grain",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc: showcaseSwatch("Black", "Waxed_Leather_Black.jpg"),
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Black waxed leather swatch with a deep antiqued grain",
        description:
          "Black waxed leather—deep hand-antiqued grain, soft waxy sheen, natural fine texture. Specified for sofas, club chairs, and contract lounge seating that need a classic color with real hide character.",
      },
      {
        id: "deep-sea",
        label: "Deep Sea",
        lifestyleSrc: hideCloseup("Waxed_Leather_DeepSea.jpg"),
        lifestyleAlt:
          "Close-up of Deep Sea waxed leather with a blue-green antiqued grain",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc: showcaseSwatch("Deep Sea", "Waxed_Leather_DeepSea.jpg"),
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Deep Sea waxed leather swatch with a moody blue-green grain",
        description:
          "Deep Sea waxed leather—moody blue-green, fine grain, and a protected waxy surface. Well suited to hospitality lounges, dining chairs, and accent seating where color has to hold up in a busy room.",
      },
      {
        id: "gun-metal",
        label: "Gun Metal",
        lifestyleSrc: hideCloseup("Waxed_Leather_Gun-Metal.jpg"),
        lifestyleAlt:
          "Close-up of Gun Metal waxed leather with a cool grey antiqued grain",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc: showcaseSwatch("Gun Metal", "Waxed_Leather_Gun-Metal.jpg"),
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Gun Metal waxed leather swatch with a cool grey grain",
        description:
          "Gun Metal waxed leather—cool grey, quiet sheen, and a fine natural grain. A practical choice for office seating, lobby pieces, and contemporary residential rooms that need a professional tone with some depth.",
      },
    ],
  },
  industryInsights: {
    leadArticle: "workshop",
    designArticle: {
      heading: "Why Choose Waxed Leather for Upholstery",
      subtitle: "Ask a Pro: Interior Design Perspective",
      imageFloat: "right",
      image: {
        src: `https://res.cloudinary.com/leathera/image/upload/c_fill,g_auto,w_800,h_900/${VERSION}/leather/Waxed/Waxed_Leather_Black.jpg`,
        alt: "Close-up of black waxed leather used for upholstery specification",
        title: "Waxed leather interior specification",
        caption: "Black remains the collection's most specified colorway.",
      },
      blocks: [
        {
          type: "paragraph",
          quoteLeft: true,
          parts: [
            {
              type: "text",
              value:
                "When I specify waxed leather, I'm looking for a finish that still reads as hide — soft, slightly antiqued, with the grain showing — and that can live in a room people actually use. Clients notice the hand right away on a sofa or club chair, and the color range covers both the expected browns and the quieter greys and deeper tones a contract palette needs.",
            },
          ],
        },
        {
          type: "caption",
          parts: [
            {
              type: "text",
              value:
                "The wax coat adds a measure of protection while the surface stays natural.",
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
                "From a design standpoint it isn't a flat solid. The wax gives dimension, and the hides vary enough that a sectional or lounge chair feels considered. I use it when the room needs warmth and a finish that can take regular sitting.",
            },
          ],
        },
      ],
    },
    workshopArticle: {
      heading: "Waxed Leather in Residential and Contract Interiors",
      subtitle: "Ask a Pro: Upholstery Workshop Perspective",
      imageFloat: "right",
      image: {
        src: "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/before-after/full-leather-reupholstery-chair-tan-semi-aniline-ripped-old-worn-wingback-san-clemente-extra.jpg",
        alt: "Before and after of a tan waxed wingback chair from San Clemente, reupholstered after rips and wear",
        title: "Before and after, tan waxed wingback reupholstery, San Clemente",
        caption: "Tan waxed wingback, San Clemente — before and after a full reupholstery.",
      },
      blocks: [
        {
          type: "paragraph",
          quoteLeft: true,
          parts: [
            { type: "text", value: "From an " },
            {
              type: "link",
              link: {
                href: "/services/leather-upholstery",
                title: "Leather upholstery workshop",
                label: "upholstery",
              },
            },
            {
              type: "text",
              value:
                " standpoint, waxed leather is a hide we put on furniture that has to work. A tan wingback from San Clemente came into our ",
            },
            {
              type: "link",
              link: {
                href: "/leather-restoration-orange-county",
                title: "Leather restoration and upholstery shop in Orange County",
                label: "Orange County shop",
              },
            },
            {
              type: "text",
              value:
                " with rips and years of wear in the old hide. We reupholstered it in tan semi-aniline waxed leather. The wax finish stayed visible, and the chair went back clean, polished, and ready to sit in.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            { type: "text", value: "That same hide works on " },
            {
              type: "link",
              link: {
                href: "/replacement-cushions-for-leather-couch",
                title: "Replacement cushions for leather couch",
                label: "sofa cushions",
              },
            },
            {
              type: "text",
              value:
                ", club chairs, ottomans, and headboards. In hotels, restaurants, and offices the wax coat takes more of the daily wear than an open aniline. Dust it, and use a proper conditioner. Harsh cleaners can strip the wax.",
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
                "A full reupholstery in tan waxed leather brought a ripped San Clemente wingback back to a clean, usable chair.",
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
