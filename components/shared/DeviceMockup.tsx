"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface DeviceMockupProps {
  screenshots: {
    desktop: string;
    mobile: string;
  }[];
  className?: string;
}

export function DeviceMockup({ screenshots, className = "" }: DeviceMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate screenshots every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  const currentScreenshot = screenshots[currentIndex];

  return (
    <div className={`relative w-full ${className}`}>
      {/* Laptop Mockup (Main) */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Laptop Frame */}
        <div className="relative">
          {/* Screen */}
          <div className="relative bg-gradient-to-b from-muted/80 to-muted rounded-t-xl border-4 border-muted shadow-2xl overflow-hidden">
            {/* Notch/Camera (optional) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-background/80 rounded-b-lg z-10" />

            {/* Screenshot Display */}
            <div className="relative aspect-[16/10] bg-background overflow-hidden">
              <motion.div
                key={`desktop-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentScreenshot.desktop}
                  alt="Desktop preview"
                  fill
                  className="object-cover object-top"
                  priority={currentIndex === 0}
                />
              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10 pointer-events-none" />
            </div>
          </div>

          {/* Laptop Base */}
          <div className="h-2 bg-gradient-to-b from-muted to-muted/80 rounded-b-sm" />
          <div className="h-4 bg-gradient-to-b from-muted/60 to-muted/40 rounded-b-xl shadow-lg"
               style={{
                 clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
                 transform: "perspective(600px) rotateX(5deg)"
               }}
          />

          {/* Glow Effect */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-purple-500/30 to-pink-500/40 rounded-xl" />
          </div>
        </div>
      </motion.div>

      {/* Mobile Mockup (Floating, overlapping) */}
      <motion.div
        className="absolute -right-8 -bottom-8 md:-right-12 md:-bottom-12 z-20 w-32 md:w-40"
        initial={{ opacity: 0, x: 30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ y: -8, rotate: 2 }}
      >
        {/* Phone Frame */}
        <div className="relative">
          {/* Screen */}
          <div className="relative bg-muted rounded-3xl border-4 border-muted shadow-2xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-6 bg-background rounded-b-2xl z-10" />

            {/* Screenshot Display */}
            <div className="relative aspect-[9/19.5] bg-background overflow-hidden">
              <motion.div
                key={`mobile-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentScreenshot.mobile}
                  alt="Mobile preview"
                  fill
                  className="object-cover object-top"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-muted-foreground/30 rounded-full" />
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 -z-10 blur-2xl opacity-60">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-pink-500/50 rounded-3xl" />
          </div>
        </div>
      </motion.div>

      {/* Navigation Dots */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
