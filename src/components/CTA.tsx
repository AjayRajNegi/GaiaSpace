"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function CTA() {
  const router = usePathname();
  return (
    <main className="border-highlight bg-background mt-[50px] border-t px-4 py-5 md:mt-[100px] xl:px-0">
      <div className="bg-background mx-auto max-w-7xl">
        <div className="flex flex-col items-stretch justify-between gap-20 lg:flex-row lg:items-stretch lg:gap-0">
          <div className="mx-auto flex w-fit flex-col items-center font-light lg:w-full lg:items-start">
            <h2 className="text-secondary text-h5 lg:text-h2 leading-7 tracking-tighter lg:leading-12">
              <span className="text-primary">ACCELERATE</span> your <br /> space{" "}
              <span className="text-primary">ASPIRATION</span>
            </h2>
            <div className="text-primary my-4 flex items-center gap-1 lg:my-4">
              {" "}
              <div className="bg-primary h-1 w-4" />{" "}
              <div className="bg-primary h-1 w-2" />
              <div className="bg-primary h-1 w-1 rounded-full" /> JOIN US
            </div>
            <h5 className="text-secondary text-center text-[18px] font-normal lg:text-left lg:text-base">
              JOIN GAIA SPACE. <br /> INNOVATE AND INSPIRE THE WORLD
            </h5>
            <Link
              href={`${
                router === "/training_program"
                  ? "/careers"
                  : "/training_program"
              }`}
              className="text-secondary mt-4 w-fit rounded-sm bg-linear-65 from-purple-700 to-teal-400 px-2 py-1 font-normal"
            >
              {router === "/training_program"
                ? "Explore Opportunities"
                : "Training Program"}
            </Link>
          </div>
          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/EarthFooter.png"
              alt=""
              width={500}
              height={10}
              className="mx-auto h-full w-[300] object-cover lg:w-full"
            />
            <Image
              src="/images/home/satellite.avif"
              alt="satellite"
              width={30}
              height={30}
              className="circle absolute left-1/2 -translate-x-1/2 sm:w-[40] lg:mx-0 lg:w-[50]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
