"use-client";
import dynamic from "next/dynamic";
import EarthCanvas from "./EarthCanvas/EarthCanvas";

export default function Home() {
  return (
    <>
      <EarthCanvas />
    </>
  );
}

// const EarthCanvas = dynamic(() => import("./EarthCanvas/EarthCanvas"), {
//   ssr: false,
// });
