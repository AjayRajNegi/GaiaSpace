"use client";
import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import TransitionLinks from "./TransitionLinks";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    id: 1,
    title: "Engineering",
    href: "/engineering",
    src: "/EnIcon.svg",
  },
  {
    id: 2,
    title: "About Us",
    href: "/about",
    src: "/AboutIcon.svg",
  },
  {
    id: 3,
    title: "Careers",
    href: "/careers",
    src: "/CareerIcon.svg",
  },
  {
    id: 4,
    title: "Training Program",
    href: "/training_program",
    src: "/TrainingIcon.svg",
  },
  {
    id: 5,
    title: "Partners",
    href: "/partners",
    src: "/PartnerIcon.svg",
  },
];
export default function Nav() {
  const pathName = usePathname();
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="sticky top-0 inset-x-0 px-4 bg-transparent">
      <nav className="container mx-auto">
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-1 relative z-10"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 5,
              },
            }}
            className={`w-4 ${
              mobileNav ? "bg-black" : "bg-white"
            } h-[0.5px] block`}
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className={`w-4 ${
              mobileNav ? "bg-black" : "bg-white"
            } h-[0.5px] block`}
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -5,
              },
            }}
            className={`w-4 ${
              mobileNav ? "bg-black" : "bg-white"
            } h-[0.5px] block`}
          ></motion.span>
        </motion.button>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "-100%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "afterChildren",
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "beforeChildren",
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 bg-white p-6 flex flex-col justify-center space-y-10 lg:hidden"
              >
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-3"
                >
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={` font-semibold ${
                        pathName === link.href
                          ? "text-[#ad8adf] text-3xl md:text-6xl"
                          : "text-[#7A7A7A] text-2xl md:text-5xl"
                      } flex items-center tracking-tight`}
                    >
                      <img
                        src={link.src}
                        alt=""
                        className={`${
                          pathName === link.href
                            ? "filter h-[50px] w-[50px]"
                            : "h-[40px] w-[40px]"
                        }`}
                      />

                      <TransitionLinks href={link.href}>
                        {link.title}
                      </TransitionLinks>
                    </li>
                  ))}
                </motion.ul>
                <motion.div
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="w-full h-px bg-black"
                ></motion.div>
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none flex justify-center gap-x-4"
                >
                  <li>
                    <div className="bg-[#7A7A7A] rounded-lg w-8 h-8"></div>
                  </li>
                  <li>
                    <div className="bg-[#7A7A7A] rounded-lg w-8 h-8"></div>
                  </li>
                  <li>
                    <div className="bg-[#7A7A7A] rounded-lg w-8 h-8"></div>
                  </li>
                </motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
