'use client'

import { motion } from "framer-motion"

export default function AnimatedContent({ children, className = '', ...props }) {
    return (
        <motion.div
            className={`box ${className}`}
            //className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.4, ease: "easeIn" } }}
            {...props}
        >
            {children}
        </motion.div>
    )
}
