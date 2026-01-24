"use client";

import { AccordianCareer } from "@/src/components/AccordianCareer";
import { CareersHero } from "@/src/components/careers/CareersHero";
import Navbar from "@/src/components/Navbar";

export default function Careers() {
  return (
    <>
      <Navbar />
      <CareersHero></CareersHero>
      <AccordianCareer />
    </>
  );
}
