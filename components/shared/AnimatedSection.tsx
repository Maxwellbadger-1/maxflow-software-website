"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, viewportConfig } from "@/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  variants = fadeInUp,
  delay = 0
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
