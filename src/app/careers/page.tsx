"use client";

import { AccordianCareer } from "@/src/components/AccordianCareer";
import { CareersHero } from "@/src/components/careers/CareersHero";
import { JourneySection } from "@/src/components/careers/JourneySection";
import { CTA } from "@/src/components/CTA";

export default function Careers() {
  return (
    <>
      <CareersHero />
      <AccordianCareer />
      <JourneySection />
      <CTA />
    </>
  );
}
