"use client";

import Navbar from "@/src/components/Navbar";

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
            <div className="bg-highlight h-[300] w-[420] rounded-3xl p-9">
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
            <div className="bg-highlight h-[300] w-[420] rounded-3xl p-9">
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
        <section></section>
      </main>
    </>
  );
}
