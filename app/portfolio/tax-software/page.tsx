import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Steuersoftware für Kleinunternehmer | Maxflow Software",
  description:
    "Intuitive Buchhaltungssoftware mit Dashboard-Übersicht, EÜR-Generierung, E-Rechnung-Import und automatischer Belegverarbeitung.",
};

export default function TaxSoftwarePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-indigo-500/10">
        <div className="container">
          {/* Back Button */}
          <Link href="/portfolio">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Zurück zum Portfolio
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <Badge className="mb-4" variant="secondary">
                Web-App
              </Badge>
              <h1 className="mb-6">Steuersoftware für Kleinunternehmer</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Intuitive Buchhaltungssoftware mit EÜR-Export, E-Rechnung-Import und automatischer Belegverarbeitung
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"].map(
                  (tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  )
                )}
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects/tax-software-1.png"
                alt="Steuersoftware Dashboard"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="mb-8">Über das Projekt</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Eine vollständige Buchhaltungslösung speziell entwickelt für Kleinunternehmer und
              Selbstständige. Die Software vereinfacht die Steuervorbereitung durch automatisierte
              Prozesse und intuitive Benutzerführung.
            </p>
          </div>

          {/* Key Features */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Hauptfunktionen</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Dashboard mit Echtzeit-Übersicht",
                "Einnahmen- und Ausgabenverwaltung",
                "Automatische EÜR-Generierung",
                "E-Rechnung Import (ZUGFeRD/XRechnung)",
                "Beleg-Scanning mit OCR",
                "Cashflow-Prognose",
                "Forderungsmanagement",
                "Professionelles PDF-Design",
                "Individuelle Firmen-Gestaltung",
                "GoBD-konforme Archivierung",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Technische Highlights</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Next.js 15 App Router:</strong> Moderne React-Architektur mit Server Components für optimale Performance
              </li>
              <li>
                <strong className="text-foreground">TypeScript:</strong> Vollständige Typsicherheit für weniger Bugs und bessere Wartbarkeit
              </li>
              <li>
                <strong className="text-foreground">Prisma ORM:</strong> Type-safe Datenbankzugriff mit PostgreSQL
              </li>
              <li>
                <strong className="text-foreground">Responsive Design:</strong> Optimale Darstellung auf Desktop, Tablet und Mobile
              </li>
              <li>
                <strong className="text-foreground">Gradient UI:</strong> Modernes Design mit Purple/Pink/Orange Farbschema
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Screenshots Grid */}
      <section className="section bg-muted/30">
        <div className="container">
          <h2 className="text-center mb-12">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                src: "/images/projects/tax-software-1.png",
                alt: "Dashboard mit Übersicht",
                title: "Dashboard",
              },
              {
                src: "/images/projects/tax-software-2.png",
                alt: "Ausgabenverwaltung mit E-Rechnung Import",
                title: "Ausgaben",
              },
              {
                src: "/images/projects/tax-software-3.png",
                alt: "Belegverwaltung mit GoBD-Archivierung",
                title: "Belege",
              },
              {
                src: "/images/projects/tax-software-4.png",
                alt: "EÜR-Generierung und Export",
                title: "EÜR",
              },
            ].map((screenshot, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-[400px]">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                  <h3 className="text-lg font-semibold">{screenshot.title}</h3>
                  <p className="text-sm text-muted-foreground">{screenshot.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-6">Interessiert an einem ähnlichen Projekt?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Wir entwickeln maßgeschneiderte Software-Lösungen für Ihre Anforderungen
          </p>
          <Link href="/kontakt">
            <Button size="lg" className="group">
              Jetzt Projekt besprechen
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
