"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Animated Bracket "<>"
function BracketLeft() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center position={[-2, 0.5, 0]}>
        <Text3D
          ref={meshRef}
          font="/fonts/inter_bold.json"
          size={0.8}
          height={0.2}
        >
          {"<"}
          <meshStandardMaterial
            color="#6366f1"
            metalness={0.8}
            roughness={0.2}
            emissive="#6366f1"
            emissiveIntensity={0.3}
          />
        </Text3D>
      </Center>
    </Float>
  );
}

function BracketRight() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center position={[2, 0.5, 0]}>
        <Text3D
          ref={meshRef}
          font="/fonts/inter_bold.json"
          size={0.8}
          height={0.2}
        >
          {">"}
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.8}
            roughness={0.2}
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
          />
        </Text3D>
      </Center>
    </Float>
  );
}

// Animated Slash "/"
function Slash() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <Center position={[0, -0.5, 0.5]}>
        <Text3D
          ref={meshRef}
          font="/fonts/inter_bold.json"
          size={0.7}
          height={0.2}
        >
          {"/"}
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.8}
            roughness={0.2}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </Text3D>
      </Center>
    </Float>
  );
}

// Wireframe Cube (Tech aesthetic)
function WireframeCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={meshRef} position={[0, 1.5, -1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

// Torus Knot (Abstract tech)
function TechTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[-1.5, -1, -0.5]}>
        <torusKnotGeometry args={[0.4, 0.12, 100, 16]} />
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.9}
          roughness={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export function Scene3DTech() {
  return (
    <div className="absolute inset-0 z-0 opacity-50">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <pointLight position={[0, 0, 5]} intensity={1} color="#6366f1" />

        <WireframeCube />
        <TechTorus />

        {/* Fallback simple text if font not loaded */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Center position={[-2, 0.5, 0]}>
            <mesh>
              <boxGeometry args={[0.5, 1, 0.2]} />
              <meshStandardMaterial
                color="#6366f1"
                metalness={0.8}
                roughness={0.2}
                emissive="#6366f1"
                emissiveIntensity={0.3}
              />
            </mesh>
          </Center>
        </Float>

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Center position={[2, 0.5, 0]}>
            <mesh>
              <boxGeometry args={[0.5, 1, 0.2]} />
              <meshStandardMaterial
                color="#8b5cf6"
                metalness={0.8}
                roughness={0.2}
                emissive="#8b5cf6"
                emissiveIntensity={0.3}
              />
            </mesh>
          </Center>
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
