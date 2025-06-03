import { motion } from "motion/react";

type TextTypingProps = {
  desc: string;
  className: string;
};

export default function TextTyping({ desc, className }: TextTypingProps) {
  const words = desc.split(" ");

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: i / 50 }}
          className="mr-[0.4rem] inline-block font-roboto font-[200]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
