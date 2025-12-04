"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Metric {
  name: string;
  before: number;
  after: number;
  unit: string;
  icon: string;
}

const METRICS: Metric[] = [
  { name: "Performance", before: 45, after: 98, unit: "/100", icon: "⚡" },
  { name: "Accessibility", before: 72, after: 100, unit: "/100", icon: "♿" },
  { name: "Best Practices", before: 68, after: 100, unit: "/100", icon: "✅" },
  { name: "SEO", before: 55, after: 100, unit: "/100", icon: "🔍" },
  { name: "Load Time", before: 4.2, after: 0.8, unit: "s", icon: "⏱️" },
  { name: "Bundle Size", before: 2.4, after: 0.6, unit: "MB", icon: "📦" },
];

const OPTIMIZATIONS = [
  "Code splitting & lazy loading",
  "Image optimization (WebP)",
  "Minification & compression",
  "Tree shaking unused code",
  "CDN & edge caching",
  "Service worker caching",
];

export function PerformanceOptimization() {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showAfter, setShowAfter] = useState(false);
  const [currentOptimization, setCurrentOptimization] = useState(0);
  const [completedOptimizations, setCompletedOptimizations] = useState<number[]>([]);

  useEffect(() => {
    const cycle = async () => {
      // Reset
      setShowAfter(false);
      setCompletedOptimizations([]);
      setCurrentOptimization(0);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Start optimization
      setIsOptimizing(true);

      // Run optimizations one by one
      for (let i = 0; i < OPTIMIZATIONS.length; i++) {
        setCurrentOptimization(i);
        await new Promise((resolve) => setTimeout(resolve, 800));
        setCompletedOptimizations((prev) => [...prev, i]);
      }

      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsOptimizing(false);
      setShowAfter(true);

      // Show optimized state
      await new Promise((resolve) => setTimeout(resolve, 4000));

      // Restart cycle
      cycle();
    };

    cycle();
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 90) return "#10b981";
    if (score >= 50) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-green-950 to-slate-950 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 h-full flex flex-col p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-white text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="text-4xl">🚀</span>
            Performance Optimization
          </h2>
          <p className="text-green-300 text-sm font-mono">
            {isOptimizing
              ? "Optimizing website..."
              : showAfter
              ? "✓ Optimization complete!"
              : "Before optimization"}
          </p>
        </div>

        {/* Main content */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Lighthouse scores */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">📊</span>
              Lighthouse Scores
            </h3>

            {METRICS.map((metric, index) => {
              const currentValue = showAfter ? metric.after : metric.before;
              const isReversed = metric.unit === "s" || metric.unit === "MB";
              const scoreColor = isReversed
                ? getScoreColor(100 - (currentValue / (metric.before + metric.after)) * 100)
                : getScoreColor(currentValue);

              return (
                <motion.div
                  key={metric.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{metric.icon}</span>
                      <span className="text-white font-medium">
                        {metric.name}
                      </span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={showAfter ? "after" : "before"}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="text-2xl font-bold"
                        style={{ color: scoreColor }}
                      >
                        {currentValue}
                        <span className="text-sm ml-1">{metric.unit}</span>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ backgroundColor: scoreColor }}
                      initial={{ width: `${(metric.before / (isReversed ? 10 : 100)) * 100}%` }}
                      animate={{
                        width: showAfter
                          ? `${(metric.after / (isReversed ? 10 : 100)) * 100}%`
                          : `${(metric.before / (isReversed ? 10 : 100)) * 100}%`,
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Improvement indicator */}
                  {showAfter && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-xs text-green-400 flex items-center gap-1"
                    >
                      ↑{" "}
                      {isReversed
                        ? `${((1 - metric.after / metric.before) * 100).toFixed(0)}% faster`
                        : `+${(metric.after - metric.before).toFixed(0)} points`}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Optimization steps */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">🔧</span>
              Optimizations Applied
            </h3>

            <div className="space-y-3">
              {OPTIMIZATIONS.map((optimization, index) => {
                const isCompleted = completedOptimizations.includes(index);
                const isCurrent = currentOptimization === index && isOptimizing;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-4 rounded-lg border-2 transition-all ${
                      isCompleted
                        ? "bg-green-500/20 border-green-500"
                        : isCurrent
                        ? "bg-yellow-500/20 border-yellow-500"
                        : "bg-slate-900/50 border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Status icon */}
                      <div className="flex-shrink-0 w-6 h-6">
                        {isCompleted ? (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                          >
                            <svg
                              className="w-4 h-4 text-white"
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
                        ) : isCurrent ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-6 h-6 border-3 border-yellow-500 border-t-transparent rounded-full"
                          />
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-slate-600" />
                        )}
                      </div>

                      {/* Optimization text */}
                      <span
                        className={`text-sm font-medium ${
                          isCompleted
                            ? "text-green-300"
                            : isCurrent
                            ? "text-yellow-300"
                            : "text-white/60"
                        }`}
                      >
                        {optimization}
                      </span>
                    </div>

                    {/* Loading bar for current */}
                    {isCurrent && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8 }}
                        className="absolute bottom-0 left-0 h-1 bg-yellow-500"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Summary */}
            {showAfter && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 border-2 border-green-500 rounded-xl p-6 text-center"
              >
                <div className="text-5xl mb-3">🎉</div>
                <h4 className="text-white font-bold text-xl mb-2">
                  Optimization Complete!
                </h4>
                <p className="text-green-300 text-sm">
                  Website is now 5x faster with perfect Lighthouse scores
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
