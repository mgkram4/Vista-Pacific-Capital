"use client";

import Image, { ImageProps } from "next/image";
import { getUploadThingUrl } from "../lib/image-mapping";

interface UploadThingImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallback?: string;
}

/**
 * A wrapper around Next.js Image component that automatically uses UploadThing URLs
 * when available, falling back to the original source if not found.
 */
export default function UploadThingImage({
  src,
  fallback,
  alt,
  ...props
}: UploadThingImageProps) {
  // Get the UploadThing URL for the image
  const uploadThingUrl = getUploadThingUrl(src);
  
  // Use the UploadThing URL if available, otherwise use the original source or fallback
  const finalSrc = uploadThingUrl || fallback || src;
  
  return <Image src={finalSrc} alt={alt || "Image"} {...props} />;
} 