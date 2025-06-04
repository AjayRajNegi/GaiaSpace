"use client";
import Navbar from "@/src/components/Navbar";
import HoverCard from "./HoverCard";
import Image from "next/image";
import { motion } from "motion/react";
import TextTyping from "./TextTyping";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#000407] pb-[100px] text-[#fff]">
        <div className="mt-[10vw] flex min-h-[6.5rem] justify-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.6, 0.05, 0.01, 0.9],
              delay: 0.5,
            }}
            className="text-center text-5xl font-bold"
          >
            Building a
            <span className="text-[#6FCBFF]"> Sustainable Space Economy</span>
          </motion.h1>
        </div>
        {/* About Us Section */}
        <section className="mx-auto w-[80%]">
          <div className="mt-[2vw] flex min-h-[4.5rem] justify-center">
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.6, 0.05, 0.01, 0.9],
                delay: 1,
              }}
              className="text-4xl font-semibold"
            >
              About Us
            </motion.h3>
          </div>
          <TextTyping
            className="mt-[2vw] max-w-full text-center text-[1.7rem] leading-[2.3rem]"
            desc="Incorporated in the INDIA in 2024, GAIA SPACE is at the forefront of
            advancing sustainable space technologies. Our journey began with
            pioneering research in efficient propulsion systems, laying the
            foundation for next-generation inspace mobility. As a leader in
            space innovation, we are engineering, a mission dedicated to
            providing real-time air traffic from space insights alongside
            cutting-edge propulsion solutions. From our headquarters in INDIA,
            we continue to push the boundaries of space sustainability,
            integrating Artificial Intelligence, advanced propulsion, and
            data-driven insights to shape a safer and more efficient future."
          />
          <TextTyping
            className="mx-auto mt-[2vw] w-fit text-justify font-roboto text-[1.9rem] font-thin leading-[2.3rem]"
            desc="Unlocking the Future of Space potential for Economic and Technical
            Advancement."
          />

          <div className="mt-[2vw] flex justify-center gap-[4vw]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HoverCard title="Our Mission">
                Our mission is to revolutionize space mobility and intelligence
                through cutting-edge propulsion systems and real-time air
                traffic insights. By integrating AI-driven tracking and
                sustainable engineering, we strive to optimize aerospace
                operations, improve connectivity, and drive the future of a
                resilient space economy.
              </HoverCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <HoverCard title="Our Vision">
                We are dedicated to pioneering in-space propulsion and advanced
                satellite technologies to enable a sustainable and efficient
                space economy. With the growing need for space-based
                intelligence, we develop innovative solutions to optimize
                satellite mobility, enhance global connectivity, and ensure the
                long-term stability of orbital operations.
              </HoverCard>
            </motion.div>
          </div>
          <p className="mx-auto mt-[50px] w-fit font-roboto text-[1.7rem] font-thin leading-[2.3rem]">
            <span className="text-[#6FCBFF]">Together,</span> we'll traverse the
            space frontier, forging a better future.
          </p>
          <h5 className="mx-auto mt-[30px] w-fit font-roboto text-[1.7rem] font-thin">
            The People Behind The Mission
          </h5>
        </section>
        {/* Leadership Section */}
        <section className="mx-[4vw] mt-[100px] rounded-3xl bg-[#0C0C0B] py-[30px]">
          <div>
            <h3 className="mx-auto w-fit text-4xl font-semibold">LEADERSHIP</h3>
            <div className="mt-[30px] flex justify-center gap-[6vw]">
              {["Dr. Sachin Srivastava", "Subham Haldar"].map((name, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="h-[350px] w-[300px] rounded-xl bg-[#202020]"
                >
                  <h4 className="mx-auto w-fit font-roboto text-3xl font-thin">
                    {name}
                  </h4>
                  <p className="mx-auto w-fit text-xl font-medium">
                    Designation
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mx-auto mt-[100px] w-fit text-4xl font-semibold">
              ADVISOR
            </h3>
            <div className="mt-[30px] flex justify-center gap-[8vw]">
              {[
                "Dr. Sachin Srivastava",
                "Subham Haldar",
                "Template Etalpmet",
              ].map((name, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="h-[350px] w-[300px] rounded-xl bg-[#202020]"
                >
                  <h4 className="mx-auto w-fit font-roboto text-3xl font-thin">
                    {name}
                  </h4>
                  <p className="mx-auto w-fit text-xl font-medium">
                    Designation
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Team Carousal */}
        <section className="mx-[4vw]"></section>
        {/* Partners Section */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-[4vw] mt-[50px]"
        >
          <h3 className="font-roboto text-3xl font-thin">
            Our <span className="uppercase text-[#6FCBFF]">Partners</span> and
            <span className="uppercase text-[#6FCBFF]"> Investors</span>
          </h3>
          <h1 className="my-[20px] text-6xl font-bold">
            We like to partner with visionaries
          </h1>
          <p>
            We engage with global partners to address critical challenges and
            ensure a thriving, future-ready space economy.
          </p>
          <div
            className="relative -mt-[20px] flex h-[240px] w-full flex-row items-center justify-center gap-[50px]"
            style={{
              backgroundImage: `url(/Images/about/frame.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Image
              src="/Images/about/partner1.png"
              width={150}
              height={150}
              alt="partners"
              className="object-contain"
            />
            <Image
              src="/Images/about/partner2.png"
              width={110}
              height={110}
              alt="partners"
              className="object-contain"
            />
            <Image
              src="/Images/about/partner3.png"
              width={150}
              height={150}
              alt="partners"
              className="object-contain"
            />
          </div>
        </motion.article>
        {/* Newsroom Section */}
        <article className="mt-[100px]">
          <h3 className="mx-auto w-fit text-4xl font-bold">Newsroom</h3>
          <div className="mt-[50px] flex justify-center gap-[4vw]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.3 }}
            >
              <Image
                src="/Images/about/newsroom1.png"
                height={300}
                width={500}
                alt="newsroom1"
              />
              <p className="mt-5 font-roboto text-2xl font-thin">
                20 Mar, 2025
              </p>
              <p className="w-[500px] text-wrap font-roboto text-2xl font-thin leading-6 transition-colors duration-200 hover:text-[#6FCBFF]">
                Uttaranchal University signs an MoU with GAIA Space Pvt. Ltd
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.3 }}
            >
              <Image
                src="/Images/about/newsroom2.png"
                height={300}
                width={500}
                alt="newsroom1"
              />
              <p className="mt-5 font-roboto text-2xl font-thin">
                20 Mar, 2025
              </p>
              <p className="w-[500px] text-wrap font-roboto text-2xl font-thin leading-6 transition-colors duration-200 hover:text-[#6FCBFF]">
                Interactive session with the founder of GAIA Space Pvt. Ltd
              </p>
            </motion.div>
          </div>
        </article>
        {/* Invitation Section */}
        <motion.article
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="mx-[8vw] mt-[100px] flex gap-[15%] bg-[#090C0E] p-[4vw]"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex w-[30%] flex-col items-center"
          >
            <h4 className="text-5xl font-bold">
              An <span className="text-[#6FCBFF]">Invitation</span>
            </h4>
            <p className="mt-5">Join us in our mission</p>
            <button
              style={{ border: "1px solid white" }}
              className="mx-auto my-3 w-fit rounded-md px-2 py-1"
            >
              Get in Touch
            </button>
            <div className="mt-2 flex gap-3">
              <p className="rounded-3xl bg-[#1B1B1A] px-3 py-1">Learn More</p>
              <p className="rounded-3xl bg-[#1B1B1A] px-3 py-1">
                Training Program
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex w-[50%] flex-col justify-between text-justify"
          >
            <p>
              Join us on this journey. Whether you're a potential partner,
              customer. or o young professional with a passion for exploration
              and innovation, there is a place for you in our mission.
            </p>
            <p>
              Together. we're propelling the humankind to and for the beyond
            </p>
          </motion.div>
        </motion.article>
      </main>
    </>
  );
}
