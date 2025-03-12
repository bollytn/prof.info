'use client'

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
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

const services = [
    {
        title: 'Web Development',
        description: 'We build websites that are fast, secure, and easy to use.'
    },
    {
        title: 'Design',
        description: 'We design logos, flyers, and other marketing materials.'
    },
    {
        title: 'Flyer/Logo',
        description: 'We design logos, flyers, and other marketing materials.'
    },
]

import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ firstName: '', lastName: '', phone: '', email: '', subject: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            alert('Error sending message. Please try again.');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSelectChange = (value) => {
        setFormData({
            ...formData,
            subject: value
        });
    };

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
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Travailler Ensemble</h3>
                            <p className="text-white/60">Recueillir le besoin du client et l'analyser.</p>
                            <p className="text-white/60">Définir le cahier des charges du projet de développement.</p>
                            <p className="text-white/60">Créer la structure (back-end) du site ou de l'application.</p>
                            <p className="text-white/60">Développer tous les aspects techniques du projet web (base de données, interface utilisateur…).</p>
                            {/* line shadow rounded */}
                            {/*<div className="h-[1px] w-full bg-yellow-300 shadow-[0_0_10px_yellow] rounded"></div>*/}
                            {/* divider line */}
                            <h3 className="flex items-center w-full">
                                <span className="flex-grow bg-yellow-300 shadow-[0_0_5px_yellow] rounded h-px "></span>
                                <span className="mx-3 text-lg font-medium text-accent/60 animate-bounce">msg</span>
                                <span className="flex-grow bg-yellow-300 shadow-[0_0_5px_yellow] rounded h-px"></span>
                            </h3>
                            {/*input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mb-3" >
                                <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="Nom" className="bg-transparent border-b border-white/20 text-white focus:outline-none placeholder:px-2" />
                                <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Prenom" className="bg-transparent border-b border-white/20 text-white focus:outline-none placeholder:px-2" />
                                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="E-mail" className="bg-transparent border-b border-white/20 text-white focus:outline-none placeholder:px-2" />
                                <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Tél" className="bg-transparent border-b border-white/20 text-white focus:outline-none placeholder:px-2" />
                            </div>
                            {/* select */}
                            <Select
                                name="subject"
                                value={formData.subject}
                                onValueChange={handleSelectChange}
                                className="bg-transparent border-b border-white/20 text-white/60 focus:outline-none">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Nos Service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {
                                            services.map((service, index) => (
                                                <SelectItem key={index} value={service.title}>
                                                    {service.title}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/*custom textarea */}
                            <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                className="h-[100px] bg-transparent border-white/20 text-white focus:outline-none resize-none
                                [&::-webkit-scrollbar]:w-2
                              [&::-webkit-scrollbar-track]:bg-white/10 
                              [&::-webkit-scrollbar-thumb]:bg-yellow-300
                                [&::-webkit-scrollbar-thumb]:rounded-full
                                [&::-webkit-scrollbar-thumb]:shadow-[0_0_5px_yellow]"
                            />
                            {/* button */}
                            {/*<Button className="bg-accent hover:bg-accent/60 text-black rounded-full w-fit">Envoyer</Button>*/}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                type="submit" className="group p-5 relative text-lg font-normal border-0 flex items-center justify-center bg-transparent text-accent h-auto w-[140px] overflow-hidden transition-all duration-100">
                                <span className="group-hover:w-full absolute left-0 h-full w-5 border-y border-l border-accent transition-all duration-500"></span>
                                <p className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200">Envoyer</p>
                                <span className="group-hover:translate-x-0 group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Merci!</span>
                                <span className="group-hover:w-full absolute right-0 h-full w-5 border-y border-r border-accent transition-all duration-500"></span>
                            </motion.button>
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