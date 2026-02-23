import Image from "next/image";

const highlights = [
  {
    title: "Certified leather restoration specialists",
    subtitle: "Certified & Accredited",
    description:
      "IICRC certified leather technicians & DCA licensed upholsterers trained to meet industry standards.",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_252,h_165,x_252,y_330/v1672046772/background/releather-leather-restoration.jpg",
    imgAlt: "Certified leather restoration specialists",
  },
  {
    title: "Leather repair with service guarantee",
    subtitle: "Quality & Guarantee",
    description:
      "We offer durable leather repairs and swatch-grade finishes.",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_252,h_165,x_252,y_165/v1672046772/background/releather-leather-restoration.jpg",
    imgAlt: "Leather repair with service guarantee",
  },
  {
    title: "Leather restoration and reupholstery service",
    subtitle: "Complete Restoration",
    description:
      "Restore and extend the life and value of your leather sofa, car seats, jackets, handbags and more.",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_252,h_165,x_252,y_0/v1672046772/background/releather-leather-restoration.jpg",
    imgAlt: "Leather restoration and reupholstery service",
  },
  {
    title: "Leather color matching and redyeing",
    subtitle: "Color Matching",
    description:
      "Redyeing services treat fading, sun damage and match factory color.",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_252,h_165,x_0,y_165/v1672046772/background/releather-leather-restoration.jpg",
    imgAlt: "Leather color matching and redyeing",
  },
  {
    title: "Repair worn leather and scratches",
    subtitle: "Repair Wear & Tear",
    description:
      "Oil stains, cracking, tears, holes, pet scratches and scuffs.",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_252,h_165,x_0,y_330/v1672046772/background/releather-leather-restoration.jpg",
    imgAlt: "Repair worn leather and scratches",
  },
  {
    title: "Leather wear and tear repairs for pets and more",
    subtitle: "Cleaning & Protection",
    description:
      "Deep cleaning, conditioning, retouching and protective sealing.",
    imgSrc: "https://res.cloudinary.com/releather-com/image/upload/c_crop,w_252,h_165,x_0,y_0/v1672046772/background/releather-leather-restoration.jpg",
    imgAlt: "Leather wear and tear repairs for pets and more",
  },
];

export default function HighlightsSection() {
  return (
    <section
      className="border-b-4 border-white bg-black pt-4 pb-6 sm:pt-5 sm:pb-8 lg:pt-6 lg:pb-10"
      aria-labelledby="highlights-intro"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Why choose us</h2>
        <div className="space-y-0">
          {highlights.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-0 border-b-4 border-white last:border-b-0 lg:grid-cols-2"
            >
              <div
                className={`flex min-h-[220px] items-center justify-center border-r-0 border-white p-6 lg:min-h-[320px] lg:border-r-4 lg:p-10 ${
                  index % 2 === 1 ? "lg:order-2 lg:border-r-0 lg:border-l-4" : ""
                }`}
              >
                <Image
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  title={item.imgAlt}
                  width={400}
                  height={262}
                  loading="lazy"
                  className="h-auto w-full max-w-[320px] object-cover sm:max-w-[380px] lg:max-w-[420px]"
                />
              </div>
              <div
                className={`flex flex-col justify-center p-8 lg:order-1 lg:p-12 ${
                  index % 2 === 1 ? "lg:text-right" : ""
                }`}
              >
                <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-releather-orange">
                  {item.subtitle}
                </p>
                <h4 className="mt-2 font-display text-2xl font-black uppercase leading-tight tracking-tighter text-white sm:text-3xl lg:text-4xl">
                  {item.title}
                </h4>
                <p className="mt-4 font-sans text-base font-semibold text-gray-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
