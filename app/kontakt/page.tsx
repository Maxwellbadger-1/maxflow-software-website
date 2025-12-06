import { Metadata } from "next";
import { ContactForm } from "@/components/kontakt/ContactForm";
import { ContactInfo } from "@/components/kontakt/ContactInfo";

export const metadata: Metadata = {
  title: "Kontakt | Maxflow Software | Bad Tölz - München",
  description: "Lassen Sie uns über Ihr Projekt sprechen! Persönliche Beratung für Websites & Software in Bad Tölz, Wolfratshausen und München. office@maxflow-software.de",
};

export default function KontaktPage() {
  return (
    <section className="section">
      <div className="container">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="mb-4">Lassen Sie uns sprechen</h1>
          <p className="text-xl text-muted-foreground">
            Haben Sie ein Projekt oder eine Idee? Wir würden gerne von Ihnen
            hören.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div>
            <ContactInfo />
          </div>

          {/* Right: Contact Form */}
          <div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Nachricht senden</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
