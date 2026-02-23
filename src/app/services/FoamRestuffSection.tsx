"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const foamRestuffRecommended = [
  {
    name: "Pigmented",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Pigmented,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_tan_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Pigmented,co_rgb:ffffff,y_10/v1638909291/leather/PALETTE_tan_HI.jpg",
    alt: "Foam Replacement recommended for Pigmented Leather",
  },
  {
    name: "Semi-Aniline",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Semi-Aniline,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_Cashew_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Semi-Aniline,co_rgb:ffffff,y_10/v1636920011/leather/SEDONA_cashew_HI.jpg",
    alt: "Foam Replacement recommended for Semi-Aniline Leather",
  },
  {
    name: "Wax Pull Up",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Wax%20Pull%20Up,co_rgb:ffffff,y_10/v1611289193/thumb/Concerto_Saddle_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Wax%20Pull-Up,co_rgb:ffffff,y_10/v1639529981/leather/Concerto_Saddle_HI.jpg",
    alt: "Foam Replacement recommended for Wax Pull Up Leather",
  },
  {
    name: "Oil Pull Up",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Oil%20Pull%20Up,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_tan_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Oil%20Pull%20Up,co_rgb:ffffff,y_10/v1653007847/leather/Harmony_Brandy_HI.jpg",
    alt: "Foam Replacement recommended for Oil Pull Up Leather",
  },
  {
    name: "Pure Aniline",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Pure%20Aniline,co_rgb:ffffff,y_10/v1611289193/thumb/Aniline_Mustard_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Pure%20Aniline,co_rgb:ffffff,y_10/v1652587080/leather/Aniline_Mustard_HI.jpg",
    alt: "Foam Replacement recommended for Pure Aniline Leather",
  },
  {
    name: "Nubuck",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Nubuck,co_rgb:ffffff,y_10/v1611289193/thumb/Apache_Chestnut_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Nubuck,co_rgb:ffffff,y_10/v1652588630/leather/Apache_Chestnut_HI.jpg",
    alt: "Foam Replacement recommended for Nubuck Leather",
  },
] as const;

type LeatherOption = (typeof foamRestuffRecommended)[number];

export default function FoamRestuffSection() {
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
      className="mt-16 scroll-mt-8 border-t border-gray-200 pt-12"
    >
      <h2 id="foamrestuff" className="font-display text-3xl font-normal tracking-tight text-black">
        Foam Replacement & Restuffing
      </h2>

      <div className="mt-4 max-w-3xl space-y-4 font-sans text-base leading-relaxed text-gray-700">
        <p>
          <strong className="text-black">Foam Replacement</strong> refills the
          cushion core with <em className="font-semibold text-black">high-resilience (HR) grade foam</em> and
          adds polyester fiber padding for a fuller, structured look. Available
          in <em className="font-semibold text-black">soft, medium, and firm densities</em> to suit
          comfort preference.
        </p>
        <hr className="border-gray-200" />
        <p>
          <strong className="text-black">Restuffing Upholstery</strong> refills
          seat and back cushions and pillows with added padding such as{" "}
          <em className="font-semibold text-black">dacron or polyester loose fiber.</em> This
          adds a fuller and more structured look to the upholstery.
        </p>
        <hr className="border-gray-200" />
        <p>
          <em className="font-semibold text-black">Please note:</em> • May require the
          original seat cover for each uniquely shaped cushion to ensure
          accurate sizing and pattern matching. • We do not use down feather
          filling.
        </p>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="rounded-none border-4 border-gray-300 border-t-4 border-t-[#f8991d] bg-white p-5">
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-500">
            Information
          </h3>
          <ul className="mt-4 space-y-4 font-sans text-sm text-gray-700">
            <li>
              <strong className="text-black">Completion time:</strong>
              <br /> 1-2 weeks.
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
              href="/services/restuffing-foam-replacement"
              className="inline-flex w-fit items-center border-2 border-releather-orange bg-releather-orange px-4 py-2 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange"
            >
              Foam Replacement & Restuffing
            </Link>
            <div className="border-t border-gray-200 pt-4">
              <a
                href="https://res.cloudinary.com/releather-com/image/upload/legal/warranty/Foam_Replacement_Service_Warranty.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-bold text-releather-orange hover:underline"
              >
                Foam Service Warranty
              </a>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <a
                href="https://res.cloudinary.com/releather-com/image/upload/legal/warranty/Refilling_Upholstery_Service_Warranty.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-bold text-releather-orange hover:underline"
              >
                Refilling Service Warranty
              </a>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <p className="font-sans text-sm font-bold text-gray-700">
              HR Foam Seat Core:
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/releather-com/image/upload/v1767522530/samples/foam-core-with-dacron-polyester-padding-material.jpg"
              alt="Foam core with dacron polyester padding material"
              title="Foam core with dacron polyester padding material"
              width={180}
              height={86}
              loading="lazy"
              className="rounded-lg border border-gray-200 object-cover"
            />
            <p className="font-sans text-sm font-bold text-gray-700">
              Dacron Padding:
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/releather-com/image/upload/samples/refill-cushions-dacron-padding-material.jpg"
              alt="Refill cushions with dacron padding material"
              title="Refill cushions with dacron padding material"
              width={180}
              height={93}
              loading="lazy"
              className="rounded-lg border border-gray-200 object-cover"
            />
          </div>
        </div>

        <div className="rounded-none border-4 border-gray-300 border-t-4 border-t-[#f8991d] bg-white p-5">
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-500">
            Recommended for
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4 lg:px-2">
            {foamRestuffRecommended.map((leather) => (
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
          <div className="mt-6 border-t border-gray-200 pt-6 grid grid-cols-3 gap-3">
            <Link
              href="/services/restuffing-foam-replacement"
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
                width={60}
                height={60}
                loading="lazy"
                className="h-12 w-12 object-contain"
              />
              <strong className="text-sm">Cushions</strong>
            </Link>
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
