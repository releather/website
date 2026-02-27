import Image from "next/image";

export type BenefitItem = {
  /** Benefit title (e.g. "Preserve Quality") */
  title: string;
  /** Benefit description – string or ReactNode */
  description: React.ReactNode;
};

export type BenefitsProps = {
  /** Section heading (e.g. "Why Choose Leather Cleaning?") */
  title: string;
  /** Optional subheading (e.g. "3 Benefits of Leather Cleaning") */
  subtitle?: string;
  /** Optional intro content (e.g. paragraph with floated image) rendered after subtitle, before the benefits list */
  intro?: React.ReactNode;
  /** Optional image rendered under the heading (ignored if intro is provided) */
  image?: { src: string; alt: string; title?: string; width?: number; height?: number };
  /** List of benefits */
  benefits: BenefitItem[];
  /** Optional id for the section (for anchor links) */
  id?: string;
};

export default function Benefits({
  title,
  subtitle,
  intro,
  image,
  benefits,
  id,
}: BenefitsProps) {
  return (
    <section
      id={id}
      className="mt-12 border-t-4 border-releather-orange pt-12"
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <h2
        id={id ? `${id}-heading` : undefined}
        className="font-display text-3xl font-normal tracking-tight text-black sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 font-sans text-lg font-bold text-releather-orange">
          {subtitle}
        </p>
      )}
      {intro != null ? (
        <div className="mt-6 [&_.brutalist-image-frame]:float-left [&_.brutalist-image-frame]:mr-6 [&_.brutalist-image-frame]:mb-4 [&_.brutalist-image-frame]:shrink-0">
          {intro}
        </div>
      ) : image ? (
        <p className="mt-6">
          <Image unoptimized
            src={image.src}
            alt={image.alt}
            title={image.title ?? image.alt}
            width={image.width ?? 970}
            height={image.height ?? 250}
            loading="lazy"
            className="w-full object-cover"
          />
        </p>
      ) : null}
      <ul className={`mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 ${intro != null ? "clear-left" : ""}`}>
        {benefits.map((item, index) => (
          <li
            key={index}
            className="flex flex-col border-4 border-releather-orange bg-white p-5"
          >
            <span
              className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center border-2 border-releather-orange bg-releather-orange text-black"
              aria-hidden
            >
              <i className="fa fa-check text-xl" aria-hidden />
            </span>
            <h3 className="font-display text-xl font-normal tracking-tight text-black">
              {item.title}
            </h3>
            <div className="mt-2 font-sans text-base font-medium leading-relaxed text-gray-700">
              {item.description}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
