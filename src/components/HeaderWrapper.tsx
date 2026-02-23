"use client";

import { useState } from "react";
import HeaderTopBar from "./HeaderTopBar";
import MainNavbar from "./MainNavbar";

export default function HeaderWrapper() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <HeaderTopBar
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((o) => !o)}
      />
      <MainNavbar
        mobileMenuOpen={mobileMenuOpen}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
