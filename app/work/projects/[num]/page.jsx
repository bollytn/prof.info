import Image from "next/image"; // Import the Image component
import projects from "@/components/data/data"; // Import your project data
import AnimatedContent from "@/components/shared/AnimatedContent";

const ProjectPage = async ({ params }) => {
    const { num } = await params; // Await the params object to access its properties

    // Find the project based on the number
    const project = projects.find((p) => p.num === num);

    if (!project) {
        return <p className="text-center text-white">Project not found</p>;
    }

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold text-center text-accent">{project.classe}</h1>
            <h2 className="text-3xl font-semibold text-center mt-4">{project.title}</h2>
            <p className="text-center text-white/60 mt-4 mb-8">{project.description}</p>
            {/* Display all images for project 1 */}
            {num === "01" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/9/mangeoire/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Embed the quiz/data/index.html file only for project 02 */}
            {num === "02" && (
                <div className="mt-12">
                    <iframe
                        src="/assets/work/8/quiz/index.html" // Correct path to the HTML file in the public directory
                        width="100%"
                        height="700px"
                        className="border-none"
                        allowFullScreen
                    ></iframe>
                </div>
            )}


            {/* Embed the quiz/data/index.html file only for project 03 */}
            {num === "03" && (
                <div className="mt-12">
                    <iframe
                        src="/assets/work/9/quiz/index.html" // Correct path to the HTML file in the public directory
                        width="100%"
                        height="700px"
                        className="border-none"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Display all images for project 7 */}
            {num === "07" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/9/fiche/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 4 */}
            {num === "04" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/cahier/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 5 */}
            {num === "05" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/cahier2/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 6 */}

            {num === "06" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/fiche/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 8 */}
            {num === "08" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    {[1, 2, 3].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/ds12022/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectPage;