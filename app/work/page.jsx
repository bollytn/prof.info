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

const projects = [
    {
        num: '01',
        category: 'microbit',
        title: 'Fabrique une mangeoire',
        description: 'Bonjour à tous, je partage avec vous ma première TP bien détaillé, dans le domaine de la programmation des cartes Micro:Bit en utilisant la logiciel scratch dans un premier temps. Je vais ajouter les autres très bientôt…',
        stack: [{ name: 'microbit' }, { name: "boussol" }, { name: "transmission radio" }],
        image: '/assets/work/thumb1.png',
        live: 'https://mega.nz/file/l3Y2GJ4Q#Lvs_UbXCR9aR50StOcsktL9SXt5ArG9oE5cN6ievOVo',
    },
    {
        num: '02',
        category: 'sécurité informatique',
        title: 'Quiz',
        description: 'Ce quiz permet aux enfants de tester leurs connaissances et de vérifier s’ils ont les bons réflexes.',
        stack: [{ name: 'sécuriser les données' }, { name: "vie privée" }, { name: "malware" }],
        image: '/assets/work/thumb2.png',
        live: 'https://drive.google.com/drive/folders/1XoQSqq5mlVMRSqibavfnEmRsvCCLNTfb?usp=drive_link',
    },
    {
        num: '03',
        category: 'AppInventor',
        title: 'Quiz',
        description: 'mon premier test appinventor (exécutable fichier index).',
        stack: [{ name: 'pédometre' }, { name: "traduire" }, { name: "composants non visibles" }],
        image: '/assets/work/thumb3.png',
        live: 'https://drive.google.com/file/d/1AhCTDfHtT27kt2frgygyiPm7nbLn41Zq/view?usp=sharing',
    },
    {
        num: '04',
        category: 'scratch',
        title: "cahier d'activité 8ᵉ année",
        description: ' .أعدت صياغة كتاب التمارين في نسخته الجديدة، أرجوا أن تعم الفائدة',
        stack: [{ name: 'boucle' }, { name: "instruction conditionnelle" }, { name: "variable" }, { name: "bloc d'instructions" }],
        image: '/assets/work/thumb4.png',
        live: 'https://drive.google.com/file/d/10scm-92_kSG3fi1T9l1LURWWFb9SyHQw/view?usp=sharing',
    },
    {
        num: '05',
        category: 'scratch',
        title: "cahier d'activité 8ᵉ année",
        description: "السلام عليكم، قمت بإنشاء تحتوي على تلاخيص، تمارين و مشاريع مقسمة كالآتي:",
        stack: [{ name: 'chiffre de césar' }, { name: "crabe aux pinces magiques" }, { name: "jeu de nim" }, { name: "le mage et la grenouille" }],
        image: '/assets/work/thumb5.png',
        live: 'https://drive.google.com/file/d/1ifZuzfKIPBJYcCFr1ZzltU4Q5qV7EHa2/view?usp=sharing',
    },
    {
        num: '06',
        category: 'scratch',
        title: "fiche pédagogique 8ᵉ année",
        description: "Bonjour chers collègues, je partage ma répartition que j'ai préparée pour 8ᵉ presque 15 séances sous forme des fiches pédagogiques.J'espère que vous aidez...",
        stack: [{ name: 'scratch' }, { name: "activité débranché" }, { name: "activité pratique" }],
        image: '/assets/work/thumb6.png',
        live: 'https://mega.nz/folder/4yoXDTjb#XrJkt9u0JY2v2PBhv-wrTA',
    },
    {
        num: '07',
        category: 'Appinventor',
        title: "fiche pédagogique 9ᵉ année",
        description: "Bonjour chers collègues, je partage ma répartition que j'ai préparée pour 9ᵉ presque 15 séances sous forme des fiches pédagogiques.J'espère que vous aidez...",
        stack: [{ name: 'microbit' }, { name: "reconnaissance vocale" }, { name: "compteur de temps" }, { name: "détecteur de mouvement" }, { name: "pédommètre" }],
        image: '/assets/work/thumb7.png',
        live: 'https://mega.nz/file/l3Y2GJ4Q#Lvs_UbXCR9aR50StOcsktL9SXt5ArG9oE5cN6ievOVo',
    },
    {
        num: '08',
        category: 'Examain',
        title: "Devoir de synthèse 8ᵉ année",
        description: "examain théorique et pratique de 8ᵉ année",
        stack: [{ name: 'scratch' }, { name: "mot croisés" }, { name: "activité débranché" }, { name: "activité pratique" }],
        image: '/assets/work/thumb8.png',
        live: 'https://drive.google.com/file/d/1PgelJW8Tw2dCDr36DdFOkV_ODpce3jdc/view?usp=sharing',
    },
    {
        num: '09',
        category: 'Examain',
        title: "Quatre devoirs théoriques 8ᵉ et 7ᵉ",
        description: "بما ان قلة الحواسيب لا تمكننا من إنجاز فرض تطبقي ولا عامل الوقت يسمح لنا بإنجاز فرض نصفه تطبيقي و النصف الأخر نظري فهكذا كانت الخلاصة...",
        stack: [{ name: 'scratch' }, { name: "activité débranché" }, { name: "pensée logique" }],
        image: '/assets/work/thumb9.png',
        live: 'https://drive.google.com/drive/folders/1V6bl3H2tD5vyveHLp8zECg4tb3CN-Bwg?usp=drive_link',
    },
    {
        num: '10',
        category: 'Examain',
        title: "cinq devoirs théoriques 8ᵉ et 7ᵉ",
        description: "لزملائي الأعزاء الذين لم يعدو بعد فروضهم اقترح عليهم بعض المواضيع ذات الطابع التطبيقي.",
        stack: [{ name: 'scratch' }, { name: "sous programme" }, { name: "activité pratique" }],
        image: '/assets/work/thumb10.png',
        live: 'https://drive.google.com/drive/folders/1w061opt93tx_dKCnQoQFFrMZl34yIS77?usp=drive_link',
    },
    {
        num: '11',
        category: 'Evaluation',
        title: "Quatre series théoriques 8ᵉ et 7ᵉ",
        description: "Pour vous préparer au devoir de synthèse je vous propose cinq types de sujets.vous devrez réaliser des exercices sur les instructions...",
        stack: [{ name: 'boucles' }, { name: "variables" }, { name: "instructions conditionnelles" }, { name: "fonctions" }, { name: "opérateurs" }],
        image: '/assets/work/thumb11.png',
        live: 'https://drive.google.com/drive/folders/1kFdFoKSBu5eos9zjYV7jmF5QOUYJJ4y_?usp=drive_link',
    },
    {
        num: '12',
        category: 'Rappel ',
        title: "Rappel interactive 8ᵉ et 7ᵉ",
        description: "Algorithme de rappel interactive sur les instructions conditionnelles et les boucles.",
        stack: [{ name: 'les instructions' }, { name: "boucle" }, { name: "instructions conditionnelles" }],
        image: '/assets/work/thumb12.png',
        live: 'https://drive.google.com/file/d/1IIqW8EYKXaH5i9A8zqLFEghIxgWM9FLM/view?usp=sharing',
    },
    {
        num: '13',
        category: 'scratch ',
        title: "Guide de révision 8ᵉ et 7ᵉ",
        description: "Guide de programmation + Grille de suivi et d'évaluation",
        stack: [{ name: 'evaluation' }, { name: "scratch" }],
        image: '/assets/work/thumb13.png',
        live: 'https://drive.google.com/drive/folders/17u5QeQiWsVxcM9jzR61jjubWQvl5liVd?usp=drive_link',
    },
    {
        num: '14',
        category: 'scratch ',
        title: "11 Projets de révision 8ᵉ",
        description: "Quelques projets réalisable avec une guide de programmation pour bien développer des techniques de jeux.",
        stack: [{ name: 'baguette' }, { name: "balon" }, { name: "blue sky" }, { name: "chasse clé" }, { name: "robot" }, { name: "chasse aux sorciere" }, { name: "circulation" }, { name: "labyrinthe" }, { name: "rebond solo" }, { name: "singe et pomme" }],
        image: '/assets/work/thumb14.png',
        live: 'https://drive.google.com/drive/folders/1s70KInaWcq39YQ-UuGMAtbq3g7irZSN9?usp=drive_link',
    }
]

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
                                                    <p>live project</p>
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
