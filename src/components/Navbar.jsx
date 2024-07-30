import React from "react";
import logo from "../assets/mylogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        yoyo: Infinity // Causes the animation to loop
      }
    }
  };

  return (
    <nav className="mb-5 lg:mb-10 flex flex-col lg:flex-row items-center justify-between pt-12 py-6 px-2">
      <div className="flex items-center mb-4 lg:mb-0">
        <img className="w-24 lg:w-32" src={logo} alt="Logo" />
      </div>
      <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 text-2xl lg:text-3xl">
        <motion.a
          href="https://www.linkedin.com/in/belicks-am-751b40251/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <FaLinkedin />
          </motion.div>
        </motion.a>
        <motion.a
          href="https://github.com/belicks1999"
          target="_blank"
          rel="noopener noreferrer"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <FaGithub />
          </motion.div>
        </motion.a>
        <motion.a
          href="https://www.instagram.com/belicks_maxwell?igsh=Z2x0eWs1aDQ4eWs2&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <FaInstagram />
          </motion.div>
        </motion.a>
        <motion.a
          href="https://x.com/MaxBelicks"
          target="_blank"
          rel="noopener noreferrer"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <FaTwitterSquare />
          </motion.div>
        </motion.a>
        <motion.a
          href="https://www.facebook.com/share/9HpaY5oY8zmX7NuY/?mibextid=kFxxJD"
          target="_blank"
          rel="noopener noreferrer"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <FaFacebook />
          </motion.div>
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
