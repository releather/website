"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { calculateSampleTotalCents, formatSampleTotalUsd } from "@/lib/leather-collections";
import {
  SAMPLE_CART_STORAGE_KEY,
  sampleCartItemKey,
  type SampleCartCheckoutItem,
  type SampleCartItem,
} from "@/lib/leather-collections/sampleCartTypes";

type CheckoutSamplesResponse = {
  url?: string;
  error?: string;
};

type SampleCartContextValue = {
  items: SampleCartItem[];
  itemCount: number;
  totalCents: number;
  totalDisplay: string;
  isHydrated: boolean;
  isSubmitting: boolean;
  errorMessage: string | null;
  isInCart: (collectionSlug: string, swatchId: string) => boolean;
  toggleItem: (item: SampleCartItem) => void;
  removeItem: (collectionSlug: string, swatchId: string) => void;
  clearCart: () => void;
  checkout: () => Promise<void>;
  clearError: () => void;
};

const SampleCartContext = createContext<SampleCartContextValue | null>(null);

function isValidCartItem(value: unknown): value is SampleCartItem {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.collectionSlug === "string" &&
    typeof item.collectionName === "string" &&
    typeof item.swatchId === "string" &&
    typeof item.swatchName === "string" &&
    typeof item.thumbUrl === "string"
  );
}

function loadCartFromStorage(): SampleCartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(SAMPLE_CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    const seen = new Set<string>();
    const items: SampleCartItem[] = [];
    for (const entry of parsed) {
      if (!isValidCartItem(entry)) continue;
      const key = sampleCartItemKey(entry);
      if (seen.has(key)) continue;
      seen.add(key);
      items.push(entry);
    }
    return items;
  } catch {
    return [];
  }
}

function persistCart(items: SampleCartItem[]) {
  if (typeof window === "undefined") return;
  try {
    if (items.length === 0) {
      window.localStorage.removeItem(SAMPLE_CART_STORAGE_KEY);
    } else {
      window.localStorage.setItem(SAMPLE_CART_STORAGE_KEY, JSON.stringify(items));
    }
  } catch {
    // ignore quota / private mode
  }
}

export function SampleCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<SampleCartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setItems(loadCartFromStorage());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    persistCart(items);
  }, [items, isHydrated]);

  const itemCount = items.length;
  const totalCents = useMemo(
    () => calculateSampleTotalCents(itemCount),
    [itemCount],
  );
  const totalDisplay = formatSampleTotalUsd(totalCents);

  const isInCart = useCallback(
    (collectionSlug: string, swatchId: string) =>
      items.some(
        (item) =>
          item.collectionSlug === collectionSlug && item.swatchId === swatchId,
      ),
    [items],
  );

  const toggleItem = useCallback((item: SampleCartItem) => {
    if (isSubmitting) return;
    setErrorMessage(null);
    setItems((prev) => {
      const key = sampleCartItemKey(item);
      const exists = prev.some((entry) => sampleCartItemKey(entry) === key);
      if (exists) {
        return prev.filter((entry) => sampleCartItemKey(entry) !== key);
      }
      return [...prev, item];
    });
  }, [isSubmitting]);

  const removeItem = useCallback((collectionSlug: string, swatchId: string) => {
    if (isSubmitting) return;
    setErrorMessage(null);
    const key = sampleCartItemKey({ collectionSlug, swatchId });
    setItems((prev) =>
      prev.filter((entry) => sampleCartItemKey(entry) !== key),
    );
  }, [isSubmitting]);

  const clearCart = useCallback(() => {
    if (isSubmitting) return;
    setErrorMessage(null);
    setItems([]);
  }, [isSubmitting]);

  const clearError = useCallback(() => setErrorMessage(null), []);

  const checkout = useCallback(async () => {
    if (itemCount < 1 || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload: SampleCartCheckoutItem[] = items.map(
      ({ collectionSlug, swatchId }) => ({ collectionSlug, swatchId }),
    );

    try {
      const response = await fetch("/api/checkout/samples", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: payload }),
      });

      const data = (await response.json()) as CheckoutSamplesResponse;

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to start checkout");
      }

      if (!data.url) {
        throw new Error("Checkout URL was not returned");
      }

      window.location.href = data.url;
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
      setIsSubmitting(false);
    }
  }, [isSubmitting, itemCount, items]);

  const value = useMemo(
    (): SampleCartContextValue => ({
      items,
      itemCount,
      totalCents,
      totalDisplay,
      isHydrated,
      isSubmitting,
      errorMessage,
      isInCart,
      toggleItem,
      removeItem,
      clearCart,
      checkout,
      clearError,
    }),
    [
      items,
      itemCount,
      totalCents,
      totalDisplay,
      isHydrated,
      isSubmitting,
      errorMessage,
      isInCart,
      toggleItem,
      removeItem,
      clearCart,
      checkout,
      clearError,
    ],
  );

  return (
    <SampleCartContext.Provider value={value}>
      {children}
    </SampleCartContext.Provider>
  );
}

export function useSampleCart(): SampleCartContextValue {
  const context = useContext(SampleCartContext);
  if (!context) {
    throw new Error("useSampleCart must be used within SampleCartProvider");
  }
  return context;
}
