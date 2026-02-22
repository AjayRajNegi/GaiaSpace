import EngineSpecs from "@/src/components/engineering/EngineSpecs";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";

const cards = [
  {
    image: "/images/engineering/ClipA1.png",
    title: "Education Institution Support",
    desc: "Comprehensive support for educational institutions to develop safe, cost-effective, in-house propulsion test setups for hands-on learning and research.",
    src: "/images/engineering/S1.png",
  },
  {
    image: "/images/engineering/ClipA2.png",
    title: "Mission Design",
    desc: "Comprehensive support for sounding rockets with hybrid propulsion or payload deployment, from design to launch, ensuring optimal performance, reliability, and efficiency.",
    src: "/images/engineering/S2.png",
  },
  {
    image: "/images/engineering/ClipA3.png",
    title: "Training Program",
    desc: "Our exclusive student training program is designed for hands-on industry standard learning with testing of hybrid propulsion technology.",
    src: "/images/engineering/S3.png",
  },
];

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

        {/* Engine Specification */}
        <EngineSpecs />

        {/* Cards */}
        <section className="text-secondary mx-auto max-w-7xl py-20">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-h4 my-4 leading-12 font-thin tracking-tight">
              Our Services
            </h1>
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
                  <Image
                    src={card.image}
                    alt={card.title}
                    height={130}
                    width={130}
                  />
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
    </>
  );
}
