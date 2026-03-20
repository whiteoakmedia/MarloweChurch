import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { getMinistryBySlug, getPageGlobal } from "@/lib/payload";
import { RichText } from "@payloadcms/richtext-lexical/react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kids",
  description: "Kids Church at Marlowe AG - Where faith meets fun! Join us every Sunday for an engaging, faith-filled experience.",
};

export default async function KidsPage() {
  const ministry = await getMinistryBySlug("kids") as Record<string, any> | null;
  const pageContent = await getPageGlobal('kids-page') as Record<string, any> | null;

  const heroTitle = ministry?.name || "Where Faith Meets Fun!";
  const resolvedImage = (typeof ministry?.image === 'object' && ministry?.image?.url) ? ministry.image.url : (ministry?.imageUrl || null);
  const heroImage = resolvedImage || "/images/ben-wicks-iDCtsz-INHI-unsplash.jpg";
  const heroImageAlt = (typeof ministry?.image === 'object' ? ministry?.image?.alt : null) || "Kids at Marlowe";
  const sectionImage = resolvedImage || "/images/Kids-Page-Royal-Rangers-Girls-Ministry.jpg";

  return (
    <>
      <Navbar variant="transparent" />
      <PageHero
        title={heroTitle}
        subtitle={pageContent?.heroSubtitle || "A place where kids laugh, learn about Jesus, and experience His presence in a way that's exciting and unforgettable!"}
        image={heroImage}
      />

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={sectionImage}
                alt={heroImageAlt}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
                {ministry?.schedule || "Every Sunday"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-church-dark mb-6">
                {pageContent?.expectHeading || "What to Expect"}
              </h2>
              {ministry?.description ? (
                <div className="text-church-gray leading-relaxed mb-6">
                  <RichText data={ministry.description} />
                </div>
              ) : (
                <p className="text-church-gray leading-relaxed mb-6">
                  Every Sunday, your kids will experience a safe, engaging, and Christ-centered
                  environment designed just for them! Our services include:
                </p>
              )}
              <div className="space-y-4">
                {((pageContent?.features && pageContent.features.length > 0)
                  ? pageContent.features.map((f: any) => ({ title: f.title, desc: f.description }))
                  : [
                    { title: "Exciting Bible Lessons", desc: "Teaching God's Word in ways kids understand and remember." },
                    { title: "Worship & Praise", desc: "Encouraging kids to express their love for Jesus through music." },
                    { title: "Interactive Games & Activities", desc: "Making learning about faith fun!" },
                    { title: "Small Groups", desc: "Building friendships and helping kids grow spiritually." },
                  ]
                ).map((item: any) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-church-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg aria-hidden="true" className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-church-dark">{item.title}</span>
                      <span className="text-church-gray"> &mdash; {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Rangers & Girls Ministries Cards */}
      <section className="py-20 bg-church-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
              {pageContent?.midweekBadge || "Wednesday Nights"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-church-dark">
              {pageContent?.midweekHeading || "Midweek Programs"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Girls Ministries */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/Girls-Ministries-Image.jpg"
                  alt="Girls Ministries"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-church-dark mb-4">Girls Ministries</h3>
                <p className="text-church-gray leading-relaxed mb-6">
                  {pageContent?.girlsDescription || "Girls Ministries is a church-based discipleship program that has a legacy of godly women coming alongside girls, guiding them on a path to become mature and godly women. Our goal is simple: To see every girl moving toward a deep relationship with Jesus Christ, and to realize her importance and potential in the kingdom of God."}
                </p>
                <a
                  href={pageContent?.girlsSignupUrl || "https://marloweag.churchcenter.com/people/forms/948886"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-church-green text-white font-medium rounded-full hover:bg-church-green-dark transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Royal Rangers */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/Royal-Rangers-Event.webp"
                  alt="Royal Rangers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-church-dark mb-4">Royal Rangers</h3>
                <p className="text-church-gray leading-relaxed mb-6">
                  {pageContent?.rangersDescription || "Royal Rangers is an activity-based, small-group church ministry for boys and young men in grades K-12 with a mission to evangelize, equip and empower the next generation of Christlike men and lifelong servant leaders."}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={pageContent?.rangersSignupUrl || "https://marloweag.churchcenter.com/people/forms/948916"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-church-green text-white font-medium rounded-full hover:bg-church-green-dark transition-colors"
                  >
                    Learn More
                  </a>
                  <a
                    href={pageContent?.rangersFacebookUrl || "https://www.facebook.com/groups/328097517014117"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-church-green text-church-green font-medium rounded-full hover:bg-church-green hover:text-white transition-colors"
                  >
                    Facebook Group
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Wednesday Info */}
          <div className="mt-12 bg-church-green rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Every Wednesday Night</h3>
            <p className="text-white/80 leading-relaxed max-w-3xl mx-auto">
              {pageContent?.wednesdayDescription || "Every Wednesday night from 7:00\u20138:30 PM, our church comes alive with midweek programs designed just for kids and teens. We gather in the church fellowship hall, and there\u2019s something for everyone\u2014starting at age 3 and going all the way through high school. Whether you\u2019re a member of the church or not, your family is welcome to join us!"}
            </p>
            <Link
              href="/royal-rangers-girls-ministries"
              className="inline-block mt-6 px-8 py-3 bg-white text-church-green font-semibold rounded-full hover:bg-church-cream transition-colors"
            >
              Learn More About Our Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
