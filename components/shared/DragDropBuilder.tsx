"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Component {
  id: string;
  type: string;
  label: string;
  icon: string;
  color: string;
}

const AVAILABLE_COMPONENTS: Component[] = [
  { id: "header", type: "Header", label: "Navigation", icon: "🔝", color: "#6366f1" },
  { id: "hero", type: "Hero", label: "Hero Section", icon: "⭐", color: "#8b5cf6" },
  { id: "features", type: "Features", label: "Features Grid", icon: "✨", color: "#a855f7" },
  { id: "cta", type: "CTA", label: "Call-to-Action", icon: "📣", color: "#d946ef" },
  { id: "footer", type: "Footer", label: "Footer", icon: "🔚", color: "#ec4899" },
];

export function DragDropBuilder() {
  const [assembledComponents, setAssembledComponents] = useState<Component[]>([]);
  const [isBuilding, setIsBuilding] = useState(false);

  useEffect(() => {
    // Auto-assemble website
    const assembleInterval = setInterval(() => {
      setIsBuilding(true);
      setAssembledComponents([]);

      // Add components one by one
      AVAILABLE_COMPONENTS.forEach((component, index) => {
        setTimeout(() => {
          setAssembledComponents((prev) => [...prev, component]);

          if (index === AVAILABLE_COMPONENTS.length - 1) {
            setTimeout(() => setIsBuilding(false), 1000);
          }
        }, index * 800);
      });
    }, 8000);

    // Initial assembly
    setTimeout(() => {
      setIsBuilding(true);
      AVAILABLE_COMPONENTS.forEach((component, index) => {
        setTimeout(() => {
          setAssembledComponents((prev) => [...prev, component]);
          if (index === AVAILABLE_COMPONENTS.length - 1) {
            setTimeout(() => setIsBuilding(false), 1000);
          }
        }, index * 800);
      });
    }, 500);

    return () => clearInterval(assembleInterval);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 flex h-full">
        {/* Component Library (Left Side) */}
        <div className="w-1/3 p-6 border-r border-white/20">
          <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">🧩</span>
            Component Library
          </h3>

          <div className="space-y-3">
            {AVAILABLE_COMPONENTS.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 cursor-move hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{component.icon}</span>
                  <div>
                    <p className="text-white font-semibold">{component.type}</p>
                    <p className="text-white/60 text-sm">{component.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {isBuilding && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 bg-purple-500/20 border border-purple-500/40 rounded-lg p-4"
            >
              <p className="text-purple-200 text-sm font-mono">
                🔧 Building website...
              </p>
            </motion.div>
          )}
        </div>

        {/* Canvas (Right Side) */}
        <div className="flex-1 p-6">
          <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            Website Canvas
          </h3>

          <div className="bg-white/5 backdrop-blur-sm border-2 border-dashed border-white/30 rounded-xl p-6 min-h-[500px]">
            <AnimatePresence>
              {assembledComponents.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center h-full"
                >
                  <p className="text-white/40 text-lg">
                    Drag components here to build your website...
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-3">
                  {assembledComponents.map((component, index) => (
                    <motion.div
                      key={`assembled-${component.id}`}
                      initial={{ opacity: 0, scale: 0.8, x: -100 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                      }}
                      transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: 200,
                      }}
                      className="relative"
                    >
                      {/* Component block */}
                      <div
                        className="rounded-lg p-6 border-2 border-white/30"
                        style={{
                          backgroundColor: `${component.color}30`,
                          borderColor: component.color,
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-4xl">{component.icon}</span>
                          <div>
                            <p className="text-white font-bold text-lg">
                              {component.type}
                            </p>
                            <p className="text-white/70">{component.label}</p>
                          </div>
                        </div>

                        {/* Simulated content bars */}
                        <div className="mt-4 space-y-2">
                          {[...Array(2)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ width: 0 }}
                              animate={{ width: `${60 + i * 20}%` }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="h-2 bg-white/30 rounded-full"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Connection line to next component */}
                      {index < assembledComponents.length - 1 && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "24px" }}
                          transition={{ delay: 0.5 }}
                          className="w-0.5 bg-gradient-to-b from-white/50 to-transparent mx-auto"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>

            {/* Success indicator */}
            {!isBuilding && assembledComponents.length === AVAILABLE_COMPONENTS.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-green-500/20 border border-green-500/40 rounded-lg p-4 text-center"
              >
                <p className="text-green-200 font-semibold text-lg">
                  ✅ Website assembled successfully!
                </p>
                <p className="text-green-300/70 text-sm mt-1">
                  Ready to deploy
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
