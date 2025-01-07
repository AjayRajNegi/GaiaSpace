"use client";
import React from "react";
import * as THREE from "three";

const Sun = ({ sunDirection }) => (
  <mesh position={sunDirection.clone().multiplyScalar(1)}>
    <icosahedronGeometry args={[0.1, 2]} />
    <meshBasicMaterial color="yellow" />
  </mesh>
);

export default Sun;
