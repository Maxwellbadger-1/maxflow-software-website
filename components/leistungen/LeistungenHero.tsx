"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Sparkles } from "lucide-react";

export function LeistungenHero() {
  return (
    <section className="pt-20 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10" />

      {/* Animated Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Floating Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 mb-6"
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Maßgeschneiderte Lösungen</span>
          </motion.div>

          <motion.h1 className="mb-6" variants={staggerItem}>
            Unsere Leistungen
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            variants={staggerItem}
          >
            Von der Idee zur fertigen Lösung – wir bieten umfassende
            Dienstleistungen für Ihre digitalen Projekte
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
