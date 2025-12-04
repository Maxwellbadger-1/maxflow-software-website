"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";
import { staggerChildren, staggerItem, viewportConfig } from "@/lib/animations";

const gradients = [
  "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
  "from-purple-500/20 via-pink-500/20 to-indigo-500/20",
  "from-pink-500/20 via-indigo-500/20 to-purple-500/20",
  "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
];

export function ServiceDetailSections() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container space-y-24 md:space-y-32">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          const gradient = gradients[index % gradients.length];

          return (
            <motion.div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                isEven ? "" : "lg:grid-flow-dense"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={staggerChildren}
            >
              {/* Icon & Title Side */}
              <motion.div
                className={isEven ? "" : "lg:col-start-2"}
                variants={staggerItem}
              >
                {/* Floating Icon with Gradient */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl`} />
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-600 p-0.5 mb-6">
                    <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies with Gradient Badges */}
                {service.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 hover:border-primary/40 transition-all"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Features Side with Enhanced Card */}
              <motion.div
                className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}
                variants={staggerItem}
              >
                <div className="relative group">
                  {/* Animated Glow Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Main Card */}
                  <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border/50 backdrop-blur-sm">
                    {/* Header with Icon */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">
                        Was wir bieten
                      </h3>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          className="flex gap-3 group/item"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mt-0.5 shadow-lg group-hover/item:scale-110 transition-transform">
                            <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                          </div>
                          <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
