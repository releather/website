import Image from "next/image";
import Link from "next/link";
import type { FaqItem } from "@/components/Faq";
import { cloudinaryDisplayUrl } from "@/lib/cloudinary";

const REGULAR_PIGMENTED_LEATHER_COMPARE_URL =
  "https://res.cloudinary.com/leathera/image/upload/c_scale,h_400,w_600/l_image:upload:leather:Colorful:Colorful_Iolite/c_crop,fl_relative,w_0.5/o_100/fl_layer_apply,g_south_east,x_0.03,y_0.02,bo_2px_solid_rgb:ffffff/leather/Colorful/Colorful_Iolite.jpg";

const DISTRESSED_LEATHER_COMPARE_URL =
  "https://res.cloudinary.com/leathera/image/upload/c_scale,h_400,w_600/l_image:upload:leather:Distressed:Distressed_Leather_Indigo/c_crop,fl_relative,w_0.5/o_100/fl_layer_apply,g_south_east,x_0.03,y_0.02,bo_2px_solid_rgb:ffffff/leather/Distressed/Distressed_Leather_Indigo.jpg";

export const distressedLeatherFaqItems: FaqItem[] = [
  {
    question: "What is the difference between distressed leather and regular leather?",
    questionIcon: "arrows-left-right",
    answer: (
      <>
        <p>
          Distressed leather is treated with waxes and finishes for a vintage aged
          effect, while regular pigmented leather has a uniform, coated surface color.
          Refer to the following comparison:
        </p>
        <div
          className="mt-5 rounded-md bg-gray-100/90 p-5 sm:mt-6 sm:p-8"
          role="group"
          aria-label="Regular pigmented leather versus distressed leather"
        >
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-4 md:gap-6">
            <div className="min-w-0 text-center">
              <Image
                src={cloudinaryDisplayUrl(REGULAR_PIGMENTED_LEATHER_COMPARE_URL)}
                alt="Regular pigmented leather in blue with uniform grain and coated finish"
                width={600}
                height={400}
                unoptimized
                loading="lazy"
                className="mx-auto h-auto w-full max-w-[600px] object-cover"
              />
              <p className="mt-3 font-sans text-sm font-medium text-gray-800 sm:mt-3.5">
                Regular pigmented leather
              </p>
            </div>
            <div
              className="flex justify-center sm:px-1 md:px-2"
              aria-hidden="true"
            >
              <span className="font-display text-4xl font-black leading-none tracking-wide text-releather-orange sm:text-5xl md:text-6xl">
                VS
              </span>
            </div>
            <div className="min-w-0 text-center">
              <Image
                src={cloudinaryDisplayUrl(DISTRESSED_LEATHER_COMPARE_URL)}
                alt="Distressed leather in indigo with vintage crackled texture"
                width={600}
                height={400}
                unoptimized
                loading="lazy"
                className="mx-auto h-auto w-full max-w-[600px] object-cover"
              />
              <p className="mt-3 font-sans text-sm font-medium text-gray-800 sm:mt-3.5">
                Distressed leather
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    question: "Is distressed leather more expensive?",
    questionIcon: "dollar-sign",
    answer: (
      <p>
        Distressed leather is often more expensive due to premium hides, artisan
        finishing, wax treatments, and its unique aged pull-up character.
      </p>
    ),
  },
  {
    question: "Is distressed leather waterproof?",
    questionIcon: "droplet",
    answer: (
      <p>
        Distressed leather contains waxes and oils that offer more resistance to
        water spotting than pure aniline leather, though it still requires regular{" "}
        <Link href="/aniline-leather-cleaning" title="Aniline leather cleaning">
          leather care
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Is distressed leather durable?",
    questionIcon: "shield-halved",
    answer: (
      <p>
        Distressed leather is durable and designed to age gracefully. It holds up well
        against everyday wear, though its lighter finish may fade faster than heavily
        pigmented leather.
      </p>
    ),
  },
  {
    question: "How do you clean distressed leather?",
    questionIcon: "soap",
    answer: (
      <p>
        Use a wax-free leather lotion such as{" "}
        <Link href="/leather-conditioner" title="ReLeather Leather Conditioner">
          ReLeather Leather Conditioner
        </Link>
        . Wipe gently first, then apply lightly to maintain softness and finish.
      </p>
    ),
  },
  {
    question: "Is distressed leather pet-friendly?",
    questionIcon: "paw",
    answer: (
      <p>
        It&apos;s moderately pet-friendly. The waxed surface helps disguise light
        marks, but claws can still leave visible scratches.
      </p>
    ),
  },
  {
    question: "Does distressed leather scratch easily?",
    questionIcon: "hand",
    answer: (
      <p>
        Yes, it can show scratches more easily than pigmented leather, though many
        marks blend into the natural aged character.
      </p>
    ),
  },
  {
    question: "Does distressed leather crack?",
    questionIcon: "triangle-exclamation",
    answer: (
      <p>
        It resists cracking well thanks to oils and waxes, but poor care or dryness
        over time can still cause surface cracking.
      </p>
    ),
  },
];

/** Plain-text answers for FAQPage JSON-LD (matches distressedLeatherFaqItems). */
export const distressedLeatherFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between distressed leather and regular leather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Distressed leather is treated with waxes and finishes for a vintage aged effect, while regular pigmented leather has a uniform, coated surface color. Refer to the following comparison:",
      },
    },
    {
      "@type": "Question",
      name: "Is distressed leather more expensive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Distressed leather is often more expensive due to premium hides, artisan finishing, wax treatments, and its unique aged pull-up character.",
      },
    },
    {
      "@type": "Question",
      name: "Is distressed leather waterproof?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Distressed leather contains waxes and oils that offer more resistance to water spotting than pure aniline leather, though it still requires regular leather care.",
      },
    },
    {
      "@type": "Question",
      name: "Is distressed leather durable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Distressed leather is durable and designed to age gracefully. It holds up well against everyday wear, though its lighter finish may fade faster than heavily pigmented leather.",
      },
    },
    {
      "@type": "Question",
      name: "How do you clean distressed leather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a wax-free leather lotion such as ReLeather Leather Conditioner. Wipe gently first, then apply lightly to maintain softness and finish.",
      },
    },
    {
      "@type": "Question",
      name: "Is distressed leather pet-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's moderately pet-friendly. The waxed surface helps disguise light marks, but claws can still leave visible scratches.",
      },
    },
    {
      "@type": "Question",
      name: "Does distressed leather scratch easily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it can show scratches more easily than pigmented leather, though many marks blend into the natural aged character.",
      },
    },
    {
      "@type": "Question",
      name: "Does distressed leather crack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It resists cracking well thanks to oils and waxes, but poor care or dryness over time can still cause surface cracking.",
      },
    },
  ],
};
