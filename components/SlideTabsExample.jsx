import { useState, useRef } from "react"; // Import useState and useRef
import { motion } from "framer-motion"; // Import motion for animations

export const SlideTabsExample = ({ onTabClick }) => {
    return (
        <div className="-mt-8 mb-16 flex w-full items-center justify-center">
            <div className="absolute -top-8 z-0 h-1 w-full bg-white" />
            <SlideTabs onTabClick={onTabClick} /> {/* Pass onTabClick to SlideTabs */}
        </div>
    );
};

const SlideTabs = ({ onTabClick }) => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    const Section = ['9ᵉ année', '8ᵉ année', '7ᵉ année'];

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto flex w-fit rounded-full border-2 border-accent bg-black p-1 "
        >
            {Section.map((item, index) => (
                <Tab key={index} setPosition={setPosition} onClick={() => onTabClick(item)}>
                    {item}
                </Tab>
            ))}
            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition, onClick }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            onClick={onClick} // Handle click event
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white font-semibold rounded-full md:px-5 md:py-3 md:text-base hover:text-black transition-colors duration-300"
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-7 rounded-full bg-accent md:h-12"
        />
    );
};