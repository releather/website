"use client";

import Script from "next/script";

/**
 * Google Tag Manager (GTM) – loads on every page via root layout.
 * Uses afterInteractive so analytics do not block LCP/FCP. Noscript fallback
 * for users without JavaScript. Additive only; no layout or styling changes.
 */
const GTM_ID = "GTM-W5TFSTD";

// Standard GTM container bootstrap: pushes gtm.js event and loads gtm.js script.
const gtmInlineScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

export default function GoogleTagManager() {
  return (
    <>
      {/* GTM script: afterInteractive keeps it off the critical path for Core Web Vitals. */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: gtmInlineScript }}
      />
      {/* Fallback for users with JavaScript disabled; must sit immediately after <body>. */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          title="Google Tag Manager"
          height={0}
          width={0}
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
