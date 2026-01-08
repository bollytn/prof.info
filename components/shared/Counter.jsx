'use client';
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import AnimatedBox from './AnimatedBox';

const Counter = ({ containerStyles, iconStyles }) => {
    const [startCounter, setStartCounter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartCounter(true);
        }, 2000); // 2-second delay

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <AnimatedBox>
            <div className={containerStyles}>
                <div className={iconStyles}>
                    {startCounter && (
                        <CountUp start={0} end={325} duration={10} delay={0}>
                            {({ countUpRef }) => (
                                <span ref={countUpRef} className="text-2xl font-bold text-accent" />
                            )}
                        </CountUp>
                    )}
                </div>
            </div>
        </AnimatedBox>
    );
};

export default Counter;