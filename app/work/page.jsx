'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { LuExternalLink } from "react-icons/lu";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import Link from 'next/link'
import Image from 'next/image'
import { WorkSliderBtn } from '@/components/WorkSliderBtn'
import AnimatedWrapper from '@/components/AnimatedWrapper'
import AnimatedBox from '@/components/AnimatedBox'

import projects from '@/components/data/data'
import { SlideTabsExample } from '@/components/SlideTabs'

const Work = () => {

    //variations for the animation
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };


    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex
        // update project state based on current slide index
        setProject(projects[currentIndex])
    }

    // Animation variants
    const fadeInOut = {
        initial: { opacity: 0, y: 0 },
        animate: { opacity: 1, y: 0, transition: { duration: 1 } },
        exit: { opacity: 0, y: -20, transition: { duration: 1 } },
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: 'easeIn' } }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className='container mx-auto'>
                <SlideTabsExample />
                <div className='flex flex-col xl:flex-row xl:gap-7'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-7 h-[50%]'>
                            {/* Outline num */}
                            <AnimatedWrapper
                                key={project.num} // Unique key for re-triggering animation
                                className='text-8xl leading-none font-extrabold text-transparent text-outline'
                            >
                                {project.num}
                            </AnimatedWrapper>

                            {/* Project category */}
                            <AnimatedWrapper
                                key={project.title} // Unique key for re-triggering animation
                            >
                                <h2 className='text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                                    {project.title}
                                </h2>
                            </AnimatedWrapper>

                            {/* Project description */}
                            <AnimatedWrapper
                                key={project.description} // Unique key for re-triggering animation
                                className='text-white/60'
                            >
                                {project.description}
                            </AnimatedWrapper>

                            {/* Stack */}
                            <div
                                key={`${project.num}-stack`} // Unique key for re-triggering animation
                                className='flex flex-wrap gap-4'
                            >
                                <motion.ul
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                    className='container flex flex-wrap gap-4'>
                                    {project.stack.map((item, index) => (
                                        <motion.li key={index} className='item text-accent' variants={item}>
                                            {item.name}
                                            {index !== project.stack.length - 1 ? ',' : '.'}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>

                            {/* Divider line */}
                            <AnimatedWrapper
                                key={`${project.num}-divider`} // Unique key for re-triggering animation
                                className="flex items-center w-full"
                            >
                                <span className="flex-grow bg-yellow-300 shadow-[0_0_5px_yellow] rounded h-px "></span>
                                <span className="mx-3 text-lg font-medium text-accent/60 animate-bounce">
                                    {project.category}
                                </span>
                                <span className="flex-grow bg-yellow-300 shadow-[0_0_5px_yellow] rounded h-px"></span>
                            </AnimatedWrapper>

                            {/* Live project button */}
                            <AnimatedWrapper
                                key={`${project.num}-live-button`} // Unique key for re-triggering animation
                                className='flex gap-4'
                            >
                                <AnimatedBox>
                                    <Link href={project.live} target='_blank' rel='noreferrer noopennr'>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                    <LuExternalLink className='text-white text-3xl group-hover:text-accent' />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Télecharger</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </AnimatedBox>
                            </AnimatedWrapper>
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
                                                        alt={item.title}
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
