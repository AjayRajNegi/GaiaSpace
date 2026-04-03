import Link from "next/link";

const benefits = [
  {
    title: "HYROCKEN",
    imageSrc: "/images/home/Benefit01.png",
  },
  {
    title: "GIT-RF",
    imageSrc: "/images/home/Benefit01.png",
  },
  {
    title: "NETWORK ROUTING",
    imageSrc: "/images/home/Benefit01.png",
  },
  {
    title: "SPACE TRAVEL",
    imageSrc: "/images/home/Benefit01.png",
  },
];

export function Benefits() {
  return (
    <div className="mx-auto max-w-7xl px-4 xl:px-0">
      {/* header */}
      <div className="mb-10 text-center md:mb-20">
        <h3 className="text-secondary text-h5 leading-5 font-[400] md:text-[40px] md:leading-15">
          We help Earth benefit from space
        </h3>
        <h5 className="text-primary mt-3 text-[15px] leading-4 font-[400] text-pretty md:mt-0">
          Discover how GAIA SPACE transforms innovation in orbit into real-world
          impact on Earth.
        </h5>
      </div>
      {/* content */}
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 md:flex-row md:px-0">
        {/* left */}
        <div className="grid w-full grid-cols-2 grid-rows-2 gap-2 md:w-1/2">
          {benefits.map((benefit, id) => (
            <div key={id}>
              {/* <h4 className="text-secondary mx-auto mb-2 w-fit text-[14px] font-light sm:text-[18px]">
                {benefit.title}
              </h4> */}
              <img
                src={benefit.imageSrc}
                className={`mx-auto h-[100px] w-[100px] sm:h-[130px] sm:w-[130px] md:h-[180px] md:w-[180px] ${id === 0 ? "transition-all duration-300 hover:brightness-200" : "blur-md"}`}
              />
            </div>
          ))}
        </div>

        {/* divider — horizontal on mobile, vertical on desktop */}
        <div className="bg-secondary my-6 h-0.5 w-full shrink-0 md:mx-6 md:my-0 md:h-[360px] md:w-0.5" />

        {/* right */}
        <div className="w-full md:ml-4 md:w-1/2">
          <h3 className="text-secondary text-[28px] font-normal sm:text-[34px] md:text-[40px]">
            Who are we?
          </h3>
          <p className="text-secondary sm:text-p text-[14px] leading-[20px] font-thin tracking-tighter md:text-[18px] md:leading-[22px]">
            At GAIA SPACE, we see space not as a distant frontier, from
            next-generation in-space propulsion to real-time air traffic
            insights from orbit, we create technologies that keep satellites
            moving efficiently, skies safer, and global networks more connected.
            <br />
            <br />
            At GAIA SPACE, we see space not as a distant frontier, from
            next-generation in-space propulsion to real-time air traffic
            insights from orbit, we create technologies that keep satellites
            moving efficiently, skies safer, and global networks more connected.
          </p>
          <div className="mt-4 flex w-full justify-end">
            <div className="flex w-fit rounded-sm bg-linear-to-r from-[#9139a5] to-[#520f9a] p-[2px] shadow-lg">
              <Link
                href="/contact"
                className="text-h6 rounded-sm bg-black px-2 py-1 text-white"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
