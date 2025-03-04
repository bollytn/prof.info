import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from "@/components/ui/scroll-area";

import AnimatedContent from './components/AnimatedContent'
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from "@/components/ui/tooltip";

const about = {
    title: "about me",
    description: "Lsequi porro soluta optio ipsum molestias. Illo facere eum fugiat assumenda fuga repellat mollitia voluptates, similique at illum sit, error molestias.",
    info: [
        {
            filedName: "name",
            filedValue: "Mahjoubi Bilel"
        },
        {
            filedName: "phone",
            filedValue: "(216) 22 917 226"
        },
        {
            filedName: "experience",
            filedValue: "+5 years"
        },
        {
            filedName: "email",
            filedValue: "Mahjoubi.Bilel@gmail.com"
        },
        {
            filedName: "github",
            filedValue: "bollytn"
        }, {
            filedName: "freelance",
            filedValue: "available"
        },
        {
            filedName: "languages",
            filedValue: "arabic,frensh,english"
        },
    ]
}

const experience = {
    icon: '/public/assets/resume/badge.svg',
    title: 'mon expérience',
    description: 'Ipsa laudantium magnam quae animi velit tempora in nam ducimus veniam eos. Accusantium repudiandae veritatis voluptate consequuntur sit id minus suscipit asperiores!',
    items: [
        {
            company: 'tech solution inc',
            position: 'full stack developper',
            duration: '2022 - Present'
        },
        {
            company: 'Web Design Studio',
            position: 'front end developper',
            duration: '2021'
        },
        {
            company: 'Ecomoerce startup',
            position: 'freelance developper',
            duration: '2020 - 2021'
        },
        {
            company: 'tech academy',
            position: 'teaching assistant',
            duration: '2019'
        },
    ]
}

const education = {
    icon: '/public/assets/resume/cap.svg',
    title: 'mon education',
    description: 'Ipsa laudantium magnam quae animi velit tempora in nam ducimus veniam eos. Accusantium repudiandae veritatis voluptate consequuntur sit id minus suscipit asperiores!',
    items: [
        {
            institution: 'online course platform',
            degree: 'full stack web developement bootcamp',
            duration: '2024'
        },
        {
            institution: 'code academy',
            degree: 'front end track',
            duration: '2023'
        },
        {
            institution: 'online course',
            degree: 'programming course',
            duration: '2022'
        },
        {
            institution: 'tech institue',
            degree: 'certified web developer',
            duration: '2021'
        },
    ]
}

const skills = {
    title: 'mes compétances',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, minima. Sit quaerat similique suscipit optio laudantium repudiandae nostrum.',
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
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-16">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
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
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-2 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item,index)=> {
                                        return (
                                            <li 
                                            key={index}
                                            className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.filedName}</span>
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