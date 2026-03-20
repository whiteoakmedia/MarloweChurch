import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { getSiteSettings, getPageGlobal } from "@/lib/payload";
import { RichText } from "@payloadcms/richtext-lexical/react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "I'm New",
  description: "New to Marlowe Assembly of God? We'd love to meet you! Plan your visit today.",
};

export default async function ImNewPage() {
  const siteSettings = await getSiteSettings() as Record<string, any> | null;
  const pageContent = await getPageGlobal('im-new-page') as Record<string, any> | null;
  const aboutPage = null;

  const churchName = siteSettings?.churchName || "Marlowe AG";

  return (
    <>
      <Navbar variant="transparent" />
      <PageHero
        title={siteSettings?.tagline || "We are so glad you're here!"}
        subtitle={pageContent?.heroSubtitle || "Whether you're exploring faith or looking for a church to call home, you belong here."}
        image="/images/Image-from-Bulk-Resize-Photos.jpg"
        ctaText={pageContent?.heroCtaText || "I'm New"}
        ctaHref={pageContent?.heroCtaUrl || "https://marloweag.churchcenter.com/people/forms/920327"}
      />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-church-dark mb-6">
                About {churchName}
              </h2>
              {aboutPage?.whoWeAreBody ? (
                <div className="text-church-gray leading-relaxed">
                  <RichText data={aboutPage.whoWeAreBody} />
                </div>
              ) : (
                <p className="text-church-gray leading-relaxed">
                  {pageContent?.aboutFallbackText || "At Marlowe Church, we are passionate about encountering God, growing in faith, and serving our community with love. Whether you\u2019re exploring faith for the first time or looking for a church to call home, you\u2019ll find a welcoming family here. Our mission is to share the hope of Jesus, build authentic relationships, and equip people to live out their faith in everyday life. No matter where you are in your journey, there\u2019s a place for you at Marlowe. Join us and experience a church where faith is real, community is strong, and lives are transformed. We can\u2019t wait to meet you!"}
                </p>
              )}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Marlowe-Website-Pic.jpg"
                alt="Marlowe Church Community"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-church-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-church-dark mb-10">
            {pageContent?.joinHeading || "No matter where you are, join us for Church."}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href={pageContent?.liveStreamUrl || "https://www.youtube.com/@marloweassemblyofgod523/streams"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-church-green-light rounded-2xl flex items-center justify-center mb-4 group-hover:bg-church-green group-hover:text-white transition-colors">
                <svg aria-hidden="true" className="w-8 h-8 text-church-green group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-church-dark mb-2">Join us Online</h3>
              <p className="text-church-gray text-sm">Watch our live stream from anywhere</p>
            </a>
            <a
              href={pageContent?.visitFormUrl || "https://marloweag.churchcenter.com/people/forms/920144"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-church-green-light rounded-2xl flex items-center justify-center mb-4 group-hover:bg-church-green transition-colors">
                <svg aria-hidden="true" className="w-8 h-8 text-church-green group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-church-dark mb-2">Join us In Person</h3>
              <p className="text-church-gray text-sm">Let us know you&apos;re coming</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-church-green text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {pageContent?.ctaHeading || "We can\u2019t wait to meet you!"}
          </h2>
          <a
            href={pageContent?.ctaUrl || "https://marloweag.churchcenter.com/people/forms/920144"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-church-green text-lg font-semibold rounded-full hover:bg-church-cream transition-all duration-300 shadow-xl"
          >
            {pageContent?.ctaButtonText || "Let Us Know When You\u2019re Coming!"}
          </a>
        </div>
      </section>
    </>
  );
}
