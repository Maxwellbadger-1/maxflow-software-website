"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Code2, Star, Users, Briefcase } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { ModernMockups } from "@/components/shared/ModernMockups";

export function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.1)_1px,transparent_0)] bg-[size:48px_48px]" />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content - 2 Column Layout */}
      <div className="container relative z-10 px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-4"
              variants={staggerItem}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-green-700 dark:text-green-400">Aktuell verfügbar für neue Projekte</span>
            </motion.div>

            {/* Service Badges */}
            <motion.div
              className="flex flex-wrap gap-3 mb-6"
              variants={staggerItem}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Professionelle Websites</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <Code2 className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">Maßgeschneiderte Software</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6"
              variants={staggerItem}
            >
              Digitale Lösungen
              <br />
              für Ihr{" "}
              <span className="gradient-text">Unternehmen</span>
            </motion.h1>

            {/* Lokaler Bezug */}
            <motion.p
              className="text-base md:text-lg text-muted-foreground mb-6"
              variants={staggerItem}
            >
              Bad Tölz • Wolfratshausen • München
            </motion.p>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
              variants={staggerItem}
            >
              Von der Idee bis zum fertigen Produkt –
              Wir entwickeln digitale Lösungen, die zu Ihnen passen
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={staggerItem}
            >
              <MagneticButton>
                <Link href="/portfolio">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Portfolio ansehen
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/kontakt">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Projekt starten
                  </Button>
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div
              className="flex flex-wrap gap-6 items-center"
              variants={staggerItem}
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">5.0 Bewertung</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground"><span className="font-bold text-foreground">15+</span> Projekte</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground"><span className="font-bold text-foreground">100%</span> Zufriedenheit</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Modern Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative pb-24"
          >
            <ModernMockups />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
