"use client";

import { motion } from "motion/react";
import { ReactNode, useState } from "react";

type HoverCardProps = {
  title: string;
  children: ReactNode;
};

export default function HoverCard({ title, children }: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`h-[500px] w-[400px] rounded-[20px] bg-[#101010] transition-all duration-300 ${
          isHovered ? "ellipticalBackground" : ""
        }`}
      >
        <h2 className="mx-auto w-fit pt-[70px] text-[2.5rem] font-[600] text-[#6FCBFF]">
          {title}
        </h2>
        <p className="mx-10 mt-[50px] text-center text-xl leading-6">
          {children}
        </p>
      </motion.div>
    </>
  );
}
