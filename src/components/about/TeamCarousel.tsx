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
    name: "Bhagyashree Singh",
    role: "Strategic Business Advisor",
    image: "/images/about/SBA.avif",
    instagram: "/icon/InstaIcon.png",
  },
  {
    name: "Bhagyashree Singh",
    role: "Strategic Business Advisor",
    image: "/images/about/SBA.avif",
    instagram: "/icon/InstaIcon.png",
  },
  {
    name: "Bhagyashree Singh",
    role: "Strategic Business Advisor",
    image: "/images/about/SBA.avif",
    instagram: "/icon/InstaIcon.png",
  },
  {
    name: "Bhagyashree Singh",
    role: "Strategic Business Advisor",
    image: "/images/about/SBA.avif",
    instagram: "/icon/InstaIcon.png",
  },
  {
    name: "Bhagyashree Singh",
    role: "Strategic Business Advisor",
    image: "/images/about/SBA.avif",
    instagram: "/icon/InstaIcon.png",
  },
  {
    name: "Bhagyashree Singh",
    role: "Strategic Business Advisor",
    image: "/images/about/SBA.avif",
    instagram: "/icon/InstaIcon.png",
  },
  {
    name: "Bhagyashree Singh",
    role: "Strategic Business Advisor",
    image: "/images/about/SBA.avif",
    instagram: "/icon/InstaIcon.png",
  },
  // add as many as you want
];

function TeamCard({ member }: { member: (typeof teamMembers)[0] }) {
  return (
    <div className="group flex h-[280px] w-[260px] flex-col items-center justify-between rounded-xl bg-[#161616] px-4 py-6 text-center">
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

      <Image
        src={member.instagram}
        alt="Instagram"
        width={28}
        height={28}
        className="opacity-70 transition group-hover:opacity-100"
      />
    </div>
  );
}

export function TeamCarousel() {
  return (
    <section className="mx-auto mt-4 w-3xl rounded-xl bg-[#0f0f0f] px-4 py-6 text-[#cbcbcb]">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
        className="relative"
      >
        <CarouselContent className="pl-2">
          {teamMembers.map((member, index) => (
            <CarouselItem
              key={index}
              className="basis-full pl-2 sm:basis-1/2 lg:basis-1/3"
            >
              <div className="flex justify-center">
                <TeamCard member={member} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="bg-black/60 p-8 hover:bg-black lg:-left-24" />
        <CarouselNext className="bg-black/60 p-8 hover:bg-black lg:-right-24" />
      </Carousel>
    </section>
  );
}
