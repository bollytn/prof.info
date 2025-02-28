'use client'

import { motion } from "framer-motion"

export default function AnimatedContent({ children }) {
    return (
        <motion.div
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        >
            {children}
        </motion.div>
    )
}
