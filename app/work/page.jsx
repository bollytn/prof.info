'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { BsGithub } from 'react-icons/bs'
import { LuExternalLink } from "react-icons/lu";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import Link from 'next/link'
import Image from 'next/image'
import { WorkSliderBtn } from '@/components/WorkSliderBtn'

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'Leadlinker',
        description: 'Boost sales with personalized links for WhatsApp, calls, and custom URLs. Sell without a website and track link visits with detailed stats.',
        stack: [{ name: 'html 5' }, { name: "css 3" }, { name: "javascript" }],
        image: '/assets/work/thumb1.png',
        live: '',
        github: '',
    },
    {
        num: '02',
        category: 'fullstack',
        title: 'Ravnaq Store',
        description: 'Ravnaq Store is a luxury home decor brand that offers a wide range of products including tea sets, decorative products, and serving stands.',
        stack: [{ name: 'Next.js' }, { name: "Tailwind.css" }, { name: "Node.js" }],
        image: '/assets/work/thumb2.png',
        live: '',
        github: '',
    },
    {
        num: '03',
        category: 'fullstack',
        title: 'Tvman Store',
        description: 'An e-commerce platform for selling TVs, accessories, and other related products.',
        stack: [{ name: 'Next.js' }, { name: "Tailwind.css" }, { name: "Node.js" }],
        image: '/assets/work/thumb3.png',
        live: '',
        github: '',
    }
]

const Work = () => {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex
        // update project state based on current slide index
        setProject(projects[currentIndex])
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: 'easeIn' } }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-7'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-7 h-[50%]'>
                            {/*  outline num*/}
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className='text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                                {project.title}
                            </h2>
                            {/* project description */}
                            <p className='text-white/60'>{project.description}</p>
                            {/* stock */}
                            <ul className='flex gap-4'>
                                {
                                    project.stack.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className='text-accent'
                                            >
                                                {item.name}
                                                {index !== project.stack.length - 1 ? ',' : '.'}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            {/* border */}
                            <div className='border border-white/20'></div>
                            {/* button */}
                            <div className='flex gap-4'>
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <LuExternalLink className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* live project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper className='xl:h-[520px] mb-12'
                            spaceBetween={30}
                            slidesPerView={1}
                            onSlideChange={handleSlideChange}>
                            {
                                projects.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index} className='w-full'>
                                            <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                                                {/* overlay */}
                                                <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                                {/* image */}
                                                <div className='w-full h-full relative'>
                                                    <Image
                                                        fill
                                                        alt=''
                                                        src={item.image}
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                            <WorkSliderBtn 
                            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 w-full justify-between xl:w-max xl:justify-none z-20"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
export default Work;
