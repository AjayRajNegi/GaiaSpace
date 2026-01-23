import Image from "next/image";
export function CTA() {
  return (
    <main className="border-highlight mt-[100px] border-t-[1px] py-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between font-[300]">
            <h2 className="text-secondary text-h2 leading-12 tracking-tighter">
              <span className="text-primary">ACCELERATE</span> your <br /> space{" "}
              <span className="text-primary">ASPIRATION</span>
            </h2>
            <p className="text-primary">JOIN US</p>
            <h5 className="text-secondary">
              JOIN GAIA SPACE. <br /> INNOVATE AND INSPIRE THE WORLD
            </h5>
            <p className="text-secondary w-fit rounded-md bg-linear-65 from-purple-700 to-teal-400 px-2 py-1">
              Explore Opportunities
            </p>
          </div>
          <Image
            src="/images/EarthFooter.png"
            alt=""
            width={700}
            height={700}
          />
        </div>
      </div>
    </main>
  );
}
