"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface BrowserMockupProps {
  screenshots: string[];
  className?: string;
}

export function BrowserMockup({ screenshots, className = "" }: BrowserMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate screenshots every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  return (
    <motion.div
      className={`relative w-full max-w-4xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Browser Window with 3D perspective */}
      <motion.div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        whileHover={{
          rotateY: 0,
          rotateX: 0,
          transition: { duration: 0.3 },
        }}
        initial={{
          rotateY: -15,
          rotateX: 10,
        }}
      >
        {/* Browser Chrome */}
        <div className="relative bg-gradient-to-b from-muted/80 to-muted rounded-t-xl border border-border shadow-2xl overflow-hidden backdrop-blur-sm">
          {/* Window Controls */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* URL Bar */}
            <div className="flex-1 mx-4 px-3 py-1 bg-background/80 rounded-md text-xs text-muted-foreground flex items-center gap-2">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>maxflow-software.de</span>
            </div>
          </div>

          {/* Screenshot Display Area */}
          <div className="relative aspect-[16/10] bg-background overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={screenshots[currentIndex]}
                  alt={`Project screenshot ${currentIndex + 1}`}
                  fill
                  className="object-cover object-top"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 -z-10 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/20 to-pink-500/30 rounded-xl" />
        </div>
      </motion.div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
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
    </motion.div>
  );
}
