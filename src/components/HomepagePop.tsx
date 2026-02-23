"use client";

import { useEffect } from "react";

type HomepagePopProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function HomepagePop({ isOpen, onClose, title, children }: HomepagePopProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      aria-modal="true"
      aria-labelledby="homepage-pop-title"
      role="dialog"
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
        aria-label="Close popup"
      />
      {/* Brutalist popup panel */}
      <div
        className="relative border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#000] sm:p-8 max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3
            id="homepage-pop-title"
            className="font-display text-2xl font-black uppercase leading-tight tracking-tighter text-black sm:text-3xl"
          >
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 border-2 border-black bg-black px-3 py-1.5 font-sans text-sm font-bold text-white transition hover:bg-white hover:text-black"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="mt-4 font-sans text-base font-medium leading-relaxed text-black">
          {children}
        </div>
      </div>
    </div>
  );
}
