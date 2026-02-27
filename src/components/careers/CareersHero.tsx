import Image from "next/image";

export function CareersHero() {
  return (
    <section
      className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-around bg-transparent px-4 pt-[70px] pb-20 text-[#cbcbcb] md:min-h-[80vh] md:px-0 md:pb-0"
      style={{
        backgroundImage: `url(/images/careersMainImage.avif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex w-full flex-col justify-around md:flex-row">
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

      <div className="ellips">
        <Image
          src="/images/home/satellite.avif"
          alt="satellite"
          width={60}
          height={60}
          className="dot absolute bottom-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[40] md:mx-0 lg:w-[50]"
        />
      </div>
    </section>
  );
}
