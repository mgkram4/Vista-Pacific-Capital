"use client";

import { UploadButton } from "@uploadthing/react";
import { useState } from "react";
import { OurFileRouter } from "../api/uploadthing/core";

export default function UploadThingComponent() {
  const [images, setImages] = useState<{
    fileUrl: string;
    fileKey: string;
  }[]>([]);

  const [uploading, setUploading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <UploadButton<OurFileRouter, "imageUploader">
          endpoint="imageUploader"
          onUploadBegin={() => {
            setUploading(true);
          }}
          onClientUploadComplete={(res) => {
            setUploading(false);
            if (res) {
              setImages((prev) => [
                ...prev,
                ...res.map((image) => ({
                  fileUrl: image.url,
                  fileKey: image.key,
                })),
              ]);
              console.log("Files: ", res);
              alert("Upload Completed");
            }
          }}
          onUploadError={(error: Error) => {
            setUploading(false);
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>

      {uploading && <p>Uploading...</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {images.map((image) => (
          <div key={image.fileKey} className="relative">
            <img
              src={image.fileUrl}
              alt="Uploaded file"
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-2 text-sm break-all">
              <p>URL: {image.fileUrl}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 