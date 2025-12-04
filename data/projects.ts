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
    title: "Hotel-Buchungssoftware",
    slug: "hotel-booking-system",
    shortDescription: "Professionelle Desktop-Anwendung für Hotelverwaltung",
    description:
      "Eine vollständige Buchungslösung für Hotels mit Zimmerverwaltung, Gästeverwaltung, Kalenderansicht, Zahlungsabwicklung und PostgreSQL-Datenbank. Entwickelt als native Desktop-Anwendung mit Tauri für optimale Performance.",
    image: "/images/projects/hotel-booking-1.png",
    category: "software",
    mockupType: "dashboard",
    technologies: ["React", "TypeScript", "Tauri", "Vite", "PostgreSQL", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "2",
    title: "Corporate Website",
    slug: "corporate-website",
    shortDescription: "Professionelle Unternehmenswebsite mit CMS",
    description:
      "Eine moderne, responsive Website für ein mittelständisches Unternehmen mit integriertem Content Management System.",
    image: "/images/projects/corporate-placeholder.svg",
    category: "website",
    mockupType: "website",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
  {
    id: "3",
    title: "Task Management App",
    slug: "task-management",
    shortDescription: "Kollaborative Projektmanagement-Lösung",
    description:
      "Eine intuitive App für Teamkollaboration und Projektmanagement mit Echtzeit-Updates und umfangreichen Features.",
    image: "/images/projects/task-app-placeholder.svg",
    category: "software",
    mockupType: "mobile",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
