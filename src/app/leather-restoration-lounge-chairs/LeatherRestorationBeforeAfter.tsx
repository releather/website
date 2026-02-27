"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type LeatherRestorationBeforeAfterItem = {
  beforeSrc: string;
  beforeAlt: string;
  beforeTitle: string;
  afterSrc: string;
  afterAlt: string;
  afterTitle: string;
  serviceType: string;
  furniture: string;
  color: React.ReactNode;
  leatherType?: string;
  problem: string;
  location: string;
  description?: React.ReactNode;
};

type PopImage = { src: string; alt: string; label: string };

type Props = {
  items: LeatherRestorationBeforeAfterItem[];
  /** Optional subtitle below "Before & After". When omitted, shows "Leather Chair Restoration Results". */
  subtitle?: string;
};

const DEFAULT_SUBTITLE = "Leather Chair Restoration Results";

export default function LeatherRestorationBeforeAfter({ items, subtitle = DEFAULT_SUBTITLE }: Props) {
  const [popImage, setPopImage] = useState<PopImage | null>(null);

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

  return (
    <>
      <section
        id="beforeafter"
        className="mt-12 border-t-4 border-black pt-12"
        aria-labelledby="beforeafter-heading"
      >
        <header className="mb-10 text-center">
          <div className="inline-block rounded-none border-4 border-black bg-releather-orange px-6 py-4 text-center sm:px-8 sm:py-5">
            <h1
              id="beforeafter-heading"
              className="font-display text-4xl font-black uppercase leading-tight tracking-tighter text-black sm:text-5xl lg:text-6xl"
            >
              Before & After
            </h1>
          </div>
          <p className="mt-4 font-sans text-2xl font-bold leading-snug text-gray-800">
            → {subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {items.map((item, index) => (
            <figure
              key={index}
              className="border-4 bg-releather-dark p-4"
              style={{ borderColor: "#23262f" }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <div className="space-y-2">
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                    Before
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      setPopImage({
                        src: item.beforeSrc,
                        alt: item.beforeAlt,
                        label: `${item.beforeAlt} (Before)`,
                      })
                    }
                    className="block w-full transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                    title={item.beforeTitle}
                  ><Image unoptimized
                      src={item.beforeSrc}
                      alt={item.beforeAlt}
                      width={300}
                      height={225}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-contain"
                      style={{ borderWidth: "2px", borderColor: "#23262f" }}
                    />
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-releather-orange">
                    After
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      setPopImage({
                        src: item.afterSrc,
                        alt: item.afterAlt,
                        label: `${item.afterAlt} (After)`,
                      })
                    }
                    className="block w-full transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                    title={item.afterTitle}
                  ><Image unoptimized
                      src={item.afterSrc}
                      alt={item.afterAlt}
                      width={300}
                      height={225}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-contain"
                      style={{ borderWidth: "2px", borderColor: "#23262f" }}
                    />
                  </button>
                </div>
              </div>
              <figcaption className="mt-4 border-t-2 border-gray-500 pt-4">
                <dl className="mt-0 font-sans text-sm text-white [&_a]:text-releather-orange [&_a]:underline">
                  <div className="border-b border-gray-500 py-1">
                    <dt className="inline font-bold text-releather-orange">Service type:</dt>{" "}
                    <dd className="inline">{item.serviceType}</dd>
                  </div>
                  <div className="border-b border-gray-500 py-1">
                    <dt className="inline font-bold text-releather-orange">Furniture:</dt>{" "}
                    <dd className="inline">{item.furniture}</dd>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-gray-500 py-1">
                    <dt className="shrink-0 font-bold text-releather-orange">Color:</dt>
                    <dd className="min-w-0">{item.color}</dd>
                  </div>
                  {item.leatherType ? (
                    <div className="border-b border-gray-500 py-1">
                      <dt className="inline font-bold text-releather-orange">Type of leather:</dt>{" "}
                      <dd className="inline">{item.leatherType}</dd>
                    </div>
                  ) : null}
                  <div className="border-b border-gray-500 py-1">
                    <dt className="inline font-bold text-releather-orange">Problem:</dt>{" "}
                    <dd className="inline">{item.problem}</dd>
                  </div>
                  <div className="border-b border-gray-500 py-1">
                    <dt className="inline font-bold text-releather-orange">Location:</dt>{" "}
                    <dd className="inline">{item.location || "—"}</dd>
                  </div>
                  {item.description != null && item.description !== "" ? (
                    <div className="pt-2">
                      <dt className="font-bold text-releather-orange">Description:</dt>{" "}
                      <dd className="mt-1">{item.description}</dd>
                    </div>
                  ) : null}
                </dl>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {popImage && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center px-6 py-10 backdrop-blur-sm"
          style={{
            background: [
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 70%, rgba(255,255,255,0.2) 0%, transparent 45%)",
              "rgba(0,0,0,0.35)",
            ].join(", "),
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeModal}
        >
          <div
            className="relative w-fit max-w-[95vw] overflow-visible rounded-2xl border-2 border-[#f8991d] bg-white p-5 pb-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full text-xl font-bold transition"
              style={{ backgroundColor: "#f8991d", color: "#000" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#000";
                e.currentTarget.style.color = "#f8991d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f8991d";
                e.currentTarget.style.color = "#000";
              }}
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex justify-center pt-2"><Image unoptimized
                src={popImage.src}
                alt={popImage.alt}
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
              />
            </div>
            <p className="mt-3 text-center font-sans text-base font-bold text-black">
              {popImage.label}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
