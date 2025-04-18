'use client';
import { useRef, useState, useEffect } from 'react';
import projects from '@/components/data/data';
import { SlideTabsExample } from '@/components/SlideTabsExample';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import AnimatedContent from '@/components/shared/AnimatedContent';
import { Reveal } from '@/components/shared/Reveal';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAllImagesFromStorage } from '@/components/data/firebaseConfig';

const gradient = (mask) =>
    `conic-gradient(black 0%, black ${mask ? 0 : 100}%, transparent ${mask ? 0 : 100}%, transparent 100%)`;

const ScrollImage = ({ project }) => {

    // ... (ScrollImage component remains the same)
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
                sizes="100vw"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
        </motion.div>
    );
};

const Work = () => {
    const [selectedClass, setSelectedClass] = useState('9ᵉ année');
    const [firebaseImages, setFirebaseImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Fetch images when component mounts
        const fetchImages = async () => {
            try {
                setLoading(true);
                // You can specify a path like 'projects/' or leave empty to get all images
                const images = await getAllImagesFromStorage('projects/');
                setFirebaseImages(images);
                console.log('Fetched images:', images);
            } catch (error) {
                console.error('Error fetching images:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    // Remove this function - no longer needed for the link
    const handleProjectClick = (num) => {
        router.push(`/work/projects/${num}?selectedClass=${encodeURIComponent(selectedClass)}`);
    };

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
    {/* Loading indicator */}
    {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-300"></div>
                </div>
            )}

            {/* Rest of your component */}
            {/* ... */}
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
                                            <span className="uppercase mx-3 text-lg font-medium text-accent/60 animate-bounce">
                                                {project.category}
                                            </span>
                                            <span className="flex-grow bg-yellow-300 shadow-[0_0_5px_yellow] rounded h-px"></span>
                                        </h3>

                                        {/* Project Title */}
                                        <Reveal>
                                            <h2 className="text-4xl font-bold leading-none text-white capitalize group-hover:text-accent transition-all duration-300">
                                                {project.title} - {selectedClass}
                                            </h2>
                                        </Reveal>

                                        {/* Project Description */}
                                        <Reveal>
                                            <p className="text-white/60 mt-4 group-hover:text-white transition-all duration-300">
                                                {project.description}
                                            </p>
                                        </Reveal>

                                        {/* Project Stack */}
                                        <Reveal>
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
                                        </Reveal>

                                        {/* Project Image with Scroll Animation */}
                                        <ScrollImage project={project} />

                                        {/* Project Link - MODIFIED HERE */}
                                        <div className="mt-4 flex justify-center">
                                            <Reveal>
                                                <Link
                                                    // Pass the selectedClass directly in the href
                                                    href={`/work/projects/${project.num}?selectedClass=${encodeURIComponent(selectedClass)}`}
                                                    className="mt-4 inline-block text-accent group-hover:text-yellow-300 transition-all duration-300 relative text-center rounded-lg px-4 py-2 hover:bg-gray-800 shadow-lg hover:shadow-2xl mx-auto"
                                                    style={{ display: 'block' }} // Ensures the button is centered
                                                >
                                                    <span className="absolute inset-0 scale-0 group-hover:border-b-2 group-hover:border-yellow-300 group-hover:scale-100 opacity-50 transition-transform duration-300 rounded-lg"></span>
                                                    {/* Remove the onClick handler from the span */}
                                                    <span
                                                        onClick={() => handleProjectClick(project.num)} // Optional: keep this for any additional logic
                                                        className="relative z-10">Ouvrir le projet</span>
                                                </Link>
                                            </Reveal>
                                        </div>
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
