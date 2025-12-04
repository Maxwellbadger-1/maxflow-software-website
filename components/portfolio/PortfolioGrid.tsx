"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects, Project } from "@/data/projects";
import { staggerChildren, staggerItem, viewportConfig } from "@/lib/animations";

const categories = [
  { id: "all", label: "Alle" },
  { id: "website", label: "Websites" },
  { id: "software", label: "Programme" },
  { id: "webapp", label: "Web-Apps" },
];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "all" ? true : project.category === activeCategory
  );

  return (
    <div>
      {/* Filter Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerChildren}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeCategory === category.id
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted hover:bg-muted/80 text-foreground"
            }`}
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          variants={staggerChildren}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Keine Projekte in dieser Kategorie gefunden.
          </p>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={staggerItem} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <Link href={`/portfolio/${project.slug}`}>
        <div className="group h-full rounded-xl bg-card overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
          {/* Project Image */}
          <div className="relative h-56 bg-gradient-to-br from-primary/20 to-purple-500/20 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ExternalLink className="h-8 w-8 text-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
