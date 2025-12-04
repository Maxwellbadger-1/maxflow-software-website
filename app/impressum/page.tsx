import { Metadata } from "next";
import { Building2, Mail, MapPin, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum | Maxflow Software",
  description: "Impressum und rechtliche Informationen zu Maxflow Software gemäß § 5 DDG.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Scale className="h-4 w-4" />
              <span className="text-sm font-medium">Rechtliche Informationen</span>
            </div>
            <h1 className="mb-6">Impressum</h1>
            <p className="text-xl text-muted-foreground">
              Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container max-w-4xl">

          {/* Hauptangaben */}
          <div className="mb-12 p-8 bg-card border border-border rounded-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Angaben gemäß § 5 DDG</h2>
                <p className="text-muted-foreground">Verantwortlich für den Inhalt dieser Website</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-lg mb-1">Maximilian Fegg</p>
                <p className="text-muted-foreground">Maxflow Software</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Anschrift:</p>
                  <p className="text-muted-foreground">Gewerbepark 35</p>
                  <p className="text-muted-foreground">83670 Bad Heilbrunn</p>
                  <p className="text-muted-foreground">Deutschland</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Kontakt:</p>
                  <a
                    href="mailto:office@maxflow-software.de"
                    className="text-primary hover:underline"
                  >
                    office@maxflow-software.de
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Kleinunternehmerregelung */}
          <div className="mb-12 p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 border border-border rounded-xl">
            <h2 className="text-xl font-bold mb-4">Umsatzsteuer-Identifikation</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Kleinunternehmerregelung gemäß § 19 UStG:</strong>
            </p>
            <p className="text-muted-foreground">
              Maxflow Software unterliegt der Kleinunternehmerregelung nach § 19 UStG.
              In Rechnungen wird daher keine Umsatzsteuer ausgewiesen.
            </p>
          </div>

          {/* Haftungsausschluss */}
          <div className="mb-12 p-8 bg-card border border-border rounded-xl">
            <h2 className="text-xl font-bold mb-4">Haftungsausschluss</h2>

            <h3 className="font-semibold mt-6 mb-3">Haftung für Inhalte</h3>
            <p className="text-muted-foreground mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich.
            </p>

            <h3 className="font-semibold mt-6 mb-3">Haftung für Links</h3>
            <p className="text-muted-foreground mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="font-semibold mt-6 mb-3">Urheberrecht</h3>
            <p className="text-muted-foreground mb-0">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

          {/* Online Streitbeilegung */}
          <div className="mb-12 p-8 bg-card border border-border rounded-xl">
            <h2 className="text-xl font-bold mb-4">EU-Streitschlichtung</h2>
            <p className="text-muted-foreground mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            </p>
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            <p className="text-muted-foreground mt-4">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h3 className="font-semibold mt-6 mb-3">Verbraucherstreitbeilegung</h3>
            <p className="text-muted-foreground mb-0">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          {/* Kontakt bei Fragen */}
          <div className="p-8 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Fragen zum Impressum?</h2>
            <p className="text-muted-foreground mb-4">
              Bei Fragen oder Anregungen zu unserem Impressum kontaktieren Sie uns gerne:
            </p>
            <a
              href="mailto:office@maxflow-software.de"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <Mail className="h-5 w-5" />
              office@maxflow-software.de
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
