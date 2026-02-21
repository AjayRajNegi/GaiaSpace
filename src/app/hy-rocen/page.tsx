import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="bg-background text-secondary">
        <main className="relative mx-auto flex h-screen max-w-[1400px]">
          <Image
            src="/images/engineering/main.png"
            fill
            alt="main"
            className="z-0 object-cover"
          />
          <h3 className="text-h3 absolute top-1/2 z-20 -translate-y-1/2 px-10 leading-10 font-thin">
            <span className="text-primary">Engineering</span> Thrust, <br />
            Enabling
            <span className="text-primary"> Exploration</span>
          </h3>
        </main>
        <section></section>
      </main>

      {/*  */}
      {/* Header */}
      <div className="text-secondary text-center font-thin">
        <h1 className="my-4 text-[40px] leading-12 tracking-tight">
          <span className="text-primary">Precision</span> Thrust, Efficient
          <span className="text-primary">Combustion</span>
        </h1>
        <p className="text-center text-[18px] leading-5 tracking-tight text-[#acacad]">
          Engineering Hybrid Propulsion Propulsion Solutions for Tomorrow&apos;s
          Missions
        </p>
        <h6 className="text-h6 mt-14 text-[500]">Engine Specification</h6>
      </div>
      <Footer />
    </>
  );
}
