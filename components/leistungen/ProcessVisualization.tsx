"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/services";
import { staggerChildren, staggerItem, viewportConfig } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export function ProcessVisualization() {
  return (
    <section className="section relative overflow-hidden">
      {/* Diagonal Stripe Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.03)_25%,rgba(99,102,241,0.03)_50%,transparent_50%,transparent_75%,rgba(99,102,241,0.03)_75%)] bg-[length:60px_60px]" />

      {/* Floating Orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerChildren}
        >
          <motion.h2 className="mb-4" variants={staggerItem}>
            Unser Arbeitsablauf
          </motion.h2>
          <motion.p
            className="text-muted-foreground"
            variants={staggerItem}
          >
            Von der ersten Idee bis zum erfolgreichen Launch – so arbeiten wir
            zusammen
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerChildren}
        >
          {processSteps.map((step, index) => {
            const colors = [
              { bg: "from-indigo-500/20 to-purple-500/20", text: "text-indigo-500" },
              { bg: "from-purple-500/20 to-pink-500/20", text: "text-purple-500" },
              { bg: "from-pink-500/20 to-rose-500/20", text: "text-pink-500" },
              { bg: "from-blue-500/20 to-indigo-500/20", text: "text-blue-500" },
              { bg: "from-violet-500/20 to-purple-500/20", text: "text-violet-500" },
              { bg: "from-fuchsia-500/20 to-pink-500/20", text: "text-fuchsia-500" },
            ];
            const color = colors[index % colors.length];

            return (
              <motion.div
                key={step.number}
                className="relative group"
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color.bg} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative bg-card rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all border border-border/50">
                  {/* Number with Gradient */}
                  <div className={`text-6xl font-bold ${color.text} mb-4 opacity-30 group-hover:opacity-50 transition-opacity`}>
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className={`inline-flex items-center gap-2 text-xs font-medium ${color.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <span>Mehr erfahren</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>

                {/* Connecting Arrow (hidden on last item and on mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 items-center justify-center">
                    <ArrowRight className={`h-5 w-5 ${color.text} opacity-30`} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
