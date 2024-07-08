import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Replace with your actual EmailJS service ID, template ID, and user ID
        const serviceID = 'your_service_id';
        const templateID = 'your_template_id';
        const userID = 'your_user_id';

        try {
            await emailjs.send(serviceID, templateID, formData, userID);
            alert("Your message has been sent successfully!");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            console.error("Error sending email: ", error);
            alert("Failed to send the message. Please try again later.");
        }
    };

    // Intersection Observer hook for triggering animations
    const { ref: h1Ref, inView: h1InView } = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0.5 // Trigger animation when 50% of element is in view
    });

    const { ref: formRef, inView: formInView } = useInView({
        triggerOnce: false,
        threshold: 0.5
    });

    return (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <motion.h1
                ref={h1Ref}
                initial={{ opacity: 0, y: 50 }}
                animate={h1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className="my-20 text-center text-3xl lg:text-4xl"
            >
                Contact
            </motion.h1>
            <div ref={formRef} className="relative py-3 mb-20 sm:max-w-xl sm:mx-auto">
                <div className={`absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl ${formInView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}></div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20"
                >
                    <div className="text-center pb-6">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={h1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl"
                        >
                            Contact Us!
                        </motion.h1>
                        <p className="text-gray-300">
                            Fill up the form below to send me a email.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Name" name="name"
                            value={formData.name} onChange={handleChange} />

                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email" placeholder="Email" name="email"
                            value={formData.email} onChange={handleChange} />

                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Subject" name="subject"
                            value={formData.subject} onChange={handleChange} />

                        <textarea
                            className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Type your message here..." name="message"
                            value={formData.message} onChange={handleChange}
                            style={{ height: "121px" }}></textarea>

                        <div className="flex justify-between">
                            <input
                                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit" value="Send ➤" />

                            <input
                                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="reset" />
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
