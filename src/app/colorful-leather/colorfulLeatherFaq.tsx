import Image from "next/image";
import Link from "next/link";
import type { FaqItem } from "@/components/Faq";
import { cloudinaryDisplayUrl } from "@/lib/cloudinary";

const GREY_CHAIR_BEFORE_URL =
  "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-before/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/full-leather-reupholstery-restoration-chair-grey-bustle-back-palette-grey-los-angeles-before.png";

const GREY_CHAIR_AFTER_URL =
  "https://res.cloudinary.com/releather-com/image/upload/c_fill,w_450,h_450/bo_10px_solid_rgb:f8991d/u_image:upload:background:background/c_thumb,w_1.0,h_1.0,fl_relative.layer_apply/l_image:upload:background:repair-after/c_scale,fl_relative,w_0.96/o_100/fl_layer_apply,g_south_west,x_0.02,y_0.04/before-after/full-leather-reupholstery-restoration-chair-grey-bustle-back-palette-grey-los-angeles-after.png";

export const colorfulLeatherFaqItems: FaqItem[] = [
  {
    question: "What difference does reupholstering in Colorful leather make?",
    questionIcon: "arrows-left-right",
    answer: (
      <>
        <p>
          A grey bustle-back chair in Los Angeles came in worn. A full
          reupholstery in grey Colorful leather renewed the seat and the look:
          even color, a protected matte coat, and the bustle-back shape kept.
          Here is the chair before and after:
        </p>
        <div
          className="mt-5 rounded-md bg-gray-100/90 p-5 sm:mt-6 sm:p-8"
          role="group"
          aria-label="Before and after of a grey bustle-back chair reupholstered in Colorful leather in Los Angeles"
        >
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-4 md:gap-6">
            <div className="min-w-0 text-center">
              <Image
                src={cloudinaryDisplayUrl(GREY_CHAIR_BEFORE_URL)}
                alt="Worn grey bustle-back chair in Los Angeles before a full reupholstery"
                width={450}
                height={450}
                unoptimized
                loading="lazy"
                className="mx-auto h-auto w-full max-w-[450px] object-cover"
              />
              <p className="mt-3 font-sans text-sm font-medium text-gray-800 sm:mt-3.5">
                Before
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
                src={cloudinaryDisplayUrl(GREY_CHAIR_AFTER_URL)}
                alt="Grey bustle-back chair in Los Angeles after a full reupholstery in Colorful leather"
                width={450}
                height={450}
                unoptimized
                loading="lazy"
                className="mx-auto h-auto w-full max-w-[450px] object-cover"
              />
              <p className="mt-3 font-sans text-sm font-medium text-gray-800 sm:mt-3.5">
                After
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    question: "Is colorful leather more expensive?",
    questionIcon: "dollar-sign",
    answer: (
      <p>
        It is priced as an Italian upholstery hide with an aniline dye and a
        protective matte finish, not as a basic coated roll. The cost sits with the
        hide and the color range, not with a fashion markup.
      </p>
    ),
  },
  {
    question: "Is colorful leather waterproof?",
    questionIcon: "droplet",
    answer: (
      <p>
        The matte coat resists light moisture and spotting better than an open
        aniline, but it is not waterproof. Blot spills, and keep up with regular{" "}
        <Link href="/aniline-leather-cleaning" title="Aniline leather cleaning">
          leather care
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Is colorful leather durable?",
    questionIcon: "shield-halved",
    answer: (
      <p>
        Yes, for furniture. The protective finish is meant for everyday sitting in
        homes and for higher-traffic contract rooms such as dining rooms, lounges,
        and offices. It will still mark if it is abused.
      </p>
    ),
  },
  {
    question: "How do you clean colorful leather?",
    questionIcon: "soap",
    answer: (
      <p>
        Dust it and wipe with a soft, barely damp cloth. Use a light conditioner
        such as{" "}
        <Link href="/leather-conditioner" title="ReLeather Leather Conditioner">
          ReLeather Leather Conditioner
        </Link>{" "}
        a couple of times a year. Skip harsh cleaners and solvents — they can dull
        the matte coat.
      </p>
    ),
  },
  {
    question: "Is colorful leather pet-friendly?",
    questionIcon: "paw",
    answer: (
      <p>
        The protective coat is more forgiving than an open aniline, and a pebble
        grain hides light scuffs better than a smooth surface. Claws and deep
        scratches still show, especially on cream and white.
      </p>
    ),
  },
  {
    question: "Does colorful leather scratch easily?",
    questionIcon: "hand",
    answer: (
      <p>
        It can scratch. Light marks sit in the pebble grain more quietly than they
        would on a smooth{" "}
        <Link href="/types-of-leather#pigmented-leather" title="Pigmented leather">
          pigmented leather
        </Link>
        . Repeated abrasion will still leave a line.
      </p>
    ),
  },
  {
    question: "Does colorful leather fade?",
    questionIcon: "triangle-exclamation",
    answer: (
      <p>
        The protective coat helps the color hold under normal indoor use. Direct
        sun will still fade any dyed hide over time, including cream, white, and
        the stronger hues. Keep bright windows in mind when you place the furniture.
      </p>
    ),
  },
];

/** Plain-text answers for FAQPage JSON-LD (matches colorfulLeatherFaqItems). */
export const colorfulLeatherFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What difference does reupholstering in Colorful leather make?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A grey bustle-back chair in Los Angeles came in worn. A full reupholstery in grey Colorful leather renewed the seat and the look: even color, a protected matte coat, and the bustle-back shape kept.",
      },
    },
    {
      "@type": "Question",
      name: "Is colorful leather more expensive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is priced as an Italian upholstery hide with an aniline dye and a protective matte finish, not as a basic coated roll. The cost sits with the hide and the color range, not with a fashion markup.",
      },
    },
    {
      "@type": "Question",
      name: "Is colorful leather waterproof?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The matte coat resists light moisture and spotting better than an open aniline, but it is not waterproof. Blot spills, and keep up with regular leather care.",
      },
    },
    {
      "@type": "Question",
      name: "Is colorful leather durable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for furniture. The protective finish is meant for everyday sitting in homes and for higher-traffic contract rooms such as dining rooms, lounges, and offices. It will still mark if it is abused.",
      },
    },
    {
      "@type": "Question",
      name: "How do you clean colorful leather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dust it and wipe with a soft, barely damp cloth. Use a light conditioner such as ReLeather Leather Conditioner a couple of times a year. Skip harsh cleaners and solvents — they can dull the matte coat.",
      },
    },
    {
      "@type": "Question",
      name: "Is colorful leather pet-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The protective coat is more forgiving than an open aniline, and a pebble grain hides light scuffs better than a smooth surface. Claws and deep scratches still show, especially on cream and white.",
      },
    },
    {
      "@type": "Question",
      name: "Does colorful leather scratch easily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can scratch. Light marks sit in the pebble grain more quietly than they would on a smooth pigmented leather. Repeated abrasion will still leave a line.",
      },
    },
    {
      "@type": "Question",
      name: "Does colorful leather fade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The protective coat helps the color hold under normal indoor use. Direct sun will still fade any dyed hide over time, including cream, white, and the stronger hues. Keep bright windows in mind when you place the furniture.",
      },
    },
  ],
};
