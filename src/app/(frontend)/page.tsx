import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { getSiteSettings, getMinistries, getEvents, getFeaturedEvents, getPageGlobal } from "@/lib/payload";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Fallback data (used when Payload is not connected or returns null)
// ---------------------------------------------------------------------------

const fallbackMinistryCards = [
  {
    title: "Kids",
    description:
      "Join us every Sunday at 9:00 am or 11:00 am in the fellowship hall for a fun, engaging, and faith-filled experience!",
    image: "/images/ben-wicks-iDCtsz-INHI-unsplash.jpg",
    href: "/kids",
  },
  {
    title: "Youth",
    description:
      "Foundation Youth is all about creating a welcoming and encouraging space where students can discover their purpose.",
    image: "/images/Final-Stretch-for-New-Website.jpeg",
    href: "/youth",
  },
  {
    title: "Plan Your Visit",
    description:
      "We know visiting a new church can feel overwhelming, but we're here to make it easy! Come as you are.",
    image: "/images/Image-from-Bulk-Resize-Photos.jpg",
    href: "/im-new",
  },
];

export default async function Home() {
  const [siteSettings, ministries, upcomingEvents, featuredEvents, homeContent] = await Promise.all([
    getSiteSettings(),
    getMinistries(),
    getEvents(),
    getFeaturedEvents(),
    getPageGlobal('home-page') as Promise<Record<string, any> | null>,
  ]);
  const featuredEvent = featuredEvents && featuredEvents.length > 0
    ? { ...featuredEvents[0], registrationLink: featuredEvents[0].registrationUrl }
    : null;

  // Hero fields
  const heroHeading = homeContent?.heroHeading || "Love God, Love People,";
  const heroSubtext = homeContent?.heroSubheading || "New here? We'd love to meet you.";
  const heroCtaText = homeContent?.heroCtaText || "I'm New";
  const heroCtaLink = homeContent?.heroCtaLink || "/im-new";

  // About / welcome section
  const welcomeBadge = homeContent?.welcomeBadge || "Welcome Home";
  const aboutHeading = homeContent?.welcomeHeading || "We are an Assemblies of God Church located in Marlowe, WV.";
  const videoUrl = homeContent?.welcomeVideoUrl || "https://www.youtube.com/embed/qQLEIyhxsMY?rel=0&controls=0&autoplay=0&mute=1";
  const welcomeCtaText = homeContent?.welcomeCtaText || "Meet Our Leadership";
  const welcomeCtaLink = homeContent?.welcomeCtaLink || "/our-leadership";

  // Weekly message section
  const messageHeading = homeContent?.messageHeading || "Weekly Message";
  const messageSubheading = homeContent?.messageSubheading || "Can't make it in person? Watch our latest sermon or tune in live every Sunday.";
  const messageLiveUrl = homeContent?.messageLiveUrl || "https://www.youtube.com/@marloweassemblyofgod523/streams";

  // Church Center app section
  const appHeading = homeContent?.appHeading || "Give, sign up for events, connect with community, and more!";
  const appSubheading = homeContent?.appSubheading || "Download the app today!";
  const appStoreUrl = homeContent?.appStoreUrl || "https://apps.apple.com/us/app/church-center-app/id1357742931?ign-mpt=uo%3D4&ls=1";
  const playStoreUrl = homeContent?.playStoreUrl || "https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter&pli=1";

  // Ministries section
  const ministriesBadge = homeContent?.ministriesBadge || "Get Involved";
  const ministriesHeading = homeContent?.ministriesHeading || "There's a place for everyone";

  // Events section
  const eventsHeading = homeContent?.eventsHeading || "Upcoming Events";
  const eventsSubheading = homeContent?.eventsSubheading || "Stay connected with what's happening at Marlowe.";

  // CTA section
  const ctaHeading = homeContent?.ctaHeading || "Worship at Marlowe";
  const ctaBody = homeContent?.ctaBody || "No matter where you are in your journey, there's a place for you here.";
  const ctaButtonText = homeContent?.ctaButtonText || "I'm New";
  const ctaButtonLink = homeContent?.ctaButtonLink || "/im-new";

  // Ministry cards — prefer ministries collection from Payload, then fallback
  const ministryCards =
    ministries && ministries.length > 0
      ? ministries.slice(0, 3).map((m: any) => ({
          title: m.name,
          description: "",
          image: (typeof m.image === 'object' && m.image?.url) ? m.image.url : "/images/Image-from-Bulk-Resize-Photos.jpg",
          href: m.slug ? `/${m.slug}` : "#",
        }))
      : fallbackMinistryCards;

  // Top 3 upcoming events
  const topEvents = (upcomingEvents || []).slice(0, 3);

  return (
    <>
      <Navbar variant="transparent" featuredEvent={featuredEvent} />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/Church-Web-Graphi.jpg"
          alt="Marlowe Church"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 drop-shadow-lg">
            {heroHeading.includes(",") ? (
              <>
                {heroHeading.split(",").slice(0, -1).join(",")},
                <br />
                <span className="text-church-blue-bright">
                  {heroHeading.split(",").slice(-1)[0].trim()}
                </span>
              </>
            ) : (
              heroHeading
            )}
          </h1>
          <p className="text-base md:text-lg font-light mb-6 text-white/90">
            {heroSubtext}
          </p>
          <Link
            href={heroCtaLink}
            className="inline-block px-8 py-3 bg-church-blue text-white text-base font-semibold rounded-full hover:bg-church-blue-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            {heroCtaText}
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* About / Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={videoUrl}
                frameBorder="0"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="This is who we are."
              />
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
                {welcomeBadge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-church-dark mb-6 leading-tight">
                {aboutHeading}
              </h2>
              <Link
                href={welcomeCtaLink}
                className="inline-flex items-center gap-2 px-6 py-3 bg-church-green text-white font-medium rounded-full hover:bg-church-green-dark transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {welcomeCtaText}
                <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Message Section */}
      <section className="py-20 bg-church-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
            This Week
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-church-dark mb-4">{messageHeading}</h2>
          <p className="text-church-gray mb-10 max-w-2xl mx-auto">
            {messageSubheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={messageLiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-church-green text-white font-semibold rounded-full hover:bg-church-green-dark transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Watch Live
            </a>
            <Link
              href="/sermons"
              className="px-8 py-3.5 border-2 border-church-green text-church-green font-semibold rounded-full hover:bg-church-green hover:text-white transition-all duration-200"
            >
              Previous Messages
            </Link>
          </div>
        </div>
      </section>

      {/* Church Center App Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/Church-Center-App-Promo.png"
                alt="Church Center App"
                width={400}
                height={400}
                className="drop-shadow-2xl"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
                Stay Connected
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-church-dark mb-4 leading-tight">
                {appHeading}
              </h2>
              <p className="text-xl text-church-blue font-semibold mb-8">
                {appSubheading}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/app-store.svg"
                    alt="Download on App Store"
                    width={140}
                    height={42}
                  />
                </a>
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/google-play.svg"
                    alt="Get it on Google Play"
                    width={140}
                    height={42}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Cards Section */}
      <section className="py-20 bg-church-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
              {ministriesBadge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-church-dark">
              {ministriesHeading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ministryCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                    {card.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-church-gray text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-church-green font-semibold text-sm group-hover:gap-3 transition-all">
                    {"Learn More"}
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-church-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{eventsHeading}</h2>
              <p className="text-white/70 mt-2">{eventsSubheading}</p>
            </div>
            <Link
              href="/events"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-colors text-sm font-medium"
            >
              View All Events
              <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          {topEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topEvents.map((event: any) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {(typeof event.image === 'object' && event.image?.url) ? (
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={event.image.url}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-2 bg-church-green" />
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    {event.date && (
                      <p className="text-church-green text-sm font-semibold mb-1">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                        {" · "}
                        {new Date(event.date).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </p>
                    )}
                    <h3 className="text-lg font-bold text-church-dark mb-1">{event.title}</h3>
                    {event.location && (
                      <p className="text-church-gray text-sm">{event.location}</p>
                    )}
                    <div className="flex-1" />
                    {event.registrationUrl && (
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-church-green text-white text-sm font-semibold rounded-xl hover:bg-church-green-dark transition-colors"
                      >
                        Register
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/10 rounded-2xl p-10 text-center backdrop-blur-sm">
              <p className="text-white/70 text-lg">No upcoming events right now. Check back soon!</p>
            </div>
          )}
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-colors text-sm font-medium"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-church-cream text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-church-dark mb-6">
            {ctaHeading}
          </h2>
          <p className="text-church-gray text-lg mb-8">
            {ctaBody}
          </p>
          <Link
            href={ctaButtonLink}
            className="inline-block px-10 py-4 bg-church-green text-white text-lg font-semibold rounded-full hover:bg-church-green-dark transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            {ctaButtonText}
          </Link>
        </div>
      </section>
    </>
  );
}
