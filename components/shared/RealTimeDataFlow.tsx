"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DataPoint {
  id: string;
  value: number;
  timestamp: number;
}

interface Event {
  id: string;
  type: string;
  user: string;
  action: string;
  time: string;
}

export function RealTimeDataFlow() {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [connectedUsers, setConnectedUsers] = useState(0);
  const [messagesPerSecond, setMessagesPerSecond] = useState(0);

  useEffect(() => {
    // Simulate real-time data
    const dataInterval = setInterval(() => {
      const newPoint: DataPoint = {
        id: Date.now().toString(),
        value: Math.random() * 100,
        timestamp: Date.now(),
      };

      setDataPoints((prev) => [...prev.slice(-20), newPoint]);
    }, 500);

    return () => clearInterval(dataInterval);
  }, []);

  useEffect(() => {
    // Simulate events
    const eventTypes = [
      { type: "user", icon: "👤", actions: ["joined", "left", "updated profile"] },
      { type: "purchase", icon: "🛒", actions: ["completed order", "added to cart"] },
      { type: "message", icon: "💬", actions: ["sent message", "started chat"] },
      { type: "upload", icon: "📤", actions: ["uploaded file", "updated document"] },
    ];

    const eventInterval = setInterval(() => {
      const randomType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      const randomAction =
        randomType.actions[Math.floor(Math.random() * randomType.actions.length)];

      const newEvent: Event = {
        id: Date.now().toString(),
        type: randomType.icon,
        user: `User${Math.floor(Math.random() * 100)}`,
        action: randomAction,
        time: new Date().toLocaleTimeString(),
      };

      setEvents((prev) => [newEvent, ...prev.slice(0, 4)]);
    }, 2000);

    return () => clearInterval(eventInterval);
  }, []);

  useEffect(() => {
    // Simulate metrics
    const metricsInterval = setInterval(() => {
      setConnectedUsers((prev) => {
        const change = Math.floor(Math.random() * 10) - 5;
        return Math.max(100, Math.min(500, prev + change));
      });

      setMessagesPerSecond(Math.floor(Math.random() * 50) + 50);
    }, 1000);

    // Initial values
    setConnectedUsers(250);
    setMessagesPerSecond(75);

    return () => clearInterval(metricsInterval);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -10,
            }}
            animate={{
              y: window.innerHeight + 10,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{ opacity: 0.3 }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-white text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="text-4xl">📡</span>
            Real-Time Data Flow
          </h2>
          <p className="text-cyan-300 text-sm flex items-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-2 h-2 bg-green-500 rounded-full"
            />
            Live WebSocket Connection
          </p>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500 rounded-xl p-4"
          >
            <div className="flex items-center gap-3">
              <div className="text-4xl">👥</div>
              <div>
                <p className="text-white/60 text-sm">Connected Users</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={connectedUsers}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-white text-2xl font-bold"
                  >
                    {connectedUsers}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-2 border-green-500 rounded-xl p-4"
          >
            <div className="flex items-center gap-3">
              <div className="text-4xl">⚡</div>
              <div>
                <p className="text-white/60 text-sm">Messages/sec</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={messagesPerSecond}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-white text-2xl font-bold"
                  >
                    {messagesPerSecond}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500 rounded-xl p-4"
          >
            <div className="flex items-center gap-3">
              <div className="text-4xl">📊</div>
              <div>
                <p className="text-white/60 text-sm">Data Points</p>
                <p className="text-white text-2xl font-bold">
                  {dataPoints.length}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main content */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Real-time chart */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl">📈</span>
              Live Analytics Chart
            </h3>

            <div className="relative h-64">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-white/40 pr-2">
                <span>100</span>
                <span>50</span>
                <span>0</span>
              </div>

              {/* Chart area */}
              <svg
                className="absolute left-8 right-0 top-0 bottom-0 w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={`${100 - y}%`}
                    x2="100%"
                    y2={`${100 - y}%`}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                ))}

                {/* Data line */}
                {dataPoints.length > 1 && (
                  <motion.path
                    d={dataPoints
                      .map((point, index) => {
                        const x = (index / 20) * 100;
                        const y = 100 - point.value;
                        return `${index === 0 ? "M" : "L"} ${x},${y}`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                  />
                )}

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>

                {/* Data points */}
                {dataPoints.slice(-10).map((point, index) => {
                  const x = ((index + 10) / 20) * 100;
                  const y = 100 - point.value;
                  return (
                    <motion.circle
                      key={point.id}
                      cx={`${x}%`}
                      cy={`${y}%`}
                      r="4"
                      fill="#06b6d4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Event stream */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl">🔔</span>
              Live Event Stream
            </h3>

            <div className="space-y-3 h-64 overflow-hidden">
              <AnimatePresence initial={false}>
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -50, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    exit={{ opacity: 0, x: 50, scale: 0.8 }}
                    transition={{ type: "spring", damping: 20, stiffness: 200 }}
                    className="relative bg-slate-800/50 border border-slate-600 rounded-lg p-3"
                    style={{ opacity: 1 - index * 0.2 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{event.type}</span>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">
                          <span className="text-cyan-400">{event.user}</span>{" "}
                          {event.action}
                        </p>
                        <p className="text-white/40 text-xs">{event.time}</p>
                      </div>
                    </div>

                    {/* New indicator for first item */}
                    {index === 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5 }}
                        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                      />
                    )}
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
