"use client";

import { useState } from "react";
import HeaderTopBar from "./HeaderTopBar";
import MainNavbar from "./MainNavbar";

export default function HeaderWrapper() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-[10000] bg-black shadow-md md:contents">
        <div className="md:sticky md:top-0 md:z-[10000] md:bg-black md:shadow-md">
          <HeaderTopBar
            mobileMenuOpen={mobileMenuOpen}
            onToggleMobileMenu={() => setMobileMenuOpen((o) => !o)}
          />
        </div>
        <MainNavbar
          mobileMenuOpen={mobileMenuOpen}
          onCloseMobileMenu={() => setMobileMenuOpen(false)}
        />
      </div>
    </>
  );
}
