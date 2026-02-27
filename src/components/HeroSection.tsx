import Image from "next/image";
import LiteYouTube from "@/components/LiteYouTube";

const HERO_BG =
  "https://res.cloudinary.com/releather-com/image/upload/f_auto/f_webp/v1654065902/background/background-leather-gradient.png";
const HERO_COUCH_IMG =
  "https://res.cloudinary.com/releather-com/image/upload/f_webp/v1672061616/before-after/Leather-Restoration-Couch-Sofa.jpg";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

const highlights = [
  {
    title: "Top Leather Restoration:",
    body: (
      <>
        ReLeather are masters in their craft! 5 stars! —{" "}
        <span className="inline-flex items-center gap-1.5 font-bold text-[#d32323]">
          <i className="fab fa-yelp shrink-0 text-xl text-[#d32323]" aria-hidden />
          Yelp
        </span>
      </>
    ),
  },
  {
    title: "Leather is an Investment:",
    body: "Got quality leather? Let us preserve & restore its value!",
  },
  {
    title: "Don't Replace, Restore & Save!",
    body:
      "Worn, scratched, spots, cracked, faded leather couch!",
  },
];

export default function HeroSection() {
  return (
    <section
      id="quote"
      className="relative border-b-4 border-releather-orange bg-black pt-4 pb-6 sm:pt-5 sm:pb-8 lg:pt-6 lg:pb-10"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundRepeat: "repeat-x",
      }}
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Row 1: Video on its own line */}
        <div className="mx-auto max-w-2xl overflow-hidden rounded-lg">
          <LiteYouTube
            videoId="2JhDAV8UJcs"
            title="ReLeather restoration video"
            embedParams="start=3&rel=0"
          />
        </div>

        {/* Row 2: H1 on its own line */}
        <h1
          id="hero-heading"
          className="mt-6 text-center font-display text-4xl font-normal leading-[1.15] tracking-normal text-white sm:text-5xl lg:text-6xl"
          style={{ wordSpacing: "0.08em" }}
        >
          Leather Restoration Specialists in Orange County
        </h1>

        {/* Row 3: Hero image left, highlights list right */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="flex justify-center lg:justify-end">
            <Image
              src={HERO_COUCH_IMG}
              alt="Leather restoration couch sofa before and after"
              width={520}
              height={450}
              className="w-full max-w-[320px] rounded-lg object-contain sm:max-w-[400px] lg:max-w-full"
            />
          </div>
          <div className="space-y-2 lg:space-y-2.5">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-2.5">
                <span className="mt-1 shrink-0 text-releather-orange">
                  <CheckIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <div className="min-w-0">
                  <p
                    className="font-sans text-xl font-bold sm:text-2xl"
                    style={{ color: "#f8991d" }}
                  >
                    {item.title}
                  </p>
                  <p className="mt-0.5 font-sans text-xl font-medium text-gray-300 sm:text-2xl">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
