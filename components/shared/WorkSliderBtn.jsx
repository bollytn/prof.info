import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import AnimatedBox from "./AnimatedBox";
import { useState, useEffect } from "react";

export const WorkSliderBtn = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true); // Track if at the beginning
    const [isEnd, setIsEnd] = useState(false); // Track if at the end

    useEffect(() => {
        // Update button visibility on slide change
        const handleSlideChange = () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        };

        // Attach event listeners
        swiper.on('slideChange', handleSlideChange);
        swiper.on('reachBeginning', () => setIsBeginning(true));
        swiper.on('reachEnd', () => setIsEnd(true));
        swiper.on('fromEdge', () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        });

        // Cleanup event listeners on unmount
        return () => {
            swiper.off('slideChange', handleSlideChange);
            swiper.off('reachBeginning');
            swiper.off('reachEnd');
            swiper.off('fromEdge');
        };
    }, [swiper]);

    return (
        <div className={containerStyles}>
            {/* Previous Button */}
            {!isBeginning && (
                <AnimatedBox>
                    <button
                        className={`${btnStyles} btn-animate`}
                        onClick={() => swiper.slidePrev()}
                    >
                        <PiCaretLeftBold className={iconStyles} />
                    </button>
                </AnimatedBox>
            )}

            {/* Next Button */}
            {!isEnd && (
                <AnimatedBox>
                    <button
                        className={`${btnStyles} btn-animate`}
                        onClick={() => swiper.slideNext()}
                    >
                        <PiCaretRightBold className={iconStyles} />
                    </button>
                </AnimatedBox>
            )}
        </div>
    );
};