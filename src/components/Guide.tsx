export type GuideHeaderProps = {
  /** Small label above the title (e.g. "Service Guide") */
  badge?: string;
  /** Main title (e.g. "Leather Sofa Cleaning") */
  title: React.ReactNode;
  /** Tagline below the title */
  tagline?: React.ReactNode;
};

export type GuideProps = {
  /** Optional header block – badge, title, tagline */
  header?: GuideHeaderProps;
  /** Article content – use GuideSection for section headings */
  children: React.ReactNode;
  /** Optional id for the section */
  id?: string;
};

/** Reusable section heading with orange underline (magazine editorial style) */
export function GuideSection({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className="border-b-2 border-releather-orange pb-1 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
    >
      <i className="fa fa-check-square mr-2 text-releather-orange" aria-hidden />
      {children}
    </h2>
  );
}

export default function Guide({ header, children, id }: GuideProps) {
  return (
    <article
      id={id}
      className="mt-12 border-t-4 border-black pt-12"
      aria-labelledby={header ? undefined : id ? `${id}-heading` : undefined}
    >
      {header && (
        <header className="mb-10 text-center">
          {header.badge ? (
            <h1
              id={id ? `${id}-heading` : undefined}
              className="inline-block min-w-[280px] rounded-none border-4 border-black bg-releather-orange px-6 py-4 text-center font-display text-4xl font-black uppercase leading-tight tracking-tighter italic text-black sm:text-5xl sm:py-5 lg:text-6xl"
            >
              {header.badge}
            </h1>
          ) : (
            header.title && (
              <div className="inline-block rounded-none border-4 border-black bg-releather-orange px-6 py-4 text-center sm:px-8 sm:py-5">
                <h1
                  id={id ? `${id}-heading` : undefined}
                  className="font-display text-4xl font-black uppercase leading-tight tracking-tighter text-black sm:text-5xl lg:text-6xl"
                >
                  {header.title}
                </h1>
              </div>
            )
          )}
          {header.title && header.badge && (
            <p className="mt-4 font-display text-2xl font-normal tracking-tight text-gray-800 sm:text-3xl">
              {header.title}
            </p>
          )}
          {header.tagline && (
            <p className="mt-2 font-sans text-xl font-bold leading-snug text-gray-700 sm:text-2xl">
              {header.tagline}
            </p>
          )}
        </header>
      )}

      <div className="guide-prose font-sans text-base leading-relaxed text-gray-800 [&_h4]:mt-6 [&_h4]:font-display [&_h4]:text-xl [&_h4]:font-normal [&_h4]:tracking-tight [&_h4]:text-gray-900 [&_h5]:mt-6 [&_h5]:font-display [&_h5]:text-xl [&_h5]:font-light [&_p]:mt-5 [&_p]:mb-5 [&_p]:first:mt-0 [&_p]:last:mb-0 [&_a]:font-medium [&_a]:text-releather-orange [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-black [&_strong]:font-bold [&_strong]:text-black [&_em]:italic">
        {children}
      </div>
    </article>
  );
}
