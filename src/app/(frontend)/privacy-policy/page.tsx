import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Marlowe Assembly of God. Learn how we collect, use, and protect your information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 15, 2026";

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-church-dark mb-4">
              Privacy Policy
            </h1>
            <p className="text-church-gray text-sm">Last updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-lg max-w-none text-church-gray space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-church-dark mb-3">
                Introduction
              </h2>
              <p>
                Marlowe Assembly of God (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) respects your privacy. This Privacy Policy explains
                what information we collect when you visit{" "}
                <a
                  href="https://www.marlowechurch.com"
                  className="text-church-green hover:underline"
                >
                  marlowechurch.com
                </a>{" "}
                or contact us, how we use it, and the choices you have.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-church-dark mb-3">
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Information you provide:</strong> When you contact us, sign
                  up for an event, give online, or fill out a form on our site, we
                  may collect your name, email address, phone number, prayer
                  requests, or other details you share with us.
                </li>
                <li>
                  <strong>Automatically collected information:</strong> Like most
                  websites, we collect basic technical information such as your
                  browser type, device type, pages visited, and the date and time of
                  your visit. We use Google Analytics to understand how visitors use
                  our site.
                </li>
                <li>
                  <strong>Cookies:</strong> We use cookies and similar technologies
                  for analytics and to remember your preferences. You can disable
                  cookies in your browser settings.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-church-dark mb-3">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Respond to your messages, prayer requests, and questions</li>
                <li>Send updates about church events, services, and ministries</li>
                <li>Process gifts and event registrations</li>
                <li>Improve the content and performance of our website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-church-dark mb-3">
                How We Share Information
              </h2>
              <p>
                We do not sell or rent your personal information. We may share
                limited information with trusted service providers who help us
                operate our website and ministries (for example, our giving platform
                Tithe.ly, our church management app Church Center, and our analytics
                provider Google). These providers are bound by their own privacy
                policies. We may also disclose information when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-church-dark mb-3">
                Children&apos;s Privacy
              </h2>
              <p>
                Our website is not directed to children under 13, and we do not
                knowingly collect personal information from children without parental
                consent. If you believe we have inadvertently collected such
                information, please contact us so we can remove it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-church-dark mb-3">
                Your Choices
              </h2>
              <p>
                You can ask us to update or delete personal information we hold about
                you, opt out of email communications at any time, and disable cookies
                or analytics tracking through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-church-dark mb-3">
                Third-Party Links
              </h2>
              <p>
                Our site may contain links to external sites (such as YouTube,
                Tithe.ly, and the Church Center app). We are not responsible for the
                privacy practices of those sites; please review their privacy
                policies separately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-church-dark mb-3">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we
                will revise the &quot;Last updated&quot; date at the top of this
                page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-church-dark mb-3">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle
                your information, please contact us:
              </p>
              <address className="not-italic mt-3">
                Marlowe Assembly of God
                <br />
                9045 Williamsport Pike
                <br />
                Falling Waters, WV 25419
                <br />
                <a
                  href="tel:+13042742474"
                  className="text-church-green hover:underline"
                >
                  (304) 274-2474
                </a>
                <br />
                <a
                  href="mailto:marloweag@gmail.com"
                  className="text-church-green hover:underline"
                >
                  marloweag@gmail.com
                </a>
              </address>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
