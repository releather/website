import Link from "next/link";
import Image from "next/image";
import LeatherGuideCallout, {
  leatherGuideLinkClassName,
} from "@/components/LeatherGuideCallout";
import {
  upholsteryColumnTitleClassName,
  upholsteryCompareStripClassName,
  upholsteryFeaturedCalloutHeadingClassName,
  upholsteryOrangeSubheadingCenteredClassName,
  upholsterySectionHeadingCenteredClassName,
  upholsteryVsBadgeClassName,
} from "@/lib/upholsteryBrutalistTypography";

type DecisionTag =
  | { type: "protected" }
  | { type: "unprotected" }
  | { type: "split" };

type DecisionCard = {
  iconClass: string;
  heading: string;
  text: string;
  tag: DecisionTag;
};

const unprotectedLeatherImageUrl =
  "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_600/g_center,l_text:montserrat_75_style_light:Unprotected,co_rgb:ffffff,y_10/v1652587080/leather/Aniline_Mustard_HI.jpg";

const DECISION_CARDS: readonly DecisionCard[] = [
  {
    iconClass: "fa-users",
    heading: "Kids & Pets",
    text: "High traffic, daily use environments",
    tag: { type: "protected" },
  },
  {
    iconClass: "fa-cloud-sun",
    heading: "Climate Exposure",
    text: "Heat, humidity, and sunlight resistance matters",
    tag: { type: "protected" },
  },
  {
    iconClass: "fa-palette",
    heading: "Design Priority",
    text: "Natural character, patina, and visual texture",
    tag: { type: "unprotected" },
  },
  {
    iconClass: "fa-spray-can-sparkles",
    heading: "Maintenance Level",
    text: "Easy care vs natural aging leather",
    tag: { type: "split" },
  },
];

const PROTECTED_LEATHER_ITEMS: readonly { label: string; href?: string; title?: string }[] = [
  { label: "Pigmented leather", href: "/types-of-leather#pigmented-leather", title: "Pigmented Aniline Leather" },
  { label: "Corrected grain leather", href: "/types-of-leather#corrected-leather", title: "Corrected Aniline Leather" },
  { label: "Semi-aniline leather", href: "/types-of-leather#semi-aniline-leather", title: "Semi-Aniline Leather" },
  { label: "Protective surface coating" },
  { label: "More uniform color" },
  { label: "Easier cleaning & stain resistance" },
  { label: "Ideal for kids, pets, and high-use furniture" },
];

const UNPROTECTED_LEATHER_ITEMS: readonly { label: string; href?: string; title?: string }[] = [
  { label: "Pure aniline leather", href: "/types-of-leather#pure-aniline-leather", title: "Pure Aniline Leather" },
  { label: "Nubuck leather", href: "/types-of-leather#nubuck-leather", title: "Nubuck Aniline Leather" },
  { label: "Wax pull-up leather", href: "/types-of-leather#wax-pull-up-leather", title: "Wax Oil Pull Up Aniline Leather" },
  { label: "Oil pull-up leather", href: "/types-of-leather#oil-pull-up-leather", title: "Oil Pull Up Aniline Leather" },
  { label: "Visible natural grain" },
  { label: "Develops patina over time" },
  { label: "More sensitive to heat, moisture, and spills" },
];

function DecisionTagLabel({ tag }: { tag: DecisionTag }) {
  if (tag.type === "protected") {
    return (
      <p className="mt-4 font-display text-base font-black uppercase leading-none tracking-tight text-black lg:text-lg">
        → <span className="text-releather-orange">Protected Leather</span>
      </p>
    );
  }

  if (tag.type === "unprotected") {
    return (
      <p className="mt-4 font-display text-base font-black uppercase leading-none tracking-tight text-black lg:text-lg">
        → <span className="text-releather-orange">Unprotected Leather</span>
      </p>
    );
  }

  return (
    <p className="mt-4 font-display text-base font-black uppercase leading-none tracking-tight text-black lg:text-lg">
      → <span className="text-releather-orange">Protected</span>{" "}
      <span className="text-black">vs</span>{" "}
      <span className="text-releather-orange">Unprotected</span>
    </p>
  );
}

function LeatherListItem({
  item,
}: {
  item: { label: string; href?: string; title?: string };
}) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-0.5 shrink-0 font-sans text-base font-black text-releather-orange" aria-hidden>
        ✓
      </span>
      {item.href ? (
        <Link
          href={item.href}
          title={item.title ?? item.label}
          className="font-sans text-sm font-semibold leading-snug text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange sm:text-base"
        >
          {item.label}
        </Link>
      ) : (
        <span className="font-sans text-sm font-semibold leading-snug text-black sm:text-base">
          {item.label}
        </span>
      )}
    </li>
  );
}

export default function LeatherUpholsteryChoiceGuide() {
  return (
    <section
      className="not-prose mx-auto my-10 max-w-[1280px] bg-white"
      aria-label="Protected vs unprotected leather decision guide"
    >
      <LeatherGuideCallout
        title="Unprotected Leather"
        className="mt-0"
        titleClassName={upholsteryFeaturedCalloutHeadingClassName}
        image={{
          src: unprotectedLeatherImageUrl,
          alt: "Unprotected aniline leather swatch",
          title: "Unprotected",
        }}
      >
        <p className="mb-0">
          Finally, consider your personal style. Do you prefer a classic look, rustic leather look,
          or something more modern? There are many different types of leather hides available in a
          wide range of colors and textures, so take your time to find the perfect match for your
          home.{" "}
          <Link
            href="/types-of-leather#pure-aniline-leather"
            title="Pure Aniline Leather"
            className={leatherGuideLinkClassName}
          >
            Pure Aniline
          </Link>{" "}
          and{" "}
          <Link
            href="/types-of-leather#nubuck-leather"
            title="Nubuck Aniline Leather"
            className={leatherGuideLinkClassName}
          >
            Nubuck
          </Link>{" "}
          leather are considered the highest quality full grain leather and command a higher price
          point. They showcase the natural characteristics of the animal hide and form a natural
          patina over time.{" "}
          <Link
            href="/types-of-leather#wax-pull-up-leather"
            title="Wax Oil Pull Up Aniline Leather"
            className={leatherGuideLinkClassName}
          >
            Wax Pull Up
          </Link>{" "}
          and{" "}
          <Link
            href="/types-of-leather#oil-pull-up-leather"
            title="Oil Pull Up Aniline Leather"
            className={leatherGuideLinkClassName}
          >
            Oil Pull up
          </Link>{" "}
          hides offer this type of character for any furniture piece. If you want your leather
          furniture to stand out, choose a bold color or embossed leather pattern. Or if you prefer
          a more subdued look, select a classic black or brown leather.
        </p>
      </LeatherGuideCallout>

      <div className="mt-8 grid grid-cols-1 border-4 border-black bg-white lg:grid-cols-4">
        {DECISION_CARDS.map((card, index) => (
          <article
            key={card.heading}
            className={`p-4 sm:p-5 ${
              index < DECISION_CARDS.length - 1
                ? "border-b-4 border-black lg:border-b-0 lg:border-r-4"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <i
                className={`fa ${card.iconClass} shrink-0 text-2xl text-black sm:text-3xl`}
                aria-hidden
              />
              <h4 className="font-display text-xl font-black uppercase leading-none tracking-tight text-black lg:text-2xl">
                {card.heading}
              </h4>
            </div>
            <p className="mt-2 font-sans text-sm font-semibold leading-snug text-black">
              {card.text}
            </p>
            <DecisionTagLabel tag={card.tag} />
          </article>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 border-4 border-black bg-white md:grid-cols-2">
        <article className="border-b-4 border-black p-5 sm:p-6 md:border-b-0 md:border-r-4">
          <h4 className={`${upholsteryColumnTitleClassName} border-b-4 md:border-b-[6px]`}>
            Protected Leather
          </h4>
          <p className="mt-3 font-sans text-sm font-bold uppercase tracking-wide text-black sm:text-base">
            Built for durability & easy maintenance
          </p>
          <ul className="mt-4 list-none space-y-3 p-0">
            {PROTECTED_LEATHER_ITEMS.map((item) => (
              <LeatherListItem key={item.label} item={item} />
            ))}
          </ul>
        </article>

        <article className="p-5 sm:p-6">
          <h4 className={`${upholsteryColumnTitleClassName} border-b-4 md:border-b-[6px]`}>
            Unprotected Leather
          </h4>
          <p className="mt-3 font-sans text-sm font-bold uppercase tracking-wide text-black sm:text-base">
            Natural character & premium aging
          </p>
          <ul className="mt-4 list-none space-y-3 p-0">
            {UNPROTECTED_LEATHER_ITEMS.map((item) => (
              <LeatherListItem key={item.label} item={item} />
            ))}
          </ul>
        </article>
      </div>

      <div
        id="what-to-avoid"
        className="mt-12 scroll-mt-24"
        aria-labelledby="what-to-avoid-heading"
      >
        <h3
          id="what-to-avoid-heading"
          className={upholsterySectionHeadingCenteredClassName}
        >
          What Upholstery Leather To Avoid?
        </h3>
        <p className={`mt-8 ${upholsteryOrangeSubheadingCenteredClassName}`}>
          Faux Leather, Split Leather, Bonded Leather
        </p>

        <div id="Browse" className="mt-8 overflow-hidden">
          <figure className="brutalist-image-frame float-right ml-6 mb-4 w-[280px] shrink-0 sm:w-[320px]">
            <Image
              unoptimized
              src="https://res.cloudinary.com/releather-com/image/upload/l_,l_text:montserrat_35_style_bold:Bonded%20Leather,co_rgb:ffffff/v1654908428/leather/flaking-peeling-leather-bonded-faux.png"
              alt="Example of Bonded Leather Peeling"
              title="Example of Bonded Leather Peeling"
              width={300}
              height={200}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </figure>
          <p className="font-sans text-base font-semibold leading-relaxed text-black sm:text-lg">
            Whenever you&apos;re leather furniture shopping, whether it&apos;s for new sofas or
            chairs, there are a few things you should keep in mind. First, avoid faux leather, split
            leather, pu leather, and{" "}
            <Link
              href="/types-of-leather#bonded-leather"
              title="Bonded Leather"
              className={leatherGuideLinkClassName}
            >
              bonded leather
            </Link>
            . These materials may look like real leather, but they&apos;re not as durable or as
            comfortable as real leather. It goes without saying, secondly, always opt for the best
            leather for your home. Leather furniture is not only more comfortable, but it also last
            longer than other materials including upholstery fabric. So when you&apos;re leather
            shopping, keep these things in mind and you&apos;ll be sure to find the perfect
            furniture piece for your home.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 border-4 border-black bg-white md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <div className="border-b-4 border-black p-5 md:border-b-0 md:border-r-4">
          <p className={upholsteryCompareStripClassName}>
            Protected ={" "}
            <span className="text-releather-orange">Durability + Easy Care</span>
          </p>
        </div>
        <div className="flex items-center justify-center border-b-4 border-black bg-white px-4 py-3 md:border-b-0 md:border-r-4">
          <span className={upholsteryVsBadgeClassName}>
            VS
          </span>
        </div>
        <div className="border-b-4 border-black p-5 md:border-b-0 md:border-r-4">
          <p className={upholsteryCompareStripClassName}>
            Unprotected ={" "}
            <span className="text-releather-orange">Natural Beauty + Patina</span>
          </p>
        </div>
        <div className="flex items-center justify-center border-b-4 border-black bg-white px-4 py-3 md:border-b-0 md:border-r-4">
          <span className={upholsteryVsBadgeClassName}>
            VS
          </span>
        </div>
        <div className="p-5">
          <p className={upholsteryCompareStripClassName}>
            Faux ={" "}
            <span className="text-releather-orange">Low Durability + Artificial Feel</span>
          </p>
        </div>
      </div>
    </section>
  );
}
