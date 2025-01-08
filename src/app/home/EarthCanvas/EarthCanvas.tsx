"use client";
import Sun from "./Sun";
import Earth from "./Earth";
import * as THREE from "three";
import { motion } from "motion/react";
import Atmosphere from "./Atmosphere";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import AnimatedCameraLookAt from "./AnimatedCameraLookAt";
import React, { useMemo, Suspense, useState } from "react";
import Head from "next/head";
import Script from "next/script";

const EarthCanvas: React.FC = () => {
  const [lookAtTarget, setLookAtTarget] = useState<[number, number, number]>([
    1, 7, 1,
  ]);
  const [scaleTarget, setScaleTarget] = useState(3.5);

  const handleChangeView = () => {
    setLookAtTarget([0, 0, 0]);
    setScaleTarget(1.5);
  };

  const { scale } = useSpring({
    scale: scaleTarget,
    config: { duration: 1000, tension: 170, friction: 25 },
  });

  const sunDirection = useMemo(
    () => new THREE.Vector3(0, 0, 1).normalize(),
    []
  );

  return (
    <>
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            const linkDay = document.createElement('link');
            linkDay.rel = 'preload';
            linkDay.as = 'image';
            linkDay.href = '/static/earth/day.webp';
            document.head.appendChild(linkDay);

            const linkNight = document.createElement('link');
            linkNight.rel = 'preload';
            linkNight.as = 'image';
            linkNight.href = '/static/earth/night.webp';
            document.head.appendChild(linkNight);

            const linkClouds = document.createElement('link');
            linkClouds.rel = 'preload';
            linkClouds.as = 'image';
            linkClouds.href = '/static/earth/specularClouds.webp';
            document.head.appendChild(linkClouds);
          `,
        }}
      />
      <div className="canvasMain">
        <div className="Hello">
          <div className="testing">
            <motion.div
              initial={{ x: -200, opacity: 1 }}
              animate={{ x: 200, opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              onAnimationStart={() => console.log("Start asdf ")}
              onAnimationComplete={() => {
                handleChangeView();
                console.log("End");
              }}
              className="loading"
            >
              Testing
            </motion.div>
          </div>
        </div>
        <div className="canva">
          <Canvas camera={{ position: [12, 5, 10], fov: 25 }}>
            <AnimatedCameraLookAt target={lookAtTarget} />
            <animated.mesh scale={scale}>
              <Stars
                radius={1}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={0.5}
              />
              <Earth sunDirection={sunDirection} />
              <Sun sunDirection={sunDirection} />
              <Atmosphere sunDirection={sunDirection} />
            </animated.mesh>
          </Canvas>
        </div>
        <div className="Hello">Hello</div>
      </div>
    </>
  );
};

export default EarthCanvas;
