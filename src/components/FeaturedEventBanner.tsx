import Link from "next/link";
import type { Event } from "@/sanity/queries/types";
import { urlFor } from "@/sanity/image";

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
  return (
    <div className="relative bg-church-green overflow-hidden mt-20 z-40">
      {/* Background image if available */}
      {event.image?.asset && (
        <div className="absolute inset-0">
          <img
            src={urlFor(event.image).width(1920).height(400).quality(80).url()}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-white">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wider">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Featured Event
            </span>
            <div>
              <span className="font-bold text-sm sm:text-base">{event.title}</span>
              {event.date && (
                <span className="text-white/80 text-sm ml-2">
                  {formatDate(event.date)} at {formatTime(event.date)}
                </span>
              )}
              {event.location && (
                <span className="text-white/70 text-sm ml-2 hidden md:inline">
                  — {event.location}
                </span>
              )}
            </div>
          </div>

          {event.registrationLink && (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-white text-church-green text-sm font-semibold rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}

          {!event.registrationLink && event.slug && (
            <Link
              href={`/events/${event.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white text-church-green text-sm font-semibold rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
