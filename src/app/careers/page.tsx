import GradientText from "@/src/components/GradientText";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";

export default function Careers() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white">
        <main className="relative h-[100vh] w-full overflow-hidden">
          <h1 className="relative z-10 mx-[4vw] pt-[30vh] text-center text-[2.75rem] font-bold leading-[0.9] sm:text-5xl md:pt-[200px] md:text-5xl lg:text-5xl">
            <span className="block gap-[1vw] md:flex">
              Let's Shape
              <GradientText className="font-bold">The Future Of</GradientText>
            </span>

            <span className="block gap-[1vw] md:flex">
              <GradientText className="font-bold">Sustainable</GradientText>
              Space Propulsion
            </span>
          </h1>
          <h4 className="relative z-30 ml-[4vw] mr-0 mt-[100px] w-[90%] text-center leading-[1] md:ml-auto md:mr-[4vw] md:mt-[50px] md:w-[500px] md:text-left">
            We're looking for passionate, forward-thinking individuals to join
            our mission of engineering the future of space propulsion. At Gaia
            Space, your work will directly impact how we preserve and extend the
            life of critical spacecraft.
          </h4>
          <div className="absolute bottom-0 left-0 right-0 top-[50%] h-[55vh] w-full md:top-0 md:h-full">
            <Image
              fill
              className="object-cover"
              src="/Images/careersMainImage.avif"
              alt="careers-background-image"
            />
          </div>
        </main>
        <section className="h-[100vh] w-full bg-green-500">
          <h2></h2>
          <article></article>
        </section>
        <section>
          <article></article>
          <figure></figure>
        </section>
        <main>
          <section></section>
          <section></section>
        </main>
      </div>
    </>
  );
}
