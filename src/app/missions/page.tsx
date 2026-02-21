import Capabilities from "@/src/components/missions/Capabilities";
import Globe from "@/src/components/missions/Globe";
import Technology from "@/src/components/missions/Technology";
export default function page() {
  return (
    <>
      <main className="bg-background relative">
        {/* Globe */}
        <section className="fixed inset-0 z-20 m-auto min-h-screen">
          {/* <Globe /> */}
        </section>

        {/* =========== Absolute Components Blocks =========== */}
        {/* Titles */}
        <section className="hero_pin fixed inset-0 h-[100vh] overflow-hidden">
          <div className="content absolute top-[40%] left-[50%] z-0 flex w-[90%] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[1.4rem] text-center">
            <h1 className="text-secondary text-h1 text-shadown-lg leading-0 tracking-tight">
              Worldwide ATS Intelligence
            </h1>
            <p className="text-primary text-h6 text-shadown-lg pt-3 font-[300]">
              Precision Data for Aircrafts Navigation and Surveillance
            </p>
            {/* <button className="cta_btn">Get started.</button> */}
          </div>
        </section>

        {/* =========== Screens =========== */}

        <section className="bg-background relative z-[99] w-full">
          {/* Capabilities */}
          <Capabilities />
          {/*Technology */}
          <Technology />
          {/*  */}
        </section>
      </main>
    </>
  );
}
