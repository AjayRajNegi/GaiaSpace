import Image from "next/image";

export function Newsroom() {
  return (
    <section className="mx-6 flex max-w-7xl flex-col items-center text-[#cbcbcb] md:mx-auto">
      <h3 className="text-h5 font-thin md:text-[40px]">Newsroom</h3>
      {/* News */}
      <div className="mt-5 grid grid-cols-2 gap-10 text-sm md:w-[80%]">
        {/* First */}
        <div className="col-span-2 md:col-span-1">
          <div className="relative h-[250] md:h-[300]">
            <Image
              src="/images/about/newsroom1.png"
              alt="news"
              fill
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <h6 className="mt-1">20 March, 2025</h6>
          <p>Interactive session with the founder of Gaia Space Pvt. Ltd</p>
        </div>
        {/* Second */}
        <div className="col-span-2 md:col-span-1">
          <div className="relative h-[250] md:h-[300]">
            <Image
              src="/images/about/newsroom2.png"
              alt="news"
              fill
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <h6 className="mt-1">20 March, 2025</h6>
          <p>Interactive session with the founder of Gaia Space Pvt. Ltd</p>
        </div>
      </div>
      {/* Button */}
      <button className="font- mt-10 rounded-[10px] border-[0.5] border-white/60 px-30 py-2 text-lg text-white">
        Read More
      </button>
    </section>
  );
}
