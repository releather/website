type BlogPostSubsectionProps = {
  title: React.ReactNode;
  tagline?: React.ReactNode;
};

/** Blog post section heading: h3 + optional em tagline (→ Step by Step). Reusable for blog template. */
export default function BlogPostSubsection({ title, tagline }: BlogPostSubsectionProps) {
  return (
    <div className="mb-6 border-b-2 border-releather-orange pb-2">
      <h3 className="font-display text-2xl font-normal tracking-tight text-black sm:text-3xl">
        {title}
      </h3>
      {tagline != null && (
        <p className="mt-1 font-sans text-lg font-medium text-gray-700 [&_em]:text-black">
          {tagline}
        </p>
      )}
    </div>
  );
}
