import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/HeroSection";
import { DevelopmentShowcase } from "@/components/home/DevelopmentShowcase";
import { ServicesPreview } from "@/components/home/ServicesPreview";

export const metadata: Metadata = {
  title: "Maxflow Software | Maßgeschneiderte Software & Websites | Next.js, React, TypeScript",
  description: "Professionelle Software-Entwicklung und moderne Websites. Individuelle Lösungen mit Next.js, React, TypeScript. ✓ Responsive ✓ SEO-optimiert ✓ Performance 98+",
  keywords: [
    "Software Entwicklung",
    "Website Entwicklung",
    "Next.js Entwickler",
    "React Entwicklung",
    "TypeScript",
    "Maßgeschneiderte Software",
    "Web Development",
    "Performance Optimierung",
    "SEO Optimierung",
    "Responsive Design"
  ],
  openGraph: {
    title: "Maxflow Software | Professionelle Software & Website Entwicklung",
    description: "Maßgeschneiderte Software und moderne Websites. Entwickelt mit neuesten Technologien für Ihren digitalen Erfolg.",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "/",
  },
};

// Lazy load below-fold sections
const TechExcellence = dynamic(
  () => import("@/components/home/TechExcellence").then((mod) => ({ default: mod.TechExcellence })),
  { ssr: true }
);

const PortfolioShowcase = dynamic(
  () => import("@/components/home/PortfolioShowcase").then((mod) => ({ default: mod.PortfolioShowcase })),
  { ssr: true }
);

const WhyMaxflowSection = dynamic(
  () => import("@/components/home/WhyMaxflowSection").then((mod) => ({ default: mod.WhyMaxflowSection })),
  { ssr: true }
);

const FinalCTA = dynamic(
  () => import("@/components/home/FinalCTA").then((mod) => ({ default: mod.FinalCTA })),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <DevelopmentShowcase />
      <ServicesPreview />
      <TechExcellence />
      <PortfolioShowcase />
      <WhyMaxflowSection />
      <FinalCTA />
    </>
  );
}
