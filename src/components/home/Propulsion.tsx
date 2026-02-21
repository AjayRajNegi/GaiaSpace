import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Propulsion() {
  return (
    <div className="mx-auto flex max-h-[600px] max-w-7xl justify-between pt-20">
      {/* Left */}
      <div className="w-1/2">
        <h3 className="text-h4 text-secondary w-[70%] leading-10 font-thin">
          Enabling Orbital Stewardship Through Next-Generation Propulsion
        </h3>
        <p className="text-p text-primary mt-2 leading-5">
          We&apos;re also laying the groundwork to sustain space infrastructure{" "}
          <br /> with capabilities in space propulsion.
        </p>
        <div className="mt-10 w-[70%]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="pb-3">
              <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary border-l-2 pb-2 pl-3 text-lg leading-2 font-thin">
                Advancing Core Propulsion Techonologies
              </AccordionTrigger>
              <AccordionContent className="text-secondary flex flex-col gap-4 text-sm font-[300] text-balance">
                <p>
                  We design and deliver state-of-the-art ABEP, electric, and
                  green propellant chemical thrusters to extend satellite
                  operational lifetimes, achieve very low operating altitudes,
                  enable precise station-keeping, and support complex orbital
                  transfers, all while drastically reducing propellant mass.
                  Leveraging non-toxic, high-performance propellants to minimise
                  environmental impact, simplify ground handling, and enhance
                  mission flexibility
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="pb-3">
              <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary border-l-2 pb-2 pl-3 text-lg leading-2 font-thin">
                Enhancing Orbital Agility
              </AccordionTrigger>
              <AccordionContent className="text-secondary flex flex-col gap-4 text-sm font-thin text-balance">
                <p>
                  By integrating advanced guidance, navigation, and control
                  (GNC) algorithms, our propulsion systems enable autonomous
                  maneuvering and collision avoidance, giving satellites and
                  servicing vehicles the agility to adapt to changing mission
                  needs and orbital debris threats. Precision thrust control and
                  fine-grained modulation further ensure reliable orbit
                  maintenance, rapid repositioning, and seamless support for
                  proximity operations and in-orbit servicing.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="pb-3">
              <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary border-l-2 pb-2 pl-3 text-lg leading-2 font-thin">
                Extending Reach Beyond Earth Orbit
              </AccordionTrigger>
              <AccordionContent className="text-secondary flex flex-col gap-4 text-sm font-thin text-balance">
                <p>
                  High thrust and specific impulse solutions combine scalable
                  propulsion modules, mission adaptable architectures to support
                  deep space missions including lunar and cislunar transfer
                  while optimized power processing units and advanced thermal
                  management systems ensure sustained, reliable performance even
                  in the most challenging environments.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* Right */}
      <div className="grid max-h-[410px] grid-cols-2 grid-rows-2 gap-2.5">
        {/* GIT-RF */}
        <div className="bg-highlight flex h-[200px] w-[250px] flex-col justify-between rounded-lg p-2">
          <h6 className="text-secondary text-xs font-light">
            Electric Propulsion
          </h6>
          <div className="mx-auto w-fit">
            <img src="/images/home/GIT-RF.avif" className="h-[125px]" />
            <p className="text-secondary -mt-2 text-center text-xs font-light">
              GIT-RF
            </p>
          </div>
          <p className="text-secondary flex items-end pr-2 text-sm font-light">
            <button className="ml-auto w-fit cursor-pointer rounded-full px-2 py-1 transition-colors hover:bg-gray-700">
              Know more
            </button>
          </p>
        </div>
        {/* HPGP */}
        <div className="bg-highlight flex h-[200px] w-[250px] flex-col justify-between rounded-lg p-2">
          <h6 className="text-secondary text-xs font-light">
            High Performance Green Propulsion
          </h6>
          <div className="mx-auto w-fit">
            <img src="/images/home/HPGP.avif" className="h-[125px]" />
            <p className="text-secondary -mt-2 text-center text-xs font-light">
              HPGP
            </p>
          </div>
          <p className="text-secondary flex items-end pr-2 text-sm font-light">
            <button className="ml-auto w-fit cursor-pointer rounded-full px-2 py-1 transition-colors hover:bg-gray-700">
              Know more
            </button>
          </p>
        </div>
        {/* HyRocEn */}
        <div className="bg-highlight flex h-[200px] w-[250px] flex-col justify-between rounded-lg p-2">
          <h6 className="text-secondary text-xs font-light">
            Hybrid Propulsion
          </h6>
          <div className="mx-auto w-fit">
            <img src="/images/home/HyRocEn.avif" className="h-[125px]" />
            <p className="text-secondary -mt-2 text-center text-xs font-light">
              HyRocEn
            </p>
          </div>
          <p className="text-secondary flex items-end pr-2 text-sm font-light">
            <button className="ml-auto w-fit cursor-pointer rounded-full px-2 py-1 transition-colors hover:bg-gray-700">
              Know more
            </button>
          </p>
        </div>
        {/* VAC-LP */}
        <div className="bg-highlight flex h-[200px] w-[250px] flex-col justify-between rounded-lg p-2">
          <h6 className="text-secondary text-xs font-light">
            Liquid Propulsion
          </h6>
          <div className="mx-auto w-fit">
            <img src="/images/home/VAC-LP.avif" className="h-[125px]" />
            <p className="text-secondary -mt-2 text-center text-xs font-light">
              VAC-LP
            </p>
          </div>
          <p className="text-secondary flex items-end pr-2 text-sm font-light">
            <button className="ml-auto w-fit cursor-pointer rounded-full px-2 py-1 transition-colors hover:bg-gray-700">
              Know more
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
