import Navbar from "@/src/components/Navbar";
import Image from "next/image";

const card = [
  {
    review:
      "“Investor connections!  Found the perfect match, thanks for simplifying the search”",
    name: "Sarah Jones,",
    company: "GreenTech Solution",
  },
  {
    review:
      "“Investor connections!  Found the perfect match, thanks for simplifying the search”",
    name: "Sarah Jones,",
    company: "GreenTech Solution",
  },
  {
    review:
      "“Investor connections!  Found the perfect match, thanks for simplifying the search”",
    name: "Sarah Jones,",
    company: "GreenTech Solution",
  },
];

export default function TrainingPrograms() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-secondary">
        {/* Header */}
        <section className="relative mx-auto flex h-screen max-w-[1400px]">
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
        </section>

        {/* About */}
        <section className="mx-auto max-w-7xl font-thin">
          <h4 className="text-h4 mx-auto mb-10 w-fit">
            About the Training Program
          </h4>
          <p className="mb-10 text-justify text-[15px] tracking-tight text-[#acacad]">
            ITSP (Industrial Training for Space Propulsion) is a specialized
            training program designed to equip engineers, researchers, and STEM
            professionals with industry-grade expertise in space propulsion
            technologies. Focused on hybrid rocket propulsion systems, ITSP
            blends theoretical knowledge with hands-on experience in engine
            design, manufacturing, testing, and system integration. <br />
            <br />
            Enrolled candidates gains mission-ready skills aligned with
            aerospace industry standards, ensuring they are prepared for
            real-world applications in rocket propulsion, spacecraft
            engineering, and advanced thrust systems.
          </p>

          <h5 className="text-h5 mb-5 font-[500]">
            WHY <span className="text-primary">ITSP</span> ?
          </h5>

          <p className="text-justify text-[15px] tracking-tight text-[#acacad]">
            This program combining hands-on projects, real-world simulations,
            and expert-led sessions. With a focus on design, manufacturing, and
            system integration, the program bridges academia and industry,
            equipping candidates with cutting-edge skills and career-ready
            expertise in space propulsion.
          </p>
          <div className="mt-15 flex w-full justify-evenly">
            <button className="text-secondary w-[450px] rounded bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] font-[400]">
              <span className="text-secondary flex w-full justify-center rounded bg-gray-900 p-2 px-30 py-2 text-base">
                Brochure
              </span>
            </button>
            <button className="flex w-[450px] items-center justify-center gap-2 rounded bg-linear-65 from-purple-700 to-teal-400 py-1">
              Register Here
            </button>
          </div>
        </section>

        {/* Reviews */}
        <section className="mx-auto mt-40 max-w-7xl font-thin">
          {/* Header */}
          <h4 className="text-h4 mx-auto w-fit">
            Our Previous Training Session
          </h4>
          <h5 className="my-10 w-[45%] text-[22px]">
            Engineering{" "}
            <span className="text-primary">
              Tomorrow&apos;s Space Scientists
            </span>{" "}
            Through Knowledge, Training, and Innovation
          </h5>

          {/* Card */}
          <h5 className="text-h5 mx-auto mt-15 w-fit">
            Hear it from our students
          </h5>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-3 items-stretch gap-10">
            {card.map((card, id) => (
              <div
                key={id}
                className="group col-span-1 rounded-xl border-[0.5px] border-[#262727] bg-[#050505] p-4 transition-transform duration-300 hover:scale-105"
              >
                <Image src="/icon/apst.png" alt="apst" height={40} width={40} />
                <p className="p-4 text-sm tracking-tight">{card.review}</p>
                <div className="p-4 text-sm tracking-tight text-[#585858] transition-all duration-300 group-hover:text-[16px]">
                  <p>{card.name}</p>
                  <p>{card.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
