"use client";
import gsap from "gsap";
import Sun from "./Sun";
import Earth from "./Earth";
import * as THREE from "three";
import Atmosphere from "./Atmosphere";
import { useEffect, useMemo } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

export default function Test() {
  const sunDirection = useMemo(
    () => new THREE.Vector3(0, 0, 1).normalize(),
    [],
  );

  return (
    <Canvas camera={{ position: [15, 0, 0], fov: 25 }}>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        // enableRotate={false}
      />
      <ScrollControls pages={0} damping={0.5}>
        <mesh scale={1.5}>
          <CameraController />
          <Earth sunDirection={sunDirection} />
          <Sun sunDirection={sunDirection} />
          <Atmosphere sunDirection={sunDirection} />
        </mesh>
      </ScrollControls>
    </Canvas>
  );
}

function CameraController() {
  const { scene, camera } = useThree();

  useEffect(() => {
    scene.position.set(7.5, -3, 0);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    });

    timeline.to(
      scene.position,
      {
        x: 7.5,
        y: -3,
        z: -3,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => camera.updateProjectionMatrix(),
      },
      "<",
    );

    timeline.to(
      scene.rotation,
      {
        x: 3,
        y: 0,
        z: 0,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => camera.updateProjectionMatrix(),
      },
      "<",
    );

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".third-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    });

    timeline2.to(
      scene.position,
      {
        x: 7.5,
        y: 0,
        z: -4,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => camera.updateProjectionMatrix(),
      },
      "<",
    );

    timeline2.to(
      scene.rotation,
      {
        x: 1.5,
        y: 0,
        z: 0,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => camera.updateProjectionMatrix(),
      },
      "<",
    );
  }, [camera, scene]);

  return null;
}
