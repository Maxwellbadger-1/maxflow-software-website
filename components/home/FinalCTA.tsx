"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export function FinalCTA() {
  return (
    <section className="relative section overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-pink-500">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h2
            className="text-white mb-6"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Bereit für Ihr nächstes Projekt?
          </motion.h2>
          <motion.p
            className="text-white/90 text-lg md:text-xl mb-10"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.
            Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <Link href="/kontakt">
              <Button
                size="lg"
                variant="secondary"
                className="group shadow-xl hover:shadow-2xl transition-shadow bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900"
              >
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats/Trust Indicators */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-white/80 text-sm">Kundenzufriedenheit</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">Fast</div>
              <div className="text-white/80 text-sm">Antwortzeit</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">Modern</div>
              <div className="text-white/80 text-sm">Technologien</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
