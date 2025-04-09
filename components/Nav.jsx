import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Links from '@/components/data/links';

const Nav = () => {
    const path = usePathname();
    return (
        <nav className="gap-8 flex">
            {Links.map((link, index) => (
                <div key={index} className="group relative">
                    <Link
                        href={link.path}
                        className={`${path === link.path
                                ? 'text-accent border-b-2 border-accent'
                                : 'text-white'
                            } transition-all duration-300`}
                    >
                        {link.name}
                    </Link>
                    {/* Hover underline animation */}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </div>
            ))}
        </nav>
    );
};

export default Nav;