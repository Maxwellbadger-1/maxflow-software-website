"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BUILD_STAGES = [
  {
    stage: "Writing Code",
    icon: "⌨️",
    color: "#6366f1",
    files: ["App.tsx", "Header.tsx", "styles.css"],
  },
  {
    stage: "Compiling",
    icon: "⚙️",
    color: "#8b5cf6",
    files: ["TypeScript → JavaScript", "SCSS → CSS", "Optimizing..."],
  },
  {
    stage: "Bundling",
    icon: "📦",
    color: "#a855f7",
    files: ["Webpack bundling...", "Code splitting...", "Tree shaking..."],
  },
  {
    stage: "Building",
    icon: "🔨",
    color: "#d946ef",
    files: ["Static pages...", "API routes...", "Assets..."],
  },
  {
    stage: "Deploying",
    icon: "🚀",
    color: "#ec4899",
    files: ["Uploading to server...", "Cache invalidation...", "DNS update..."],
  },
  {
    stage: "Live!",
    icon: "✅",
    color: "#10b981",
    files: ["Website is live!", "Performance: 100/100", "All systems go!"],
  },
];

export function CodeBuildFlow() {
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Cycle through stages
    const stageInterval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % BUILD_STAGES.length);
      setProgress(0);
    }, 3000);

    return () => clearInterval(stageInterval);
  }, []);

  useEffect(() => {
    // Smooth progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [currentStage]);

  useEffect(() => {
    // Draw animated connection lines
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let frame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw flowing lines between stages
      for (let i = 0; i < 5; i++) {
        const startY = (canvas.height / 6) * (i + 0.5);
        const endY = (canvas.height / 6) * (i + 1.5);

        // Bezier curve
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.1, startY);
        ctx.bezierCurveTo(
          canvas.width * 0.3,
          startY,
          canvas.width * 0.7,
          endY,
          canvas.width * 0.9,
          endY
        );

        // Gradient stroke
        const gradient = ctx.createLinearGradient(0, startY, canvas.width, endY);
        gradient.addColorStop(0, BUILD_STAGES[i].color);
        gradient.addColorStop(1, BUILD_STAGES[i + 1].color);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.globalAlpha = i === currentStage ? 0.8 : 0.2;
        ctx.stroke();

        // Animated particles flowing through
        if (i === currentStage) {
          const t = (frame % 60) / 60;
          const x =
            canvas.width * 0.1 +
            (canvas.width * 0.8 * t * t * (3 - 2 * t)); // Smooth ease
          const y = startY + (endY - startY) * t;

          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = BUILD_STAGES[i].color;
          ctx.globalAlpha = 1;
          ctx.fill();
        }
      }

      frame++;
      requestAnimationFrame(animate);
    };

    animate();
  }, [currentStage]);

  const stage = BUILD_STAGES[currentStage];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Canvas for connection lines */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white">
        {/* Current stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <motion.div
              className="text-8xl mb-6"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              {stage.icon}
            </motion.div>

            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: stage.color }}
            >
              {stage.stage}
            </h2>

            {/* Files being processed */}
            <div className="space-y-2 mb-8">
              {stage.files.map((file, index) => (
                <motion.div
                  key={`${currentStage}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 font-mono text-sm"
                >
                  {file}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-80 h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: stage.color }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <p className="mt-4 text-white/60 font-mono text-sm">
              {progress}% Complete
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Stage indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {BUILD_STAGES.map((s, index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full transition-all"
              style={{
                backgroundColor: index === currentStage ? s.color : "#ffffff40",
              }}
              animate={{
                scale: index === currentStage ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 0.6,
                repeat: index === currentStage ? Infinity : 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
