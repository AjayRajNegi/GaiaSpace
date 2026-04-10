import { StepForwardIcon } from "lucide-react";
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
    <section className="text-secondary bg-background relative z-99 mx-auto max-w-7xl pt-10">
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
      <section className="relative flex flex-col gap-10 overflow-hidden font-thin tracking-tight md:flex-row md:justify-between md:gap-0">
        {/* Diagonal line — mobile (shallow slope) */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full md:hidden"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="70%"
            x2="100%"
            y2="30%"
            stroke="#484848"
            strokeWidth="1"
            strokeOpacity="0.3"
            //strokeDasharray="8 5"
          />
        </svg>

        {/* Diagonal line */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="100%"
            x2="100%"
            y2="0"
            stroke="#484848"
            strokeWidth="1"
            //strokeOpacity="0.3"
          />
        </svg>

        {/* Center line — mobile */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full md:hidden"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="55%"
            x2="100%"
            y2="45%"
            stroke="#484848"
            strokeWidth="1"
            strokeOpacity="0.3"
            //strokeDasharray="8 5"
          />
        </svg>

        {/* Center line — desktop */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="60%"
            x2="100%"
            y2="40%"
            stroke="#484848"
            strokeWidth="1"
            //strokeOpacity="0.3"
          />
        </svg>

        {/* Keyframes for all slopes */}
        <style>{`
    @keyframes flyDiagonalMobile {
      0%   { left: -4%; top: 65%; }
      100% { left: 104%; top: 25%; }
    }
    @keyframes flyDiagonalDesktop {
  0%   { left: -4%; top: 99%; }
  100% { left: 104%; top: -5%; }
}
    @keyframes flyCenterMobile {
      0%   { left: -4%; top: 53%; }
      100% { left: 104%; top: 43%; }
    }
    @keyframes flyCenterDesktop {
      0%   { left: -4%; top: 58%; }
      100% { left: 104%; top: 35%; }
    }
  `}</style>

        {/* Mobile plane */}
        <Image
          src="/images/missions/airplane.png"
          width={20}
          height={20}
          alt="plane"
          className="md:hidden"
          style={{
            position: "absolute",
            animation: "flyDiagonalMobile 9s linear infinite",
            transform: "rotate(60deg)",
          }}
        />

        {/* Desktop plane */}
        <Image
          src="/images/missions/airplane.png"
          width={20}
          height={20}
          alt="plane"
          className="hidden md:block"
          style={{
            position: "absolute",
            animation: "flyDiagonalDesktop 16s linear infinite",
            transform: "rotate(70deg)",
          }}
        />

        {/* Center plane — mobile */}
        <Image
          src="/images/missions/airplane.png"
          width={20}
          height={20}
          alt="plane"
          className="md:hidden"
          style={{
            position: "absolute",
            animation: "flyCenterMobile 12s linear infinite",
            animationDelay: "3s",
            transform: "rotate(90deg)",
          }}
        />

        {/* Center plane — desktop */}
        <Image
          src="/images/missions/airplane.png"
          width={20}
          height={20}
          alt="plane"
          className="hidden md:block"
          style={{
            position: "absolute",
            animation: "flyCenterDesktop 20s linear infinite",
            //animationDelay: "",
            transform: "rotate(90deg)",
          }}
        />
        <div className="pointer-events-none absolute inset-0">
          <div className="from-background absolute inset-y-0 left-0 w-[20vw] bg-linear-to-r to-transparent" />
          <div className="from-background absolute inset-y-0 right-0 w-[20vw] bg-linear-to-l to-transparent" />
        </div>

        {/* Left */}
        <article className="z-99 flex w-full items-center justify-center md:w-[50%]">
          <p className="text-center text-[32px] leading-tight sm:text-[42px] sm:leading-14 md:text-left">
            <span className="text-primary">Precision </span> Flight <br />
            Boundless
            <span className="text-primary"> Skies</span>
          </p>
        </article>

        {/* Right */}
        <article className="z-99 flex w-full flex-col items-start text-[#acacad] md:w-[45%]">
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

          <button className="w-full rounded bg-linear-to-r from-blue-500 to-purple-500 p-px font-normal text-white sm:w-auto">
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
        <div className="h-px w-full rounded-2xl bg-[#666666] lg:h-auto lg:w-px lg:self-stretch" />

        <div className="flex flex-col items-center">
          <p className="text-center">
            Reach out to our team directly to <br className="hidden sm:block" />{" "}
            understand the program.
          </p>

          <button className="text-secondary mt-4 w-full rounded bg-linear-to-r from-blue-500 to-purple-500 p-px font-normal sm:w-auto">
            <span className="text-secondary flex w-full justify-center rounded bg-gray-900 px-10 py-2 text-base">
              Get In Touch
            </span>
          </button>
        </div>
      </section>
    </section>
  );
}
