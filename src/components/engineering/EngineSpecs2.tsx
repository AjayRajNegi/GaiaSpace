"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";

export default function EngineSpecs2() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <section className="text-secondary px-4 md:px-6">
        {/* Header */}
        <div className="text-secondary text-center font-thin">
          <h1 className="my-4 text-[28px] leading-tight tracking-tight md:text-[40px]">
            <span className="text-primary">Precision</span> Thrust, Efficient
            <span className="text-primary"> Combustion</span>
          </h1>
          <p className="text-p text-center leading-5 tracking-tight text-[#acacad] md:text-[18px]">
            Engineering Hybrid Propulsion Solutions for Tomorrow&apos;s Missions
          </p>
          <h6 className="mt-10 text-[18px] text-[600] md:mt-14">
            Engine Specification
          </h6>
        </div>

        {/* Specifications */}
        <div className="mx-auto mt-10 flex h-auto max-w-6xl flex-col items-center rounded-3xl border border-x-0 border-[#646464] bg-[#0c0c0c] p-5 md:mt-14 md:h-[500px] md:flex-row md:p-0">
          {/* Engine Image */}
          <div className="relative h-[340px] w-full shrink-0 md:h-[400px] md:w-[35%]">
            <Image
              src="/images/engineering/Engine.png"
              alt="Engine"
              fill
              objectFit="contain"
            />
          </div>

          {/* Content */}
          <div className="flex h-auto w-full flex-col px-4 pb-6 font-thin text-[#acacad] md:h-[80%] md:pr-[2%] md:pb-0 md:pl-0">
            {/* Toggle Buttons */}
            <div className="text-p mb-6 flex items-center gap-4 md:mb-10 md:text-[18px]">
              <button
                onClick={() => setActiveTab("overview")}
                className={activeTab === "overview" ? "text-primary" : ""}
              >
                Overview
              </button>
              <div className="bg-secondary h-4.5 w-[2px]" />
              <button
                onClick={() => setActiveTab("technical")}
                className={activeTab === "technical" ? "text-primary" : ""}
              >
                Technical Specification
              </button>
              <div className="bg-secondary h-4.5 w-[2px]" />
              <button
                onClick={() => setActiveTab("structural")}
                className={activeTab === "structural" ? "text-primary" : ""}
              >
                Structural & System Design
              </button>
            </div>

            <div className="relative min-h-[500px] flex-1 justify-center overflow-hidden md:min-h-0">
              {/* Overview panel */}
              <div
                className={`absolute inset-0 flex flex-col justify-evenly transition-opacity duration-500 ${
                  activeTab === "overview"
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <p className="md:text-p text-[15px] text-[#d5d5d5]">
                  Our Hybrid Rocket Motor designs are optimised for
                  manufacturing while delivering full performance.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-2">
                  <div>
                    <h6 className="text-primary text-[17px] font-normal md:text-[18px]">
                      Surge Capability
                    </h6>
                    <p className="md:text-p text-[15px] text-[#d5d5d5] md:mt-3">
                      Rapidly scale motor production leveraging common
                      manufacturing production equipment and minimal tooling.
                    </p>
                  </div>
                  <div>
                    <h6 className="text-primary text-[17px] font-normal md:text-[18px]">
                      Adaptability
                    </h6>
                    <p className="md:text-p text-[15px] text-[#d5d5d5] md:mt-3">
                      Easy changeover to different casings and sounding launch
                      vehicle frame.
                    </p>
                  </div>
                  <div className="mt-2 sm:col-span-2 md:mt-4">
                    <h6 className="text-primary text-[17px] font-normal md:text-[18px]">
                      Lower Cost & Fewer Parts
                    </h6>
                    <p className="md:text-p text-[15px] text-[#d5d5d5] md:mt-3">
                      Our processes have simplified the complex and labour
                      intensive process of rocket motor manufacturing, reducing
                      both part count and assembly tasks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Specification panel */}
              <div
                className={`absolute inset-0 overflow-y-auto transition-opacity duration-500 ${
                  activeTab === "technical"
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="item-1"
                >
                  <AccordionItem value="item-1" className="pb-5">
                    <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary mb-2 border-l-2 pb-2 pl-3 text-base leading-snug font-thin md:text-lg">
                      Advancing Core Propulsion Technologies
                    </AccordionTrigger>
                    <AccordionContent className="text-secondary flex flex-col gap-4 text-sm font-light text-balance">
                      <p>
                        We design and deliver state-of-the-art ABEP, electric,
                        and green propellant chemical thrusters to extend
                        satellite operational lifetimes, achieve very low
                        operating altitudes, enable precise station-keeping, and
                        support complex orbital transfers, all while drastically
                        reducing propellant mass. Leveraging non-toxic,
                        high-performance propellants to minimise environmental
                        impact, simplify ground handling, and enhance mission
                        flexibility.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="pb-5">
                    <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary mb-2 border-l-2 pb-2 pl-3 text-base leading-snug font-thin md:text-lg">
                      Enhancing Orbital Agility
                    </AccordionTrigger>
                    <AccordionContent className="text-secondary flex flex-col gap-4 text-sm font-thin text-balance">
                      <p>
                        By integrating advanced guidance, navigation, and
                        control (GNC) algorithms, our propulsion systems enable
                        autonomous maneuvering and collision avoidance, giving
                        satellites and servicing vehicles the agility to adapt
                        to changing mission needs and orbital debris threats.
                        Precision thrust control and fine-grained modulation
                        further ensure reliable orbit maintenance, rapid
                        repositioning, and seamless support for proximity
                        operations and in-orbit servicing.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="pb-5">
                    <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary mb-2 border-l-2 pb-2 pl-3 text-base leading-snug font-thin md:text-lg">
                      Extending Reach Beyond Earth Orbit
                    </AccordionTrigger>
                    <AccordionContent className="text-secondary flex flex-col gap-4 text-sm font-thin text-balance">
                      <p>
                        High thrust and specific impulse solutions combine
                        scalable propulsion modules, mission adaptable
                        architectures to support deep space missions including
                        lunar and cislunar transfer while optimized power
                        processing units and advanced thermal management systems
                        ensure sustained, reliable performance even in the most
                        challenging environments.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Structural & System Design panel */}
              <div
                className={`absolute inset-0 overflow-y-auto transition-opacity duration-500 ${
                  activeTab === "structural"
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <p className="md:text-p text-[15px] text-[#d5d5d5]">
                  Built for efficiency and scalability, our GIT RF thrusters
                  maximize propulsion performance while minimizing manufacturing
                  complexity.
                </p>

                <ul className="mt-4 flex flex-col gap-2 text-[14px] text-[#d5d5d5] md:text-[15px]">
                  {[
                    "Cathode-less architecture (no hollow cathode required)",
                    "Reduced internal erosion due to RF plasma generation",
                    "Modular grid and coil assembly for scalability",
                    "Compact cylindrical chamber for integration efficiency",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#acacad]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <h6 className="text-primary text-p font-normal md:text-[17px]">
                    RF System Architecture
                  </h6>
                  <div className="mt-3 flex flex-col gap-1.5 text-[14px] md:text-[15px]">
                    <p>
                      <span className="text-[#acacad]">RF Coil: </span>
                      <span className="font-normal text-[#d5d5d5]">
                        External inductive coil sized for plasma coupling
                      </span>
                    </p>
                    <p>
                      <span className="text-[#acacad]">
                        RF Power Coupling:{" "}
                      </span>
                      <span className="font-normal text-[#d5d5d5]">
                        Tuned for efficient ionization rate
                      </span>
                    </p>
                    <p>
                      <span className="text-[#acacad]">
                        Operating Frequency:{" "}
                      </span>
                      <span className="font-normal text-[#d5d5d5]">
                        13.56 MHz
                      </span>
                    </p>
                    <p>
                      <span className="text-[#acacad]">
                        RF Sheath Control:{" "}
                      </span>
                      <span className="font-normal text-[#d5d5d5]">
                        Managed at chamber boundaries for stability
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h6 className="text-primary text-p font-normal md:text-[17px]">
                    Propellant Compatibility
                  </h6>
                  <p className="mt-3 text-[14px] text-[#acacad] md:text-[15px]">
                    Our system supports a range of noble gas propellants,
                    including xenon and krypton, enabling flexibility in mission
                    cost and performance optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
