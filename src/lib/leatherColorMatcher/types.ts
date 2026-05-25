export type LeatherColorSwatch = {
  name: string;
  hex: string;
  image: string;
  url: string;
};

export type RgbColor = {
  r: number;
  g: number;
  b: number;
};

export type LabColor = {
  l: number;
  a: number;
  b: number;
};

export type MatchedLeatherSwatch = LeatherColorSwatch & {
  distance: number;
};
