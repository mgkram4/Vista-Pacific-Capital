"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import UploadThingComponent from "../components/uploadthing";
import { useUploadThing } from "../lib/uploadthing";

export default function UploadPage() {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const { startUpload } = useUploadThing("imageUploader");

  // Function to upload local images programmatically
  const uploadLocalImages = async () => {
    setIsUploading(true);
    try {
      // This is just a placeholder - in a real implementation, 
      // you would need to fetch the local files and convert them to File objects
      alert("This is a placeholder for programmatic upload. In a real implementation, you would fetch local files and upload them.");
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Error uploading images");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Upload Images to UploadThing</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Manual Upload</h2>
        <p className="mb-4 text-gray-600">
          Use this uploader to manually select and upload images. The URLs will be displayed below after upload.
        </p>
        <UploadThingComponent />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Programmatic Upload (Placeholder)</h2>
        <p className="mb-4 text-gray-600">
          This button demonstrates how you would programmatically upload images. In a real implementation, 
          you would need to fetch the local files and convert them to File objects.
        </p>
        <button
          onClick={uploadLocalImages}
          disabled={isUploading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md disabled:opacity-50"
        >
          {isUploading ? "Uploading..." : "Upload Local Images (Demo)"}
        </button>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => router.push("/")}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
} 