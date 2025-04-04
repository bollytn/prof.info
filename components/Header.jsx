import Link from 'next/link';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { Button } from './ui/button';

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        <span className='text-accent'>I</span>nfo
                        <span className='text-accent'> .</span>
                    </h1>
                </Link>
                {/* Nav & hire me button */}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>M'engager</Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>

            </div>
        </header >
    );
}
export default Header;