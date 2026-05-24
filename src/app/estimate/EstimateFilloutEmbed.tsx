"use client";

import Script from "next/script";
import { ESTIMATE_FORM_ID } from "@/lib/estimateForm";

const FILLOUT_SCRIPT_SRC = "https://server.fillout.com/embed/v1/";

/** Starting height before Fillout loads; dynamic resize expands the container as steps change. */
const EMBED_MIN_HEIGHT_PX = 500;

/**
 * Official Fillout standard embed for the estimate form.
 * Script loads after hydration (non-blocking). Native form remains in the codebase but hidden on the page.
 */
export default function EstimateFilloutEmbed() {
  return (
    <>
      <div className="w-full border-2 border-black bg-white pt-2 sm:pt-4">
        <div
          className="w-full"
          style={{ width: "100%", minHeight: EMBED_MIN_HEIGHT_PX }}
          data-fillout-id={ESTIMATE_FORM_ID}
          data-fillout-embed-type="standard"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        />
      </div>

      <Script
        id="fillout-embed-v1"
        src={FILLOUT_SCRIPT_SRC}
        strategy="afterInteractive"
      />
    </>
  );
}
