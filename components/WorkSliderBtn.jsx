'use client'

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

export const WorkSliderBtn = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper()
    return (
        <div className={containerStyles}>
            <button className={`${btnStyles} btn-animate`}
                onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconStyles} />
            </button>
            <button className={`${btnStyles} btn-animate`} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className="iconStyles" />
            </button>
        </div>
    )
}
