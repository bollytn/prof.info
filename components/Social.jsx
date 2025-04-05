import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaFacebook } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/bollytn' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/bilel-mahjoubi/' },
    { icon: <FaFacebook />, path: 'https://www.facebook.com/blllmhjwby' },
]

export default function Social({ containerStyles, iconStyles }) {
    return (
        <div className={containerStyles}>
            {
                socials.map((item, index) => (
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="social link"
                        key={index}
                        href={item.path}
                        className={iconStyles}
                    >
                        {item.icon}
                    </Link>
                ))
            }
        </div>
    )
}