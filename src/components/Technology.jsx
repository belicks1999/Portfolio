import React, { useRef } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { motion, useInView } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Technology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="border-b border-neutral-800 py-4 px-4 sm:px-24">
      <motion.h1
        className="my-24 text-center text-3xl lg:text-4xl"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-4 mb-24">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4 sm:p-8"
        >
          <RiReactjsLine className="text-4xl sm:text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4 sm:p-8"
        >
          <FaNodeJs className="text-4xl sm:text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4 sm:p-8"
        >
          <DiPostgresql className="text-4xl sm:text-7xl text-blue-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4 sm:p-8"
        >
          <SiMongodb className="text-4xl sm:text-7xl text-green-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4 sm:p-8"
        >
          <RiNextjsFill className="text-4xl sm:text-7xl text-gray-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4 sm:p-8"
        >
          <RiTailwindCssFill className="text-4xl sm:text-7xl text-blue-300" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4 sm:p-8"
        >
          <SiPostman className="text-4xl sm:text-7xl text-orange-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
