import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Basic from "@/src/components/home/Basic";
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

        <section className="hero_pin relative h-[100vh] overflow-hidden pt-0">
          <div className="content absolute top-[40%] left-[50%] z-0 flex w-[90%] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[1.4rem] text-center">
            <h1 className="text-secondary text-h1 leading-0 tracking-tight text-shadow-2xs">
              PROPELLING TO THE BEYOND
            </h1>
            <p className="text-primary text-h6 pt-3 text-shadow-2xs">
              Together, we can shape a stronger, more adaptable space.
            </p>
            {/* <button className="cta_btn">Get started.</button> */}
          </div>
        </section>
        <section className="after_hero relative min-h-[100vh]">
          <div>
            <h2>Now we scroll normally</h2>
            <p>This is standard document flow.</p>
          </div>
        </section>
        <section className="last relative min-h-[300vh]">
          <div>
            <h2>Now we scroll normally</h2>
            <p>This is standard document flow.</p>
          </div>
        </section>

        {/* Propulsion */}
        <section className="relative z-[99] min-h-[200vh] bg-black">
          <div className="mx-auto max-w-7xl">
            {/* Left */}
            <div className="w-1/2">
              <h3 className="text-h4 text-secondary w-[70%] leading-10 font-thin">
                Enabling Orbital Stewardship Through Next-Generation Propulsion
              </h3>
              <p className="text-p text-primary mt-2 leading-5">
                We&apos;re also laying the groundwork to sustain space
                infrastructure <br /> with capabilities in space propulsion.
              </p>
              <div className="mt-10 w-[70%]">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="item-1"
                >
                  <AccordionItem value="item-1" className="pb-3">
                    <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary border-l-2 pb-2 pl-3 text-lg leading-2 font-thin">
                      Advancing Core Propulsion Techonologies
                    </AccordionTrigger>
                    <AccordionContent className="text-secondary flex flex-col gap-4 text-sm font-thin text-balance">
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
                  <AccordionItem value="item-2" className="pb-3">
                    <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary border-l-2 pb-2 pl-3 text-lg leading-2 font-thin">
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
                  <AccordionItem value="item-3" className="pb-3">
                    <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary border-l-2 pb-2 pl-3 text-lg leading-2 font-thin">
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
            {/* Right */}
            <div></div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
