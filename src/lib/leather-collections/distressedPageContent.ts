import type { CollectionPageContent } from "./collectionPageContent";

/** Cropped hospitality chair photo for Showcase only (no Cloudinary label/swatch overlay). */
const distressedShowcaseChocolateLifestyleUrl =
  "https://res.cloudinary.com/leathera/image/upload/c_crop,g_south,h_0.88/leather/Distressed/examples/high-end_lounge_side_chair_in_a_luxurious_hospitality_setting_upholstered_in_distressed_chocolate_brown_leather.webp";

export const distressedPageContent = {
  ids: {
    section: "distressed-collection",
    heading: "distressed-heading",
    previewVideo: "distressed-preview-video",
    whatHeading: "distressed-what-heading",
    pullUpHeading: "distressed-pull-up-heading",
    showcase: "distressed-showcase",
    showcaseHeading: "distressed-showcase-heading",
    industryInsights: "distressed-industry-insights",
    industryInsightsHeading: "distressed-industry-insights-heading",
    insightsDesignHeading: "distressed-insights-design-heading",
    insightsWorkshopHeading: "distressed-insights-workshop-heading",
  },
  hero: {
    title: "Distressed Leather",
    tagline:
      "Relaxed, timeworn grain with natural character—ideal for a curated sofa.",
    posterAlt: "Close up of Distressed Leather",
    videoTitle: "Distressed leather preview video",
    accentColor: "#f8991d",
    getQuoteHref: "/leather-for-upholstery#collections",
    getQuoteTitle: "Browse upholstery leather collections",
    quoteSidebarHref: "/leather-for-upholstery#leather-material-quote",
  },
  swatchLabels: {
    groupAriaLabel: "Distressed leather color swatches",
    namePrefix: "Distressed",
    swatchAltPrefix: "Distressed leather",
    textureModalAltDescriptor: "texture — black distressed leather",
  },
  whatIs: {
    heading: "What is Distressed Leather?",
    introParagraph: [
      { type: "strong", value: "Distressed Leather" },
      { type: "text", value: " is an " },
      {
        type: "link",
        link: {
          href: "/types-of-leather",
          title: "Types of leather for upholstery",
          label: "aniline-dyed",
        },
      },
      { type: "text", value: " leather with a soft feel and " },
      { type: "em", value: "vintage-rustic" },
      { type: "text", value: " look. Oils and waxes create a " },
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
          " that develops lighter tones under stress, adding character and depth. Distressed hides vary naturally, making them ideal for authentic ",
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
    useCases: ["Furniture", "Interiors", "Bags, Garments"],
    useCaseImage: {
      src: "https://res.cloudinary.com/leathera/image/upload/l_image:upload:leather:Distressed:Distressed_Leather_Chocolate/c_scale,fl_relative,w_0.13/o_100/fl_layer_apply,g_south_east,x_0.03,y_0.02/g_south_west,x_20,y_20,l_text:montserrat_75_style_light:Chocolate,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Distressed/examples/high-end_lounge_side_chair_in_a_luxurious_hospitality_setting_upholstered_in_distressed_chocolate_brown_leather.webp",
      alt: "High-end lounge chair in a luxury hospitality setting upholstered in distressed chocolate brown leather",
      caption:
        "Chocolate color option on accent seating in a hospitality interior.",
    },
    pullUpEffect: {
      imageSrc:
        "https://res.cloudinary.com/leathera/image/upload/v1778893871/leather/Distressed/examples/distressed-leather-pull-up-effect.jpg",
      imageAlt:
        "Close-up of brown distressed leather showing the pull-up effect, with lighter tones where oils and waxes shift under stress",
      imageTitle: "Distressed leather pull-up effect",
      label: "Pull-up effect",
      heading: "Understanding the Pull-Up Effect",
      paragraph: [
        { type: "text", value: "The pull-up effect is a defining characteristic of " },
        {
          type: "link",
          link: {
            href: "/leather-for-upholstery#collections",
            title: "Waxed leather upholstery collection",
            label: "waxed distressed leather",
          },
        },
        {
          type: "text",
          value:
            ". It occurs when oils and waxes within the leather move under pressure or stretching, temporarily revealing lighter tones in those areas. This creates natural depth and variation across the surface, giving each hide a unique, evolving aged character.",
        },
      ],
    },
  },
  showcase: {
    introParagraph: [
      { type: "text", value: "→ Distressed leather fits residential and contract projects where you want rich character plus " },
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
    defaultVariantId: "baby-blue",
    captionCollectionLabel: "Distressed collection",
    variantAriaLabelSuffix: "distressed leather showcase",
    variants: [
      {
        id: "baby-blue",
        label: "Baby Blue",
        lifestyleSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,g_south,h_0.82/leather/Distressed/examples/distressed-leather-baby-blue-color-leather-ottoman.png",
        lifestyleAlt:
          "Round button-tufted ottoman in muted Baby Blue distressed leather in a bright living room",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Baby%20Blue,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Distressed/Distressed_Leather_BabyBlue.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Baby Blue distressed leather swatch with fine crackle texture",
        description:
          "Baby Blue distressed leather—muted steel-blue with fine crackle grain, tonal depth, soft matte sheen. Tufted round ottoman in a bright living room: versatile residential centerpiece & contract seating",
      },
      {
        id: "chocolate",
        label: "Chocolate",
        lifestyleSrc: distressedShowcaseChocolateLifestyleUrl,
        lifestyleAlt:
          "High-end wingback lounge chair in distressed chocolate brown leather in a luxury hospitality interior",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Chocolate,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Distressed/Distressed_Leather_Chocolate.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Chocolate distressed leather swatch with crackled vintage texture",
        description:
          "Chocolate distressed leather—deep cocoa crackle grain, warm tonal highs and lows. Wingback chair in a hospitality lobby shows premium character for residential libraries & contract seating. Rich tone.",
      },
      {
        id: "black",
        label: "Black",
        lifestyleSrc:
          "https://res.cloudinary.com/leathera/image/upload/v1778880309/leather/Distressed/examples/distressed-leather-black-color-option-oversized-sectional-sofa-with-chaise-upscale-condo-setting.png",
        lifestyleAlt:
          "Oversized distressed black leather sectional with chaise in an upscale condo living space",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Black,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Distressed/Distressed_Leather_Black.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Black distressed leather swatch with deep crackle grain",
        description:
          "Black distressed leather—deep charcoal crackle grain, silvery ridge highlights, dramatic presence. Oversized sectional with chaise in an upscale condo: bold open-plan living & contract-scale seating.",
      },
      {
        id: "sand",
        label: "Sand",
        lifestyleSrc:
          "https://res.cloudinary.com/leathera/image/upload/v1778880300/leather/Distressed/examples/distressed-leather-sand-color-option-bed-headboard-footboard-nailhead-trim-in-surburban-home.png",
        lifestyleAlt:
          "Bed with headboard and footboard in Sand distressed leather with nailhead trim in a suburban home",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Sand,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Distressed/Distressed_Leather_Sand.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Sand distressed leather swatch with warm brown crackle texture",
        description:
          "Sand distressed leather—warm earthy brown, cream crackle veining, tonal depth. Bed with headboard, footboard & nailhead trim in a suburban home—relaxed bedrooms, hospitality-caliber durability & fit.",
      },
      {
        id: "ivory",
        label: "Ivory",
        lifestyleSrc:
          "https://res.cloudinary.com/leathera/image/upload/v1778881205/leather/Distressed/examples/distressed-leather-ivory-color-option-restaurant-dining-chairs-in-fine-dining-setting.png",
        lifestyleAlt:
          "Fine-dining restaurant dining chairs upholstered in Ivory distressed leather around a dark wood table",
        lifestyleWidth: 900,
        lifestyleHeight: 600,
        swatchSrc:
          "https://res.cloudinary.com/leathera/image/upload/c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:Ivory,co_rgb:ffffff/bo_1px_solid_rgb:000000/leather/Distressed/Distressed_Leather_ivory.jpg",
        swatchWidth: 400,
        swatchHeight: 80,
        swatchAlt: "Ivory distressed leather swatch with warm off-white crackle texture",
        description:
          "Ivory distressed leather—neutral beige, matte grain & tonal variation. Fine-dining restaurant chairs showcase hospitality-ready upholstery: refined commercial interiors & enduring everyday durability.",
      },
    ],
  },
  industryInsights: {
    designArticle: {
      heading: "Why Choose Distressed Leather for Upholstery",
      subtitle: "Ask a Pro: Interior Design Perspective",
      imageFloat: "right",
      image: {
        src: "https://res.cloudinary.com/leathera/image/upload/c_crop,g_north,h_0.9/leather/Distressed/examples/distressed-leather-interior-design-selection.png",
        alt: "Distressed leather color swatches and samples laid out for interior design selection",
        title: "Distressed leather interior design selection",
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
                "When I choose distressed leather for a project, I'm usually trying to bring warmth and character into a space that would otherwise feel too flat or modern. The appeal is that it doesn't look manufactured or overly perfect — it feels lived-in from day one. That's something clients respond to immediately, especially in residential living spaces.",
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
      heading: "Distressed Leather in Residential and Commercial Interiors",
      subtitle: "Ask a Pro: Upholstery Workshop Perspective",
      imageFloat: "left",
      image: {
        src: "https://res.cloudinary.com/leathera/image/upload/c_crop,g_north,h_0.9/leather/Distressed/examples/distressed-leather-upholstery-shop-selection-explained-selection.png",
        alt: "Distressed leather hides and swatches selected in an upholstery workshop",
        title: "Distressed leather upholstery shop selection",
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
                " standpoint, distressed leather is one of the most practical materials we work with in higher-end furniture builds at our ",
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
                "For hotels, restaurants, and lounges, distressed leather is ideal for high-traffic seating because its tonal variation helps hide wear while maintaining a refined look.",
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
