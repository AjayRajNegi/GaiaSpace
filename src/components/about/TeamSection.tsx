"use client";
import Image from "next/image";
import { TeamCarousel } from "./TeamCarousel";

export function TeamSection() {
  const leaders = [
    {
      src: "/images/about/team/MD.avif",
      alt: "MD",
      name: "Dr. Sachin Shrivastav",
      role: "Managing Director",
      size: 200,
      featured: true,
    },
    {
      src: "/images/about/team/CEO.avif",
      alt: "CEO",
      name: "Shubham Haldar",
      role: "Chief Executive Officer",
      size: 200,
      featured: true,
    },
  ];

  const members = [
    {
      src: "/images/about/team/ADM.avif",
      alt: "ADM",
      name: "Dr. Rajesh Singh",
      role: "Advisory Board Member",
    },
    {
      src: "/images/about/team/SBA.avif",
      alt: "SBA1",
      name: "Bhagyashree Singh",
      role: "Strategic Business Advisor",
    },
    {
      src: "/images/about/team/STA.png",
      alt: "SBA2",
      name: "Dr. Amit Thakur",
      role: "Senior Technical Advisor",
    },
    {
      src: "/images/about/team/HR.png",
      alt: "SBA3",
      name: "Deepak Rai",
      role: "Human Resource",
    },
    {
      src: "/images/about/OD.avif",
      alt: "OD",
      name: "Rajeeth Chetty",
      role: "Head of Operations",
    },
    {
      src: "/images/about/team/TechnicalLead.png",
      alt: "SBA4",
      name: "Divij Arora",
      role: "Technical Advisor",
    },
  ];

  return (
    <>
      <section className="mx-auto my-10 flex h-full max-w-7xl flex-col items-center px-4 text-[#cbcbcb]">
        <h4 className="text-h4 text-center font-thin text-white">
          People behind the <span className="text-primary">Mission</span>
        </h4>

        <div className="mt-10 w-full max-w-6xl rounded-xl bg-[#0f0f0f] p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {leaders.map((person) => (
              <div
                key={person.alt}
                className="bg-highlight flex flex-col items-center justify-around gap-4 rounded-lg px-4 py-8"
              >
                <Image
                  src={person.src}
                  alt={person.alt}
                  width={person.size}
                  height={person.size}
                  className="aspect-square h-36 w-36 rounded-full object-cover object-top-right sm:h-44 sm:w-44 md:h-[200px] md:w-[200px]"
                />
                <p className="text-center text-[16px] font-[300]">
                  {person.name}
                </p>
                <p className="w-fit border-r-[2] border-l-[2] px-2 text-center leading-4 font-semibold">
                  {person.role}
                </p>
                <Image
                  src="/icon/InstaIcon.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </div>
            ))}
          </div>

          {/* Team members  */}
          <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
            {members.map((person, i) => (
              <div
                key={`${person.alt}-${i}`}
                className="bg-highlight flex flex-col items-center justify-around gap-3 rounded-lg px-2 py-4"
              >
                <Image
                  src={person.src}
                  alt={person.alt}
                  width={130}
                  height={130}
                  className="aspect-square h-32 w-32 rounded-full object-cover object-top-right md:h-[130px] md:w-[130px]"
                />
                <p className="text-center text-[12px] font-[300] sm:text-[16px] md:text-sm">
                  {person.name}
                </p>
                <p className="w-fit px-2 text-center text-[12px] leading-4 font-[500] md:text-sm md:font-semibold">
                  {person.role}
                </p>
                <Image
                  className="md:h-[35px] md:w-[35px]"
                  src="/icon/InstaIcon.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <TeamCarousel />
    </>
  );
}
