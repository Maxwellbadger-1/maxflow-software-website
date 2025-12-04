import { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Maxflow Software",
  description: "Entdecken Sie unsere Referenzprojekte und erfolgreiche Zusammenarbeit mit unseren Kunden.",
};

export default function PortfolioPage() {
  return (
    <section className="section">
      <div className="container">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="mb-4">Unsere Projekte</h1>
          <p className="text-xl text-muted-foreground">
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
