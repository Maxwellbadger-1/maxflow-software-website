"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TERMINAL_COMMANDS = [
  { cmd: "npm install @maxflow/excellence", output: "✓ Installing innovation..." },
  { cmd: "npm run build", output: "✓ Building your digital future..." },
  { cmd: "git commit -m 'Perfection delivered'", output: "✓ 1 file changed, ∞ value added" },
  { cmd: "docker-compose up production", output: "✓ Deploying success..." },
  { cmd: "npm test", output: "✓ All tests passed. Quality: 100%" },
  { cmd: "node server.js --optimize", output: "✓ Server running at warp speed" },
];

export function LiveTerminal() {
  const [lines, setLines] = useState<Array<{ cmd: string; output: string; id: number }>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lineId, setLineId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const command = TERMINAL_COMMANDS[currentIndex % TERMINAL_COMMANDS.length];

      setLines((prev) => {
        const newLines = [...prev, { ...command, id: lineId }];
        // Keep only last 6 lines
        return newLines.slice(-6);
      });

      setLineId((prev) => prev + 1);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, lineId]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />

      <div className="relative h-full flex items-center justify-center p-8">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="popLayout">
            {lines.map((line, index) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 20, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-3"
              >
                {/* Command line */}
                <div className="flex items-center gap-2 font-mono text-sm md:text-base">
                  <span className="text-primary font-bold text-lg">$</span>
                  <span className="text-primary font-medium">{line.cmd}</span>
                </div>

                {/* Output */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex items-center gap-2 font-mono text-sm md:text-base ml-4 mt-1"
                >
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-primary/80">{line.output}</span>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Blinking cursor */}
          <motion.div
            className="flex items-center gap-2 font-mono text-sm md:text-base"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-primary font-bold text-lg">$</span>
            <motion.span
              className="inline-block w-2 h-5 bg-primary"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
