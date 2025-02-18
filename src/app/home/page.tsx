"use-client";
import Navbar from "@/src/components/Navbar";
import Test from "./EarthCanvas/Test";
import Star from "./EarthCanvas/Star";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <EarthCanvas2 /> */}

      <div className="fixed top-0 z-20 h-screen w-full bg-transparent">
        {/* <Test /> */}
      </div>
      <div className="fixed top-0 h-screen w-full">
        <Star />
      </div>
      <div className="section h-screen text-white">first-section</div>
      <div className="second-section section h-screen bg-transparent text-white">
        second-section
      </div>
      <div className="third-section section h-screen bg-transparent text-white">
        third-section
      </div>
    </>
  );
}
