/**
 * This file maps local image paths to their UploadThing URLs
 * Use this for replacing image references throughout the codebase
 */

export const imageMapping: Record<string, string> = {
  // Local images from public directory to UploadThing URLs
  "/Images/constructionH.png": "https://uploadthing.com/f/4e3c9c9e-c5a9-4b9c-9c9e-c5a94b9c9c9e_constructionH.png",
  "/Images/alec-sarrial.jpg": "https://uploadthing.com/f/4e3c9c9e-c5a9-4b9c-9c9e-c5a94b9c9c9e_alec-sarrial.jpg",
  "/Images/logo-NO-BG.png": "https://uploadthing.com/f/4e3c9c9e-c5a9-4b9c-9c9e-c5a94b9c9c9e_logo-NO-BG.png",
  "/Images/logo3.png": "https://uploadthing.com/f/4e3c9c9e-c5a9-4b9c-9c9e-c5a94b9c9c9e_logo3.png",
  "/Images/restH.png": "https://uploadthing.com/f/4e3c9c9e-c5a9-4b9c-9c9e-c5a94b9c9c9e_restH.png",
  "/Images/logo2.png": "https://uploadthing.com/f/4e3c9c9e-c5a9-4b9c-9c9e-c5a94b9c9c9e_logo2.png",
  "/Images/alan-johnson.jpg": "https://uploadthing.com/f/4e3c9c9e-c5a9-4b9c-9c9e-c5a94b9c9c9e_alan-johnson.jpg",
  "/Images/logo.png": "https://uploadthing.com/f/4e3c9c9e-c5a9-4b9c-9c9e-c5a94b9c9c9e_logo.png",
  "/Images/contactH.png": "https://uploadthing.com/f/4e3c9c9e-c5a9-4b9c-9c9e-c5a94b9c9c9e_contactH.png",
  "/Images/noah-miller.jpg": "https://uploadthing.com/f/4e3c9c9e-c5a9-4b9c-9c9e-c5a94b9c9c9e_noah-miller.jpg",
  "/Images/medH.png": "https://uploadthing.com/f/4e3c9c9e-c5a9-4b9c-9c9e-c5a94b9c9c9e_medH.png",
  
  // Add any other image mappings here
};

/**
 * Helper function to get the UploadThing URL for a given local image path
 */
export function getUploadThingUrl(localPath: string): string {
  // Remove leading slash if present for consistency
  const normalizedPath = localPath.startsWith('/') 
    ? localPath 
    : `/${localPath}`;
    
  // Check if we have a direct mapping
  if (normalizedPath in imageMapping) {
    return imageMapping[normalizedPath];
  }
  
  // Check if we have a mapping without the leading slash
  if (normalizedPath.substring(1) in imageMapping) {
    return imageMapping[normalizedPath.substring(1)];
  }
  
  // If no mapping is found, return the original path
  // This allows for graceful fallback
  console.warn(`No UploadThing mapping found for: ${localPath}`);
  return localPath;
} 