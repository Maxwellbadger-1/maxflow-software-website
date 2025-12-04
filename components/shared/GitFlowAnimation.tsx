"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Commit {
  id: string;
  branch: "main" | "feature" | "develop";
  message: string;
  x: number;
  y: number;
}

const BRANCHES = {
  main: { y: 0.3, color: "#10b981", label: "main" },
  develop: { y: 0.5, color: "#6366f1", label: "develop" },
  feature: { y: 0.7, color: "#a855f7", label: "feature" },
};

export function GitFlowAnimation() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [currentAction, setCurrentAction] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const drawBranches = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw branch lines
      Object.entries(BRANCHES).forEach(([branch, config]) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * config.y);
        ctx.lineTo(canvas.width, canvas.height * config.y);
        ctx.strokeStyle = config.color;
        ctx.lineWidth = 3;
        ctx.globalAlpha = 0.3;
        ctx.stroke();
      });

      // Draw commits
      commits.forEach((commit) => {
        const branchConfig = BRANCHES[commit.branch];
        const x = commit.x * canvas.width;
        const y = canvas.height * branchConfig.y;

        // Commit circle
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = branchConfig.color;
        ctx.globalAlpha = 1;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.strokeStyle = branchConfig.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.5;
        ctx.stroke();
      });

      // Draw merge arrows when needed
      commits.forEach((commit, index) => {
        if (index > 0 && commits[index - 1].branch !== commit.branch) {
          const prevCommit = commits[index - 1];
          const prevBranch = BRANCHES[prevCommit.branch];
          const currBranch = BRANCHES[commit.branch];

          const x1 = prevCommit.x * canvas.width;
          const y1 = canvas.height * prevBranch.y;
          const x2 = commit.x * canvas.width;
          const y2 = canvas.height * currBranch.y;

          // Bezier curve for merge
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.bezierCurveTo(
            x1 + 50,
            y1,
            x2 - 50,
            y2,
            x2,
            y2
          );

          const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
          gradient.addColorStop(0, prevBranch.color);
          gradient.addColorStop(1, currBranch.color);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.globalAlpha = 0.7;
          ctx.stroke();
        }
      });
    };

    const animationFrame = requestAnimationFrame(function animate() {
      drawBranches();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [commits]);

  useEffect(() => {
    // Simulate Git workflow
    const workflow = async () => {
      await delay(500);

      // Initial commit on main
      setCurrentAction("git commit -m 'Initial commit' (main)");
      setCommits([{ id: "1", branch: "main", message: "Initial commit", x: 0.1, y: 0 }]);
      await delay(1500);

      // Create develop branch
      setCurrentAction("git checkout -b develop");
      setCommits((prev) => [
        ...prev,
        { id: "2", branch: "develop", message: "Setup project", x: 0.2, y: 0 },
      ]);
      await delay(1500);

      // Work on develop
      setCurrentAction("git commit -m 'Add features' (develop)");
      setCommits((prev) => [
        ...prev,
        { id: "3", branch: "develop", message: "Add features", x: 0.35, y: 0 },
      ]);
      await delay(1500);

      // Create feature branch
      setCurrentAction("git checkout -b feature/new-ui");
      setCommits((prev) => [
        ...prev,
        { id: "4", branch: "feature", message: "New UI component", x: 0.5, y: 0 },
      ]);
      await delay(1500);

      // Work on feature
      setCurrentAction("git commit -m 'Implement UI' (feature)");
      setCommits((prev) => [
        ...prev,
        { id: "5", branch: "feature", message: "Implement UI", x: 0.65, y: 0 },
      ]);
      await delay(1500);

      // Merge feature into develop
      setCurrentAction("git merge feature/new-ui → develop");
      setCommits((prev) => [
        ...prev,
        { id: "6", branch: "develop", message: "Merge feature", x: 0.75, y: 0 },
      ]);
      await delay(1500);

      // Final merge to main
      setCurrentAction("git merge develop → main (Release!)");
      setCommits((prev) => [
        ...prev,
        { id: "7", branch: "main", message: "Release v1.0", x: 0.9, y: 0 },
      ]);
      await delay(2000);

      // Reset and loop
      setCurrentAction("🎉 Released! Starting new cycle...");
      await delay(1500);
      setCommits([]);
      workflow();
    };

    workflow();
  }, []);

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <h2 className="text-white text-2xl font-bold mb-2 flex items-center gap-3">
            <span className="text-3xl">🌿</span>
            Git Flow Visualization
          </h2>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentAction}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-purple-300 font-mono text-sm"
            >
              $ {currentAction}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Canvas area */}
        <div className="flex-1 relative p-8">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
          />

          {/* Branch labels */}
          <div className="absolute left-12 top-1/2 -translate-y-1/2 space-y-12">
            {Object.entries(BRANCHES).map(([key, config]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border"
                style={{ borderColor: config.color }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: config.color }}
                />
                <span className="text-white font-mono text-sm">
                  {config.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Commit messages */}
          <div className="absolute right-12 top-8 space-y-2 max-w-xs">
            <AnimatePresence>
              {commits.slice(-3).map((commit) => (
                <motion.div
                  key={commit.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-slate-900/80 backdrop-blur-sm border border-white/20 rounded-lg p-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: BRANCHES[commit.branch].color }}
                    />
                    <span className="text-white/60 text-xs font-mono">
                      {commit.branch}
                    </span>
                  </div>
                  <p className="text-white text-sm">{commit.message}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Legend */}
        <div className="p-6 border-t border-white/10 bg-slate-900/50">
          <div className="flex gap-6 justify-center text-sm text-white/70">
            <span>🟢 Commit</span>
            <span>🔀 Merge</span>
            <span>🌿 Branch</span>
            <span>🚀 Deploy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
