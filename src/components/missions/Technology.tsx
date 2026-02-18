const cards = [
  { title: "Real-Time Position", src: "/images/missions/1.png" },
  { title: "Global Airspace Coverage", src: "/images/missions/2.png" },
  { title: "Defense Surveillance", src: "/images/missions/3.png" },
];

export default function Technology() {
  return (
    <section className="bg-background text-secondary relative z-[99] mx-auto min-h-screen w-full max-w-5xl py-20 font-[300]">
      {/* Header */}
      <div className="text-center">
        <h6 className="text-primary text-[18px] font-[300]">
          Proprietary Technology
        </h6>

        <h1 className="my-4 text-[38px] leading-12 tracking-tight">
          Space-Based Radar and Signal Intelligence Suite
        </h1>
        <p className="text-center leading-5 tracking-tight text-[#acacad]">
          Space-based detectiona and tracking intelligence for uninterrupted
          global airspace awareness
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto my-10 flex max-w-4xl items-center justify-between text-[14px] font-[300] text-[#acacad]">
        {cards.map((card, id) => (
          <div
            key={id}
            className="group relative flex h-[280] w-[240] items-end justify-center rounded-2xl border-2 border-[#28282a] pb-10 transition-all hover:scale-105 hover:border-1 hover:shadow-[0_10px_70px_rgba(14,35,60,1.00)]"
            style={{
              backgroundImage: `url(${card.src})`,
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col items-center justify-center transition-transform duration-300 group-hover:-translate-y-20">
              <p>{card.title}</p>
              <button className="text-secondary mt-2 rounded-full bg-linear-65 from-purple-700 to-teal-400 px-2 py-[1px] text-[12px] font-[500]">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
