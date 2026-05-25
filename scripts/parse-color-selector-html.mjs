import fs from "fs";
import path from "path";

const sourcePath = path.join(process.cwd(), "scripts/color-selector-source.html");
const outputPath = path.join(process.cwd(), "src/lib/leatherColorSelector/data.generated.ts");

const html = fs.readFileSync(sourcePath, "utf8");

function normalizeUrl(href) {
  const map = {
    "#Aniline": "/aniline-leather",
    "#Restoration": "/restoration-leather",
    "#Pull Up": "/pull-up-leather",
  };
  if (map[href]) return map[href];
  if (href.startsWith("#")) {
    return `/${href.slice(1).toLowerCase().replace(/\s+/g, "-")}-leather`;
  }
  if (href.startsWith("/")) return href.toLowerCase();
  return href;
}

function parseName(anchor) {
  const titleMatch = anchor.match(/title="([^"]+)"/);
  if (titleMatch) {
    const title = titleMatch[1];
    const parts = title.split(" Color");
    return parts[0].trim();
  }
  const altMatch = anchor.match(/alt="([^"]+)"/);
  return altMatch?.[1] ?? "Leather swatch";
}

/** Palette swatches only — drop Cloudinary text overlay segment (l_text, g_south, etc.). */
function cleanPaletteSwatchUrl(url) {
  return url
    .split("/")
    .filter((segment) => !segment.includes("l_text:"))
    .join("/");
}

/** e.g. "Sauvage Leather White Ivory" → "Sauvage Leather Ivory" for the White family. */
function formatLeatherDisplayName(name, colorFamilyLabel) {
  const leatherMarker = " Leather ";
  const markerIndex = name.indexOf(leatherMarker);
  if (markerIndex === -1) return name;

  const collection = name.slice(0, markerIndex);
  const remainder = name.slice(markerIndex + leatherMarker.length);
  const colorPrefix = `${colorFamilyLabel} `;

  if (remainder.startsWith(colorPrefix)) {
    const shade = remainder.slice(colorPrefix.length);
    return shade ? `${collection} Leather ${shade}` : `${collection} Leather ${colorFamilyLabel}`;
  }

  if (remainder === colorFamilyLabel) {
    return `${collection} Leather ${colorFamilyLabel}`;
  }

  return name;
}

const sectionRegex =
  /^([A-Za-z. ]+?)\s*\((https:\/\/res\.cloudinary\.com[^)]+)\)\s*:?\s*$/gm;

const sections = [];
let match;
while ((match = sectionRegex.exec(html)) !== null) {
  sections.push({
    label: match[1].trim(),
    swatchImage: match[2].trim(),
    start: match.index + match[0].length,
  });
}

for (let i = 0; i < sections.length; i += 1) {
  sections[i].end = i + 1 < sections.length ? sections[i + 1].start : html.length;
}

const anchorRegex =
  /<a\s+href="([^"]+)"[^>]*>\s*<img\s+src="([^"]+)"[^>]*>/g;

const colorFamilies = sections.map((section) => {
  const chunk = html.slice(section.start, section.end);
  const leathers = [];
  let anchorMatch;
  while ((anchorMatch = anchorRegex.exec(chunk)) !== null) {
    const fullAnchor = anchorMatch[0];
    leathers.push({
      name: formatLeatherDisplayName(parseName(fullAnchor), section.label),
      image: anchorMatch[2],
      url: normalizeUrl(anchorMatch[1]),
    });
  }

  return {
    label: section.label,
    swatchImage: cleanPaletteSwatchUrl(section.swatchImage),
    leathers,
  };
});

const idMap = {
  Black: "black",
  White: "white",
  Grey: "grey",
  Brown: "brown",
  "Dark Brown": "dark-brown",
  Taupe: "taupe",
  Beige: "beige",
  Tan: "tan",
  Red: "red",
  Orange: "orange",
  Yellow: "yellow",
  Green: "green",
  Blue: "blue",
  Purple: "purple",
  Pink: "pink",
  Burgundy: "burgundy",
};

const displayLabelMap = {
  "dark-brown": "D. Brown",
};

const families = colorFamilies.map((family) => {
  const id = idMap[family.label] ?? family.label.toLowerCase().replace(/\s+/g, "-");
  return {
    id,
    label: displayLabelMap[id] ?? family.label,
    swatchImage: family.swatchImage,
    leathers: family.leathers,
  };
});

const fileContents = `import type { ColorFamily } from "./types";

/** Auto-generated from scripts/color-selector-source.html — do not edit by hand. */
export const COLOR_FAMILIES: ColorFamily[] = ${JSON.stringify(families, null, 2)};
`;

fs.writeFileSync(outputPath, fileContents);
console.log(`Wrote ${families.length} color families to ${outputPath}`);
for (const family of families) {
  console.log(`  ${family.label}: ${family.leathers.length} leathers`);
}
