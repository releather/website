"use client";

import { useEffect } from "react";
import { useSampleCart } from "@/components/SampleCartProvider";

/** Clears the cart after a successful Stripe return and strips the query param. */
export default function SampleCartOrderReturnHandler() {
  const { clearCart, isHydrated } = useSampleCart();

  useEffect(() => {
    if (!isHydrated || typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    if (params.get("sample_order") !== "success") return;

    clearCart();

    params.delete("sample_order");
    const query = params.toString();
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", nextUrl);
  }, [clearCart, isHydrated]);

  return null;
}
