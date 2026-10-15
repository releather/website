import type { CollectionPageContent } from "./collectionPageContent";

function hideCloseup(file: string): string {
  return `https://res.cloudinary.com/leathera/image/upload/c_fill,g_auto,w_900,h_600/leather/Colorful/${file}`;
}

function showcaseSwatch(label: string, file: string): string {
  return `https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:${encodeURIComponent(label)},co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Colorful/${file}`;
}

/** Landscape frame so the furniture photo is not square-cropped in the 3:2 applications box. */
function projectPhoto(file: string, badge: "repair-before" | "repair-after"): string {
  return `https://res.cloudinary.com/releather-com/image/upload/c_pad,w_1180,h_780/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:${badge}/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/${file}`;
}

export const colorfulPageContent = {
  ids: {
    section: "colorful-collection",
    heading: "colorful-heading",
    previewVideo: "colorful-preview-video",
    whatHeading: "colorful-what-heading",
    pullUpHeading: "colorful-finish-heading",
    showcase: "colorful-showcase",
    showcaseHeading: "colorful-showcase-heading",
    industryInsights: "colorful-industry-insights",
    industryInsightsHeading: "colorful-industry-insights-heading",
    insightsDesignHeading: "colorful-insights-design-heading",
    insightsWorkshopHeading: "colorful-insights-workshop-heading",
  },
  hero: {
    title: "Colorful Leather",
    tagline:
      "Even color and a fine pebble grain—Italian protected hides for residential and contract seating.",
    posterAlt: "Close up of Colorful Leather",
    videoTitle: "Colorful leather preview",
    accentColor: "#f8991d",
    getQuoteHref: "/leather-for-upholstery#collections",
    getQuoteTitle: "Browse upholstery leather collections",
    quoteSidebarHref: "/leather-for-upholstery#leather-material-quote",
  },
  swatchLabels: {
    groupAriaLabel: "Colorful leather color swatches",
    namePrefix: "Colorful",
    swatchAltPrefix: "Colorful leather",
    textureModalAltDescriptor: "texture — black colorful leather",
  },
  whatIs: {
    heading: "What is Colorful Leather?",
    introParagraph: [
      { type: "strong", value: "Colorful Leather" },
      { type: "text", value: " is an Italian " },
      {
        type: "link",
        link: {
          href: "/types-of-leather#pure-aniline-leather",
          title: "Aniline leather types",
          label: "aniline-dyed",
        },
      },
      { type: "text", value: " hide with a " },
      { type: "em", value: "protective matte coat" },
      {
        type: "text",
        value:
          " and a fine pebble grain. The surface stays smooth and pliable, and the color reads even across a sofa or a run of dining chairs. The coat helps the hide take everyday sitting better than an open aniline, which is why we specify it for ",
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
          " in homes and in busier contract rooms. It's recommended for:",
      },
    ],
    useCases: ["Furniture", "Hospitality"],
    useCaseImage: {
      src: "https://res.cloudinary.com/leathera/image/upload/c_fill,w_800,h_700,g_center/g_south_west,x_20,y_20,l_text:montserrat_75_style_light:Cream,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Colorful/Colorful_Cream.jpg",
      alt: "Close-up of Cream colorful leather showing the fine pebble grain",
      caption: "Cream, a quiet neutral for a full sofa reupholstery.",
    },
    pullUpEffect: {
      imageSrc:
        "https://res.cloudinary.com/leathera/image/upload/c_fill,w_800,h_800,g_center/leather/Colorful/Colorful_Mango.jpg",
      imageAlt:
        "Close-up of Mango colorful leather showing the protected matte finish and fine pebble grain",
      imageTitle: "Colorful leather protected matte finish",
      label: "Protected finish",
      heading: "Understanding the Protected Finish",
      paragraph: [
        { type: "text", value: "The protective coat is what sets " },
        {
          type: "link",
          link: {
            href: "/leather-for-upholstery#collections",
            title: "Colorful leather upholstery collection",
            label: "colorful leather",
          },
        },
        {
          type: "text",
          value:
            " apart from an open aniline. Color is dyed into the hide, then a matte finish evens the surface and helps it resist light stains and fade. The pebble grain is still there, so a large back or seat does not go flat. Specify it when the room needs a real color — cream, grey, espresso, or a stronger hue — and the furniture has to hold up.",
        },
      ],
    },
  },
  showcase: {
    introParagraph: [
      {
        type: "text",
        value:
          "→ Colorful leather is the hide we use when a reupholstery needs even color and ",
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
          " wear — living-room sofas, dining chairs, and contract seating.",
      },
    ],
    defaultVariantId: "espresso",
    captionCollectionLabel: "Colorful collection",
    variantAriaLabelSuffix: "colorful leather showcase",
    variants: [
      {
        id: "espresso",
        label: "Espresso",
        lifestyleSrc: projectPhoto(
          "full-leather-reupholstery-chair-fabric-leather-protected-palette-espresso-after.png",
          "repair-after",
        ),
        lifestyleAlt:
          "Chair after a full reupholstery in Espresso Colorful leather",
        lifestyleWidth: 1200,
        lifestyleHeight: 800,
        swatchSrc: showcaseSwatch("Espresso", "Colorful_Espresso.jpg"),
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Espresso colorful leather swatch with a deep brown grain",
        description:
          "Espresso colorful leather—deep brown, matte coat, pebble grain. A well-used fabric and leather chair, reupholstered for a richer color and a surface that can take daily sitting.",
      },
      {
        id: "cream",
        label: "Cream",
        lifestyleSrc: projectPhoto(
          "full-leather-reupholstery-sofa-set-white-protected-palette-cream-irvine-after.png",
          "repair-after",
        ),
        lifestyleAlt:
          "Cream sofa set in Irvine after a full reupholstery in protected Colorful leather",
        lifestyleWidth: 1200,
        lifestyleHeight: 800,
        swatchSrc: showcaseSwatch("Cream", "Colorful_Cream.jpg"),
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Cream colorful leather swatch with a fine pebble grain",
        description:
          "Cream colorful leather—soft neutral, even color, fine pebble grain. Irvine sofa set after a full reupholstery: worn seating brought back to a clean, comfortable room.",
      },
      {
        id: "grey",
        label: "Grey",
        lifestyleSrc: projectPhoto(
          "full-leather-reupholstery-restoration-chair-grey-bustle-back-palette-grey-los-angeles-after.png",
          "repair-after",
        ),
        lifestyleAlt:
          "Grey bustle-back chair in Los Angeles after a full leather reupholstery",
        lifestyleWidth: 1200,
        lifestyleHeight: 800,
        swatchSrc: showcaseSwatch("Grey", "Colorful_Grey.jpg"),
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Grey colorful leather swatch with a cool pebble grain",
        description:
          "Grey colorful leather—cool tone, even color, protected matte hand. Los Angeles bustle-back chair after a full reupholstery, with the comfort and the outline of the chair restored.",
      },
      {
        id: "white",
        label: "White",
        lifestyleSrc: projectPhoto(
          "full-leather-reupholstery-chair-dining-dark-brown-white-bonded-palette-laguna-niguel-after.png",
          "repair-after",
        ),
        lifestyleAlt:
          "Laguna Niguel dining chair after a full reupholstery in dark brown and white Colorful leather",
        lifestyleWidth: 1200,
        lifestyleHeight: 800,
        swatchSrc: showcaseSwatch("White", "Colorful_White.jpg"),
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "White colorful leather swatch with a pale pebble grain",
        description:
          "White colorful leather—pale, even, and protected. Laguna Niguel dining chair after a full reupholstery in dark brown and white, finished so the seats read clean again.",
      },
    ],
  },
  industryInsights: {
    leadArticle: "workshop",
    designArticle: {
      heading: "Why Choose Colorful Leather for Upholstery",
      subtitle: "Ask a Pro: Interior Design Perspective",
      imageFloat: "right",
      image: {
        src: "https://res.cloudinary.com/leathera/image/upload/c_fill,g_auto,w_800,h_900/leather/Colorful/Colorful_Mango.jpg",
        alt: "Close-up of Mango colorful leather used for upholstery specification",
        title: "Colorful leather interior specification",
        caption: "Mango is one of the stronger colorways in the line.",
      },
      blocks: [
        {
          type: "paragraph",
          quoteLeft: true,
          parts: [
            {
              type: "text",
              value:
                "When I specify Colorful leather, I want a protected hide with a real range of color — cream and grey when the room should stay quiet, espresso or a stronger hue when the furniture should lead. The matte coat keeps large panels even, and the pebble grain stops a sofa or dining run from looking like a coated slab.",
            },
          ],
        },
        {
          type: "caption",
          parts: [
            {
              type: "text",
              value:
                "The matte coat keeps the color even while the pebble grain still reads as hide.",
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
                "I use it on residential sofas, dining chairs, and lounge seating, and in hospitality rooms where the color has to stay consistent under daily use. Check the swatch in the actual light. These hides are even, but a cream and a white still read differently once they are on the frame.",
            },
          ],
        },
      ],
    },
    workshopArticle: {
      heading: "Colorful Leather in Residential and Contract Interiors",
      subtitle: "Ask a Pro: Upholstery Workshop Perspective",
      imageFloat: "right",
      image: {
        src: projectPhoto(
          "full-leather-reupholstery-sofa-set-white-protected-palette-cream-irvine-before.png",
          "repair-before",
        ),
        alt: "Worn white sofa set in Irvine before a full reupholstery in cream Colorful leather",
        title: "Irvine sofa set before a full reupholstery in cream Colorful leather",
        caption: "Irvine sofa set, before a full reupholstery in cream Colorful leather.",
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
                " standpoint, Colorful leather is a hide we put on furniture that needs a clean, even color. A sofa set in Irvine came into the ",
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
                " worn and tired. We reupholstered the set in cream protected leather. The matte coat kept the color consistent, and the seating went back comfortable and finished.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              value:
                "The same hide shows up on single chairs. A well-used fabric and leather chair was recovered in espresso so the color went deeper and the surface could take daily use. In ",
            },
            {
              type: "link",
              link: {
                href: "/leather-furniture-repair-in-los-angeles",
                title: "Leather furniture repair in Los Angeles",
                label: "Los Angeles",
              },
            },
            {
              type: "text",
              value:
                ", a grey bustle-back chair got a full reupholstery in grey Colorful leather — the outline of the chair stayed, and the upholstery was renewed. Dining chairs in Laguna Niguel were done in dark brown and white, a practical pairing for seats that get sat in every day.",
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
                "A full reupholstery in cream Colorful leather brought a worn Irvine sofa set back to a clean, usable room.",
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
