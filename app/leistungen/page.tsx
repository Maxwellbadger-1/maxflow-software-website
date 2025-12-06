import { Metadata } from "next";
import { LeistungenHero } from "@/components/leistungen/LeistungenHero";
import { ServiceDetailSections } from "@/components/leistungen/ServiceDetailSections";
import { ProcessVisualization } from "@/components/leistungen/ProcessVisualization";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Unsere Leistungen | Maxflow Software",
  description: "Software für Ihren Betrieb, professionelle Websites, persönliche Beratung und zuverlässiger Support. Bad Tölz - München.",
};

export default function LeistungenPage() {
  return (
    <>
      <LeistungenHero />
      <ServiceDetailSections />
      <ProcessVisualization />
      <CTASection
        title="Projekt besprechen"
        description="Lassen Sie uns über Ihr nächstes Projekt sprechen und gemeinsam die beste Lösung finden."
      />
    </>
  );
}
