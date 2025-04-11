import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Links from '@/components/data/links';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Nav = () => {
    const path = usePathname();
    const [isVisible, setIsVisible] = useState(true); // State to control visibility

    const handleLinkClick = (linkPath) => {
        if (linkPath !== path) {
            setIsVisible(false); // Hide links only if the clicked link is different from the current path
        }
    };

    // Reset visibility when the path changes
    useEffect(() => {
        setIsVisible(true); // Show links when the path changes
    }, [path]);

    return (
        <nav className="gap-8 flex">
            <AnimatePresence>
                {isVisible &&
                    Links.map((link, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: -10 }}
                            whileHover={{ y: -5, scale: 1.1 }} // Scale up on hover
                            whileTap={{ scale: 0.9 }} // Scale down on tap
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * index, duration: 0.4 } }}
                            exit={{ opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeInOut' } }} // Smooth exit animation
                        >
                            <Link
                                href={link.path}
                                onClick={() => handleLinkClick(link.path)} // Hide links on click
                                className={`${path === link.path ? 'text-accent' : 'text-white'
                                    } relative z-10 transition-all duration-300`}
                            >
                                {link.name}
                            </Link>
                            {/* Animated underline */}
                            <span
                                className={`absolute left-0 bottom-0 h-[2px] w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${path === link.path ? 'scale-x-100' : ''
                                    }`}
                            ></span>
                        </motion.div>
                    ))}
            </AnimatePresence>
        </nav>
    );
};

export default Nav;