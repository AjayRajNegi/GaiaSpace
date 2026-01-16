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
    <header className="sticky inset-x-0 top-0 bg-transparent px-4">
      <nav className="container mx-auto">
        <motion.button
          id="al"
          aria-label="Name"
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="relative z-10 flex flex-col space-y-1"
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
            } block h-[0.5px]`}
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
            } block h-[0.5px]`}
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
            } block h-[0.5px]`}
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
                className="fixed inset-0 flex flex-col justify-center space-y-10 bg-white p-6 lg:hidden"
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
                      className={`font-semibold ${
                        pathName === link.href
                          ? "text-3xl text-[#ad8adf] md:text-6xl"
                          : "text-2xl text-[#7A7A7A] md:text-5xl"
                      } flex items-center tracking-tight`}
                    >
                      <img
                        src={link.src}
                        alt="logo"
                        className={`${
                          pathName === link.href
                            ? "h-[50px] w-[50px] filter"
                            : "h-[40px] w-[40px]"
                        }`}
                        style={{ aspectRatio: 0.72 }}
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
                  className="h-px w-full bg-black"
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
                  className="flex list-none justify-center gap-x-4"
                >
                  <li>
                    <div className="h-8 w-8 rounded-lg bg-[#7A7A7A]"></div>
                  </li>
                  <li>
                    <div className="h-8 w-8 rounded-lg bg-[#7A7A7A]"></div>
                  </li>
                  <li>
                    <div className="h-8 w-8 rounded-lg bg-[#7A7A7A]"></div>
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
