import Image from "next/image";
export function CTA() {
  return (
    <main className="border-highlight mt-[100px] border-t-[1px] px-4 py-5 xl:px-0">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-20 md:flex-row md:items-end md:gap-0">
          <div className="mx-auto flex w-fit flex-col items-center font-[300] md:w-full md:items-start">
            <h2 className="text-secondary text-h5 md:text-h2 leading-7 tracking-tighter md:leading-12">
              <span className="text-primary">ACCELERATE</span> your <br /> space{" "}
              <span className="text-primary">ASPIRATION</span>
            </h2>
            <p className="text-primary my-4 md:my-0">JOIN US</p>
            <h5 className="text-secondary text-center text-[18px] font-[400] md:text-left md:text-base">
              JOIN GAIA SPACE. <br /> INNOVATE AND INSPIRE THE WORLD
            </h5>
            <p className="text-secondary mt-4 w-fit rounded-md bg-linear-65 from-purple-700 to-teal-400 px-2 py-1 font-[400]">
              Explore Opportunities
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/EarthFooter.png"
              alt=""
              width={300}
              height={10}
              className="mx-auto sm:w-[400] md:mx-0 lg:w-[700]"
            />
            <div className="circle absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-600" />
          </div>
        </div>
      </div>
    </main>
  );
}
