"use client";

export default function BackToTop() {
  return (
    <p className="mt-3">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="inline-flex items-center gap-1.5 text-gray-400 transition hover:text-releather-orange"
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up text-xs" aria-hidden />
        Back to top
      </a>
    </p>
  );
}
