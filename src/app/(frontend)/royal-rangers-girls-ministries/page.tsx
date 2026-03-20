import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { getMinistryBySlug } from "@/lib/payload";
import { RichText } from "@payloadcms/richtext-lexical/react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Royal Rangers & Girls Ministries",
  description:
    "Royal Rangers and Girls Ministries at Marlowe Assembly of God — discipleship programs for kids K-12 every Wednesday night from 7:00-8:30 PM.",
};

export default async function RoyalRangersGirlsMinistriesPage() {
  const [rangers, girls] = await Promise.all([
    getMinistryBySlug("royal-rangers"),
    getMinistryBySlug("girls-ministries"),
  ]) as [Record<string, any> | null, Record<string, any> | null];

  const rangersName = rangers?.name || "Royal Rangers";
  const girlsName = girls?.name || "Girls Ministries";
  const rangersImage = (typeof rangers?.image === 'object' && rangers?.image?.url)
    ? rangers.image.url
    : "/images/Royal-Rangers-Event.webp";
  const girlsImage = (typeof girls?.image === 'object' && girls?.image?.url)
    ? girls.image.url
    : "/images/Girls-Ministries-Image.jpg";

  return (
    <>
      <Navbar variant="transparent" />
      <PageHero
        title={`${rangersName} & ${girlsName}`}
        subtitle="Building the next generation of Christlike leaders — every Wednesday night at Marlowe Assembly of God."
        image="/images/Kids-Page-Royal-Rangers-Girls-Ministry.jpg"
      />

      {/* Royal Rangers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={rangersImage}
                alt={(typeof rangers?.image === 'object' ? rangers?.image?.alt : null) || "Royal Rangers Event"}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
                Boys K-12
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-church-dark mb-6">
                {rangersName}
              </h2>
              {rangers?.description ? (
                <div className="text-church-gray leading-relaxed mb-6">
                  <RichText data={rangers.description} />
                </div>
              ) : (
                <p className="text-church-gray leading-relaxed mb-6">
                  Royal Rangers is a mentoring and discipleship program for boys in Kindergarten
                  through 12th grade. Through adventure, character development, and fellowship, we
                  help young men grow in faith and become Christlike leaders.
                </p>
              )}
              <h3 className="text-lg font-bold text-church-dark mb-4">What Boys Experience:</h3>
              <div className="space-y-3 mb-8">
                {[
                  "Outdoor adventures including camping, hiking, and survival skills",
                  "Bible-based character development and leadership training",
                  "Achievement awards and merit badges",
                  "Service projects that make a real impact in the community",
                  "Lifelong friendships with other young men of faith",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg aria-hidden="true" className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-church-gray text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://marloweag.churchcenter.com/people/forms/948916"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-church-green text-white font-medium rounded-full hover:bg-church-green-dark transition-colors shadow-md"
                >
                  Sign Up Today
                </a>
                <a
                  href="https://www.facebook.com/groups/328097517014117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-church-green text-church-green font-medium rounded-full hover:bg-church-green hover:text-white transition-colors"
                >
                  Join our Facebook Group
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Girls Ministries Section */}
      <section className="py-20 bg-church-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 text-sm font-semibold rounded-full mb-4">
                Girls K-12
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-church-dark mb-6">
                {girlsName}
              </h2>
              {girls?.description ? (
                <div className="text-church-gray leading-relaxed mb-6">
                  <RichText data={girls.description} />
                </div>
              ) : (
                <p className="text-church-gray leading-relaxed mb-6">
                  Girls Ministries is a discipleship program that empowers girls in Kindergarten
                  through 12th grade to grow in their faith, build lasting friendships, and discover
                  their God-given purpose. Our goal is simple: to see every girl moving toward a deep
                  relationship with Jesus Christ, and to realize her importance and potential in the
                  kingdom of God.
                </p>
              )}
              <h3 className="text-lg font-bold text-church-dark mb-4">What Girls Experience:</h3>
              <div className="space-y-3 mb-8">
                {[
                  "Age-appropriate Bible studies and devotions",
                  "Creative arts, crafts, and hands-on projects",
                  "Community service and missions awareness",
                  "Achievement awards and badges for spiritual growth",
                  "Fun events, sleepovers, and special outings",
                  "Mentorship from godly women leaders",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg aria-hidden="true" className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-church-gray text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://marloweag.churchcenter.com/people/forms/948886"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-church-green text-white font-medium rounded-full hover:bg-church-green-dark transition-colors shadow-md"
              >
                Sign Up Today
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src={girlsImage}
                alt={(typeof girls?.image === 'object' ? girls?.image?.alt : null) || "Girls Ministries"}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
              Schedule
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-church-dark">
              Join Us Wednesday Nights!
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-8 bg-church-cream rounded-2xl">
              <div className="w-14 h-14 bg-church-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg aria-hidden="true" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-church-dark text-lg mb-1">When</h3>
              <p className="text-church-gray text-sm">Every Wednesday<br />7:00 &ndash; 8:30 PM</p>
            </div>
            <div className="text-center p-8 bg-church-cream rounded-2xl">
              <div className="w-14 h-14 bg-church-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg aria-hidden="true" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-church-dark text-lg mb-1">Where</h3>
              <p className="text-church-gray text-sm">Church Fellowship Hall<br />Marlowe AG</p>
            </div>
            <div className="text-center p-8 bg-church-cream rounded-2xl">
              <div className="w-14 h-14 bg-church-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg aria-hidden="true" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-church-dark text-lg mb-1">Who</h3>
              <p className="text-church-gray text-sm">Ages 3 through<br />High School</p>
            </div>
          </div>

          <div className="bg-church-cream rounded-2xl p-8 md:p-10">
            <p className="text-church-gray leading-relaxed text-center max-w-3xl mx-auto">
              Every Wednesday night from 7:00&ndash;8:30 PM, our church comes alive with midweek
              programs designed just for kids and teens. We gather in the church fellowship hall, and
              there&apos;s something for everyone&mdash;starting at age 3 and going all the way
              through high school. Whether you&apos;re a member of the church or not, your family is
              welcome to join us! Each age group has its own class filled with Bible-based activities
              that help them grow in their faith in fun, engaging ways. Kids have the chance to earn
              achievements through scripture memorization, completing lessons, and participating in
              special projects. At the end of the season, we&apos;ll celebrate their hard work with
              an awards ceremony. Throughout the year, we also have exciting events, campouts, and
              other fun activities planned to keep kids connected and energized.
            </p>
            <p className="text-church-gray text-sm text-center mt-4 italic">
              Please note &mdash; we do take a break for the summer, but during the school year,
              it&apos;s a great midweek opportunity for your kids to grow, learn, and make lasting
              friendships.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-church-green text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get your kids connected!
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join us this Wednesday night for an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://marloweag.churchcenter.com/people/forms/948916"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-church-green font-semibold rounded-full hover:bg-church-cream transition-colors shadow-xl"
            >
              Sign Up for Royal Rangers
            </a>
            <a
              href="https://marloweag.churchcenter.com/people/forms/948886"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 font-semibold rounded-full hover:bg-white/20 transition-colors"
            >
              Sign Up for Girls Ministries
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
