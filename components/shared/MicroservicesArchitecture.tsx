"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Service {
  id: string;
  name: string;
  icon: string;
  x: number;
  y: number;
  color: string;
  status: "idle" | "active" | "receiving";
}

const SERVICES: Omit<Service, "status">[] = [
  { id: "gateway", name: "API Gateway", icon: "🚪", x: 50, y: 20, color: "#3b82f6" },
  { id: "auth", name: "Auth Service", icon: "🔐", x: 20, y: 50, color: "#ec4899" },
  { id: "user", name: "User Service", icon: "👤", x: 50, y: 50, color: "#8b5cf6" },
  { id: "payment", name: "Payment", icon: "💳", x: 80, y: 50, color: "#10b981" },
  { id: "notification", name: "Notifications", icon: "🔔", x: 20, y: 80, color: "#f59e0b" },
  { id: "database", name: "Database", icon: "🗄️", x: 50, y: 80, color: "#ef4444" },
  { id: "cache", name: "Redis Cache", icon: "⚡", x: 80, y: 80, color: "#06b6d4" },
];

interface Message {
  id: string;
  from: string;
  to: string;
  progress: number;
}

export function MicroservicesArchitecture() {
  const [services, setServices] = useState<Service[]>(
    SERVICES.map((s) => ({ ...s, status: "idle" as const }))
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw base connections
      const connections = [
        ["gateway", "auth"],
        ["gateway", "user"],
        ["gateway", "payment"],
        ["auth", "database"],
        ["user", "database"],
        ["user", "cache"],
        ["payment", "database"],
        ["payment", "notification"],
        ["notification", "database"],
      ];

      connections.forEach(([from, to]) => {
        const fromService = services.find((s) => s.id === from);
        const toService = services.find((s) => s.id === to);

        if (!fromService || !toService) return;

        const x1 = (fromService.x / 100) * canvas.width;
        const y1 = (fromService.y / 100) * canvas.height;
        const x2 = (toService.x / 100) * canvas.width;
        const y2 = (toService.y / 100) * canvas.height;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "#ffffff20";
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Draw active messages
      messages.forEach((message) => {
        const fromService = services.find((s) => s.id === message.from);
        const toService = services.find((s) => s.id === message.to);

        if (!fromService || !toService) return;

        const x1 = (fromService.x / 100) * canvas.width;
        const y1 = (fromService.y / 100) * canvas.height;
        const x2 = (toService.x / 100) * canvas.width;
        const y2 = (toService.y / 100) * canvas.height;

        // Draw glowing line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, fromService.color);
        gradient.addColorStop(1, toService.color);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.globalAlpha = 0.8;
        ctx.stroke();

        // Draw moving particle
        const x = x1 + (x2 - x1) * (message.progress / 100);
        const y = y1 + (y2 - y1) * (message.progress / 100);

        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = fromService.color;
        ctx.globalAlpha = 1;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.strokeStyle = fromService.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.5;
        ctx.stroke();

        ctx.globalAlpha = 1;
      });
    };

    const animationFrame = requestAnimationFrame(function animate() {
      drawConnections();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [services, messages]);

  useEffect(() => {
    // Simulate service communication
    const simulateTraffic = async () => {
      const flows = [
        ["gateway", "auth"],
        ["auth", "database"],
        ["gateway", "user"],
        ["user", "cache"],
        ["gateway", "payment"],
        ["payment", "database"],
        ["payment", "notification"],
      ];

      for (const [from, to] of flows) {
        // Mark sender as active
        setServices((prev) =>
          prev.map((s) =>
            s.id === from ? { ...s, status: "active" } : s
          )
        );

        // Create message
        const messageId = Date.now().toString();
        setMessages((prev) => [
          ...prev,
          { id: messageId, from, to, progress: 0 },
        ]);

        // Animate message
        for (let progress = 0; progress <= 100; progress += 5) {
          await new Promise((resolve) => setTimeout(resolve, 30));
          setMessages((prev) =>
            prev.map((m) =>
              m.id === messageId ? { ...m, progress } : m
            )
          );

          if (progress === 50) {
            setServices((prev) =>
              prev.map((s) =>
                s.id === to ? { ...s, status: "receiving" } : s
              )
            );
          }
        }

        // Remove message
        setMessages((prev) => prev.filter((m) => m.id !== messageId));

        // Reset statuses
        setServices((prev) =>
          prev.map((s) =>
            s.id === from || s.id === to ? { ...s, status: "idle" } : s
          )
        );

        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      simulateTraffic();
    };

    simulateTraffic();
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 h-full flex flex-col p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-white text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="text-4xl">🏗️</span>
            Microservices Architecture
          </h2>
          <p className="text-indigo-300 text-sm">
            Scalable, distributed system with inter-service communication
          </p>
        </div>

        {/* Canvas for connections */}
        <div className="flex-1 relative">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
          />

          {/* Services */}
          {services.map((service, index) => {
            const isActive = service.status === "active";
            const isReceiving = service.status === "receiving";

            return (
              <motion.div
                key={service.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{ delay: index * 0.1 }}
                className="absolute"
                style={{
                  left: `${service.x}%`,
                  top: `${service.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  animate={{
                    scale: isActive || isReceiving ? [1, 1.1, 1] : 1,
                    boxShadow: isActive || isReceiving
                      ? [
                          `0 0 0px ${service.color}`,
                          `0 0 30px ${service.color}`,
                          `0 0 0px ${service.color}`,
                        ]
                      : `0 0 0px ${service.color}`,
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: isActive || isReceiving ? Infinity : 0,
                  }}
                  className="relative"
                >
                  {/* Service node */}
                  <div
                    className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center border-3 backdrop-blur-sm"
                    style={{
                      backgroundColor: `${service.color}20`,
                      borderColor: service.color,
                    }}
                  >
                    <span className="text-3xl mb-1">{service.icon}</span>
                    <span className="text-white text-xs font-semibold text-center px-2">
                      {service.name}
                    </span>
                  </div>

                  {/* Status indicator */}
                  {(isActive || isReceiving) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: isActive ? "#10b981" : "#3b82f6",
                      }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute inset-0 rounded-full"
                        style={{
                          backgroundColor: isActive ? "#10b981" : "#3b82f6",
                        }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-white/70">Sending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-white/70">Receiving</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <span className="text-white/70">Idle</span>
          </div>
        </div>
      </div>
    </div>
  );
}
