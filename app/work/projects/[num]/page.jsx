
import Image from "next/image"; // Import the Image component
import projects from "@/components/data/data"; // Import your project data
import AnimatedContent from "@/components/shared/AnimatedContent";
import { HiOutlineDownload } from "react-icons/hi";


const gameName = [
    { name: "baguette", file: "1.sb2" },
    { name: "balon", file: "2.sb2" },
    { name: "blue sky", file: "3.sb2" },
    { name: "chasse clé", file: "4.sb2" },
    { name: "chasse aux sorciere", file: "5.sb2" },
    { name: "circulation", file: "6.sb2" },
    { name: "jeux robot", file: "7.sb2" },
    { name: "labyrinthe", file: "8.sb2" },
    { name: "poursuite dangereuse", file: "9.sb2" },
    { name: "rebond solo", file: "10.sb2" },
    { name: "singe", file: "11.sb2" },
];

const ProjectPage = async ({ params, searchParams }) => {
    const { num } = await params; // Extract the project number from params
    const selectedClas = (await searchParams)?.selectedClass || "default class"; // Get the selected class from query parameters

    const project = projects.find((p) => p.num === num);



    if (!project) {
        return <p className="text-center text-white flex justify-center items-center h-screen text-4xl font-bold">Project not found</p>;
    }

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-semibold text-center mt-4 text-accent">{selectedClas}</h1>
            <h2 className="text-3xl font-semibold text-center mt-4">{project.title}</h2>
            <p className="text-center text-white/60 mt-4 mb-8">{project.description}</p>
            {/* Display all images for project 1 */}
            {num === "01" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb1.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <h2></h2>
                            <Image
                                src={`/assets/work/9/mangeoire/cour${index}.png`} // Dynamically load images
                                alt={project.title}
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
                    <Image src="/assets/work/cover/thumb2.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
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
                    <Image src="/assets/work/cover/thumb3.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    <iframe
                        src="/assets/work/9/quiz/index.html" // Correct path to the HTML file in the public directory
                        width="100%"
                        height="700px"
                        className="border-none"
                        allowFullScreen
                    ></iframe>
                </div>
            )}


            {/* Display all images for project 4 */}
            {num === "04" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb4.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/cahier/cour${index}.png`} // Dynamically load images
                                alt={project.title}
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
                    <Image src="/assets/work/cover/thumb5.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
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
                    <Image src="/assets/work/cover/thumb6.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((index) => (
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

            {/* Display all images for project 7 */}
            {num === "07" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb7.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/9/fiche/cour${index}.png`} // Dynamically load images
                                alt={project.title}
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
                    <Image src="/assets/work/cover/thumb8.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/devoirs/ds12022/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 9 */}
            {num === "09" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb9.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/dstheorique/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 10 */}
            {num === "10" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb10.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4, 5].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/dspratique/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 11 */}
            {num === "11" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb11.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/test/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Embed the quiz/data/index.html file only for project 12 */}
            {num === "12" && (
                <div className="mt-12">
                    <Image src="/assets/work/cover/thumb12.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    <iframe
                        src="/assets/work/8/rappel/index.html" // Correct path to the HTML file in the public directory
                        width="100%"
                        height="700px"
                        className="border-none"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Display all images for project 13 */}
            {num === "13" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb13.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/guide/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all games for project 14 */}
            {num === "14" && (
                <div className="flex flex-col items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb14.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {gameName.map((game, index) => (
                        <div
                            key={index}
                            className="relative w-full max-w-4xl h-auto"
                        >
                            <h2 className="text-lg uppercase px-4 py-2 font-semibold text-center mt-8">
                                <a
                                    className="hover:text-yellow-300 hover:underline transition-all duration-300"
                                    href={`/assets/work/8/jeux/${game.file}`} // Path to the .sb2 file
                                    download={game.name} // Trigger file download
                                >
                                    {game.name}
                                    <HiOutlineDownload className="animate-bounce duration-700 inline-block ml-2 text-accent" />
                                </a>
                            </h2>
                            <Image
                                src={`/assets/work/8/jeux/${index + 1}.PNG`} // Dynamically load images
                                alt={`Game ${game.name}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Display all images for project 15 */}
            {num === "15" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb15.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4, 5].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/cartes/vert/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 16 */}
            {num === "16" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb15.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4, 5].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/cartes/bleu/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 17 */}
            {num === "17" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb15.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4, 5].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/cartes/rouge/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 18 */}
            {num === "18" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb16.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4, 5].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/7/juice/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 19 */}
            {num === "19" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb17.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4, 5].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/game/frog/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 20 */}
            {num === "20" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    {[1, 2, 3].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/devoirs/ds12024/cour${index}.png`} // Dynamically load images
                                alt={`Project 1 Image ${index}`}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 21 */}
            {num === "21" && (
                <div className="flex flex-col items-center gap-4 mt-2">
                    <h2 className="text-2xl font-semibold text-center">
                        <a
                            href="/assets/work/8/devoirs/ds22019/maison.sb2" // Path to the file
                            download="maison.sb2" // File name for download
                            className="hover:text-accent hover:underline"
                        >
                            Télécharger le fichier maison.sb2
                            <HiOutlineDownload className="animate-bounce duration-700 inline-block ml-2 text-accent" />
                        </a>
                    </h2>
                    <Image src="/assets/work/cover/thumb19.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-4">
                        {[1, 2, 3].map((index) => (
                            <AnimatedContent
                                key={index}
                                className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover"
                            >
                                <Image
                                    src={`/assets/work/8/devoirs/ds22019/cour${index}.png`} // Dynamically load images
                                    alt={`Project 1 Image ${index}`}
                                    width={1920} // Full width for large screens
                                    height={1080} // Maintain aspect ratio
                                    className="rounded-lg shadow-lg"
                                />
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            )}

            {/* Embed the quiz/data/index.html file only for project 22 */}
            {num === "22" && (
                <div className="mt-12">
                    <Image src="/assets/work/cover/thumb20.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    <iframe
                        src="/assets/work/8/devoirs/ds12018/index.html" // Correct path to the HTML file in the public directory
                        width="100%"
                        height="700px"
                        className="border-none"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Embed the quiz/data/index.html file only for project 23 */}
            {num === "23" && (
                <div className="mt-12">
                    <Image src="/assets/work/cover/thumb21.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    <iframe
                        src="/assets/work/7/devoirs/ds12018/index.html" // Correct path to the HTML file in the public directory
                        width="100%"
                        height="700px"
                        className="border-none"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Embed the quiz/data/index.html file only for project 24 */}
            {num === "24" && (
                <div className="mt-12">
                    <Image src="/assets/work/cover/thumb22.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    <iframe
                        src="/assets/work/8/quiz/test2021/index.html" // Correct path to the HTML file in the public directory
                        width="100%"
                        height="700px"
                        className="border-none"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Display all images for project 25 */}
            {num === "25" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb23.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/devoirs/ds22020/cour${index}.png`} // Dynamically load images
                                alt={project.title}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}


            {/* Display all images for project 26 */}
            {num === "26" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb24.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/9/devoirs/ds12019/cour${index}.png`} // Dynamically load images
                                alt={project.title}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 27 */}
            {num === "27" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb25.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/7/tp/tp1/cour${index}.png`} // Dynamically load images
                                alt={project.title}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Display all images for project 28 */}
            {num === "28" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb26.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/7/tp/tp2/cour${index}.png`} // Dynamically load images
                                alt={project.title}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}


            {/* Display all images for project 29 */}
            {num === "29" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb26.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/8/tp/tp1/cour${index}.png`} // Dynamically load images
                                alt={project.title}
                                width={1920} // Full width for large screens
                                height={1080} // Maintain aspect ratio
                                className="rounded-lg shadow-lg"
                            />
                        </AnimatedContent>
                    ))}
                </div>
            )}

            {/* Embed the quiz/data/index.html file only for project 30 */}
            {num === "30" && (
                <div className="mt-12">
                    <Image src="/assets/work/cover/thumb27.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    <iframe
                        src="/assets/work/7/quiz/testn12025/index.html" // Correct path to the HTML file in the public directory
                        width="100%"
                        height="700px"
                        className="border-none w-full"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Embed the quiz/data/index.html file only for project 31 */}
            {num === "31" && (
                <div className="mt-12">
                    <Image src="/assets/work/cover/thumb27.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    <iframe
                        src="/assets/work/7/quiz/quizpart1/index.html" // Correct path to the HTML file in the public directory
                        width="100%"
                        height="700px"
                        className="border-none w-full"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Embed the quiz/data/index.html file only for project 32 */}
            {num === "32" && (
                <div className="mt-12">
                    <Image src="/assets/work/cover/thumb27.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    <iframe
                        src="/assets/work/7/quiz/quizpart2/index.html" // Correct path to the HTML file in the public directory
                        width="100%"
                        height="700px"
                        className="border-none w-full"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Embed the quiz/data/index.html file only for project 33 */}
            {num === "33" && (
                <div className="mt-12">
                    <Image src="/assets/work/cover/thumb27.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    <iframe
                        src="/assets/work/7/quiz/quizpart3/index.html" // Correct path to the HTML file in the public directory
                        width="100%"
                        height="700px"
                        className="border-none w-full"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Embed the quiz/data/index.html file only for project 34 */}
            {num === "34" && (
                <div className="mt-12">
                    <Image src="/assets/work/cover/thumb27.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    <iframe
                        src="/assets/work/7/quiz/quizpart4/index.html" // Correct path to the HTML file in the public directory
                        width="100%"
                        height="700px"
                        className="border-none w-full"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Embed the quiz/data/index.html file only for project 35 */}
            {num === "35" && (
                <div className="mt-12">
                    <Image src="/assets/work/cover/thumb27.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    <iframe
                        src="/assets/work/8/quiz/quizpart5/index.html" // Correct path to the HTML file in the public directory
                        width="100%"
                        height="700px"
                        className="border-none w-full"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Display all images for project 36 */}
            {num === "36" && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                    <Image src="/assets/work/cover/thumb28.png"
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full" />
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((index) => (
                        <AnimatedContent key={index} className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover">
                            <Image
                                src={`/assets/work/9/books/book1/${index}.png`} // Dynamically load images
                                alt={project.title}
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