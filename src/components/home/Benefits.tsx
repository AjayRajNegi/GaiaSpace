export function Benefits() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-20 text-center">
        <h3 className="text-secondary text-[40px] font-[400]">
          We help Earth benefit from space
        </h3>
        <h5 className="text-primary text-base font-[400]">
          Discover how GAIA SPACE transforms innovation in orbit into real-world
          impact on Earth.
        </h5>
      </div>
      <div className="mx-auto flex max-w-5xl items-center">
        {/* left */}
        <div className="grid w-1/2 grid-cols-2 grid-rows-2">
          <div>
            <h4 className="text-secondary mx-auto w-fit text-[18px] font-[300]">
              HYROCKEN
            </h4>
            <img
              src="/images/home/Benefit01.avif"
              className="mx-auto h-[164] w-[164]"
            />
          </div>
          <div>
            <h4 className="text-secondary mx-auto w-fit text-[18px] font-[300]">
              HYROCKEN
            </h4>
            <img
              src="/images/home/Benefit01.avif"
              className="mx-auto h-[164] w-[164]"
            />
          </div>
          <div>
            <h4 className="text-secondary mx-auto w-fit text-[18px] font-[300]">
              HYROCKEN
            </h4>
            <img
              src="/images/home/Benefit01.avif"
              className="mx-auto h-[164] w-[164]"
            />
          </div>
          <div>
            <h4 className="text-secondary mx-auto w-fit text-[18px] font-[300]">
              HYROCKEN
            </h4>
            <img
              src="/images/home/Benefit01.avif"
              className="mx-auto h-[164] w-[164]"
            />
          </div>
        </div>
        {/* center */}
        <div className="bg-secondary h-[360] w-0.5" />
        {/* right */}
        <div className="ml-10 w-1/2">
          <h3 className="text-secondary text-[40px] font-[400]">Who are we?</h3>
          <p className="text-secondary text-[18px] leading-[22px] font-[100] tracking-tighter">
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
          <button className="w-full">
            <p className="text-secondary text-h6 border-secondary ml-auto w-fit rounded-sm border-[1] px-2 py-1">
              Get In Touch
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
