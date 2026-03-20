"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function LivePreviewListener() {
  const router = useRouter();

  useEffect(() => {
    // Listen for save events from Payload admin (works cross-origin)
    function handleMessage(event: MessageEvent) {
      // Accept messages from any origin (admin could be same or different origin)
      const data = event.data;
      if (!data || typeof data !== "object") return;

      // Payload sends various message types — refresh on any that indicate a save
      if (
        data.type === "payload-live-preview" ||
        data.type === "payload-saved" ||
        (typeof data.type === "string" && data.type.includes("save"))
      ) {
        router.refresh();
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [router]);

  return null;
}
