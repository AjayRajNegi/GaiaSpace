"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Star() {
  return (
    <Canvas>
      <Stars
        radius={1}
        depth={50}
        count={1500}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />
    </Canvas>
  );
}
