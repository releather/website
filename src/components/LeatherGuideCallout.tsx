import Image from "next/image";

export const leatherGuideLinkClassName =
  "font-semibold text-releather-orange underline decoration-2 underline-offset-2 hover:text-black";

export const leatherGuideHeadingClassName =
  "font-display text-3xl font-normal tracking-tight text-black sm:text-4xl";

export const leatherGuideFeaturedHeadingClassName =
  "border-b-[6px] border-releather-orange pb-3 font-display text-5xl font-normal tracking-tight text-black sm:text-6xl";

type LeatherGuideCalloutProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  image?: {
    src: string;
    alt: string;
    title?: string;
  };
};

export default function LeatherGuideCallout({
  title,
  children,
  className = "",
  titleClassName = leatherGuideHeadingClassName,
  image,
}: LeatherGuideCalloutProps) {
  return (
    <div
      className={`not-prose bg-white p-5 sm:p-8 ${className}`}
    >
      <div
        className={
          image
            ? "overflow-hidden md:grid md:grid-cols-[minmax(0,1fr)_280px] md:items-start md:gap-x-6"
            : "overflow-hidden"
        }
      >
        <h3
          className={`${titleClassName}${image ? " md:col-start-1 md:row-start-1" : ""}`}
        >
          {title}
        </h3>
        {image ? (
          <figure className="mx-auto mt-4 mb-4 block w-full max-w-[280px] md:col-start-2 md:row-start-1 md:row-span-2 md:mx-0 md:mb-0 md:mt-0 md:w-[280px]">
            <Image
              unoptimized
              src={image.src}
              alt={image.alt}
              title={image.title ?? image.alt}
              width={550}
              height={550}
              loading="lazy"
              className="h-auto w-full border-[5px] border-releather-orange object-cover"
            />
          </figure>
        ) : null}
        <div
          className={`mt-4 font-sans text-base font-semibold leading-relaxed text-black sm:text-lg [&_p:first-child]:mt-0 [&_p:last-child]:mb-0 [&_strong]:font-bold [&_strong]:text-black${
            image ? " md:col-start-1 md:row-start-2 md:mt-4" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
