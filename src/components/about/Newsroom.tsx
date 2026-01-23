import Image from "next/image";

export function Newsroom() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center text-[#cbcbcb]">
      <h3 className="text-[40px]">Newsroom</h3>
      {/* News */}
      <div className="mt-5 grid w-[80%] grid-cols-2 gap-10 text-sm">
        {/* First */}
        <div className="col-span-1">
          <div className="relative h-[300]">
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
        <div className="col-span-1">
          <div className="relative h-[300]">
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
      <button className="font- mt-10 rounded-[10px] border-[0.5] border-white/60 px-20 py-2 text-lg text-white">
        Read More
      </button>
    </section>
  );
}
