import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getEvents } from "@/lib/payload";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming events at Marlowe Assembly of God. Stay connected with what's happening.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function formatTime(dateStr: string) {
  return new Date(dateStr).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function EventsPage() {
  const events = await getEvents();

  const heading = "Events";

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
              What&apos;s Happening
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-church-dark mb-4">
              {heading}
            </h1>
            <p className="text-church-gray max-w-2xl mx-auto">
              {"Join us for fellowship, worship, and community. There is always something happening at Marlowe Assembly of God."}
            </p>
          </div>

          {/* Events Grid */}
          {events && events.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image or accent bar */}
                  {(typeof event.image === 'object' && event.image?.url) ? (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={typeof event.image === 'object' ? event.image.url : ""}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-2 bg-church-green" />
                  )}

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Date badge */}
                    {event.date && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-church-green-light text-church-green text-xs font-semibold rounded-full">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {formatDate(event.date)}
                        </span>
                        <span className="text-xs text-church-gray">
                          {formatTime(event.date)}
                        </span>
                      </div>
                    )}

                    <h3 className="text-lg font-bold text-church-dark mb-2 group-hover:text-church-green transition-colors">
                      {event.title}
                    </h3>

                    {event.location && (
                      <p className="flex items-center gap-1.5 text-sm text-church-gray mb-3">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </p>
                    )}

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Registration link */}
                    {event.registrationUrl && (
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-church-green text-white text-sm font-semibold rounded-xl hover:bg-church-green-dark transition-colors"
                      >
                        Register
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-church-gray text-lg">
                No upcoming events right now. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
