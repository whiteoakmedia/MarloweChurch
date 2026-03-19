import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marloweag.org"),
  title: {
    template: "%s | Marlowe Assembly of God",
    default: "Marlowe Assembly of God | Love God, Love People, Live with Purpose",
  },
  description:
    "Marlowe Assembly of God - A church where faith is real, community is strong, and lives are transformed. Located in Falling Waters, WV.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Marlowe Assembly of God",
    title: "Marlowe Assembly of God | Love God, Love People, Live with Purpose",
    description:
      "A church where faith is real, community is strong, and lives are transformed. Located in Falling Waters, WV.",
    images: [{ url: "/images/Church-Web-Graphi.jpg", width: 1200, height: 630, alt: "Marlowe Assembly of God" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marlowe Assembly of God",
    description:
      "A church where faith is real, community is strong, and lives are transformed. Located in Falling Waters, WV.",
    images: ["/images/Church-Web-Graphi.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/webclip.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CM8X3XY2QS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CM8X3XY2QS');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              name: "Marlowe Assembly of God",
              description:
                "A church where faith is real, community is strong, and lives are transformed.",
              url: "https://marloweag.org",
              telephone: "+1-304-274-2474",
              email: "marloweag@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9045 Williamsport Pike",
                addressLocality: "Falling Waters",
                addressRegion: "WV",
                postalCode: "25419",
                addressCountry: "US",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "09:00",
                  closes: "12:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Wednesday",
                  opens: "19:00",
                  closes: "20:30",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-poppins)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-church-green focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
