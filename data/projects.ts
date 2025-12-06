export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  category: "website" | "software" | "webapp";
  mockupType?: "website" | "mobile" | "dashboard" | "ecommerce";
  technologies: string[];
  link?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Steuersoftware für Kleinunternehmer",
    slug: "tax-software",
    shortDescription: "Buchhaltung leicht gemacht - EÜR automatisch erstellen",
    description:
      "Endlich keine Excel-Listen mehr! Belege einfach fotografieren oder hochladen, die Daten werden automatisch erkannt. Ihre Einnahmen-Überschuss-Rechnung (EÜR) entsteht automatisch. Perfekt für Kleinunternehmer, Freelancer und Selbstständige, die ihre Buchhaltung selbst machen möchten – ohne Steuerberater-Fachchinesisch.",
    image: "/images/projects/tax-software-1.png",
    category: "webapp",
    mockupType: "dashboard",
    technologies: ["Web-Anwendung", "Datenbank", "PDF-Export"],
    featured: true,
  },
  {
    id: "2",
    title: "Hotel-Buchungssoftware",
    slug: "hotel-booking-system",
    shortDescription: "Zimmer & Gäste verwalten - alles im Blick",
    description:
      "Zimmer verwalten, Gäste empfangen, Buchungen im Blick behalten – alles an einem Ort. Sehen Sie auf einen Blick, welche Zimmer frei oder belegt sind. Perfekt für kleine Hotels, Pensionen und Ferienwohnungen. Läuft direkt auf Ihrem Computer, keine Internet-Verbindung nötig.",
    image: "/images/projects/hotel-booking-1.png",
    category: "software",
    mockupType: "dashboard",
    technologies: ["Desktop-Programm", "Datenbank", "Offline nutzbar"],
    featured: true,
  },
  {
    id: "3",
    title: "Corporate Website",
    slug: "corporate-website",
    shortDescription: "Professionelle Firmen-Website mit einfacher Verwaltung",
    description:
      "Ihre digitale Visitenkarte im Internet - modern, schnell und auf allen Geräten perfekt dargestellt. Sie können Texte und Bilder selbst ändern, ohne Programmierkenntnisse. Perfekt für mittelständische Unternehmen, die professionell auftreten möchten.",
    image: "/images/projects/corporate-placeholder.svg",
    category: "website",
    mockupType: "website",
    technologies: ["Moderne Website", "Selbst bearbeitbar", "Mobil optimiert"],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
