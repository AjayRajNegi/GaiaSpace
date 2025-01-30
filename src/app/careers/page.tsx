import GradientText from "@/src/components/GradientText";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";

export default function Careers() {
  return (
    <>
      <Navbar />
      <div className="text-white  flex items-center h-full justify-center ">
        <main className="w-full relative h-[100vh]">
          <h1 className="text-[2.75rem] leading-[0.9] sm:text-5xl md:text-5xl  lg:text-5xl font-bold ml-[4vw] pt-[200px] relative z-10">
            <span className="block md:flex gap-[1vw]">
              Let's Shape
              <GradientText className="font-bold">The Future Of</GradientText>
            </span>

            <span className="block md:flex gap-[1vw]">
              <GradientText className="font-bold">Sustainable</GradientText>
              Space Propulsion
            </span>
          </h1>
          <h4 className="mt-[100px] md:mt-[50px] leading-[1] relative w-[90%] md:w-[500px] z-30 ml-[4vw]  md:ml-auto mr-0 md:mr-[4vw]">
            We're looking for passionate, forward-thinking individuals to join
            our mission of engineering the future of space propulsion. At Gaia
            Space, your work will directly impact how we preserve and extend the
            life of critical spacecraft.
          </h4>
          <Image
            fill={true}
            className="object-cover"
            src="/Images/careersMainImage.avif"
            alt="careers-background-image"
          />
        </main>
        <section>
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
