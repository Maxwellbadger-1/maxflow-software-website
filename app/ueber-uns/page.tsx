"use client";

import { Metadata } from "next";
import { motion } from "framer-motion";
import { Code2, Heart, Rocket, Target, Zap, Users } from "lucide-react";
import { ProcessVisualization } from "@/components/leistungen/ProcessVisualization";
import { CTASection } from "@/components/shared/CTASection";
import { staggerChildren, staggerItem, viewportConfig } from "@/lib/animations";

const values = [
  {
    icon: Target,
    title: "Qualität",
    description: "Höchste Standards in Entwicklung und Design",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Neueste Technologien und moderne Lösungen",
  },
  {
    icon: Heart,
    title: "Leidenschaft",
    description: "Begeisterung für jedes Projekt",
  },
  {
    icon: Users,
    title: "Partnerschaft",
    description: "Langfristige Beziehungen zu unseren Kunden",
  },
];

const techCategories = [
  {
    title: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    technologies: ["Node.js", "Python", "Express", "FastAPI"],
  },
  {
    title: "Datenbanken",
    technologies: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Tools & DevOps",
    technologies: ["Git", "Docker", "Vercel", "GitHub Actions"],
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        {/* Radial Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.1),transparent_50%)]" />

        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.15)_1px,transparent_0)] bg-[size:40px_40px]" />

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            {/* Floating Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Leidenschaft für Code</span>
            </motion.div>

            <motion.h1 className="mb-6" variants={staggerItem}>
              Über Maxflow Software
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              variants={staggerItem}
            >
              Ihr Partner für maßgeschneiderte digitale Lösungen mit modernsten
              Technologien
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gradient-to-b from-foreground to-foreground/95 text-background relative overflow-hidden">
        {/* Dark Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Glow Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={staggerChildren}
            >
              <motion.h2 className="mb-6" variants={staggerItem}>
                Unsere Mission
              </motion.h2>
              <motion.p
                className="text-lg text-background/80 leading-relaxed mb-6"
                variants={staggerItem}
              >
                Bei Maxflow Software entwickeln wir individuelle
                Softwarelösungen und moderne Websites, die perfekt auf die
                Bedürfnisse unserer Kunden zugeschnitten sind. Wir verbinden
                technische Expertise mit kreativem Design, um digitale Produkte
                zu schaffen, die nicht nur funktionieren, sondern begeistern.
              </motion.p>
              <motion.p
                className="text-lg text-background/80 leading-relaxed"
                variants={staggerItem}
              >
                Unser Fokus liegt auf modernsten Technologien, agiler
                Entwicklung und persönlicher Betreuung. Wir begleiten Sie von
                der ersten Idee bis zum erfolgreichen Launch und darüber hinaus.
              </motion.p>
            </motion.div>

            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={staggerChildren}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-3xl" />
              <div className="relative bg-background/10 backdrop-blur-sm border border-background/20 rounded-2xl p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-background">Unsere Vision</h3>
                <p className="text-background/80 leading-relaxed">
                  Wir möchten der bevorzugte Partner für Unternehmen und
                  Einzelpersonen sein, die digitale Lösungen suchen, die wirklich
                  funktionieren und einen Unterschied machen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gradient-to-b from-muted/30 via-background to-background relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerChildren}
          >
            <motion.h2 className="mb-4" variants={staggerItem}>
              Unsere Werte
            </motion.h2>
            <motion.p
              className="text-muted-foreground"
              variants={staggerItem}
            >
              Diese Prinzipien leiten uns in jedem Projekt
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerChildren}
          >
            {values.map((value, idx) => {
              const Icon = value.icon;
              const colors = [
                { from: "from-indigo-500", to: "to-purple-500", bg: "bg-indigo-500/10" },
                { from: "from-purple-500", to: "to-pink-500", bg: "bg-purple-500/10" },
                { from: "from-pink-500", to: "to-rose-500", bg: "bg-pink-500/10" },
                { from: "from-blue-500", to: "to-indigo-500", bg: "bg-blue-500/10" },
              ];
              const color = colors[idx % colors.length];

              return (
                <motion.div
                  key={value.title}
                  className="group relative"
                  variants={staggerItem}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color.from} ${color.to} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />

                  {/* Card */}
                  <div className="relative bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all border border-border/50">
                    {/* Icon with Gradient Border */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color.from} ${color.to} p-0.5 mx-auto mb-4`}>
                      <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2 text-lg">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <ProcessVisualization />

      {/* Technologies */}
      <section className="section relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>

        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerChildren}
          >
            {/* Animated Icon */}
            <motion.div
              className="relative w-20 h-20 mx-auto mb-6"
              variants={staggerItem}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary to-purple-600 p-0.5">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <Code2 className="h-10 w-10 text-primary" />
                </div>
              </div>
            </motion.div>

            <motion.h2 className="mb-4" variants={staggerItem}>
              Unsere Technologien
            </motion.h2>
            <motion.p
              className="text-muted-foreground"
              variants={staggerItem}
            >
              Wir arbeiten mit den modernsten und bewährtesten Technologien
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerChildren}
          >
            {techCategories.map((category, catIdx) => {
              const categoryColors = [
                { gradient: "from-indigo-500/20 to-purple-500/20", badge: "from-indigo-500 to-purple-500" },
                { gradient: "from-purple-500/20 to-pink-500/20", badge: "from-purple-500 to-pink-500" },
                { gradient: "from-pink-500/20 to-rose-500/20", badge: "from-pink-500 to-rose-500" },
                { gradient: "from-blue-500/20 to-indigo-500/20", badge: "from-blue-500 to-indigo-500" },
              ];
              const colors = categoryColors[catIdx % categoryColors.length];

              return (
                <motion.div
                  key={category.title}
                  className="group relative"
                  variants={staggerItem}
                >
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Card */}
                  <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border/50">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.badge}`} />
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {category.technologies.map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="p-3 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 text-center font-medium text-sm hover:from-primary/10 hover:to-purple-500/10 hover:border-primary/30 transition-all border border-border/30 cursor-default shadow-sm"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Lassen Sie uns zusammenarbeiten"
        description="Wir freuen uns darauf, mehr über Ihr Projekt zu erfahren und gemeinsam eine Lösung zu entwickeln."
      />
    </>
  );
}

