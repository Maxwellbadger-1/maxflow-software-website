"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  title,
  description,
  buttonText = "Jetzt Kontakt aufnehmen",
  buttonHref = "/kontakt",
}: CTASectionProps) {
  return (
    <section className="section text-background relative overflow-hidden">
      {/* Background Image with Professional Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/code-editor.jpg"
          alt="Professional development"
          fill
          className="object-cover object-center"
          quality={75}
          sizes="100vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Professional Dark Overlay - 70% opacity for text readability */}
        <div className="absolute inset-0 bg-foreground/70 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-transparent to-foreground/40 z-[2]" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] z-[3]" />

      {/* Diagonal Gradient Stripes */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.1)_25%,rgba(99,102,241,0.1)_50%,transparent_50%,transparent_75%,rgba(139,92,246,0.1)_75%)] bg-[length:80px_80px] opacity-30 z-[3]" />

      {/* Floating Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-full blur-3xl animate-pulse z-[4]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse z-[4]" style={{ animationDelay: '1s' }} />

      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Decorative Element */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-sm border border-background/20 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-background" />
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="bg-background/5 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-background/10 shadow-2xl">
            <h2 className="mb-4 text-background">{title}</h2>
            <p className="text-lg text-background/80 mb-8">{description}</p>
            <Link href={buttonHref}>
              <Button size="lg" className="group bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900 shadow-xl">
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
