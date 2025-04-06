
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from "@/components/ui/scroll-area";

import AnimatedContent from '@/components/AnimatedContent';
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from "@/components/ui/tooltip";

const about = {
    title: "À PROPOS DE MOI",
    description: "Passionné par la création d'applications dynamiques et engageantes, j'apporte plus de 3 ans d'expérience en tant que développeur full-stack axé sur la création d'expériences Web2 fluides et l'expansion vers le Web3. Je suis toujours à la recherche de nouveaux outils, de meilleures pratiques et des dernières technologies pour améliorer mon travail.",
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
            filedValue: "+3 years"
        },
        {
            filedName: "E-mail",
            filedValue: "Mahjoubi.Bilel@gmail.com"
        },
        {
            filedName: "Github",
            filedValue: "bollytn"
        }, {
            filedName: "Freelance",
            filedValue: "Available"
        },
        {
            filedName: "Languages",
            filedValue: "Arabic,Frensh,English"
        },
    ]
}

const experience = {
    icon: '/public/assets/resume/badge.svg',
    title: 'Mon Expérience',
    description: "j'apporte plus de 3 ans d'expérience en tant que développeur front end developper ",
    items: [
        {
            company: 'tech solution inc',
            position: 'front end developper',
            duration: '2022 - Present'
        },
        {
            company: 'Web Design Studio',
            position: 'front end developper',
            duration: '2021'
        },
        {
            company: 'Ecomerce startup',
            position: 'front end developper',
            duration: '2020 - 2021'
        },
        {
            company: 'IwebSolution',
            position: 'teaching assistant',
            duration: '2019'
        },
    ]
}

const education = {
    icon: '/public/assets/resume/cap.svg',
    title: 'Mon Education',
    description: "Je suis toujours à la recherche de nouveaux outils, de meilleures pratiques et des dernières technologies pour améliorer mon travail.",
    items: [
        {
            institution: 'online course platform',
            degree: 'full stack web developement bootcamp',
            duration: '2023'
        },
        {
            institution: 'code academy',
            degree: 'front end track',
            duration: '2022'
        },
        {
            institution: 'online course',
            degree: 'programming course',
            duration: '2021'
        },
        {
            institution: 'Maitrise en informatique',
            degree: 'Nouvelles technologies',
            duration: '4 ans en 2010'
        },
    ]
}

const skills = {
    title: 'Mes Compétances',
    description: "J'ai toutes les compétences nécessaires (Back-End, Front-End, UX/UI, architecture…) à la création d’un site d’un sa globalité (création, développement, codage…).",
    skilList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5'
        },
        {
            icon: <FaCss3 />,
            name: 'css3 5'
        },
        {
            icon: <FaJs />,
            name: 'javascript'
        },
        {
            icon: <FaReact />,
            name: 'reactJS'
        }, {
            icon: <SiNextdotjs />,
            name: 'nextJS'
        },
        {
            icon: <SiTailwindcss />,
            name: 'tailwind'
        },
        {
            icon: <FiFigma />,
            name: 'figma'
        },
        {
            icon: <FaNodeJs />,
            name: 'nodeJS'
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
                    {/* contenu */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value='experience' className="w-full">
                            <div className="flex flex-col gap-7 text-center xl:text-left">
                                <h3 className="text-4xl  font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>

                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                                        {
                                            experience.items.map((item, index) => {
                                                return (
                                                    <li key={index} className="bg-[#232329] h-[184px] py-6  px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                        <div className="flex items-center gap-3">
                                                            {/* dot */}
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent" ></span>
                                                            <p className="text-white/60">{item.company}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value='education' className="w-full">
                            <div className="flex flex-col gap-7 text-center xl:text-left">
                                <h3 className="text-4xl  font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                                        {
                                            education.items.map((item, index) => {
                                                return (
                                                    <li key={index} className="bg-[#232329] h-[184px] py-6  px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                        <div className="flex items-center gap-3">
                                                            {/* dot */}
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent" ></span>
                                                            <p className="text-white/60">{item.institution}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value='skills' className="w-full h-full">
                            <div className="flex flex-col gap-7">
                                <div className="flex flex-col gap-7 text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 xl:gap-7 md:gap-7">
                                    {
                                        skills.skilList.map((skill, index) => {
                                            return (
                                                <li key={index} >
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] xl:rounded-xl md:rounded-xl bg-[#232329] flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value='about' className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-7">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] xl:max-w-[700px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-2 max-w-[750px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.filedName}:</span>
                                                <span className="text-xl">{item.filedValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </AnimatedContent>
    );
}
export default Resume;