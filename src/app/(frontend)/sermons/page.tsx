import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { getSermons } from "@/lib/payload";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sermons",
  description: "Watch past sermons and messages from Marlowe Assembly of God.",
};

export default async function SermonsPage() {
  const sermons = await getSermons();
  const hasSermons = sermons && sermons.length > 0;

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

          {hasSermons ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sermons.map((sermon) => {
                const videoUrl = sermon.videoUrl || null;
                // Extract YouTube ID from videoUrl for thumbnail
                const ytMatch = sermon.videoUrl?.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?/]+)/);
                const youtubeId = ytMatch?.[1] ?? null;
                const thumbnailUrl = (typeof sermon.image === 'object' && sermon.image?.url)
                  ? (typeof sermon.image === 'object' ? sermon.image.url : null)
                  : youtubeId
                    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
                    : null;

                return (
                  <div
                    key={sermon.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-church-cream">
                      {thumbnailUrl ? (
                        <Image
                          src={thumbnailUrl}
                          alt={sermon.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <svg aria-hidden="true" className="w-12 h-12 text-church-green/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                      {videoUrl && (
                        <a
                          href={videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity"
                        >
                          <div className="w-14 h-14 bg-church-green rounded-full flex items-center justify-center shadow-lg">
                            <svg aria-hidden="true" className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </a>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {sermon.series && (
                        <span className="inline-block px-3 py-1 bg-church-green-light text-church-green text-xs font-semibold rounded-full mb-3">
                          {typeof sermon.series === 'object' ? sermon.series?.name : sermon.series}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-church-dark mb-2 line-clamp-2">
                        {sermon.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-church-gray">
                        {sermon.preacher?.name && (
                          <span>{sermon.preacher.name}</span>
                        )}
                        {sermon.preacher?.name && sermon.date && (
                          <span className="text-church-gray/40">|</span>
                        )}
                        {sermon.date && (
                          <span>
                            {new Date(sermon.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        )}
                      </div>
                      {videoUrl && (
                        <a
                          href={videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 text-church-green font-semibold text-sm hover:text-church-green-dark transition-colors"
                        >
                          Watch Message
                          <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Placeholder for when sermons are added via Sanity */
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
          )}
        </div>
      </div>
    </>
  );
}
