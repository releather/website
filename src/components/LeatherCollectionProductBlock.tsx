"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import LiteYouTube from "@/components/LiteYouTube";
import UpholsteryQuickToolsSidebar from "@/components/UpholsteryQuickToolsSidebar";
import { cloudinaryDisplayUrl } from "@/lib/cloudinary";
import type {
  CollectionInsightArticle,
  CollectionInsightBlock,
  CollectionPageContent,
  CollectionProsePart,
} from "@/lib/leather-collections/collectionPageContent";
import type { LeatherCollectionDetail, LeatherSwatch } from "@/lib/leather-collections/types";
import { useCollectionSampleCart } from "@/lib/leather-collections/useCollectionSampleCart";

const proseLinkClass =
  "font-semibold text-black underline decoration-releather-orange decoration-2 underline-offset-2 hover:text-releather-orange";

function renderProseParts(parts: readonly CollectionProsePart[]): ReactNode {
  return parts.map((part, i) => {
    switch (part.type) {
      case "text":
        return <span key={i}>{part.value}</span>;
      case "strong":
        return <strong key={i}>{part.value}</strong>;
      case "em":
        return <em key={i}>{part.value}</em>;
      case "link":
        return (
          <Link
            key={i}
            href={part.link.href}
            title={part.link.title}
            className={proseLinkClass}
          >
            {part.link.label}
          </Link>
        );
    }
  });
}

function renderInsightBlock(block: CollectionInsightBlock, key: number): ReactNode {
  const quoteLeftIcon = block.type === "paragraph" && block.quoteLeft ? (
    <i className="fa-solid fa-quote-left mr-2 text-releather-orange" aria-hidden />
  ) : null;
  const quoteRightIcon =
    (block.type === "paragraph" && block.quoteRight) ||
    (block.type === "caption" && block.quoteRight) ? (
      <i className="fa-solid fa-quote-right ml-2 text-releather-orange" aria-hidden />
    ) : null;

  if (block.type === "caption") {
    return (
      <div key={key} className="brutalist-caption [&_p]:m-0 font-sans text-lg not-italic">
        <p>
          {renderProseParts(block.parts)}
          {quoteRightIcon}
        </p>
      </div>
    );
  }

  return (
    <p key={key}>
      {quoteLeftIcon}
      {renderProseParts(block.parts)}
      {quoteRightIcon}
    </p>
  );
}

function insightImageFloatClass(float: CollectionInsightArticle["imageFloat"]): string {
  return float === "right"
    ? "float-none mx-auto mb-6 block w-full max-w-[280px] text-center sm:float-right sm:mx-0 sm:mb-4 sm:ml-6 sm:w-[320px] sm:shrink-0 sm:text-left"
    : "float-none mx-auto mb-6 block w-full max-w-[280px] text-center sm:float-left sm:mx-0 sm:mb-4 sm:mr-6 sm:w-[320px] sm:shrink-0 sm:text-left";
}

/** Same crop chain as desktop (`…h_80,w_400`), resized for narrow screens — keeps 5:1 strip. */
function showcaseSwatchSrcMobile(fullSrc: string): string {
  return fullSrc.replace(
    "c_crop,h_80,w_400/c_scale,g_south_west,x_20,y_20,l_text:montserrat_35_style_light:",
    "c_crop,h_50,w_200/c_scale,g_south_west,x_15,y_15,l_text:montserrat_25_style_light:",
  );
}

type PopImage = { full: string; alt: string; name: string };

type LeatherCollectionProductBlockProps = {
  collection: LeatherCollectionDetail;
  content: CollectionPageContent;
};

export default function LeatherCollectionProductBlock({
  collection,
  content,
}: LeatherCollectionProductBlockProps) {
  const { specs, swatches, youtubeVideoId, heroPosterUrl } = collection;
  const { ids, hero, swatchLabels, whatIs, showcase, industryInsights } = content;
  const ACCENT = hero.accentColor;

  const [popImage, setPopImage] = useState<PopImage | null>(null);
  const [previewVideoActive, setPreviewVideoActive] = useState(false);
  const previewVideoRef = useRef<HTMLDivElement>(null);
  const [showcaseVariantId, setShowcaseVariantId] = useState(
    showcase.defaultVariantId,
  );

  const showcaseVariant =
    showcase.variants.find((v) => v.id === showcaseVariantId) ??
    showcase.variants[0];

  const sampleCart = useCollectionSampleCart(collection);

  const closeModal = useCallback(() => setPopImage(null), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (popImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [popImage, closeModal]);

  const handlePreviewClick = useCallback(() => {
    setPreviewVideoActive(true);
    previewVideoRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  const openSwatch = (s: LeatherSwatch) =>
    setPopImage({
      full: s.fullUrl ?? s.thumbUrl,
      alt: `${swatchLabels.namePrefix} ${s.name} leather`,
      name: `${swatchLabels.namePrefix} ${s.name}`,
    });

  const openTexture = () =>
    setPopImage({
      full: specs.texture.fullUrl ?? specs.texture.thumbUrl,
      alt: `${specs.texture.label} ${swatchLabels.textureModalAltDescriptor}`,
      name: specs.texture.label,
    });

  return (
    <section
      id={ids.section}
      className="w-full max-lg:pt-0"
      aria-labelledby={ids.heading}
    >
      <div
        className="w-full border-4 p-4 sm:p-8"
        style={{ backgroundColor: "#23262f", borderColor: ACCENT }}
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h1
              id={ids.heading}
              className="font-display text-4xl font-light tracking-tight"
              style={{ color: ACCENT, margin: "0 0 -15px 15px" }}
            >
              {hero.title}
            </h1>

            <div
              id={ids.previewVideo}
              ref={previewVideoRef}
              className="mt-4 scroll-mt-24"
            >
              {youtubeVideoId ? (
                <LiteYouTube
                  videoId={youtubeVideoId}
                  title={hero.videoTitle}
                  posterSrc={cloudinaryDisplayUrl(heroPosterUrl)}
                  posterAlt={hero.posterAlt}
                  aspectClass="aspect-[3/2]"
                  className="w-full max-w-[600px] rounded-none border-[5px] border-[#f8991d] opacity-90 transition hover:opacity-100"
                  embedParams="rel=0"
                  activated={previewVideoActive}
                  onActivatedChange={setPreviewVideoActive}
                />
              ) : (
                <Image
                  src={cloudinaryDisplayUrl(heroPosterUrl)}
                  alt={hero.posterAlt}
                  title={hero.posterAlt}
                  width={600}
                  height={400}
                  unoptimized
                  priority
                  className="aspect-[3/2] w-full max-w-[600px] rounded-none border-[5px] border-[#f8991d] object-cover opacity-90"
                />
              )}
            </div>

            <p className="mt-4 font-sans text-base font-normal leading-snug text-gray-300 sm:text-lg">
              {hero.tagline}
            </p>

            <div className="mt-6 flex flex-nowrap gap-3">
              <Link
                href={hero.getQuoteHref}
                title={hero.getQuoteTitle}
                className={`flex min-w-0 items-center justify-center gap-2 border-2 border-black px-3 py-3 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-white sm:px-5 sm:text-base ${
                  youtubeVideoId ? "flex-1 basis-0" : "w-full"
                }`}
                style={{ backgroundColor: ACCENT }}
              >
                <i
                  className="fa fa-shopping-cart fa-lg hidden shrink-0 sm:inline"
                  aria-hidden
                />
                Get Quote
              </Link>
              {youtubeVideoId ? (
                <button
                  type="button"
                  onClick={handlePreviewClick}
                  aria-label="Preview video"
                  className="flex min-w-0 flex-1 basis-0 items-center justify-center gap-2 border-2 border-black bg-red-600 px-3 py-3 font-sans text-sm font-bold text-white transition hover:bg-black sm:px-5 sm:text-base"
                >
                  <i className="fab fa-youtube fa-lg shrink-0" aria-hidden />
                  <span className="hidden sm:inline">Preview</span>
                </button>
              ) : null}
            </div>
          </div>

          <div
            id="order-samples"
            className="scroll-mt-24 lg:border-l lg:border-gray-500 lg:pl-10"
          >
            <h2 className="font-display text-xl font-normal" style={{ color: ACCENT }}>
              Color Swatches
            </h2>
            <p className="mt-2 font-sans text-sm text-gray-400">
              Click to view · Check to order sample
            </p>
            <div
              className={`mt-4 flex flex-wrap gap-3 ${
                sampleCart.isSubmitting ? "pointer-events-none opacity-60" : ""
              }`}
              role="group"
              aria-label={swatchLabels.groupAriaLabel}
            >
              {swatches.map((swatch) => {
                const selected = sampleCart.isSelected(swatch.id);
                const checkboxId = `hero-swatch-${swatch.id}`;

                return (
                  <div
                    key={swatch.id}
                    className={`relative w-fit shrink-0 ${selected ? "ring-2 ring-releather-orange ring-offset-2 ring-offset-[#23262f]" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => openSwatch(swatch)}
                      title={`${swatchLabels.namePrefix} ${swatch.name}`}
                      className="block opacity-90 transition hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                    >
                      <Image
                        unoptimized
                        src={cloudinaryDisplayUrl(swatch.thumbUrl)}
                        alt={`${swatchLabels.swatchAltPrefix} ${swatch.name} swatch`}
                        width={90}
                        height={90}
                        loading="lazy"
                        className={`h-[90px] w-[90px] border-2 object-cover ${
                          selected ? "border-releather-orange" : ""
                        }`}
                        style={selected ? undefined : { borderColor: ACCENT }}
                      />
                    </button>
                    <label
                      htmlFor={checkboxId}
                      className="absolute left-0.5 top-0.5 flex h-4 w-4 cursor-pointer items-center justify-center border border-black bg-black/70 transition hover:bg-black"
                      title={`Order ${swatch.name} sample`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        id={checkboxId}
                        type="checkbox"
                        className="peer sr-only"
                        checked={selected}
                        disabled={sampleCart.isSubmitting}
                        onChange={() => sampleCart.toggleSwatch(swatch)}
                        aria-label={`Order ${swatch.name} sample`}
                      />
                      <span
                        className={`flex h-full w-full items-center justify-center border border-white/30 peer-checked:border-releather-orange peer-checked:bg-releather-orange peer-checked:text-black ${
                          selected ? "border-releather-orange bg-releather-orange text-black" : "text-transparent"
                        }`}
                        aria-hidden
                      >
                        <i className="fa fa-check text-[8px]" />
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="mt-8">
              <UpholsteryQuickToolsSidebar
                quoteHref={hero.quoteSidebarHref}
                theme="dark"
                quickToolsLinks="calculator-only"
                showHowItWorks={false}
              />
            </div>
          </div>
        </div>

        <div
          id="specs"
          className="mt-10 border-t border-gray-500 pt-8 lg:col-span-2"
        >
          <div className="flex flex-wrap items-baseline gap-2 sm:gap-2.5">
            <h2
              className="font-display text-xl font-normal leading-tight sm:text-2xl"
              style={{ color: ACCENT }}
            >
              Specifications
            </h2>
            <a
              href={specs.specsPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-0.5 text-base leading-none text-white transition hover:text-releather-orange focus:outline-none focus:ring-2 focus:ring-releather-orange sm:p-1 sm:text-lg"
              title="Download specifications PDF"
              aria-label="Download specifications PDF"
            >
              <i className="fas fa-file-pdf" aria-hidden />
            </a>
          </div>
          <div
            className="mt-4 overflow-x-auto rounded-sm border border-white/25 bg-black/15 shadow-inner"
            role="region"
            aria-label="Product specifications"
          >
            <div className="grid min-w-[520px] grid-cols-4 sm:min-w-0">
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Size
              </div>
              <div className="border-b border-r border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                {specs.size}
              </div>
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Thickness
              </div>
              <div className="border-b border-white/20 px-2 py-2.5 font-sans text-xs leading-snug text-white sm:px-3 sm:text-sm md:text-base">
                {specs.thickness}
              </div>

              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Origin
              </div>
              <div className="border-b border-r border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                <span className="inline-flex flex-wrap items-center gap-2">
                  <span>{specs.origin}</span>
                  {content.originFlag ? (
                    <Image
                      unoptimized
                      src={cloudinaryDisplayUrl(content.originFlag.url)}
                      alt={content.originFlag.alt}
                      title={content.originFlag.title}
                      width={35}
                      height={20}
                      loading="lazy"
                      className="inline-block h-5 w-auto shrink-0 border border-white/25 object-cover"
                    />
                  ) : null}
                </span>
              </div>
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Material
              </div>
              <div className="border-b border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                {specs.material}
              </div>

              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Type
              </div>
              <div className="border-b border-r border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                {specs.type}
              </div>
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Finish
              </div>
              <div className="border-b border-white/20 px-2 py-2.5 font-sans text-xs leading-snug text-white sm:px-3 sm:text-sm md:text-base">
                {specs.finish}
              </div>

              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Grain
              </div>
              <div className="border-b border-r border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                {specs.grain}
              </div>
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Category
              </div>
              <div className="border-b border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                {specs.category}
              </div>

              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Uses
              </div>
              <div className="border-b border-r border-white/20 px-2 py-2.5 font-sans text-xs leading-snug text-white sm:px-3 sm:text-sm md:text-base">
                {specs.uses}
              </div>
              <div className="border-b border-r border-white/20 bg-white/[0.06] px-2 py-2.5 font-sans text-xs font-bold text-gray-200 sm:px-3 sm:text-sm md:text-base">
                Texture
              </div>
              <div className="border-b border-white/20 px-2 py-2.5 font-sans text-xs text-white sm:px-3 sm:text-sm md:text-base">
                <span className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={openTexture}
                    title={`${specs.texture.label} — view larger`}
                    className="inline-block shrink-0 border border-white/25 opacity-90 transition hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                  >
                    <Image
                      unoptimized
                      src={cloudinaryDisplayUrl(specs.texture.thumbUrl)}
                      alt={`${specs.texture.label} texture thumbnail`}
                      width={100}
                      height={100}
                      loading="lazy"
                      className="h-[56px] w-[56px] object-cover sm:h-[72px] sm:w-[72px] md:h-[84px] md:w-[84px]"
                    />
                  </button>
                  <span className="font-medium leading-tight">{specs.texture.label}</span>
                </span>
              </div>
            </div>
          </div>
          <p className="mt-3">
            <a
              href={specs.prop65PdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-white transition hover:text-releather-orange focus:outline-none focus:ring-2 focus:ring-releather-orange sm:text-base"
              title="California Proposition 65"
              aria-label="California Proposition 65 PDF"
            >
              <i className="fas fa-exclamation-triangle" aria-hidden />
              Prop 65
            </a>
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-0">
      <section
        className="border-t-4 border-black pt-12"
        aria-labelledby={ids.whatHeading}
      >
        <h2
          id={ids.whatHeading}
          className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
        >
          {whatIs.heading}
        </h2>
        <div className="mt-4">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-5">
            <div className="order-2 space-y-4 font-sans text-lg leading-relaxed text-gray-800 md:order-1">
              <p>{renderProseParts(whatIs.introParagraph)}</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-releather-orange">
                {whatIs.useCases.map((useCase) => (
                  <li key={useCase}>{useCase}</li>
                ))}
              </ul>
            </div>
            <figure className="order-1 mx-auto w-full max-w-[250px] sm:max-w-[270px] md:order-2 md:mx-0 md:max-w-[300px]">
              <div className="brutalist-image-frame border-4 shadow-[4px_4px_0_#f8991d]">
                <Image
                  src={cloudinaryDisplayUrl(whatIs.useCaseImage.src)}
                  alt={whatIs.useCaseImage.alt}
                  width={600}
                  height={600}
                  unoptimized
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-2.5 max-w-[300px] font-sans text-sm leading-relaxed text-gray-700">
                {whatIs.useCaseImage.caption}
              </figcaption>
            </figure>
          </div>
          <div className="mt-6 border-t border-gray-200 pt-5">
            <div className="float-none mx-auto mb-4 flex w-full max-w-[200px] flex-col border-4 border-black sm:float-left sm:mb-4 sm:mr-6 sm:shrink-0">
              <span className="flex h-[200px] shrink-0 overflow-hidden border-b-4 border-black">
                <Image
                  unoptimized
                  src={cloudinaryDisplayUrl(whatIs.pullUpEffect.imageSrc)}
                  alt={whatIs.pullUpEffect.imageAlt}
                  title={whatIs.pullUpEffect.imageTitle}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </span>
              <strong className="flex min-h-[52px] flex-1 items-center justify-center border-t-2 border-black bg-white px-2 py-2 text-center font-sans text-sm font-bold text-black sm:text-base">
                {whatIs.pullUpEffect.label}
              </strong>
            </div>
            <h3
              id={ids.pullUpHeading}
              className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
            >
              {whatIs.pullUpEffect.heading}
            </h3>
            <p className="mt-4 font-sans text-lg leading-relaxed text-gray-800">
              {renderProseParts(whatIs.pullUpEffect.paragraph)}
            </p>
            <div className="clear-both" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section
        id={ids.showcase}
        className="mt-12 border-t-4 border-black pt-12"
        aria-labelledby={ids.showcaseHeading}
      >
        <header className="mb-10 text-center">
          <div className="inline-block rounded-none border-4 border-black bg-releather-orange px-6 py-4 text-center sm:px-8 sm:py-5">
            <h2
              id={ids.showcaseHeading}
              className="font-display text-4xl font-black uppercase leading-tight tracking-tighter text-black sm:text-5xl lg:text-6xl"
            >
              Showcase
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-4xl px-2 font-sans text-lg font-bold leading-relaxed text-gray-800 sm:text-xl">
            {renderProseParts(showcase.introParagraph)}
          </p>
        </header>

        <figure className="border-4 border-black bg-releather-dark p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="min-w-0 flex-1 space-y-2">
              <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                Applications
              </p>
              <div className="aspect-[3/2] max-h-[500px] w-full overflow-hidden border-2 border-black">
                <Image
                  key={showcaseVariant.id}
                  unoptimized
                  src={cloudinaryDisplayUrl(showcaseVariant.lifestyleSrc)}
                  alt={showcaseVariant.lifestyleAlt}
                  width={showcaseVariant.lifestyleWidth}
                  height={showcaseVariant.lifestyleHeight}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="w-full shrink-0 space-y-2 sm:w-auto sm:max-w-[min(100%,400px)]">
              <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                Swatches
              </p>
              <div className="grid grid-cols-2 gap-x-2 gap-y-3 sm:flex sm:flex-col sm:gap-3">
                {showcase.variants.map((v) => {
                  const selected = v.id === showcaseVariant.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      aria-pressed={selected}
                      aria-label={`Show ${v.label} ${showcase.variantAriaLabelSuffix}`}
                      onClick={() => setShowcaseVariantId(v.id)}
                      className={`flex w-full min-w-0 justify-center overflow-hidden bg-black/20 p-0 opacity-90 transition hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange focus:ring-offset-2 focus:ring-offset-releather-dark sm:block sm:w-[400px] sm:justify-start ${
                        selected
                          ? "border-4 border-releather-orange opacity-100"
                          : "border-2 border-black"
                      }`}
                    >
                      <picture className="leading-none">
                        <source
                          media="(max-width: 639px)"
                          srcSet={cloudinaryDisplayUrl(
                            showcaseSwatchSrcMobile(v.swatchSrc),
                          )}
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element -- <picture> mobile srcSet + responsive layout */}
                        <img
                          src={cloudinaryDisplayUrl(v.swatchSrc)}
                          alt={v.swatchAlt}
                          width={v.swatchWidth}
                          height={v.swatchHeight}
                          loading="lazy"
                          decoding="async"
                          className="h-auto w-[200px] max-w-full object-cover sm:w-full"
                        />
                      </picture>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <figcaption className="mt-4 border-t-2 border-gray-500 pt-4">
            <p className="font-sans text-base font-medium text-white">
              {showcaseVariant.description}
            </p>
            <p className="mt-1 font-sans text-sm font-medium italic text-gray-300">
              {showcase.captionCollectionLabel} · {showcaseVariant.label}
            </p>
          </figcaption>
        </figure>
      </section>

      <section
        id={ids.industryInsights}
        className="mt-12 border-t-4 border-black pt-12"
        aria-labelledby={ids.industryInsightsHeading}
      >
        <header className="mb-10 text-center">
          <div className="inline-block rounded-none border-4 border-black bg-releather-orange px-6 py-4 text-center sm:px-8 sm:py-5">
            <h2
              id={ids.industryInsightsHeading}
              className="font-display text-4xl font-black uppercase leading-tight tracking-tighter text-black sm:text-5xl lg:text-6xl"
            >
              Industry Insights
            </h2>
          </div>
        </header>

        <div className="space-y-10">
          {(
            [
              [ids.insightsDesignHeading, industryInsights.designArticle] as const,
              [ids.insightsWorkshopHeading, industryInsights.workshopArticle] as const,
            ]
          ).map(([headingId, article]) => (
            <article key={headingId} aria-labelledby={headingId}>
              <h3
                id={headingId}
                className="border-b-2 border-releather-orange pb-1 font-display text-2xl font-normal tracking-tight text-black sm:text-3xl"
              >
                <i
                  className="fa fa-check-square mr-2 text-releather-orange"
                  aria-hidden
                />
                {article.heading}
              </h3>
              <p className="mt-3 font-sans text-base font-bold uppercase tracking-wider text-releather-orange sm:text-lg">
                {article.subtitle}
              </p>
              <div className="mt-6 space-y-4 font-sans text-lg leading-relaxed text-gray-800">
                <figure className={insightImageFloatClass(article.imageFloat)}>
                  <div className="brutalist-image-frame">
                    <Image
                      src={cloudinaryDisplayUrl(article.image.src)}
                      alt={article.image.alt}
                      title={article.image.title}
                      width={900}
                      height={900}
                      unoptimized
                      loading="lazy"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  {article.image.caption ? (
                    <figcaption className="mt-3 font-sans text-sm leading-relaxed text-gray-700">
                      {article.image.caption}
                    </figcaption>
                  ) : null}
                </figure>
                {article.blocks.map((block, i) => renderInsightBlock(block, i))}
                <div className="clear-both" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </section>
      </div>

      {popImage && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center px-6 py-10"
          style={{
            background: [
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 70%, rgba(255,255,255,0.2) 0%, transparent 45%)",
              "rgba(0,0,0,0.35)",
            ].join(", "),
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Leather preview"
          onClick={closeModal}
        >
          <div
            className="relative w-fit max-w-[95vw] overflow-visible rounded-none border-4 border-black bg-white p-5 shadow-[8px_8px_0_0_#000]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-none border-2 border-black bg-releather-orange text-xl font-bold text-black transition hover:bg-black hover:text-releather-orange"
              aria-label="Close"
            >
              ×
            </button>
            <div className="pt-2">
              <Image
                unoptimized
                src={popImage.full}
                alt={popImage.alt}
                title={popImage.alt}
                width={1200}
                height={900}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            <p className="mt-3 text-center font-display text-lg font-bold uppercase tracking-tight text-black">
              {popImage.name}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
