"use client";

import { TeamCarousel } from "@/src/components/about/TeamCarousel";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="grad h-full w-full">
        <section className="mx-auto flex max-w-7xl flex-col items-center pt-[70px] text-[#cbcbcb]">
          {/* Header and Information */}
          <h1 className="text-h2 mt-10 font-[300] tracking-tight text-white">
            Building A{" "}
            <span className="text-primary">Sustainable Space Economy</span>
          </h1>
          <h5 className="mt-5 text-[22px] font-[300] tracking-tight text-white">
            About Us
          </h5>
          <p className="mt-5 max-w-5xl text-justify text-sm font-[300] tracking-tighter">
            Incorporated in the INDIA in 2024, GAIA SPACE is at the forefront of
            advancing sustainable space technologies. Our journey began with
            pioneering research in efficient propulsion systems, laying the
            foundation for next-generation inspace mobility. As a leader in
            space innovation, we are engineering, a mission dedicated to
            providing real-time air traffic from space insights alongside
            cutting-edge propulsion solutions. From our headquarters in INDIA,
            we continue to push the boundaries of space sustainability,
            integrating Artificial Intelligence, advanced propulsion, and data
            driven insights to shape a safer and more efficient future.
          </p>
          <p className="mt-5 font-[300] tracking-tighter">
            Unlocking the Future of Space potential for Economic and
            Technological Advancement.
          </p>
          {/* Cards */}
          <div className="mt-10 flex gap-14">
            <div className="h-[300] w-[420] rounded-3xl bg-[#0f0f0f] p-9 ring-white/30 transition-all duration-300 hover:ring-[0.5px]">
              <h5 className="text-h6 mb-4 text-center text-white">
                Our Vission
              </h5>
              <p className="text-justify text-sm/4 font-[300]">
                We are dedicated to for to advancing in-space propulsion and
                next-generation satellite technologies that power a sustainable
                and efficient space economy. As the demand for space-based
                intelligence grows, we deliver innovative solutions that enhance
                satellite mobility, strengthen global connectivity through
                space-enabled air traffic management, and safeguard the
                long-term stability of operations in both the skies and beyond.
              </p>
            </div>
            <div className="h-[300] w-[420] rounded-3xl bg-[#0f0f0f] p-9 ring-white/30 transition-all duration-300 hover:ring-[0.5px]">
              <h5 className="text-h6 mb-4 text-center text-white">
                Our Mission
              </h5>
              <p className="text-justify text-sm/4 font-[300]">
                Our mission is to advance space mobility and intelligence
                through next-generation propulsion systems and real-time air
                traffic management. By integrating AI-driven analytics with
                sustainable engineering, we enable precise satellite
                maneuverability, optimize aerospace operations, and expand
                global connectivity. Through these innovations, we are building
                a resilient space economy that ensures long-term stability,
                efficiency, and opportunity beyond Earth.
              </p>
            </div>
          </div>

          <h5 className="text-h5 mt-10 font-[300] tracking-tighter">
            <span className="text-primary">Together</span>, we'll traverse the
            space frontier, forging a better future.
          </h5>
        </section>
        <section className="mx-auto flex max-w-7xl flex-col items-center text-[#cbcbcb]">
          <h4 className="text-h4 font-[300] text-white">
            People behind the <span className="text-primary">Mission</span>
          </h4>
          <div className="mt-10 grid h-[700] w-5xl max-w-5xl grid-cols-6 grid-rows-5 gap-3 rounded-xl bg-[#0f0f0f] p-8">
            <div className="bg-highlight col-span-3 row-span-3 flex flex-col items-center justify-between rounded-lg py-6">
              <Image
                src="/images/about/MD.avif"
                alt="MD"
                width={200}
                height={200}
                className="aspect-square rounded-full object-cover object-top-right"
              />
              <p className="text-[16px] font-[300]">Dr. Sachin Shrivastav</p>
              <p className="w-fit border-r-[2] border-l-[2] px-2 leading-4 font-semibold">
                Managing Director
              </p>
              <Image
                src="/icon/InstaIcon.png"
                alt="logo"
                width={40}
                height={40}
              />
            </div>
            <div className="bg-highlight col-span-3 row-span-3 flex flex-col items-center justify-between rounded-lg py-6">
              <Image
                src="/images/about/CEO.avif"
                alt="CEO"
                width={200}
                height={200}
                className="aspect-square rounded-full object-cover object-top-right"
              />
              <p className="text-[16px] font-[300]">Shubham Haldar</p>
              <p className="w-fit border-r-[2] border-l-[2] px-2 leading-4 font-semibold">
                Chief Executive Officer
              </p>
              <Image
                src="/icon/InstaIcon.png"
                alt="logo"
                width={40}
                height={40}
              />
            </div>
            <div className="bg-highlight col-span-2 row-span-2 flex flex-col items-center justify-between rounded-lg py-2">
              <Image
                src="/images/about/ADM.avif"
                alt="CEO"
                width={130}
                height={130}
                className="aspect-square rounded-full object-cover object-center"
              />
              <p className="text-[16px] font-[300]">Dr. Rajesh Singh</p>
              <p className="w-fit border-r-[2] border-l-[2] px-2 leading-4 font-semibold">
                Advisory Board Member
              </p>
              <Image
                src="/icon/InstaIcon.png"
                alt="logo"
                width={35}
                height={35}
              />
            </div>
            <div className="bg-highlight col-span-2 row-span-2 flex flex-col items-center justify-between rounded-lg py-2">
              <Image
                src="/images/about/OD.avif"
                alt="CEO"
                width={130}
                height={130}
                className="aspect-square rounded-full object-cover object-top-right"
              />
              <p className="text-[16px] font-[300]">Rajeeth Chettty</p>
              <p className="w-fit border-r-[2] border-l-[2] px-2 leading-4 font-semibold">
                Head of Operations
              </p>
              <Image
                src="/icon/InstaIcon.png"
                alt="logo"
                width={35}
                height={35}
              />
            </div>
            <div className="bg-highlight col-span-2 row-span-2 flex flex-col items-center justify-between rounded-lg py-2">
              <Image
                src="/images/about/SBA.avif"
                alt="CEO"
                width={130}
                height={130}
                className="aspect-square rounded-full object-cover object-top-right"
              />
              <p className="text-[16px] font-[300]">Bhagyashree Singh</p>
              <p className="w-fit border-r-[2] border-l-[2] px-2 leading-4 font-semibold">
                Strategic Business Advisor
              </p>
              <Image
                src="/icon/InstaIcon.png"
                alt="logo"
                width={35}
                height={35}
              />
            </div>
          </div>
        </section>

        <TeamCarousel />
      </main>
    </>
  );
}
