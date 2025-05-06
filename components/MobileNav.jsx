'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from 'react-icons/ci'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Links from "@/components/data/links"
import { useState } from "react"

const MobileNav = () => {
    const path = usePathname()
    const [isOpen, setIsOpen] = useState(false) // State to control the menu visibility

    const handleClose = () => {
        setIsOpen(false) // Close the menu
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex items-center justify-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                {/* logo */}
                <div className="mt-32 mb-32 text-center text-2xl">
                    <Link href="/" onClick={handleClose}>
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
                                onClick={handleClose} // Close the menu when a link is clicked
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