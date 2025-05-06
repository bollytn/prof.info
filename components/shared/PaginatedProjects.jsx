import { useState } from "react";
import AnimatedContent from "@/components/shared/AnimatedContent";
import ScrollImage from "@/components/shared/ScrollImage";
import Link from "next/link";

const itemsPerPage = 6; // Number of items per page

const PaginatedProjects = ({ projects, selectedClass }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const paginatedProjects = projects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div>
            {/* Render Paginated Items */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {paginatedProjects.map((project, index) => (
                    <AnimatedContent key={index}>
                        <div className="relative group mb-2 p-6 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-700">
                            <h3 className="flex mb-4 items-center w-full">
                                <span className="flex-grow bg-yellow-300 shadow-[0_0_5px_yellow] rounded h-px"></span>
                                <span className="uppercase mx-3 text-lg font-medium text-accent/60 animate-bounce">
                                    {project.category}
                                </span>
                                <span className="flex-grow bg-yellow-300 shadow-[0_0_5px_yellow] rounded h-px"></span>
                            </h3>
                            <h2 className="text-4xl font-bold leading-none text-white capitalize group-hover:text-accent transition-all duration-300">
                                {project.title} - {selectedClass}
                            </h2>
                            <p className="text-white/60 mt-4 group-hover:text-white transition-all duration-300">
                                {project.description}
                            </p>
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
                            <ScrollImage project={project} />
                            <div className="mt-4 flex justify-center">
                                <Link
                                    href={`/work/projects/${project.num}?selectedClass=${encodeURIComponent(selectedClass)}`}
                                    className="mt-4 inline-block text-accent group-hover:text-yellow-300 transition-all duration-300 relative text-center rounded-lg px-4 py-2 hover:bg-gray-800 shadow-lg hover:shadow-2xl mx-auto"
                                >
                                    <span className="absolute inset-0 scale-0 group-hover:border-b-2 group-hover:border-yellow-300 group-hover:scale-100 opacity-50 transition-transform duration-300 rounded-lg"></span>
                                    <span className="relative z-10">Ouvrir</span>
                                </Link>
                            </div>
                        </div>
                    </AnimatedContent>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination-controls mt-4 flex justify-center items-center gap-4">
                <AnimatedContent>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300 hover:text-black active:scale-95 active:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                </AnimatedContent>
                <span className="px-4 py-2">{`Page ${currentPage} of ${Math.ceil(
                    projects.length / itemsPerPage
                )}`}</span>
                <AnimatedContent>
                    <button
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, Math.ceil(projects.length / itemsPerPage))
                            )
                        }
                        disabled={currentPage === Math.ceil(projects.length / itemsPerPage)}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300 hover:text-black active:scale-95 active:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </AnimatedContent>
            </div>
        </div>
    );
};

export default PaginatedProjects;