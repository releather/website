export default function ProductsSection() {
  return (
    <section
      id="products"
      className="border-b-4 border-black bg-gray-100 py-12 sm:py-16"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="products-heading"
          className="font-display text-center text-3xl font-normal leading-tight tracking-tighter text-black sm:text-4xl"
        >
          LEATHER CARE PRODUCTS
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-sans font-bold text-gray-700">
          We use and recommend professional-grade cleaners, conditioners, and
          protectants for lasting results. Ask about our take-home care
          products.
        </p>
      </div>
    </section>
  );
}
