"use client";
import gsap from "gsap";
import Sun from "./Sun";
import Earth from "./Earth";
import * as THREE from "three";
import Atmosphere from "./Atmosphere";
import { useEffect, useMemo, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

export default function EarthCanvas() {
  const canvasRef = useRef(null);
  const isMobile = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return false;
  }, []);

  useEffect(() => {
    gsap.to(canvasRef.current, {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".third-section",
        start: "bottom bottom",
        end: "+=100",
        scrub: true,
      },
    });
  }, []);

  const initialScaleTarget = isMobile ? 1 : 1.5;
  const sunDirection = useMemo(
    () => new THREE.Vector3(0, 0, 1).normalize(),
    [],
  );

  return (
    <div
      ref={canvasRef}
      className="fixed left-0 top-0 h-screen w-full opacity-100 transition-opacity duration-500"
    >
      <Canvas camera={{ position: [15, 0, 0], fov: 25 }}>
        <ScrollControls pages={0} damping={0.5}>
          <mesh scale={initialScaleTarget}>
            {isMobile ? <CameraControllerMobile /> : <CameraController />}
            <Earth sunDirection={sunDirection} />
            <Sun sunDirection={sunDirection} />
            <Atmosphere sunDirection={sunDirection} />
          </mesh>
        </ScrollControls>
      </Canvas>
    </div>
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

function CameraControllerMobile() {
  const { scene, camera } = useThree();

  useEffect(() => {
    scene.position.set(7.5, -2.5, 0);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom ",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    });

    timeline.to(
      scene.position,
      {
        x: -7.5,
        y: 0,
        z: 0,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => camera.updateProjectionMatrix(),
      },
      "<",
    );
    timeline.to(
      scene.rotation,
      {
        x: 6,
        y: 0,
        z: 0,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => camera.updateProjectionMatrix(),
      },
      "<",
    );

    // const timeline2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".third-section",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //   },
    // });

    // timeline2.to(
    //   scene.position,
    //   {
    //     x: -0.5,
    //     y: 0,
    //     z: 1,
    //     duration: 2,
    //     ease: "power2.inOut",
    //     onUpdate: () => camera.updateProjectionMatrix(),
    //   },
    //   "<",
    // );

    // timeline2.to(
    //   scene.rotation,
    //   {
    //     x: 0,
    //     y: 0,
    //     z: 0,
    //     duration: 2,
    //     ease: "power2.inOut",
    //     onUpdate: () => camera.updateProjectionMatrix(),
    //   },
    //   "<",
    // );
  }, [scene, camera]);
  return null;
}
