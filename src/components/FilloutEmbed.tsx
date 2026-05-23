"use client";

import { useEffect } from "react";

const FILLOUT_SCRIPT_SRC = "https://server.fillout.com/embed/v1/";

type FilloutEmbedProps = {
  formId: string;
  embedType?: "standard" | "fullscreen" | "popup";
  className?: string;
  dynamicResize?: boolean;
};

export default function FilloutEmbed({
  formId,
  embedType = "standard",
  className = "min-h-[500px] w-full",
  dynamicResize = true,
}: FilloutEmbedProps) {
  useEffect(() => {
    if (document.querySelector(`script[src="${FILLOUT_SCRIPT_SRC}"]`)) {
      return;
    }

    const script = document.createElement("script");
    script.src = FILLOUT_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className={className}
      data-fillout-id={formId}
      data-fillout-embed-type={embedType}
      data-fillout-inherit-parameters
      {...(dynamicResize ? { "data-fillout-dynamic-resize": true } : {})}
    />
  );
}
