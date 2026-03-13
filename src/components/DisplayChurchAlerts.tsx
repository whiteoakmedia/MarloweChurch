"use client";

import Script from "next/script";

export default function DisplayChurchAlerts() {
  return (
    <Script
      id="dc-alerts-script"
      src="https://cdn.my.display.church/widgets/alerts.min.js"
      strategy="afterInteractive"
    />
  );
}
