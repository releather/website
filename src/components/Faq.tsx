export type FaqItem = {
  /** Question text (e.g. "Q: Why seek professional leather cleaning?") */
  question: string;
  /** Answer content – can include paragraphs, links, images */
  answer: React.ReactNode;
};

export type FaqProps = {
  /** Section heading (e.g. "Frequently Asked Questions") */
  heading?: string;
  /** List of Q&A items */
  items: FaqItem[];
  /** Optional id for the section */
  id?: string;
};

export default function Faq({ heading, items, id }: FaqProps) {
  return (
    <section
      id={id}
      className="mt-12 border-t-4 border-black pt-12"
      aria-labelledby={heading && id ? `${id}-heading` : undefined}
    >
      {heading && (
        <header className="mb-10 text-center">
          <div className="inline-block rounded-none border-4 border-black bg-releather-orange px-6 py-4 text-center sm:px-8 sm:py-5">
            <h2
              id={id ? `${id}-heading` : undefined}
              className="font-display text-4xl font-black uppercase leading-tight tracking-tighter text-black sm:text-5xl lg:text-6xl"
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
          >
            <summary className="flex cursor-pointer list-none items-center gap-2 border-b-4 border-black bg-releather-dark px-5 py-4 font-sans text-xl font-light capitalize text-white transition hover:bg-releather-orange hover:text-black [&::-webkit-details-marker]:hidden">
              <span className="text-2xl" aria-hidden>&#x2753;</span>
              {item.question}
            </summary>
            <div className="faq-answer border-t-0 border-black bg-white px-5 py-4 font-sans text-base leading-relaxed text-gray-800 [&_a]:font-medium [&_a]:text-releather-orange [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-black [&_img]:my-2 [&_img]:rounded [&_p]:mt-3 [&_p]:first:mt-0">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
