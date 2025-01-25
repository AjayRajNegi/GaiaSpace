"use client";
import Sun from "./Sun";
import Earth from "./Earth";
import * as THREE from "three";
import Atmosphere from "./Atmosphere";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion, useAnimationFrame } from "motion/react";
import { useSpring, animated } from "@react-spring/three";
import AnimatedCameraLookAt from "./AnimatedCameraLookAt";
import React, { useMemo, useState, useEffect } from "react";

const EarthCanvas: React.FC = () => {
  //To check whether the screen is of small devices
  const isMobile = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 1024;
    }
    return false;
  }, []);

  //Constant to Change the coordinates of camera lookAt
  const initialLookAtTarget: [number, number, number] = isMobile
    ? [1, 6, 1]
    : [1, 7, 1];
  //Constant to Change the scale of mesh
  const initialScaleTarget = isMobile ? 2.5 : 3.5;

  const [lookAtTarget, setLookAtTarget] =
    useState<[number, number, number]>(initialLookAtTarget);
  const [scaleTarget, setScaleTarget] = useState(initialScaleTarget);
  const [isChangingView, setIsChangingView] = useState(false);

  useAnimationFrame(() => {
    if (isChangingView) {
      const scaleRatio = (window.innerWidth / 786) * 0.75;
      const clampedScale = Math.min(Math.max(scaleRatio, 0.75), 1.5);
      setScaleTarget((prev) => (prev !== clampedScale ? clampedScale : prev));
    }
  });
  const handleAnimationComplete = () => {
    handleChangeView();
    console.log("End");
  };
  const handleChangeView = () => {
    setLookAtTarget([0, 0, 0]);
    setIsChangingView(true);
  };

  const { scale } = useSpring({
    scale: scaleTarget,
    config: { duration: 988, tension: 170, friction: 25 },
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
              onAnimationComplete={handleAnimationComplete}
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
              {/* <Stars
                radius={1}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={0.5}
              /> */}
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
