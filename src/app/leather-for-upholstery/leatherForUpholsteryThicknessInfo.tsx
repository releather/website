const THICKNESS_ICONS = {
  coat: "https://res.cloudinary.com/leathera/image/upload/w_96,h_96,c_fit/v1702145196/icons/garment_svg.svg",
  handbag:
    "https://res.cloudinary.com/leathera/image/upload/w_96,h_96,c_fit/v1702145435/icons/handbag_svg.svg",
  furniture:
    "https://res.cloudinary.com/leathera/image/upload/w_96,h_96,c_fit/v1702140740/icons/chairs_svg.svg",
  automotive:
    "https://res.cloudinary.com/leathera/image/upload/w_96,h_96,c_fit/v1702139656/icons/car-seat_svg.svg",
  aviation:
    "https://res.cloudinary.com/leathera/image/upload/w_96,h_96,c_fit/v1702142827/icons/aviation_svg.svg",
  footwear:
    "https://res.cloudinary.com/leathera/image/upload/w_96,h_96,c_fit/v1702146116/icons/footwear_svg.svg",
} as const;

export type LeatherThicknessApplication = {
  icon: string;
  label: string;
  alt: string;
};

export type LeatherThicknessRange = {
  title: string;
  text: React.ReactNode;
  applications: LeatherThicknessApplication[];
};

export const leatherForUpholsteryThicknessIntro = (
  <p>
    Leather thickness is measured in millimeters (mm) or ounces (oz). 1 oz ≈ 0.4
    mm. Different thicknesses are suited to different applications depending on
    flexibility, durability, and structure.
  </p>
);

export const leatherForUpholsteryThicknessRanges: LeatherThicknessRange[] = [
  {
    title: "0.4–0.6 mm (1–1.5 oz)",
    text: (
      <p>
        Lightweight and flexible. Commonly used for garments, gloves, lightweight
        fashion accessories, and soft linings.
      </p>
    ),
    applications: [
      {
        icon: THICKNESS_ICONS.coat,
        label: "Coat",
        alt: "Garment leather coat icon",
      },
    ],
  },
  {
    title: "0.6–0.9 mm (1.5–2 oz)",
    text: (
      <p>
        Soft with slightly more body. Often used for handbags, garment leather,
        and lightweight panels requiring flexibility.
      </p>
    ),
    applications: [
      {
        icon: THICKNESS_ICONS.coat,
        label: "Coat",
        alt: "Garment leather coat icon",
      },
      {
        icon: THICKNESS_ICONS.handbag,
        label: "Handbag",
        alt: "Handbag leather icon",
      },
    ],
  },
  {
    title: "0.9–1.2 mm (2–3 oz)",
    text: (
      <p>
        Versatile medium-weight leather used for bags, automotive interiors, and
        upholstery applications where softness and durability are balanced.
      </p>
    ),
    applications: [
      {
        icon: THICKNESS_ICONS.furniture,
        label: "Furniture",
        alt: "Furniture upholstery leather icon",
      },
      {
        icon: THICKNESS_ICONS.automotive,
        label: "Auto",
        alt: "Automotive leather icon",
      },
    ],
  },
  {
    title: "1.2–1.6 mm (3–4 oz)",
    text: (
      <p>
        Typical upholstery leather thickness. Common for sofas, chairs, headboards,
        and commercial seating where durability and structure are important.
      </p>
    ),
    applications: [
      {
        icon: THICKNESS_ICONS.furniture,
        label: "Furniture",
        alt: "Furniture upholstery leather icon",
      },
    ],
  },
  {
    title: "1.6–2.0 mm (4–5 oz)",
    text: (
      <p>
        Heavier leather with greater body and durability. Often used for heavy-duty
        upholstery, structured goods, belts, saddlery, and rugged leather products.
      </p>
    ),
    applications: [
      {
        icon: THICKNESS_ICONS.handbag,
        label: "Handbag",
        alt: "Handbag leather icon",
      },
      {
        icon: THICKNESS_ICONS.footwear,
        label: "Footwear",
        alt: "Footwear leather icon",
      },
    ],
  },
];
