"use client";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";

gsap.registerPlugin(useGSAP);

export default function contact() {
  const [clicked, setClicked] = useState(false);
  const mapRef = useRef(null);

  const officeHandler = () => {
    gsap.to(mapRef.current, {
      scale: 2,
      transformOrigin: "100vw -40px",
      duration: 1,
    });
  };
  const labHandler = () => {
    gsap.to(mapRef.current, {
      scale: 2,
      transformOrigin: "100vw 100px",
      duration: 1,
      ease: "back.inOut",
    });
  };
  const resetHandler = () => {
    gsap.to(mapRef.current, {
      x: 0,
      duration: 1,
      scale: 1,
      ease: "back.inOut",
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-[10vw]">
        <h1 className="mx-auto w-fit text-5xl font-bold text-[#fff]">
          We are Located
          <span className="text-5xl font-bold text-[#6FCBFF]"> in.</span>
        </h1>
        <section className="mx-auto mt-[2vw] w-[90%] overflow-hidden md:w-[85%]">
          <div
            ref={mapRef}
            className="relative h-[400px] w-full origin-[120%_100px] transform overflow-hidden"
            style={{ transform: `${clicked ? "scale(2)" : ""}` }}
          >
            <Image
              src="/Images/contact/map.png"
              objectFit="cover"
              alt="map"
              fill
            />
          </div>
          <article>
            <h2 className="mt-[2vw] text-5xl font-bold text-[#fff]">
              Contact <span className="text-[#6FCBFF]"> Us.</span>
            </h2>
            <div>
              <h4>Registered Office</h4>
              <p>
                V Roy, Garacharma, Sri Vijaya Puram, South Andaman, Andaman &
                Nicobar Island, 744105, India
              </p>
            </div>
            <div></div>
          </article>
        </section>

        <motion.button
          onHoverStart={officeHandler}
          onHoverEnd={resetHandler}
          className="text-4xl text-white"
        >
          Click
        </motion.button>
        <motion.button
          onHoverStart={labHandler}
          onHoverEnd={resetHandler}
          className="ml-[80vw] text-4xl text-white"
        >
          ME
        </motion.button>
      </main>
    </>
  );
}
