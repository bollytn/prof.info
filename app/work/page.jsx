'use client';
import { useRef, useState } from 'react';
import projects from '@/components/data/data';
import { SlideTabsExample } from '@/components/SlideTabsExample';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import AnimatedContent from '@/components/shared/AnimatedContent';

const gradient = (mask) =>
    `conic-gradient(black 0%, black ${mask ? 0 : 100}%, transparent ${mask ? 0 : 100}%, transparent 100%)`;

const ScrollImage = ({ project }) => {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target,
        offset: [
            [0, 0.75],
            [0.3, 0.6],
        ],
    });
    const smoothed = useSpring(scrollYProgress, {
        damping: 30,
        stiffness: 400,
        restDelta: 0.001,
    });
    const maskImage = useTransform(smoothed, [0, 1], [gradient(true), gradient(false)]);

    return (
        <motion.div
            ref={target}
            style={{ WebkitMaskImage: maskImage, maskImage }}
            className="relative w-full h-[300px] overflow-hidden rounded-lg"
        >
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
        </motion.div>
    );
};

const Work = () => {
    const [selectedClass, setSelectedClass] = useState('9ᵉ année'); // Default selected class
    const filteredProjects = projects.filter((project) =>
        project.classe.includes(selectedClass) // Check if selectedClass exists in the classe array
    );

    const handleTabClick = (classe) => {
        setSelectedClass(classe); // Update the selected class when a tab is clicked
    };

    // Scroll progress bar
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-yellow-300 origin-left z-50"
                style={{ scaleX }}
            />

            <motion.section
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
                }}
                className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
            >
                <div className="container mx-auto">
                    {/* SlideTabsExample for selecting classes */}
                    <AnimatedContent>
                        <SlideTabsExample onTabClick={handleTabClick} />
                    </AnimatedContent>

                    <div className="flex flex-col xl:flex-row xl:gap-7 mt-8">
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 text-center">
                            {filteredProjects.map((project, index) => (
                                <AnimatedContent key={index}>
                                    <div className="relative group mb-2 p-6 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-700">
                                        {/* Divider Line */}
                                        <h3 className="flex mb-4 items-center w-full">
                                            <span className="flex-grow bg-yellow-300 shadow-[0_0_5px_yellow] rounded h-px"></span>
                                            <span className=" mx-3 text-lg font-medium text-accent/60 animate-bounce">
                                                {project.category}
                                            </span>
                                            <span className="flex-grow bg-yellow-300 shadow-[0_0_5px_yellow] rounded h-px"></span>
                                        </h3>

                                        {/* Project Title */}
                                        <h2 className="text-4xl font-bold leading-none text-white capitalize group-hover:text-accent transition-all duration-300">
                                            {project.title} - {selectedClass}
                                        </h2>

                                        {/* Project Description */}
                                        <p className="text-white/60 mt-4 group-hover:text-white transition-all duration-300">
                                            {project.description}
                                        </p>

                                        {/* Project Stack */}
                                        <ul className="flex flex-wrap gap-4 mt-4 text-left">
                                            {project.stack.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-accent group-hover:text-yellow-300 transition-all duration-300"
                                                >
                                                    {item.name}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Project Image with Scroll Animation */}
                                        <ScrollImage project={project} />

                                        {/* Project Link */}
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-block text-accent group-hover:text-yellow-300 transition-all duration-300 relative"
                                        >
                                            <span className="absolute inset-0 scale-0 group-hover:border-b-2 group-hover:border-yellow-300 group-hover:scale-100 opacity-50 transition-transform duration-300 rounded-lg"></span>
                                            <span className="relative z-10 ">Télécharger</span>
                                        </a>
                                    </div>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Work;