import type { RgbColor } from "./types";

type HslColor = {
  h: number;
  s: number;
  l: number;
};

export type SampledColorInsight = {
  description: string;
  designerTip: string;
};

function rgbToHsl({ r, g, b }: RgbColor): HslColor {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;

  if (max === min) {
    return { h: 0, s: 0, l: lightness * 100 };
  }

  const delta = max - min;
  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  let hue = 0;
  switch (max) {
    case red:
      hue = ((green - blue) / delta + (green < blue ? 6 : 0)) / 6;
      break;
    case green:
      hue = ((blue - red) / delta + 2) / 6;
      break;
    default:
      hue = ((red - green) / delta + 4) / 6;
      break;
  }

  return { h: hue * 360, s: saturation * 100, l: lightness * 100 };
}

function getLightnessWord(l: number): string {
  if (l < 12) return "Inky";
  if (l < 22) return "Deep";
  if (l < 35) return "Rich";
  if (l < 48) return "Mid-tone";
  if (l < 62) return "Soft";
  if (l < 78) return "Light";
  return "Pale";
}

function getHueFamily(h: number, s: number, hsl: HslColor): string {
  if (s < 8) {
    if (hsl.l > 94) return "white";
    if (hsl.l < 12) return "black";
    if (hsl.l < 45) return "charcoal gray";
    if (hsl.l > 70) return "soft gray";
    return "smoky gray";
  }

  if (s < 18) {
    if (h >= 20 && h < 55) return "warm taupe";
    if (h >= 55 && h < 90) return "greige";
    if (h >= 200 && h < 260) return "blue-gray";
    if (h >= 260 && h < 330) return "mauve gray";
    if (hsl.l < 40) return "charcoal brown";
    if (hsl.l > 65) return "stone";
    return "neutral gray-brown";
  }

  if (h < 15 || h >= 345) return "red";
  if (h < 30) return "rust";
  if (h < 45) return "caramel brown";
  if (h < 58) return "golden tan";
  if (h < 75) return "honey";
  if (h < 95) return "olive";
  if (h < 130) return "sage green";
  if (h < 165) return "teal";
  if (h < 205) return "slate blue";
  if (h < 235) return "navy";
  if (h < 265) return "indigo";
  if (h < 295) return "plum";
  if (h < 330) return "burgundy";
  return "oxblood";
}

function getUndertone(h: number, s: number): string | null {
  if (s < 12) return null;
  if (h >= 15 && h < 75) return "with warm undertones";
  if (h >= 180 && h < 280) return "with cool undertones";
  if (h >= 75 && h < 165) return "with earthy undertones";
  return null;
}

function buildDescription(hsl: HslColor): string {
  const family = getHueFamily(hsl.h, hsl.s, hsl);
  const lightness = getLightnessWord(hsl.l);
  const undertone = getUndertone(hsl.h, hsl.s);

  if (hsl.s < 8) {
    if (family === "black") return "Near-black";
    if (family === "white") return "Off-white cream";
    return `${lightness} ${family}`;
  }

  if (undertone) {
    return `${lightness} ${family} ${undertone}`;
  }

  return `${lightness} ${family}`;
}

function buildDesignerTip(hsl: HslColor, rgb: RgbColor): string {
  const { h, s, l } = hsl;

  if (l < 18) {
    return "Dark leather like this is a smart pick for sofas and sectionals—it hides everyday wear and feels instantly polished.";
  }

  if (l > 78 && s < 25) {
    return "Light, neutral leather opens up a room. Consider it for accent chairs or headboards where you want brightness without a harsh white.";
  }

  if (l > 70) {
    return "This lighter tone brings airiness to upholstery—pair it with darker wood or black metal legs so the piece still feels grounded.";
  }

  if (s < 15) {
    if (h >= 15 && h < 70) {
      return "Warm neutrals are the easiest leather colors to live with— they work across traditional and modern rooms and age gracefully.";
    }
    return "Muted, grayed tones feel tailored and calm. Add warmth nearby with wood, brass, or textured linen so the space stays inviting.";
  }

  if (h >= 330 || h < 25) {
    return "Bold reds make a statement on one hero piece—an ottoman, club chair, or dining seat—then keep the rest of the palette quieter.";
  }

  if (h >= 25 && h < 55) {
    return "Caramel and tan leathers are classic for a reason—they complement wood floors, cream walls, and mixed metals without dominating.";
  }

  if (h >= 55 && h < 95) {
    return "Earthy greens and olives feel design-forward on leather. Surround them with natural textures like wool, stone, and matte black accents.";
  }

  if (h >= 160 && h < 250) {
    return "Blue-toned leather reads refined and unexpected. Balance it with warm wood furniture or camel accents so the room feels layered, not cold.";
  }

  if (h >= 250 && h < 330) {
    return "Plum and burgundy tones add depth and drama—beautiful on a single statement piece in a library, den, or formal living room.";
  }

  if (s > 45) {
    return "This is a confident color—use it on one upholstery piece you love, then echo it in smaller accents like pillows or a throw.";
  }

  if (rgb.r > rgb.b + 20 && rgb.g > rgb.b) {
    return "Warm mid-tones like this are versatile workhorses—easy to style seasonally and forgiving if your decor evolves over time.";
  }

  return "Sample a few of the closest leathers side by side—small shifts in undertone can change how the color reads in your actual lighting.";
}

export function describeSampledColor(rgb: RgbColor): SampledColorInsight {
  const hsl = rgbToHsl(rgb);
  return {
    description: buildDescription(hsl),
    designerTip: buildDesignerTip(hsl, rgb),
  };
}
