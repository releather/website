"use client";

import { useEffect } from "react";

const FILLOUT_SCRIPT_SRC = "https://server.fillout.com/embed/v1/";

export default function FilloutEmbed() {
  useEffect(() => {
    const existing = document.querySelector(
      `script[src="${FILLOUT_SCRIPT_SRC}"]`
    );
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = FILLOUT_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      className="min-h-[500px] w-full"
      data-fillout-id="bsEGp9uDTbus"
      data-fillout-embed-type="standard"
      data-fillout-inherit-parameters
      data-fillout-dynamic-resize
    />
  );
}
