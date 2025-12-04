"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main text */}
      <span className="relative z-10">{text}</span>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 z-0"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [-2, 2, -2],
              y: [0, -1, 1],
              opacity: [0.7, 0.5, 0],
            }}
            transition={{ duration: 0.2 }}
            style={{
              color: "#6366f1",
              mixBlendMode: "screen",
            }}
          >
            {text}
          </motion.span>

          <motion.span
            className="absolute top-0 left-0 z-0"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [2, -2, 2],
              y: [1, 0, -1],
              opacity: [0.7, 0.5, 0],
            }}
            transition={{ duration: 0.2, delay: 0.05 }}
            style={{
              color: "#ec4899",
              mixBlendMode: "screen",
            }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  );
}
