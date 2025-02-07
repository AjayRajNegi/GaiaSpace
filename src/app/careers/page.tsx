"use client";
import GradientText from "@/src/components/GradientText";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import "../globals.css";
import Fa from "../../components/Fa";
import { motion } from "motion/react";

export default function Careers() {
  const [value, setValue] = useState(0);
  const clickHandler = () => {
    setValue(2);
  };
  const clickHandler1 = () => {
    setValue(1);
    console.log("click");
    console.log(value);
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white">
        <main className="relative h-[100vh] w-full overflow-hidden">
          <motion.h1
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
            className="relative z-10 mx-[4vw] pt-[30vh] text-center text-[2.75rem] font-bold leading-[0.9] sm:text-5xl md:pt-[200px] md:text-5xl lg:text-5xl"
          >
            <span className="block gap-[1vw] md:flex">
              Let's Shape
              <GradientText className="justify-center font-bold">
                The Future Of
              </GradientText>
            </span>

            <span className="block gap-[1vw] md:flex">
              <GradientText className="justify-center font-bold">
                Sustainable
              </GradientText>
              Space Propulsion
            </span>
          </motion.h1>
          <motion.h4
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
            className="relative z-30 ml-[4vw] mr-0 mt-[100px] w-[90%] text-center leading-[1] md:ml-auto md:mr-[4vw] md:mt-[50px] md:w-[500px] md:text-left"
          >
            We're looking for passionate, forward-thinking individuals to join
            our mission of engineering the future of space propulsion. At Gaia
            Space, your work will directly impact how we preserve and extend the
            life of critical spacecraft.
          </motion.h4>
          <div className="absolute bottom-0 left-0 right-0 top-[50%] h-[55vh] w-full md:top-0 md:h-full">
            <Image
              fill
              className="object-cover"
              src="/Images/careersMainImage.avif"
              alt="careers-background-image"
            />
          </div>
        </main>
        <section className="mt-[4vw] h-[100vh] w-full bg-black">
          <h2 className="flex justify-center gap-[1vw]">
            <GradientText className="text-5xl font-semibold">
              Internship
            </GradientText>
            <span className="text-5xl font-semibold">and Co-Op </span>
          </h2>
          <article className="mx-auto mt-[4vw] w-[85%] rounded-[2rem] border-[1px] border-gray-600">
            <div className="mmmmm">
              <h2 onClick={clickHandler1}>Propulsion Engineering</h2>
              <div className={`${value === 1 ? "fly ml-5" : "ml-5 hidden"}`}>
                Electrical Propulsion
              </div>
            </div>
            <div>
              <h2 onClick={clickHandler}>Satellite Engineering</h2>
              <div className="ml-5">Structural Engineering</div>
            </div>
            <div>
              <h2 onClick={clickHandler}>General Internship</h2>
              <div className="ml-5">General Intern Program</div>
            </div>
          </article>
        </section>
        <section className="w-full"></section>
        <main>
          <section></section>
          <section></section>
        </main>
      </div>
    </>
  );
}
