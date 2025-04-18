'use client';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import projects from '@/components/data/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAllImagesFromStorage } from '@/components/data/firebaseConfig';

const ProjectPage = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const selectedClass = searchParams.get('selectedClass') || '9ᵉ année';
  
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [firebaseImages, setFirebaseImages] = useState([]);

  useEffect(() => {
    // Find the project based on the ID
    const foundProject = projects.find(p => p.num.toString() === id);
    
    if (foundProject) {
      // Fetch images from Firebase for this specific project
      const fetchProjectImages = async () => {
        try {
          setLoading(true);
          // You can adjust the path to match your Firebase Storage structure
          // For example: `projects/${id}/` or just use the project title
          const images = await getAllImagesFromStorage(`projects/${id}`);
          setFirebaseImages(images);
          
          // Update the project with Firebase images
          if (images.length > 0) {
            // Replace the main image with the first Firebase image
            const updatedProject = {
              ...foundProject,
              image: images[0].url,
              // If you have additional images in your project data, replace them too
              additionalImages: images.slice(1).map(img => img.url)
            };
            setProject(updatedProject);
          } else {
            // If no Firebase images found, use the original project data
            setProject(foundProject);
          }
        } catch (error) {
          console.error('Error fetching project images:', error);
          setProject(foundProject); // Fallback to original project
        } finally {
          setLoading(false);
        }
      };
      
      fetchProjectImages();
    } else {
      setProject(null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-300"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl text-red-500">Project not found</h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-12 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{project.title} - {selectedClass}</h1>
        
        {/* Main project image from Firebase */}
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p>{project.description}</p>
          {/* Add more project details here */}
        </div>
        
        {/* Display all Firebase images in a gallery */}
        {firebaseImages.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {firebaseImages.map((image, index) => (
                <div key={index} className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src={image.url}
                    alt={`Project image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Project stack/technologies */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-800 text-yellow-300 rounded-full"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;