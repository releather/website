import type { FilloutQuestionSubmission } from "@/lib/filloutTypes";

export type { FilloutQuestionSubmission };

/** Fillout field IDs for the leather material quote form (wG2Wv3fqKYus). */
export const LEATHER_QUOTE_FIELD_IDS = {
  name: "mR2q",
  company: "pVe4",
  address: "wGzx",
  phone: "akVX",
  email: "wNkW",
  leatherService: "4cRW",
  colors: "kGYp",
  quantity: "1S6M",
  addFurtherDetails: "5cRs",
  furtherDetails: "fMZZ",
  mailingList: "ggko",
} as const;

/** Display size for quote-form leather swatches (matches 4-col grid cell width on desktop). */
export const LEATHER_QUOTE_SWATCH_SIZE = 180;

export function leatherQuoteSwatchUrl(imagePath: string): string {
  const transforms = `f_auto,ar_1:1,b_rgb:ffffff,bo_3px_solid_rgb:f8991d,c_fit,h_${LEATHER_QUOTE_SWATCH_SIZE}`;
  return `https://res.cloudinary.com/leathera/image/upload/${transforms}${imagePath}`;
}

export type LeatherQuoteImageOption = {
  id: string;
  label: string;
  value: string;
  imagePath: string;
};

/** Image picker options synced from the Fillout form (4cRW). */
export const LEATHER_QUOTE_IMAGE_OPTIONS: LeatherQuoteImageOption[] = [
  {
    id: "mwgW",
    label: "Distressed Leather",
    value: "Distressed Leather",
    imagePath: "/v1717001456/leather/Distressed/Distressed_Leather_Mustard.jpg",
  },
  {
    id: "wWgW",
    label: "Antique Leather",
    value: "Antique Leather",
    imagePath: "/v1717001453/leather/Antique/Antique_Leather_Cashew.jpg",
  },
  {
    id: "jqZ4",
    label: "Waxed Leather",
    value: "Waxed Leather",
    imagePath: "/v1717001453/leather/Waxed/Waxed_Leather_Caramel.jpg",
  },
  {
    id: "j4ge",
    label: "Colorful Leather",
    value: "Colorful Leather",
    imagePath: "/v1730536104/leather/Colorful/Colorful_Tan.jpg",
  },
  {
    id: "ohjT",
    label: "Designer Leather",
    value: "Designer Leather",
    imagePath: "/v1730707493/leather/Designer/Designer_Leather_Saddle.jpg",
  },
  {
    id: "71hL",
    label: "Aniline Leather",
    value: "Aniline Leather",
    imagePath: "/v1717001453/leather/Aniline/Aniline_Leather_Mustard.jpg",
  },
  {
    id: "s193",
    label: "Restoration Leather",
    value: "Restoration Leather",
    imagePath: "/v1717001453/leather/Restoration/Restoration_Leather_dark-brown.jpg",
  },
  {
    id: "mk7A",
    label: "Nubuck Leather",
    value: "Nubuck Leather",
    imagePath: "/v1730628526/leather/Nubuck/Nubuck_Leather_Spice.jpg",
  },
  {
    id: "nzou",
    label: "Sauvage Leather",
    value: "Sauvage Leather",
    imagePath: "/v1717001453/leather/Vibrant/Vibrant_Leather_Oatmeal.jpg",
  },
  {
    id: "p4Zy",
    label: "Pull-Up Leather",
    value: "Pull-Up Leather",
    imagePath: "/v1717001453/leather/Pull-Up/Pull-Up_Leather_Brandy.jpg",
  },
  {
    id: "2P1k",
    label: "Western",
    value: "Western",
    imagePath: "/v1717001453/leather/Western/Western_Leather_Saddle.jpg",
  },
  {
    id: "pdun",
    label: "Vintage Leather",
    value: "Vintage Leather",
    imagePath: "/v1717001453/leather/Vintage/Vintage_Leather_Latigo.jpg",
  },
];

export type LeatherMaterialQuoteAddress = {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export type LeatherMaterialQuoteFormValues = {
  name: string;
  company: string;
  address: LeatherMaterialQuoteAddress;
  phone: string;
  email: string;
  leatherServiceOptionId: string | null;
  colors: string;
  quantity: string;
  addFurtherDetails: boolean;
  furtherDetails: string;
  mailingList: boolean;
};

export type LeatherMaterialQuoteFieldErrors = Partial<
  Record<
    | "name"
    | "address"
    | "city"
    | "state"
    | "zipCode"
    | "phone"
    | "email"
    | "leatherService"
    | "form",
    string
  >
>;

export const EMPTY_LEATHER_MATERIAL_QUOTE_FORM: LeatherMaterialQuoteFormValues = {
  name: "",
  company: "",
  address: {
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  },
  phone: "",
  email: "",
  leatherServiceOptionId: null,
  colors: "",
  quantity: "",
  addFurtherDetails: false,
  furtherDetails: "",
  mailingList: false,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLeatherMaterialQuoteForm(
  values: LeatherMaterialQuoteFormValues,
): LeatherMaterialQuoteFieldErrors {
  const errors: LeatherMaterialQuoteFieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.address.address.trim()) {
    errors.address = "Street address is required";
  }
  if (!values.address.city.trim()) {
    errors.city = "City is required";
  }
  if (!values.address.state.trim()) {
    errors.state = "State is required";
  }
  if (!values.address.zipCode.trim()) {
    errors.zipCode = "ZIP code is required";
  }

  const phoneDigits = values.phone.replace(/\D/g, "");
  if (!phoneDigits) {
    errors.phone = "Phone number is required";
  } else if (phoneDigits.length < 10) {
    errors.phone = "Enter a valid phone number";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (
    values.leatherServiceOptionId &&
    !LEATHER_QUOTE_IMAGE_OPTIONS.some(
      (o) => o.id === values.leatherServiceOptionId,
    )
  ) {
    errors.leatherService = "Select a valid leather option";
  }

  return errors;
}

export function buildFilloutQuestionSubmissions(
  values: LeatherMaterialQuoteFormValues,
): FilloutQuestionSubmission[] {
  const questions: FilloutQuestionSubmission[] = [
    { id: LEATHER_QUOTE_FIELD_IDS.name, value: values.name.trim() },
    { id: LEATHER_QUOTE_FIELD_IDS.company, value: values.company.trim() },
    {
      id: LEATHER_QUOTE_FIELD_IDS.address,
      value: {
        address: values.address.address.trim(),
        city: values.address.city.trim(),
        state: values.address.state.trim(),
        zipCode: values.address.zipCode.trim(),
        country: values.address.country,
      },
    },
    { id: LEATHER_QUOTE_FIELD_IDS.phone, value: values.phone.trim() },
    { id: LEATHER_QUOTE_FIELD_IDS.email, value: values.email.trim() },
    {
      id: LEATHER_QUOTE_FIELD_IDS.addFurtherDetails,
      value: values.addFurtherDetails,
    },
    { id: LEATHER_QUOTE_FIELD_IDS.mailingList, value: values.mailingList },
  ];

  const selectedLeather = LEATHER_QUOTE_IMAGE_OPTIONS.find(
    (o) => o.id === values.leatherServiceOptionId,
  );
  if (selectedLeather) {
    questions.push({
      id: LEATHER_QUOTE_FIELD_IDS.leatherService,
      value: selectedLeather.value,
    });
  }

  if (values.colors.trim()) {
    questions.push({
      id: LEATHER_QUOTE_FIELD_IDS.colors,
      value: values.colors.trim(),
    });
  }

  if (values.quantity.trim()) {
    questions.push({
      id: LEATHER_QUOTE_FIELD_IDS.quantity,
      value: values.quantity.trim(),
    });
  }

  if (values.addFurtherDetails && values.furtherDetails.trim()) {
    questions.push({
      id: LEATHER_QUOTE_FIELD_IDS.furtherDetails,
      value: values.furtherDetails.trim(),
    });
  }

  return questions;
}
