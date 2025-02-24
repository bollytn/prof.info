import { animate, motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    },
};

// calculate the reverse index for stagger delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}


const Stairs = () => {
    return (
        <>
            {/* render 6 motion div, each representing a step of the stairs.
                each div will have the same animation defined by the stairanimation object .
                the delay for each div is calculated sinamically based on it's reserved index, 
                creating a stagger effect with decreasing delay for each subsequent step.
            */}
            {Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                    key={index}
                    className="w-full h-full bg-white relative"
                    variants={stairAnimation}
                    //custom={reverseIndex(index)}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.5,
                        delay: reverseIndex(index) * 0.1,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </>
    )
}

export default Stairs;
