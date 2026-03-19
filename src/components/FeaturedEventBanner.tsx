import Link from "next/link";
import type { Event } from "@/sanity/queries/types";

interface FeaturedEventBannerProps {
  event: Event;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function formatTime(dateStr: string) {
  return new Date(dateStr).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function FeaturedEventBanner({ event }: FeaturedEventBannerProps) {
  const linkUrl = event.registrationLink || (event.slug ? `/events/${event.slug}` : null);
  const isExternal = event.registrationLink ? true : false;

  return (
    <div className="bg-church-green mt-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white min-w-0">
            <span className="font-bold text-sm sm:text-base truncate">{event.title}</span>
            {event.date && (
              <span className="text-white/80 text-sm whitespace-nowrap hidden sm:inline">
                {formatDate(event.date)} at {formatTime(event.date)}
              </span>
            )}
          </div>

          {linkUrl && (
            isExternal ? (
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-white text-church-green text-sm font-semibold rounded-full hover:bg-white/90 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Register
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            ) : (
              <Link
                href={linkUrl}
                className="inline-flex items-center gap-2 px-5 py-2 bg-white text-church-green text-sm font-semibold rounded-full hover:bg-white/90 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Register
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
