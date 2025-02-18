"use-client";
import Test from "./EarthCanvas/Test";
import Star from "./EarthCanvas/Star";
import Navbar from "@/src/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <EarthCanvas2 /> */}

      <div className="fixed top-0 z-10 h-screen w-full bg-transparent">
        <Test />
      </div>
      <div className="fixed top-0 z-0 h-screen w-full bg-transparent">
        <Star />
      </div>
      <div className="z-[100] h-screen bg-transparent text-white">
        first-section
      </div>
      <div className="second-section z-[100] h-screen bg-transparent text-white">
        second-section
      </div>
      <div className="third-section z-[100] h-screen bg-transparent text-white">
        third-section
      </div>
    </>
  );
}
