import Image from "next/image";

export type BeforeAfterItem = {
  beforeSrc: string;
  beforeAlt: string;
  beforeTitle: string;
  afterSrc: string;
  afterAlt: string;
  afterTitle: string;
  /** Main caption (e.g. project description) */
  caption: React.ReactNode;
  /** Optional detail line (e.g. "Semi Aniline Leather") */
  detail?: React.ReactNode;
};

export type BeforeAfterDlItem = {
  dt: string;
  dd: React.ReactNode;
};

export type BeforeAfterProps = {
  /** Section heading (e.g. "Before & After") */
  heading?: string;
  /** Subheading with arrow (e.g. "Leather Cleaning Results") */
  subheading?: string;
  /** Optional intro paragraph */
  intro?: React.ReactNode;
  /** Before/after image pairs with captions */
  items: BeforeAfterItem[];
  /** Optional definition list below the images */
  dlItems?: BeforeAfterDlItem[];
  /** Optional id for the section */
  id?: string;
};

export default function BeforeAfter({
  heading,
  subheading,
  intro,
  items,
  dlItems,
  id,
}: BeforeAfterProps) {
  return (
    <section
      id={id}
      className="mt-12 border-t-4 border-black pt-12"
      aria-labelledby={heading && id ? `${id}-heading` : undefined}
    >
      {(heading || subheading) && (
        <header className="mb-10 text-center">
          {heading && (
            <div className="inline-block rounded-none border-4 border-black bg-releather-orange px-6 py-4 text-center sm:px-8 sm:py-5">
              <h1
                id={id ? `${id}-heading` : undefined}
                className="font-display text-4xl font-black uppercase leading-tight tracking-tighter text-black sm:text-5xl lg:text-6xl"
              >
                {heading}
              </h1>
            </div>
          )}
          {subheading && (
            <p className="mt-4 font-sans text-2xl font-bold leading-snug text-gray-800">
              → {subheading}
            </p>
          )}
        </header>
      )}

      {intro != null && (
        <p className="mb-8 font-sans text-base leading-relaxed text-gray-800">
          {intro}
        </p>
      )}

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {items.map((item, index) => (
          <figure
            key={index}
            className="border-4 border-black bg-releather-dark p-4"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="space-y-2">
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                  Before
                </p>
                <Image unoptimized
                  src={item.beforeSrc}
                  alt={item.beforeAlt}
                  title={item.beforeTitle}
                  width={300}
                  height={225}
                  loading="lazy"
                  className="aspect-[4/3] w-full border-2 border-black object-cover"
                />
              </div>
              <div className="space-y-2">
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                  After
                </p>
                <Image unoptimized
                  src={item.afterSrc}
                  alt={item.afterAlt}
                  title={item.afterTitle}
                  width={300}
                  height={225}
                  loading="lazy"
                  className="aspect-[4/3] w-full border-2 border-black object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-4 border-t-2 border-gray-500 pt-4">
              <p className="font-sans text-base font-medium text-white">
                {item.caption}
              </p>
              {item.detail != null && (
                <p className="mt-1 font-sans text-sm font-medium italic text-gray-300">
                  {item.detail}
                </p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {dlItems != null && dlItems.length > 0 && (
        <dl className="mt-10 space-y-4 border-t-4 border-releather-orange pt-8">
          {dlItems.map((entry, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
              <dt className="font-sans text-base font-bold text-black">
                <strong>{entry.dt}</strong>
              </dt>
              <dd className="mt-1 font-sans text-base leading-relaxed text-gray-700">
                {entry.dd}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
