"use-client";
import EarthCanvas from "./EarthCanvas/EarthCanvas";
import Navbar from "@/src/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <EarthCanvas />
      <div className="h-screen bg-white"></div>
    </>
  );
}
