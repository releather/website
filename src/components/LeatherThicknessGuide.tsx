import Image from "next/image";
import type { LeatherThicknessRange } from "@/app/leather-for-upholstery/leatherForUpholsteryThicknessInfo";
import {
  upholsteryOrangeSubheadingClassName,
  upholsterySectionHeadingCenteredClassName,
} from "@/lib/upholsteryBrutalistTypography";

type LeatherThicknessGuideProps = {
  headingId?: string;
  subheading?: string;
  intro?: React.ReactNode;
  ranges: LeatherThicknessRange[];
};

function BrutalistIconFrame({
  icon,
  alt,
  label,
}: {
  icon: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <div className="border-2 border-black bg-releather-orange p-0.5 shadow-[3px_3px_0_0_#000000]">
        <div className="flex h-11 w-11 items-center justify-center border-2 border-black bg-white p-1 sm:h-12 sm:w-12">
          <Image
            unoptimized
            src={icon}
            alt={alt}
            title={label}
            width={48}
            height={48}
            loading="lazy"
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          />
        </div>
      </div>
      <span className="font-sans text-[0.65rem] font-bold uppercase leading-tight text-black sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function LeatherThicknessGuide({
  headingId = "leather-thickness",
  subheading,
  intro,
  ranges,
}: LeatherThicknessGuideProps) {
  return (
    <section
      className="not-prose mx-auto my-10 max-w-[1280px] scroll-mt-24 bg-white"
      aria-labelledby={headingId}
    >
      <h3
        id={headingId}
        className={upholsterySectionHeadingCenteredClassName}
      >
        Leather Thickness
      </h3>

      {intro != null && (
        <div className="mt-6 text-balance text-center font-sans text-base font-semibold leading-relaxed text-black sm:text-lg [&_p]:mt-0">
          {intro}
        </div>
      )}

      {subheading ? (
        <p className={`mt-6 text-balance text-center ${upholsteryOrangeSubheadingClassName}`}>
          {subheading}
        </p>
      ) : null}

      <div className="mt-8 grid grid-cols-1 bg-white lg:grid-cols-5">
        {ranges.map((range, index) => (
          <article
            key={range.title}
            className={`flex flex-col p-4 sm:p-5 ${
              index < ranges.length - 1
                ? "border-b-4 border-black lg:border-b-0 lg:border-r-4"
                : ""
            }`}
          >
            <h4 className="border-b-[4px] border-releather-orange pb-2 font-display text-base font-black uppercase leading-tight tracking-tight text-black sm:text-lg">
              {range.title}
            </h4>
            <div className="mt-3 flex-1 font-sans text-xs font-semibold leading-snug text-black sm:text-sm [&_p]:mt-0 [&_strong]:font-bold [&_strong]:text-black">
              {range.text}
            </div>
            <ul className="mt-4 flex list-none flex-wrap justify-center gap-2 p-0 lg:justify-start">
              {range.applications.map((application) => (
                <li key={`${range.title}-${application.label}`}>
                  <BrutalistIconFrame
                    icon={application.icon}
                    alt={application.alt}
                    label={application.label}
                  />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
