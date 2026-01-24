export function CareersHero() {
  return (
    <section
      className="grad mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-around pt-[70px] text-[#cbcbcb]"
      style={{
        backgroundImage: `url(/images/careersMainImage.avif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex w-full justify-around">
        <h4 className="w-[40%] text-[28px] font-[300]">
          Let's Shape{" "}
          <span className="text-primary">
            the Future <br /> of Sustainable
          </span>{" "}
          Space Technology
        </h4>
        <h6 className="w-[40%] text-sm leading-4 font-[300]">
          We're looking for passionate, forward-thinking individuals to join our
          mission of engineering the future of space propulsion. At GaiaSpace
          your work will definitely impact how we preserve and extend the life
          of critical spacecraft.
        </h6>
      </div>
      <h5 className="text-[28px] font-[300]">
        <span className="text-primary">Internship</span> and Co-Op
      </h5>
    </section>
  );
}
