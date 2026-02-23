export type IssueItem = {
  /** Column/issue heading (e.g. "Ingrained Dirt") */
  title: string;
  /** Body content – paragraphs, etc. */
  body: React.ReactNode;
  /** Optional media block – images, custom layout */
  media?: React.ReactNode;
  /** Optional id for anchor linking (e.g. "Faded-Leather") */
  id?: string;
};

export type IssuesProps = {
  /** Section heading (e.g. "5 Common Issues Cleaning Leather Sofa") */
  heading?: string;
  /** Optional subheading with arrow */
  subheading?: string;
  /** List of issues (title + body + optional media) */
  issues: IssueItem[];
  /** Optional id for the section */
  id?: string;
  /** Optional number of issue blocks per row (e.g. 4 for a 4-column grid). Omit for single-column stack. */
  columnsPerRow?: number;
  /** When true, render media below the title and center it, then body. When false/omit, media is beside body. */
  mediaBelowTitle?: boolean;
  /** When true, render media above the title, then title, then body. Takes precedence over mediaBelowTitle when both set. */
  mediaAboveTitle?: boolean;
};

export default function Issues({
  heading,
  subheading,
  issues,
  id,
  columnsPerRow,
  mediaBelowTitle,
  mediaAboveTitle,
}: IssuesProps) {
  return (
    <section
      id={id}
      className="mt-12 border-t-4 border-black pt-12"
      aria-labelledby={heading && id ? `${id}-heading` : undefined}
    >
      {(heading || subheading) && (
        <header className="mb-10 text-center">
          {heading && (
            <div className="inline-block rounded-none border-4 border-black bg-releather-orange px-6 py-4 text-center sm:px-8 sm:py-5">
              <h2
                id={id ? `${id}-heading` : undefined}
                className="font-display text-2xl font-black uppercase leading-tight tracking-tighter text-black sm:text-3xl lg:text-4xl"
              >
                {heading}
              </h2>
            </div>
          )}
          {subheading && (
            <p className="mt-4 font-sans text-xl font-bold leading-snug text-gray-800 sm:text-2xl">
              → {subheading}
            </p>
          )}
        </header>
      )}

      <div
        className={
          columnsPerRow === 4
            ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            : columnsPerRow === 3
              ? "grid gap-6 grid-cols-1 sm:grid-cols-3"
              : "space-y-10"
        }
      >
        {issues.map((issue, index) => (
          <div
            key={index}
            id={issue.id}
            className="border-4 border-black bg-white p-5 sm:p-6"
          >
            {issue.media != null && mediaAboveTitle ? (
              <>
                <div className="issues-media flex justify-center [&_img]:rounded-[25px]">
                  {issue.media}
                </div>
                <h4 className="mt-3 font-display text-xl font-normal leading-tight text-gray-900 sm:text-2xl">
                  {issue.title}
                </h4>
                <div className="issues-body mt-3 font-sans text-base leading-relaxed text-gray-800 [&_strong]:font-bold [&_strong]:text-black">
                  {issue.body}
                </div>
              </>
            ) : (
            <>
            <h4 className="font-display text-xl font-normal leading-tight text-gray-900 sm:text-2xl">
              {issue.title}
            </h4>
            {issue.media != null && mediaBelowTitle ? (
              <>
                <div className="issues-media mt-3 flex justify-center [&_img]:rounded-[25px]">
                  {issue.media}
                </div>
                <div className="issues-body mt-3 font-sans text-base leading-relaxed text-gray-800 [&_strong]:font-bold [&_strong]:text-black">
                  {issue.body}
                </div>
              </>
            ) : issue.media != null ? (
              <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
                <div className="issues-body min-w-0 font-sans text-base leading-relaxed text-gray-800 [&_strong]:font-bold [&_strong]:text-black">
                  {issue.body}
                </div>
                <div className="issues-media flex shrink-0 flex-col items-end lg:justify-self-end [&_img]:rounded-[25px]">
                  {issue.media}
                </div>
              </div>
            ) : (
              <div className="issues-body mt-3 font-sans text-base leading-relaxed text-gray-800 [&_strong]:font-bold [&_strong]:text-black">
                {issue.body}
              </div>
            )}
            </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
