const THUMB_BASE =
  "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light";
const FULL_BASE =
  "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light";

export const leatherCleaningLeatherInfoHeading = "Leather Identification";

export const leatherCleaningLeatherInfoIntro =
  "Leather upholstery comes in a wide range of leather finishes and leather grades. Identifying the kind of leather surface is required to select safe and appropriate cleaning solutions.";

export const leatherCleaningLeatherInfoTypes = [
  {
    title: "Unprotected Aniline",
    text: (
      <p>
        <em>Unprotected Aniline leathers</em> require specialized care since the
        leather surface is unprotected. The porous nature of this leather makes
        cleaning with everyday cleaners a poor choice.
      </p>
    ),
    leathers: [
      {
        name: "Pure Aniline",
        thumb: `${THUMB_BASE}:Pure%20Aniline,co_rgb:ffffff,y_10/r_10/b_rgb:ffffff/v1611289193/thumb/Aniline_Mustard_thumb.jpg`,
        full: `${FULL_BASE}:Pure%20Aniline,co_rgb:ffffff,y_10/v1652587080/leather/Aniline_Mustard_HI.jpg`,
        alt: "Leather Cleaning recommended for Pure Aniline Leather",
        href: "/types-of-leather#Pure-Aniline",
      },
      {
        name: "Wax Pull Up",
        thumb: `${THUMB_BASE}:Wax%20Pull%20Up,co_rgb:ffffff,y_10/r_10/b_rgb:ffffff/v1611289193/thumb/Concerto_Saddle_thumb.jpg`,
        full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Wax%20Pull-Up,co_rgb:ffffff,y_10/v1639529981/leather/Concerto_Saddle_HI.jpg",
        alt: "Leather Cleaning recommended for Wax Pull Up Leather",
        href: "/types-of-leather#Wax-Pull-Up-Leather",
      },
      {
        name: "Oil Pull Up",
        thumb: `${THUMB_BASE}:Oil%20Pull%20Up,co_rgb:ffffff,y_10/r_10/b_rgb:ffffff/v1611289193/thumb/Harmony_Brandy_thumb.jpg`,
        full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Oil%20Pull%20Up,co_rgb:ffffff,y_10/v1653007847/leather/Harmony_Brandy_HI.jpg",
        alt: "Leather Cleaning recommended for Oil Pull Up Leather",
        href: "/types-of-leather#Oil-Pull-Up-Leather",
      },
    ],
  },
  {
    title: "Semi-Aniline",
    text: (
      <p>
        <em>Semi-Aniline leathers</em> are finished with a light protective
        surface coating adding to durability, wear ability, and ease of
        cleaning. This finish protection increases its lifetime.
      </p>
    ),
    leathers: [
      {
        name: "Semi-Aniline",
        thumb: `${THUMB_BASE}:Semi-Aniline,co_rgb:ffffff,y_10/r_10/b_rgb:ffffff/v1611289193/thumb/SEDONA_Cashew_thumb.jpg`,
        full: `${FULL_BASE}:Semi-Aniline,co_rgb:ffffff,y_10/v1636920011/leather/SEDONA_cashew_HI.jpg`,
        alt: "Leather Cleaning recommended for Semi-Aniline Leather",
        href: "/types-of-leather#Semi-Aniline-Leather",
      },
    ],
  },
  {
    title: "Protected Aniline",
    text: (
      <p>
        <em>Protected Aniline leathers</em> are finished with a pigmented
        surface coating, making it more resistant against scuffing and fading.
        Easy to clean and great if you have pets.
      </p>
    ),
    leathers: [
      {
        name: "Pigmented",
        thumb: `${THUMB_BASE}:Pigmented,co_rgb:ffffff,y_10/r_10/b_rgb:ffffff/v1611289193/thumb/PALETTE_tan_thumb.jpg`,
        full: `${FULL_BASE}:Pigmented,co_rgb:ffffff,y_10/v1638909291/leather/PALETTE_tan_HI.jpg`,
        alt: "Leather Cleaning recommended for Pigmented Leather",
        href: "/types-of-leather#Pigmented-Leather",
      },
      {
        name: "Corrected",
        thumb: `${THUMB_BASE}:Corrected,co_rgb:ffffff,y_10/r_10/b_rgb:ffffff/v1611289193/thumb/Supple_Khaki_thumb.jpg`,
        full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Corrected,co_rgb:ffffff,y_10/v1638909291/leather/Supple_Khaki_HI.jpg",
        alt: "Leather Cleaning recommended for Corrected Leather",
        href: "/types-of-leather#Corrected-Leather",
      },
    ],
  },
];
