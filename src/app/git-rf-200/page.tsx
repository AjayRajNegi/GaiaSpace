import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

const cards = [
  {
    data: "50%",
    title: "High Performance",
    desc: " With advanced RF ionization, the GIT-RF enhances efficiency, thrust, and performance while minimizing power usage.",
    src: "/images/missions/P1.png",
  },
  {
    data: "3x",
    title: "Resolute",
    desc: "Ideal for extended mission durations,offering reliable performance over prolonged periods.",
    src: "/images/missions/P1.png",
  },
  {
    data: "<5x",
    title: "Next Gen Climate and Weather Forecasting",
    desc: "The fuel is as safe to handle as common salt, requiring minimal safety precautions and significantly reducing infrastructure costs.",
    src: "/images/missions/P1.png",
  },
];

export default function page() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Intro Section */}
        <section className="bg-background text-secondary mx-auto my-20 w-full max-w-7xl pt-20 font-[300]">
          <div>
            <h3 className="text-[40px] leading-10 font-thin tracking-tight">
              GIT-RF-200
            </h3>
            <h5 className="text-primary text-[22px] font-[400] tracking-tight">
              RADIO FREQUENCY GRIDDED ION THRUSTER
            </h5>
          </div>
          <div className="mt-20 text-center">
            <h4 className="text-h4 font-thin tracking-tight">
              Meet Our First Gen RF-Gridded Ion Thruster
            </h4>
            <p className="mt-10 text-sm leading-4 tracking-tight text-[#acacad]">
              We are revolutionizing electric propulsion with cutting-edge
              RF-gridded ion thrusters that offer unmatched performance and
              efficiency. Our innovative designs prioritize extended lifespan,
              cost-effectiveness, and weight reduction, making them ideal for a
              wide range of satellite applications, from station-keeping to
              interplanetary maneuvers.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="text-secondary mx-auto max-w-7xl pt-20">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-h4 my-4 leading-12 font-thin tracking-tight">
              <span className="text-primary">Precision</span> Propulsion,
              Limitless <span className="text-primary">Possibilities</span>
            </h1>
            <p className="text-center text-lg leading-5 font-thin tracking-tight text-[#acacad]">
              Developing Advanced Ion Thrusters Pioneering the Future of
              Efficient and Precise Space Propulsion
            </p>
          </div>
          {/* card */}
          <div className="mx-auto my-10 flex max-w-4xl items-center justify-between text-[14px] font-[300] text-[#acacad]">
            {cards.map((card, id) => (
              <div
                key={id}
                className="relative flex h-[280] w-[240] items-center justify-center rounded-2xl border-2 border-[#28282a] p-2 transition-all hover:scale-105 hover:border-1 hover:shadow-[0_10px_70px_rgba(14,35,60,1.00)]"
                style={{
                  backgroundImage: `url(${card.src})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex flex-col items-center justify-center text-center font-[400]">
                  <h1 className="text-secondary text-[80px]">{card.data}</h1>
                  <p className="text-secondary">{card.title}</p>
                  <p className="pt-2 text-center text-[13px] leading-4 font-thin">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
