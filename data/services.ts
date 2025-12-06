import { Code2, Globe, Lightbulb, Wrench, Check } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies?: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "software-development",
    title: "Software für Ihren Betrieb",
    description:
      "Zeitraubende Abläufe automatisieren und digitale Lösungen schaffen, die zu Ihnen passen. Statt Excel-Chaos: Ihre eigene maßgeschneiderte Software!",
    features: [
      "Wiederholende Aufgaben automatisch erledigen lassen",
      "Papier-Chaos durch digitale Ordnung ersetzen",
      "Fehler durch manuelle Eingaben vermeiden",
      "Hotel-Buchungssoftware - Zimmer & Gäste verwalten",
      "Steuer-Software - EÜR automatisch erstellen",
      "Lagerverwaltung - Material im Blick behalten",
    ],
    icon: Code2,
  },
  {
    id: "website-development",
    title: "Professionelle Websites",
    description:
      "Ihre digitale Visitenkarte im Internet - modern, schnell und auf allen Geräten perfekt dargestellt. Damit Ihre Kunden Sie finden und begeistert sind!",
    features: [
      "Perfekte Darstellung auf Handy, Tablet und Computer",
      "Bei Google gefunden werden - bessere Platzierung",
      "Blitzschnelle Ladezeiten - Kunden warten nicht gerne",
      "Einfache Verwaltung - Sie können selbst Texte ändern",
      "Online-Shop für Ihre Produkte",
      "Kontaktformular, Termine buchen, Reservierungen",
    ],
    icon: Globe,
  },
  {
    id: "consulting",
    title: "Beratung & Konzeption",
    description:
      "Wir hören zu, verstehen Ihre Bedürfnisse und entwickeln gemeinsam die beste Lösung für Ihr Unternehmen. Klare Kommunikation ohne Fachchinesisch!",
    features: [
      "Persönliches Gespräch über Ihre Ziele und Wünsche",
      "Design-Entwürfe, die Sie sehen und anfassen können",
      "Ehrliche Empfehlungen - was brauchen Sie wirklich?",
      "Schritt-für-Schritt Plan für Ihr Projekt",
      "Schulung: So bedienen Sie Ihre neue Website/Software",
      "Workshops: Gemeinsam zur perfekten Lösung",
    ],
    icon: Lightbulb,
  },
  {
    id: "maintenance",
    title: "Wartung & Support",
    description:
      "Auch nach der Fertigstellung sind wir für Sie da. Ihre Website oder Software läuft rund - und wenn doch mal etwas ist, kümmern wir uns sofort darum!",
    features: [
      "Schnelle Hilfe bei Fragen oder Problemen",
      "Regelmäßige Updates für Sicherheit und Aktualität",
      "Alles läuft schnell und reibungslos",
      "Fehler werden sofort behoben",
      "Server und Technik im Hintergrund - läuft einfach",
      "Texte ändern, Bilder austauschen - wir helfen",
    ],
    icon: Wrench,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Erstgespräch & Analyse",
    description:
      "Wir lernen Ihr Projekt kennen, analysieren Ihre Anforderungen und definieren gemeinsam die Ziele.",
  },
  {
    number: "02",
    title: "Konzeption & Design",
    description:
      "Erstellung eines detaillierten Konzepts, Wireframes und Designs für Ihr Projekt.",
  },
  {
    number: "03",
    title: "Entwicklung",
    description:
      "Agile Umsetzung mit regelmäßigen Updates und Feedback-Schleifen.",
  },
  {
    number: "04",
    title: "Testing & Optimierung",
    description:
      "Umfangreiche Tests auf allen Geräten und Browsern, Performance-Optimierung.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Deployment und Go-Live mit vollständiger Dokumentation und Einweisung.",
  },
  {
    number: "06",
    title: "Support & Wartung",
    description:
      "Kontinuierliche Betreuung, Updates und Optimierungen nach dem Launch.",
  },
];
