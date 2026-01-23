import Image from "next/image";

export function Partners() {
  return (
    <section className="mx-auto my-20 flex max-w-7xl flex-col text-[#cbcbcb]">
      <div>
        <h6 className="text-h6">
          Our <span className="text-primary">PARTNERS</span> and{" "}
          <span className="text-primary">INVESTORS</span>
        </h6>
        <h4 className="my-4 text-[40px]/10 font-[300]">
          We like to partner with <br /> visionaries
        </h4>
        <p className="text-sm font-[300] text-[#D5D5D5]">
          We engage with global partners to address critical challenges and
          ensure a thriving, future-ready space economy.
        </p>
      </div>
      <div className="mt-5 flex w-full items-center justify-center gap-20">
        <Image
          src="/images/about/partner1.png"
          alt="partner"
          height={160}
          width={160}
        />
        <Image
          src="/images/about/partner2.png"
          alt="partner"
          height={110}
          width={110}
        />
        <Image
          src="/images/about/partner3.png"
          alt="partner"
          height={160}
          width={160}
        />
      </div>
    </section>
  );
}
