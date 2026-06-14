import type { LeatherCollectionDetail } from "./types";

const textureThumbUrl =
  "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:555555,c_crop,h_100/v1717001453/leather/Vintage/Vintage_Leather_Coal.jpg";

const textureFullUrl =
  "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:555555,c_crop,g_south,r_max,w_400/v1717001453/leather/Vintage/Vintage_Leather_Coal.jpg";

export const vintageCollection = {
  slug: "vintage-leather",
  name: "Vintage Leather",
  youtubeVideoId: "kLc6_SVfYWs",
  heroPosterUrl:
    "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_crop,g_south,w_520/v1716792018/leather/main/Vintage-Leather-Main.jpg",
  swatches: [
    {
      id: "coal",
      name: "Coal",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Coal,co_rgb:ffffff/leather/Vintage/Vintage_Leather_Coal.jpg",
    },
    {
      id: "deep-sea",
      name: "Deep Sea",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Deep%20Sea,co_rgb:ffffff/leather/Vintage/Vintage_Leather_DeepSea.jpg",
    },
    {
      id: "latigo",
      name: "Latigo",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Latigo,co_rgb:ffffff/leather/Vintage/Vintage_Leather_Latigo.jpg",
    },
    {
      id: "saddle",
      name: "Saddle",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Saddle,co_rgb:ffffff/leather/Vintage/Vintage_Leather_Saddle.jpg",
    },
  ],
  specs: {
    size: "55 sq ft +/-",
    thickness: "1.2-1.4 mm / 3.0-3.5 oz",
    origin: "Italy",
    material: "Cowhide",
    type: "Aniline",
    finish: "Wax Oil Pull-Up",
    grain: "Top Grain",
    category: "Protected",
    uses: "Furniture, Bag, Garments",
    texture: {
      label: "Natural Grain, Pull-Up Effect",
      thumbUrl: textureThumbUrl,
      fullUrl: textureFullUrl,
    },
    specsPdfUrl:
      "https://drive.google.com/file/d/1Vsz7ye38MpIi3kZWLXNeAwX05-3tKzMw/view?usp=drive_link",
    prop65PdfUrl:
      "https://drive.google.com/file/d/1lzJaLTB2lLjkuzy3LNY8EIf4eBNePInQ/view?usp=drive_link",
  },
} as const satisfies LeatherCollectionDetail;
