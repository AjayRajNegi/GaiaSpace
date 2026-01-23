export function Invitation() {
  return (
    <section className="mx-auto mt-[100px] flex max-w-6xl flex-col items-center text-[#cbcbcb]">
      <div className="flex justify-evenly bg-[#090b0e] px-10 py-6">
        {/* Left */}
        <div className="flex w-[30%] flex-col items-center gap-4">
          <h3 className="text-[40px]">
            An <span className="text-primary">Invitation</span>
          </h3>
          <p className="text-[14px] font-[300]">Join us in our mission</p>
          <button className="w-full rounded-[10px] border-[0.5] border-white/50 py-2 text-center text-sm">
            Get In Touch
          </button>
          <div className="flex gap-2 text-sm">
            <p className="rounded-full bg-[#1b1b1a] px-4 py-2">
              Internship Co-op
            </p>
            <p className="rounded-full bg-[#1b1b1a] px-4 py-2">
              Training Program
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="flex w-1/2 flex-col justify-center gap-10 text-sm">
          <p>
            Join us on this journey. Whether you're a potential partner,
            customer. or o young professional with a passion for exploration and
            innovation, there is a place for you in our mission.
          </p>
          <p>Together. we're propelling the humankind to and for the beyond</p>
        </div>
      </div>
    </section>
  );
}
