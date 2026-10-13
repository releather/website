import Image from "next/image";
import Link from "next/link";
import type { FaqItem } from "@/components/Faq";
import { cloudinaryDisplayUrl } from "@/lib/cloudinary";

const REGULAR_PIGMENTED_LEATHER_COMPARE_URL =
  "https://res.cloudinary.com/leathera/image/upload/c_scale,h_400,w_600/l_image:upload:leather:Colorful:Colorful_Iolite/c_crop,fl_relative,w_0.5/o_100/fl_layer_apply,g_south_east,x_0.03,y_0.02,bo_2px_solid_rgb:ffffff/leather/Colorful/Colorful_Iolite.jpg";

const WAXED_LEATHER_COMPARE_URL =
  "https://res.cloudinary.com/leathera/image/upload/c_scale,h_400,w_600/l_image:upload:leather:Waxed:Waxed_Leather_Black/c_crop,fl_relative,w_0.5/o_100/fl_layer_apply,g_south_east,x_0.03,y_0.02,bo_2px_solid_rgb:ffffff/v1730626091/leather/Waxed/Waxed_Leather_Black.jpg";

export const waxedLeatherFaqItems: FaqItem[] = [
  {
    question: "What is the difference between waxed leather and regular leather?",
    questionIcon: "arrows-left-right",
    answer: (
      <>
        <p>
          Waxed leather is a semi-aniline hide finished with oils and waxes for a
          hand-antiqued surface, while{" "}
          <Link href="/types-of-leather" title="Types of leather finishes">
            regular pigmented leather
          </Link>{" "}
          has a uniform, coated color. Refer to the following comparison:
        </p>
        <div
          className="mt-5 rounded-md bg-gray-100/90 p-5 sm:mt-6 sm:p-8"
          role="group"
          aria-label="Regular pigmented leather versus waxed leather"
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
                src={cloudinaryDisplayUrl(WAXED_LEATHER_COMPARE_URL)}
                alt="Waxed leather in black with a hand-antiqued fine grain"
                width={600}
                height={400}
                unoptimized
                loading="lazy"
                className="mx-auto h-auto w-full max-w-[600px] object-cover"
              />
              <p className="mt-3 font-sans text-sm font-medium text-gray-800 sm:mt-3.5">
                Waxed leather
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    question: "Is waxed leather more expensive?",
    questionIcon: "dollar-sign",
    answer: (
      <p>
        Waxed leather usually costs more than a basic coated hide because it is an
        Italian semi-aniline skin with a wax and oil antique finish, not a uniform
        pigment coat.
      </p>
    ),
  },
  {
    question: "Is waxed leather waterproof?",
    questionIcon: "droplet",
    answer: (
      <p>
        The wax coat resists light moisture and spotting better than an open
        aniline, but it is not waterproof. Spills should still be blotted, and the
        hide needs regular{" "}
        <Link href="/aniline-leather-cleaning" title="Aniline leather cleaning">
          leather care
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Is waxed leather durable?",
    questionIcon: "shield-halved",
    answer: (
      <p>
        Yes, for furniture. The wax finish is built for everyday sitting in homes
        and for higher-traffic contract rooms such as lounges and offices. It will
        still mark if it is abused, and it is not as sealed as a heavy pigment.
      </p>
    ),
  },
  {
    question: "How do you clean waxed leather?",
    questionIcon: "soap",
    answer: (
      <p>
        Dust it regularly and use a light leather conditioner such as{" "}
        <Link href="/leather-conditioner" title="ReLeather Leather Conditioner">
          ReLeather Leather Conditioner
        </Link>
        . Skip harsh cleaners and solvents — they can strip the wax and leave the
        surface dull.
      </p>
    ),
  },
  {
    question: "Is waxed leather pet-friendly?",
    questionIcon: "paw",
    answer: (
      <p>
        It is more forgiving than an unprotected aniline, and the waxed surface can
        disguise light marks. Claws and deep scratches still show, so it is only a
        moderate choice for homes with pets.
      </p>
    ),
  },
  {
    question: "Does waxed leather scratch easily?",
    questionIcon: "hand",
    answer: (
      <p>
        It can scratch, though many light marks sit in the antiqued grain better
        than they would on a smooth{" "}
        <Link href="/types-of-leather" title="Types of leather finishes">
          pigmented leather
        </Link>
        . Hard or repeated abrasion will still leave a visible line.
      </p>
    ),
  },
  {
    question: "Does waxed leather crack?",
    questionIcon: "triangle-exclamation",
    answer: (
      <p>
        Oils and waxes help the hide stay supple, so it resists drying and cracking
        better than a neglected aniline. If it is left dry for years, the surface
        can still crack.
      </p>
    ),
  },
];

/** Plain-text answers for FAQPage JSON-LD (matches waxedLeatherFaqItems). */
export const waxedLeatherFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between waxed leather and regular leather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waxed leather is a semi-aniline hide finished with oils and waxes for a hand-antiqued surface, while regular pigmented leather has a uniform, coated color. Waxed leather shows natural fine grain and a soft waxy hand; pigmented leather offers a more even coated surface. Compare the two finishes side by side when selecting upholstery leather for furniture.",
      },
    },
    {
      "@type": "Question",
      name: "Is waxed leather more expensive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waxed leather usually costs more than a basic coated hide because it is an Italian semi-aniline skin with a wax and oil antique finish, not a uniform pigment coat.",
      },
    },
    {
      "@type": "Question",
      name: "Is waxed leather waterproof?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The wax coat resists light moisture and spotting better than an open aniline, but it is not waterproof. Spills should still be blotted, and the hide needs regular leather care.",
      },
    },
    {
      "@type": "Question",
      name: "Is waxed leather durable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for furniture. The wax finish is built for everyday sitting in homes and for higher-traffic contract rooms such as lounges and offices. It will still mark if it is abused, and it is not as sealed as a heavy pigment.",
      },
    },
    {
      "@type": "Question",
      name: "How do you clean waxed leather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dust it regularly and use a light leather conditioner such as ReLeather Leather Conditioner. Skip harsh cleaners and solvents — they can strip the wax and leave the surface dull.",
      },
    },
    {
      "@type": "Question",
      name: "Is waxed leather pet-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is more forgiving than an unprotected aniline, and the waxed surface can disguise light marks. Claws and deep scratches still show, so it is only a moderate choice for homes with pets.",
      },
    },
    {
      "@type": "Question",
      name: "Does waxed leather scratch easily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can scratch, though many light marks sit in the antiqued grain better than they would on a smooth pigmented leather. Hard or repeated abrasion will still leave a visible line.",
      },
    },
    {
      "@type": "Question",
      name: "Does waxed leather crack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oils and waxes help the hide stay supple, so it resists drying and cracking better than a neglected aniline. If it is left dry for years, the surface can still crack.",
      },
    },
  ],
};
