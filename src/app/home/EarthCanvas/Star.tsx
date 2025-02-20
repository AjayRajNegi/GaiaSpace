"use client";
import { useEffect, useRef } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Star() {
  const canvasRef = useRef(null);

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

  return (
    <div
      ref={canvasRef}
      className="fixed left-0 top-0 h-screen w-full opacity-100 transition-opacity duration-500"
    >
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
    </div>
  );
}
