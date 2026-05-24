import type { FilloutQuestionSubmission } from "@/lib/filloutTypes";

export const ESTIMATE_FORM_ID = "bsEGp9uDTbus";

export const ESTIMATE_FIELD_IDS = {
  firstName: "7rEUHkonZy2GChFpL9upP4",
  lastName: "m4xacZmhtzhNgKSQDKs8Rc",
  email: "jngskTXvyNDid5ZKsPDaKA",
  phone: "sgs1zjxnNTKxFmXxa54V2D",
  service: "syiiUmhtWyVZwSRUeeNja2",
  itemType: "oMKwYHy8HucVJuRBSyGwoA",
  address: "4dKTqTXB3WfP3ddH39eD68",
  colorSelection: "kHAZvwM69Gov9VPDnE3ZpK",
  detachableFixed: "1YQnGdcm55AhajudE1fpH7",
  sofaCount: "uFvg",
  chairCount: "u3zb",
  cushionCount: "mqMU",
  attachPhotos: "bpKdRSuKKdjsYC5Tae97vZ",
  addDetails: "pQn1X2zM3S6mDjshxPSo4A",
  detailsText: "9k5nq5sijSzuz9dmz5aG1P",
  mailingList: "tchfhqjqFx5oS2h9gzFdsT",
} as const;

export const ESTIMATE_FILE_UPLOAD_FIELD_IDS = [
  "hqD5MA1798MKCjs6dA9aUQ",
  "jmLoCZjxjFRNv1T8KX6V7Q",
  "nMmCATSigGoBiNdbe2syvm",
  "sB7FqLvgeZyrodg8gKQCMS",
  "vTCUfmzeqRrxVpv5ZWPruW",
  "dGWv99x7UELapkuBj6LhTJ",
] as const;

export type EstimateFileUploadFieldId =
  (typeof ESTIMATE_FILE_UPLOAD_FIELD_IDS)[number];

export const ESTIMATE_SERVICE_OPTIONS = [
  { value: "Leather Restoration", label: "Leather Restoration" },
  { value: "Leather Dyeing (Color Change)", label: "Leather Dyeing (Color Change)" },
  {
    value: "Leather Cleaning & Conditioning",
    label: "Leather Cleaning & Conditioning",
  },
  { value: "Leather Reupholstery", label: "Leather Reupholstery" },
  {
    value: "Foam Replacement & Restuffing",
    label: "Foam Replacement & Restuffing",
  },
] as const;

export const ESTIMATE_ITEM_TYPE_OPTIONS = [
  {
    id: "7tGsUk1BGBE6mLPn57V5rS",
    label: "Sofa",
    value: "Sofa",
    imageUrl:
      "https://res.cloudinary.com/releather-com/image/upload/v1693641458/icons/Sofa.jpg",
  },
  {
    id: "kuPKRnMBCu8jsWiHjkoiDQ",
    label: "Chair",
    value: "Chair",
    imageUrl:
      "https://res.cloudinary.com/releather-com/image/upload/v1693643598/icons/leather-lounge-recliner-dining-office-chair.jpg",
  },
  {
    id: "fbUUutuYyNusAgM1LSyf8z",
    label: "Cushion",
    value: "Cushion",
    imageUrl:
      "https://res.cloudinary.com/releather-com/image/upload/v1693642898/icons/leather-seat-cushion.jpg",
  },
  {
    id: "fYnmsftDKgd9ovLVVefqP3",
    label: "Car",
    value: "Car",
    imageUrl:
      "https://res.cloudinary.com/releather-com/image/upload/v1693642899/icons/leather-car-seats-auto-interior.jpg",
  },
  {
    id: "ePNNYDYS2vCp9mQyoYiucp",
    label: "Bag",
    value: "Bag",
    imageUrl:
      "https://res.cloudinary.com/releather-com/image/upload/v1693642899/icons/leather-handbag-briefcase.jpg",
  },
  {
    id: "aCFcLZNBEnpCfRNN1jNSJp",
    label: "Coat",
    value: "Coat",
    imageUrl:
      "https://res.cloudinary.com/releather-com/image/upload/v1693642898/icons/leather-coat-jacket.jpg",
  },
] as const;

export const ESTIMATE_COLOR_OPTIONS = [
  {
    id: "7dDANeymY29b3Xdm4J5NJ4",
    label: "Black",
    value: "Black",
    imageUrl:
      "https://res.cloudinary.com/leathera/image/upload/v1611289193/thumb/PALETTE_black_thumb.jpg",
  },
  {
    id: "8duHoDAVrhxTADYTMCfjeV",
    label: "White",
    value: "White",
    imageUrl:
      "https://res.cloudinary.com/leathera/image/upload/v1611289193/thumb/PALETTE_white_thumb.jpg",
  },
  {
    id: "apGQGnu7TA3wkmH6xXFqtP",
    label: "Chocolate",
    value: "Chocolate",
    imageUrl:
      "https://res.cloudinary.com/leathera/image/upload/v1611289193/thumb/PALETTE_chocolate_thumb.jpg",
  },
  {
    id: "5Pw5H4u3VnyZWCxCnw3WTq",
    label: "Saddle",
    value: "Saddle",
    imageUrl:
      "https://res.cloudinary.com/leathera/image/upload/v1611289175/thumb/Luxor_Saddle_thumb.jpg",
  },
  {
    id: "mmDXbBcqaydqwBNQ4qJuH1",
    label: "Cream",
    value: "Cream",
    imageUrl:
      "https://res.cloudinary.com/leathera/image/upload/v1611289193/thumb/PALETTE_cream_thumb.jpg",
  },
  {
    id: "3a6o8DcmBmWxyuhnk6nAv5",
    label: "Taupe",
    value: "Taupe",
    imageUrl:
      "https://res.cloudinary.com/leathera/image/upload/v1611289193/thumb/PALETTE_taupe_thumb.jpg",
  },
  {
    id: "uRghtrq8AANW8eE5EBeNFu",
    label: "Navy",
    value: "Navy",
    imageUrl:
      "https://res.cloudinary.com/leathera/image/upload/v1611289175/thumb/Luxor_Navy_thumb.jpg",
  },
  {
    id: "qyScpbpDAEdDG8VwECtVza",
    label: "Other",
    value: "Other",
    imageUrl:
      "https://images.unsplash.com/photo-1614850715776-a749a85b4144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTQ5MjV8MHwxfHNlYXJjaHwxMXx8Z3JhcGhpY3xlbnwwfDB8fHwxNjcwMzAyMDY5&ixlib=rb-4.0.3&q=80&w=1080",
  },
] as const;

export const ESTIMATE_COUNT_OPTIONS = ["1", "2", "3", "4+"] as const;

export const ESTIMATE_DETACHABLE_OPTIONS = [
  { value: "Detachable", label: "Detachable" },
  { value: "Fixed", label: "Fixed" },
] as const;

export const ESTIMATE_MAILING_LIST_VALUE = "Yes, Sign me up!";

export const ESTIMATE_MAX_FILE_BYTES = 20 * 1024 * 1024;
export const ESTIMATE_MAX_FILES_PER_FIELD = 5;

export type EstimateAddress = {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export type EstimateFormValues = {
  firstName: string;
  lastName: string;
  address: EstimateAddress;
  email: string;
  phone: string;
  service: string;
  itemTypes: string[];
  colorSelection: string | null;
  detachableFixed: string | null;
  sofaCount: string;
  chairCount: string;
  cushionCount: string;
  attachPhotos: boolean;
  addDetails: boolean;
  detailsText: string;
  mailingList: boolean;
};

export type EstimateFieldErrors = Partial<
  Record<
    | "firstName"
    | "lastName"
    | "address"
    | "city"
    | "state"
    | "zipCode"
    | "email"
    | "phone"
    | "service"
    | "itemTypes"
    | "colorSelection"
    | "detachableFixed"
    | "detailsText"
    | "files"
    | "form",
    string
  >
>;

export const EMPTY_ESTIMATE_FORM: EstimateFormValues = {
  firstName: "",
  lastName: "",
  address: {
    address: "",
    city: "",
    state: "CA",
    zipCode: "",
    country: "United States",
  },
  email: "",
  phone: "",
  service: "",
  itemTypes: [],
  colorSelection: null,
  detachableFixed: null,
  sofaCount: "1",
  chairCount: "1",
  cushionCount: "",
  attachPhotos: false,
  addDetails: false,
  detailsText: "",
  mailingList: false,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REUPHOLSTERY_SERVICES = new Set([
  "Leather Reupholstery",
  "Foam Replacement & Restuffing",
]);

const FURNITURE_ITEM_TYPES = new Set(["Sofa", "Chair", "Cushion"]);

export function showEstimateColorSelection(service: string): boolean {
  return service === "Leather Dyeing (Color Change)";
}

export function showEstimateDetachableFixed(
  service: string,
  itemTypes: readonly string[],
): boolean {
  if (REUPHOLSTERY_SERVICES.has(service)) return true;
  return itemTypes.some((item) => FURNITURE_ITEM_TYPES.has(item));
}

export function showEstimateSofaCount(itemTypes: readonly string[]): boolean {
  return itemTypes.includes("Sofa");
}

export function showEstimateChairCount(itemTypes: readonly string[]): boolean {
  return itemTypes.includes("Chair");
}

export function showEstimateCushionCount(itemTypes: readonly string[]): boolean {
  return itemTypes.includes("Cushion");
}

export function validateEstimateForm(
  values: EstimateFormValues,
): EstimateFieldErrors {
  const errors: EstimateFieldErrors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First name is required";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required";
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

  if (!values.service.trim()) {
    errors.service = "Select a leather service";
  } else if (
    !ESTIMATE_SERVICE_OPTIONS.some((option) => option.value === values.service)
  ) {
    errors.service = "Select a valid leather service";
  }

  if (values.itemTypes.length < 1) {
    errors.itemTypes = "Select at least one item type";
  } else if (
    !values.itemTypes.every((item) =>
      ESTIMATE_ITEM_TYPE_OPTIONS.some((option) => option.value === item),
    )
  ) {
    errors.itemTypes = "Select valid item types";
  }

  if (showEstimateColorSelection(values.service) && !values.colorSelection) {
    errors.colorSelection = "Select a color";
  }

  if (
    showEstimateDetachableFixed(values.service, values.itemTypes) &&
    !values.detachableFixed
  ) {
    errors.detachableFixed = "Select detachable or fixed cushions";
  }

  if (values.addDetails && !values.detailsText.trim()) {
    errors.detailsText = "Enter further details or turn off Add Details";
  }

  return errors;
}

export function buildEstimateFilloutQuestions(
  values: EstimateFormValues,
  uploadedFiles: Partial<
    Record<EstimateFileUploadFieldId, Array<{ url: string; filename: string }>>
  >,
): FilloutQuestionSubmission[] {
  const questions: FilloutQuestionSubmission[] = [
    { id: ESTIMATE_FIELD_IDS.firstName, value: values.firstName.trim() },
    { id: ESTIMATE_FIELD_IDS.lastName, value: values.lastName.trim() },
    {
      id: ESTIMATE_FIELD_IDS.address,
      value: {
        address: values.address.address.trim(),
        city: values.address.city.trim(),
        state: values.address.state.trim(),
        zipCode: values.address.zipCode.trim(),
        country: values.address.country,
      },
    },
    { id: ESTIMATE_FIELD_IDS.email, value: values.email.trim() },
    { id: ESTIMATE_FIELD_IDS.phone, value: values.phone.trim() },
    { id: ESTIMATE_FIELD_IDS.service, value: values.service },
    { id: ESTIMATE_FIELD_IDS.itemType, value: [...values.itemTypes] },
    { id: ESTIMATE_FIELD_IDS.attachPhotos, value: values.attachPhotos },
    { id: ESTIMATE_FIELD_IDS.addDetails, value: values.addDetails },
  ];

  if (showEstimateColorSelection(values.service) && values.colorSelection) {
    questions.push({
      id: ESTIMATE_FIELD_IDS.colorSelection,
      value: values.colorSelection,
    });
  }

  if (
    showEstimateDetachableFixed(values.service, values.itemTypes) &&
    values.detachableFixed
  ) {
    questions.push({
      id: ESTIMATE_FIELD_IDS.detachableFixed,
      value: values.detachableFixed,
    });
  }

  if (showEstimateSofaCount(values.itemTypes) && values.sofaCount) {
    questions.push({
      id: ESTIMATE_FIELD_IDS.sofaCount,
      value: values.sofaCount,
    });
  }

  if (showEstimateChairCount(values.itemTypes) && values.chairCount) {
    questions.push({
      id: ESTIMATE_FIELD_IDS.chairCount,
      value: values.chairCount,
    });
  }

  if (showEstimateCushionCount(values.itemTypes) && values.cushionCount) {
    questions.push({
      id: ESTIMATE_FIELD_IDS.cushionCount,
      value: values.cushionCount,
    });
  }

  if (values.addDetails && values.detailsText.trim()) {
    questions.push({
      id: ESTIMATE_FIELD_IDS.detailsText,
      value: values.detailsText.trim(),
    });
  }

  if (values.mailingList) {
    questions.push({
      id: ESTIMATE_FIELD_IDS.mailingList,
      value: [ESTIMATE_MAILING_LIST_VALUE],
    });
  }

  if (values.attachPhotos) {
    for (const fieldId of ESTIMATE_FILE_UPLOAD_FIELD_IDS) {
      const files = uploadedFiles[fieldId];
      if (files && files.length > 0) {
        questions.push({
          id: fieldId,
          value: files.map(({ url, filename }) => ({ url, filename })),
        });
      }
    }
  }

  return questions;
}
