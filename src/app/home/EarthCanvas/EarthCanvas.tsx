"use client";
import Sun from "./Sun";
import Earth from "./Earth";
import * as THREE from "three";
import { motion, useAnimationFrame } from "motion/react";
import Atmosphere from "./Atmosphere";
import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import AnimatedCameraLookAt from "./AnimatedCameraLookAt";
import React, { useMemo, Suspense, useState, useEffect } from "react";

const isMobile = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth <= 1024;
  }
  return false;
};

const EarthCanvas: React.FC = () => {
  //Constant to Change the coordinates of camera lookAt
  //const n =6;
  const lookAtTargetCoordinates: [number, number, number] = isMobile()
    ? [1, 6, 1]
    : [1, 7, 1];
  const [lookAtTarget, setLookAtTarget] = useState<[number, number, number]>(
    lookAtTargetCoordinates
  );
  //Constant to Change the scale of mesh
  const meshScale = isMobile() ? 2.5 : 3.5;
  const [scaleTarget, setScaleTarget] = useState(meshScale);
  const [isMobileScreen, setIsMobileScreen] = useState(true);

  useEffect(() => {
    console.log("Hello");
    console.log(isMobile());
    if (isMobile()) {
      setIsMobileScreen(true);
      //console.log(isMobileScreen);
    } else {
      setIsMobileScreen(false);
      //console.log(isMobileScreen);
    }
  });

  const handleChangeView = () => {
    console.log(lookAtTarget);
    setLookAtTarget([0, 0, 0]);
    isMobile() ? setScaleTarget(0.8) : setScaleTarget(1.5);
    console.log(scaleTarget);
    console.log(isMobileScreen);
  };
  // useAnimationFrame(() => {
  //   //console.log("hello");
  //   //console.log(window.innerWidth);
  // });

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
      <div className="canvasMain">
        <div className="Hello">
          <div className="testing">
            <motion.div
              initial={{ x: -200, opacity: 1 }}
              animate={{ x: 200, opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              onAnimationStart={() => console.log("Start animation ")}
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
