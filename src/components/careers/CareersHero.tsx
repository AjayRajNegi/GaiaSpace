import Image from "next/image";

export function CareersHero() {
  return (
    <section
      className="relative mx-auto mt-10 flex h-[600px] max-w-[1500px] flex-col items-center justify-around bg-transparent px-4 pt-[20px] pb-20 text-[#cbcbcb] md:h-[80vh] md:min-h-[700px] md:pt-[70px] md:pb-0 lg:px-0"
      style={{
        backgroundImage: `url(/images/careersMain.png)`,
        backgroundSize: "contain",
        backgroundPosition: "50% 250px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-around md:flex-row">
        <h4 className="text-h6 mb-4 w-full text-center font-[300] md:mb-0 md:w-[40%] md:text-left md:text-[28px]">
          Let's Shape{" "}
          <span className="text-primary">
            the Future <br /> of Sustainable
          </span>{" "}
          Space Technology
        </h4>
        <h6 className="w-full text-justify text-sm leading-4 font-[300] md:w-[40%]">
          We're looking for passionate, forward-thinking individuals to join our
          mission of engineering the future of space propulsion. At GaiaSpace
          your work will definitely impact how we preserve and extend the life
          of critical spacecraft.
        </h6>
      </div>
      <h5 className="text-[28px] font-[300]">
        <span className="text-primary">Internship</span> and Co-Op
      </h5>

      <div className="">
        <Image
          src="/images/home/satellite.avif"
          alt="satellite"
          width={60}
          height={60}
          className="dot absolute bottom-[20%] left-1/2 block -translate-x-1/2 -translate-y-1/2 sm:w-[40] md:mx-0 md:hidden lg:w-[50]"
        />
        <Image
          src="/images/home/satellite.avif"
          alt="satellite"
          width={60}
          height={60}
          className="dotMD absolute bottom-[20%] left-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:w-[40] md:mx-0 md:block md:w-[100]"
        />
      </div>
    </section>
  );
}
