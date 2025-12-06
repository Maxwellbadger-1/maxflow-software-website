import { Metadata } from "next";
import Image from "next/image";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Unsere Projekte | Maxflow Software",
  description: "Beispiele unserer Arbeit: Hotel-Buchungssoftware, Steuersoftware für Kleinunternehmer, moderne Firmen-Websites. Websites & Programme aus Bad Tölz.",
};

export default function PortfolioPage() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/story-tablet.jpg"
          alt="Digital storytelling"
          fill
          className="object-cover object-center"
          quality={75}
          sizes="100vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Dark overlays for white text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 z-[2]" />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute inset-0 z-[3]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="mb-4 text-white">Unsere Projekte</h1>
          <p className="text-xl text-white/80">
            Entdecken Sie eine Auswahl unserer erfolgreichen Projekte und
            digitalen Lösungen
          </p>
        </div>

        {/* Portfolio Grid with Filter */}
        <PortfolioGrid />
      </div>
    </section>
  );
}
