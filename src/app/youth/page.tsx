import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { safeFetch } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/image";
import type { Ministry } from "@/sanity/queries/types";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Youth",
  description: "Foundation Youth at Marlowe AG - A vibrant community where students grow in faith and discover their purpose.",
};

const youthQuery = /* groq */ '*[_type == "ministry" && slug.current == "youth"][0]{ name, description[]{ ..., markDefs[]{ ... } }, schedule, "slug": slug.current, image{ asset->{ _id, url, metadata { dimensions, lqip } }, hotspot, crop, alt } }';

export default async function YouthPage() {
  const ministry = await safeFetch<Ministry>(youthQuery);

  const heroTitle = ministry?.name || "Foundation Youth";
  const heroImage = ministry?.image
    ? urlFor(ministry.image).width(1920).height(1080).url()
    : "/images/Final-Stretch-Website-Image-2.jpeg";
  const sectionImage = ministry?.image
    ? urlFor(ministry.image).width(800).height(600).url()
    : "/images/Final-Stretch-Website-Image-2.jpeg";

  return (
    <>
      <Navbar variant="transparent" />
      <PageHero
        title={heroTitle}
        subtitle="A vibrant community where students grow in faith, build friendships, and discover their God-given purpose."
        image={heroImage}
        ctaText="Learn More"
        ctaHref="https://marloweag.churchcenter.com/people/forms/948961"
      />

      {/* About Foundation Youth */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
                Students
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-church-dark mb-6">
                About {heroTitle}
              </h2>
              {ministry?.description ? (
                <div className="text-church-gray leading-relaxed mb-6">
                  <PortableText value={ministry.description} />
                </div>
              ) : (
                <>
                  <p className="text-church-gray leading-relaxed mb-6">
                    Foundation Youth is a vibrant and welcoming community where students can grow in
                    their faith, build meaningful friendships, and discover their God-given purpose.
                    Through engaging discussions, worship, and fun activities, we create an environment
                    where students feel seen, valued, and encouraged in their spiritual journey.
                  </p>
                  <p className="text-church-gray leading-relaxed">
                    Each gathering is an opportunity to connect with others, explore biblical truths, and
                    strengthen your relationship with Christ in a supportive and energetic setting.
                    Whether you&apos;re new to faith or looking to deepen your walk with God, Foundation
                    Youth is a place for you!
                  </p>
                </>
              )}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={sectionImage}
                alt={ministry?.image?.alt || "Foundation Youth"}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* When We Meet */}
      <section className="py-20 bg-church-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/images/Final-Stretch-Website-Image-1.jpeg"
                alt="Youth gathering"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
                Schedule
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-church-dark mb-8">
                When We Meet
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md">
                  <div className="w-12 h-12 bg-church-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg aria-hidden="true" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-church-dark text-lg">September &ndash; May</h3>
                    <p className="text-church-gray">Sundays at 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md">
                  <div className="w-12 h-12 bg-church-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg aria-hidden="true" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-church-dark text-lg">June &ndash; August</h3>
                    <p className="text-church-gray">Wednesdays at 7:00 PM</p>
                  </div>
                </div>
              </div>
              <p className="text-church-gray mt-6 text-sm">
                Come as you are, bring a friend, and be part of something bigger than yourself!
              </p>
              <a
                href="https://www.facebook.com/groups/482522585595219"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-church-green text-white font-medium rounded-full hover:bg-church-green-dark transition-colors"
              >
                Join our Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-church-green text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Come be part of Foundation Youth
          </h2>
          <a
            href="https://marloweag.churchcenter.com/people/forms/948961"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-church-green text-lg font-semibold rounded-full hover:bg-church-cream transition-all duration-300 shadow-xl"
          >
            Get Connected
          </a>
        </div>
      </section>
    </>
  );
}
