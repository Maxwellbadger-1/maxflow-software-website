"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Request {
  id: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: string;
  status: "sending" | "processing" | "success" | "error";
  position: number; // 0-100%
}

const API_REQUESTS = [
  { method: "GET" as const, endpoint: "/api/users", duration: 3000 },
  { method: "POST" as const, endpoint: "/api/products", duration: 3500 },
  { method: "PUT" as const, endpoint: "/api/orders/123", duration: 3200 },
  { method: "DELETE" as const, endpoint: "/api/cache", duration: 2800 },
];

const METHOD_COLORS = {
  GET: "#10b981",
  POST: "#3b82f6",
  PUT: "#f59e0b",
  DELETE: "#ef4444",
};

export function APIRequestFlow() {
  const [activeRequest, setActiveRequest] = useState<Request | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const sendRequest = async () => {
      const request = API_REQUESTS[currentIndex];
      const requestId = Date.now().toString();

      // Create request object
      const newRequest: Request = {
        id: requestId,
        method: request.method,
        endpoint: request.endpoint,
        status: "sending",
        position: 0,
      };

      setActiveRequest(newRequest);
      setLogs((prev) => [
        ...prev.slice(-4),
        `${request.method} ${request.endpoint} → Sending...`,
      ]);

      // Animate sending (0% → 50%)
      for (let i = 0; i <= 50; i += 2) {
        await new Promise((resolve) => setTimeout(resolve, request.duration / 100));
        setActiveRequest((prev) =>
          prev ? { ...prev, position: i, status: "sending" } : null
        );
      }

      // Server processing
      setActiveRequest((prev) =>
        prev ? { ...prev, status: "processing" } : null
      );
      setLogs((prev) => [
        ...prev.slice(-4),
        `Server processing ${request.endpoint}...`,
      ]);

      await new Promise((resolve) => setTimeout(resolve, 800));

      // Response back (50% → 100%)
      for (let i = 50; i <= 100; i += 2) {
        await new Promise((resolve) => setTimeout(resolve, request.duration / 100));
        setActiveRequest((prev) =>
          prev ? { ...prev, position: i, status: "success" } : null
        );
      }

      setLogs((prev) => [
        ...prev.slice(-4),
        `✓ ${request.method} ${request.endpoint} → 200 OK`,
      ]);

      await new Promise((resolve) => setTimeout(resolve, 500));

      // Next request
      setCurrentIndex((prev) => (prev + 1) % API_REQUESTS.length);
      setActiveRequest(null);
    };

    sendRequest();
  }, [currentIndex]);

  const currentRequestData = API_REQUESTS[currentIndex];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 h-full flex flex-col p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-white text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="text-4xl">🔄</span>
            API Request Flow
          </h2>
          <p className="text-blue-300 font-mono text-sm">
            Client ↔ Server ↔ Database Communication
          </p>
        </div>

        {/* Main visualization */}
        <div className="flex-1 flex items-center">
          <div className="w-full relative">
            {/* Client, Server, Database boxes */}
            <div className="flex items-center justify-between mb-16">
              {/* Client */}
              <motion.div
                animate={{
                  scale: activeRequest?.status === "sending" ? [1, 1.05, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500 rounded-xl p-8 w-48">
                  <div className="text-center">
                    <div className="text-5xl mb-3">💻</div>
                    <h3 className="text-white font-bold text-lg">Client</h3>
                    <p className="text-white/60 text-sm mt-1">React App</p>
                  </div>

                  {activeRequest && activeRequest.position < 50 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-3 -right-3 bg-blue-500 rounded-full px-3 py-1"
                    >
                      <span className="text-white text-xs font-bold">
                        {activeRequest.method}
                      </span>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Server */}
              <motion.div
                animate={{
                  scale: activeRequest?.status === "processing" ? [1, 1.05, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border-2 border-green-500 rounded-xl p-8 w-48">
                  <div className="text-center">
                    <div className="text-5xl mb-3">⚙️</div>
                    <h3 className="text-white font-bold text-lg">Server</h3>
                    <p className="text-white/60 text-sm mt-1">Node.js API</p>
                  </div>

                  {activeRequest && activeRequest.status === "processing" && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-3 -right-3 bg-yellow-500 rounded-full p-2"
                    >
                      <div className="text-white text-xs">⚡</div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Database */}
              <motion.div
                animate={{
                  scale: activeRequest?.status === "processing" ? [1, 1.05, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500 rounded-xl p-8 w-48">
                  <div className="text-center">
                    <div className="text-5xl mb-3">🗄️</div>
                    <h3 className="text-white font-bold text-lg">Database</h3>
                    <p className="text-white/60 text-sm mt-1">PostgreSQL</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Request path line */}
            <div className="absolute top-24 left-24 right-24 h-1">
              <div className="relative w-full h-full">
                {/* Background line */}
                <div className="absolute inset-0 bg-white/10 rounded-full" />

                {/* Active request indicator */}
                <AnimatePresence>
                  {activeRequest && (
                    <motion.div
                      initial={{ left: "0%" }}
                      animate={{ left: `${activeRequest.position}%` }}
                      exit={{ opacity: 0 }}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                    >
                      <motion.div
                        animate={{
                          boxShadow: [
                            `0 0 10px ${METHOD_COLORS[activeRequest.method]}`,
                            `0 0 20px ${METHOD_COLORS[activeRequest.method]}`,
                            `0 0 10px ${METHOD_COLORS[activeRequest.method]}`,
                          ],
                        }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="w-4 h-4 rounded-full"
                        style={{
                          backgroundColor: METHOD_COLORS[activeRequest.method],
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Request details */}
        <div className="grid grid-cols-2 gap-6">
          {/* Current request info */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl">📡</span>
              Current Request
            </h3>
            <AnimatePresence mode="wait">
              {activeRequest && (
                <motion.div
                  key={activeRequest.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{
                        backgroundColor: METHOD_COLORS[activeRequest.method],
                      }}
                    >
                      {activeRequest.method}
                    </span>
                    <span className="text-white font-mono text-sm">
                      {activeRequest.endpoint}
                    </span>
                  </div>
                  <div className="text-sm text-white/60">
                    Status:{" "}
                    <span className="text-blue-400 font-semibold">
                      {activeRequest.status === "sending" && "Sending request..."}
                      {activeRequest.status === "processing" && "Server processing..."}
                      {activeRequest.status === "success" && "Success!"}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Terminal logs */}
          <div className="bg-slate-950 border border-slate-700 rounded-xl overflow-hidden">
            <div className="bg-slate-900 border-b border-slate-700 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-white/60 text-xs ml-2 font-mono">
                api.log
              </span>
            </div>
            <div className="p-4 font-mono text-xs h-32 overflow-y-auto">
              <AnimatePresence>
                {logs.map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-green-400 mb-1"
                  >
                    [{new Date().toLocaleTimeString()}] {log}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
