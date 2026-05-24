import Link from "next/link";

const sectionHeadingClassName =
  "border-b-[4px] border-releather-orange pb-2 font-display text-xl font-black uppercase tracking-tight text-black sm:text-2xl";

const quickToolCardClassName =
  "block border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000000] sm:p-5";

const quickToolLinkClassName = `group ${quickToolCardClassName} transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none`;

const HOW_IT_WORKS_STEPS = [
  {
    title: "Get Quote",
    description: "Choose leather. Fill out form.",
  },
  {
    title: "Place Order",
    description: "Accept quote and pay invoice.",
  },
  {
    title: "Delivery",
    description: "Average lead time is 2 weeks.",
  },
] as const;

function QuickToolStepCard({
  stepNumber,
  title,
  description,
}: {
  stepNumber: number;
  title: string;
  description: string;
}) {
  return (
    <div className={quickToolCardClassName}>
      <span className="block font-sans text-sm font-semibold leading-snug text-black sm:text-base">
        {description}
      </span>
      <span className="mt-2 flex items-center gap-3 font-display text-lg font-black uppercase leading-none tracking-tight text-releather-orange sm:text-xl">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-black bg-releather-orange text-base font-black text-black"
          aria-hidden
        >
          {stepNumber}
        </span>
        {title}
      </span>
    </div>
  );
}

export default function LeatherForUpholsteryQuickTools() {
  return (
    <div className="not-prose space-y-8 [text-shadow:none]">
      <section id="how-it-works" className="scroll-mt-24" aria-labelledby="how-it-works-heading">
        <h2 id="how-it-works-heading" className={sectionHeadingClassName}>
          How it works
        </h2>

        <ul className="mt-4 list-none space-y-3 p-0">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <li key={step.title}>
              <QuickToolStepCard
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
              />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="quick-tools-heading">
        <h2 id="quick-tools-heading" className={sectionHeadingClassName}>
          Quick Tools
        </h2>

        <ul className="mt-4 list-none space-y-3 p-0">
          <li>
            <Link
              href="/leather-calculator"
              title="Leather Calculator — yardage to square feet and hide estimator"
              className={quickToolLinkClassName}
            >
              <span className="block font-sans text-sm font-semibold leading-snug text-black sm:text-base">
                How much leather do I need?
              </span>
              <span className="mt-2 flex items-center gap-2 font-display text-lg font-black uppercase leading-none tracking-tight text-releather-orange sm:text-xl">
                Leather Calculator
                <span
                  className="text-black transition-colors group-hover:text-releather-orange"
                  aria-hidden
                >
                  →
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
