"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PipelineStage {
  id: string;
  name: string;
  icon: string;
  status: "pending" | "running" | "success" | "error";
  duration: number;
  logs: string[];
}

const PIPELINE_STAGES: Omit<PipelineStage, "status">[] = [
  {
    id: "lint",
    name: "Code Quality",
    icon: "🔍",
    duration: 1500,
    logs: ["Running ESLint...", "No issues found", "✓ Code quality passed"],
  },
  {
    id: "test",
    name: "Run Tests",
    icon: "🧪",
    duration: 2000,
    logs: ["Running test suite...", "125 tests passed", "✓ All tests passed"],
  },
  {
    id: "build",
    name: "Build",
    icon: "🔨",
    duration: 2500,
    logs: ["Building production bundle...", "Optimizing assets...", "✓ Build complete"],
  },
  {
    id: "docker",
    name: "Docker Image",
    icon: "🐳",
    duration: 1800,
    logs: ["Building Docker image...", "Pushing to registry...", "✓ Image uploaded"],
  },
  {
    id: "deploy",
    name: "Deploy",
    icon: "🚀",
    duration: 2200,
    logs: ["Deploying to production...", "Running health checks...", "✓ Deployment successful"],
  },
];

export function DeploymentPipeline() {
  const [stages, setStages] = useState<PipelineStage[]>(
    PIPELINE_STAGES.map((s) => ({ ...s, status: "pending" as const }))
  );
  const [currentStageIndex, setCurrentStageIndex] = useState(-1);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  useEffect(() => {
    const runPipeline = async () => {
      // Reset
      setStages(PIPELINE_STAGES.map((s) => ({ ...s, status: "pending" as const })));
      setCurrentStageIndex(-1);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Run each stage
      for (let i = 0; i < PIPELINE_STAGES.length; i++) {
        setCurrentStageIndex(i);

        // Mark as running
        setStages((prev) =>
          prev.map((stage, idx) =>
            idx === i ? { ...stage, status: "running" } : stage
          )
        );

        // Show logs one by one
        const stage = PIPELINE_STAGES[i];
        for (let logIdx = 0; logIdx < stage.logs.length; logIdx++) {
          setCurrentLogIndex(logIdx);
          await new Promise((resolve) =>
            setTimeout(resolve, stage.duration / stage.logs.length)
          );
        }

        // Mark as success
        setStages((prev) =>
          prev.map((stage, idx) =>
            idx === i ? { ...stage, status: "success" } : stage
          )
        );

        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      // Show complete state
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Loop
      runPipeline();
    };

    runPipeline();
  }, []);

  const currentStage = stages[currentStageIndex];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(0deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 h-full flex flex-col p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-white text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="text-4xl">⚡</span>
            CI/CD Pipeline
          </h2>
          <p className="text-blue-300 font-mono text-sm">
            Automated deployment in progress...
          </p>
        </div>

        {/* Pipeline stages */}
        <div className="flex-1 flex items-center justify-center gap-8 mb-8">
          {stages.map((stage, index) => {
            const isActive = index === currentStageIndex;
            const isPast = index < currentStageIndex;

            return (
              <div key={stage.id} className="flex items-center gap-4">
                {/* Stage */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? [1, 1.1, 1] : 1,
                      boxShadow: isActive
                        ? [
                            "0 0 0px rgba(59, 130, 246, 0)",
                            "0 0 20px rgba(59, 130, 246, 0.8)",
                            "0 0 0px rgba(59, 130, 246, 0)",
                          ]
                        : "none",
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isActive ? Infinity : 0,
                    }}
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl border-4 transition-colors ${
                      stage.status === "success"
                        ? "bg-green-500/20 border-green-500"
                        : stage.status === "running"
                        ? "bg-blue-500/20 border-blue-500"
                        : stage.status === "error"
                        ? "bg-red-500/20 border-red-500"
                        : "bg-slate-800/50 border-slate-700"
                    }`}
                  >
                    {stage.status === "success" ? "✓" : stage.icon}
                  </motion.div>

                  {/* Stage name */}
                  <p className="text-white text-sm text-center mt-2 font-medium">
                    {stage.name}
                  </p>

                  {/* Status indicator */}
                  {stage.status === "running" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
                    >
                      <span className="text-blue-400 text-xs font-mono">
                        Running...
                      </span>
                    </motion.div>
                  )}
                </motion.div>

                {/* Connector arrow */}
                {index < stages.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: isPast || isActive ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.5 }}
                    className="origin-left"
                  >
                    <svg
                      width="40"
                      height="4"
                      className={`transition-colors ${
                        isPast ? "text-green-500" : "text-slate-700"
                      }`}
                    >
                      <line
                        x1="0"
                        y1="2"
                        x2="40"
                        y2="2"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <polygon
                        points="35,0 40,2 35,4"
                        fill="currentColor"
                      />
                    </svg>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Terminal logs */}
        <div className="bg-slate-950 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
          {/* Terminal header */}
          <div className="bg-slate-900 border-b border-slate-700 px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-white/60 text-sm ml-3 font-mono">
              {currentStage?.name || "Pipeline"} logs
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm h-48 overflow-y-auto">
            <AnimatePresence mode="wait">
              {currentStage ? (
                <div key={currentStageIndex}>
                  {currentStage.logs.slice(0, currentLogIndex + 1).map((log, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-green-400 mb-2"
                    >
                      <span className="text-blue-500">$</span> {log}
                    </motion.div>
                  ))}
                  {currentLogIndex < currentStage.logs.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-green-400 ml-1"
                    />
                  )}
                </div>
              ) : (
                <div className="text-slate-500">Waiting to start...</div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Success message */}
        {currentStageIndex === stages.length - 1 &&
          stages[currentStageIndex].status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 bg-green-500/20 border border-green-500 rounded-xl p-6 text-center"
            >
              <p className="text-green-300 text-xl font-bold">
                🎉 Deployment successful!
              </p>
              <p className="text-green-400/70 text-sm mt-2">
                Your application is now live in production
              </p>
            </motion.div>
          )}
      </div>
    </div>
  );
}
