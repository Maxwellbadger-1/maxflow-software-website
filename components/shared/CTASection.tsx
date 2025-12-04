"use client";

import { motion } from "framer-motion";
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
    <section className="section bg-gradient-to-b from-foreground via-foreground/98 to-foreground/95 text-background relative overflow-hidden">
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Diagonal Gradient Stripes */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.1)_25%,rgba(99,102,241,0.1)_50%,transparent_50%,transparent_75%,rgba(139,92,246,0.1)_75%)] bg-[length:80px_80px] opacity-30" />

      {/* Floating Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

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
