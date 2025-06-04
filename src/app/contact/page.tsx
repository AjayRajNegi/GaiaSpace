"use client";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import ContactForm from "./ContactForm";

gsap.registerPlugin(useGSAP);

export default function contact() {
  const mapRef = useRef(null);

  const officeHandler = () => {
    gsap.to(mapRef.current, {
      scale: 2,
      transformOrigin: "100vw -40px",
      duration: 1,
      ease: "back.inOut",
    });
  };
  const labHandler = () => {
    gsap.to(mapRef.current, {
      scale: 2,
      transformOrigin: "100vw 100px",
      duration: 1,
      ease: "back.inOut",
    });
  };
  const resetHandler = () => {
    gsap.to(mapRef.current, {
      x: 0,
      duration: 1,
      scale: 1,
      ease: "back.inOut",
    });
  };

  return (
    <>
      <Navbar />
      <main className="pb-[8vw] pt-[8vw]">
        <h1 className="mx-auto w-fit text-5xl font-bold text-[#fff]">
          We are Located
          <span className="text-5xl font-bold text-[#6FCBFF]"> in.</span>
        </h1>
        <section className="relative mx-auto mt-[2vw] h-[400px] w-[90%] overflow-hidden md:w-[85%]">
          <Image
            src="/Images/contact/map.png"
            objectFit="cover"
            alt="map"
            fill
            ref={mapRef}
          />
        </section>
        <article className="mx-auto w-[85%]">
          <h2 className="mt-[3vw] text-5xl font-bold text-[#fff]">
            Contact <span className="text-[#6FCBFF]"> Us.</span>
          </h2>
          {/* Location Pointer */}
          <div className="mt-4 flex w-full justify-between">
            <motion.div
              onHoverStart={officeHandler}
              onHoverEnd={resetHandler}
              className="h-auto w-[32%] rounded-xl bg-[#191919] p-4 font-roboto text-2xl font-thin text-white"
            >
              <h4>Registered Office</h4>
              <p className="mt-6 font-[1.8rem] leading-7">
                V Roy, Garacharma, Sri Vijaya Puram, South Andaman, Andaman &
                Nicobar Island, 744105, India
              </p>
            </motion.div>
            <motion.div
              onHoverStart={labHandler}
              onHoverEnd={resetHandler}
              className="h-auto w-[32%] rounded-xl bg-[#191919] p-4 font-roboto text-2xl font-thin text-white"
            >
              <h4>Research and Development Lab</h4>
              <p className="mt-6 font-[1.8rem] leading-7">
                DRI, Uttaranchal University, near Prem Nagar, Dehradun,
                Uttarakhand, 2300047, India
              </p>
            </motion.div>
          </div>
          {/* Contact Details */}
          <div className="mt-5">
            <div className="flex h-fit flex-nowrap gap-2">
              <div className="relative w-[15px]">
                <Image
                  src="/Images/contact/mail.png"
                  objectFit="contain"
                  fill
                  alt="mail"
                />
              </div>

              <span className="text-base text-[rgba(255,255,255,0.52)]">
                info@gaiaspace.co.in
              </span>
            </div>
            <div className="flex h-fit flex-nowrap gap-2">
              <div className="relative w-[15px]">
                <Image
                  src="/Images/contact/phone.png"
                  objectFit="contain"
                  fill
                  alt="mail"
                />
              </div>

              <span className="text-base text-[rgba(255,255,255,0.52)]">
                +6969420420
              </span>
            </div>
            <p className="mx-auto mt-14 w-[70%] text-center font-roboto text-[1.8rem] font-thin leading-7 text-[#fff]">
              {` Have a question, seeking assistance, or exploring partnership
              opportunities? We’re here to support you every step of the way.`}
            </p>
            <article className="mt-12 flex rounded-xl bg-[#090C0E] py-[60px]">
              <div className="flex w-[70%] justify-center text-center text-4xl font-semibold text-[#fff]">
                <p>
                  Want to Join us and
                  <span className="text-[#6FACFF]"> lead </span>
                  the way in <br /> sustainable
                  <span className="text-[#6FACFF]"> space engineering.</span>
                </p>
              </div>
              <div className="flex w-[30%] flex-col items-center justify-center gap-2 text-[#fff]">
                <p className="rounded-full bg-[#1B1B1A] px-8 py-1 font-roboto transition-colors duration-300 hover:bg-[#606060]">
                  Learn More
                </p>
                <p className="rounded-full bg-[#1B1B1A] px-3 py-1 font-roboto transition-colors duration-300 hover:bg-[#606060]">
                  Training Program
                </p>
              </div>
            </article>
          </div>
        </article>
        {/* Contact Form */}
        <ContactForm />
      </main>
    </>
  );
}
