"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/im-new", label: "I'm New" },
  { href: "/our-leadership", label: "Our Leadership" },
  { href: "/kids", label: "Kids" },
  { href: "/youth", label: "Youth" },
  { href: "/our-beliefs", label: "Our Beliefs" },
  { href: "/events", label: "Events" },
];

interface NavbarProps {
  variant?: "transparent" | "solid";
}

export default function Navbar({ variant = "solid" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isTransparent = variant === "transparent" && !scrolled;

  useEffect(() => {
    if (variant !== "transparent") return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "glass-nav shadow-md"
      }`}
    >
      {/* Service Times Banner */}
      <div className="bg-church-green text-white text-center py-1.5 text-sm font-light tracking-wide">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 flex-wrap">
          <span>Services on Sundays at 9am, 11am</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <a
            href="https://www.youtube.com/@marloweassemblyofgod523/streams"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-church-blue transition-colors"
          >
            Watch our live stream
          </a>
        </div>
      </div>

      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/6622d487-034c-4508-b8ca-ab28e4650434.png"
              alt="Marlowe Assembly of God"
              width={72}
              height={72}
              className="w-16 h-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? isTransparent
                      ? "text-white bg-white/20"
                      : "text-church-green bg-church-green-light"
                    : isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-church-gray hover:text-church-green hover:bg-church-green-light/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://tithe.ly/give_new/www/#/tithely/give-one-time/5676055"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-6 py-2.5 bg-church-blue text-white rounded-full text-sm font-semibold hover:bg-church-blue-dark transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Give
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isTransparent ? "text-white hover:bg-white/10" : "text-church-dark hover:bg-gray-100"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-church-green bg-church-green-light"
                      : "text-church-gray hover:text-church-green hover:bg-church-green-light/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://tithe.ly/give_new/www/#/tithely/give-one-time/5676055"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-church-blue text-white rounded-xl text-sm font-semibold hover:bg-church-blue-dark transition-colors mt-2"
              >
                Give
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
