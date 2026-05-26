import Link from "next/link";
import type { FaqItem } from "@/components/Faq";
import { LEATHER_MATERIAL_QUOTE_URL } from "@/lib/upholsteryLeatherCollections";

const linkClass =
  "font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange";

export const leatherForUpholsteryFaqItems: FaqItem[] = [
  {
    question: "What leather is best for upholstery?",
    questionIcon: "couch",
    answer: (
      <p>
        The best upholstery leather depends on your project. For everyday sofas and
        chairs, look for full-grain or top-grain hides finished for furniture use—
        semi-aniline and protected leathers balance beauty with stain resistance.
        Aniline and pull-up leathers offer rich character for statement pieces. Browse
        our{" "}
        <Link href="/leather-for-upholstery#collections" className={linkClass}>
          Italian upholstery collections
        </Link>{" "}
        or{" "}
        <Link href={LEATHER_MATERIAL_QUOTE_URL} className={linkClass}>
          request a material quote
        </Link>{" "}
        and we will help you choose.
      </p>
    ),
  },
  {
    question: "Is Italian leather durable?",
    questionIcon: "shield-halved",
    answer: (
      <p>
        Yes. Italian-finished upholstery leather is tanned and coated for furniture
        use, with strong tensile strength and abrasion resistance suited to residential
        and commercial seating. Durability also depends on hide grade, finish type, and
        care—protected and semi-aniline finishes typically hold up best in high-traffic
        settings.
      </p>
    ),
  },
  {
    question: "How much upholstery leather do I need?",
    questionIcon: "ruler-combined",
    answer: (
      <p>
        Yardage depends on your frame size, cushion style, welt, and whether you are
        covering arms, backs, and skirts. A standard sofa often requires roughly 15–20
        yards; sectionals and custom pieces vary more. Hides are sold by the square
        foot (typically about 50–55 sq ft per hide). Send dimensions or photos through
        our{" "}
        <Link href="/leather-calculator" className={linkClass}>
          Leather Calculator
        </Link>{" "}
        and we will estimate quantity for your job.
      </p>
    ),
  },
  {
    question: "What is the difference between aniline and protected leather?",
    questionIcon: "arrows-left-right",
    answer: (
      <p>
        Aniline leather is dyed through with little or no opaque topcoat, so the natural
        grain shows and the hide breathes—it feels luxurious but can mark more easily.
        Protected (pigmented or semi-aniline) leather adds a color coat and clear
        finish for more uniform color and easier day-to-day maintenance. See our{" "}
        <Link href="/types-of-leather" className={linkClass}>
          types of leather guide
        </Link>{" "}
        for a full comparison of finishes.
      </p>
    ),
  },
  {
    question: "Can I order samples?",
    questionIcon: "swatchbook",
    answer: (
      <p>
        Yes. Order leather swatches to review color, grain, and hand in your own
        lighting before you buy. Many collections offer individual color samples—check
        the swatch sections on collection pages such as{" "}
        <Link href="/distressed-leather" className={linkClass}>
          Distressed Leather
        </Link>
        , or note your preferred colors when you{" "}
        <Link href={LEATHER_MATERIAL_QUOTE_URL} className={linkClass}>
          request a quote
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Is leather good for homes with pets?",
    questionIcon: "paw",
    answer: (
      <p>
        Leather can work well with pets when you choose the right finish. Protected and
        semi-aniline upholstery leathers resist scratches and stains better than pure
        aniline. Hair wipes off easily compared with fabric, and minor scuffs often
        blend into natural grain. No leather is claw-proof—trim nails and consider
        darker or textured hides for active households. Samples help you test how a
        color reads in your space.
      </p>
    ),
  },
  {
    question: "Can you leather match?",
    questionIcon: "palette",
    answer: (
      <p>
        Yes. You can try our{" "}
        <Link href="/leather-match" className={linkClass}>
          Leather Color Matcher
        </Link>{" "}
        to upload a photo and see the closest colors in our library. You can also send us
        a leather swatch from your existing piece and we can source the most suitable
        match in color and texture from our Italian upholstery library. Matching works
        best when we have a physical sample or clear photos in natural light. Include
        your swatch details on the{" "}
        <Link href={LEATHER_MATERIAL_QUOTE_URL} className={linkClass}>
          material quote form
        </Link>{" "}
        or contact us directly.
      </p>
    ),
  },
];

/** Plain-text answers for FAQPage JSON-LD (matches leatherForUpholsteryFaqItems). */
export const leatherForUpholsteryFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What leather is best for upholstery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best upholstery leather depends on your project. For everyday sofas and chairs, look for full-grain or top-grain hides finished for furniture use—semi-aniline and protected leathers balance beauty with stain resistance. Aniline and pull-up leathers offer rich character for statement pieces. Browse our Italian upholstery collections or request a material quote and we will help you choose.",
      },
    },
    {
      "@type": "Question",
      name: "Is Italian leather durable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Italian-finished upholstery leather is tanned and coated for furniture use, with strong tensile strength and abrasion resistance suited to residential and commercial seating. Durability also depends on hide grade, finish type, and care—protected and semi-aniline finishes typically hold up best in high-traffic settings.",
      },
    },
    {
      "@type": "Question",
      name: "How much upholstery leather do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yardage depends on your frame size, cushion style, welt, and whether you are covering arms, backs, and skirts. A standard sofa often requires roughly 15–20 yards; sectionals and custom pieces vary more. Hides are sold by the square foot (typically about 50–55 sq ft per hide). Send dimensions or photos through our Leather Calculator at releather.com/leather-calculator and we will estimate quantity for your job.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between aniline and protected leather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aniline leather is dyed through with little or no opaque topcoat, so the natural grain shows and the hide breathes—it feels luxurious but can mark more easily. Protected (pigmented or semi-aniline) leather adds a color coat and clear finish for more uniform color and easier day-to-day maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Can I order samples?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Order leather swatches to review color, grain, and hand in your own lighting before you buy. Many collections offer individual color samples on collection pages, or note your preferred colors when you request a quote.",
      },
    },
    {
      "@type": "Question",
      name: "Is leather good for homes with pets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leather can work well with pets when you choose the right finish. Protected and semi-aniline upholstery leathers resist scratches and stains better than pure aniline. Hair wipes off easily compared with fabric, and minor scuffs often blend into natural grain. No leather is claw-proof—trim nails and consider darker or textured hides for active households.",
      },
    },
    {
      "@type": "Question",
      name: "Can you leather match?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can try our Leather Color Matcher at releather.com/leather-match to upload a photo and see the closest colors in our library. You can also send us a leather swatch from your existing piece and we can source the most suitable match in color and texture from our Italian upholstery library. Matching works best when we have a physical sample or clear photos in natural light. Include your swatch details on the material quote form or contact us directly.",
      },
    },
  ],
};
