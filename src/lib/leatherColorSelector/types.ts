export type ColorFamilyId =
  | "black"
  | "white"
  | "grey"
  | "brown"
  | "dark-brown"
  | "taupe"
  | "beige"
  | "tan"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "burgundy";

export type ColorFamilyLeather = {
  name: string;
  image: string;
  url: string;
};

export type ColorFamily = {
  id: ColorFamilyId;
  label: string;
  swatchImage: string;
  leathers: ColorFamilyLeather[];
};

export type ColorFamilyInsight = {
  designerTip: string;
};
