const THUMB_BASE =
  "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light";
const FULL_BASE =
  "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light";

export const leatherRestorationLeatherInfoHeading =
  "When it comes to leather restoration, three main types of leathers can be restored:";

export const leatherRestorationLeatherInfoSubheading =
  "Unprotected, Protected, Nubuck.";

export const leatherRestorationLeatherInfoTypes = [
  {
    title: "Unprotected Aniline",
    text: (
      <p>
        <strong>Unprotected Aniline Leathers</strong> have minimal finishing to
        protect it from stains and fading. <strong>Pure Aniline</strong> or naked
        leathers are dyed through to produce a rich, natural color without added
        finishing treatments. <strong>Wax/Oil Pull Up</strong> are lightly
        treated with transparent waxes and oils to produce a wide range of
        effects such as distressed, marbled, antique. These types of leathers
        preserve the grain pattern and natural characteristics of the hide,
        making them the most expensive and ideal for high-end furniture and
        clothing.
      </p>
    ),
    leathers: [
      {
        name: "Pure Aniline",
        thumb: `${THUMB_BASE}:Pure%20Aniline,co_rgb:ffffff,y_10/r_10/b_rgb:ffffff/v1611289193/thumb/Aniline_Mustard_thumb.jpg`,
        full: `${FULL_BASE}:Pure%20Aniline,co_rgb:ffffff,y_10/v1652587080/leather/Aniline_Mustard_HI.jpg`,
        alt: "Leather Restoration recommended for Pure Aniline Leather",
        href: "/types-of-leather#Pure-Aniline",
      },
      {
        name: "Wax Pull Up",
        thumb: `${THUMB_BASE}:Wax%20Pull%20Up,co_rgb:ffffff,y_10/r_10/b_rgb:ffffff/v1611289193/thumb/Concerto_Saddle_thumb.jpg`,
        full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Wax%20Pull-Up,co_rgb:ffffff,y_10/v1639529981/leather/Concerto_Saddle_HI.jpg",
        alt: "Leather Restoration recommended for Wax Pull Up Leather",
        href: "/types-of-leather#Wax-Pull-Up-Leather",
      },
      {
        name: "Oil Pull Up",
        thumb: `${THUMB_BASE}:Oil%20Pull%20Up,co_rgb:ffffff,y_10/r_10/b_rgb:ffffff/v1611289193/thumb/Harmony_Brandy_thumb.jpg`,
        full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Oil%20Pull%20Up,co_rgb:ffffff,y_10/v1653007847/leather/Harmony_Brandy_HI.jpg",
        alt: "Leather Restoration recommended for Oil Pull Up Leather",
        href: "/types-of-leather#Oil-Pull-Up-Leather",
      },
    ],
  },
  {
    title: "Protected Aniline",
    text: (
      <p>
        <strong>Protected Aniline Leathers</strong> are finished with a durable
        top layer of pigment to the hide which helps against stains, color loss,
        pet scratches, heavy use. <strong>Pigmented Leathers</strong> have a
        thorough uniform color. <strong>Semi-Aniline Leathers</strong> have a
        transparent two-tone color. <strong>Corrected Leathers</strong> have an
        extensive superficial treatment to produce a uniform color and grain
        pattern. All types of protected leathers are easier to maintain, making
        them versatile choices for high-traffic areas such as leather furniture
        and car interior applications.
      </p>
    ),
    leathers: [
      {
        name: "Semi-Aniline",
        thumb: `${THUMB_BASE}:Semi-Aniline,co_rgb:ffffff,y_10/r_10/b_rgb:ffffff/v1611289193/thumb/SEDONA_Cashew_thumb.jpg`,
        full: `${FULL_BASE}:Semi-Aniline,co_rgb:ffffff,y_10/v1636920011/leather/SEDONA_cashew_HI.jpg`,
        alt: "Leather Restoration recommended for Semi-Aniline Leather",
        href: "/types-of-leather#Semi-Aniline-Leather",
      },
      {
        name: "Pigmented",
        thumb: `${THUMB_BASE}:Pigmented,co_rgb:ffffff,y_10/r_10/b_rgb:ffffff/v1611289193/thumb/PALETTE_tan_thumb.jpg`,
        full: `${FULL_BASE}:Pigmented,co_rgb:ffffff,y_10/v1638909291/leather/PALETTE_tan_HI.jpg`,
        alt: "Leather Restoration recommended for Pigmented Leather",
        href: "/types-of-leather#Pigmented-Leather",
      },
      {
        name: "Corrected",
        thumb: `${THUMB_BASE}:Corrected,co_rgb:ffffff,y_10/r_10/b_rgb:ffffff/v1611289193/thumb/Supple_Khaki_thumb.jpg`,
        full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Corrected,co_rgb:ffffff,y_10/v1638909291/leather/Supple_Khaki_HI.jpg",
        alt: "Leather Restoration recommended for Corrected Leather",
        href: "/types-of-leather#Corrected-Leather",
      },
    ],
  },
  {
    title: "Nubuck",
    text: (
      <p>
        <strong>Nubuck Aniline Leathers</strong> are hides processed from the
        outermost layer of the hide. They are characterised by a soft velvety
        nap feel, which is created by brushing and buffing the hide in the
        opposite direction to the grain. Nubuck is often used to create fine
        furniture and high quality jackets, shoes, handbags and other goods. Note
        this upholsery can be difficult to maintain, as it is prone to staining
        and scratching due to its porous and absorbant nature. It is important
        to take extra care when cleaning nubuck leather items.
      </p>
    ),
    leathers: [
      {
        name: "Nubuck",
        thumb: `${THUMB_BASE}:Nubuck,co_rgb:ffffff,y_10/r_10/b_rgb:ffffff/v1611289193/thumb/Apache_Chestnut_thumb.jpg`,
        full: `${FULL_BASE}:Nubuck,co_rgb:ffffff,y_10/v1652588630/leather/Apache_Chestnut_HI.jpg`,
        alt: "Leather Restoration recommended for Nubuck Leather",
        href: "/types-of-leather#Nubuck",
      },
    ],
  },
];
