"use client";

import { AccordianCareer } from "@/src/components/AccordianCareer";
import { CareersHero } from "@/src/components/careers/CareersHero";
import { JourneySection } from "@/src/components/careers/JourneySection";
import { CTA } from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

export default function Careers() {
  return (
    <>
      <Navbar />
      <CareersHero />
      <AccordianCareer />
      <JourneySection />
      <CTA />
      <Footer />
    </>
  );
}
