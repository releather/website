"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LOGO_URL =
  "https://res.cloudinary.com/releather-com/image/upload/f_auto/f_webp/v1654055599/logo/logo.png";
const VAN_URL =
  "https://res.cloudinary.com/releather-com/image/upload/v1654055821/icons/ReLeather-Delivery-Van.png";
const PHONE = "949-529-4727";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

type HeaderTopBarProps = {
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
};

export default function HeaderTopBar({
  mobileMenuOpen,
  onToggleMobileMenu,
}: HeaderTopBarProps) {
  const pathname = usePathname();
  const isEstimatePage = pathname === "/estimate";

  return (
    <header className="sticky top-0 z-[10000] bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile: two rows — Row 1: Logo | Burger, Row 2: GET A QUOTE */}
        <div className="flex flex-col gap-2 py-2 md:hidden">
          <div className="flex min-h-0 items-center justify-between gap-2">
            <Link href="/" className="block shrink-0 max-w-[60%]">
              <Image
                src={LOGO_URL}
                alt="ReLeather"
                width={375}
                height={70}
                className="h-8 w-auto max-w-full object-contain object-left"
                priority
              />
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center border-2 border-white p-2 text-white transition hover:border-releather-orange hover:bg-releather-orange hover:text-black"
              onClick={onToggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {!isEstimatePage && (
            <Link
              href="/estimate"
              className="flex w-full items-center justify-center border-2 border-[#f8991d] bg-[#f8991d] py-2 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#e08a1a] hover:border-[#e08a1a] focus:outline-none focus:ring-2 focus:ring-[#f8991d] focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Get a quote"
            >
              GET A QUOTE
            </Link>
          )}
        </div>

        {/* Desktop: single row — Logo | GET A QUOTE + Phone | Van */}
        <div className="hidden min-h-[4rem] items-center justify-between gap-4 py-4 md:flex md:flex-row md:py-4">
          <div className="flex shrink-0 justify-start">
            <Link href="/" className="block">
              <Image
                src={LOGO_URL}
                alt="ReLeather"
                width={375}
                height={70}
                className="h-[70px] w-[375px] object-contain object-left"
                priority
              />
            </Link>
          </div>
          <nav
            className="flex flex-1 flex-row flex-wrap items-center justify-center gap-6"
            aria-label="Quick contact"
          >
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center border-2 border-[#f8991d] bg-[#f8991d] px-5 py-2.5 font-bold uppercase tracking-widest text-white transition hover:bg-[#e08a1a] hover:border-[#e08a1a] focus:outline-none focus:ring-2 focus:ring-[#f8991d] focus:ring-offset-2 focus:ring-offset-black"
            >
              GET A QUOTE
            </Link>
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 font-bold text-white transition hover:text-releather-orange"
              aria-label={`Call ${PHONE}`}
            >
              <PhoneIcon className="h-5 w-5 shrink-0" />
              <span>{PHONE}</span>
            </a>
          </nav>
          <div className="shrink-0">
            <Image
              src={VAN_URL}
              alt=""
              width={180}
              height={70}
              className="h-[70px] w-[180px] object-contain opacity-90"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </header>
  );
}
