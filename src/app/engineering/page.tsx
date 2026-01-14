import Basic from "@/src/components/home/Basic";
import Navbar from "@/src/components/Navbar";

export default function Engineering() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <main className="bg-background relative">
        {/* Earth */}
        <section className="basic-canvas pointer-events-none fixed inset-0 z-20 m-auto">
          <Basic />
        </section>

        {/* =========== Absolute Components Blocks =========== */}

        {/* Flights Simulator */}
        <div className="lines-simulation fixed top-1/2 left-0 z-40 opacity-0">
          <div className="flex justify-between">
            <div>Passengers Anually</div>
            <div>No. of flights</div>
          </div>
          <div className="text-center">
            Annual passengers Scale: ~600 million
          </div>
        </div>
        {/* Satellites */}
        <div className="satellite fixed top-1/2 left-0 z-40 opacity-0">
          <p>Meet our satellite constellation ATLAS !</p>
          <h1 style={{ fontSize: "55px" }}>
            Space-powered intelligence for tomorrow&apos;s airspace.
          </h1>
        </div>

        {/* =========== Screens =========== */}

        <section className="hero_pin relative h-[100vh] overflow-hidden pt-0">
          <div className="content absolute top-[40%] left-[50%] z-0 flex w-[90%] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[1.4rem] text-center">
            <h1 className="text-secondary text-h1 leading-0 tracking-tight text-shadow-2xs">
              PROPELLING TO THE BEYOND
            </h1>
            <p className="text-primary text-h6 pt-3 text-shadow-2xs">
              Together, we can shape a stronger, more adaptable space.
            </p>
            {/* <button className="cta_btn">Get started.</button> */}
          </div>
        </section>
        <section className="after_hero relative min-h-[100vh] bg-sky-300">
          <div>
            <h2>Now we scroll normally</h2>
            <p>This is standard document flow.</p>
          </div>
        </section>
        <section className="last relative min-h-[200vh] bg-sky-600">
          <div>
            <h2>Now we scroll normally</h2>
            <p>This is standard document flow.</p>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
