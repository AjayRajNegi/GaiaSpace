import GradientText from "@/src/components/GradientText";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";

export default function Careers() {
  return (
    <>
      <Navbar />
      <div className="text-white  flex items-center h-full justify-center ">
        <main className="w-full h-[100vh]">
          <h1 className="text-5xl font-bold px-[4vw] pt-[200px]">
            <span className="flex gap-[1vw]">
              Let's Shape
              <GradientText className="font-bold">the Future of</GradientText>
            </span>

            <span className="flex gap-[1vw]">
              <GradientText className="font-bold">Sustainable</GradientText>
              Space Propulsion
            </span>
          </h1>
          <h4 className="h-[100px] mt-[50px] w-[500px] ml-[50vw]">
            We're looking for passionate, forward-thinking individuals to join
            our mission of engineering the future of space propulsion. At Gaia
            Space, your work will directly impact how we preserve and extend the
            life of critical spacecraft.
          </h4>
          <Image
            fill={true}
            className="sd"
            src="/Images/careersMainImage.webp"
            alt="asdf"
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
