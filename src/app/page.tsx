import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DisplayChurchEmbed from "@/components/DisplayChurchEmbed";

export default function Home() {
  return (
    <>
      <Navbar variant="transparent" />

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
            Love God, Love People,
            <br />
            <span className="text-church-blue-bright">Live with Purpose</span>
          </h1>
          <p className="text-base md:text-lg font-light mb-6 text-white/90">
            New here? We&apos;d love to meet you.
          </p>
          <Link
            href="/im-new"
            className="inline-block px-8 py-3 bg-church-blue text-white text-base font-semibold rounded-full hover:bg-church-blue-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            I&apos;m New
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
                src="https://www.youtube.com/embed/qQLEIyhxsMY?rel=0&controls=0&autoplay=0&mute=1"
                frameBorder="0"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="This is who we are."
              />
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
                Welcome Home
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-church-dark mb-6 leading-tight">
                We are an Assemblies of God Church located in Marlowe, WV.
              </h2>
              <p className="text-church-gray leading-relaxed mb-8">
                At Marlowe Church, we are passionate about encountering God, growing in faith, and
                serving our community with love. Whether you&apos;re exploring faith for the first
                time or looking for a church to call home, you&apos;ll find a welcoming family here.
                Our mission is to share the hope of Jesus, build authentic relationships, and equip
                people to live out their faith in everyday life.
              </p>
              <Link
                href="/our-leadership"
                className="inline-flex items-center gap-2 px-6 py-3 bg-church-green text-white font-medium rounded-full hover:bg-church-green-dark transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Meet Our Leadership
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
          <h2 className="text-3xl md:text-4xl font-bold text-church-dark mb-4">Weekly Message</h2>
          <p className="text-church-gray mb-10 max-w-2xl mx-auto">
            Can&apos;t make it in person? Watch our latest sermon or tune in live every Sunday.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.youtube.com/@marloweassemblyofgod523/streams"
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
                Give, sign up for events, connect with community, and more!
              </h2>
              <p className="text-xl text-church-blue font-semibold mb-8">
                Download the app today!
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/church-center-app/id1357742931?ign-mpt=uo%3D4&ls=1"
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
                  href="https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter&pli=1"
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
              Get Involved
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-church-dark">
              There&apos;s a place for everyone
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((card) => (
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
                    Learn More
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
              <h2 className="text-3xl md:text-4xl font-bold text-white">Upcoming Events</h2>
              <p className="text-white/70 mt-2">Stay connected with what&apos;s happening at Marlowe.</p>
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
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <DisplayChurchEmbed
              widgetId="c1cc2b53-1b3c-4878-806f-e9d0b8c987c5"
              widgetType="card_slider"
            />
          </div>
          <Link
            href="/events"
            className="sm:hidden mt-6 inline-flex items-center gap-2 px-6 py-2.5 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-colors text-sm font-medium"
          >
            View All Events
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-church-cream text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-church-dark mb-6">
            Worship at Marlowe
          </h2>
          <p className="text-church-gray text-lg mb-8">
            No matter where you are in your journey, there&apos;s a place for you here.
          </p>
          <Link
            href="/im-new"
            className="inline-block px-10 py-4 bg-church-green text-white text-lg font-semibold rounded-full hover:bg-church-green-dark transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            I&apos;m New
          </Link>
        </div>
      </section>
    </>
  );
}
