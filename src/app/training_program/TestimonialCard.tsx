"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type TestimonialCardProps = {
  desc: string;
  name: string;
  title: string;
};

const backgroundVariants = {
  initial: {
    background:
      "linear-gradient(45deg,rgba(0, 0, 0, 1) 0%, rgba(5, 5, 6, 1) 50%, rgba(0, 0, 0, 1) 100%)",
  },
  hover: {
    background:
      "linear-gradient(45deg, rgba(33, 31, 31, 1) 0%, rgba(5, 5, 6, 1) 50%, rgba(33, 31, 31, 1) 100%)",
    transition: {
      duration: 0.5,
    },
  },
};

export default function TestimonialCard({
  desc,
  name,
  title,
}: TestimonialCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className="min-h-[250px] w-[330px] rounded-3xl border-2 border-[#898989]/30 p-4 text-[#fff] transition-transform duration-500 hover:scale-125"
      variants={backgroundVariants}
      initial="initial"
      animate={hover ? "hover" : "initial"}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <Image src="/Icon/cm.png" width={40} height={30} alt="quote" />
      <p className="pt-5 text-lg">&quot;{desc}&quot;</p>
      <div className="flex items-center gap-2 pt-10">
        <div className="text-[#D9D9D9]">
          <p>{name}</p>
          <p className="-mt-1">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}
