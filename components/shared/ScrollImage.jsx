const ScrollImage = ({ project }) => {
    return (
        <div className="mt-4">
            <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg w-full"
            />
        </div>
    );
};

export default ScrollImage;