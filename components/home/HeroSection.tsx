"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TypingCode } from "@/components/shared/TypingCode";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("services");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Next.js Image Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Abstract technology background"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Professional Overlay - verstärkt für bessere Lesbarkeit */}
        {/* Main dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Gradient overlay - darker at center for text, lighter at edges to show image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        {/* Subtle brand color tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-white"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)' }}
            variants={staggerItem}
          >
            Maßgeschneiderte Software,
            <br />
            die Ihr Business{" "}
            <span className="gradient-text drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">transformiert</span>
          </motion.h1>

          {/* TypingCode Animation */}
          <motion.div
            className="flex justify-center mb-8"
            variants={staggerItem}
          >
            <TypingCode />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-12"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.7), 0 1px 5px rgba(0,0,0,0.5)' }}
            variants={staggerItem}
          >
            Individuelle Programme und Websites – entwickelt mit neuesten
            Technologien für Ihren digitalen Erfolg
          </motion.p>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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

          {/* Tech Stack Pills */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center mt-16"
            variants={staggerItem}
          >
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"].map(
              (tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-sm font-medium text-white/90"
                >
                  {tech}
                </div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        onClick={scrollToNext}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
