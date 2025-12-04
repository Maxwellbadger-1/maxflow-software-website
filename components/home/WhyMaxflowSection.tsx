"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  Lightbulb,
  MessageCircle,
  Zap,
  Code2,
} from "lucide-react";
import { staggerChildren, staggerItem, viewportConfig } from "@/lib/animations";

const features = [
  {
    icon: Rocket,
    title: "Modernste Technologien",
    description:
      "Wir arbeiten mit den neuesten und bewährtesten Tools und Frameworks",
  },
  {
    icon: Lightbulb,
    title: "Individuelle Lösungen",
    description:
      "Keine Templates – jedes Projekt wird maßgeschneidert entwickelt",
  },
  {
    icon: Users,
    title: "Persönliche Betreuung",
    description:
      "Direkter Kontakt und enge Zusammenarbeit während des gesamten Projekts",
  },
  {
    icon: MessageCircle,
    title: "Transparente Kommunikation",
    description:
      "Regelmäßige Updates und klare Kommunikation in jeder Projektphase",
  },
  {
    icon: Zap,
    title: "Schnelle Umsetzung",
    description:
      "Effiziente Entwicklungsprozesse für zügige Projektergebnisse",
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
];

export function WhyMaxflowSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerChildren}
          >
            <motion.h2 className="mb-6" variants={staggerItem}>
              Warum Maxflow Software?
            </motion.h2>
            <motion.p
              className="text-muted-foreground mb-8"
              variants={staggerItem}
            >
              Wir kombinieren technische Expertise mit kreativen Lösungen, um
              Ihre digitalen Projekte zum Erfolg zu führen.
            </motion.p>

            <motion.div className="space-y-6" variants={staggerChildren}>
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="flex gap-4"
                    variants={staggerItem}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Tech Stack Grid */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerChildren}
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl blur-3xl" />

            {/* Tech Stack Grid */}
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Unsere Tools</h3>
              </div>

              <motion.div
                className="grid grid-cols-2 gap-3"
                variants={staggerChildren}
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="p-4 rounded-lg bg-muted/50 border border-border text-center font-medium hover:bg-primary/10 hover:border-primary/20 transition-colors cursor-default"
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
