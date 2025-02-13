"use client";
import "../globals.css";
import Image from "next/image";
import { motion } from "motion/react";
import Navbar from "@/src/components/Navbar";
import GradientText from "@/src/components/GradientText";
import { AccordianCareer } from "@/src/components/AccordianCareer";

export default function Careers() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white">
        <main className="relative h-[100vh] w-full overflow-hidden">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
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

        <section className="mt-[4vw] w-full bg-black p-10">
          <h2 className="flex justify-center gap-[1vw]">
            <GradientText className="text-5xl font-semibold">
              Internship
            </GradientText>
            <span className="text-5xl font-semibold">and Co-Op </span>
          </h2>

          <article className="mx-auto ml-[2vw] mr-[2vw] mt-[4vw] rounded-[2rem] border border-gray-600">
            <AccordianCareer />
          </article>
        </section>

        <article className="flex flex-col justify-between gap-5 p-10 pt-[100px] lg:flex-row">
          <section className="ml-0 max-w-[100%] lg:ml-[3vw] lg:max-w-[40%]">
            <h2 className="mb-5 text-4xl font-bold">
              Embark On Your <br /> Journey
            </h2>
            <p>
              At Gaiaspace, your growth is our priority. Here, you’ll find a
              place where collaboration sparks innovation, ideas turn into
              breakthroughs, and your contributions truly matter. Join a vibrant
              team committed to shaping the future—together, we’ll reach new
              heights.
            </p>
          </section>
          <Image
            src="/Images/CareersPageJourneySection.png"
            height={500}
            width={600}
            alt="asd"
            className="mx-auto max-w-[100%] object-cover lg:mr-[3vw] lg:max-w-[60%]"
          ></Image>
        </article>
        <article className="flex w-[90%] flex-col pt-[100px] lg:flex-row">
          <section className="flex max-w-[100%] flex-col items-center lg:max-w-[50%]">
            <h2 className="ml-5 text-5xl font-semibold tracking-tight md:ml-0">
              Who We're Looking For?
            </h2>
            <div className="mt-16 max-w-[80%] lg:max-w-[60%]">
              <span>
                We're always looking for exceptional talent. Send your resume
                and with a brief introduction about yourself to <br />
                careers@gmail.com
              </span>
              <div className="my-10 flex items-center justify-between">
                <div className="w-[40%] border-t-2 border-white"></div>
                <span className="text-3xl">OR</span>
                <div className="w-[40%] border-t-2 border-white"></div>
              </div>
              <span>
                Join our exclusive training program, designed to align your
                skills and expertise with the rigorous standards of the global
                space industry.
              </span>
            </div>
          </section>
          <section className="max-w-[100%] lg:max-w-[50%]">
            <div></div>
            <h2>
              Dont See Your <br /> Perfect Role?
            </h2>
          </section>
        </article>
      </div>
    </>
  );
}
