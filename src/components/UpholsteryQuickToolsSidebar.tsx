import Link from "next/link";
import type { ReactNode } from "react";
import { upholsterySidebarHeadingClassName } from "@/lib/upholsteryBrutalistTypography";

const quickToolCardClassName =
  "block border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000000] sm:p-5";

const quickToolLinkClassName = `group ${quickToolCardClassName} transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none`;

const HOW_IT_WORKS_STEPS = [
  {
    title: "Get Quote",
    description: "Choose leather. Fill out form.",
    hasQuoteLink: true,
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
  quoteHref,
}: {
  stepNumber: number;
  title: string;
  description: string;
  quoteHref?: string;
}) {
  return (
    <div className={quickToolCardClassName}>
      <div className="quick-tool-flat-heading flex items-center gap-3 font-display text-lg font-normal tracking-tight text-releather-orange md:text-xl md:font-black md:uppercase md:leading-none">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-black bg-releather-orange text-base font-black text-black"
          aria-hidden
        >
          {stepNumber}
        </span>
        {quoteHref ? (
          <Link
            href={quoteHref}
            title="Get a leather material quote"
            className="text-releather-orange transition-colors hover:text-black"
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </div>
      <p className="mt-2 mb-0 font-sans text-sm font-semibold leading-snug text-black sm:text-base">
        {description}
      </p>
    </div>
  );
}

function CollapsiblePanel({
  id,
  headingId,
  title,
  theme,
  sectionClassName,
  children,
}: {
  id?: string;
  headingId: string;
  title: string;
  theme: "light" | "dark";
  sectionClassName?: string;
  children: ReactNode;
}) {
  const summaryClassName =
    theme === "dark"
      ? "quick-tool-flat-heading flex cursor-pointer list-none items-center justify-between gap-3 border-b-[4px] border-releather-orange pb-2 font-display text-xl font-normal tracking-tight text-gray-300 md:text-2xl md:font-black md:uppercase [&::-webkit-details-marker]:hidden"
      : `quick-tool-flat-heading flex cursor-pointer list-none items-center justify-between gap-3 ${upholsterySidebarHeadingClassName} [&::-webkit-details-marker]:hidden`;

  return (
    <details id={id} className={`group ${sectionClassName ?? ""}`}>
      <summary className={summaryClassName}>
        <h2 id={headingId} className="quick-tool-flat-heading m-0 p-0 font-inherit text-inherit">
          {title}
        </h2>
        <i
          className="fa fa-chevron-down shrink-0 text-sm text-releather-orange transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}

type UpholsteryQuickToolsSidebarProps = {
  /** Anchor for step 1 “Get Quote” (default: upholstery material quote form). */
  quoteHref?: string;
  /** Light sidebar on white pages; dark text on the distressed collection hero. */
  theme?: "light" | "dark";
  showHowItWorks?: boolean;
  showQuickTools?: boolean;
  /** Dropdown heading for the tools panel (default: Quick Tools). */
  quickToolsTitle?: string;
  /** Which quick tool links to show (default: all three). */
  quickToolsLinks?: "all" | "calculator-only";
};

function LeatherCalculatorQuickToolLink({
  showQuestion = false,
}: {
  showQuestion?: boolean;
}) {
  return (
    <Link
      href="/leather-calculator"
      title="Leather Calculator — yardage to square feet and hide estimator"
      className={quickToolLinkClassName}
    >
      {showQuestion ? (
        <span className="block font-sans text-sm font-semibold leading-snug text-black sm:text-base">
          How much leather do I need?
        </span>
      ) : null}
      <span
        className={`quick-tool-flat-heading flex items-center gap-2 font-display text-lg font-black uppercase leading-none tracking-tight text-releather-orange sm:text-xl ${showQuestion ? "mt-2" : ""}`}
      >
        Leather Calculator
        <span
          className="text-black transition-colors group-hover:text-releather-orange"
          aria-hidden
        >
          →
        </span>
      </span>
    </Link>
  );
}

export default function UpholsteryQuickToolsSidebar({
  quoteHref = "#leather-material-quote",
  theme = "light",
  showHowItWorks = true,
  showQuickTools = true,
  quickToolsTitle = "Quick Tools",
  quickToolsLinks = "all",
}: UpholsteryQuickToolsSidebarProps) {
  return (
    <div className="not-prose space-y-8">
      {showHowItWorks ? (
        <CollapsiblePanel
          id="how-it-works"
          headingId="how-it-works-heading"
          title="How it works"
          theme={theme}
          sectionClassName="scroll-mt-24"
        >
          <ul className="list-none space-y-3 p-0">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <li key={step.title}>
                <QuickToolStepCard
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                  quoteHref={"hasQuoteLink" in step ? quoteHref : undefined}
                />
              </li>
            ))}
          </ul>
        </CollapsiblePanel>
      ) : null}

      {showQuickTools ? (
        <CollapsiblePanel
          headingId="quick-tools-heading"
          title={quickToolsTitle}
          theme={theme}
        >
          <ul className="list-none space-y-3 p-0">
            {quickToolsLinks === "calculator-only" ? (
              <li>
                <LeatherCalculatorQuickToolLink showQuestion />
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="/color-selector"
                    title="Shop by Leather Color — browse upholstery leather by color family"
                    className={quickToolLinkClassName}
                  >
                    <span className="block font-sans text-sm font-semibold leading-snug text-black sm:text-base">
                      What leather colors are available?
                    </span>
                    <span className="quick-tool-flat-heading mt-2 flex items-center gap-2 font-display text-lg font-black uppercase leading-none tracking-tight text-releather-orange sm:text-xl">
                      Shop by Leather Color
                      <span
                        className="text-black transition-colors group-hover:text-releather-orange"
                        aria-hidden
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leather-match"
                    title="Leather Color Matcher — upload a photo and find matching leather colors"
                    className={quickToolLinkClassName}
                  >
                    <span className="block font-sans text-sm font-semibold leading-snug text-black sm:text-base">
                      Which leather matches this color?
                    </span>
                    <span className="quick-tool-flat-heading mt-2 flex items-center gap-2 font-display text-lg font-black uppercase leading-none tracking-tight text-releather-orange sm:text-xl">
                      Leather Color Matcher
                      <span
                        className="text-black transition-colors group-hover:text-releather-orange"
                        aria-hidden
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <LeatherCalculatorQuickToolLink showQuestion />
                </li>
              </>
            )}
          </ul>
        </CollapsiblePanel>
      ) : null}
    </div>
  );
}
