"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredProjects } from "@/data/projects";
import { staggerChildren, staggerItem, viewportConfig } from "@/lib/animations";

export function PortfolioShowcase() {
  return (
    <section className="section bg-foreground text-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerChildren}
        >
          <motion.h2 className="mb-4 text-background" variants={staggerItem}>
            Ausgewählte Projekte
          </motion.h2>
          <motion.p
            className="text-background/70"
            variants={staggerItem}
          >
            Entdecken Sie einige unserer erfolgreichen Projekte und digitalen
            Lösungen
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerChildren}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/portfolio/${project.slug}`}>
                <div className="group h-full rounded-xl bg-background text-foreground overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
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
                        <Badge key={tech} variant="secondary" className="text-xs whitespace-nowrap">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs whitespace-nowrap">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.5 }}
        >
          <Link href="/portfolio">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            >
              Alle Projekte ansehen
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
