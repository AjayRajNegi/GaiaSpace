"use client";
import TransitionLinks from "./TransitionLinks";
import Image from "next/image";
import Nav from "./Nav";

const navLinks = [
  {
    id: 1,
    title: "Engineering",
    href: "/engineering",
  },
  {
    id: 2,
    title: "About Us",
    href: "/about",
  },
  {
    id: 3,
    title: "Careers",
    href: "/careers",
  },
  {
    id: 4,
    title: "Training Program",
    href: "/training_program",
  },
  {
    id: 5,
    title: "Partners",
    href: "/partners",
  },
];

export default function Navbar() {
  return (
    <>
      <nav className="absolute left-0 top-0 flex min-h-[70px] items-center justify-center bg-transparent">
        {/* Navbar for large displays */}
        <div className="navbar fixed left-[50%] top-[3vw] z-[9999] hidden max-w-[640px] -translate-x-[50%] items-center gap-10 rounded-full px-3 py-1 text-white md:flex">
          <TransitionLinks
            prefetch
            href="/home"
            className="flex items-center gap-2"
          >
            <img
              src="/logo.png"
              alt="logo"
              style={{ aspectRatio: 0.72 }}
              width={20}
              height={20}
            />
            <span>GAIA</span>
          </TransitionLinks>
          <ul className="flex">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="rounded-full px-3 py-1 transition-colors duration-500 hover:bg-[#D5B8FF]"
              >
                <TransitionLinks href={link.href}>{link.title}</TransitionLinks>
              </li>
            ))}
          </ul>
        </div>
        {/* Navbar for small displays */}
        <div className="fixed left-0 z-[999] flex w-full max-w-full flex-1 items-center justify-start text-white md:hidden">
          <div className="w-[42%]">
            <Nav />
          </div>
          <TransitionLinks
            href="/home"
            className="flex w-1/2 items-center gap-2"
          >
            <Image src="/logo.png" alt="logo" width={20} height={20} />
            <span>GAIA</span>
          </TransitionLinks>
        </div>
      </nav>
    </>
  );
}
