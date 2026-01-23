"use client";

import { AboutHero } from "@/src/components/about/AboutHero";
import { Invitation } from "@/src/components/about/Invitation";
import { Newsroom } from "@/src/components/about/Newsroom";
import { Partners } from "@/src/components/about/Partners";
import { TeamSection } from "@/src/components/about/TeamSection";
import Navbar from "@/src/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="grad h-full w-full">
        <AboutHero />
        <TeamSection />
        <Partners />
        <Newsroom />
        <Invitation />
      </main>
    </>
  );
}
