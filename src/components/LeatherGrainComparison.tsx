import Image from "next/image";
import Link from "next/link";
import {
  upholsteryColumnTitleClassName,
  upholsterySectionHeadingCenteredClassName,
  upholsterySummaryStripClassName,
} from "@/lib/upholsteryBrutalistTypography";

const FULL_GRAIN_IMAGE =
  "https://res.cloudinary.com/releather-com/image/upload/v1779620695/leather/full-grain-leather.jpg";
const TOP_GRAIN_IMAGE =
  "https://res.cloudinary.com/releather-com/image/upload/v1779620695/leather/top-grain-leather.jpg";
const SPLIT_LEATHER_IMAGE =
  "https://res.cloudinary.com/releather-com/image/upload/v1779620695/leather/split-leather.jpg";
const LAYER_DIAGRAM_IMAGE =
  "https://res.cloudinary.com/releather-com/image/upload/v1779620695/leather/full-grain-vs-top-grain-vs-split-leather.jpg";

type LeatherGrainColumn = {
  label: string;
  image: string;
  imageAlt: string;
  features: readonly (string | { text: string; href: string; title: string })[];
};

const LEATHER_GRAIN_COLUMNS: readonly LeatherGrainColumn[] = [
  {
    label: "Full Grain",
    image: FULL_GRAIN_IMAGE,
    imageAlt: "Close-up of full grain leather showing natural surface texture",
    features: [
      "Outer grain layer",
      "Natural surface",
      "Grain variation",
      "Develops patina",
    ],
  },
  {
    label: "Top Grain",
    image: TOP_GRAIN_IMAGE,
    imageAlt: "Close-up of top grain leather with a refined, consistent surface",
    features: [
      "Outer grain layer",
      "Refined surface",
      "More consistent appearance",
      "Easier maintenance",
    ],
  },
  {
    label: "Split Leather",
    image: SPLIT_LEATHER_IMAGE,
    imageAlt: "Close-up of split leather showing a coated lower-layer hide",
    features: [
      "Lower layer",
      "No natural grain",
      "Often coated or embossed",
      {
        text: "Learn why it matters",
        href: "/leather-for-upholstery#what-to-avoid",
        title: "What upholstery leather to avoid",
      },
    ],
  },
];

function FeatureItem({
  feature,
}: {
  feature: string | { text: string; href: string; title: string };
}) {
  if (typeof feature === "string") {
    return <span className="font-sans text-sm font-semibold leading-snug text-black sm:text-base">{feature}</span>;
  }

  return (
    <Link
      href={feature.href}
      title={feature.title}
      className="font-sans text-sm font-semibold leading-snug text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange sm:text-base"
    >
      {feature.text}
    </Link>
  );
}

export default function LeatherGrainComparison() {
  return (
    <section
      className="not-prose mx-auto my-10 max-w-[1280px] bg-white"
      aria-labelledby="leather-grain-comparison-heading"
    >
      <h3
        id="leather-grain-comparison-heading"
        className={upholsterySectionHeadingCenteredClassName}
      >
        Full Grain{" "}
        <span className="mx-1 text-releather-orange sm:mx-1.5" aria-hidden>
          VS
        </span>{" "}
        Top Grain{" "}
        <span className="mx-1 text-releather-orange sm:mx-1.5" aria-hidden>
          VS
        </span>{" "}
        Split Leather
      </h3>

      <p className="mt-6 text-balance text-center font-sans text-base font-semibold leading-relaxed text-black sm:text-lg">
        Leather buyers should know full grain and top grain leather both come from the outer hide
        and are high-quality real leather, with full grain keeping the natural surface and aging
        patina while top grain is lightly sanded for a smoother, more uniform, lower-maintenance
        finish, whereas split leather comes from lower layers beneath the grain.
      </p>

      <div className="mt-8 grid grid-cols-1 bg-white md:grid-cols-3">
        {LEATHER_GRAIN_COLUMNS.map((column, index) => (
          <article
            key={column.label}
            className={`flex flex-col ${
              index < LEATHER_GRAIN_COLUMNS.length - 1
                ? "border-b-4 border-black md:border-b-0 md:border-r-4"
                : ""
            }`}
          >
            <div className="bg-white py-6 md:py-0">
              <Image
                unoptimized
                src={column.image}
                alt={column.imageAlt}
                title={column.label}
                width={640}
                height={480}
                loading="lazy"
                className="block h-auto w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <p className={upholsteryColumnTitleClassName}>
                {column.label}
              </p>
              <ul className="mt-4 list-none space-y-3 p-0">
                {column.features.map((feature) => (
                  <li key={typeof feature === "string" ? feature : feature.text} className="flex items-start gap-2">
                    <span
                      className="mt-0.5 shrink-0 font-sans text-base font-black text-releather-orange"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <FeatureItem feature={feature} />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <figure className="mt-8 border-4 border-black bg-white">
        <Image
          unoptimized
          src={LAYER_DIAGRAM_IMAGE}
          alt="Diagram comparing full grain, top grain, and split leather hide layers"
          title="Full grain vs top grain vs split leather layer diagram"
          width={1280}
          height={720}
          loading="lazy"
          className="block h-auto w-full object-contain"
        />
      </figure>

      <div className="mt-8 grid grid-cols-1 border-4 border-black bg-white md:grid-cols-[1fr_auto_1fr]">
        <div className="border-b-4 border-black p-5 md:border-b-0 md:border-r-4">
          <p className={upholsterySummaryStripClassName}>
            Full Grain + Top Grain ={" "}
            <span className="text-releather-orange">Outer Grain Layer</span>
          </p>
        </div>
        <div
          className="hidden items-stretch justify-center bg-releather-orange md:flex md:w-3"
          aria-hidden
        />
        <div className="border-t-4 border-releather-orange p-5 md:border-t-0">
          <p className={upholsterySummaryStripClassName}>
            Split Leather ={" "}
            <span className="text-releather-orange">Lower Layer</span>
          </p>
        </div>
      </div>
    </section>
  );
}
