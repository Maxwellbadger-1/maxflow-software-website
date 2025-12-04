"use client";

import { useEffect, useRef } from "react";

const CODE_CHARS = "const{}</>()[]=>function.import;export:class?TypeScript";
const TECH_SYMBOLS = ["{ }", "[ ]", "< />", "=>", "::", "...", "===", "!==", "&&", "||"];

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix rain setup
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Animation
    const draw = () => {
      // Fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style
      ctx.fillStyle = "#6366f1"; // Primary color
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Randomly add tech symbols
        if (Math.random() > 0.95) {
          const symbol = TECH_SYMBOLS[Math.floor(Math.random() * TECH_SYMBOLS.length)];
          ctx.fillStyle = "#8b5cf6"; // Secondary color
          ctx.fillText(symbol, x, y);
          ctx.fillStyle = "#6366f1";
        }

        // Reset drop when it reaches bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 33); // ~30 FPS

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-20"
      style={{ background: "transparent" }}
    />
  );
}
