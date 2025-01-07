"use client";
import { useSpring } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import { FC } from "react";

interface AnimatedCameraLookAtProps {
  target: [number, number, number];
}

const AnimatedCameraLookAt: FC<AnimatedCameraLookAtProps> = ({ target }) => {
  const { camera } = useThree();
  const spring = useSpring({
    targetX: target[0],
    targetY: target[1],
    targetZ: target[2],
    config: { duration: 1000 },
  });

  useFrame(() => {
    const x = spring.targetX.get();
    const y = spring.targetY.get();
    const z = spring.targetZ.get();
    camera.lookAt(x, y, z);
    camera.updateProjectionMatrix();
  });

  return null;
};

export default AnimatedCameraLookAt;
