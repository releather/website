export type ProcessStep = {
  /** Step title (e.g. "Leather Inspection") */
  title: string;
  /** Step description – string or ReactNode */
  description: React.ReactNode;
};

export type ProcessProps = {
  /** Section heading (e.g. "How Does Leather Cleaning Work?") */
  title: string;
  /** Optional subheading (e.g. "6 Step-by-Step Process") */
  subtitle?: string;
  /** Ordered list of steps */
  steps: ProcessStep[];
  /** Optional id for the section (for anchor links) */
  id?: string;
  /** Optional media (e.g. image) rendered as a grid cell after the steps */
  extraMedia?: React.ReactNode;
};

export default function Process({
  title,
  subtitle,
  steps,
  id,
  extraMedia,
}: ProcessProps) {
  return (
    <section
      id={id}
      className="mt-12 border-t border-black pt-12"
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <h2
        id={id ? `${id}-heading` : undefined}
        className="font-display text-3xl font-normal tracking-tight text-black sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 font-sans text-lg font-bold text-gray-600">
          {subtitle}
        </p>
      )}
      <ol className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={index}
            className="flex flex-col border-4 border-black bg-white p-5"
          >
            <span
              className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black bg-black font-display text-xl font-normal text-white"
              aria-hidden
            >
              {index + 1}
            </span>
            <h3 className="font-display text-xl font-normal tracking-tight text-black">
              {step.title}
            </h3>
            <div className="mt-2 font-sans text-base font-medium leading-relaxed text-gray-700">
              {step.description}
            </div>
          </li>
        ))}
        {extraMedia != null && (
          <li key="extra-media" className="flex items-center justify-center">
            {extraMedia}
          </li>
        )}
      </ol>
    </section>
  );
}
