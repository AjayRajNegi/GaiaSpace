import Image from "next/image";

const cards = [
  { title: "GNSS-independent tracking", src: "/images/missions/Card1.svg" },
  { title: "Global Coverage", src: "/images/missions/Card1.svg" },
  { title: "Defence reconnaissance", src: "/images/missions/Card1.svg" },
  { title: "Hypersonic surveillance", src: "/images/missions/Card1.svg" },
  { title: "Route Optimization", src: "/images/missions/Card1.svg" },
  { title: "Space Traffic Monitoring", src: "/images/missions/Card1.svg" },
  { title: "UAS / AAM integration", src: "/images/missions/Card1.svg" },
  { title: "Situational awareness", src: "/images/missions/Card1.svg" },
  { title: "Fuel Efficiency", src: "/images/missions/Card1.svg" },
];

export default function Capabilities() {
  return (
    <section className="bg-background text-secondary relative z-[99] mx-auto mt-[100vh] min-h-screen w-full max-w-7xl font-[300]">
      {/* Header */}
      <div>
        <h1 className="text-h2 leading-12 tracking-tight">
          We are <span className="text-primary">Advancing</span> <br /> Global
          <span className="text-primary"> Aviation </span>
          and
          <span className="text-primary"> Airspace </span>
        </h1>
        <p className="my-4 max-w-[55%] leading-5 text-[#acacad]">
          GAIA SPACE is powering next-generation space technology for aircraft
          traffic management system and analysis for the global aviation
          industry.
        </p>
        <h6 className="text-primary text-h6 font-[400]">CAPABILITIES</h6>
      </div>

      {/* Info Grid */}
      <div className="mt-8 grid grid-cols-3 grid-rows-3 gap-2">
        {cards.map((card, id) => (
          <div
            className="border-secondary col-span-1 flex flex-col items-center justify-center rounded-sm border-[0.5px] py-4"
            key={id}
          >
            <Image src={card.src} alt="Card" height={60} width={60} />
            <p className="mt-4 text-sm">{card.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
