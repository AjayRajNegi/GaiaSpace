"use client";

import { AboutHero } from "@/src/components/about/AboutHero";
import { Invitation } from "@/src/components/about/Invitation";
import { Newsroom } from "@/src/components/about/Newsroom";
import { Partners } from "@/src/components/about/Partners";
import { TeamSection } from "@/src/components/about/TeamSection";
import { CTA } from "@/src/components/CTA";

export default function About() {
  return (
    <>
      <main className="grad max-w-8xl mx-auto overflow-x-hidden">
        <AboutHero />
        <TeamSection />
        <Partners />
        <Newsroom />
        <Invitation />
        <CTA />
      </main>
    </>
  );
}
