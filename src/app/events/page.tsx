import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import { safeFetch } from "@/lib/sanity";
import { eventsPageQuery, eventsQuery } from "@/sanity/queries/index";
import type { EventsPage as EventsPageData, Event } from "@/sanity/queries/types";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events at Marlowe Assembly of God. Stay connected with what's happening.",
};

export default async function EventsPage() {
  const eventsPage = await safeFetch<EventsPageData>(eventsPageQuery);
  const events = await safeFetch<Event[]>(eventsQuery);

  const heading = eventsPage?.heroHeading || "Events";

  return (
    <>
      <Script
        id="dce-embeddable-script"
        src="https://cdn.my.display.church/widgets/loader.min.js"
        strategy="afterInteractive"
      />
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
              What&apos;s Happening
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-church-dark mb-4">{heading}</h1>
            <a
              href={eventsPage?.ctaButtonLink || "https://marlowe-assembly-of-god-486395.churchcenter.com/calendar?view=month"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-church-green hover:text-church-green-dark font-medium transition-colors"
            >
              View our full Calendar
              <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Sanity Events Grid */}
          {events && events.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {events.map((event) => (
                <div
                  key={event._id}
                  className="bg-church-cream rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-church-dark mb-2">{event.title}</h3>
                  {event.date && (
                    <p className="text-church-green font-medium text-sm mb-1">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                  {event.timeDisplay && (
                    <p className="text-church-gray text-sm mb-1">{event.timeDisplay}</p>
                  )}
                  {event.location && (
                    <p className="text-church-gray text-sm">{event.location}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Display.Church Widget */}
          <div className="bg-church-cream rounded-2xl p-6 md:p-8 min-h-[500px]">
            <div className="dce-signup" id="ba4b00ac-eda9-4b3f-b758-ba9430296655" data-wt="cards" />
          </div>
        </div>
      </div>
    </>
  );
}
