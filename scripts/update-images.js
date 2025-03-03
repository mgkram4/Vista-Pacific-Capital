/**
 * This script helps update image references in the codebase to use UploadThing URLs
 * 
 * Usage:
 * 1. Update the imageMapping object with your UploadThing URLs
 * 2. Run this script with Node.js: node scripts/update-images.js
 */

const fs = require('fs');
const path = require('path');

// Image mapping from local paths to UploadThing URLs
const imageMapping = {
  // Local images from public directory to UploadThing URLs
  "/Images/constructionH.png": "https://uploadthing.com/constructionH.png",
  "/Images/alec-sarrial.jpg": "https://uploadthing.com/alec-sarrial.jpg",
  "/Images/logo-NO-BG.png": "https://uploadthing.com/logo-NO-BG.png",
  "/Images/logo3.png": "https://uploadthing.com/logo3.png",
  "/Images/restH.png": "https://uploadthing.com/restH.png",
  "/Images/logo2.png": "https://uploadthing.com/logo2.png",
  "/Images/alan-johnson.jpg": "https://uploadthing.com/alan-johnson.jpg",
  "/Images/logo.png": "https://uploadthing.com/logo.png",
  "/Images/contactH.png": "https://uploadthing.com/contactH.png",
  "/Images/noah-miller.jpg": "https://uploadthing.com/noah-miller.jpg",
  "/Images/medH.png": "https://uploadthing.com/medH.png",
};

// Directories to search for files
const directoriesToSearch = [
  'app',
];

// File extensions to process
const fileExtensionsToProcess = ['.tsx', '.ts', '.js', '.jsx'];

// Function to update image references in a file
function updateImageReferencesInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // Check for each image path in the mapping
    Object.entries(imageMapping).forEach(([localPath, uploadThingUrl]) => {
      // Create regex patterns to match different ways the path might be referenced
      const patterns = [
        new RegExp(`src=["']${localPath}["']`, 'g'),
        new RegExp(`src=["']/public${localPath}["']`, 'g'),
        new RegExp(`src=["']${localPath.substring(1)}["']`, 'g'), // Without leading slash
        new RegExp(`src=["']/public/${localPath.substring(1)}["']`, 'g'),
        new RegExp(`src=["']\\.\\.${localPath}["']`, 'g'),
        new RegExp(`src=["']\\.\\.\\${localPath}["']`, 'g'),
      ];

      // Replace each pattern with the UploadThing URL
      patterns.forEach(pattern => {
        const newContent = content.replace(pattern, `src="${uploadThingUrl}"`);
        if (newContent !== content) {
          content = newContent;
          hasChanges = true;
        }
      });
    });

    // If changes were made, write the updated content back to the file
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated image references in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

// Function to recursively process files in a directory
function processDirectory(directoryPath) {
  const items = fs.readdirSync(directoryPath);

  items.forEach(item => {
    const itemPath = path.join(directoryPath, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      // Skip node_modules and .next directories
      if (item !== 'node_modules' && item !== '.next' && item !== '.git') {
        processDirectory(itemPath);
      }
    } else if (stats.isFile() && fileExtensionsToProcess.includes(path.extname(itemPath))) {
      updateImageReferencesInFile(itemPath);
    }
  });
}

// Main execution
console.log('Starting to update image references...');
directoriesToSearch.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(dirPath)) {
    processDirectory(dirPath);
  } else {
    console.warn(`Directory not found: ${dirPath}`);
  }
});
console.log('Finished updating image references.'); 