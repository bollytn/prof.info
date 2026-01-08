import Image from "next/image";

const ScrollImage = ({ project }) => {
    return (
        <div className="mt-4">
            <Image
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg w-full"
                width={1920}
                height={1080}
                loading="lazy"
                unoptimized
            />
        </div>
    );
};

export default ScrollImage;