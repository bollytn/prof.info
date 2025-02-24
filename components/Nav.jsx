'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Links from '@/components/data/links';

const Nav = () => {
    const path = usePathname();
    return (
        <nav className='gap-8 flex '>
            {
                Links.map((link, index) => (
                    <Link key={index} href={link.path} className={`${path === link.path && 'text-accent border-b-2 border-accent'}
                     capitalize font-medium hover:text-accent transition-all duration-300`}>
                        {link.name}
                    </Link>
                )
                )
            }
        </nav>
    );
}
export default Nav;