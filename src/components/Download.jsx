import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Download = () => {
    const { ref: divRef, inView: divInView } = useInView({
        triggerOnce: false, 
        threshold: 0.5 // Trigger animation when 50% of element is in view
    });

    return (
        <motion.div
            ref={divRef}
            initial={{ opacity: 0, y: 50 }}
            animate={divInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-center mb-12"
        >
            <a
                href="https://www.dropbox.com/scl/fi/iuvwvz21b2ruk44gvcei9/Bell_CV_SE.pdf?rlkey=jejuy2m6rcwbvoxa2q4m1nd0i&st=k1bfr36g&dl=1"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Download CV
            </a>
        </motion.div>
    );
}

export default Download;
