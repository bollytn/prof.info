'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            {/*blob*/}
            <div className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="blur-[80px]">
                    <svg
                        viewBox="0 0 900 900"
                    >
                        <g transform="translate(420.6107312765104 462.1716940825793)">
                            <motion.path
                                d="M188.6 -168.4C263.6 -113.6 356.8 -56.8 354.9 -1.9C353 53 256.1 106.1 181.1 155.7C106.1 205.4 53 251.7 -19 270.7C-91 289.6 -182 281.3 -232.5 231.6C-283 182 -293 91 -295.6 -2.6C-298.2 -96.2 -293.3 -192.3 -242.8 -247.2C-192.3 -302 -96.2 -315.5 -19.7 -295.8C56.8 -276.1 113.6 -223.3 188.6 -168.4"
                                fill="#fbd500"
                                animate={{
                                    d: [
                                        "M181.2 -181.5C255.9 -106.5 351.9 -53.3 358.3 6.4C364.7 66 281.3 132 206.7 190.3C132 248.7 66 299.3 6.5 292.8C-53 286.4 -106.1 222.7 -155.1 164.4C-204.1 106.1 -249 53 -252.6 -3.5C-256.1 -60.1 -218.2 -120.2 -169.2 -195.2C-120.2 -270.2 -60.1 -360.1 -3.4 -356.7C53.3 -353.3 106.5 -256.5 181.2 -181.5",
                                        "M183.6 -210.3C221.1 -146.1 223.1 -73.1 239.6 16.5C256.1 106.1 287.1 212.1 249.6 274.5C212.1 336.8 106.1 355.4 23.5 331.9C-59.2 308.5 -118.3 243 -170.8 180.7C-223.3 118.3 -269.2 59.2 -290.3 -21.1C-311.4 -101.4 -307.7 -202.7 -255.2 -266.9C-202.7 -331 -101.4 -358 -14.1 -343.9C73.1 -329.7 146.1 -274.5 183.6 -210.3",
                                        "M286.2 -270.2C361.2 -211.2 405.6 -105.6 380.5 -25.1C355.4 55.4 260.8 110.8 185.8 164.3C110.8 217.8 55.4 269.4 -12.1 281.5C-79.7 293.7 -159.3 266.3 -201.3 212.8C-243.3 159.3 -247.7 79.7 -234.4 13.3C-221 -53 -190.1 -106.1 -148.1 -165.1C-106.1 -224.1 -53 -289 26.3 -315.3C105.6 -341.6 211.2 -329.2 286.2 -270.2"
                                    ],
                                
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 5,
                                    ease: "easeInOut",
                                    repeatType: "reverse"
                                }}
                            >
                            </motion.path>
                        </g>
                    </svg>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}>
                {/*image*/}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
                    className="w-[289px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-difference absolute ml-8 xl:ml-12">
                    <Image
                        src="/assets/photo.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain"
                        sizes="(max-width: 768px) 289px, (max-width: 1200px) 498px, 100vw"
                    />
                </motion.div>

                {/*circle*/}
                <motion.svg
                    className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#ffe866"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                    </motion.circle>
                </motion.svg>
            </motion.div>
        </div >
    )
}

export default Photo