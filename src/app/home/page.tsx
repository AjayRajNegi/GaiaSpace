"use-client";
import dynamic from "next/dynamic";

const EarthCanvas = dynamic(() => import("./EarthCanvas/EarthCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <EarthCanvas />
    </>
  );
}
