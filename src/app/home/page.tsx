import Canva from "./EarthCanvas/Canva";
import Navbar from "@/src/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Canva />
      <section className="z-[99999] h-[200vh] w-full bg-cyan-400">
        Section
      </section>
    </>
  );
}
