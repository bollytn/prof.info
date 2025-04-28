import Image from "next/image"; // Import the Image component
import { SiScratch, SiMicrobit } from "react-icons/si";
import { SiAppian } from "react-icons/si";
import { BiCaretRight } from "react-icons/bi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from "@/components/ui/scroll-area";

import AnimatedContent from '@/components/shared/AnimatedContent';
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from "@/components/ui/tooltip";

const about = {
    title: "A Propos De Moi",
    icon: '/assets/resume/about.svg', // Path to about.svg image
    description: "Enseignant d'informatique passionné avec plus de 15 ans d’expérience, Spécialisé dans l’enseignement de la pensée logique et du développement de compétences en programmation chez les collégiens. Ma pédagogie repose sur une approche ludique et interactive, utilisant des outils modernes tels que Scratch, App Inventor et Micro:bit pour éveiller l’intérêt des élèves à l’univers numérique.",
    info: [
        {
            filedName: "Nom & Prenom",
            filedValue: "Mahjoubi Bilel"
        },
        {
            filedName: "Tél",
            filedValue: "(+216) 22 917 226"
        },
        {
            filedName: "Experience",
            filedValue: "+15 ans"
        },
        {
            filedName: "E-mail",
            filedValue: "Mahjoubi.Bilel@gmail.com"
        },
        {
            filedName: "Github",
            filedValue: "github.com/bollytn"
        },
        {
            filedName: "Languages",
            filedValue: "Arabic,Frensh,English"
        },
    ]
}

const experience = {
    icon: '/assets/resume/exprience.svg', // Path to badge.svg
    title: 'Mon Expérience',
    description: "J'ai plus de 15 ans d'expérience dans l'enseignement de la programmation. j'ai également enseigné la programmation à des étudiants de tous niveaux.",
    items: [
        {
            company: 'Ecole Préparatoire bousalem',
            position: 'enseignant en informatique',
            duration: '2012 - Présent'
        },
        {
            company: 'الجمعية التونسية للبرمجة و الروبوتيك',
            position: 'Formateur HTML/CSS/JS/PHP/MySQL',
            duration: '2022 - Présent'
        },
        {
            company: 'centre pilote "المركز النموذجي للدعم المدرسي"',
            position: 'computer science teacher',
            duration: '2025 - Présent'
        },
        {
            company: 'Ecole Privée les génies',
            position: 'enseignant en informatique',
            duration: '2023 - Présent'
        },
        {
            company: 'Tanit-School (Tunisie)',
            position: 'enseignant en informatique',
            duration: '2010 - 2012'
        }
    ]
}

const education = {
    icon: '/assets/resume/education.svg', // Path to cap.svg
    title: 'Mon Education',
    description: "Je suis toujours à la recherche de nouveaux outils, de meilleures pratiques et des dernières technologies pour améliorer mon travail.",
    items: [
        {
            institution: 'faculté des sciences de Bizerte',
            degree: 'Maitrise en Informatique',
            duration: '2005 - 2010'
        },
        {
            institution: 'Lycée libérter de Jendouba',
            degree: 'Baccalauréat Techniques',
            duration: '2003 - 2004'
        }
    ]
}

const skills = {
    icon: '/assets/resume/skills.svg', // Path to cap.svg
    title: 'Mes Compétances',
    description: [
        "Enseignement de la pensée logique et de l’algorithmique à travers Scratch.",
        "Initiation à la programmation mobile avec App Inventor pour les élèves de 9e année.",
        "Introduction à l’électronique et la programmation embarquée via Micro:bit.",
        "Conception d’activités interactives pour développer les compétences en résolution de problèmes.",
        "Participation à l’élaboration de supports pédagogiques innovants.",
        "Suivi individuel des élèves et accompagnement dans leurs projets informatiques.",
    ],
    skilList: [
        {
            icon: <SiScratch />,
            name: 'scratch'
        },
        {
            icon: <SiAppian />,
            name: 'app inventor'
        },
        {
            icon: <SiMicrobit />,
            name: 'microbit'
        },
    ]
}

const Resume = () => {
    return (
        <AnimatedContent>
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-8">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">

                        <TabsTrigger value="experience">Experience</TabsTrigger>

                        <TabsTrigger value="education">Education</TabsTrigger>

                        <TabsTrigger value="skills">Compétances</TabsTrigger>

                        <TabsTrigger value="about">A props De Moi</TabsTrigger>

                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        {/* Experience Section */}
                        <TabsContent value="experience" className="w-full">
                            <AnimatedContent>
                                <div className="flex flex-col gap-7 text-center xl:text-left">
                                    <div className="flex justify-center xl:justify-start">
                                        <Image
                                            src={experience.icon}
                                            alt="Badge Icon"
                                            width={50}
                                            height={50}
                                        />
                                        <h3 className="text-4xl font-bold mt-1 ml-1">{experience.title}</h3>
                                    </div>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {experience.description}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                                            {experience.items.map((item, index) => (
                                                <AnimatedContent key={index}>
                                                    <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                            {item.position}
                                                        </h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.company}</p>
                                                        </div>
                                                    </li>
                                                </AnimatedContent>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </AnimatedContent>
                        </TabsContent>

                        {/* Education Section */}
                        <TabsContent value="education" className="w-full">
                            <AnimatedContent>
                                <div className="flex flex-col gap-7 text-center xl:text-left">
                                    <div className="flex justify-center xl:justify-start">
                                        <Image
                                            src={education.icon}
                                            alt="Cap Icon"
                                            width={50}
                                            height={50}
                                        />
                                        <h3 className="text-4xl font-bold mt-1 ml-1">{education.title}</h3>
                                    </div>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {education.description}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                                            {education.items.map((item, index) => (
                                                <AnimatedContent key={index}>
                                                    <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                            {item.degree}
                                                        </h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.institution}</p>
                                                        </div>
                                                    </li>
                                                </AnimatedContent>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </AnimatedContent>
                        </TabsContent>

                        {/* Skills Section */}
                        <TabsContent value="skills" className="w-full h-full">
                            <AnimatedContent>
                                <div className="flex flex-col gap-7">
                                    <div className="flex flex-col gap-7 text-center xl:text-left">
                                        <div className="flex justify-center xl:justify-start">
                                            <Image
                                                src={skills.icon}
                                                alt="Cap Icon"
                                                width={50}
                                                height={50}
                                            />
                                            <h3 className="text-4xl font-bold mt-1 ml-1">{skills.title}</h3>
                                        </div>
                                        <div className="w-full text-white/60 text-center xl:text-left mx-auto xl:mx-0">
                                            {skills.description.map((item, index) => (
                                                <AnimatedContent key={index}>
                                                    <p className="flex group hover:cursor-pointer hover:text-accent transition-all duration-300 ease-in-out items-center justify-center text-sm md:text-lg xl:justify-start gap-2 mb-2">
                                                        <BiCaretRight className="text-accent group-hover:rotate-180 group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
                                                        {item}
                                                    </p>
                                                </AnimatedContent>
                                            ))}
                                        </div>
                                    </div>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                                        {skills.skilList.map((skill, index) => (
                                            <AnimatedContent key={index}>
                                                <li>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] xl:rounded-xl md:rounded-xl bg-[#232329] flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            </AnimatedContent>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedContent>
                        </TabsContent>

                        {/* About Section */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <AnimatedContent>
                                <div className="flex flex-col gap-7">
                                    <div className="flex justify-center xl:justify-start">
                                        <Image
                                            src={about.icon}
                                            alt="Badge Icon"
                                            width={50}
                                            height={50}
                                        />
                                        <h3 className="text-4xl font-bold mt-1 ml-1">{about.title}</h3>
                                    </div>
                                    <p className="max-w-[600px] xl:max-w-[700px] text-white/60 mx-auto xl:mx-0">
                                        {about.description}
                                    </p>
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-2 max-w-[750px] mx-auto xl:mx-0">
                                        {about.info.map((item, index) => (
                                            <AnimatedContent key={index}>
                                                <li className="flex items-center justify-center xl:justify-start gap-4">
                                                    <span className="text-white/60">{item.filedName}:</span>
                                                    <span className="text-xl">{item.filedValue}</span>
                                                </li>
                                            </AnimatedContent>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedContent>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </AnimatedContent>
    );
};

export default Resume;