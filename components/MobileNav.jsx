'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from 'react-icons/ci'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const links = [
    { name: 'Home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
]

const MobileNav = () => {
    const path = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent>
                content
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav