import Link from "next/link";
import Image from "next/image";
import { leatherGuideLinkClassName } from "@/components/LeatherGuideCallout";

const SOFA_IMAGE_URL =
  "https://res.cloudinary.com/releather-com/image/upload/v1779631452/leather/durable-leather-sofa.jpg";

const TEXTURE_IMAGE_URL =
  "https://res.cloudinary.com/releather-com/image/upload/v1779631450/leather/durable-leather-sample.jpg";

const FEATURE_COLUMNS = [
  {
    iconClass: "fa-shield",
    heading: "Durable",
    text: "Leather is a strong and long-lasting material that can withstand years of everyday use.",
  },
  {
    iconClass: "fa-droplet",
    heading: "Care",
    text: "Proper care protects the leather from spills, scratches, and sun exposure.",
  },
  {
    iconClass: "fa-arrows-rotate",
    heading: "Restore",
    text: "Unlike other materials, leather can be restored and dyed to offer added longevity.",
  },
] as const;

const ctaButtonClassName =
  "inline-flex items-center justify-center gap-2 border-4 border-black bg-releather-orange px-5 py-3 text-center font-display text-base font-black uppercase leading-tight tracking-tight !text-black shadow-[6px_6px_0_0_#000000] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:!text-black hover:shadow-[4px_4px_0_0_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none sm:px-6 sm:text-lg [&_span]:text-black";

export default function LeatherUpholsteryDurabilitySection() {
  return (
    <section
      id="how-long-does-upholstery-leather-last"
      className="not-prose mx-auto my-10 max-w-[1280px] scroll-mt-24 border-4 border-black bg-white shadow-[10px_10px_0_0_#000000] [text-shadow:none]"
      aria-labelledby="upholstery-leather-durability-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
        <div className="border-b-4 border-black p-5 sm:p-6 lg:border-b-0 lg:border-r-4 lg:p-8">
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <h3
              id="upholstery-leather-durability-heading"
              className="text-balance font-display text-3xl font-black uppercase leading-none tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl"
            >
              How Long Does Upholstery Leather Last?
            </h3>
            <span
              className="hidden shrink-0 font-display text-5xl font-black leading-none text-releather-orange sm:text-6xl lg:block xl:text-7xl"
              aria-hidden
            >
              →
            </span>
          </div>

          <p className="mt-6 font-display text-base font-black uppercase tracking-wide text-releather-orange sm:text-lg md:text-xl">
            Durability. Leather Care. Leather Repair Service.
          </p>

          <div className="mt-6 space-y-5 font-sans text-base font-semibold leading-relaxed text-black sm:text-lg">
            <p className="mb-0">
              If you&apos;re considering leather for your furniture upholstery, you might be
              wondering how long it will last. The answer depends on factors including the
              quality of the leather and how it&apos;s used. Generally speaking, leather is a
              very durable material that can last for many years.
            </p>
            <p className="mb-0">
              With proper care, it&apos;s not unusual for leather furniture to last for decades.
              Of course, leather isn&apos;t indestructible — spills, scratching, and sun exposure
              can still cause damage. But with routine care, leather can provide years of beauty
              and comfort. Unlike faux leather, fabrics, and suede, upholstery leather can be
              restored and dyed for added longevity. Most aniline leather hides are suitable for
              our{" "}
              <Link
                href="/services/leather-restoration"
                title="Leather Restoration Service"
                className={leatherGuideLinkClassName}
              >
                Leather Restoration
              </Link>{" "}
              and{" "}
              <Link
                href="/services/leather-dyeing"
                title="Leather Dyeing Service"
                className={leatherGuideLinkClassName}
              >
                Leather Dyeing
              </Link>{" "}
              services.
            </p>
          </div>

          <div className="mt-8 border-4 border-black bg-releather-orange p-2 shadow-[6px_6px_0_0_#000000]">
            <div className="flex flex-col border-4 border-black bg-white sm:flex-row">
              <div className="flex shrink-0 items-center justify-center border-b-4 border-black bg-releather-orange px-8 py-6 sm:border-b-0 sm:border-r-4 sm:px-10">
                <span className="font-display text-6xl font-black uppercase leading-none text-black sm:text-7xl">
                  20+
                </span>
              </div>
              <p className="mb-0 flex items-center p-5 font-display text-lg font-black uppercase leading-tight tracking-tight text-black sm:p-6 sm:text-xl">
                With proper care, leather furniture can last for decades.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="border-b-4 border-black bg-black">
            <Image
              unoptimized
              src={SOFA_IMAGE_URL}
              alt="Black leather sofa showing durable upholstery leather"
              title="Durable leather sofa"
              width={900}
              height={700}
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 border-b-4 border-black sm:grid-cols-3">
            {FEATURE_COLUMNS.map((column, index) => (
              <article
                key={column.heading}
                className={`p-4 sm:p-5 ${
                  index < FEATURE_COLUMNS.length - 1
                    ? "border-b-4 border-black sm:border-b-0 sm:border-r-4"
                    : ""
                }`}
              >
                <div className="flex flex-col items-start gap-2 md:gap-3">
                  <i
                    className={`fa ${column.iconClass} shrink-0 text-2xl text-releather-orange sm:text-3xl`}
                    aria-hidden
                  />
                  <h4 className="font-display text-xl font-black uppercase leading-none tracking-tight text-black sm:text-2xl">
                    {column.heading}
                  </h4>
                </div>
                <p className="mt-3 font-sans text-sm font-semibold leading-snug text-black sm:text-base">
                  {column.text}
                </p>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-4 p-4 sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <figure className="shrink-0 border-4 border-black bg-white shadow-[4px_4px_0_0_#000000]">
                <Image
                  unoptimized
                  src={TEXTURE_IMAGE_URL}
                  alt="Black leather texture sample"
                  title="Durable leather sample"
                  width={120}
                  height={120}
                  loading="lazy"
                  className="block h-24 w-24 object-cover sm:h-28 sm:w-28"
                />
              </figure>
              <Link
                href="/estimate"
                title="Leather Restoration Service Cost"
                className={ctaButtonClassName}
              >
                Get a Leather Restoration Quote Now!
                <span aria-hidden>→</span>
              </Link>
            </div>
            <p className="mb-0 font-display text-base font-black uppercase leading-tight tracking-tight text-black sm:text-lg md:text-xl">
              So if you&apos;re looking for furniture that will stand the test of time, leather
              upholstery is definitely worth considering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
