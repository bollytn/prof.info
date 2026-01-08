import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import AnimatedBox from "@/components/shared/AnimatedBox";
import Counter from "./shared/Counter";

const socials = [
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/bilel-mahjoubi/' },
    { icon: <FaFacebook />, path: 'https://www.facebook.com/blllmhjwby' },
]

export default function Social({ containerStyles, iconStyles }) {
    return (
        <div className={containerStyles}>
            {
                socials.map((item, index) => (
                    <AnimatedBox key={index}> {/* Wrap each icon in AnimatedBox */}
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="social link"
                            href={item.path}
                            className={iconStyles}
                        >
                            {item.icon}
                        </Link>
                    </AnimatedBox>
                ))
            }
        </div>
    )
}