const testimonials = [
  {
    icon: "fas fa-couch",
    quote:
      "Two couches restored to perfect condition—pickup and communication were super easy. Don't buy new when ReLeather can restore.",
  },
  {
    icon: "fas fa-gem",
    quote:
      "Less than half the cost of a new couch. My dog-worn furniture looks almost brand new. Get a quote before you replace.",
  },
  {
    icon: "fas fa-star",
    quote:
      "Redyed and restuffed our 14-year-old set. Looks brand new in three weeks. Five out of five stars.",
  },
];

export default function BrandTrustSection() {
  return (
    <section
      className="border-b-4 border-black bg-releather-orange pt-12 pb-6 sm:pt-14 sm:pb-8 lg:pt-16 lg:pb-10"
      aria-labelledby="brand-trust-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="brand-trust-heading"
          className="font-display text-4xl font-normal leading-tight tracking-tighter text-black sm:text-5xl lg:text-6xl text-center"
        >
          LEATHER RESTORATION SPECIALISTS
        </h2>
        <p className="mt-4 font-sans text-lg font-bold text-black/90 text-center">
          Trusted restoration experts serving high-end leather products.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ icon, quote }, i) => (
            <blockquote
              key={i}
              className="flex flex-col items-center rounded-lg border-2 border-black bg-black/10 px-5 py-6 text-center"
            >
              <i
                className={`${icon} mb-3 text-2xl text-black`}
                aria-hidden
              />
              <p className="font-sans text-base font-medium leading-snug text-black/95">
                &ldquo;{quote}&rdquo;
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
