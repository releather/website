"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ColorOptions from "@/components/ColorOptions";

const leatherDyeingRecommended = [
  {
    name: "Pigmented",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Pigmented,co_rgb:ffffff,y_10/v1611289193/thumb/PALETTE_tan_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Pigmented,co_rgb:ffffff,y_10/v1638909291/leather/PALETTE_tan_HI.jpg",
    alt: "Leather Dyeing recommended for Pigmented Leather",
  },
  {
    name: "Semi-Aniline",
    thumb:
      "https://res.cloudinary.com/leathera/image/upload/g_south,l_text:montserrat_15_style_light:Semi-Aniline,co_rgb:ffffff,y_10/v1611289193/thumb/SEDONA_Cashew_thumb.jpg",
    full: "https://res.cloudinary.com/releather-com/image/upload/c_crop,h_820/g_center,l_text:montserrat_90_style_light:Semi-Aniline,co_rgb:ffffff,y_10/v1636920011/leather/SEDONA_cashew_HI.jpg",
    alt: "Leather Dyeing recommended for Semi-Aniline Leather",
  },
] as const;

type LeatherOption = (typeof leatherDyeingRecommended)[number];

export default function LeatherDyeingSection() {
  const [selectedLeather, setSelectedLeather] =
    useState<LeatherOption | null>(null);

  const closeLeatherModal = useCallback(() => setSelectedLeather(null), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLeatherModal();
    };
    if (selectedLeather) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedLeather, closeLeatherModal]);

  return (
    <section
      id="leather-dyeing"
      className="mt-16 scroll-mt-8 border-t border-gray-200 pt-12"
    >
      <h2 className="font-display text-3xl font-normal tracking-tight text-black">
        Leather Dyeing
      </h2>
      <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-gray-700">
        This service treats the old finish and{" "}
        <em className="font-semibold text-black">changes the color</em> of the
        leather to your selected color. The process applies penetrating dye to
        achieve a uniform color. It enhances both appearance and longevity. We
        complete the process with a protective topcoat to prevent color
        transfer.
      </p>
      <p className="mt-3 max-w-3xl font-sans text-base leading-relaxed text-gray-700">
        <em className="font-semibold text-black">Please note:</em> The new
        surface coating applied during dyeing may reduce the suppleness of the
        leather. Accent stitching will be dyed to match the new color. While we
        carefully mask the fabric strip and lining during restoration, some dye
        transfer may occur. We take precautions to minimize this.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-3 md:items-stretch">
        <div className="flex min-h-[420px] flex-col rounded-none border-4 border-gray-300 border-t-4 border-t-[#f8991d] bg-white p-5">
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

        <div className="flex min-h-[420px] flex-col rounded-none border-4 border-gray-300 border-t-4 border-t-[#f8991d] bg-white p-5">
          <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-500">
            Learn More
          </h3>
          <div className="mt-4 flex flex-col gap-4">
            <Link
              href="/services/leather-dyeing"
              className="inline-flex w-fit items-center border-2 border-releather-orange bg-releather-orange px-4 py-2 font-sans text-sm font-bold text-black transition hover:bg-black hover:text-releather-orange"
            >
              Leather Dyeing
            </Link>
            <div className="border-t border-gray-200 pt-4">
              <a
                href="https://res.cloudinary.com/releather-com/image/upload/legal/warranty/Leather_Dyeing_Service_Warranty.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-bold text-releather-orange hover:underline"
              >
                Service Warranty
              </a>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gray-500">
              Recommended for
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4 lg:px-2">
              {leatherDyeingRecommended.map((leather) => (
                <button
                  key={leather.name}
                  type="button"
                  onClick={() => setSelectedLeather(leather)}
                  className="block transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange"
                  title={leather.name}
                ><Image
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
                href="/leather-sofa-dyeing"
                title="Furniture"
                className="flex flex-col items-center gap-1 text-center text-gray-700 transition hover:text-releather-orange"
              ><Image
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
                href="/gallery/leather-redyeing-handbag"
                title="Bag"
                className="flex flex-col items-center gap-1 text-center text-gray-700 transition hover:text-releather-orange"
              ><Image
                  src="https://res.cloudinary.com/leathera/image/upload/w_100,c_fill,ar_1:1,g_auto,r_max,bo_1px_solid_rgb:f5f5f5,b_rgb:f5f5f5/icons/handbag_svg.svg"
                  alt="Bag"
                  width={60}
                  height={60}
                  loading="lazy"
                  className="h-12 w-12 object-contain"
                />
                <strong className="text-sm">Bag</strong>
              </Link>
              <Link
                href="/leather-restoration-jackets-coats"
                title="Coat"
                className="flex flex-col items-center gap-1 text-center text-gray-700 transition hover:text-releather-orange"
              ><Image
                  src="https://res.cloudinary.com/leathera/image/upload/w_100,c_fill,ar_1:1,g_auto,r_max,bo_1px_solid_rgb:f5f5f5,b_rgb:f5f5f5/v1702145196/icons/garment_svg.svg"
                  alt="Coat"
                  width={60}
                  height={60}
                  loading="lazy"
                  className="h-12 w-12 object-contain"
                />
                <strong className="text-sm">Coat</strong>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex min-h-[600px] max-h-[600px] flex-col overflow-hidden rounded-none border-4 border-gray-300 border-t-4 border-t-[#f8991d] bg-white p-5">
          <div className="min-h-0 flex-1 overflow-y-auto scrollbar-releather">
            <ColorOptions />
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
          onClick={closeLeatherModal}
        >
          <div
            className="relative w-fit max-w-[95vw] overflow-visible rounded-2xl border-2 border-[#f8991d] bg-white p-5 pb-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLeatherModal}
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
            <div className="pt-2"><Image
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
