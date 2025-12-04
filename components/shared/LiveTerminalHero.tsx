"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const TERMINAL_COMMANDS = [
  { cmd: "npm create maxflow-app", output: "✓ Initializing excellence..." },
  { cmd: "npm run build", output: "✓ Building your digital future..." },
  { cmd: "npm test", output: "✓ All tests passed (100%)" },
  { cmd: "git commit -m 'Ship perfection'", output: "✓ 1 file changed, ∞ value added" },
  { cmd: "npm run deploy", output: "✓ Deploying to production..." },
  { cmd: "echo 'Success!'", output: "✓ Your vision is live! 🚀" },
];

export function LiveTerminalHero() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const command = TERMINAL_COMMANDS[currentCommand];
    let charIndex = 0;
    setTypedText("");
    setShowOutput(false);

    const typeInterval = setInterval(() => {
      if (charIndex < command.cmd.length) {
        setTypedText(command.cmd.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowOutput(true);
          setHistory((prev) => [...prev, command]);
          setTimeout(() => {
            setCurrentCommand((prev) => (prev + 1) % TERMINAL_COMMANDS.length);
            if (currentCommand === TERMINAL_COMMANDS.length - 1) {
              setHistory([]);
            }
          }, 1500);
        }, 500);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentCommand]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, typedText]);

  return (
    <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
      <div className="relative w-full h-full overflow-hidden">
        {/* Terminal Window */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950">
          {/* Grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="absolute inset-0 p-8 md:p-16 font-mono text-sm md:text-base overflow-auto"
          >
            {/* Previous commands */}
            {history.slice(-4).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4"
              >
                <div className="flex items-center gap-2 text-indigo-400 mb-1">
                  <span className="text-purple-400">→</span>
                  <span>{item.cmd}</span>
                </div>
                <div className="text-indigo-300/70 pl-6">{item.output}</div>
              </motion.div>
            ))}

            {/* Current command */}
            <div className="flex items-center gap-2 text-indigo-400">
              <span className="text-purple-400">→</span>
              <span>{typedText}</span>
              {!showOutput && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-indigo-400 ml-1"
                />
              )}
            </div>

            {/* Current output */}
            {showOutput && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-indigo-300/70 pl-6 mt-1"
              >
                {TERMINAL_COMMANDS[currentCommand].output}
              </motion.div>
            )}
          </div>

          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}
