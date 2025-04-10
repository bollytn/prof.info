import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Links from '@/components/data/links';

const Nav = () => {
    const path = usePathname();
    return (
        <nav className='gap-8 flex'>
            {
                Links.map((link, index) => (
                    <div key={index} className="group relative">
                        <Link
                            href={link.path}
                            className={`${path === link.path ? 'text-accent' : 'text-white'} relative z-10 transition-all duration-300`}
                        >
                            {link.name}
                        </Link>
                        {/* Animated underline */}
                        <span
                            className={`absolute left-0 bottom-0 h-[2px] w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${path === link.path ? 'scale-x-100' : ''
                                }`}
                        ></span>
                    </div>
                ))
            }
        </nav>
    );
};

export default Nav;