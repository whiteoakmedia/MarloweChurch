import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sermons",
  description: "Watch past sermons and messages from Marlowe Assembly of God.",
};

export default function SermonsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
              Messages
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-church-dark mb-4">Sermons</h1>
            <p className="text-church-gray max-w-2xl mx-auto">
              Watch our latest messages or browse through our sermon archive.
            </p>
          </div>

          {/* Placeholder for when sermons are added via Sanity */}
          <div className="text-center py-20 bg-church-cream rounded-2xl">
            <div className="w-20 h-20 bg-church-green-light rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg aria-hidden="true" className="w-10 h-10 text-church-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-church-dark mb-4">Sermons Coming Soon</h3>
            <p className="text-church-gray mb-8 max-w-md mx-auto">
              Add sermons through the Sanity CMS to display them here. In the meantime, catch our live stream!
            </p>
            <a
              href="https://www.youtube.com/@marloweassemblyofgod523/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-church-green text-white font-semibold rounded-full hover:bg-church-green-dark transition-colors shadow-md"
            >
              Watch Live on YouTube
              <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
