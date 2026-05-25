"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect } from "react";

export type LeatherSwatchPreview = {
  imageSrc: string;
  imageAlt: string;
  name: string;
  collectionHref?: string;
};

type LeatherSwatchPreviewModalProps = {
  preview: LeatherSwatchPreview | null;
  onClose: () => void;
  collectionLinkLabel?: string;
};

export default function LeatherSwatchPreviewModal({
  preview,
  onClose,
  collectionLinkLabel = "Visit this leather collection",
}: LeatherSwatchPreviewModalProps) {
  const closeModal = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    if (preview) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [preview, closeModal]);

  if (!preview) return null;

  return (
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
        onClick={(event) => event.stopPropagation()}
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
            src={preview.imageSrc}
            alt={preview.imageAlt}
            title={preview.imageAlt}
            width={1200}
            height={900}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>
        <p className="mt-3 text-center font-display text-lg font-bold uppercase tracking-tight text-black">
          {preview.name}
        </p>
        {preview.collectionHref ? (
          <p className="mt-4 mb-0 text-center">
            <Link
              href={preview.collectionHref}
              title={collectionLinkLabel}
              className="font-sans text-sm font-bold text-black underline decoration-releather-orange decoration-2 underline-offset-2 transition hover:text-releather-orange sm:text-base"
            >
              {collectionLinkLabel}
            </Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}
