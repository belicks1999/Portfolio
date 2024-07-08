import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Project = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false, // Ensures the animation works every time it comes into view
    });

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

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const GITHUB_USERNAME = 'belicks1999';

                // Fetch repositories for the GitHub user
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const projectsData = await response.json();

                // Fetch languages for each project
                const projectsWithLanguages = await Promise.all(
                    projectsData.map(async (project) => {
                        const languagesResponse = await axios.get(project.languages_url);
                        const languages = Object.keys(languagesResponse.data);
                        return { ...project, languages };
                    })
                );

                setProjects(projectsWithLanguages);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching the projects: ", error);
                setError("Error fetching projects");
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: (
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded-full shadow-md"
                style={{ fontSize: '1.5rem' }}
            >
                Prev
            </button>
        ),
        nextArrow: (
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded-full shadow-md"
                style={{ fontSize: '1.5rem' }}
            >
                Next
            </button>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls} className="border-b border-neutral-800 container mx-auto px-4 pb-24 lg:px-8">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="my-24 text-center text-3xl lg:text-4xl"
            >
                Projects
            </motion.h1>
            {loading && <p className="text-center text-white">Loading projects...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!loading && !error && (
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="px-2 lg:px-4"
                        >
                            <div className="shadow-lg rounded-lg overflow-hidden h-full pb-16 w-full lg:h-96 relative bg-gray-800 bg-opacity-50 backdrop-blur-lg"> 
                                    <div className="p-4 lg:p-6 h-full flex flex-col justify-between">
                                        <div>
                                            <h2 className="text-white text-center text-xl lg:text-2xl font-bold mb-4 lg:mb-6">{project.name}</h2>
                                            <p className="text-gray-300 text-center text-sm lg:text-base mb-4 lg:mb-4">{project.description}</p>
                                        </div>
                                        <div className="flex-grow"></div>
                                        <div className="text-center mt-4 lg:mt-3">
                                            <div className="text-gray-400 text-center mb-4 lg:mb-6">
                                                <p>Languages: {project.languages.join(', ')}</p>
                                            </div>
                                            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="block">
                                                <button className="bg-blue-800 text-white rounded-lg py-2 px-4 transition-all duration-300 hover:bg-blue-700">GitHub</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                             

                        </motion.div>
                    ))}
                </Slider>
            )}
        </motion.div>
    );
};

export default Project;
