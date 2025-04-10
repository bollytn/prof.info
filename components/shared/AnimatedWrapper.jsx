'use client'
import { motion } from 'framer-motion';

const AnimatedWrapper = ({ children, className = '', ...props }) => {
    return (
        <motion.div
            className={`box ${className}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    restDelta: 0.001,
                },
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedWrapper;