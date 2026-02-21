import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";

const cards = [
  {
    data: "50%",
    title: "High Performance",
    desc: " With advanced RF ionization, the GIT-RF enhances efficiency, thrust, and performance while minimizing power usage.",
    src: "/images/engineering/1.png",
  },
  {
    data: "3x",
    title: "Resolute",
    desc: "Ideal for extended mission durations,offering reliable performance over prolonged periods.",
    src: "/images/engineering/2.png",
  },
  {
    data: "<5x",
    title: "Next Gen Climate and Weather Forecasting",
    desc: "The fuel is as safe to handle as common salt, requiring minimal safety precautions and significantly reducing infrastructure costs.",
    src: "/images/engineering/3.png",
  },
];

export default function page() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Intro Section */}
        <section className="text-secondary mx-auto my-20 w-full max-w-7xl pt-20 font-[300]">
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
                className="relative flex h-[280] w-[240] items-center justify-center rounded-2xl border-2 border-[#28282a] p-3 transition-all hover:scale-105 hover:border-1 hover:shadow-[0_10px_70px_rgba(14,35,60,1.00)]"
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

        {/* Model */}

        {/* Support */}
        <section className="text-secondary mx-auto flex max-w-7xl items-stretch justify-between pt-20 font-thin">
          <article className="flex w-[30%] flex-col justify-evenly">
            <div>
              <h4 className="text-h3 leading-9">
                <span className="text-primary">Design,</span> Delivery and
                <span className="text-primary"> Support</span>
              </h4>
              <h5 className="text-h5 mt-5 leading-6">
                Mission & Engineering Excellence:
              </h5>
            </div>
            <div>
              <p className="text-[#acacad]">
                Strategic design and expert support for optimized satellite
                performance.
              </p>
            </div>
          </article>
          <article className="flex gap-2">
            <div className="flex h-[415] w-[315] flex-col items-center justify-center rounded-2xl bg-[#101010] p-5 text-center">
              <Image
                src="/images/engineering/ClipA2.png"
                alt="cip1"
                height={100}
                width={100}
              />
              <h5 className="text-primary mt-4 text-[18px] font-[400]">
                Engineering Support
              </h5>
              <p className="mt-4 text-sm leading-4 font-thin text-[#acacad]">
                Although our systems are built on a unified architecture, we
                recognize that each satellite builder has distinct requirements.
                That's why we offer personalized engineering support to every
                customer.
              </p>
            </div>
            <div className="flex h-[415] w-[315] flex-col items-center justify-center rounded-2xl bg-[#101010] p-5 text-center">
              <Image
                src="/images/engineering/ClipA3.png"
                alt="cip1"
                height={100}
                width={100}
              />
              <h5 className="text-primary mt-4 text-[18px] font-[400]">
                Mission Design
              </h5>
              <p className="mt-4 text-sm leading-4 font-thin text-[#acacad]">
                Whether it's orbit insertion, phasing, station keeping, debris
                avoidance, life extension, momentum management, de-orbiting, or
                all of the above, we're here to ensure your mission's success.
              </p>
            </div>
          </article>
        </section>

        {/* Get in touch section */}
        <section className="text-secondary mx-auto my-20 flex max-w-7xl items-center justify-between rounded-2xl bg-[#090b0e] p-10 text-[28px] font-thin tracking-tight">
          <div className="text-h2 leading-14 font-thin">
            <p>Want to know more ?</p>
            <p>Reach out to us! </p>
          </div>

          <div className="w-[50%]">
            <p className="text-p">
              Reach out to our team directly to understand the program, and
              address your quires one on one.
            </p>

            <button className="text-secondary mt-4 w-full rounded bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] font-[400]">
              <span className="text-secondary flex w-full justify-center rounded bg-gray-900 p-2 px-10 py-2 text-base">
                Get In Touch
              </span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
