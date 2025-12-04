import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projekt nicht gefunden | Maxflow Software",
    };
  }

  return {
    title: `${project.title} | Portfolio | Maxflow Software`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="section">
      <div className="container max-w-4xl">
        {/* Back Button */}
        <Link href="/portfolio" className="inline-block mb-8 group">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Zurück zum Portfolio
          </Button>
        </Link>

        {/* Hero Image */}
        <div className="relative h-80 md:h-[500px] w-full bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl overflow-hidden mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Additional Screenshots - Für Hotel-Buchungssoftware */}
        {project.slug === "hotel-booking-system" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="relative h-64 rounded-xl overflow-hidden border border-border">
              <Image
                src="/images/projects/hotel-booking-2.png"
                alt="Buchungsverwaltung"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden border border-border">
              <Image
                src="/images/projects/hotel-booking-3.png"
                alt="Zimmerverwaltung"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden border border-border">
              <Image
                src="/images/projects/hotel-booking-4.png"
                alt="Statistiken"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden border border-border bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2">Weitere Features</p>
                <p className="text-sm text-muted-foreground">E-Mail-Verwaltung, Zusatzleistungen & mehr</p>
              </div>
            </div>
          </div>
        )}

        {/* Project Info */}
        <div className="space-y-6">
          {/* Title */}
          <h1>{project.title}</h1>

          {/* Category & Technologies */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="capitalize">
              {project.category}
            </Badge>
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-3">Herausforderung</h2>
              <p className="text-muted-foreground">
                Entwicklung einer leistungsstarken und benutzerfreundlichen
                Lösung, die alle Anforderungen des Kunden erfüllt und
                gleichzeitig modernste Technologien einsetzt.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-3">Lösung</h2>
              <p className="text-muted-foreground">
                Durch agile Entwicklung und enge Zusammenarbeit konnten wir eine
                maßgeschneiderte Lösung entwickeln, die alle Erwartungen
                übertrifft.
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="bg-muted/30 rounded-xl p-8 mt-12">
            <h2 className="text-xl font-semibold mb-6">
              Verwendete Technologien
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="bg-card border border-border rounded-lg p-4 text-center font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Live Link (if available) */}
          {project.link && (
            <div className="mt-8">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="group">
                  Live-Website besuchen
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 mt-12 border-t border-border">
            <Link href="/portfolio">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Alle Projekte
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button>Projekt starten</Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
