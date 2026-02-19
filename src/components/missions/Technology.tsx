import Image from "next/image";

const cards = [
  { title: "Real-Time Position", src: "/images/missions/P1.png" },
  { title: "Global Airspace Coverage", src: "/images/missions/P2.png" },
  { title: "Defense Surveillance", src: "/images/missions/P3.png" },
];

const points = [
  "Minimize fuel consumption.",
  "Maintain optimal cruising altitudes.",
  "Enhance flexibility in flight planning.",
  "Utilize more efficient, direct routes.",
  "Benefit from unmatched data accuracy and transparency",
];

export default function Technology() {
  return (
    <section className="bg-background text-secondary relative z-[99] mx-auto min-h-screen max-w-7xl py-30">
      {/* Top section */}
      <section className="mx-auto w-full max-w-5xl pb-15 font-[300]">
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
              <div className="flex flex-col items-center justify-center transition-transform duration-300 group-hover:-translate-y-17">
                <p>{card.title}</p>
                <button className="text-secondary mt-2 rounded-full bg-linear-65 from-purple-700 to-teal-400 px-2 py-[1px] text-[12px] font-[500]">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom section */}
      <section className="flex justify-between font-thin tracking-tight">
        <article className="flex w-[50%] items-center justify-center">
          <div>
            <p className="text-[42px] leading-14">
              <span className="text-primary">Precision </span> Flight <br />
              Boundless
              <span className="text-primary"> Skies</span>
            </p>
          </div>
          <div></div>
        </article>
        <article className="flex w-[45%] flex-col items-start text-right text-[#acacad]">
          <p className="text-left">
            We deliver real-time global surveillance data, setting a new
            standard in aviation intelligence. Our advanced services empower
            aircraft operators to:
          </p>
          <div className="my-6">
            {points.map((point, id) => (
              <div
                key={id}
                className="mb-2 flex items-center gap-2 text-[14px] font-thin"
              >
                <Image
                  src="/icon/ArrowHead.png"
                  height={16}
                  width={16}
                  alt="ArrowHead"
                />
                <p>{point}</p>
              </div>
            ))}
          </div>

          <button className="rounded bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] font-[400] text-white">
            <span className="flex w-full rounded bg-gray-900 p-2 px-10 py-2 text-white">
              Learn More about Our Technology
            </span>
          </button>
        </article>
      </section>

      {/* Get in touch section */}
      <section className="mx-auto mt-20 flex max-w-6xl items-center justify-between border-1 border-gray-800 bg-gray-950 p-10 text-[28px] font-thin tracking-tight">
        <div>
          <p className="mb-8">
            Or want to know more about <br /> our mission ?
          </p>
          <p>Reach out to us! </p>
        </div>

        <div className="w-1 self-stretch rounded-2xl bg-[#666666]" />
        <div>
          <p className="text-center">
            Reach out to our team directly to <br /> understand the program.
          </p>

          <button className="text-secondary mt-4 w-full rounded bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] font-[400]">
            <span className="text-secondary flex w-full justify-center rounded bg-gray-900 p-2 px-10 py-2 text-base">
              Get In Touch
            </span>
          </button>
        </div>
      </section>
    </section>
  );
}
