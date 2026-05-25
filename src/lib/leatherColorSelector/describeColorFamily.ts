import type { ColorFamilyId, ColorFamilyInsight } from "./types";

const COLOR_FAMILY_INSIGHTS: Record<ColorFamilyId, ColorFamilyInsight> = {
  black: {
    designerTip:
      "Black upholstery leather is the most forgiving for daily use—ideal for sofas, sectionals, and dining seats where you want a sharp, modern look with minimal visible wear.",
  },
  white: {
    designerTip:
      "Light leathers brighten a room instantly. They work beautifully on accent chairs and headboards—pair with warm wood or brass so the space feels inviting, not stark.",
  },
  grey: {
    designerTip:
      "Grey leather reads tailored and contemporary. Balance cool grey hides with warm textures—wool throws, oak tables, and soft lighting keep the palette from feeling flat.",
  },
  brown: {
    designerTip:
      "Brown is the most versatile upholstery leather family—natural with wood floors, brass hardware, and cream walls, and easy to live with as your decor evolves.",
  },
  "dark-brown": {
    designerTip:
      "Dark brown leather anchors a room with richness. Use it on larger pieces like sofas and sectionals, then layer lighter textiles nearby so the space still feels open.",
  },
  taupe: {
    designerTip:
      "Taupe sits between grey and brown, making it one of the easiest colors to coordinate. It pairs well with both warm and cool palettes—great for whole-room upholstery schemes.",
  },
  beige: {
    designerTip:
      "Beige leather adds warmth without strong color commitment. It is a safe choice for open-plan spaces where you want upholstery to blend with varied finishes and flooring.",
  },
  tan: {
    designerTip:
      "Tan and saddle leathers feel heritage-rich and relaxed. They shine in casual living rooms, libraries, and anywhere you want a worn-in, collected look.",
  },
  red: {
    designerTip:
      "Red leather makes a statement—best on a single hero piece like a club chair or ottoman. Keep surrounding colors quieter and let the hide be the focal point.",
  },
  orange: {
    designerTip:
      "Orange-leaning leathers bring energy and warmth. Use them sparingly on accent seating, or commit fully in a cozy den where rich color feels intentional.",
  },
  yellow: {
    designerTip:
      "Yellow and gold-toned leathers add sunny personality. They work especially well with mid-century lines, dark wood, and graphic black-and-white accents.",
  },
  green: {
    designerTip:
      "Green upholstery leather feels design-forward and organic. Pair with stone, plants, and natural fibers—or contrast with black metal for a more urban edge.",
  },
  blue: {
    designerTip:
      "Blue leather is unexpected and refined. Navy reads traditional; teal and peacock feel bolder—either way, warm wood and cream linen keep the room balanced.",
  },
  purple: {
    designerTip:
      "Purple and aubergine leathers add depth and drama. Perfect for a statement chair, bench, or headboard in a bedroom or study where moody color is welcome.",
  },
  pink: {
    designerTip:
      "Pink-toned leather is playful and confident. Use it on a single accent piece and echo the hue subtly in art or pillows rather than upholstering the whole room.",
  },
  burgundy: {
    designerTip:
      "Burgundy leather feels timeless and luxurious—excellent for traditional interiors, libraries, and dining chairs where you want color with sophistication.",
  },
};

export function describeColorFamily(id: ColorFamilyId): ColorFamilyInsight {
  return COLOR_FAMILY_INSIGHTS[id];
}

export function getColorFamilyTitle(label: string): string {
  return `${label} Leather`;
}
