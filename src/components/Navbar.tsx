"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavLink {
  href?: string;
  label: string;
  children?: { href: string; label: string }[];
}

const navLinks: NavLink[] = [
  { href: "/im-new", label: "I'm New" },
  { href: "/our-leadership", label: "Our Leadership" },
  {
    label: "Ministries",
    children: [
      { href: "/kids", label: "Kids Church" },
      { href: "/youth", label: "Youth" },
      { href: "/royal-rangers-girls-ministries", label: "Royal Rangers & Girls Ministries" },
    ],
  },
  { href: "/our-beliefs", label: "Our Beliefs" },
  { href: "/events", label: "Events" },
];

interface FeaturedEventData {
  title: string;
  date?: string;
  registrationLink?: string | null;
  slug?: string;
}

interface NavbarProps {
  variant?: "transparent" | "solid";
  featuredEvent?: FeaturedEventData | null;
}

function formatBannerDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function formatBannerTime(dateStr: string) {
  return new Date(dateStr).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function Navbar({ variant = "solid", featuredEvent }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const isTransparent = variant === "transparent" && !scrolled;

  useEffect(() => {
    if (variant !== "transparent") return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  // Animate banner in on mount
  useEffect(() => {
    if (featuredEvent) {
      const timer = setTimeout(() => setBannerVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [featuredEvent]);

  const bannerLink = featuredEvent?.registrationLink || (featuredEvent?.slug ? `/events/${featuredEvent.slug}` : null);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "glass-nav shadow-md"
      }`}
    >
      {/* Featured Event Banner — slides down on load */}
      {featuredEvent && (
        <div
          className="bg-church-green text-white overflow-hidden transition-all duration-500 ease-out"
          style={{
            maxHeight: bannerVisible ? "60px" : "0",
            opacity: bannerVisible ? 1 : 0,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0 text-sm">
              <span className="font-bold truncate">{featuredEvent.title}</span>
              {featuredEvent.date && (
                <span className="text-white/80 whitespace-nowrap hidden sm:inline">
                  {formatBannerDate(featuredEvent.date)} at {formatBannerTime(featuredEvent.date)}
                </span>
              )}
            </div>
            {bannerLink && (
              featuredEvent.registrationLink ? (
                <a
                  href={bannerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-church-green text-xs font-semibold rounded-full hover:bg-white/90 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  Register
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ) : (
                <Link
                  href={bannerLink}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-church-green text-xs font-semibold rounded-full hover:bg-white/90 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              )
            )}
          </div>
        </div>
      )}

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
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                    setOpenDropdown(link.label);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
                  }}
                >
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                      link.children.some((c) => pathname === c.href)
                        ? isTransparent
                          ? "text-white bg-white/20"
                          : "text-church-green bg-church-green-light"
                        : isTransparent
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-church-gray hover:text-church-green hover:bg-church-green-light/50"
                    }`}
                  >
                    {link.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            pathname === child.href
                              ? "text-church-green bg-church-green-light font-medium"
                              : "text-church-gray hover:text-church-green hover:bg-church-green-light/50"
                          }`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
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
              )
            )}
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
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-church-gray/60">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 pl-8 rounded-xl text-sm font-medium transition-colors ${
                          pathname === child.href
                            ? "text-church-green bg-church-green-light"
                            : "text-church-gray hover:text-church-green hover:bg-church-green-light/50"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-church-green bg-church-green-light"
                        : "text-church-gray hover:text-church-green hover:bg-church-green-light/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
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
