'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from 'react-icons/ci'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Links from "@/components/data/links"
import { motion } from "framer-motion"

const MobileNav = () => {
    const path = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            <span className='text-accent'>I</span>nfo
                            <span className='text-accent'> .</span>
                        </h1>

                    </Link>
                </div>

                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {
                        Links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.path}
                                className={`${path === link.path &&
                                    'text-accent border-b-2 border-accent'} 
                                     text-lg capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        ))
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav