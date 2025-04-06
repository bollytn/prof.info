'use client';
import Link from 'next/link';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { Button } from './ui/button';
import AnimatedBox from './AnimatedBox';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    {/* Apply whileHover to the <motion.h1> */}
                    <motion.h1
                        className="text-4xl font-semibold relative before:content-[''] before:absolute before:w-1/6 before:h-[2px] before:bg-accent before:-bottom-1 before:left-0 before:transition-all before:duration-500 hover:before:w-full"
                        whileHover="hover" // Trigger hover animation
                    >
                        <span className='text-accent relative'>
                            I
                            {/* Motion span for the animated dot */}
                            <motion.span
                                variants={{
                                    hover: {
                                        x: [60, 70, -8],
                                        y: [30, 0, 0],
                                    },
                                }}
                                style={{
                                    width: 5,
                                    height: 5,
                                    borderRadius: 10,
                                    backgroundColor: "#fd3",
                                    position: "absolute",
                                    x: 60,
                                    y: 30,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                            />
                        </span>
                        nfo
                    </motion.h1>
                </Link>
                {/* Nav & hire me button */}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <AnimatedBox>
                            <Button>M'engager</Button>
                        </AnimatedBox>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;