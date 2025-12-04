import { Mail, Clock, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Kontaktieren Sie uns</h2>
        <p className="text-muted-foreground leading-relaxed">
          Haben Sie ein Projekt im Kopf oder Fragen zu unseren Leistungen?
          Schreiben Sie uns eine Nachricht – wir freuen uns auf Ihre Anfrage!
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        {/* Email */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">E-Mail</h3>
            <a
              href="mailto:office@maxflow-software.de"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              office@maxflow-software.de
            </a>
          </div>
        </div>

        {/* Response Time */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Antwortzeit</h3>
            <p className="text-muted-foreground">
              In der Regel innerhalb von 24 Stunden
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Standort</h3>
            <p className="text-muted-foreground">
              Deutschland – Remote & vor Ort
            </p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 p-6 bg-muted/50 rounded-xl border border-border">
        <h3 className="font-semibold mb-3">Was Sie erwarten können</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary">✓</span>
            Schnelle und persönliche Antwort
          </li>
          <li className="flex gap-2">
            <span className="text-primary">✓</span>
            Unverbindliches Erstgespräch
          </li>
          <li className="flex gap-2">
            <span className="text-primary">✓</span>
            Individuelle Projektberatung
          </li>
          <li className="flex gap-2">
            <span className="text-primary">✓</span>
            Transparente Kommunikation
          </li>
        </ul>
      </div>
    </div>
  );
}
