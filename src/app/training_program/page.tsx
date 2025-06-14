"use client";
import Navbar from "@/src/components/Navbar";
import TextTyping from "../about/TextTyping";
import { AnimatePresence } from "motion/react";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

export default function TrainingPrograms() {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <section className="pt-[20vw] text-[#fff]">
          <h1 className="w-fit pl-[10vw] text-5xl font-semibold">
            <span className="text-[#6FCBFF]">Engineering</span> Thrust <br />
            Enabling <span className="text-[#6FCBFF]">Exploration</span>
          </h1>
          <h4 className="mx-auto w-fit pt-[10vw] text-[1.8rem]">
            About the Training Program
          </h4>
        </section>
        <section
          className="relative mx-auto w-[100%] px-[10%]"
          // style={{
          //   backgroundImage: `url('/Images/training/GlobeEarthImage.png')`,
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <div className="absolute -top-[5%] right-0 -z-20 h-[120%] w-[65%]">
            <Image
              src="/Images/training/GlobeEarthImage.png"
              alt="Globe"
              fill
            />
          </div>
          <TextTyping
            className="mt-[2vw] max-w-full text-center text-[1.7rem] leading-[2.3rem] text-[#fff]"
            desc="ITSP (Industrial Training for Space Propulsion) is a specialized training program designed to equip engineers, researchers, and STEM professionals with industry-grade expertise in space propulsion technologies. Focused on hybrid rocket propulsion systems, ITSP blends theoretical knowledge with hands-on experience in engine design, manufacturing, testing, and system integration."
          />
          <TextTyping
            className="mt-[2vw] max-w-full text-center text-[1.7rem] leading-[2.3rem] text-[#fff]"
            desc="Enrolled candidates gains mission-ready skills aligned with aerospace industry standards, ensuring they are prepared for real-world applications in rocket propulsion, spacecraft engineering, and advanced thrust systems."
          />

          <h2 className="mt-[100px] text-4xl text-[#fff]">
            Why <span className="text-[#6FCBFF]">ITSP?</span>
          </h2>
          <TextTyping
            className="mt-[50px] max-w-full text-center text-[1.7rem] leading-[2.3rem] text-[#fff]"
            desc="This program combining hands-on projects, real-world simulations, and expert-led sessions. With a focus on design, manufacturing, and system integration, the program bridges academia and industry, equipping candidates with cutting-edge skills and career-ready expertise in space propulsion."
          />

          <div className="mt-[100px] flex justify-center gap-[200px]">
            <div className="w-fit border-[1px] border-white px-16 py-1 text-[#fff]">
              Brochure
            </div>
            <div className="w-fit border-[1px] border-white px-16 py-1 text-[#fff]">
              Register
            </div>
          </div>

          <h2 className="mx-auto mt-[100px] w-fit text-5xl text-[1.7rem] font-bold leading-[2.3rem] text-[#fff]">
            Our Previous Training Session
          </h2>
          <h4 className="mx-auto mt-[100px] w-[50%] text-center font-roboto text-3xl text-[1.7rem] font-thin leading-[2.3rem] text-[#fff]">
            Engineering
            <span className="text-[#6FCBFF]">
              {" "}
              Tomorrow's Space Scientists{" "}
            </span>
            Through Knowledge, Training, and Innovation
          </h4>

          <h4 className="mx-auto mt-[50px] w-fit font-roboto text-3xl text-[1.7rem] font-thin leading-[2.3rem] text-[#fff]">
            Hear it from our students.
          </h4>
          <div className="mt-[100px] flex flex-col items-center justify-around gap-5 px-[4vw] md:flex-row md:items-end md:gap-0">
            <TestimonialCard
              desc="Investor connections! Found the perfect match, thanks for
          simplifying the search"
              name="Sarah Jones,"
              title="GreenTech Solutions"
            />
            <TestimonialCard
              desc="High-quality startups, curated perfectly.  Saves me time & keeps me ahead of the innovation curve"
              name="Sarah Jones,"
              title="GreenTech Solutions"
            />{" "}
            <TestimonialCard
              desc="More than just a directory.  Found resources, advice, and even co-founders here!"
              name="Sarah Jones,"
              title="GreenTech Solutions"
            />
          </div>
        </section>
        <section className="w-full">
          <article
            className="flex h-[500px] w-full items-center justify-end px-[10%]"
            style={{
              backgroundImage: `url('/Images/training/ElevateDiscovery.png'
            )`,
              backgroundSize: "cover",
            }}
          >
            <div className="mt-16">
              <h3 className="font-roboto text-3xl font-thin text-[#fff]">
                Be a Pioneer
              </h3>
              <h1 className="mt-5 text-5xl font-bold text-[#fff]">
                Elevate Discovery, <br /> Transform Our World
              </h1>
            </div>
          </article>
          <article className="mx-[10%] flex justify-between text-[#fff]">
            <h2 className="text-4xl font-bold text-[#fff]">
              Required further <br />
              assistance, reach out to us!
            </h2>
            <div className="w-[30%]">
              <p>
                React out to our training coordinator directly to understand the
                program, and address your quires one to one.
              </p>
              <button>Get in Touch</button>
            </div>
          </article>
        </section>
      </AnimatePresence>
    </>
  );
}
