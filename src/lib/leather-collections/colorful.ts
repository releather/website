import type { LeatherCollectionDetail } from "./types";

const textureThumbUrl =
  "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:555555,c_crop,h_100/leather/Colorful/Colorful_Black.jpg";

const textureFullUrl =
  "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:555555,c_crop,g_south,r_max,w_400/leather/Colorful/Colorful_Black.jpg";

function swatchThumb(name: string, file: string): string {
  const label = encodeURIComponent(name);
  return `https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:${label},co_rgb:ffffff/leather/Colorful/${file}`;
}

const COLORS: readonly [name: string, file: string][] = [
  ["Avocado", "Colorful_Avocado.jpg"],
  ["Baby Camel", "Colorful_Baby-Camel.jpg"],
  ["Bamboo", "Colorful_Bamboo.jpg"],
  ["Bayou", "Colorful_Bayou.jpg"],
  ["Black", "Colorful_Black.jpg"],
  ["Charcoal", "Colorful_Charcoal.jpg"],
  ["Chocolate", "Colorful_Chocolate.jpg"],
  ["Coal", "Colorful_Coal.jpg"],
  ["Cream", "Colorful_Cream.jpg"],
  ["Dove", "Colorful_Dove.jpg"],
  ["Espresso", "Colorful_Espresso.jpg"],
  ["Fire Engine Red", "Colorful_Fire-Engine-Red.jpg"],
  ["Fog", "Colorful_Fog.jpg"],
  ["Fuchsia", "Colorful_Fuchsia.jpg"],
  ["Grey", "Colorful_Grey.jpg"],
  ["Harness Brown", "Colorful_Harness-Brown.jpg"],
  ["Hazelnut", "Colorful_Hazelnut.jpg"],
  ["Henna", "Colorful_Henna.jpg"],
  ["Iolite", "Colorful_Iolite.jpg"],
  ["Iris", "Colorful_Iris.jpg"],
  ["Ivory", "Colorful_Ivory.jpg"],
  ["Khaki", "Colorful_Khaki.jpg"],
  ["Mango", "Colorful_Mango.jpg"],
  ["Mist Blue", "Colorful_Mist-Blue.jpg"],
  ["Mocha", "Colorful_Mocha.jpg"],
  ["Navy", "Colorful_Navy.jpg"],
  ["Ocean", "Colorful_Ocean.jpg"],
  ["Oxblood", "Colorful_Oxblood.jpg"],
  ["Pebble", "Colorful_Pebble.jpg"],
  ["Plum", "Colorful_Plum.jpg"],
  ["Saddle", "Colorful_Saddle.jpg"],
  ["Sandstone", "Colorful_Sandstone.jpg"],
  ["Smoke Grey", "Colorful_Smoke-Grey.jpg"],
  ["Star", "Colorful_Star.jpg"],
  ["Stone", "Colorful_Stone.jpg"],
  ["Tan", "Colorful_Tan.jpg"],
  ["Taupe", "Colorful_Taupe.jpg"],
  ["White", "Colorful_White.jpg"],
  ["Wine", "Colorful_Wine.jpg"],
];

export const colorfulCollection = {
  slug: "colorful-leather",
  name: "Colorful Leather",
  heroPosterUrl:
    "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_crop,g_south,w_520/v1716792018/leather/main/Colorful-Leather-Main.jpg",
  swatches: COLORS.map(([name, file]) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name,
    thumbUrl: swatchThumb(name, file),
  })),
  specs: {
    size: "55 sq ft +/-",
    thickness: "0.9-1.1 mm / 2.25-2.75 oz",
    origin: "Italy",
    material: "Cowhide",
    type: "Aniline",
    finish: "Protected, Matte",
    grain: "Fine Pebble",
    category: "Protected",
    uses: "Furniture, Hospitality",
    texture: {
      label: "Fine Pebble Grain",
      thumbUrl: textureThumbUrl,
      fullUrl: textureFullUrl,
    },
    specsPdfUrl:
      "https://leathera.com/assets/images/specifications/Colorful-Leather-Specifications-Sheet.pdf",
    prop65PdfUrl:
      "https://drive.google.com/file/d/1lzJaLTB2lLjkuzy3LNY8EIf4eBNePInQ/view",
  },
} as const satisfies LeatherCollectionDetail;
