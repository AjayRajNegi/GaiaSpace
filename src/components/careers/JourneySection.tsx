import { motion } from "framer-motion";
import Image from "next/image";

const roles = [
  { id: 1, desc: "Passionate about space technology." },
  { id: 2, desc: "Commited to environmental stability." },
  { id: 3, desc: "Innovative problem-solvers." },
  { id: 4, desc: "Collaborative team players." },
  { id: 5, desc: "Driven to make a lasting impact." },
];

export function JourneySection() {
  return (
    <>
      <article className="mx-auto flex max-w-[1300px] flex-col items-center justify-around pt-[100px] text-[#cbcbcb] lg:flex-row">
        {/* Journey */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
          className="ml-0 flex max-w-[100%] flex-col items-center lg:ml-[3vw] lg:max-w-[45%]"
        >
          <h2 className="text-h3 mb-5 font-thin text-white">
            Embark On Your Journey
          </h2>
          <p className="text-justify text-sm leading-4 tracking-tight">
            At Gaiaspace, your growth is our priority. Here, you’ll find a place
            where collaboration sparks innovation, ideas turn into
            breakthroughs, and your contributions truly matter. Join a vibrant
            team committed to shaping the future—together, we’ll reach new
            heights.
          </p>

          <div className="mt-16">
            {roles.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.6, 0.05, 0.01, 0.9],
                  delay: index * 0.1,
                }}
                className="mb-2 flex items-center gap-4 text-sm font-thin"
              >
                <Image
                  src="/icon/ArrowHead.png"
                  height={13}
                  width={13}
                  alt="ArrowHead"
                />
                {item.desc}
              </motion.li>
            ))}
          </div>
        </motion.section>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, 0.01, 0.9],
            delay: 0.2,
          }}
          className="relative mx-auto max-w-[100%] lg:mr-[3vw] lg:max-w-[60%]"
        >
          <Image
            src="/images/CareersPageJourneySection.png"
            height={300}
            width={600}
            alt="Journey"
          />
          <motion.h2
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
            className="text-h3 mt-5 text-center font-thin"
          >
            Who <span className="text-primary">We're Looking</span> For?
          </motion.h2>
        </motion.div>
      </article>

      <section className="mx-auto mt-20 flex max-w-7xl items-center justify-evenly gap-[18%] text-[#cbcbcb]">
        <h2 className="text-h3 font-thin tracking-tight text-white">
          Dont See Your <br /> Perfect Role?
        </h2>

        <div className="max-w-[80%] lg:max-w-[30%]">
          <motion.span
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
            className="text-center text-sm leading-4 font-thin"
          >
            <p>
              We're always looking for exceptional talent. Send your resume and
              with a brief introduction about yourself to <br />
              careers@gmail.com
            </p>
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, 0.01, 0.9],
              delay: 0.2,
            }}
            className="flex items-center justify-between"
          >
            <div className="border-primary w-[40%] border-t-[1px]"></div>
            <span className="text-h2 text-primary">OR</span>
            <div className="border-primary w-[40%] border-t-[1px]"></div>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, 0.01, 0.9],
              delay: 0.4,
            }}
            className="text-center text-sm leading-4 font-thin tracking-tighter"
          >
            <p>
              Join our exclusive training program, designed to align your skills
              and expertise with the rigorous standards of the global space
              industry.
            </p>
          </motion.span>
        </div>
      </section>
    </>
  );
}
