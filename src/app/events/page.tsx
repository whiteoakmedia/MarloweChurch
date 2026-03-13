import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DisplayChurchEmbed from "@/components/DisplayChurchEmbed";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events at Marlowe Assembly of God. Stay connected with what's happening.",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
              What&apos;s Happening
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-church-dark mb-4">Events</h1>
            <a
              href="https://marlowe-assembly-of-god-486395.churchcenter.com/calendar?view=month"
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

          <div className="bg-church-cream rounded-2xl p-6 md:p-8 min-h-[500px]">
            <DisplayChurchEmbed
              widgetId="b05ec398-c2c3-476e-9178-aad671d87325"
              widgetType="card_view"
            />
          </div>
        </div>
      </div>
    </>
  );
}
