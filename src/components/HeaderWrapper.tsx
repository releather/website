"use client";

import { useState } from "react";
import HeaderTopBar from "./HeaderTopBar";
import MainNavbar from "./MainNavbar";

export default function HeaderWrapper() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[10000]">
      <HeaderTopBar
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((o) => !o)}
      />
      <MainNavbar
        mobileMenuOpen={mobileMenuOpen}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
      />
    </div>
  );
}
