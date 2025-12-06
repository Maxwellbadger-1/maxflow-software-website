"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Code2, Globe, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerChildren, staggerItem, viewportConfig } from "@/lib/animations";

const services = [
  {
    icon: Code2,
    title: "Maßgeschneiderte Software",
    description:
      "Individuelle Softwarelösungen, die perfekt auf Ihre Geschäftsprozesse zugeschnitten sind. Von Automatisierung bis komplexe Anwendungen.",
  },
  {
    icon: Globe,
    title: "Moderne Websites",
    description:
      "Responsive, schnelle und SEO-optimierte Websites, die Ihre Marke optimal präsentieren und Kunden begeistern.",
  },
  {
    icon: Lightbulb,
    title: "Digitale Lösungen",
    description:
      "Innovative digitale Konzepte und Beratung für Ihre digitale Transformation. Wir bringen Ihre Ideen zum Leben.",
  },
];

export function ServicesPreview() {
  return (
    <section id="services" className="py-32 md:py-40 relative overflow-hidden">
      {/* Background Image - NO overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/minimal-keyboard.jpg"
          alt="Professional workspace"
          fill
          className="object-cover object-center"
          quality={75}
          sizes="100vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 relative z-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerChildren}
        >
          <motion.div
            variants={staggerItem}
            className="bg-background/90 backdrop-blur-md rounded-2xl p-8 border border-border/50 shadow-xl"
          >
            <h2 className="mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-muted-foreground">
              Von der Konzeption bis zur Umsetzung – wir entwickeln digitale
              Lösungen, die Ihr Business voranbringen
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerChildren}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-full p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.5 }}
        >
          <Link href="/leistungen">
            <Button variant="outline" size="lg" className="group">
              Alle Leistungen entdecken
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
