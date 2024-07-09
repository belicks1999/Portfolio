import React, { useEffect, useState } from "react";
import { HERO_CONTENT } from "../constants/index.js";
import profile from "../assets/profile1.png";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const [typedText, setTypedText] = useState("");
  const words = ["Full Stack Developer", "Web Developer", "Software Engineer"]; // Words to cycle through
  let i = 0; // Index for words array
  let j = 0; // Index for characters in current word
  let currentWord = words[i]; // Current word being typed
  let isDeleting = false; // Flag to track if deleting characters

  useEffect(() => {
    const type = () => {
      currentWord = words[i];
      if (isDeleting) {
        setTypedText(currentWord.substring(0, j - 1));
        j--;
        if (j === 0) {
          isDeleting = false;
          i++;
          if (i === words.length) {
            i = 0;
          }
        }
      } else {
        setTypedText(currentWord.substring(0, j + 1));
        j++;
        if (j === currentWord.length) {
          isDeleting = true;
        }
      }
      setTimeout(type, 150);
    };

    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
      type(); // Start typing effect when component is in view
    } else {
      controls.start({
        opacity: 0,
        y: -50,
      });
    }

    return () => clearTimeout(type);
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      className="border-b border-neutral-900 py-6 lg:py-2 lg:mb-24"
    >
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="pb-4 lg:pb-8 text-3xl lg:text-7xl font-thin tracking-light"
            >
              Belicks AM
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent min-h-12 flex items-center justify-center"
            >
              {typedText}
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="my-2 text-justify max-w-xl py-4 lg:py-6 font-light tracking-tight text-sm lg:text-xl lg:text-start"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-1 lg:mt-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <img className="w-full lg:w-10/12" src={profile} alt="Profile" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
