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
    <section className="bg-background text-secondary relative z-99 mx-auto max-w-7xl pt-10">
      {/* Top section */}
      <section className="mx-auto w-full max-w-5xl pb-15 font-light">
        {/* Header */}
        <div className="text-center">
          <h6 className="text-primary text-p font-light md:text-[18px]">
            Proprietary Technology
          </h6>

          <h1 className="text-h5 my-4 leading-7 tracking-tight md:text-[38px] md:leading-12">
            Space-Based Radar and Signal Intelligence Suite
          </h1>
          <p className="text-center leading-5 tracking-tight text-[#acacad]">
            Space-based detectiona and tracking intelligence for uninterrupted
            global airspace awareness
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto my-10 flex max-w-4xl flex-col items-center justify-between gap-4 text-[14px] font-light text-[#acacad] md:flex-row md:gap-0">
          {cards.map((card, id) => (
            <div
              key={id}
              className="group relative flex h-[280] w-[240] items-end justify-center rounded-2xl border-2 border-[#28282a] pb-10 transition-all hover:scale-105 hover:border hover:shadow-[0_10px_70px_rgba(14,35,60,1.00)]"
              style={{
                backgroundImage: `url(${card.src})`,
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col items-center justify-center transition-transform duration-300 group-hover:-translate-y-17">
                <p>{card.title}</p>
                <button className="text-secondary mt-2 rounded-full bg-linear-65 from-purple-700 to-teal-400 px-2 py-px text-[12px] font-medium">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom section */}
      <section className="flex flex-col gap-10 font-thin tracking-tight md:flex-row md:justify-between md:gap-0">
        {/* Left */}
        <article className="flex w-full items-center justify-center md:w-[50%]">
          <p className="text-center text-[32px] leading-tight sm:text-[42px] sm:leading-14 md:text-left">
            <span className="text-primary">Precision </span> Flight <br />
            Boundless
            <span className="text-primary"> Skies</span>
          </p>
        </article>

        {/* Right */}
        <article className="flex w-full flex-col items-start text-[#acacad] md:w-[45%]">
          <p className="text-left text-sm sm:text-base">
            We deliver real-time global surveillance data, setting a new
            standard in aviation intelligence. Our advanced services empower
            aircraft operators to:
          </p>

          <div className="my-6 w-full">
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

          <button className="w-full rounded bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] font-[400] text-white sm:w-auto">
            <span className="flex w-full justify-center rounded bg-gray-900 px-6 py-2 text-white sm:px-10">
              Learn More about Our Technology
            </span>
          </button>
        </article>
      </section>

      {/* Get in touch section */}
      <section className="mx-auto mt-20 flex w-[70%] max-w-6xl flex-col items-center gap-8 border border-gray-800 bg-gray-950 p-6 text-center text-[22px] font-thin tracking-tight sm:p-8 sm:text-[28px] lg:w-full lg:flex-row lg:justify-between lg:gap-0 lg:p-10 lg:text-left">
        <div>
          <p className="mb-6 lg:mb-8">
            Or want to know more about <br className="hidden sm:block" /> our
            mission?
          </p>
          <p>Reach out to us!</p>
        </div>

        {/* Divider */}
        <div className="h-px w-full rounded-2xl bg-[#666666] lg:h-auto lg:w-1 lg:self-stretch" />

        <div className="flex flex-col items-center">
          <p className="text-center">
            Reach out to our team directly to <br className="hidden sm:block" />{" "}
            understand the program.
          </p>

          <button className="text-secondary mt-4 w-full rounded bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] font-[400] sm:w-auto">
            <span className="text-secondary flex w-full justify-center rounded bg-gray-900 px-10 py-2 text-base">
              Get In Touch
            </span>
          </button>
        </div>
      </section>
    </section>
  );
}
