'use client';
import { useState } from 'react';
import projects from '@/components/data/data';
import { SlideTabsExample } from '@/components/SlideTabsExample';
import Image from 'next/image';
import AnimatedContent from '@/components/AnimatedContent';

const Work = () => {
    const [selectedClass, setSelectedClass] = useState('9ᵉ année'); // Default selected class
    const filteredProjects = projects.filter((project) => project.classe === selectedClass); // Filter projects by selected class

    const handleTabClick = (classe) => {
        setSelectedClass(classe); // Update the selected class when a tab is clicked
    };

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                {/* SlideTabsExample for selecting classes */}
                <AnimatedContent>
                    <SlideTabsExample onTabClick={handleTabClick} />
                </AnimatedContent>

                <div className="flex flex-col xl:flex-row xl:gap-7 mt-8">
                    <div className="w-full grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {filteredProjects.map((project, index) => (
                            <AnimatedContent key={index}>
                                <div className="mb-8">
                                    {/* Project Title */}
                                    <h2 className="text-4xl font-bold leading-none text-white capitalize">
                                        {project.title}
                                    </h2>

                                    {/* Project Description */}
                                    <p className="text-white/60 mt-4">{project.description}</p>

                                    {/* Project Stack */}
                                    <ul className="flex flex-wrap gap-4 mt-4">
                                        {project.stack.map((item, idx) => (
                                            <li key={idx} className="text-accent">
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Project Image */}
                                    <div className="mt-6 relative w-full h-[300px]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* Project Link */}
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-block text-accent underline"
                                    >
                                        Télécharger
                                    </a>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;