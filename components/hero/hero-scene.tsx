"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Mesh } from "three";
import { Color } from "three";
import { useMousePosition } from "@/hooks/use-mouse-position";

function CoreGeometry() {
  const meshRef = useRef<Mesh | null>(null);
  const accent = useMemo(() => new Color("#31f6d4"), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.18;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.24;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.45} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.55, 2]} />
        <meshStandardMaterial
          color={accent}
          roughness={0.2}
          metalness={0.82}
          wireframe
          emissive="#0f766e"
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

function ReactiveRig() {
  const mouse = useMousePosition();

  useFrame(({ camera }) => {
    const x = (mouse.x / window.innerWidth - 0.5) * 0.5;
    const y = (mouse.y / window.innerHeight - 0.5) * 0.35;
    camera.position.x += (x - camera.position.x) * 0.04;
    camera.position.y += (-y - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.7]} gl={{ preserveDrawingBuffer: true }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.62} />
        <pointLight position={[4, 4, 4]} intensity={24} color="#31f6d4" />
        <pointLight position={[-4, -2, 3]} intensity={12} color="#ff9b7d" />
        <Stars radius={70} depth={35} count={1200} factor={3} fade speed={0.35} />
        <CoreGeometry />
        <ReactiveRig />
      </Canvas>
    </div>
  );
}
