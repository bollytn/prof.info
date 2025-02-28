import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from "framer-motion";

import AnimatedContent from './components/AnimatedContent'

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
            duration: '2022 - Present'
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
        {
            icon: <SiMongodb />,
            name: 'mongoDB'
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
                            experience
                        </TabsContent>
                        <TabsContent value='education' className="w-full">
                            education
                        </TabsContent>
                        <TabsContent value='skills' className="w-full">
                            skills
                        </TabsContent>
                        <TabsContent value='about' className="w-full">
                            about
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </AnimatedContent>
    );
}
export default Resume;