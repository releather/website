"use client";

import { useState } from "react";
import Link from "next/link";

const servicesDropdown = [
  { label: "Overview", href: "/services" },
  { label: "Leather Cleaning", href: "/services/leather-cleaning" },
  { label: "Leather Restoration", href: "/services/leather-restoration" },
  { label: "Leather Dyeing", href: "/services/leather-dyeing" },
  { label: "Leather Upholstery", href: "/services/leather-upholstery" },
  { label: "Restuffing/Foam", href: "/services/restuffing-foam-replacement" },
];

const productsDropdown = [
  { label: "Leather Conditioner", href: "/leather-conditioner", icon: "fa-droplet" },
  { label: "Leather for Upholstery", href: "/leather-for-upholstery", icon: "fa-couch" },
];

const worksDropdown = [
  { label: "Featured", href: "/gallery", icon: "fa-star" },
  { label: "Couches", href: "/leather-sofa-dyeing", icon: "fa-couch" },
  { label: "Lounge Chairs", href: "/leather-restoration-lounge-chairs", icon: "fa-chair" },
  { label: "Dining Chairs", href: "/leather-restoration-dining-chairs", icon: "fa-chair" },
  { label: "Handbags", href: "/gallery/leather-redyeing-handbag", icon: "fa-bag-shopping" },
  { label: "Briefcase", href: "/leather-restoration-briefcase", icon: "fa-briefcase" },
  { label: "Jackets", href: "/leather-restoration-jackets-coats", icon: "fa-shirt" },
  { label: "Automotive", href: "/auto-leather-dyeing", icon: "fa-car" },
  { label: "Aircraft", href: "/aircraft-leather-cleaning", icon: "fa-plane" },
  { label: "Testimonials", href: "/testimonials", icon: "fa-quote-left" },
];

const locationsDropdown = [
  { label: "Orange County", href: "/leather-restoration-orange-county" },
  { label: "Los Angeles", href: "/leather-furniture-repair-in-los-angeles" },
  { label: "San Diego", href: "/leather-furniture-repair-in-san-diego" },
];

const navItems = [
  { label: "SERVICES", href: "/services", dropdown: servicesDropdown },
  { label: "PRODUCTS", href: "/#products", dropdown: productsDropdown },
  { label: "WORKS", href: "/gallery", dropdown: worksDropdown },
  { label: "BLOG", href: "/blog" },
  { label: "LOCATIONS", dropdown: locationsDropdown },
];

type MainNavbarProps = {
  mobileMenuOpen: boolean;
  onCloseMobileMenu: () => void;
};

export default function MainNavbar({
  mobileMenuOpen,
  onCloseMobileMenu,
}: MainNavbarProps) {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  return (
    <nav
      className="shadow-lg md:relative"
      style={{ backgroundColor: "#23262f" }}
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop: nav links with Services dropdown */}
        <div className="hidden h-10 items-center md:flex">
          <ul className="flex w-full items-center divide-x divide-gray-500">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="group relative flex flex-1 justify-center first:pl-0 last:pr-0"
              >
                {"dropdown" in item && item.dropdown ? (
                  <>
                    {"href" in item && item.href != null ? (
                      <Link
                        href={item.href}
                        className="relative font-bold tracking-wider text-gray-500 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gray-500 after:transition-all after:duration-200 group-hover:after:w-full"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        className="relative font-bold tracking-wider text-gray-500 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gray-500 after:transition-all after:duration-200 group-hover:after:w-full"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {item.label}
                      </span>
                    )}
                    <div
                      className={`pointer-events-none absolute top-full z-[10000] border-t-4 border-releather-orange bg-[#23262f] opacity-0 shadow-none transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 ${item.label === "SERVICES" || item.label === "WORKS" ? "left-0 min-w-[28rem]" : "left-0 right-0"}`}
                    >
                      <ul
                        className={`w-full py-0 ${item.label === "SERVICES" || item.label === "WORKS" ? "grid grid-cols-2" : ""}`}
                      >
                        {item.dropdown.map((sub) => (
                          <li
                            key={sub.href}
                            className={`border-b-2 border-white last:border-b-0 ${item.label === "SERVICES" || item.label === "WORKS" ? "border-r-2 border-white even:border-r-0" : "w-full"}`}
                          >
                            <Link
                              href={sub.href}
                              className="flex items-center gap-2 px-4 py-3 font-bold tracking-wide text-white transition-colors hover:bg-releather-orange hover:text-black md:px-6 lg:px-8"
                            >
                              {"icon" in sub && sub.icon ? <i className={`fa fa-fw ${(sub as { icon: string }).icon}`} aria-hidden /> : null}
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="relative font-bold tracking-wider text-gray-500 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gray-500 after:transition-all after:duration-200 hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} border-t-2 border-releather-orange py-2`}
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {"dropdown" in item && item.dropdown ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileDropdownOpen((prev) => (prev === item.label ? null : item.label))}
                      className="flex w-full items-center justify-between border-l-4 border-transparent px-4 py-3 font-bold text-white hover:border-releather-orange hover:bg-releather-dark"
                      aria-expanded={mobileDropdownOpen === item.label}
                      aria-controls={`mobile-submenu-${item.label}`}
                      id={`mobile-menu-${item.label}`}
                    >
                      {item.label}
                      <span className="text-sm transition-transform duration-200" style={{ transform: mobileDropdownOpen === item.label ? "rotate(180deg)" : "rotate(0deg)" }}>
                        ▼
                      </span>
                    </button>
                    <ul
                      id={`mobile-submenu-${item.label}`}
                      role="region"
                      aria-labelledby={`mobile-menu-${item.label}`}
                      className={`border-l-4 border-releather-orange pl-6 ${mobileDropdownOpen === item.label ? "block" : "hidden"}`}
                    >
                      {item.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={onCloseMobileMenu}
                            className="flex items-center gap-2 px-2 py-2 font-medium text-gray-300 hover:text-releather-orange"
                          >
                            {"icon" in sub && sub.icon ? <i className={`fa fa-fw ${(sub as { icon: string }).icon}`} aria-hidden /> : null}
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={onCloseMobileMenu}
                    className="block border-l-4 border-transparent px-4 py-3 font-bold text-white hover:border-releather-orange hover:bg-releather-dark"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
