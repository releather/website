import type { LeatherCollectionDetail } from "./types";

const textureThumbUrl =
  "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:555555,c_crop,h_100/v1730626091/leather/Waxed/Waxed_Leather_Black.jpg";

const textureFullUrl =
  "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:555555,c_crop,g_south,r_max,w_400/v1730626091/leather/Waxed/Waxed_Leather_Black.jpg";

function swatchThumb(name: string, file: string): string {
  const label = encodeURIComponent(name);
  return `https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:${label},co_rgb:ffffff/v1730626091/leather/Waxed/${file}`;
}

export const waxedCollection = {
  slug: "waxed-leather",
  name: "Waxed Leather",
  heroPosterUrl:
    "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_crop,g_south,w_520/v1716792018/leather/main/Waxed-Leather-Main.jpg",
  swatches: [
    {
      id: "black",
      name: "Black",
      thumbUrl: swatchThumb("Black", "Waxed_Leather_Black.jpg"),
    },
    {
      id: "caramel",
      name: "Caramel",
      thumbUrl: swatchThumb("Caramel", "Waxed_Leather_Caramel.jpg"),
    },
    {
      id: "chivas",
      name: "Chivas",
      thumbUrl: swatchThumb("Chivas", "Waxed_Leather_Chivas.jpg"),
    },
    {
      id: "chocolate",
      name: "Chocolate",
      thumbUrl: swatchThumb("Chocolate", "Waxed_Leather_Chocolate.jpg"),
    },
    {
      id: "cinnamon",
      name: "Cinnamon",
      thumbUrl: swatchThumb("Cinnamon", "Waxed_Leather_Cinnamon.jpg"),
    },
    {
      id: "citron",
      name: "Citron",
      thumbUrl: swatchThumb("Citron", "Waxed_Leather_Citron.jpg"),
    },
    {
      id: "deep-sea",
      name: "Deep Sea",
      thumbUrl: swatchThumb("Deep Sea", "Waxed_Leather_DeepSea.jpg"),
    },
    {
      id: "gun-metal",
      name: "Gun Metal",
      thumbUrl: swatchThumb("Gun Metal", "Waxed_Leather_Gun-Metal.jpg"),
    },
    {
      id: "harness-brown",
      name: "Harness Brown",
      thumbUrl: swatchThumb("Harness Brown", "Waxed_Leather_Harness-Brown.jpg"),
    },
    {
      id: "midnight",
      name: "Midnight",
      thumbUrl: swatchThumb("Midnight", "Waxed_Leather_Midnight.jpg"),
    },
    {
      id: "oak",
      name: "Oak",
      thumbUrl: swatchThumb("Oak", "Waxed_Leather_Oak.jpg"),
    },
    {
      id: "peacock",
      name: "Peacock",
      thumbUrl: swatchThumb("Peacock", "Waxed_Leather_Peacock.jpg"),
    },
    {
      id: "sage",
      name: "Sage",
      thumbUrl: swatchThumb("Sage", "Waxed_Leather_Sage.jpg"),
    },
    {
      id: "sand",
      name: "Sand",
      thumbUrl: swatchThumb("Sand", "Waxed_Leather_Sandcopia.jpg"),
    },
    {
      id: "smoke",
      name: "Smoke",
      thumbUrl: swatchThumb("Smoke", "Waxed_Leather_Smokecopia.jpg"),
    },
    {
      id: "spice",
      name: "Spice",
      thumbUrl: swatchThumb("Spice", "Waxed_Leather_Spice.jpg"),
    },
    {
      id: "walnut",
      name: "Walnut",
      thumbUrl: swatchThumb("Walnut", "Waxed_Leather_Walnut.jpg"),
    },
    {
      id: "whiskey",
      name: "Whiskey",
      thumbUrl: swatchThumb("Whiskey", "Waxed_Leather_Whiskey.jpg"),
    },
  ],
  specs: {
    size: "53 sq ft +/-",
    thickness: "1.2-1.4 mm / 3.0-3.5 oz",
    origin: "Italy",
    material: "Cowhide",
    type: "Semi Aniline",
    finish: "Wax/Oil, Antique",
    grain: "Top Grain",
    category: "Protected",
    uses: "Furniture, Hospitality",
    texture: {
      label: "Natural Fine Grain",
      thumbUrl: textureThumbUrl,
      fullUrl: textureFullUrl,
    },
    specsPdfUrl:
      "https://leathera.com/assets/images/specifications/Waxed-Leather-Specifications-Sheet.pdf",
    prop65PdfUrl:
      "https://drive.google.com/file/d/1lzJaLTB2lLjkuzy3LNY8EIf4eBNePInQ/view",
  },
} as const satisfies LeatherCollectionDetail;
