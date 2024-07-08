import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ABOUT_TEXT } from "../constants/index.js";
import profile from "../assets/pro.jpg"; // Replace with your new profile photo

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 20,
      });
    }
  }, [controls, inView]);

  const photoAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
    transition: { delay: 0.4, duration: 0.8 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="border-b border-neutral-900 pb-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-3xl lg:text-4xl "
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          initial={photoAnimation.initial}
          animate={photoAnimation.animate}
          transition={photoAnimation.transition}
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
        >
          <img className="rounded-2xl w-4/6" src={profile} alt="Profile" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <p className="my-2 max-w-xl py-6 font-light tracking-tight text-sm lg:text-lg lg:text-start text-justify">Hey there, I'm Belicks, a software engineer driven by a passion for building powerful web applications. I'm 24 years old and proud to hold a BEng (Hons) in Software Engineering from London Metropolitan University, along with an HND in Software Engineering from Pearson College London.

My journey into software development has been exciting. I've immersed myself in JavaScript, HTML, CSS, and frameworks such as Node.js, React.js, and Next.js, honing my skills to create seamless user experiences. Beyond coding, I'm adept at manual and foundational automated testing, ensuring the quality and reliability of every project I work on.<br/><br/>

With hands-on experience in agile environments, I've sharpened my collaboration skills, solving challenges alongside diverse teams. Git and SQL have become second nature, empowering me to manage projects efficiently and contribute effectively to their success.

I'm passionate about continuous learning, always eager to explore new technologies and methodologies. My goal is simple: to apply my expertise to innovate and create solutions that make a meaningful impact.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
