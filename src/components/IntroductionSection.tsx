import Link from "next/link";

export type IntroductionCta = {
  href: string;
  label: React.ReactNode;
  title: string;
  "aria-label"?: string;
};

export type IntroductionSectionProps = {
  /** Main headline (h1) */
  title: string;
  /** Subheadline below the title, can be string or ReactNode */
  subtitle?: React.ReactNode;
  /** Optional paragraph below the CTAs / right column */
  body?: React.ReactNode;
  /** Primary CTA button */
  primaryCta?: IntroductionCta;
  /** Optional secondary CTA (e.g. Call Us) */
  secondaryCta?: IntroductionCta;
  /** Optional content in the left column (e.g. PayPal buttons) */
  leftContent?: React.ReactNode;
  /** Hero image for the right column */
  image?: {
    src: string;
    alt: string;
    title: string;
    width?: number;
    height?: number;
  };
  /** YouTube video embed (takes precedence over image if both set) */
  videoEmbed?: {
    youtubeId: string;
    title?: string;
  };
  /** Custom right column content (takes precedence over videoEmbed and image when set) */
  rightContent?: React.ReactNode;
};

export default function IntroductionSection({
  title,
  subtitle,
  body,
  primaryCta,
  secondaryCta,
  leftContent,
  image,
  videoEmbed,
  rightContent,
}: IntroductionSectionProps) {
  const hasMedia = rightContent || videoEmbed || image;

  return (
    <section id="introduction" className="mb-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="font-display text-4xl font-normal tracking-tight text-black sm:text-5xl">
            {title}
          </h1>
          {subtitle != null && (
            <div className="mt-4 font-sans text-xl font-medium text-gray-700 sm:text-2xl [&_em]:text-black">
              {subtitle}
            </div>
          )}
          {(primaryCta != null || secondaryCta != null) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  title={primaryCta.title}
                  aria-label={primaryCta["aria-label"] ?? primaryCta.title}
                  className="inline-flex items-center gap-2 border-2 border-releather-orange bg-releather-orange px-5 py-3 font-sans text-base font-bold text-black transition hover:bg-black hover:text-releather-orange"
                >
                  <i className="fa fa-mouse-pointer" aria-hidden />
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  title={secondaryCta.title}
                  aria-label={secondaryCta["aria-label"] ?? secondaryCta.title}
                  className="inline-flex items-center gap-2 border-2 border-releather-orange bg-releather-orange px-5 py-3 font-sans text-base font-bold text-black transition hover:bg-black hover:text-releather-orange"
                >
                  <i className="fa fa-fw fa-phone" aria-hidden />
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
          {leftContent != null && <div className="mt-6">{leftContent}</div>}
        </div>
        {hasMedia && (
          <div
            className={
              rightContent
                ? "w-full"
                : "aspect-[4/3] w-full overflow-hidden rounded-lg lg:min-h-0"
            }
          >
            {rightContent ? (
              rightContent
            ) : videoEmbed ? (
              <iframe
                title={videoEmbed.title ?? "Video"}
                src={`https://www.youtube.com/embed/${videoEmbed.youtubeId}?rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full rounded-lg"
              />
            ) : image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image.src}
                alt={image.alt}
                title={image.title}
                width={image.width ?? 600}
                height={image.height ?? 450}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>
        )}
      </div>
      {body != null && (
        <div className="mt-10 max-w-4xl font-sans text-base leading-relaxed text-gray-700">
          {body}
        </div>
      )}
    </section>
  );
}
