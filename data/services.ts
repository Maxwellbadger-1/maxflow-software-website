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
    title: "Maßgeschneiderte Software-Entwicklung",
    description:
      "Individuelle Softwarelösungen, die perfekt auf Ihre Geschäftsprozesse und Anforderungen zugeschnitten sind. Von Automatisierungstools bis hin zu komplexen Enterprise-Anwendungen.",
    features: [
      "Desktop-Anwendungen für Windows, macOS und Linux",
      "Automatisierungs-Tools für wiederkehrende Aufgaben",
      "Datenbank-Management-Systeme",
      "API-Entwicklung und Integration",
      "Legacy-System Modernisierung",
      "Performance-Optimierung bestehender Software",
    ],
    technologies: ["Python", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Docker"],
    icon: Code2,
  },
  {
    id: "website-development",
    title: "Moderne Website-Entwicklung",
    description:
      "Professionelle, responsive Websites, die Ihre Marke optimal präsentieren und Ihre Kunden begeistern. Mit modernsten Technologien für beste Performance und SEO.",
    features: [
      "Responsive Design für alle Geräte",
      "SEO-Optimierung für beste Google-Rankings",
      "Performance-Optimierung (Page Speed > 90)",
      "CMS-Integration für einfache Verwaltung",
      "E-Commerce-Lösungen",
      "Progressive Web Apps (PWA)",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Sanity CMS", "Vercel"],
    icon: Globe,
  },
  {
    id: "consulting",
    title: "Beratung & Konzeption",
    description:
      "Strategische Beratung für Ihre digitalen Projekte. Wir helfen Ihnen, die richtigen Technologien zu wählen und eine solide Grundlage für den Erfolg zu schaffen.",
    features: [
      "Digitale Strategieentwicklung",
      "UX/UI Design und Prototyping",
      "Technologie-Beratung und Tool-Auswahl",
      "Projektplanung und Roadmap-Erstellung",
      "Code Reviews und Qualitätssicherung",
      "Schulungen und Workshops",
    ],
    technologies: ["Figma", "Miro", "Notion", "Git"],
    icon: Lightbulb,
  },
  {
    id: "maintenance",
    title: "Wartung & Support",
    description:
      "Kontinuierliche Betreuung und Optimierung Ihrer digitalen Lösungen. Damit Ihre Software und Website immer auf dem neuesten Stand bleiben.",
    features: [
      "Laufender technischer Support",
      "Regelmäßige Updates und Sicherheitspatches",
      "Performance-Monitoring und Optimierung",
      "Bug-Fixing und Fehlerbe hebung",
      "Hosting und Server-Verwaltung",
      "Content-Updates und Änderungen",
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
