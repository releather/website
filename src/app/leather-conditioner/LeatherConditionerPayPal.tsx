"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        style: { shape: string; color: string; layout: string; label: string };
        createOrder: (data: unknown, actions: { order: { create: (opts: unknown) => Promise<string> } }) => Promise<string>;
        onApprove: (data: unknown, actions: { order: { capture: () => Promise<unknown> } }) => Promise<unknown>;
        onError: (err: unknown) => void;
      }) => { render: (selector: string) => Promise<void> };
    };
  }
}

export default function LeatherConditionerPayPal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AdPeTcMVWmS8EAdWrrJ1YYgglldjM_11oRpOdE6gGzVNibVGsIpXfHWHJXmSB5PSg5vq590Gnn77o-iQ&enable-funding=venmo&currency=USD";
    script.async = true;
    script.onload = () => {
      if (window.paypal && containerRef.current) {
        window.paypal
          .Buttons({
            style: {
              shape: "rect",
              color: "gold",
              layout: "vertical",
              label: "paypal",
            },
            createOrder: (_data, actions) =>
              actions.order.create({
                purchase_units: [
                  {
                    description: "ReLeather Leather Conditioner",
                    amount: {
                      currency_code: "USD",
                      value: "47.73",
                      breakdown: {
                        item_total: { currency_code: "USD", value: "39.98" },
                        shipping: { currency_code: "USD", value: "7.75" },
                        tax_total: { currency_code: "USD", value: "0" },
                      },
                    },
                  },
                ],
              }),
            onApprove: (_data, actions) =>
              actions.order.capture().then((orderData) => {
                if (containerRef.current) {
                  containerRef.current.innerHTML = "<h3>Thank you for your payment!</h3>";
                }
                return orderData;
              }),
            onError: (err) => console.error(err),
          })
          .render("#paypal-button-container");
      }
    };
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return <div id="paypal-button-container" ref={containerRef} />;
}
