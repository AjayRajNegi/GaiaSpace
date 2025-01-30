import { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: 1, title: "Section 1", content: "This is the content of Section 1." },
  { id: 2, title: "Section 2", content: "This is the content of Section 2." },
  { id: 3, title: "Section 3", content: "This is the content of Section 3." },
  { id: 4, title: "Section 4", content: "This is the content of Section 4." },
];

export default function Fs() {
  const [active, setActive] = useState(null);

  const handleClick = (id: any) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="flex w-full flex-col bg-white">
      {sections.map(({ id, title, content }) => (
        <motion.div
          key={id}
          className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[#3489db] text-white"
          initial={{ height: 40 }}
          animate={{ height: active === id ? 80 : 50 }}
          transition={{ duration: 0.5 }}
          onClick={() => handleClick(id)}
        >
          <h2 className="title">{title}</h2>
          {active === id && <p className="text-center">{content}</p>}
        </motion.div>
      ))}
    </div>
  );
}
