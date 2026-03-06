"use client";
import { CTA } from "@/src/components/CTA";
import { Benefits } from "@/src/components/home/Benefits";
import { Propulsion } from "@/src/components/home/Propulsion";
import { Roadmap } from "@/src/components/home/Roadmap";
import Basic from "@/src/components/home/Basic";
import Flights from "@/src/components/home/Flights";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useRef } from "react";

export default function Home() {
  const timelineData = [
    {
      year: "1938",
      label: "Global annual airline passengers: ~1 million",
      passengers: "~1 million",
      flights: "~2K",
      routeLimit: 2,
    },
    {
      year: "1950",
      label: "Annual passengers worldwide: ~30 million",
      passengers: "~30 million",
      flights: "~100K",
      routeLimit: 10,
    },
    {
      year: "1970",
      label: "Annual passengers: ~310 million",
      passengers: "~310 million",
      flights: "~1M",
      routeLimit: 50,
    },
    {
      year: "1980",
      label: "Annual passengers: ~600 million",
      passengers: "~600 million",
      flights: "~2M",
      routeLimit: 100,
    },
    {
      year: "1990",
      label: "Annual passengers: ~1 billion",
      passengers: "~1 billion",
      flights: "~3M",
      routeLimit: 150,
    },
    {
      year: "2000",
      label: "Annual passengers: ~1.7 billion",
      passengers: "~1.7 billion",
      flights: "~5M",
      routeLimit: 220,
    },
    {
      year: "2010",
      label: "Annual passengers: ~2.6 billion",
      passengers: "~2.6 billion",
      flights: "~8M",
      routeLimit: 310,
    },
    {
      year: "2019",
      label: "Pre-pandemic peak: ~4.5 billion",
      passengers: "~4.5 billion",
      flights: "~12M",
      routeLimit: 420,
    },
    {
      year: "2020",
      label: "Sharp COVID-19 decline: ~1.8 billion",
      passengers: "~1.8 billion",
      flights: "~6M",
      routeLimit: 200,
    },
    {
      year: "2023",
      label: "Recovery to ~4.5 billion passengers",
      passengers: "~4.5 billion",
      flights: "~12M",
      routeLimit: 420,
    },
    {
      year: "2024",
      label: "Record high: ~9.5 billion passengers",
      passengers: "~9.5 billion",
      flights: "~25M",
      routeLimit: 500,
    },
  ];
  const [timelineIndex, setTimelineIndex] = useState(0);
  const timelineIndexRef = useRef(0);
  return (
    <>
      <Navbar />
      <main className="bg-background relative">
        {/* Earth */}
        <section className="basic-canvas pointer-events-none fixed inset-0 z-20 m-auto">
          {/* <Basic /> */}
          <Flights
            onTimelineUpdate={(idx: number) => {
              if (idx !== timelineIndexRef.current) {
                timelineIndexRef.current = idx;
                setTimelineIndex(idx);
              }
            }}
          />
        </section>

        {/* =========== Absolute Components Blocks =========== */}

        {/* Phase 2 — Flight Timeline */}
        <div className="phase-2 text-secondary pointer-events-none fixed top-[70%] left-1/2 z-40 w-[min(1200px,90vw)] -translate-x-1/2 -translate-y-1/2 opacity-0">
          {/* Top row: passenger + flight counts */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-h2 tabular-nums transition-all duration-300">
                {timelineData[timelineIndex].passengers}
              </p>
              <p className="text-h5 text-primary">Passengers Annually</p>
            </div>
            <div className="text-end">
              <p className="text-h2 tabular-nums transition-all duration-300">
                {timelineData[timelineIndex].flights}
              </p>
              <p className="text-h5 text-primary">Flights Annually</p>
            </div>
          </div>

          {/* Timeline slider */}
          <div className="mt-[100px]">
            <div className="relative mx-auto w-[800px]">
              {/* Track */}
              <div className="relative h-[2px] w-full rounded-full bg-white/20">
                <div
                  className="absolute h-full rounded-full bg-white transition-all duration-300"
                  style={{
                    width: `${(timelineIndex / (timelineData.length - 1)) * 100}%`,
                  }}
                />
                {/* Thumb dot */}
                <div
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white transition-all duration-300"
                  style={{
                    left: `${(timelineIndex / (timelineData.length - 1)) * 100}%`,
                    top: "6px",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>

              {/* Year labels */}
              <div className="mt-3 flex justify-between">
                {timelineData.map((d, i) => (
                  <span
                    key={d.year}
                    className={`w-8 max-w-8 text-xs transition-all duration-300 ${i === timelineIndex ? "font-semibold text-white" : "text-white/40"}`}
                  >
                    {d.year}
                  </span>
                ))}
              </div>
            </div>

            {/* Descriptor */}
            <p className="text-h5 text-secondary mt-6 text-center transition-all duration-300">
              {timelineData[timelineIndex].label}
            </p>
          </div>
        </div>

        {/* Satellites */}
        <div className="satellite fixed top-[30%] left-1/2 z-40 w-[1300] -translate-x-1/2 opacity-0">
          <p className="text-h5 text-primary">
            Meet our satellite constellation ATLAS !
          </p>
          <h2 className="text-h2 text-secondary mt-6 leading-14 font-medium">
            Space-powered intelligence <br /> for tomorrow&apos;s airspace.
          </h2>
          {/* Accordian */}
          <div className="mt-5">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1" className="pb-3">
                <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary mb-2 border-l-3 border-l-[#555555] pb-2 pl-3 text-lg leading-2 font-[400]">
                  Global, uninterrupted airspace activity tracking
                </AccordionTrigger>
                <AccordionContent className="flex w-[50%] flex-col gap-4 px-4 text-[16px] leading-4.5 font-[400] text-[#aaaaaa]">
                  <p>
                    ATLAS ensures the skies are always visible. With worldwide
                    coverage that reaches oceans, polar regions, and the most
                    remote airspaces, it delivers uninterrupted and accurate
                    tracking of aircraft across the globe. Built for safety,
                    efficiency, and security, ATLAS brings the future of air
                    traffic and aerospace monitoring within reach.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="pb-3">
                <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary mb-2 border-l-3 border-l-[#555555] pb-2 pl-3 text-lg leading-2 font-thin">
                  Safer airspace operation
                </AccordionTrigger>
                <AccordionContent className="flex w-[50%] flex-col gap-4 px-4 text-[16px] leading-4.5 font-[400] text-[#aaaaaa]">
                  <p>
                    ATLAS enhances the safety of global aviation by providing
                    continuous, real-time awareness of aircraft movements. By
                    closing surveillance gaps over oceans, poles, and remote
                    regions, ATLAS empowers air traffic controllers, airlines,
                    and defence agencies with the data they need to prevent
                    risks, respond more quickly, and ensure secure and efficient
                    skies.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="pb-5">
                <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary mb-2 border-l-3 border-l-[#555555] pb-2 pl-3 text-lg leading-2 font-[400]">
                  Economic & Efficiency Benefits
                </AccordionTrigger>
                <AccordionContent className="flex w-[50%] flex-col gap-4 px-4 text-[16px] leading-4.5 font-[400] text-[#aaaaaa]">
                  <p>
                    ATLAS drives economic and operational efficiency by enabling
                    more direct flight routes, reducing delays, and lowering
                    fuel consumption. Real-time global surveillance optimizes
                    airspace use, minimizes congestion, and supports faster
                    recovery from disruptions, helping airlines and air traffic
                    agencies reduce costs, improve scheduling, and enhance
                    overall aviation productivity worldwide.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* =========== Screens =========== */}

        {/* Main */}
        <section className="hero_pin relative h-[100vh] overflow-hidden pt-0">
          <div className="content absolute top-[40%] left-[50%] z-0 flex w-[90%] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[1.4rem] text-center">
            <h1 className="text-secondary text-h1 text-shadown-lg leading-0 tracking-tight">
              PROPELLING TO THE BEYOND
            </h1>
            <p className="text-primary text-h6 text-shadown-lg pt-3 font-[300]">
              Together, we can shape a stronger, more adaptable space.
            </p>
            {/* <button className="cta_btn">Get started.</button> */}
          </div>
        </section>

        {/* Flights */}
        <section className="after_hero relative min-h-[300vh]">
          <div>
            <h2>Now we scroll normally</h2>
            <p>This is standard document flow.</p>
          </div>
        </section>

        {/* Satellites */}
        <section className="last relative min-h-[400vh]">
          <div>
            <h2>Now we scroll normally</h2>
            <p>This is standard document flow.</p>
          </div>
        </section>

        {/* Propulsion  & Roadmap*/}
        <section className="relative z-[99] bg-black">
          {/* Propulsion */}
          <Propulsion />
          {/* Roadmap */}
          <Roadmap />
          {/* Benefits */}
          <Benefits />
          {/* CTA */}
          <CTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
