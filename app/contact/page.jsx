'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'phone',
        description: '(+216) 22 917 226'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'Mahjoubi.Bilel@gmail.com'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        description: 'Boite Postal 66 jendouba 8100'
    }
]

import { motion } from "framer-motion";

import Image from "next/image";

const Contact = () => {
    return (
        <motion.section initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-0 gap-6">
                    {/* form */}
                    <div className="xl:w-[60%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Travailler Ensemble</h3>
                            <p className="text-white/60">Recueillir le besoin du client et l'analyser.</p>
                            <p className="text-white/60">Définir le cahier des charges du projet de développement.</p>
                            <p className="text-white/60">Créer la structure (back-end) du site ou de l'application.</p>
                            <p className="text-white/60 border-b border-white/50 mb-4">Développer tous les aspects techniques du projet web (base de données, interface utilisateur…).</p>
                            {/*input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="firstname" placeholder="Nom" className="bg-transparent border-b border-white/20 text-white focus:outline-none placeholder:px-2" />
                                <input type="lastname" placeholder="Prenom" className="bg-transparent border-b border-white/20 text-white focus:outline-none placeholder:px-2" />
                                <input type="email" placeholder="E-mail" className="bg-transparent border-b border-white/20 text-white focus:outline-none placeholder:px-2" />
                                <input type="phone" placeholder="Tél" className="bg-transparent border-b border-white/20 text-white focus:outline-none placeholder:px-2" />
                            </div>
                            {/* select */}
                            <Select className="bg-transparent border-b border-white/20 text-white/60 focus:outline-none">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Nos Service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="web">Web Development</SelectItem>
                                        <SelectItem value="design">Design</SelectItem>
                                        <SelectItem value="marketing">Flyer/Logo</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea placeholder="Message" className="h-[200px] bg-transparent border-white/20 text-white focus:outline-none" />
                            {/* button */}
                            <Button className="bg-accent hover:bg-accent/60 text-black rounded-full w-fit">Envoyer</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex flex-1 flex-col gap-16 items-center xl:justify-between order-1 xl:order-none ">
                        {/* Image */}
                        <div className="hidden xl:block">
                            <Image
                                src="/assets/contact/maileee.svg"
                                alt="mail"
                                width={400}
                                height={400}
                                quality={100}
                            />
                        </div>
                        <ul className="flex flex-col gap-4">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-4 mb-4">
                                        <div
                                            className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] xl:text-2xl text-xl bg-white/10 p-2 rounded-full text-accent flex items-center justify-center">
                                            {item.icon}

                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium">{item.title}</h4>
                                            <p className="text-white/60">{item.description}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
export default Contact;
