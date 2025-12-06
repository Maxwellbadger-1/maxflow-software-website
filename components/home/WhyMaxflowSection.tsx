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
    title: "Moderne, zuverlässige Technik",
    description:
      "Bewährte Lösungen, die heute funktionieren und morgen noch aktuell sind",
  },
  {
    icon: Lightbulb,
    title: "Passt zu Ihnen",
    description:
      "Keine Fertiglösungen – wir entwickeln genau das, was Sie brauchen",
  },
  {
    icon: Users,
    title: "Persönlich vor Ort",
    description:
      "Direkter Kontakt, echte Gespräche – wir nehmen uns Zeit für Sie",
  },
  {
    icon: MessageCircle,
    title: "Verständlich erklärt",
    description:
      "Kein Fachchinesisch – Sie verstehen jederzeit, was wir tun",
  },
  {
    icon: Zap,
    title: "Verlässlich & pünktlich",
    description:
      "Klare Termine und ehrliche Zeitpläne – wir halten, was wir versprechen",
  },
];

export function WhyMaxflowSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerChildren}
          >
            <motion.h2 className="mb-6" variants={staggerItem}>
              Warum Maxflow Software?
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg"
              variants={staggerItem}
            >
              Digitale Lösungen, die zu Ihnen passen –
              verständlich, zuverlässig und persönlich betreut
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                  className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors shadow-sm"
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
