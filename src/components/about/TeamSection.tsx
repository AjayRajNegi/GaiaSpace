import { TeamCarousel } from "./TeamCarousel";
import Image from "next/image";

export function TeamSection() {
  return (
    <>
      <section className="mx-auto flex max-w-7xl flex-col items-center text-[#cbcbcb]">
        <h4 className="text-h4 font-[300] text-white">
          People behind the <span className="text-primary">Mission</span>
        </h4>
        <div className="mt-10 grid h-[700] w-5xl max-w-5xl grid-cols-6 grid-rows-5 gap-3 rounded-xl bg-[#0f0f0f] p-8">
          <div className="bg-highlight col-span-3 row-span-3 flex flex-col items-center justify-between rounded-lg py-6">
            <Image
              src="/images/about/MD.avif"
              alt="MD"
              width={200}
              height={200}
              className="aspect-square rounded-full object-cover object-top-right"
            />
            <p className="text-[16px] font-[300]">Dr. Sachin Shrivastav</p>
            <p className="w-fit border-r-[2] border-l-[2] px-2 leading-4 font-semibold">
              Managing Director
            </p>
            <Image
              src="/icon/InstaIcon.png"
              alt="logo"
              width={40}
              height={40}
            />
          </div>
          <div className="bg-highlight col-span-3 row-span-3 flex flex-col items-center justify-between rounded-lg py-6">
            <Image
              src="/images/about/CEO.avif"
              alt="CEO"
              width={200}
              height={200}
              className="aspect-square rounded-full object-cover object-top-right"
            />
            <p className="text-[16px] font-[300]">Shubham Haldar</p>
            <p className="w-fit border-r-[2] border-l-[2] px-2 leading-4 font-semibold">
              Chief Executive Officer
            </p>
            <Image
              src="/icon/InstaIcon.png"
              alt="logo"
              width={40}
              height={40}
            />
          </div>
          <div className="bg-highlight col-span-2 row-span-2 flex flex-col items-center justify-between rounded-lg py-2">
            <Image
              src="/images/about/ADM.avif"
              alt="CEO"
              width={130}
              height={130}
              className="aspect-square rounded-full object-cover object-center"
            />
            <p className="text-[16px] font-[300]">Dr. Rajesh Singh</p>
            <p className="w-fit border-r-[2] border-l-[2] px-2 leading-4 font-semibold">
              Advisory Board Member
            </p>
            <Image
              src="/icon/InstaIcon.png"
              alt="logo"
              width={35}
              height={35}
            />
          </div>
          <div className="bg-highlight col-span-2 row-span-2 flex flex-col items-center justify-between rounded-lg py-2">
            <Image
              src="/images/about/OD.avif"
              alt="CEO"
              width={130}
              height={130}
              className="aspect-square rounded-full object-cover object-top-right"
            />
            <p className="text-[16px] font-[300]">Rajeeth Chettty</p>
            <p className="w-fit border-r-[2] border-l-[2] px-2 leading-4 font-semibold">
              Head of Operations
            </p>
            <Image
              src="/icon/InstaIcon.png"
              alt="logo"
              width={35}
              height={35}
            />
          </div>
          <div className="bg-highlight col-span-2 row-span-2 flex flex-col items-center justify-between rounded-lg py-2">
            <Image
              src="/images/about/SBA.avif"
              alt="CEO"
              width={130}
              height={130}
              className="aspect-square rounded-full object-cover object-top-right"
            />
            <p className="text-[16px] font-[300]">Bhagyashree Singh</p>
            <p className="w-fit border-r-[2] border-l-[2] px-2 leading-4 font-semibold">
              Strategic Business Advisor
            </p>
            <Image
              src="/icon/InstaIcon.png"
              alt="logo"
              width={35}
              height={35}
            />
          </div>
        </div>
      </section>

      <TeamCarousel />
    </>
  );
}
