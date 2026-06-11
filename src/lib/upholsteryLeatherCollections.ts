import type { Metadata } from "next";

export const LEATHER_MATERIAL_QUOTE_FORM_ID = "wG2Wv3fqKYus" as const;

export const LEATHER_MATERIAL_QUOTE_URL =
  "/leather-for-upholstery#leather-material-quote" as const;

/** Collection slugs with a published dedicated page (hub swatches may exist for others). */
export const UPHOLSTERY_LEATHER_PUBLISHED_PAGE_SLUGS = [
  "distressed-leather",
  "antique-leather",
] as const;

export function upholsteryLeatherCollectionHref(slug: string): string {
  if (
    (UPHOLSTERY_LEATHER_PUBLISHED_PAGE_SLUGS as readonly string[]).includes(
      slug,
    )
  ) {
    return `/${slug}`;
  }
  return LEATHER_MATERIAL_QUOTE_URL;
}

const CLOUDINARY_VERSION = "v1716792018";

/**
 * Italian flag + centered label + base hide image (Cloudinary composite).
 * @param width Final composite width in px (e.g. 300 grid, 600 hero).
 */
export function collectionCompositeImageUrl(
  overlayText: string,
  imageFile: string,
  width: number,
): string {
  const textEnc = encodeURIComponent(overlayText);
  return `https://res.cloudinary.com/leathera/image/upload/l_image:upload:icons:flag-of-italy/c_scale,fl_relative,w_0.15/o_80/fl_layer_apply,g_south,y_0.08/c_scale,w_${width}/g_center,l_text:montserrat_45_style_light:${textEnc},co_rgb:ffffff/${CLOUDINARY_VERSION}/leather/main/${imageFile}`;
}

export type UpholsteryLeatherCollection = {
  slug: string;
  name: string;
  overlayText: string;
  imageFile: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  paragraphs: string[];
};

export const UPHOLSTERY_LEATHER_COLLECTIONS: UpholsteryLeatherCollection[] = [
  {
    slug: "distressed-leather",
    name: "Distressed Leather",
    overlayText: "Distressed",
    imageFile: "Distressed-Leather-Main.jpg",
    metaTitle: "Distressed Leather for Upholstery | Italian Hides | ReLeather",
    metaDescription:
      "Distressed upholstery leather hides for furniture and sofa leather projects. Italian-finished character leather. Request a material quote from ReLeather.",
    tagline:
      "Relaxed, timeworn character with real grain—ideal when you want sofa leather that feels curated, not generic.",
    paragraphs: [
      "Distressed Leather is an aniline-dyed leather with a soft feel and vintage-rustic look. Oils and waxes create a pull-up effect that develops lighter tones under stress, adding character and depth. Distressed hides vary naturally, making them ideal for authentic upholstery without a uniform look. Durable and protective, it's recommended for:",
    ],
  },
  {
    slug: "antique-leather",
    name: "Antique Leather",
    overlayText: "Antique",
    imageFile: "Antique-Leather-Main.jpg",
    metaTitle: "Antique Leather for Upholstery | European Hides | ReLeather",
    metaDescription:
      "Antique upholstery leather with two-tone sauvage finish for furniture, hospitality, and handbags. European semi-aniline hides with protected patina. Order swatches from ReLeather.",
    tagline:
      "Classic warmth and old-world charm—beautiful on traditional frames and mixed-finish interiors.",
    paragraphs: [
      "Antique leather collections lean into softened tones, subtle two-tone effects, and finishes that feel heritage without sacrificing the performance expectations of modern upholstery leather.",
      "Use antique-look hides when you want leather upholstery material that pairs with wood trim, brass details, and layered textiles. It is a strong direction for libraries, offices, and residential living rooms where the goal is timeless depth.",
    ],
  },
  {
    slug: "waxed-leather",
    name: "Waxed Leather",
    overlayText: "Waxed",
    imageFile: "Waxed-Leather-Main.jpg",
    metaTitle: "Waxed Leather for Upholstery | Italian Hides | ReLeather",
    metaDescription:
      "Waxed upholstery leather hides with pull-up character for furniture. Durable sofa leather options finished in Italy. Request samples and a quote.",
    tagline:
      "Pull-up motion, soft hand, and a finish that tells a story as the piece is used.",
    paragraphs: [
      "Waxed leather is prized for the way oils and waxes migrate under stress, creating lighter highs and richer lows across cushions and arms. It is a standout leather upholstery material when you want visible craft on sectionals, ottomans, and lounge seating.",
      "This category is ideal for clients who understand that character is a feature: expect variation across hides and plan yardage accordingly for large sofa leather layouts.",
    ],
  },
  {
    slug: "colorful-leather",
    name: "Colorful Leather",
    overlayText: "Colorful",
    imageFile: "Colorful-Leather-Main.jpg",
    metaTitle: "Colorful Leather for Upholstery | Italian Hides | ReLeather",
    metaDescription:
      "Bold colorful upholstery leather for modern furniture, accents, and commercial seating. Italian leather hides for furniture in statement hues.",
    tagline:
      "Jewel tones, modern brights, and confident color for upholstery that leads the room.",
    paragraphs: [
      "Colorful leather is how you move beyond default browns and greys while still specifying real hides rather than coated imitations. These collections are built for designers who treat furniture leather as a primary finish, not an afterthought.",
      "When you are specifying leather hides for furniture with strong color, always validate under your project's lighting. Our sampling workflow helps you match adjacent materials and trim.",
    ],
  },
  {
    slug: "designer-leather",
    name: "Designer Leather",
    overlayText: "Designer",
    imageFile: "Designer-Leather-Main.jpg",
    metaTitle: "Designer Leather for Upholstery | Italian Hides | ReLeather",
    metaDescription:
      "Designer upholstery leather curated for high-end residential and boutique commercial work. Premium furniture leather hides. ReLeather material quotes.",
    tagline:
      "Editorial textures and refined finishes for interiors where details are non-negotiable.",
    paragraphs: [
      "Designer leather sits at the intersection of aesthetics and discipline: distinctive grain stories, controlled sheen, and color palettes tuned for upholstery panels rather than small goods.",
      "If your specification calls for upholstery leather that photographs well and performs on large expanses, start here and narrow by hand, thickness, and maintenance expectations for the end user.",
    ],
  },
  {
    slug: "aniline-leather",
    name: "Aniline Leather",
    overlayText: "Aniline",
    imageFile: "Aniline-Leather-Main.jpg",
    metaTitle: "Aniline Leather for Upholstery | Italian Hides | ReLeather",
    metaDescription:
      "Aniline and aniline-type upholstery leather for premium furniture. Transparent dye beauty with real grain. Compare hides and request a ReLeather quote.",
    tagline:
      "Transparent color logic and grain-forward beauty—the luxury lane of upholstery leather.",
    paragraphs: [
      "Aniline leather uses transparent dyeing so the hide structure remains visible. It is the upholstery leather families choose when they want depth, softness, and a high-end look on lounge seating—while understanding that lighter protection means smarter placement and care.",
      "If you are comparing leather upholstery material options for a primary sofa, weigh sunlight exposure, pets, and cleaning habits. We can help you balance aesthetics with real-world maintenance.",
    ],
  },
  {
    slug: "restoration-leather",
    name: "Restoration Leather",
    overlayText: "Restoration",
    imageFile: "Restoration-Leather-Main.jpg",
    metaTitle: "Restoration Leather for Upholstery | Italian Hides | ReLeather",
    metaDescription:
      "Restoration-style upholstery leather for vintage frames, reupholstery, and matched repairs. Furniture leather hides that complement classic pieces.",
    tagline:
      "Period-correct moods and dependable performance for rebuilds and designer restorations.",
    paragraphs: [
      "Restoration leather is less a single chemistry and more a curated family of looks that play nicely with older silhouettes: warm browns, restrained sheen, and textures that hide minor imperfections across mixed panels.",
      "This is a practical hub category when you are sourcing leather hides for furniture that must feel believable next to existing wood tones and patinated metals.",
    ],
  },
  {
    slug: "nubuck-leather",
    name: "Nubuck Leather",
    overlayText: "Nubuck",
    imageFile: "Nubuck-Leather-Main.jpg",
    metaTitle: "Nubuck Leather for Upholstery | Italian Hides | ReLeather",
    metaDescription:
      "Nubuck upholstery leather with a refined, velvety nap for premium seating. Understand care, then specify with confidence. Samples from ReLeather.",
    tagline:
      "Velvet-like grain break and a couture hand—specified intentionally, maintained carefully.",
    paragraphs: [
      "Nubuck is created by sanding or brushing the grain side for a soft, directional nap. It is a stunning furniture leather when the setting respects its sensitivity to oils and moisture.",
      "Specify nubuck for lower-abrasion applications or pieces where the tactile experience matters most. We will help you translate the look you want into the right leather upholstery material for the frame and use case.",
    ],
  },
  {
    slug: "sauvage-leather",
    name: "Sauvage Leather",
    overlayText: "Sauvage",
    imageFile: "Vibrant-Leather-Main.jpg",
    metaTitle: "Sauvage Leather for Upholstery | Italian Hides | ReLeather",
    metaDescription:
      "Sauvage upholstery leather hides in bold, saturated hues for modern furniture and statement seating. Italian-finished leather hides for furniture. Request a material quote.",
    tagline:
      "Confident color and contemporary energy—Italian hides finished for upholstery that makes a statement.",
    paragraphs: [
      "Sauvage leather brings vivid, fashion-forward color to upholstery panels without sacrificing the hand and structure expected on sofas, sectionals, and accent seating.",
      "Specify Sauvage when you want leather upholstery material with strong chroma and a refined pebble grain—ideal for residential showpieces and hospitality lounges that need color with real hide character.",
    ],
  },
  {
    slug: "pull-up-leather",
    name: "Pull-Up Leather",
    overlayText: "Pull Up",
    imageFile: "Pull-up-Leather-Main.jpg",
    metaTitle: "Pull-Up Leather for Upholstery | Italian Hides | ReLeather",
    metaDescription:
      "Pull-up upholstery leather hides with migrating color for rustic and high-end furniture. Italian wax and oil pull-up sofa leather. Get a material quote.",
    tagline:
      "Stress-reactive color migration—beautiful motion across cushions and arms over time.",
    paragraphs: [
      "Pull-up leather is defined by its living finish: stretch and flex reveal lighter tones while pressure and heat deepen richness. It is a favorite leather upholstery material for relaxed luxury interiors and commercial lounges that want warmth without stiffness.",
      "If you are specifying pull-up for large sofa leather layouts, discuss lot matching and expected variation up front so yardage and paneling stay predictable through production.",
    ],
  },
  {
    slug: "western-leather",
    name: "Western Leather",
    overlayText: "Western",
    imageFile: "Western-Leather-Main.jpg",
    metaTitle: "Western Leather for Upholstery | Italian Hides | ReLeather",
    metaDescription:
      "Western-style upholstery leather with rugged grain and earthy tones for furniture and hospitality. Italian leather hides for furniture. Get a leather material quote.",
    tagline:
      "Earthy tones and tactile grain—leather with ranch-house warmth and upholstery-grade performance.",
    paragraphs: [
      "Western leather pairs rich browns, navy, and natural grain stories for interiors that feel grounded and authentic—without the inconsistency of commodity splits.",
      "Use Western hides when you want furniture leather with visible texture on club chairs, sectionals, and commercial seating that calls for character and durability.",
    ],
  },
  {
    slug: "vintage-leather",
    name: "Vintage Leather",
    overlayText: "Vintage",
    imageFile: "Vintage-Leather-Main.jpg",
    metaTitle: "Vintage Leather for Upholstery | Italian Hides | ReLeather",
    metaDescription:
      "Vintage-look upholstery leather for classic frames, libraries, and curated residential seating. Italian leather hides for furniture. Request samples and a quote.",
    tagline:
      "Timeworn depth and softened color—specified when the frame deserves a believable aged finish.",
    paragraphs: [
      "Vintage leather collections emphasize warm, layered tones and natural marking that read as heritage rather than uniform coating—well suited to reupholstery and designer restorations.",
      "If you are sourcing leather hides for furniture that must feel collected over time, Vintage is a practical direction for sofas, wing chairs, and hospitality pieces with traditional silhouettes.",
    ],
  },
];

/** Finish- and grain-style filters for the /leather-for-upholstery collection grid */
export type UpholsteryCollectionFilterId =
  | "all"
  | "aniline"
  | "semi-aniline"
  | "pigmented"
  | "wax-pull-up"
  | "oil-pull-up"
  | "distressed"
  | "nubuck"
  | "fine-grain"
  | "pebble-grain"
  | "natural-grain"
  | "smooth-grain";

export type UpholsteryCollectionFilterOption = {
  id: UpholsteryCollectionFilterId;
  label: string;
  /** Collection slugs to show; `null` = all */
  slugs: readonly string[] | null;
};

export const UPHOLSTERY_COLLECTION_FILTERS: readonly UpholsteryCollectionFilterOption[] =
  [
    { id: "all", label: "All", slugs: null },
    {
      id: "aniline",
      label: "Aniline",
      slugs: ["aniline-leather"],
    },
    {
      id: "semi-aniline",
      label: "Semi-Aniline",
      slugs: ["antique-leather", "sauvage-leather"],
    },
    {
      id: "pigmented",
      label: "Pigmented",
      slugs: ["colorful-leather", "designer-leather"],
    },
    {
      id: "wax-pull-up",
      label: "Wax Pull Up",
      slugs: ["waxed-leather", "pull-up-leather", "western-leather"],
    },
    {
      id: "oil-pull-up",
      label: "Oil Pull Up",
      slugs: ["vintage-leather"],
    },
    {
      id: "distressed",
      label: "Distressed",
      slugs: ["distressed-leather", "restoration-leather", "vintage-leather"],
    },
    {
      id: "nubuck",
      label: "Nubuck",
      slugs: ["nubuck-leather"],
    },
    {
      id: "fine-grain",
      label: "Fine Grain",
      slugs: ["antique-leather", "colorful-leather"],
    },
    {
      id: "pebble-grain",
      label: "Pebble Grain",
      slugs: ["designer-leather", "sauvage-leather"],
    },
    {
      id: "natural-grain",
      label: "Natural Grain",
      slugs: ["western-leather", "restoration-leather"],
    },
    {
      id: "smooth-grain",
      label: "Smooth Grain",
      slugs: [
        "waxed-leather",
        "pull-up-leather",
        "vintage-leather",
        "nubuck-leather",
        "aniline-leather",
      ],
    },
  ];

export function isUpholsteryCollectionFilterId(
  value: string,
): value is UpholsteryCollectionFilterId {
  return UPHOLSTERY_COLLECTION_FILTERS.some((f) => f.id === value);
}

export function collectionsForUpholsteryFilter(
  filterId: UpholsteryCollectionFilterId,
): UpholsteryLeatherCollection[] {
  const opt = UPHOLSTERY_COLLECTION_FILTERS.find((o) => o.id === filterId);
  if (!opt?.slugs?.length) {
    return [...UPHOLSTERY_LEATHER_COLLECTIONS];
  }
  const allow = new Set(opt.slugs);
  return UPHOLSTERY_LEATHER_COLLECTIONS.filter((c) => allow.has(c.slug));
}

export function getUpholsteryLeatherCollection(
  slug: string,
): UpholsteryLeatherCollection {
  const found = UPHOLSTERY_LEATHER_COLLECTIONS.find((c) => c.slug === slug);
  if (!found) {
    throw new Error(`Unknown upholstery leather collection: ${slug}`);
  }
  return found;
}

export function makeLeatherCollectionMetadata(
  c: UpholsteryLeatherCollection,
): Metadata {
  const ogImage = collectionCompositeImageUrl(
    c.overlayText,
    c.imageFile,
    1200,
  );
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/${c.slug}` },
    openGraph: {
      url: `/${c.slug}`,
      title: c.metaTitle,
      description: c.metaDescription,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 800,
          alt: `${c.name} upholstery leather`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.metaDescription,
      images: [ogImage],
    },
  };
}
