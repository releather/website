import Image from "next/image";
import Link from "next/link";
import RecommendedForWithPop from "@/components/RecommendedForWithPop";

const SERVICES_BG =
  "https://res.cloudinary.com/releather-com/image/upload/f_auto/f_webp/v1654065902/background/background-leather-gradient.png";

const categoryLinks = [
  { label: "Furniture", href: "/leather-sofa-dyeing", titleAttr: "Leather Restoration for Furniture Sofa, Couches, Chairs", imgSrc: "https://res.cloudinary.com/leathera/image/upload/w_100,c_fill,ar_1:1,g_auto,r_max,bo_1px_solid_rgb:f5f5f5,b_rgb:f5f5f5/v1702140740/icons/chairs_svg.svg", alt: "Leather furniture restoration" },
  { label: "Automotive", href: "/auto-leather-dyeing", titleAttr: "Leather Restoration for Car Seats Seat Auto Automotive", imgSrc: "https://res.cloudinary.com/leathera/image/upload/w_100,c_fill,ar_1:1,g_auto,r_max,bo_1px_solid_rgb:f5f5f5,b_rgb:f5f5f5/v1702139656/icons/car-seat_svg.svg", alt: "Automotive leather repair" },
  { label: "Garments", href: "/leather-restoration-jackets-coats", titleAttr: "Leather Restoration for Jacket, Coat", imgSrc: "https://res.cloudinary.com/leathera/image/upload/w_100,c_fill,ar_1:1,g_auto,r_max,bo_1px_solid_rgb:f5f5f5,b_rgb:f5f5f5/v1702145196/icons/garment_svg.svg", alt: "Leather garment restoration" },
  { label: "Handbag", href: "/gallery/leather-redyeing-handbag", titleAttr: "Leather Restoration for Bag, Handbag, Purse", imgSrc: "https://res.cloudinary.com/leathera/image/upload/w_100,c_fill,ar_1:1,g_auto,r_max,bo_1px_solid_rgb:f5f5f5,b_rgb:f5f5f5/v1702145435/icons/handbag_svg.svg", alt: "Leather handbag restoration" },
];

const services = [
  { title: "Leather Restoration", href: "/services/leather-restoration", titleAttr: "Leather Restoration Service" },
  { title: "Leather Cleaning", href: "/services/leather-cleaning", titleAttr: "Professional Leather Cleaning Service" },
  { title: "Leather Dyeing", href: "/services/leather-dyeing", titleAttr: "Leather Dyeing Service" },
  { title: "Leather Upholstery", href: "/services/leather-upholstery", titleAttr: "Leather Reupholstery Service" },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b-4 border-black bg-black pt-10 pb-6 sm:pt-12 sm:pb-8 lg:pt-14 lg:pb-10"
      style={{
        backgroundImage: `url(${SERVICES_BG})`,
        backgroundRepeat: "repeat-x",
      }}
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="font-display text-center text-4xl font-normal leading-none tracking-tighter text-white sm:text-5xl lg:text-7xl"
        >
          OUR SERVICES
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              title={service.titleAttr}
              className="group flex min-h-[5.5rem] items-center justify-center border-4 border-black bg-releather-orange py-5 px-6 transition hover:bg-black sm:min-h-[6rem]"
            >
              <h3 className="font-display text-center text-2xl font-black uppercase leading-none tracking-tighter text-black group-hover:text-white sm:text-3xl lg:text-4xl">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4" aria-label="Leather restoration by category">
          {categoryLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                title={item.titleAttr}
                className="flex flex-col items-center justify-center gap-2 bg-black py-5 px-4 transition hover:bg-releather-orange"
              >
                <Image unoptimized
                  src={item.imgSrc}
                  alt={item.alt}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
                />
                <strong className="font-display text-lg font-black uppercase leading-none tracking-tighter text-white sm:text-xl lg:text-2xl">
                  {item.label}
                </strong>
              </Link>
            </li>
          ))}
        </ul>
        <h2
          id="recommended-heading"
          className="font-display mt-8 text-center text-4xl font-normal leading-none tracking-tighter text-white sm:text-5xl lg:text-7xl"
        >
          RECOMMENDED FOR
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-sans text-lg font-bold text-gray-300">
          We service these high-end top-grain aniline leathers commonly used in
          fine furniture:
        </p>
        <RecommendedForWithPop />
      </div>
    </section>
  );
}
