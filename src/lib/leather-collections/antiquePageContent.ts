import type { CollectionPageContent } from "./collectionPageContent";

/** Cropped hospitality lobby photo for Showcase only (no Cloudinary label/swatch overlay). */
const antiqueShowcasePomegranateLifestyleUrl =
  "https://res.cloudinary.com/leathera/image/upload/c_crop,g_south,h_0.88/v1728811006/leather/Antique/examples/A_luxury_modern_hotel_lobby_lounge_couch_upholstered_in_deep_red_pomegranate-colored_leather_with_a_subtle_texture._The_couch_design_is_sleek_with_cle_irpvej.webp";

export const antiquePageContent = {
  ids: {
    section: "antique-collection",
    heading: "antique-heading",
    previewVideo: "antique-preview-video",
    whatHeading: "antique-what-heading",
    pullUpHeading: "antique-sauvage-heading",
    showcase: "antique-showcase",
    showcaseHeading: "antique-showcase-heading",
    industryInsights: "antique-industry-insights",
    industryInsightsHeading: "antique-industry-insights-heading",
    insightsDesignHeading: "antique-insights-design-heading",
    insightsWorkshopHeading: "antique-insights-workshop-heading",
  },
  hero: {
    title: "Antique Leather",
    tagline:
      "Two-tone sauvage patina with natural grain—ideal for curated upholstery.",
    posterAlt: "Close up of Antique Leather",
    videoTitle: "Antique leather preview video",
    accentColor: "#f8991d",
    getQuoteHref: "/leather-for-upholstery#collections",
    getQuoteTitle: "Browse upholstery leather collections",
    quoteSidebarHref: "/leather-for-upholstery#leather-material-quote",
  },
  swatchLabels: {
    groupAriaLabel: "Antique leather color swatches",
    namePrefix: "Antique",
    swatchAltPrefix: "Antique leather",
    textureModalAltDescriptor: "texture — black antique leather",
  },
  whatIs: {
    heading: "What is Antique Leather?",
    introParagraph: [
      { type: "strong", value: "Antique Leather" },
      { type: "text", value: " is a premium " },
      {
        type: "link",
        link: {
          href: "/types-of-leather",
          title: "Types of leather for upholstery",
          label: "semi-aniline",
        },
      },
      { type: "text", value: " leather with a protected finish and " },
      { type: "em", value: "two-tone sauvage" },
      { type: "text", value: " character. Lighter and darker hues blend naturally, creating an " },
      {
        type: "link",
        link: {
          href: "/types-of-leather#semi-aniline-leather",
          title: "Semi-aniline leather types",
          label: "antique-like patina",
        },
      },
      {
        type: "text",
        value:
          " that adds depth and dimension over time. Antique hides vary naturally, making them ideal for authentic ",
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
          " without a uniform look. Durable and protective, it's recommended for:",
      },
    ],
    useCases: ["Furniture", "Hospitality", "Garments, Handbags"],
    useCaseImage: {
      src: "https://res.cloudinary.com/leathera/image/upload/l_image:upload:leather:Antique:Antique_Leather_Bayou/c_scale,fl_relative,w_0.13/o_100/fl_layer_apply,g_south_east,x_0.03,y_0.04/g_south_west,x_20,y_20,l_text:montserrat_75_style_light:Bayou,co_rgb:ffffff/bo_1px_solid_rgb:000000/v1728727463/leather/antique/examples/Here_is_the_luxurious_armchair_upholstered_in_the_deep_blue_Bayou_leather_perfectly_suited_for_a_high-end_setting.webp",
      alt: "Luxurious armchair upholstered in deep blue Bayou antique leather in a high-end interior setting",
      caption:
        "Bayou color option on accent seating in a hospitality interior.",
    },
    pullUpEffect: {
      imageSrc:
        "https://res.cloudinary.com/leathera/image/upload/c_scale,w_800/v1717001453/leather/Antique/Antique_Leather_Black.jpg",
      imageAlt:
        "Close-up of black antique leather showing the two-tone sauvage finish, with lighter and darker hues blending across the natural fine grain",
      imageTitle: "Antique leather sauvage two-tone finish",
      label: "Two-tone finish",
      heading: "Understanding the Sauvage Effect",
      paragraph: [
        { type: "text", value: "The sauvage effect is a defining characteristic of " },
        {
          type: "link",
          link: {
            href: "/leather-for-upholstery#collections",
            title: "Antique leather upholstery collection",
            label: "antique leather",
          },
        },
        {
          type: "text",
          value:
            ". It occurs when two shades or tones are combined in the finish, creating a dimensional appearance where lighter and darker hues blend naturally across the surface. This gives each hide a subtle, evolving antique-like patina and depth.",
        },
      ],
    },
  },
  showcase: {
    introParagraph: [
      { type: "text", value: "→ Antique leather fits residential and contract projects where you want rich character plus " },
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
    defaultVariantId: "pomegranate",
    captionCollectionLabel: "Antique collection",
    variantAriaLabelSuffix: "antique leather showcase",
    variants: [
      {
        id: "pomegranate",
        label: "Pomegranate",
        lifestyleSrc: antiqueShowcasePomegranateLifestyleUrl,
        lifestyleAlt:
          "Luxury modern hotel lobby lounge couch upholstered in deep red Pomegranate antique leather with a subtle texture",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Pomegranate,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Antique/Antique_Leather_Pomegranate.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Pomegranate antique leather swatch with two-tone sauvage texture",
        description:
          "Pomegranate antique leather—deep red two-tone grain, sauvage patina, soft protected sheen. Hotel lobby lounge couch in a luxury setting: versatile residential centerpiece & contract seating",
      },
      {
        id: "bayou",
        label: "Bayou",
        lifestyleSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,g_south,h_0.88/v1728727463/leather/antique/examples/Here_is_the_luxurious_armchair_upholstered_in_the_deep_blue_Bayou_leather_perfectly_suited_for_a_high-end_setting.webp",
        lifestyleAlt:
          "Luxurious armchair upholstered in deep blue Bayou antique leather in a high-end hospitality interior",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Bayou,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Antique/Antique_Leather_Bayou.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Bayou antique leather swatch with deep blue two-tone texture",
        description:
          "Bayou antique leather—deep blue sauvage grain, warm tonal highs and lows. Armchair in a hospitality setting shows premium character for residential libraries & contract seating. Rich tone.",
      },
      {
        id: "pinto",
        label: "Pinto",
        lifestyleSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,g_south,h_0.88/v1729509422/leather/Antique/examples/Here_is_the_luxury_bar_stool_upholstered_in_dark_brown_leather_Pinto.webp",
        lifestyleAlt:
          "Luxury bar stool upholstered in dark brown Pinto antique leather in a high-end bar setting",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Pinto,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Antique/Antique_Leather_Pinto.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Pinto antique leather swatch with dark brown two-tone grain",
        description:
          "Pinto antique leather—dark brown sauvage grain, marbleized highlights, dramatic presence. Bar stool in a luxury setting: bold hospitality seating & contract-scale upholstery.",
      },
      {
        id: "cream",
        label: "Cream",
        lifestyleSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,g_south,h_0.88/v1729510059/leather/Antique/examples/Luxury_conference_chairs_upholstered_in_cream_leather_with_a_sleek_modern_design.webp",
        lifestyleAlt:
          "Luxury conference chairs upholstered in Cream antique leather with a sleek modern design",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Cream,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Antique/Antique_Leather_Cream.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Cream antique leather swatch with warm off-white two-tone texture",
        description:
          "Cream antique leather—warm neutral tone, fine grain & tonal variation. Conference chairs showcase hospitality-ready upholstery: refined commercial interiors & enduring everyday durability.",
      },
      {
        id: "ivory",
        label: "Ivory",
        lifestyleSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,g_south,h_0.88/v1729510059/leather/Antique/examples/Luxury_conference_chairs_upholstered_in_cream_leather_with_a_sleek_modern_design.webp",
        lifestyleAlt:
          "Fine-dining restaurant dining chairs upholstered in Ivory antique leather around a dark wood table",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Ivory,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Antique/Antique_Leather_Ivory.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Ivory antique leather swatch with warm off-white sauvage texture",
        description:
          "Ivory antique leather—neutral beige, matte grain & tonal variation. Fine-dining restaurant chairs showcase hospitality-ready upholstery: refined commercial interiors & enduring everyday durability.",
      },
    ],
  },
  industryInsights: {
    designArticle: {
      heading: "Why Choose Antique Leather for Upholstery",
      subtitle: "Ask a Pro: Interior Design Perspective",
      imageFloat: "right",
      image: {
        src: "https://res.cloudinary.com/leathera/image/upload/c_crop,g_north,h_0.9/v1728811006/leather/Antique/examples/A_luxury_modern_hotel_lobby_lounge_couch_upholstered_in_deep_red_pomegranate-colored_leather_with_a_subtle_texture._The_couch_design_is_sleek_with_cle_irpvej.webp",
        alt: "Antique leather color swatches and samples laid out for interior design selection",
        title: "Antique leather interior design selection",
        caption: "Designer selects colorways",
      },
      blocks: [
        {
          type: "paragraph",
          quoteLeft: true,
          parts: [
            {
              type: "text",
              value:
                "When I choose antique leather for a project, I'm usually trying to bring warmth and character into a space that would otherwise feel too flat or modern. The appeal is that it doesn't look manufactured or overly perfect — it feels lived-in from day one. That's something clients respond to immediately, especially in residential living spaces.",
            },
          ],
        },
        {
          type: "caption",
          parts: [
            {
              type: "text",
              value:
                "What I like most is how it evolves over time, developing a natural patina and tonal shifts that make it look more refined and layered rather than worn.",
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
                "From a design perspective, it's also incredibly forgiving. Natural variation in the hide means you're not fighting imperfections — you're working with them. That makes it ideal for large statement pieces like sofas or lounge chairs where you want texture, depth, and a slightly rustic luxury feel.",
            },
          ],
        },
      ],
    },
    workshopArticle: {
      heading: "Antique Leather in Residential and Commercial Interiors",
      subtitle: "Ask a Pro: Upholstery Workshop Perspective",
      imageFloat: "left",
      image: {
        src: "https://res.cloudinary.com/leathera/image/upload/c_crop,g_north,h_0.9/v1728727463/leather/antique/examples/Here_is_the_luxurious_armchair_upholstered_in_the_deep_blue_Bayou_leather_perfectly_suited_for_a_high-end_setting.webp",
        alt: "Antique leather hides and swatches selected in an upholstery workshop",
        title: "Antique leather upholstery shop selection",
        caption:
          "Upholsterer selects leather colorways for customer's home decor.",
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
                " standpoint, antique leather is one of the most practical materials we work with in higher-end furniture builds at our ",
            },
            {
              type: "link",
              link: {
                href: "/leather-restoration-orange-county",
                title: "Leather restoration and upholstery shop in Orange County",
                label: "upholstery shop in Orange County",
              },
            },
            {
              type: "text",
              value:
                ". It's durable, but more importantly, it hides the natural signs of use in a way that still looks intentional. That's a big reason it gets specified for hospitality projects.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            { type: "text", value: "In residential work, we see it used heavily on " },
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
                ", sectionals, and accent chairs. Homeowners like it because it doesn't feel sterile — it feels warm and slightly aged from the start. Even after years of use, it tends to look better rather than worse, which is not something you can say about all finishes.",
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
                "For hotels, restaurants, and lounges, antique leather is ideal for high-traffic seating because its tonal variation helps hide wear while maintaining a refined look.",
            },
          ],
        },
      ],
    },
  },
} as const satisfies CollectionPageContent;
