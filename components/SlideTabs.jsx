import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import projects from "./data/data";

export const SlideTabsExample = () => {
    return (
        <div className="-mt-8 mb-8 flex w-full items-center justify-center">
            <div className="absolute -top-8 z-0 h-1 w-full bg-white" />
            <SlideTabs />
        </div>
    );
};

const SlideTabs = () => {

    const Section = ['9ᵉ année', '8ᵉ année', '7ᵉ année'];

    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative text-white mx-auto flex w-fit rounded-full border-2 border-accent bg-black p-1"
        >
            {Section.map((item, index) => (
                <Tab
                    key={index}
                    setPosition={setPosition}
                >
                    {item}
                </Tab>
            ))}
            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition }) => {
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
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
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
            className="absolute z-0 h-7 rounded-full bg-accent md:h-12 "
        />
    );
};