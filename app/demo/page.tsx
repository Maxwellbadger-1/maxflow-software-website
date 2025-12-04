"use client";

import { useState } from "react";
import { Scene3D } from "@/components/shared/Scene3D";
import { Scene3DTech } from "@/components/shared/Scene3DTech";
import { ParticlesBackground } from "@/components/shared/ParticlesBackground";
import { LiveTerminal } from "@/components/shared/LiveTerminal";
import { ShaderWaves } from "@/components/shared/ShaderWaves";
import { GridBackground } from "@/components/shared/GridBackground";
import { FloatingTechIcons } from "@/components/shared/FloatingTechIcons";
import { TypingCode } from "@/components/shared/TypingCode";
import { GlitchText } from "@/components/shared/GlitchText";
import { CodeBuildFlow } from "@/components/shared/CodeBuildFlow";
import { DragDropBuilder } from "@/components/shared/DragDropBuilder";
import { GitFlowAnimation } from "@/components/shared/GitFlowAnimation";
import { ComponentAssembly } from "@/components/shared/ComponentAssembly";
import { DeploymentPipeline } from "@/components/shared/DeploymentPipeline";
import { APIRequestFlow } from "@/components/shared/APIRequestFlow";
import { ResponsiveDesign } from "@/components/shared/ResponsiveDesign";
import { PerformanceOptimization } from "@/components/shared/PerformanceOptimization";
import { MicroservicesArchitecture } from "@/components/shared/MicroservicesArchitecture";
import { RealTimeDataFlow } from "@/components/shared/RealTimeDataFlow";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type DemoType =
  | "3d-tech"
  | "terminal"
  | "waves"
  | "grid"
  | "tech-icons"
  | "particles"
  | "code-build"
  | "drag-drop"
  | "git-flow"
  | "component-assembly"
  | "deployment"
  | "api-flow"
  | "responsive"
  | "performance"
  | "microservices"
  | "realtime";

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState<DemoType>("code-build");

  return (
    <main className="min-h-screen">
      {/* Demo Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effect */}
        {activeDemo === "3d-tech" && <Scene3DTech />}
        {activeDemo === "terminal" && <LiveTerminal />}
        {activeDemo === "waves" && <ShaderWaves />}
        {activeDemo === "grid" && <GridBackground />}
        {activeDemo === "tech-icons" && <FloatingTechIcons />}
        {activeDemo === "particles" && <ParticlesBackground />}
        {activeDemo === "code-build" && <CodeBuildFlow />}
        {activeDemo === "drag-drop" && <DragDropBuilder />}
        {activeDemo === "git-flow" && <GitFlowAnimation />}
        {activeDemo === "component-assembly" && <ComponentAssembly />}
        {activeDemo === "deployment" && <DeploymentPipeline />}
        {activeDemo === "api-flow" && <APIRequestFlow />}
        {activeDemo === "responsive" && <ResponsiveDesign />}
        {activeDemo === "performance" && <PerformanceOptimization />}
        {activeDemo === "microservices" && <MicroservicesArchitecture />}
        {activeDemo === "realtime" && <RealTimeDataFlow />}

        {/* Content */}
        <div className="container relative z-10 px-4 md:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <GlitchText text="Ultra-Modern" /> Features
            </h1>

            <div className="mb-6 flex justify-center">
              <TypingCode />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              2025 Cutting-Edge Web Effects - Software Development Visualisiert
            </p>

            {/* Toggle Buttons - Development Process */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                🚀 Development Process
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  size="sm"
                  variant={activeDemo === "code-build" ? "default" : "outline"}
                  onClick={() => setActiveDemo("code-build")}
                >
                  Build Flow
                </Button>
                <Button
                  size="sm"
                  variant={activeDemo === "drag-drop" ? "default" : "outline"}
                  onClick={() => setActiveDemo("drag-drop")}
                >
                  Visual Builder
                </Button>
                <Button
                  size="sm"
                  variant={activeDemo === "git-flow" ? "default" : "outline"}
                  onClick={() => setActiveDemo("git-flow")}
                >
                  Git Flow
                </Button>
                <Button
                  size="sm"
                  variant={activeDemo === "component-assembly" ? "default" : "outline"}
                  onClick={() => setActiveDemo("component-assembly")}
                >
                  Component Assembly
                </Button>
                <Button
                  size="sm"
                  variant={activeDemo === "deployment" ? "default" : "outline"}
                  onClick={() => setActiveDemo("deployment")}
                >
                  CI/CD Pipeline
                </Button>
              </div>
            </div>

            {/* Toggle Buttons - Architecture & Backend */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                🏗️ Architecture & Backend
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  size="sm"
                  variant={activeDemo === "api-flow" ? "default" : "outline"}
                  onClick={() => setActiveDemo("api-flow")}
                >
                  API Flow
                </Button>
                <Button
                  size="sm"
                  variant={activeDemo === "microservices" ? "default" : "outline"}
                  onClick={() => setActiveDemo("microservices")}
                >
                  Microservices
                </Button>
                <Button
                  size="sm"
                  variant={activeDemo === "realtime" ? "default" : "outline"}
                  onClick={() => setActiveDemo("realtime")}
                >
                  Real-Time Data
                </Button>
                <Button
                  size="sm"
                  variant={activeDemo === "responsive" ? "default" : "outline"}
                  onClick={() => setActiveDemo("responsive")}
                >
                  Responsive Design
                </Button>
                <Button
                  size="sm"
                  variant={activeDemo === "performance" ? "default" : "outline"}
                  onClick={() => setActiveDemo("performance")}
                >
                  Performance
                </Button>
              </div>
            </div>

            {/* Toggle Buttons - Visual Effects */}
            <div className="mb-12">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                ✨ Visual Effects
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  size="sm"
                  variant={activeDemo === "terminal" ? "default" : "outline"}
                  onClick={() => setActiveDemo("terminal")}
                >
                  Live Terminal
                </Button>
                <Button
                  size="sm"
                  variant={activeDemo === "waves" ? "default" : "outline"}
                  onClick={() => setActiveDemo("waves")}
                >
                  Shader Waves
                </Button>
                <Button
                  size="sm"
                  variant={activeDemo === "grid" ? "default" : "outline"}
                  onClick={() => setActiveDemo("grid")}
                >
                  Blueprint Grid
                </Button>
                <Button
                  size="sm"
                  variant={activeDemo === "tech-icons" ? "default" : "outline"}
                  onClick={() => setActiveDemo("tech-icons")}
                >
                  Tech Stack
                </Button>
                <Button
                  size="sm"
                  variant={activeDemo === "3d-tech" ? "default" : "outline"}
                  onClick={() => setActiveDemo("3d-tech")}
                >
                  3D Scene
                </Button>
                <Button
                  size="sm"
                  variant={activeDemo === "particles" ? "default" : "outline"}
                  onClick={() => setActiveDemo("particles")}
                >
                  Particles
                </Button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-muted/50 backdrop-blur-sm border border-border rounded-lg p-6 max-w-2xl mx-auto">
              {activeDemo === "code-build" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">⌨️ Code Build Flow</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Visualisierung des Build-Prozesses</strong> - Von Code zu Deployment
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ 6 Stages: Code → Compile → Bundle → Build → Deploy → Live</li>
                    <li>✓ Animierte Progress Bars & flowing particles</li>
                    <li>✓ File processing indicators</li>
                    <li>✓ Gradient connections zwischen Stages</li>
                    <li>✓ Zeigt den kompletten Software-Lifecycle!</li>
                  </ul>
                </div>
              )}

              {activeDemo === "drag-drop" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">🧩 Visual Builder</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>No-Code / Low-Code Aesthetic</strong> - Drag & Drop UI
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ Component Library mit Header, Hero, Features, CTA, Footer</li>
                    <li>✓ Auto-Assembly Animation (Website baut sich selbst)</li>
                    <li>✓ Canvas mit Drop-Zone</li>
                    <li>✓ Connection lines zwischen Komponenten</li>
                    <li>✓ Zeigt: "Wir bauen Websites modular & schnell!"</li>
                  </ul>
                </div>
              )}

              {activeDemo === "git-flow" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">🌿 Git Flow Visualization</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Version Control Workflow</strong> - Branches, Merges, Releases
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ 3 Branches: main, develop, feature</li>
                    <li>✓ Animated Commits mit Glow-Effekt</li>
                    <li>✓ Merge-Arrows mit Bezier-Kurven</li>
                    <li>✓ Live Command Terminal</li>
                    <li>✓ Zeigt professionellen Git-Workflow!</li>
                  </ul>
                </div>
              )}

              {activeDemo === "component-assembly" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">⚛️ Component Assembly</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>React Code Editor</strong> - Watch Components Being Built
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ Code-Blocks werden Zeile für Zeile zusammengesetzt</li>
                    <li>✓ VS Code-style Editor mit Syntax Highlighting</li>
                    <li>✓ Blinking Cursor & Typing Animation</li>
                    <li>✓ Live Preview wenn komplett</li>
                    <li>✓ Zeigt: "So entsteht moderner React-Code!"</li>
                  </ul>
                </div>
              )}

              {activeDemo === "deployment" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">🚀 CI/CD Pipeline</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Automated Deployment</strong> - DevOps in Action
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ 5 Stages: Lint → Test → Build → Docker → Deploy</li>
                    <li>✓ Live Terminal Logs für jeden Stage</li>
                    <li>✓ Success/Running/Error Status Indicators</li>
                    <li>✓ Animated Stage connections</li>
                    <li>✓ Zeigt: "Wir arbeiten mit modernen DevOps-Practices!"</li>
                  </ul>
                </div>
              )}

              {activeDemo === "api-flow" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">🔄 API Request Flow</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Backend Communication</strong> - Client ↔ Server ↔ Database
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ Animated request journey (GET, POST, PUT, DELETE)</li>
                    <li>✓ Client → Server → Database visualization</li>
                    <li>✓ Live API logs mit Timestamps</li>
                    <li>✓ Method-specific colors & status tracking</li>
                    <li>✓ Zeigt: "Wir verstehen Backend-Architektur!"</li>
                  </ul>
                </div>
              )}

              {activeDemo === "microservices" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">🏗️ Microservices Architecture</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Distributed Systems</strong> - Modern Software Architecture
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ 7 Services: Gateway, Auth, User, Payment, Notifications...</li>
                    <li>✓ Inter-service communication mit animated messages</li>
                    <li>✓ Service status indicators (Active/Idle/Receiving)</li>
                    <li>✓ Canvas-based connection visualization</li>
                    <li>✓ Zeigt: "Wir bauen skalierbare Systeme!"</li>
                  </ul>
                </div>
              )}

              {activeDemo === "realtime" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">📡 Real-Time Data Flow</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>WebSocket Live Updates</strong> - Instant Data Sync
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ Live analytics chart mit streaming data</li>
                    <li>✓ Real-time event stream (User actions, purchases...)</li>
                    <li>✓ Connected users & messages/sec metrics</li>
                    <li>✓ Animated data points & events</li>
                    <li>✓ Zeigt: "Wir entwickeln Real-Time Apps!"</li>
                  </ul>
                </div>
              )}

              {activeDemo === "responsive" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">📐 Responsive Design</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Multi-Device Preview</strong> - Mobile First Development
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ 3 Devices: iPhone, iPad, MacBook mit echten Breakpoints</li>
                    <li>✓ Layout adapts dynamisch (1/2/3 columns)</li>
                    <li>✓ Animated device transitions mit 3D-Effekt</li>
                    <li>✓ Device frames & notches</li>
                    <li>✓ Zeigt: "Perfekt auf allen Geräten!"</li>
                  </ul>
                </div>
              )}

              {activeDemo === "performance" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">🚀 Performance Optimization</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Lighthouse Scores</strong> - From 45 to 98+ Performance
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ 6 Metrics: Performance, Accessibility, SEO, Load Time...</li>
                    <li>✓ Before/After comparison mit animated transitions</li>
                    <li>✓ 6 Optimization steps (Code splitting, CDN, Compression...)</li>
                    <li>✓ Live optimization process</li>
                    <li>✓ Zeigt: "Wir optimieren für Perfektion!"</li>
                  </ul>
                </div>
              )}

              {activeDemo === "terminal" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">🖥️ Live Terminal Console</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>2025 Modern Dev Aesthetic</strong> - Kein Matrix-Code!
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ Authentisches Terminal-Feel mit echten Commands</li>
                    <li>✓ Animated typing & auto-scroll</li>
                    <li>✓ Blinking cursor & command outputs</li>
                    <li>✓ Subtil & professionell (nicht übertrieben)</li>
                    <li>✓ Zeigt: "Wir sind echte Entwickler!"</li>
                  </ul>
                </div>
              )}

              {activeDemo === "waves" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">🌊 WebGL Shader Waves</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Geometric Pattern Design</strong> - GPU-accelerated
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ Canvas-basierte Shader-ähnliche Effekte</li>
                    <li>✓ Animated hexagonal grid pattern</li>
                    <li>✓ Layered wave animation</li>
                    <li>✓ Performance-optimiert (~60 FPS)</li>
                    <li>✓ Futuristisch & modern (2025 Trend!)</li>
                  </ul>
                </div>
              )}

              {activeDemo === "grid" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">📐 Blueprint Grid</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Technical Drawing Aesthetic</strong> - Architecture-inspired
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ SVG-basiertes Grid-Pattern (klein + groß)</li>
                    <li>✓ Animated connection lines</li>
                    <li>✓ Glowing intersection dots</li>
                    <li>✓ Subtil & elegant</li>
                    <li>✓ Perfect für "Wir planen präzise!"</li>
                  </ul>
                </div>
              )}

              {activeDemo === "tech-icons" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">⚡ Floating Tech Stack</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Tech Stack Visualization</strong> - Interactive Icons
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ React, Next.js, TypeScript, Node, Python...</li>
                    <li>✓ Smooth floating animation</li>
                    <li>✓ Appear & disappear cycles</li>
                    <li>✓ Glassmorphism cards</li>
                    <li>✓ Zeigt Expertise sofort!</li>
                  </ul>
                </div>
              )}

              {activeDemo === "3d-tech" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">🎮 3D Tech Scene</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Code-Themed 3D</strong> - Brackets, Wireframes, Tech
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ Animated 3D code symbols: {"<>"}, {"{}"}</li>
                    <li>✓ Wireframe geometric shapes</li>
                    <li>✓ Metallic & glowing materials</li>
                    <li>✓ Auto-rotating & floating</li>
                    <li>✓ WebGL Three.js magic!</li>
                  </ul>
                </div>
              )}

              {activeDemo === "particles" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">✨ Interactive Particles</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>TSParticles Network</strong> - Classic but polished
                  </p>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>✓ 80+ connected particles</li>
                    <li>✓ Hover repulsion effect</li>
                    <li>✓ Click to add new particles</li>
                    <li>✓ 120 FPS smooth animation</li>
                    <li>✓ Lightweight & performant</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Info Box */}
            <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Hinweis:</strong> Diese Features sind optional und
                können in jede Section der Website integriert werden. Sie sind
                als Showcase-Komponenten verfügbar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Info */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Technische Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 3D Scene */}
              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">3D Scene</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>Packages:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>@react-three/fiber</li>
                    <li>@react-three/drei</li>
                    <li>three</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Verwendung:</strong>
                  </p>
                  <code className="block bg-muted p-2 rounded text-xs">
                    {`import { Scene3D } from "@/components/shared/Scene3D"`}
                  </code>
                </div>
              </div>

              {/* Particles */}
              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Particles</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>Packages:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>@tsparticles/react</li>
                    <li>@tsparticles/engine</li>
                    <li>@tsparticles/slim</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Verwendung:</strong>
                  </p>
                  <code className="block bg-muted p-2 rounded text-xs">
                    {`import { ParticlesBackground } from "@/components/shared/ParticlesBackground"`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
