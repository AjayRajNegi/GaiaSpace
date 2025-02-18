"use-client";
import Test from "./EarthCanvas/Test";
import Star from "./EarthCanvas/Star";
import Navbar from "@/src/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <div className="fixed top-0 z-10 h-screen w-full bg-transparent">
          <Test />
        </div>
        <div className="fixed top-0 z-0 h-screen w-full bg-transparent">
          <Star />
        </div>
        <section className="z-[100] h-screen bg-transparent text-white">
          first-section
        </section>
        <section className="second-section z-[100] h-screen bg-transparent text-white">
          second-section
        </section>
        <section className="third-section z-[100] h-screen bg-transparent text-white">
          third-section
        </section>
      </main>
    </>
  );
}
