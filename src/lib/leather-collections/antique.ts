import type { LeatherCollectionDetail } from "./types";

const textureThumbUrl =
  "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:555555,c_crop,h_100/v1717001453/leather/Antique/Antique_Leather_Black.jpg";

const textureFullUrl =
  "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:555555,c_crop,g_south,r_max,w_400/v1717001453/leather/Antique/Antique_Leather_Black.jpg";

export const antiqueCollection = {
  slug: "antique-leather",
  name: "Antique Leather",
  heroPosterUrl:
    "https://res.cloudinary.com/leathera/image/upload/ar_1:1,b_rgb:23262f,bo_5px_solid_rgb:f8991d,c_crop,g_south,w_520/v1716792018/leather/main/Antique-Leather-Main.jpg",
  swatches: [
    {
      id: "aqua",
      name: "Aqua",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Aqua,co_rgb:ffffff/v1718669001/leather/Antique/Antique_Leather_aqua.jpg",
    },
    {
      id: "bamboo",
      name: "Bamboo",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Bamboo,co_rgb:ffffff/v1718669001/leather/Antique/Antique_Leather_Bamboo.jpg",
    },
    {
      id: "bayou",
      name: "Bayou",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Bayou,co_rgb:ffffff/v1718669001/leather/Antique/Antique_Leather_Bayou.jpg",
    },
    {
      id: "black",
      name: "Black",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Black,co_rgb:ffffff/v1717001453/leather/Antique/Antique_Leather_Black.jpg",
    },
    {
      id: "cashew",
      name: "Cashew",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Cashew,co_rgb:ffffff/v1718669001/leather/Antique/Antique_Leather_Cashew.jpg",
    },
    {
      id: "cream",
      name: "Cream",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Cream,co_rgb:ffffff/v1718669001/leather/Antique/Antique_Leather_Cream.jpg",
    },
    {
      id: "dove",
      name: "Dove",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Dove,co_rgb:ffffff/v1718669001/leather/Antique/Antique_Leather_Dove.jpg",
    },
    {
      id: "garden",
      name: "Garden",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Garden,co_rgb:ffffff/v1718669001/leather/Antique/Antique_Leather_Garden.jpg",
    },
    {
      id: "ivory",
      name: "Ivory",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Ivory,co_rgb:ffffff/v1718669001/leather/Antique/Antique_Leather_Ivory.jpg",
    },
    {
      id: "molasses",
      name: "Molasses",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Molasses,co_rgb:ffffff/v1718669001/leather/Antique/Antique_Leather_Molasses.jpg",
    },
    {
      id: "orange",
      name: "Orange",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Orange,co_rgb:ffffff/v1718669001/leather/Antique/Antique_Leather_Orange.jpg",
    },
    {
      id: "pinto",
      name: "Pinto",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Pinto,co_rgb:ffffff/v1718669001/leather/Antique/Antique_Leather_Pinto.jpg",
    },
    {
      id: "pomegranate",
      name: "Pomegranate",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Pomegranate,co_rgb:ffffff/v1718669001/leather/Antique/Antique_Leather_Pomegranate.jpg",
    },
    {
      id: "titanium",
      name: "Titanium",
      thumbUrl:
        "https://res.cloudinary.com/leathera/image/upload/b_rgb:000000/l_text:montserrat_100_style_light:Titanium,co_rgb:ffffff/v1718669001/leather/Antique/Antique_Leather_Titanium.jpg",
    },
  ],
  specs: {
    size: "53 sq ft +/-",
    thickness: "0.9-1.1 mm / 2.25-2.75 oz",
    origin: "European",
    material: "Cowhide",
    type: "Semi Aniline",
    finish: "Protected, Two-Tone, Antique, Marbleized",
    grain: "Top Grain",
    category: "Protected",
    uses: "Furniture, Hospitality, Garments, Handbags",
    texture: {
      label: "Natural Fine Grain",
      thumbUrl: textureThumbUrl,
      fullUrl: textureFullUrl,
    },
    specsPdfUrl:
      "https://drive.google.com/file/d/1Vsz7ye38MpIi3kZWLXNeAwX05-3tKzMw/view?usp=drive_link",
    prop65PdfUrl:
      "https://drive.google.com/file/d/1lzJaLTB2lLjkuzy3LNY8EIf4eBNePInQ/view?usp=drive_link",
  },
} as const satisfies LeatherCollectionDetail;
