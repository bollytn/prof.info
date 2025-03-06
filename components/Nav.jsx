'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Links from '@/components/data/links';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const Nav = () => {
    const path = usePathname();
    return (
        <nav className='gap-8 flex '>
            {
                Links.map((link, index) => (
                    <Link key={index} href={link.path} className={`${path === link.path && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all duration-300`}>
                        {link.name}
                    </Link>
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