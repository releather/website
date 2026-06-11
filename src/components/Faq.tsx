"use client";

import { useState } from "react";

export type FaqItem = {
  /** Question text (e.g. "Q: Why seek professional leather cleaning?") */
  question: string;
  /**
   * Optional Font Awesome icon after the question (decorative).
   * Pass a suffix (e.g. `dollar-sign`) or full classes (e.g. `fa-solid fa-dollar-sign`).
   */
  questionIcon?: string;
  /** Answer content – can include paragraphs, links, images */
  answer: React.ReactNode;
};

function faqQuestionIconClassName(icon: string): string {
  const base =
    "ml-2 shrink-0 text-releather-orange transition-colors group-hover:text-black";
  if (icon.includes("fa-")) {
    return `${icon} ${base}`;
  }
  return `fa-solid fa-${icon} ${base}`;
}

export type FaqProps = {
  /** Section heading (e.g. "Frequently Asked Questions") */
  heading?: string;
  /** List of Q&A items */
  items: FaqItem[];
  /** Optional id for the section */
  id?: string;
  /** When true, the first accordion item is open initially (user can still toggle it closed). */
  defaultOpenFirst?: boolean;
};

export default function Faq({ heading, items, id, defaultOpenFirst }: FaqProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    () => new Set(defaultOpenFirst ? [0] : []),
  );

  return (
    <section
      id={id}
      className="mt-12 border-t-4 border-black pt-12"
      aria-labelledby={heading && id ? `${id}-heading` : undefined}
    >
      {heading && (
        <header className="mb-8 text-center">
          <div className="inline-block rounded-none border-4 border-black bg-releather-orange px-5 py-3 text-center sm:px-6 sm:py-4">
            <h2
              id={id ? `${id}-heading` : undefined}
              className="font-display text-2xl font-black uppercase leading-snug tracking-tight text-black sm:text-3xl sm:leading-normal lg:text-4xl lg:leading-normal"
            >
              {heading}
            </h2>
          </div>
        </header>
      )}

      <div className="space-y-3">
        {items.map((item, index) => (
          <details
            key={index}
            className="group border-4 border-black bg-white"
            open={openIndexes.has(index)}
            onToggle={(e) => {
              const el = e.currentTarget;
              setOpenIndexes((prev) => {
                const next = new Set(prev);
                if (el.open) next.add(index);
                else next.delete(index);
                return next;
              });
            }}
          >
            <summary className="flex cursor-pointer list-none items-center gap-2 border-b-4 border-black bg-releather-dark px-4 py-3 font-sans text-base font-light capitalize text-white transition hover:bg-releather-orange hover:text-black sm:px-5 sm:text-lg [&::-webkit-details-marker]:hidden">
              <span className="text-lg sm:text-xl" aria-hidden>
                &#x2753;
              </span>
              <h3 className="m-0 flex min-w-0 flex-1 items-center gap-0 p-0 font-sans text-base font-light capitalize sm:text-lg">
                <span className="min-w-0 flex-1">{item.question}</span>
                {item.questionIcon ? (
                  <i
                    className={faqQuestionIconClassName(item.questionIcon)}
                    aria-hidden
                  />
                ) : null}
              </h3>
            </summary>
            <div className="faq-answer border-t-0 border-black bg-white px-4 py-3 font-sans text-sm leading-relaxed text-gray-800 sm:px-5 sm:py-4 sm:text-base [&_a]:font-medium [&_a]:text-releather-orange [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-black [&_img]:my-2 [&_img]:rounded [&_p]:mt-2 [&_p]:first:mt-0 sm:[&_p]:mt-3">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
