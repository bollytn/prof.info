// This component is used to create a slider button for the work slider.
// It uses the Swiper library to handle the slider functionality.
import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import AnimatedBox from "./shared/AnimatedBox"

export const WorkSliderBtn = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper()
    return (
        <div className={containerStyles}>
            <AnimatedBox>
                <button className={`${btnStyles} btn-animate`}
                    onClick={() => swiper.slidePrev()}>
                    <PiCaretLeftBold className={iconStyles} />
                </button>
            </AnimatedBox>
            <AnimatedBox>
                <button className={`${btnStyles} btn-animate`} onClick={() => swiper.slideNext()}>
                    <PiCaretRightBold className="iconStyles" />
                </button>
            </AnimatedBox>
        </div>
    )
}
