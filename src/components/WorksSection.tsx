export default function WorksSection() {
  return (
    <section
      id="works"
      className="border-b-4 border-releather-orange bg-white pt-10 pb-6 sm:pt-12 sm:pb-8 lg:pt-14 lg:pb-10"
      aria-labelledby="works-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="works-heading"
          className="font-display text-center text-3xl font-normal leading-tight tracking-tighter text-black sm:text-4xl"
        >
          OUR WORK
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-sans font-bold text-gray-600">
          From furniture and automotive to garments and handbags, we restore
          leather to its best. Contact us for before-and-after examples and
          references.
        </p>
      </div>
    </section>
  );
}
