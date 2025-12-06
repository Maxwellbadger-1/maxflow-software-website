import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/HeroSection";
import { DevelopmentShowcase } from "@/components/home/DevelopmentShowcase";
import { ServicesPreview } from "@/components/home/ServicesPreview";

export const metadata: Metadata = {
  title: "Maxflow Software | Websites & Software für Ihr Unternehmen | Bad Tölz - München",
  description: "Websites und Software für Unternehmen in Bad Tölz, Wolfratshausen und München. Persönliche Beratung, verständlich erklärt, zuverlässig umgesetzt. ✓ Vor Ort ✓ Ohne Fachchinesisch",
  keywords: [
    "Website Bad Tölz",
    "Software München",
    "Webdesign Wolfratshausen",
    "Software Entwicklung Bayern",
    "Website erstellen lassen",
    "Buchhaltungssoftware",
    "Hotel Software",
    "Digitale Lösungen",
    "Website für Unternehmen",
    "Software für KMU"
  ],
  openGraph: {
    title: "Maxflow Software | Websites & Software für Ihr Unternehmen",
    description: "Von der Idee bis zum fertigen Produkt – Wir entwickeln digitale Lösungen, die zu Ihnen passen. Bad Tölz - Wolfratshausen - München.",
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
