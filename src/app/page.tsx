"use client";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import TransitionLinks from "../components/TransitionLinks";
import { motion } from "motion/react";

export default function LoadingScreen() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      const preloadImages = ['/static/earth/day.webp', '/static/earth/night.webp', '/static/earth/specularClouds.webp'];
      preloadImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    `,
        }}
      />
      <div className="h-screen w-full text-white flex just  ify-center items-center flex-col load">
        {/* <Image
          src="/SPACE.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={75}
          priority
          className="z-10"
        /> */}

        <div className="flex justify-center items-center flex-col">
          <div className="loader-container">
            <svg>
              <text
                x="50% "
                y="50%"
                dy=".32em"
                textAnchor="middle"
                className="text-body text-[15vw] md:text-[10vw] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-8px]"
              >
                GaiaSpace
              </text>
              <text
                x="50% "
                y="50%"
                dy=".32em"
                dx="2.6em"
                textAnchor="middle"
                className="text-body text-[15vw] md:text-[10vw] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-8px]"
              >
                .
              </text>
            </svg>
            <div className=" flex justify-end mr-[5vw] md:mr-[18vw] mt-1 md:mt-6">
              <TransitionLinks
                href="/home"
                prefetch={true}
                className="border-orange-400 border-solid"
              >
                <motion.div
                  className="bg-black flex items-center justify-center"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <button className="px-4 md:px-6  py-1 md:py-2 font-medium text-sm md:text-lg bg-indigo-900 text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                    Explore
                  </button>
                </motion.div>
              </TransitionLinks>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
