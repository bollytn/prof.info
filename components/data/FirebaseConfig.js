// Import Firebase SDK
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

/**
 * Fetches all images from a specific path in Firebase Storage
 * @param {string} path - The path in storage to fetch images from (e.g., 'images/')
 * @returns {Promise<Array>} - Array of objects with image URLs and metadata
 */
export async function getAllImagesFromStorage(path = '') {
  try {
    const storageRef = ref(storage, path);
    const result = await listAll(storageRef);
    
    // Get download URLs for all items
    const imagePromises = result.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      return {
        url,
        name: itemRef.name,
        fullPath: itemRef.fullPath
      };
    });
    
    // Also get images from subdirectories if needed
    const folderPromises = result.prefixes.map(folderRef => 
      getAllImagesFromStorage(folderRef.fullPath)
    );
    
    // Combine results from current directory and subdirectories
    const itemResults = await Promise.all(imagePromises);
    const folderResults = await Promise.all(folderPromises);
    
    // Flatten the array of arrays from subdirectories
    return [...itemResults, ...folderResults.flat()];
  } catch (error) {
    console.error("Error fetching images from Firebase Storage:", error);
    return [];
  }
}

/**
 * Get a single image URL from Firebase Storage
 * @param {string} path - Path to the image in Firebase Storage
 * @returns {Promise<string>} - The download URL of the image
 */
export async function getImageFromStorage(path) {
  try {
    const imageRef = ref(storage, path);
    return await getDownloadURL(imageRef);
  } catch (error) {
    console.error(`Error fetching image from path ${path}:`, error);
    return null;
  }
}