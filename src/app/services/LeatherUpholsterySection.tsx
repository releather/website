"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const leatherUpholsteryOptions = [
  {
    name: "Palette",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_center,l_text:montserrat_15_style_light:Palette,co_rgb:ffffff,y_0/thumb/PALETTE_tan_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Palette,co_rgb:ffffff,y_10/v1638909291/leather/PALETTE_tan_HI.jpg",
    alt: "Leather Upholstery option Palette",
  },
  {
    name: "Sedona",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_center,l_text:montserrat_15_style_light:Sedona,co_rgb:ffffff,y_0/thumb/SEDONA_Cashew_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Sedona,co_rgb:ffffff,y_10/v1636920011/leather/SEDONA_cashew_HI.jpg",
    alt: "Leather Upholstery option Sedona",
  },
  {
    name: "Luxor",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_center,l_text:montserrat_15_style_light:Luxor,co_rgb:ffffff,y_0/thumb/LUXOR_Saddle_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Luxor,co_rgb:ffffff,y_10/v1639529981/leather/LUXOR_Saddle_HI.jpg",
    alt: "Leather Upholstery option Luxor",
  },
  {
    name: "Concerto",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_center,l_text:montserrat_15_style_light:Concerto,co_rgb:ffffff,y_0/thumb/Concerto_Saddle_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Concerto,co_rgb:ffffff,y_10/v1639529981/leather/Concerto_Saddle_HI.jpg",
    alt: "Leather Upholstery option Concerto",
  },
  {
    name: "Oil Pull Up",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Oil%20Pull%20Up,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_tan_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Oil%20Pull%20Up,co_rgb:ffffff,y_10/v1653007847/leather/Harmony_Brandy_HI.jpg",
    alt: "Leather Upholstery option Oil Pull Up",
  },
  {
    name: "Pure Aniline",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Pure%20Aniline,co_rgb:ffffff,y_10/v1611289193/thumb/Aniline_Mustard_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Pure%20Aniline,co_rgb:ffffff,y_10/v1652587080/leather/Aniline_Mustard_HI.jpg",
    alt: "Leather Upholstery option Pure Aniline",
  },
  {
    name: "Nubuck",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Nubuck,co_rgb:ffffff,y_10/v1611289193/thumb/Apache_Chestnut_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Nubuck,co_rgb:ffffff,y_10/v1652588630/leather/Apache_Chestnut_HI.jpg",
    alt: "Leather Upholstery option Nubuck",
  },
] as const;

type LeatherOption = (typeof leatherUpholsteryOptions)[number];

export default function LeatherUpholsterySection() {
  const [selectedLeather, setSelectedLeather] = useState<LeatherOption | null>(
    null
  );

  const closeModal = useCallback(() => setSelectedLeather(null), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedLeather) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedLeather, closeModal]);

  return (
    <section
      id="leather-upholstery"
      className="mt-16 scroll-mt-8 border-t border-gray-200 pt-12"
    >
      <h2 className="font-display text-3xl font-normal tracking-tight text-black">
        Leather Upholstery
      </h2>
      <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-gray-700">
        <strong className="text-black">Full Leather Reupholstery</strong>{" "}
        replaces <em className="font-semibold text-black">all upholstery with new leather</em> of your choice. We offer various colors, textures, and finishes. Purchasing leather hides and upholstery disassembly are required.
      </p>
      <div className="mt-3 border-t border-gray-200 pt-3 max-w-3xl" />
      <p className="mt-3 max-w-3xl font-sans text-base leading-relaxed text-gray-700">
        <strong className="text-black">Partial Leather Reupholstery</strong>{" "}
        recovers <em className="font-semibold text-black">only damaged upholstery</em> with new matching leather. Existing wear and patina may affect an exact match. Purchasing leather hides and upholstery disassembly are required.
      </p>
      <div className="mt-3 border-t border-gray-200 pt-3 max-w-3xl" />
      <p className="mt-3 max-w-3xl font-sans text-base leading-relaxed text-gray-700">
        <em className="font-semibold text-black">Please note:</em> • May require the original seat cover for each uniquely shaped cushion to ensure accurate sizing and pattern matching. • Foam core not included. • Additional labor cost for fixed seating.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="rounded-none border-4 border-gray-300 border-t-4 border-t-[#f8991d] bg-white p-5">
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-500">
            Information
          </h3>
          <ul className="mt-4 space-y-4 font-sans text-sm text-gray-700">
            <li>
              <strong className="text-black">Completion time:</strong>
              <br /> 2-4 weeks.
            </li>
            <li>
              <strong className="text-black">Drop-off:</strong>
              <br /> By appointment at our{" "}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=751+S+State+College+Blvd+Unit+38,+Fullerton,+CA+92831"
                target="_blank"
                rel="noopener noreferrer"
                className="text-releather-orange hover:underline"
              >
                Fullerton, CA shop.
              </a>
            </li>
            <li>
              <strong className="text-black">Pick Up and Delivery:</strong>
              <br /> Orange County: $100 fee.
              <br /> Los Angeles, San Diego, Riverside: $200.
            </li>
            <li>
              <strong className="text-black">Out-of-Area orders:</strong>
              <br /> If applicable: Shipping instructions provided after order
              confirmation. Return shipping quoted separately.
            </li>
          </ul>
        </div>

        <div className="rounded-none border-4 border-gray-300 border-t-4 border-t-[#f8991d] bg-white p-5">
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-500">
            Learn More
          </h3>
          <div className="mt-4 flex flex-col gap-4">
            <Link
              href="#leather-upholstery"
              className="inline-flex w-fit items-center border-2 border-releather-orange bg-releather-orange px-4 py-2 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange"
            >
              Leather Upholstery
            </Link>
            <div className="border-t border-gray-200 pt-4">
              <a
                href="https://res.cloudinary.com/releather-com/image/upload/legal/warranty/Leather_Reupholstery_Service_Warranty.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-bold text-releather-orange hover:underline"
              >
                Service Warranty
              </a>
            </div>
          </div>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BpivfJnFUxs?rel=0&showinfo=0"
              title="Leather Upholstery"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <h3 className="mt-6 font-sans text-sm font-bold uppercase tracking-wider text-gray-500">
            Recommended for
          </h3>
          <div className="mt-4 flex flex-wrap gap-3 sm:gap-4 lg:gap-4 lg:px-2">
            <Link
              href="#leather-upholstery"
              title="Furniture"
              className="flex flex-col items-center gap-1 text-center text-gray-700 transition hover:text-releather-orange"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/leathera/image/upload/w_100,c_fill,ar_1:1,g_auto,r_max,bo_1px_solid_rgb:f5f5f5,b_rgb:f5f5f5/v1702140740/icons/chairs_svg.svg"
                alt="Furniture"
                width={60}
                height={60}
                loading="lazy"
                className="h-12 w-12 object-contain"
              />
              <strong className="text-sm">Furniture</strong>
            </Link>
            <Link
              href="/replacement-cushions-for-leather-couch"
              title="Cushions"
              className="flex flex-col items-center gap-1 text-center text-gray-700 transition hover:text-releather-orange"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/releather-com/image/upload/w_100,c_fill,ar_1:1,g_auto,r_max,bo_1px_solid_rgb:f5f5f5,b_rgb:f5f5f5/icons/leather-cushion.svg"
                alt="Cushions"
                width={101}
                height={101}
                loading="lazy"
                className="h-12 w-12 object-contain"
              />
              <strong className="text-sm">Cushions</strong>
            </Link>
          </div>
        </div>

        <div className="rounded-none border-4 border-gray-300 border-t-4 border-t-[#f8991d] bg-white p-5">
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-500">
            Leather options
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4 lg:px-2">
            {leatherUpholsteryOptions.map((leather) => (
              <button
                key={leather.name}
                type="button"
                onClick={() => setSelectedLeather(leather)}
                className="block transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                title={leather.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={leather.thumb}
                  alt={leather.alt}
                  width={150}
                  height={100}
                  loading="lazy"
                  className="h-[100px] w-[150px] object-contain bg-gray-100"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedLeather && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center px-6 py-10 backdrop-blur-sm"
          style={{
            background: [
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 70%, rgba(255,255,255,0.2) 0%, transparent 45%)",
              "rgba(0,0,0,0.35)",
            ].join(", "),
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Leather preview"
          onClick={closeModal}
        >
          <div
            className="relative w-fit max-w-[95vw] overflow-visible rounded-2xl border-2 border-[#f8991d] bg-white p-5 pb-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full text-xl font-bold transition"
              style={{ backgroundColor: "#f8991d", color: "#000" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#000";
                e.currentTarget.style.color = "#f8991d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f8991d";
                e.currentTarget.style.color = "#000";
              }}
              aria-label="Close"
            >
              ×
            </button>
            <div className="pt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedLeather.full}
                alt={selectedLeather.alt}
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
              />
            </div>
            <p className="mt-3 text-center font-sans text-base font-bold text-black">
              {selectedLeather.name}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
