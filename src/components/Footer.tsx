import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/im-new", label: "I'm New" },
  { href: "/youth", label: "Youth" },
  { href: "/kids", label: "Kids" },
  { href: "/our-leadership", label: "Our Leadership" },
  { href: "/our-beliefs", label: "Our Beliefs" },
  { href: "/events", label: "Events" },
  { href: "/royal-rangers-girls-ministries", label: "Royal Rangers & Girls Ministries" },
];

export default function Footer() {
  return (
    <footer className="bg-church-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Mission */}
          <div>
            <Link href="/">
              <Image
                src="/images/6622d487-034c-4508-b8ca-ab28e4650434.png"
                alt="Marlowe Assembly of God"
                width={80}
                height={80}
                className="w-20 h-auto mb-4 brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              A church where faith is real, community is strong, and lives are transformed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-church-blue font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Worship Times */}
          <div>
            <h4 className="text-church-blue font-semibold text-sm uppercase tracking-wider mb-4">
              Join Us for Worship
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>
                <span className="font-medium text-white">Sundays</span> at 9am & 11am
              </p>
              <p>
                <span className="font-medium text-white">Wednesdays</span> at 7pm
              </p>
              <div className="pt-3 border-t border-white/10">
                <p>9045 Williamsport Pike</p>
                <p>Falling Waters, WV 25419</p>
                <p className="mt-2">
                  <a href="tel:+13042742474" className="hover:text-white transition-colors">
                    (304) 274-2474
                  </a>
                </p>
                <p>
                  <a href="mailto:marloweag@gmail.com" className="hover:text-white transition-colors">
                    marloweag@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} Marlowe Assembly of God. All rights reserved.
          </p>
          <p className="text-white/60 text-xs">
            Web design and development by{" "}
            <a
              href="https://www.whiteoakmedia.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              White Oak Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
