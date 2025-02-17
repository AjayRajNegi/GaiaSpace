"use client";
import "../globals.css";
import Image from "next/image";
import { motion } from "motion/react";
import Navbar from "@/src/components/Navbar";
import GradientText from "@/src/components/GradientText";
import { AccordianCareer } from "@/src/components/AccordianCareer";

const roles = [
  { id: 1, desc: "Passionate about space technology." },
  { id: 2, desc: "Commited to environmental stability." },
  { id: 3, desc: "Innovative problem-solvers." },
  { id: 4, desc: "Collaborative team players." },
  { id: 5, desc: "Driven to make a lasting impact." },
];

export default function Careers() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white">
        {/* Hero Section */}
        <main className="relative h-[100vh] w-full overflow-hidden">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.6, 0.05, 0.01, 0.9],
              delay: 0.5,
            }}
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
            transition={{
              duration: 1,
              ease: [0.6, 0.05, 0.01, 0.9],
              delay: 1,
            }}
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

        {/* Internship Section */}
        <section className="mt-[4vw] w-full bg-black p-10">
          <h2 className="flex flex-col justify-center gap-[1vw] md:flex-row">
            <GradientText className="mx-auto text-5xl font-semibold md:mx-0">
              Internship
            </GradientText>
            <span className="mx-auto text-5xl font-semibold md:mx-0">
              and Co-Op
            </span>
          </h2>

          <article className="mx-auto ml-[2vw] mr-[2vw] mt-[4vw] rounded-[2rem] border border-gray-600">
            <AccordianCareer />
          </article>
        </section>

        {/* Journey Section */}
        <article className="flex flex-col justify-between gap-5 p-10 pt-[100px] lg:flex-row">
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
            className="ml-0 max-w-[100%] lg:ml-[3vw] lg:max-w-[40%]"
          >
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
          </motion.section>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, 0.01, 0.9],
              delay: 0.2,
            }}
            className="relative mx-auto max-w-[100%] lg:mr-[3vw] lg:max-w-[60%]"
          >
            <Image
              src="/Images/CareersPageJourneySection.png"
              height={300}
              width={600}
              alt="Journey"
            />
          </motion.div>
        </article>

        {/* Roles Section */}
        <article className="mx-auto mb-[200px] flex w-[90%] flex-col overflow-hidden pt-[100px] lg:flex-row">
          <section className="flex w-[100%] flex-col items-center lg:w-[50%]">
            <motion.h2
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
              className="ml-5 text-5xl font-semibold tracking-tight md:ml-0"
            >
              Who <span className="text-[#7D63A4]">We're Looking</span> For?
            </motion.h2>
            <div className="mt-16">
              {roles.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.6, 0.05, 0.01, 0.9],
                    delay: index * 0.1,
                  }}
                  className="mb-10 flex items-center gap-8"
                >
                  <Image
                    src="/./Icon/PurpleArrowHead.png"
                    height={30}
                    width={30}
                    alt="ArrowHead"
                  />
                  {item.desc}
                </motion.li>
              ))}
            </div>
          </section>
          <section className="flex w-[100%] flex-col items-center lg:w-[50%]">
            <div className="mt-[100px] max-w-[80%] md:mt-[200px] lg:max-w-[60%]">
              <motion.span
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, 0.01, 0.9],
                }}
              >
                We're always looking for exceptional talent. Send your resume
                and with a brief introduction about yourself to <br />
                careers@gmail.com
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, 0.01, 0.9],
                  delay: 0.2,
                }}
                className="my-10 flex items-center justify-between"
              >
                <div className="w-[40%] border-t-[1px] border-[#7D63A4]"></div>
                <span className="text-3xl text-[#7D63A4]">OR</span>
                <div className="w-[40%] border-t-[1px] border-[#7D63A4]"></div>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, 0.01, 0.9],
                  delay: 0.4,
                }}
              >
                Join our exclusive
                <span className="ml-[4px] text-[#7D63A4]">
                  training program
                </span>
                , designed to align your skills and expertise with the rigorous
                standards of the global space industry.
              </motion.span>
            </div>

            <h2 className="mt-10 hidden text-4xl font-semibold md:block">
              Dont See Your <br /> Perfect Role?
            </h2>
          </section>
        </article>
      </div>
    </>
  );
}
