// c:\Users\admin\web\prof.info\app\work\page.jsx
'use client';
import { useRef, useState, useEffect } from 'react';
import projects from '@/components/data/data';
import { SlideTabsExample } from '@/components/SlideTabsExample';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import AnimatedContent from '@/components/shared/AnimatedContent';
import { Reveal } from '@/components/shared/Reveal'; // Import the Reveal component

import Link from "next/link"; // Import Link from Next.js
import { useRouter } from "next/navigation";
import { getFirestore, collection, getDocs } from "firebase/firestore"; // Import Firestore functions
import app from "@/components/data/FirebaseConfig"; // Import the Firebase app configuration

import PaginatedProjects from '@/components/shared/PaginatedProjects';

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

    {/*// Initialize Firestore
    const [projects, setProjects] = useState([]); // State to store the fetched projects

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'projects'));
            const fetchedProjects = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProjects(fetchedProjects);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    }*/}

    const [selectedClass, setSelectedClass] = useState('9ᵉ année'); // Default selected class
    const router = useRouter(); // Initialize the router

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
                        <div className="w-full gap-8 text-center">
                            {/* PaginatedProjects component */}
                            <PaginatedProjects projects={filteredProjects} selectedClass={selectedClass} />
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Work;
