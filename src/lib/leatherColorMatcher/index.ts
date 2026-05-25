import type { LeatherColorSwatch } from "./types";
import { colorfulLeatherSwatches } from "./data/colorful";
import { designerLeatherSwatches } from "./data/designer";
import { waxedLeatherSwatches } from "./data/waxed";
import { distressedLeatherSwatches } from "./data/distressed";
import { antiqueLeatherSwatches } from "./data/antique";
import {
  anilineLeatherSwatches,
  pullUpLeatherSwatches,
  restorationLeatherSwatches,
} from "./data/otherCollections";
import {
  nubuckLeatherSwatches,
  sauvageLeatherSwatches,
  vintageLeatherSwatches,
  westernLeatherSwatches,
} from "./data/moreCollections";

export type { LeatherColorSwatch, MatchedLeatherSwatch, RgbColor } from "./types";
export type { SampledColorInsight } from "./describeColor";
export {
  findClosestLeathers,
  hexToRgb,
  normalizeLeatherUrl,
  rgbToHex,
} from "./utils";
export { describeSampledColor } from "./describeColor";

export const LEATHER_COLOR_SWATCHES: LeatherColorSwatch[] = [
  ...colorfulLeatherSwatches,
  ...designerLeatherSwatches,
  ...waxedLeatherSwatches,
  ...distressedLeatherSwatches,
  ...antiqueLeatherSwatches,
  ...restorationLeatherSwatches,
  ...pullUpLeatherSwatches,
  ...anilineLeatherSwatches,
  ...sauvageLeatherSwatches,
  ...vintageLeatherSwatches,
  ...westernLeatherSwatches,
  ...nubuckLeatherSwatches,
];
