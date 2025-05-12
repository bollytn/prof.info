import Image from "next/image";
import projects from "@/components/data/data";
import AnimatedContent from "@/components/shared/AnimatedContent";
import { HiOutlineDownload } from "react-icons/hi";

const renderContent = (num, project) => {
    const contentMap = {
        images: (path, count) => (
            <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-2">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    loading="lazy"
                    unoptimized
                    className="rounded-lg shadow-lg w-full"
                />
                {[...Array(count)].map((_, index) => (
                    <AnimatedContent
                        key={index}
                        className="relative w-full max-w-4xl h-auto rounded-lg overflow-hidden shadow-md shadow-accent-hover"
                    >
                        <Image
                            src={`${path}${index + 1}.webp`}
                            alt={`${project.title} Image ${index + 1}`}
                            width={1920}
                            height={1080}
                            loading="lazy"
                            unoptimized
                            className="rounded-lg shadow-lg"
                        />
                    </AnimatedContent>
                ))}
            </div>
        ),
        iframe: (src) => (
            <div className="mt-12">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    loading="lazy"
                    unoptimized
                    className="rounded-lg shadow-lg w-full"
                />
                <iframe
                    src={src}
                    width="100%"
                    height="700px"
                    className="border-none w-full"
                    loading="lazy"
                    allowFullScreen
                ></iframe>
            </div>
        ),
        downloads: (files) => (
            <div className="flex flex-col items-center gap-4 mt-2">
                {files.map((file, index) => (
                    <div key={index} className="relative w-full max-w-4xl h-auto">
                        <h2 className="text-lg uppercase px-4 py-2 font-semibold text-center mt-8">
                            <a
                                className="hover:text-yellow-300 hover:underline transition-all duration-300"
                                href={file.path}
                                download={file.name}
                            >
                                {file.name}
                                <HiOutlineDownload className="animate-bounce duration-700 inline-block ml-2 text-accent" />
                            </a>
                        </h2>
                    </div>
                ))}
            </div>
        ),
        coversAndDownloads: (items) => (
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
                {items.map((item, index) => (
                    <div key={index} className="relative w-full max-w-4xl h-auto flex flex-col items-center gap-2">
                        {/* Title */}
                        <h2 className="text-lg uppercase px-4 py-2 font-semibold text-center mt-2">
                            {item.name}
                        </h2>
                        {/* Cover Image */}
                        <Image
                            src={item.cover}
                            alt={item.name}
                            width={300}
                            height={200}
                            loading="lazy"
                            className="rounded-lg shadow-lg"
                        />
                        {/* Download Link */}
                        <a
                            className="hover:text-yellow-300 hover:underline transition-all duration-300"
                            href={item.path}
                            download={item.name}
                        >
                            Télécharger
                            <HiOutlineDownload className="animate-bounce duration-700 inline-block ml-2 text-accent" />
                        </a>
                    </div>
                ))}
            </div>
        ),
    };

    switch (num) {
        case "00":
            return (
                <div className="mt-12 ">
                    {/* Video */}
                    <video
                        src="/assets/work/9/projets/projet1/fin.webm"
                        autoPlay
                        loop
                        controls
                        className="rounded-lg shadow-lg w-full mb-8"
                    >
                        Your browser does not support the video tag.
                    </video>
                    {/* iframe */}
                    <iframe
                        title="carte tunisienne interactif"
                        src="https://forkphorus.github.io/embed.html#https://raw.githubusercontent.com/bollytn/prof.info/main/public/assets/work/9/projets/projet1/interactif%20carte%20tunisienne%20finish.sb3"
                        width="100%"
                        height="700px"
                        className="border-none w-full"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        case "01":
            return contentMap.images("/assets/work/9/mangeoire/cour", 12);
        case "02":
            return contentMap.iframe("/assets/work/8/quiz/index.html");
        case "03":
            return contentMap.iframe("/assets/work/9/quiz/index.html");
        case "04":
            return contentMap.images("/assets/work/8/cahier/cour", 19);
        case "05":
            return contentMap.images("/assets/work/8/cahier2/cour", 29);
        case "06":
            return contentMap.images("/assets/work/8/fiche/cour", 15);
        case "07":
            return contentMap.images("/assets/work/9/fiche/cour", 16);
        case "08":
            return contentMap.images("/assets/work/8/devoirs/ds12022/cour", 3);
        case "09":
            return contentMap.images("/assets/work/8/dstheorique/cour", 8);
        case "10":
            return contentMap.images("/assets/work/8/dspratique/cour", 5);
        case "11":
            return contentMap.images("/assets/work/8/test/cour", 4);
        case "12":
            return contentMap.iframe("/assets/work/8/rappel/index.html");
        case "13":
            return contentMap.images("/assets/work/8/guide/cour", 4);
        case "14":
            return contentMap.coversAndDownloads([
                { name: "baguette", path: "/assets/work/8/jeux/1.sb2", cover: "/assets/work/8/jeux/covers/1.PNG" },
                { name: "balon", path: "/assets/work/8/jeux/2.sb2", cover: "/assets/work/8/jeux/covers/2.PNG" },
                { name: "blue sky", path: "/assets/work/8/jeux/3.sb2", cover: "/assets/work/8/jeux/covers/3.PNG" },
                { name: "chasse clé", path: "/assets/work/8/jeux/4.sb2", cover: "/assets/work/8/jeux/covers/4.PNG" },
                { name: "chasse aux sorciere", path: "/assets/work/8/jeux/5.sb2", cover: "/assets/work/8/jeux/covers/5.PNG" },
                { name: "circulation", path: "/assets/work/8/jeux/6.sb2", cover: "/assets/work/8/jeux/covers/6.PNG" },
                { name: "jeux robot", path: "/assets/work/8/jeux/7.sb2", cover: "/assets/work/8/jeux/covers/7.PNG" },
                { name: "labyrinthe", path: "/assets/work/8/jeux/8.sb2", cover: "/assets/work/8/jeux/covers/8.PNG" },
                { name: "poursuite dangereuse", path: "/assets/work/8/jeux/9.sb2", cover: "/assets/work/8/jeux/covers/9.PNG" },
                { name: "rebond solo", path: "/assets/work/8/jeux/10.sb2", cover: "/assets/work/8/jeux/covers/10.PNG" },
                { name: "singe", path: "/assets/work/8/jeux/11.sb2", cover: "/assets/work/8/jeux/covers/11.PNG" },
            ]);
        case "15":
            return contentMap.images("/assets/work/8/cartes/vert/cour", 5);
        case "16":
            return contentMap.images("/assets/work/8/cartes/bleu/cour", 5);
        case "17":
            return contentMap.images("/assets/work/8/cartes/rouge/cour", 5);
        case "18":
            return contentMap.images("/assets/work/7/juice/cour", 5);
        case "19":
            return contentMap.images("/assets/work/8/game/frog/cour", 5);
        case "20":
            return contentMap.images("/assets/work/8/devoirs/ds12024/cour", 3);
        case "21":
            return (
                <>
                    {contentMap.images("/assets/work/8/devoirs/ds22019/cour", 3)}
                    {contentMap.downloads([
                        { name: "maison", path: "/assets/work/8/devoirs/ds22019/maison.sb2" },
                    ])}
                </>
            );
        case "22":
            return contentMap.iframe("/assets/work/8/devoirs/ds12018/index.html");
        case "23":
            return contentMap.iframe("/assets/work/7/devoirs/ds12018/index.html");
        case "24":
            return contentMap.iframe("/assets/work/8/quiz/test2021/index.html");
        case "25":
            return contentMap.images("/assets/work/8/devoirs/ds22020/cour", 4);
        case "26":
            return contentMap.images("/assets/work/9/devoirs/ds12019/cour", 3);
        case "27":
            return contentMap.images("/assets/work/7/tp/tp1/cour", 3);
        case "28":
            return contentMap.images("/assets/work/7/tp/tp2/cour", 3);
        case "29":
            return contentMap.images("/assets/work/8/tp/tp1/cour", 6);
        case "30":
            return contentMap.iframe("/assets/work/7/quiz/testn12025/index.html");
        case "31":
            return contentMap.iframe("/assets/work/7/quiz/quizpart1/index.html");
        case "32":
            return contentMap.iframe("/assets/work/7/quiz/quizpart2/index.html");
        case "33":
            return contentMap.iframe("/assets/work/7/quiz/quizpart3/index.html");
        case "34":
            return contentMap.iframe("/assets/work/7/quiz/quizpart4/index.html");
        case "35":
            return contentMap.iframe("/assets/work/8/quiz/quizpart5/index.html");
        case "36":
            return contentMap.images("/assets/work/9/books/book1/", 22);
        case "37":
            return contentMap.images("/assets/work/7/tp/unicorn/", 6);
        case "38":
            return contentMap.images("/assets/work/9/devoirs/ds32024/", 4);
        case "39":
            return contentMap.images("/assets/work/8/devoirs/ds32024/", 4);
        case "40":
            return contentMap.images("/assets/work/9/devoirs/ds22024/", 3);
        case "41":
            return contentMap.images("/assets/work/8/devoirs/ds22024/", 3);
        case "42":
            return contentMap.images("/assets/work/9/devoirs/ds32023/", 4);
        case "43":
            return contentMap.iframe("https://fr.educaplay.com/jeu/20813239-scratch.html");
        case "44":
            return contentMap.iframe("https://fr.educaplay.com/jeu/5387362-instructions_scratch.html");
        case "45":
            return contentMap.iframe("https://fr.educaplay.com/jeu/5391296-activite_scratch.html");
        case "46":
            return contentMap.iframe("https://fr.educaplay.com/jeu/5379810-exercice_scratch.html");
        case "47":
            return contentMap.iframe("https://fr.educaplay.com/jeu/22548003-revision_scratch.html");
        case "48":
            return contentMap.iframe("https://fr.educaplay.com/jeu/19187172-jeu_des_blocs_de_scratch.html");
        case "49":
            return contentMap.iframe("https://quizizz.com/embed/quiz/5da475b4513b43001bf1804b");
        case "50":
            return contentMap.iframe("https://quizizz.com/embed/quiz/603208d14db269001b0e7989");
        case "51":
            return contentMap.iframe("https://quizizz.com/embed/quiz/5f89026f7b4039001ba4ac74");
        case "52":
            return contentMap.iframe("https://quizizz.com/embed/quiz/5e283f2021a465001cc19865");
        case "53":
            return contentMap.iframe("https://quizizz.com/embed/quiz/5cde6fff5401b8001a6a0a3e");
        case "54":
            return contentMap.iframe("https://quizizz.com/embed/quiz/5d3e5d61b85290001a5053d1");
        case "55":
            return contentMap.iframe("https://quizizz.com/embed/quiz/5ff87fd73edc70001bd2248a");
        case "56":
            return contentMap.images("/assets/work/7/tp/tp3/cour", 3);

        default:
            return <p className="text-center text-white">No content available</p>;
    }
};

const ProjectPage = async ({ params, searchParams }) => {
    const { num } = await params;
    const selectedClas = (await searchParams)?.selectedClass || "default class";
    const project = projects.find((p) => p.num === num);

    if (!project) {
        return (
            <p className="text-center text-white flex justify-center items-center h-screen text-4xl font-bold">
                Project not found
            </p>
        );
    }

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-semibold text-center mt-4 text-accent">
                {selectedClas}
            </h1>
            <h2 className="text-3xl font-semibold text-center mt-4">
                {project.title}
            </h2>
            <p className="text-center text-white/60 mt-4 mb-8">
                {project.description}
            </p>
            {renderContent(num, project)}
        </div>
    );
};

export default ProjectPage;