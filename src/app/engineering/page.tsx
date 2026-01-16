import { CTA } from "@/src/components/CTA";
import Basic from "@/src/components/home/Basic";
import { Benefits } from "@/src/components/home/Benefits";
import { Propulsion } from "@/src/components/home/Propulsion";
import { Roadmap } from "@/src/components/home/Roadmap";
import Navbar from "@/src/components/Navbar";

export default function Engineering() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <main className="bg-background relative">
        {/* Earth */}
        <section className="basic-canvas pointer-events-none fixed inset-0 z-20 m-auto">
          <Basic />
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
          <div className="mt-8">
            <p className="border-primary text-secondary text-h6 mt-4 border-l-2 px-4 leading-6">
              Global, uninterrupted airspace activity tracking
            </p>
            <p className="border-primary text-secondary text-h6 mt-4 border-l-2 px-4 leading-6">
              Safer and optimized airspace operations
            </p>
            <p className="border-primary text-secondary text-h6 mt-4 border-l-2 px-4 leading-6">
              Economic & Efficiency Benefits
            </p>
          </div>
        </div>

        {/* =========== Screens =========== */}

        {/* Main */}
        <section className="hero_pin relative h-[100vh] overflow-hidden pt-0">
          <div className="content absolute top-[40%] left-[50%] z-0 flex w-[90%] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[1.4rem] text-center">
            <h1 className="text-secondary text-h1 text-shadown-lg leading-0 tracking-tight">
              PROPELLING TO THE BEYOND
            </h1>
            <p className="text-primary text-h6 text-shadown-lg pt-3">
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
        <section className="relative z-[99] bg-black pb-[500px]">
          {/* Propulsion */}
          <Propulsion />
          {/* Roadmap */}
          <Roadmap />
          {/* Benefits */}
          <Benefits />
          <CTA />
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}
