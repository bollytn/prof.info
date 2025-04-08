

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Links from '@/components/data/links';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { motion } from 'framer-motion';
const Nav = () => {
    const path = usePathname();
    return (
        <nav className='gap-8 flex '>
            {
                Links.map((link, index) => (
                    <div
                        key={index}
                        //whileHover={{ scale: 1.1, y: -5 }} // Scale up and move slightly up on hover
                        //whileTap={{ scale: 0.95 }} // Slightly shrink on tap
                        //transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Smooth spring animatio
                    >
                        <Link
                            href={link.path}
                            className={`${path === link.path ? 'text-accent border-b-2 border-accent' : 'text-white'} transition-all duration-300`}
                        >
                            {link.name}
                        </Link>
                    </div>
                ))
            }
        </nav>
    );
}

const MyDialog = () => (
    <Dialog>
        <DialogContent aria-describedby="dialog-description">
            <VisuallyHidden>
                <DialogTitle>Navigation Menu</DialogTitle>
            </VisuallyHidden>
            <div id="dialog-description">
                <p>Navigation options for the website</p>
            </div>
            {/* Your dialog content here */}
        </DialogContent>
    </Dialog>
);
export default Nav;