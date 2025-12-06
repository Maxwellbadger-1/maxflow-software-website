"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Terminal, Zap } from "lucide-react";
import { staggerChildren, staggerItem, viewportConfig } from "@/lib/animations";
import { LiveTerminal } from "@/components/shared/LiveTerminal";

const features = [
  {
    icon: Terminal,
    title: "Live Development",
    description: "Echtzeitentwicklung mit modernsten Tools",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Wartbarer & skalierbarer Code",
  },
  {
    icon: Zap,
    title: "Schnelle Iteration",
    description: "Agile Entwicklung mit CI/CD",
  },
];

export function DevelopmentShowcase() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dark-textile.jpg"
          alt="Professional texture background"
          fill
          className="object-cover object-center"
          quality={75}
          sizes="100vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Dark overlay - transparent to show texture */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-[2]" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerChildren}
          >
            <motion.div variants={staggerItem} className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Entwicklung in Aktion
              </h2>
              <p className="text-lg text-white/80">
                Sehen Sie, wie wir arbeiten. Mit modernsten Entwicklungstools
                und Best Practices bringen wir Ihre Ideen zum Leben.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div className="space-y-4" variants={staggerChildren}>
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={staggerItem}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white/10 border border-white/20 hover:border-primary/50 transition-colors backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">{feature.title}</h3>
                      <p className="text-sm text-white/70">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Live Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Terminal Container */}
            <div className="relative rounded-xl bg-card border border-border shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-muted-foreground font-mono">
                    terminal — maxflow@dev
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="relative h-[400px] bg-background">
                <LiveTerminal />
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
