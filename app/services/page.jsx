'use client'

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Nouvelles Technologies",
        description: "Formateur des nouvelles technologies pour les enseignants :<br> - chingViews - IspringTools - Google Classroom - Articulate 360 - Netsupport school - LanSchool - Canva edu - Edpuzzle - Kahoot - Quizlet - Nearpod - Padlet - Genially - LearningApps - ClassDojo - Edmodo - Socrative - Google Meet - Zoom - Microsoft Teams ",
        link: "#"
    },
    {
        num: "02",
        title: "La programmation en 7ᵉ année",
        description: "- S’approprier un environnement informatique de travail.<br> - Savoir coder ou décoder pour prévoir ou représenter des déplacements. <br> - Programmer les déplacements d’un personnage à l’écran.<br>- Réaliser un premier programme <br> - Modifier la scène <br> - Se familiariser avec le système de coordonnées",
        link: "#"
    },
    {
        num: "03",
        title: "La programmation en 8ᵉ année",
        description: "Définir les mécanismes du jeu : <br> - Compléter le programme<br> - Créer des boucles<br>- Programmer des instructions conditionnelles<br>- Compléter le programme en réinvestissant les notions de test, de boucle et de variable abordées précédemment, et en approfondissant la notion d’événement. ",
        link: "#"
    },
    {
        num: "04",
        title: "AppInventor en 9ᵉ année",
        description: "AppInventor est un logiciel de plus en plus utilisé et continue à évaluer grâce au MIT :<br> - conçu à des fins pédagogiques<br>- très bien documenté<br>- Prise en main rapide<br>- Création des applications fonctionnant sur tous les appareils android<br>- App Inventor en mode Cloud",
        link: "#"
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex justify-center flex-col py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}>
                    {
                        services.map((service, index) => (
                            <div key={index} className="flex flex-1 flex-col gap-4 justify-start group">
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.link}
                                        className="w-16 h-16 rounded-full bg-white/5 flex justify-center items-center group-hover:bg-accent transition-all duration-700 group-hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-3xl group-hover:text-slate-800 transition-all duration-500" />
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text-3xl font-bold leading-none group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>
                                {/* description */}
                                <p dangerouslySetInnerHTML={{ __html: service.description }}></p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    );
}
export default Services;