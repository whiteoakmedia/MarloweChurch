import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function PageHero({ title, subtitle, image, ctaText, ctaHref }: PageHeroProps) {
  return (
    <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
      {image ? (
        <>
          <Image src={image} alt={title} fill className="object-cover" priority />
          <div className="hero-overlay absolute inset-0" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-church-green to-church-green-dark" />
      )}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto animate-fade-in-up pt-24">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">{title}</h1>
        {subtitle && (
          <p className="text-base md:text-lg font-light text-white/90 mb-6 max-w-2xl mx-auto">{subtitle}</p>
        )}
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            target={ctaHref.startsWith("http") ? "_blank" : undefined}
            rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-block px-8 py-3 bg-church-blue text-white text-base font-semibold rounded-full hover:bg-church-blue-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            {ctaText}
          </a>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
