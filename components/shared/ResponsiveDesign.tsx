"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Device = "mobile" | "tablet" | "desktop";

const DEVICES = [
  {
    type: "mobile" as const,
    name: "iPhone 15 Pro",
    width: 320,
    height: 500,
    icon: "📱",
    color: "#ec4899",
  },
  {
    type: "tablet" as const,
    name: "iPad Pro",
    width: 500,
    height: 400,
    icon: "📲",
    color: "#8b5cf6",
  },
  {
    type: "desktop" as const,
    name: "MacBook Pro",
    width: 700,
    height: 400,
    icon: "💻",
    color: "#3b82f6",
  },
];

export function ResponsiveDesign() {
  const [activeDevice, setActiveDevice] = useState<Device>("desktop");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const cycleDevices = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setActiveDevice((prev) => {
          const currentIndex = DEVICES.findIndex((d) => d.type === prev);
          const nextIndex = (currentIndex + 1) % DEVICES.length;
          return DEVICES[nextIndex].type;
        });
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(cycleDevices);
  }, []);

  const currentDevice = DEVICES.find((d) => d.type === activeDevice)!;

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-white text-3xl font-bold mb-2 flex items-center justify-center gap-3">
            <span className="text-4xl">📐</span>
            Responsive Design
          </h2>
          <p className="text-purple-300 text-sm">
            Perfekt auf allen Geräten – Mobile First Development
          </p>
        </div>

        {/* Device preview */}
        <div className="flex-1 flex items-center justify-center mb-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDevice}
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative"
            >
              {/* Device frame */}
              <div
                className="relative rounded-2xl border-4 overflow-hidden shadow-2xl"
                style={{
                  width: currentDevice.width,
                  height: currentDevice.height,
                  borderColor: currentDevice.color,
                  boxShadow: `0 0 40px ${currentDevice.color}60`,
                }}
              >
                {/* Device notch (for mobile) */}
                {activeDevice === "mobile" && (
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 rounded-b-2xl z-10"
                    style={{ backgroundColor: currentDevice.color }}
                  />
                )}

                {/* Website content simulation */}
                <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-slate-800">
                  {/* Header */}
                  <div
                    className="h-12 flex items-center justify-between px-4 border-b"
                    style={{ borderColor: `${currentDevice.color}40` }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded"
                        style={{ backgroundColor: currentDevice.color }}
                      />
                      {activeDevice !== "mobile" && (
                        <div className="h-3 w-20 bg-white/20 rounded" />
                      )}
                    </div>
                    {activeDevice === "mobile" ? (
                      <div className="text-white text-lg">☰</div>
                    ) : (
                      <div className="flex gap-2">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="h-3 w-12 bg-white/20 rounded"
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    {/* Hero section */}
                    <div className="text-center space-y-2">
                      <motion.div
                        initial={{ width: "60%" }}
                        animate={{
                          width:
                            activeDevice === "mobile"
                              ? "90%"
                              : activeDevice === "tablet"
                              ? "70%"
                              : "50%",
                        }}
                        transition={{ duration: 0.5 }}
                        className="h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded mx-auto"
                      />
                      <motion.div
                        initial={{ width: "40%" }}
                        animate={{
                          width:
                            activeDevice === "mobile"
                              ? "80%"
                              : activeDevice === "tablet"
                              ? "60%"
                              : "40%",
                        }}
                        transition={{ duration: 0.5 }}
                        className="h-4 bg-white/20 rounded mx-auto"
                      />
                    </div>

                    {/* Grid layout adapts to device */}
                    <motion.div
                      layout
                      className={`grid gap-2 ${
                        activeDevice === "mobile"
                          ? "grid-cols-1"
                          : activeDevice === "tablet"
                          ? "grid-cols-2"
                          : "grid-cols-3"
                      }`}
                    >
                      {[...Array(6)].slice(0, activeDevice === "mobile" ? 3 : 6).map((_, i) => (
                        <motion.div
                          key={i}
                          layout
                          className="h-16 rounded"
                          style={{ backgroundColor: `${currentDevice.color}40` }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                        />
                      ))}
                    </motion.div>

                    {/* Text blocks */}
                    <div className="space-y-2">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ width: "100%" }}
                          animate={{
                            width:
                              activeDevice === "mobile"
                                ? "100%"
                                : `${100 - i * 10}%`,
                          }}
                          transition={{ duration: 0.5, delay: i * 0.05 }}
                          className="h-2 bg-white/10 rounded"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Device label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <div
                  className="px-4 py-2 rounded-lg border-2 backdrop-blur-sm"
                  style={{
                    backgroundColor: `${currentDevice.color}20`,
                    borderColor: currentDevice.color,
                  }}
                >
                  <p className="text-white font-semibold flex items-center gap-2">
                    <span className="text-2xl">{currentDevice.icon}</span>
                    {currentDevice.name}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Device indicators */}
        <div className="flex gap-4 mt-8">
          {DEVICES.map((device) => {
            const isActive = device.type === activeDevice;
            return (
              <motion.button
                key={device.type}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setActiveDevice(device.type);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className="relative px-6 py-3 rounded-lg border-2 transition-all"
                style={{
                  backgroundColor: isActive ? `${device.color}40` : "transparent",
                  borderColor: isActive ? device.color : "#ffffff20",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{device.icon}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeDevice"
                    className="absolute inset-0 rounded-lg border-2"
                    style={{ borderColor: device.color }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Breakpoint info */}
        <motion.div
          key={activeDevice}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center"
        >
          <p className="text-white/60 text-sm font-mono">
            Breakpoint:{" "}
            <span className="text-white font-bold">
              {activeDevice === "mobile"
                ? "< 768px"
                : activeDevice === "tablet"
                ? "768px - 1024px"
                : "> 1024px"}
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
