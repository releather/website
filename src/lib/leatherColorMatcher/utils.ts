import type { LabColor, LeatherColorSwatch, MatchedLeatherSwatch, RgbColor } from "./types";

export function normalizeLeatherUrl(url: string): string {
  if (url.startsWith("/")) {
    return url.toLowerCase();
  }

  try {
    const parsed = new URL(url);
    return parsed.pathname.toLowerCase();
  } catch {
    return url;
  }
}

export function hexToRgb(hex: string): RgbColor {
  const normalized = hex.replace("#", "").trim();
  if (normalized.length !== 6) {
    throw new Error(`Invalid hex color: ${hex}`);
  }

  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16),
  };
}

export function rgbToHex({ r, g, b }: RgbColor): string {
  const toHex = (value: number) => value.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function srgbToLinear(channel: number): number {
  const normalized = channel / 255;
  return normalized <= 0.04045
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
}

export function rgbToLab({ r, g, b }: RgbColor): LabColor {
  const red = srgbToLinear(r);
  const green = srgbToLinear(g);
  const blue = srgbToLinear(b);

  const x = red * 0.4124564 + green * 0.3575761 + blue * 0.1804375;
  const y = red * 0.2126729 + green * 0.7151522 + blue * 0.072175;
  const z = red * 0.0193339 + green * 0.119192 + blue * 0.9503041;

  const refX = 0.95047;
  const refY = 1.0;
  const refZ = 1.08883;

  const f = (value: number) =>
    value > 0.008856 ? value ** (1 / 3) : 7.787 * value + 16 / 116;

  const fx = f(x / refX);
  const fy = f(y / refY);
  const fz = f(z / refZ);

  return {
    l: 116 * fy - 16,
    a: 500 * (fx - fy),
    b: 200 * (fy - fz),
  };
}

export function deltaE76(first: LabColor, second: LabColor): number {
  return Math.sqrt(
    (first.l - second.l) ** 2 + (first.a - second.a) ** 2 + (first.b - second.b) ** 2,
  );
}

export function findClosestLeathers(
  swatches: LeatherColorSwatch[],
  pickedRgb: RgbColor,
  limit = 12,
): MatchedLeatherSwatch[] {
  const pickedLab = rgbToLab(pickedRgb);

  return swatches
    .map((swatch) => {
      const swatchLab = rgbToLab(hexToRgb(swatch.hex));
      return {
        ...swatch,
        distance: deltaE76(pickedLab, swatchLab),
      };
    })
    .sort((left, right) => left.distance - right.distance)
    .slice(0, limit);
}
