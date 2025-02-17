"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Data {
  title: string;
  desc?: string;
  data?: Data[]; // Recursive structure for nested data
}

const data: Data[] = [
  {
    title: "Propulsion Engineering",
    desc: "Join us as an intern in our propulsion engineering department to innovate, design, and propel the future capabilities of spacecraft propulsion.",
    data: [
      {
        title: "Electric Propulsion",
        desc: "Join our Electric Propulsion team as an intern and support the design, analysis, and optimization of advanced electric propulsion systems. Work alongside industry experts to enchance propulsion efficiency, improve system reliability, and contribute to the next-generation space technologies.",
        data: [{ title: "Join our Electric Propulsion Team" }],
      },
      {
        title: "Liquid Propulsion",
        desc: "Join our Liquid Propulsion team as an intern and support the design, analysis, and optimization of advanced electric propulsion systems. Work alongside industry experts to enchance propulsion efficiency, improve system reliability, and contribute to the next-generation space missions.",
        data: [
          {
            title: "Join our Liquid Propulsion Team",
            desc: "Advanced research opportunities available",
          },
        ],
      },
    ],
  },
  {
    title: "Satellite Engineering",
    desc: "Join our Satellite Engineering team as an intern to innovate, design, and shape the future of cutting-edge spacecraft technology",
    data: [
      {
        title: "Structural Engineering",
        desc: "Join our Structural Engineering team as an intern and support the design, analysis, and optimization of spacecraft structures, focusing on advanced materials, load dynamics, and structural integrity.",
        data: [{ title: "Join our Structural Engineering Team" }],
      },
      {
        title: "Orbital Mechanics and Controls",
        desc: "Join our Orbital Mechnaics and Controls team as an intern and support the design, analysis, and optimization of spacecraft trajectories, orbital dynamics, and control algorithms.",
        data: [{ title: "Join our Orbital Mechanics Team" }],
      },
      {
        title: "Guidance and Navigations",
        desc: "Join our Guidance and Navigations team as a intern and play a pivitol role in developing, testing, and optimizing advanced guidance systems, precision navigation algorithms, and trajectory planning specifically for lunar lander missions, enabling the future of space missions.",
        data: [{ title: "Join our Guidance and Navigations Team" }],
      },
    ],
  },
  {
    title: "General Internship",
    desc: "Become a General Intern with our team! Immerse yourself in the founder's office, where you'll play a key role in managing the team, developing content, and driving strategic initiatives. Gain practical experience in leadership, communication, and operational excellence, all within a dynamic and innovative setting.",
    data: [
      {
        title: "General Intern Program",
        desc: "Join our Guidance and Navigations team as a intern and play a pivitol role in developing, testing, and optimizing advanced guidance systems, precision navigation algorithms, and trajectory planning specifically for lunar lander missions, enabling the future of space missions.",
        data: [{ title: "Join our General Internship" }],
      },
    ],
  },
];

interface AccordionItemProps {
  title: string;
  desc?: string;
  data?: Data[];
  open: boolean;
  toggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  desc,
  data,
  open,
  toggle,
}) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordionItem px-auto px-5 pb-10 pt-5 md:px-10">
      <h2 className="flex items-center gap-6 pb-2 text-xl">
        {title}
        <motion.img
          alt="Arrow"
          onClick={toggle}
          src="/Icon/Arrow.png"
          style={{ width: 15, height: 15, cursor: "pointer" }}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </h2>
      {desc && <span className="pl-6 text-gray-300">{desc}</span>}

      <AnimatePresence>
        {open && data && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="desc px-5 md:px-14"
          >
            {data.map((item, idx) => (
              <div key={idx} className="px-2">
                {item.data && (
                  <MenuItem
                    title={item.title}
                    desc={item.desc}
                    data={item.data}
                    open={idx === openDropdown}
                    toggleDropdown={() => toggleDropdown(idx)}
                  />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const AccordianCareer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {data.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          desc={item.desc}
          data={item.data}
          open={index === openIndex}
          toggle={() => toggle(index)}
        />
      ))}
    </>
  );
};

interface MenuItemProps {
  title: string;
  desc?: string;
  data?: Data[];
  open: boolean;
  toggleDropdown: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  desc,
  data,
  open,
  toggleDropdown,
}) => {
  return (
    <div className="menuItem pt-10">
      <h3 className="flex items-center gap-6 pb-2">
        {title}
        <motion.img
          alt="Arrow"
          onClick={toggleDropdown}
          src="/Icon/Arrow.png"
          style={{ width: 15, height: 15, cursor: "pointer" }}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.7, type: "spring" }}
        />
      </h3>
      <span className="text-gray-300">{desc}</span>
      <hr
        style={{ marginTop: "10px" }}
        className="border-[0.2px] border-gray-500"
      />
      <AnimatePresence>
        {open && data && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="submenu"
          >
            {data.map((subItem, index) => (
              <div key={index} className="pt-4">
                <h3>{subItem.title}</h3>
                <span>{subItem.desc}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
