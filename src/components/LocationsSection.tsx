export default function LocationsSection() {
  return (
    <section
      id="locations"
      className="border-b-4 border-black bg-releather-dark pt-10 pb-6 sm:pt-12 sm:pb-8 lg:pt-14 lg:pb-10"
      aria-labelledby="locations-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="locations-heading"
          className="font-display text-center text-3xl font-normal leading-tight tracking-tighter text-white sm:text-4xl"
        >
          LOCATIONS & SERVICE AREAS
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-sans font-bold text-gray-300">
          ReLeather serves Orange County and surrounding areas. We offer
          pickup and delivery for furniture and provide on-site estimates. Call
          949-529-4727 for service area details.
        </p>
      </div>
    </section>
  );
}
