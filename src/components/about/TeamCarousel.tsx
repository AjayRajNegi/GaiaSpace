import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "Rishab Sharma",
    role: "Supplier Relations Manger",
    image: "/images/about/team/SupplierRelationsManager.png",
    instagram: "/icon/InstaIcon.png",
    link: "https://www.linkedin.com/in/dr-rajeshsingh/",
  },
  {
    name: "Sannapareddy Meghana",
    role: "Researcher",
    image: "/images/about/team/Researcher.png",
    instagram: "/icon/InstaIcon.png",
  },
  {
    name: "Helisha Kukdeja",
    role: "Jr. Researcher",
    image: "/images/about/team/JuniorResearcher.png",
    instagram: "/icon/InstaIcon.png",
  },
  {
    name: "Kritika Singh",
    role: "Jr. Researcher",
    image: "/images/about/team/JrResearcher.png",
    instagram: "/icon/InstaIcon.png",
  },
  {
    name: "Dev Kumar",
    role: "Jr. Researcher",
    image: "/images/about/team/JrResearcher2.png",
    instagram: "/icon/InstaIcon.png",
  },
  {
    name: "Prabhat Sharma",
    role: "Jr. Researcher",
    image: "/images/about/team/TL.png",
    instagram: "/icon/InstaIcon.png",
  },
];

function TeamCard({ member }: { member: (typeof teamMembers)[0] }) {
  return (
    <div className="group flex h-[280px] w-full flex-col items-center justify-between rounded-xl bg-[#161616] px-4 py-6 text-center">
      <Image
        src={member.image}
        alt={member.name}
        width={130}
        height={100}
        className="aspect-square rounded-full border border-white/10 object-cover"
      />

      <div className="space-y-1">
        <p className="text-[16px] font-medium text-white">{member.name}</p>
        <p className="text-sm text-[#cbcbcb]">{member.role}</p>
      </div>

      {/* <a href={member.link} target="_blank">
        <Image
          src="/icon/linkedin.png"
          alt="Instagram"
          width={28}
          height={28}
          className="opacity-70 transition group-hover:opacity-100"
        />
      </a> */}
    </div>
  );
}

export function TeamCarousel() {
  return (
    <section className="mx-4 mt-4 rounded-xl bg-[#0f0f0f] px-4 py-6 text-[#cbcbcb] lg:mx-auto lg:w-5xl xl:w-6xl">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
        className="relative"
      >
        <CarouselContent className="md:ml-0">
          {teamMembers.map((member, index) => (
            <CarouselItem
              key={index}
              className="basis-full px-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4"
            >
              {/* <div className="flex justify-center"> */}
              <TeamCard member={member} />
              {/* </div> */}
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0 bg-black/60 p-4 hover:bg-black sm:p-6 md:p-8 lg:-left-24" />
        <CarouselNext className="right-0 bg-black/60 p-4 hover:bg-black sm:p-6 md:p-8 lg:-right-24" />
      </Carousel>
    </section>
  );
}
