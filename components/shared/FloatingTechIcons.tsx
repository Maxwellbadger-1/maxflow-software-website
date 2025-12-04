"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  { name: "React", symbol: "⚛️", color: "#61dafb" },
  { name: "Next.js", symbol: "▲", color: "#000000" },
  { name: "TypeScript", symbol: "TS", color: "#3178c6" },
  { name: "Tailwind", symbol: "🌊", color: "#06b6d4" },
  { name: "Node.js", symbol: "⬢", color: "#339933" },
  { name: "Python", symbol: "🐍", color: "#3776ab" },
  { name: "Docker", symbol: "🐳", color: "#2496ed" },
  { name: "Git", symbol: "⎇", color: "#f05032" },
];

export function FloatingTechIcons() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {TECH_STACK.map((tech, i) => {
        const randomX = 10 + Math.random() * 80;
        const randomY = 10 + Math.random() * 80;
        const randomDuration = 15 + Math.random() * 10;
        const randomDelay = Math.random() * 5;

        return (
          <motion.div
            key={tech.name}
            className="absolute flex items-center justify-center w-16 h-16 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.7, 0.7, 0],
              scale: [0, 1, 1, 0],
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "easeInOut",
            }}
          >
            <div className="text-center">
              <div className="text-2xl mb-1">{tech.symbol}</div>
              <div
                className="text-xs font-mono font-bold"
                style={{ color: tech.color }}
              >
                {tech.name}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
