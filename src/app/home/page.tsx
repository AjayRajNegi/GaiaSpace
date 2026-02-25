import { CTA } from "@/src/components/CTA";
import { Benefits } from "@/src/components/home/Benefits";
import { Propulsion } from "@/src/components/home/Propulsion";
import { Roadmap } from "@/src/components/home/Roadmap";
import Basic from "@/src/components/home/Basic";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background relative">
        {/* Earth */}
        <section className="basic-canvas pointer-events-none fixed inset-0 z-20 m-auto">
          {/* <Basic /> */}
        </section>

        {/* =========== Absolute Components Blocks =========== */}

        {/* Flights Simulator */}
        <div className="lines-simulation text-secondary fixed top-[45%] left-1/2 z-40 -translate-x-1/2 opacity-0">
          <div className="flex min-w-[1200px] justify-between">
            <div>
              <p className="text-h2">600 million</p>
              <p className="text-h5 text-primary">Passengers Anually</p>
            </div>
            <div>
              <p className="text-h2 text-end">~2M</p>
              <p className="text-h5 text-primary">No. of flights anually</p>
            </div>
          </div>
          <div className="mt-[200px] text-center">
            Annual passengers Scale: ~600 million
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
        <section className="after_hero relative min-h-[100vh]">
          <div>
            <h2>Now we scroll normally</h2>
            <p>This is standard document flow.</p>
          </div>
        </section>

        {/* Satellites */}
        <section className="last relative min-h-[300vh]">
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
