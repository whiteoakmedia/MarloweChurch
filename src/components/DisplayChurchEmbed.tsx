"use client";

import { useEffect } from "react";
import Script from "next/script";

interface DisplayChurchEmbedProps {
  widgetId: string;
  widgetType: "card_slider" | "card_view" | "calendar" | "list";
}

export default function DisplayChurchEmbed({ widgetId, widgetType }: DisplayChurchEmbedProps) {
  useEffect(() => {
    // Re-initialize display.church widgets after component mount
    if (typeof window !== "undefined" && (window as any).dce) {
      (window as any).dce.init();
    }
  }, [widgetId]);

  return (
    <>
      <Script
        id="dce-embeddable-script"
        src="https://cdn.my.display.church/widgets/loader.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if ((window as any).dce) {
            (window as any).dce.init();
          }
        }}
      />
      <div
        className="dce-calendar"
        id={widgetId}
        data-wt={widgetType}
      />
    </>
  );
}
