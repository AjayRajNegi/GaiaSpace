"use client";
import Link from "next/link";
import TransitionLinks from "./TransitionLinks";
import Image from "next/image";
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="min-h-[70px] flex justify-center items-center bg-transparent">
        {/* Navbar for large displays */}
        <div className="navbar fixed hidden md:flex items-center gap-10 text-white px-3 py-1 rounded-full z-[9999]">
          <Link href="/home" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={20} height={20} /> GAIA
          </Link>
          <ul className="flex">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="hover:bg-[#D5B8FF] py-1 px-3 rounded-full transition-colors duration-500"
              >
                <TransitionLinks href={link.href}>{link.title}</TransitionLinks>
              </li>
            ))}
          </ul>
        </div>
        {/* Navbar for small displays */}
        <div className="fixed flex flex-1 md:hidden items-center justify-start text-white z-[999] w-full ">
          <div className="pr-[30%] pl-[15px]">
            <Nav />
          </div>
          <Link href="/home" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={20} height={20} />
            <span>GAIA</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
