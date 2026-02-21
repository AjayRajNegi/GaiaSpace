"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";
import { useState } from "react";

const cards = [
  {
    image: "/images/engineering/ClipA1.png",
    title: "Education Institution Support",
    desc: "Comprehensive support for educational institutions to develop safe, cost-effective, in-house propulsion test setups for hands-on learning and research.",
    src: "/images/engineering/S1.png",
  },
  {
    image: "/images/engineering/ClipA2.png",
    title: "Mission Design",
    desc: "Comprehensive support for sounding rockets with hybrid propulsion or payload deployment, from design to launch, ensuring optimal performance, reliability, and efficiency.",
    src: "/images/engineering/S2.png",
  },
  {
    image: "/images/engineering/ClipA3.png",
    title: "Training Program",
    desc: "Our exclusive student training program is designed for hands-on industry standard learning with testing of hybrid propulsion technology.",
    src: "/images/engineering/S3.png",
  },
];

export default function Page() {
  const [toggleSpecs, setToggleSpecs] = useState(true);
  return (
    <>
      <Navbar />
      <main className="bg-background text-secondary">
        <main className="relative mx-auto flex h-screen max-w-[1400px]">
          <Image
            src="/images/engineering/main.png"
            fill
            alt="main"
            className="z-0 object-cover"
          />
          <h3 className="text-h3 absolute top-1/2 z-20 -translate-y-1/2 px-10 leading-10 font-thin">
            <span className="text-primary">Engineering</span> Thrust, <br />
            Enabling
            <span className="text-primary"> Exploration</span>
          </h3>
        </main>
        <section></section>
      </main>

      {/* Engine Specification */}
      <section className="text-secondary">
        {/* Header */}
        <div className="text-secondary text-center font-thin">
          <h1 className="my-4 text-[40px] leading-12 tracking-tight">
            <span className="text-primary">Precision</span> Thrust, Efficient
            <span className="text-primary">Combustion</span>
          </h1>
          <p className="text-center text-[18px] leading-5 tracking-tight text-[#acacad]">
            Engineering Hybrid Propulsion Propulsion Solutions for
            Tomorrow&apos;s Missions
          </p>
          <h6 className="mt-14 text-[18px] text-[600]">Engine Specification</h6>
        </div>

        {/* Specifications */}
        <div className="mx-auto mt-14 flex h-[500px] max-w-6xl items-center rounded-3xl border-1 border-x-0 border-[#646464] bg-[#0c0c0c]">
          <div className="relative h-[400px] w-[35%]">
            <Image
              src="/images/engineering/Engine.png"
              alt="Engine"
              fill
              objectFit="contain"
            />
          </div>
          <div className="flex h-[80%] w-full flex-col pr-[2%] font-thin text-[#acacad]">
            <div className="mb-10 flex items-center gap-4 text-[18px]">
              <button
                onClick={() => setToggleSpecs(true)}
                className={toggleSpecs ? "text-primary" : ""}
              >
                Overview
              </button>
              <div className="bg-secondary h-4.5 w-[2px]" />
              <button
                onClick={() => setToggleSpecs(false)}
                className={toggleSpecs ? "" : "text-primary"}
              >
                Technical Specification
              </button>
            </div>

            <div className="relative flex-1 overflow-hidden">
              {/* Overview panel */}
              <div
                className={`absolute inset-0 flex flex-col justify-evenly transition-opacity duration-500 ${
                  toggleSpecs
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <p className="text-[16px] text-[#d5d5d5]">
                  Our Hybrid Rocket Motor designs are optimised for
                  manufacturing while delivering full performance.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <div>
                    <h6 className="text-primary text-[18px] font-[400]">
                      Surge Capability
                    </h6>
                    <p className="mt-3 text-[16px] text-[#d5d5d5]">
                      Rapidly scale motor production leveraging common
                      manufacturing production equipment and minimal tooling.
                    </p>
                  </div>
                  <div>
                    <h6 className="text-primary text-[18px] font-[400]">
                      Adapdibility
                    </h6>
                    <p className="mt-3 text-[16px] text-[#d5d5d5]">
                      Easy changeover to different casings and sounding launch
                      vehicle frame.
                    </p>
                  </div>
                  <div className="col-span-2 mt-4">
                    <h6 className="text-primary text-[18px] font-[400]">
                      Lower Cost & Fewer Parts
                    </h6>
                    <p className="mt-3 text-[16px] text-[#d5d5d5]">
                      Our processes have simplified the complex and labour
                      intensive process of rocket motor manufacturing, reducing
                      both part count and assembly tasks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Specification panel */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  toggleSpecs
                    ? "pointer-events-none opacity-0"
                    : "pointer-events-auto opacity-100"
                }`}
              >
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="item-1"
                >
                  <AccordionItem value="item-1" className="pb-5">
                    <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary border-l-2 pb-2 pl-3 text-lg leading-2 font-thin">
                      Advancing Core Propulsion Techonologies
                    </AccordionTrigger>
                    <AccordionContent className="text-secondary flex flex-col gap-4 text-sm font-[300] text-balance">
                      <p>
                        We design and deliver state-of-the-art ABEP, electric,
                        and green propellant chemical thrusters to extend
                        satellite operational lifetimes, achieve very low
                        operating altitudes, enable precise station-keeping, and
                        support complex orbital transfers, all while drastically
                        reducing propellant mass. Leveraging non-toxic,
                        high-performance propellants to minimise environmental
                        impact, simplify ground handling, and enhance mission
                        flexibility
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="pb-5">
                    <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary border-l-2 pb-2 pl-3 text-lg leading-2 font-thin">
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
                    <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary border-l-2 pb-2 pl-3 text-lg leading-2 font-thin">
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
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="text-secondary mx-auto max-w-7xl py-20">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-h4 my-4 leading-12 font-thin tracking-tight">
            Our Services
          </h1>
        </div>
        {/* card */}
        <div className="mx-auto my-10 flex max-w-4xl items-center justify-between text-[14px] font-[300] text-[#acacad]">
          {cards.map((card, id) => (
            <div
              key={id}
              className="relative flex h-[280] w-[240] items-center justify-center rounded-2xl border-2 border-[#28282a] p-2 transition-all hover:scale-105 hover:border-1 hover:shadow-[0_10px_70px_rgba(14,35,60,1.00)]"
              style={{
                backgroundImage: `url(${card.src})`,
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col items-center justify-center text-center font-[400]">
                <Image
                  src={card.image}
                  alt={card.title}
                  height={130}
                  width={130}
                />
                <p className="text-secondary">{card.title}</p>
                <p className="pt-2 text-center text-[13px] leading-4 font-thin">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
