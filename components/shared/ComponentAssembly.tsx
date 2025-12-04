"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CodeBlock {
  id: string;
  code: string;
  color: string;
  label: string;
}

const CODE_BLOCKS: CodeBlock[] = [
  {
    id: "import",
    code: "import React from 'react';",
    color: "#ec4899",
    label: "Imports",
  },
  {
    id: "component",
    code: "function Hero() {",
    color: "#8b5cf6",
    label: "Component",
  },
  {
    id: "state",
    code: "  const [count, setCount] = useState(0);",
    color: "#6366f1",
    label: "State",
  },
  {
    id: "jsx",
    code: "  return <div className='hero'>",
    color: "#0ea5e9",
    label: "JSX",
  },
  {
    id: "content",
    code: "    <h1>Welcome!</h1>",
    color: "#10b981",
    label: "Content",
  },
  {
    id: "close",
    code: "  </div>\n}",
    color: "#f59e0b",
    label: "Close",
  },
];

export function ComponentAssembly() {
  const [assembledBlocks, setAssembledBlocks] = useState<CodeBlock[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const assembleComponent = async () => {
      setAssembledBlocks([]);
      setIsComplete(false);

      // Assemble blocks one by one
      for (let i = 0; i < CODE_BLOCKS.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setAssembledBlocks((prev) => [...prev, CODE_BLOCKS[i]]);
      }

      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsComplete(true);

      // Reset after showing complete state
      await new Promise((resolve) => setTimeout(resolve, 3000));
      assembleComponent();
    };

    assembleComponent();
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 overflow-hidden">
      {/* Code editor background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.1) 0px,
              transparent 1px,
              transparent 20px
            )
          `,
        }}
      />

      <div className="relative z-10 h-full flex">
        {/* Left: Code blocks palette */}
        <div className="w-1/3 border-r border-white/10 p-6 overflow-y-auto">
          <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">🧱</span>
            Code Blocks
          </h3>

          <div className="space-y-3">
            {CODE_BLOCKS.map((block, index) => {
              const isUsed = assembledBlocks.some((b) => b.id === block.id);

              return (
                <motion.div
                  key={block.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{
                    opacity: isUsed ? 0.3 : 1,
                    x: 0,
                    scale: isUsed ? 0.95 : 1,
                  }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div
                    className="rounded-lg p-3 border backdrop-blur-sm"
                    style={{
                      backgroundColor: `${block.color}20`,
                      borderColor: block.color,
                    }}
                  >
                    <p className="text-xs text-white/60 mb-1">{block.label}</p>
                    <code className="text-white font-mono text-xs">
                      {block.code}
                    </code>
                  </div>

                  {isUsed && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2 bg-green-500 rounded-full p-1"
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: Component assembly area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-lg font-bold flex items-center gap-2">
              <span className="text-xl">⚛️</span>
              React Component
            </h3>

            {isComplete && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                className="bg-green-500/20 border border-green-500 rounded-lg px-3 py-1"
              >
                <span className="text-green-300 text-sm font-semibold">
                  ✓ Compiled
                </span>
              </motion.div>
            )}
          </div>

          {/* Code editor window */}
          <div className="bg-slate-950 rounded-xl border border-white/20 overflow-hidden shadow-2xl">
            {/* Editor header */}
            <div className="bg-slate-900 border-b border-white/10 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-white/60 text-xs ml-3 font-mono">
                Hero.tsx
              </span>
            </div>

            {/* Editor content */}
            <div className="p-6 font-mono text-sm min-h-[400px]">
              <AnimatePresence>
                {assembledBlocks.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center h-64 text-white/30"
                  >
                    Building component...
                  </motion.div>
                ) : (
                  <div className="space-y-1">
                    {assembledBlocks.map((block, index) => (
                      <motion.div
                        key={block.id}
                        initial={{ opacity: 0, x: -50, rotateX: -90 }}
                        animate={{ opacity: 1, x: 0, rotateX: 0 }}
                        transition={{
                          type: "spring",
                          damping: 20,
                          stiffness: 150,
                        }}
                        className="relative group"
                      >
                        {/* Line number */}
                        <span className="inline-block w-8 text-white/30 text-right mr-4 select-none">
                          {index + 1}
                        </span>

                        {/* Code */}
                        <motion.span
                          style={{ color: block.color }}
                          animate={
                            isComplete && index === assembledBlocks.length - 1
                              ? {
                                  textShadow: [
                                    `0 0 0px ${block.color}`,
                                    `0 0 10px ${block.color}`,
                                    `0 0 0px ${block.color}`,
                                  ],
                                }
                              : {}
                          }
                          transition={{ duration: 0.5 }}
                        >
                          {block.code}
                        </motion.span>

                        {/* Cursor */}
                        {index === assembledBlocks.length - 1 && !isComplete && (
                          <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                            }}
                            className="inline-block w-2 h-4 bg-white ml-1"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Preview panel */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/40 rounded-xl p-8"
              >
                <div className="text-center">
                  <motion.h2
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-4xl font-bold text-white mb-2"
                  >
                    Welcome!
                  </motion.h2>
                  <p className="text-white/70">Component rendered successfully</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
