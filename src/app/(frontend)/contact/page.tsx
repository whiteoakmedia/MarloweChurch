import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactForm from "./ContactForm";
import { getSiteSettings, getPageGlobal } from "@/lib/payload";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Marlowe Assembly of God. We'd love to hear from you.",
};

export default async function ContactPageRoute() {
  const settings = await getSiteSettings() as Record<string, any> | null;
  const pageContent = await getPageGlobal('contact-page') as Record<string, any> | null;

  // Fallback values from the layout structured data / footer
  const phone = settings?.phone || "(304) 274-2474";
  const email = settings?.email || "marloweag@gmail.com";
  const address = settings?.address;
  const addressString = address
    ? [address.street, address.city, address.state, address.zip]
        .filter(Boolean)
        .join(", ")
    : "9045 Williamsport Pike, Falling Waters, WV 25419";
  const worshipSchedule = "Sundays at 9am & 11am\nWednesdays at 7pm";

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
              {pageContent?.badge || "Get In Touch"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-church-dark mb-4">
              {pageContent?.heroHeading || "Contact Us"}
            </h1>
            <p className="text-church-gray max-w-2xl mx-auto">{pageContent?.heroSubheading || "We'd love to hear from you. Reach out with any questions, prayer requests, or just to say hello."}</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form — takes more space */}
            <div className="lg:col-span-3 bg-church-cream rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-church-dark mb-6">
                {pageContent?.formHeading || "Send Us a Message"}
              </h2>
              <ContactForm />
            </div>

            {/* Church Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Address */}
              <div className="bg-church-cream rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-church-green-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-church-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-church-dark mb-1">
                      Our Location
                    </h3>
                    <p className="text-church-gray text-sm leading-relaxed">
                      {addressString}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(addressString)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-church-green text-sm font-medium mt-2 hover:text-church-green-dark transition-colors"
                    >
                      Get Directions
                      <svg
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-church-cream rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-church-green-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-church-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-church-dark mb-1">Phone</h3>
                    <a
                      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                      className="text-church-gray text-sm hover:text-church-green transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-church-cream rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-church-green-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-church-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-church-dark mb-1">Email</h3>
                    <a
                      href={`mailto:${email}`}
                      className="text-church-gray text-sm hover:text-church-green transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Times */}
              <div className="bg-church-cream rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-church-green-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-church-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-church-dark mb-1">
                      Service Times
                    </h3>
                    {settings?.serviceTimes && settings.serviceTimes.length > 0 ? (
                      <div className="space-y-1">
                        {settings.serviceTimes.map((st, i) => (
                          <p key={i} className="text-church-gray text-sm">
                            <span className="font-medium text-church-dark">
                              {st.dayOfWeek}
                            </span>{" "}
                            at {st.time}
                            {st.label ? ` — ${st.label}` : ""}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-1 text-church-gray text-sm">
                        {worshipSchedule.split("\n").map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Marlowe Assembly of God Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.5!2d-77.85!3d39.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9e0c0c0c0c0c1%3A0x0!2s9045+Williamsport+Pike%2C+Falling+Waters%2C+WV+25419!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
