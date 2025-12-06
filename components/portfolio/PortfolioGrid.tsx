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
                : "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
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
          <p className="text-white/70">
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
          {/* Project Image with Screenshot Preview */}
          <div className="relative h-56 bg-gradient-to-br from-primary/20 to-purple-500/20 overflow-hidden">
            {/* Main Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-all duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Overlay with Icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink className="h-8 w-8 text-primary drop-shadow-lg" />
              </motion.div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-3 right-3 z-20">
              <Badge variant="secondary" className="backdrop-blur-sm bg-background/80 border-primary/20">
                {project.category === "website" ? "Website" : project.category === "software" ? "Software" : "Web-App"}
              </Badge>
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
