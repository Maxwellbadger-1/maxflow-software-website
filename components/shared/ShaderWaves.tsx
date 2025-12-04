"use client";

import { useEffect, useRef } from "react";

export function ShaderWaves() {
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

    // Wave parameters
    let time = 0;
    const waves = [
      { amplitude: 50, frequency: 0.02, speed: 0.01, color: "rgba(99, 102, 241, 0.3)" },
      { amplitude: 40, frequency: 0.03, speed: 0.015, color: "rgba(139, 92, 246, 0.3)" },
      { amplitude: 60, frequency: 0.015, speed: 0.008, color: "rgba(236, 72, 153, 0.2)" },
    ];

    const drawWave = (wave: typeof waves[0], phase: number) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin(x * wave.frequency + phase) * wave.amplitude;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();

      ctx.fillStyle = wave.color;
      ctx.fill();
    };

    const drawGeometricPattern = (phase: number) => {
      const gridSize = 80;
      const rows = Math.ceil(canvas.height / gridSize);
      const cols = Math.ceil(canvas.width / gridSize);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * gridSize + gridSize / 2;
          const y = row * gridSize + gridSize / 2;

          const distance = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          );

          const size = 10 + Math.sin(distance * 0.01 + phase) * 8;
          const rotation = distance * 0.002 + phase;

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rotation);

          // Draw geometric shape (hexagon)
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const px = Math.cos(angle) * size;
            const py = Math.sin(angle) * size;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();

          const opacity = 0.05 + Math.sin(distance * 0.01 + phase) * 0.05;
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.restore();
        }
      }
    };

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw geometric pattern
      drawGeometricPattern(time);

      // Draw waves
      waves.forEach((wave) => {
        drawWave(wave, time * wave.speed * 100);
      });

      time += 0.01;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-40"
      style={{ background: "transparent" }}
    />
  );
}
