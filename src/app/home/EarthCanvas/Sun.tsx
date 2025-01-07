"use client";
import React from "react";
import * as THREE from "three";

interface SunProps {
  sunDirection: THREE.Vector3;
}
const Sun: React.FC<SunProps> = ({ sunDirection }) => (
  <mesh position={sunDirection.clone().multiplyScalar(1)}>
    <icosahedronGeometry args={[0.1, 2]} />
    <meshBasicMaterial color="yellow" />
  </mesh>
);

export default Sun;
