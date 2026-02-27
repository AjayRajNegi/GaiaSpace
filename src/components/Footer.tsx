import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <main className="text-secondary mx-auto w-full max-w-7xl px-4 md:mt-10">
        <div className="mx-auto w-fit text-center">
          <h4 className="text-[22px] font-[100] text-[#979798]">
            Throttling to the Beyond
          </h4>
          <Image
            src="/icon/SvgLogo.svg"
            alt="logo"
            height={50}
            width={500}
            className="my-5"
          />
          <button className="rounded-md bg-[#f8f3ea] px-14 py-1.5 text-[16px] text-black">
            Contact Us
          </button>
          <p className="mt-5 mb-2 font-thin text-[#979798]">
            © 2026 GaiaSpace and Co.
          </p>
        </div>
        <div className="h-[1px] w-full bg-[#818181]" />
        <div className="flex w-full flex-col py-8 text-sm font-thin text-[#bababd] md:flex-row">
          <div className="flex w-full justify-evenly gap-5 md:w-1/2 md:justify-start">
            <Link href="/about">About Us</Link>
            <Link href="/about">Careers</Link>
            <Link href="/about">Mission</Link>
            <Link href="/about">Training Program</Link>
          </div>
          <div className="mt-4 flex w-full justify-center gap-2 md:mt-0 md:w-1/2 md:justify-end">
            <Image
              src="/icon/TwitterIcon.png"
              alt="twitter"
              height={40}
              width={40}
            />
            <Image
              src="/icon/TwitterIcon.png"
              alt="twitter"
              height={40}
              width={40}
            />
            <Image
              src="/icon/TwitterIcon.png"
              alt="twitter"
              height={40}
              width={40}
            />
            <Image
              src="/icon/TwitterIcon.png"
              alt="twitter"
              height={40}
              width={40}
            />
          </div>
        </div>
      </main>
    </>
  );
}
