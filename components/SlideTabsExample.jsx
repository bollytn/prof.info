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

    const [selectedTab, setSelectedTab] = useState('9ᵉ année'); // Track the currently selected tab
    const Section = ['9ᵉ année', '8ᵉ année', '7ᵉ année', 'Primaire', 'lycée','Formation']; // Define the tabs

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto flex w-fit rounded-full border-2 border-accent bg-black p-1"
        >
            {Section.map((item, index) => (
                <Tab
                    key={index}
                    setPosition={setPosition}
                    isSelected={selectedTab === item} // Check if the tab is selected
                    onClick={() => {
                        setSelectedTab(item); // Set the clicked tab as selected
                        onTabClick(item); // Call the parent onTabClick function
                    }}
                >
                    {item}
                </Tab>
            ))}
            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition, onClick, isSelected }) => {
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
            className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs capitalize font-semibold rounded-full md:px-5 md:py-3 md:text-base transition-colors duration-300 ${isSelected ? "bg-accent text-black" : "text-white hover:text-black"
                }`}
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