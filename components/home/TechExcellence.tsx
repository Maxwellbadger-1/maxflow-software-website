"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Smartphone, Gauge, Shield, Zap } from "lucide-react";
import { staggerChildren, staggerItem, viewportConfig } from "@/lib/animations";

// Lazy load particles for better performance
const ParticlesBackground = dynamic(
  () => import("@/components/shared/ParticlesBackground").then((mod) => ({ default: mod.ParticlesBackground })),
  { ssr: false }
);

const features = [
  {
    icon: Smartphone,
    title: "100% Responsive",
    description: "Mobile First Design – perfekt auf allen Geräten",
    stats: "iPhone • iPad • Desktop",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Gauge,
    title: "Ultra-Performance",
    description: "Lighthouse Score 98+ – blitzschnelle Ladezeiten",
    stats: "< 1s Ladezeit",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Höchste Sicherheitsstandards & Datenschutz",
    stats: "SSL • DSGVO",
    color: "from-pink-500 to-indigo-500",
  },
  {
    icon: Zap,
    title: "Modern Tech Stack",
    description: "Next.js, React, TypeScript – neueste Technologien",
    stats: "2025 Standards",
    color: "from-indigo-500 to-purple-500",
  },
];

export function TechExcellence() {
  return (
    <section className="section relative overflow-hidden min-h-screen">
      {/* Particles Background - Higher z-index */}
      <div className="absolute inset-0 z-[1]">
        <ParticlesBackground />
      </div>

      {/* Background gradient - Behind particles */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-transparent to-background/50 pointer-events-none" />

      <div className="container relative z-20">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerChildren}
        >
          <motion.h2 className="mb-4" variants={staggerItem}>
            Technische Excellence
          </motion.h2>
          <motion.p
            className="text-muted-foreground"
            variants={staggerItem}
          >
            Award-Winning Standards – Wir setzen auf modernste Technologien und
            Best Practices für maximale Performance und Qualität
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerChildren}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="relative group h-full"
              >
                {/* Card */}
                <div className="relative h-full p-6 rounded-2xl bg-card border border-border overflow-hidden">
                  {/* Gradient hover effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-4`}
                    >
                      <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    {/* Text */}
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Stats badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${feature.color} text-white shadow-lg text-center`}>
                      <span className="text-xs font-semibold whitespace-nowrap">
                        {feature.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
