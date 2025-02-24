'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from 'react-icons/ci'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"



const MobileNav = () => {
    const path = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent flex flex-col>
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Bollytn <span className='text-accent'>.</span>
                        </h1>

                    </Link>
                </div>

                {/* nav */}
                <nav className="">
                    nav
                </nav>

            </SheetContent>
        </Sheet>
    )
}

export default MobileNav