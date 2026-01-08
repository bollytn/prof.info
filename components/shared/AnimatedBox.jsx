'use client';

import { motion } from 'framer-motion';

export const boxVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
};

const AnimatedBox = ({ children, className = '', ...props }) => {
    return (
        <motion.div
            className={`example-box ${className}`}
            variants={boxVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedBox;