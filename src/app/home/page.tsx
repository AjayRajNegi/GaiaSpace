"use-client";
import dynamic from "next/dynamic";
import EarthCanvas from "./EarthCanvas/EarthCanvas";
import Navbar from "@/src/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <EarthCanvas />
    </>
  );
}

// const EarthCanvas = dynamic(() => import("./EarthCanvas/EarthCanvas"), {
//   ssr: false,
// });
