"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { ImagePickerConf } from "react-image-picker-editor";

const ReactImagePickerEditor = dynamic(
  () => import("react-image-picker-editor"),
  { ssr: false }
);

const PhotoGallery = () => {
  const config: ImagePickerConf = {
    borderRadius: "8px",
    language: "en",
    width: "330px",
    height: "250px",
    objectFit: "contain",
    hideDeleteBtn: true,
    compressInitial: null,
  };

  const initialImages = [
    { src: "https://i.ibb.co/NpbQt6G/Rectangle-5306.png", timestamp: Date.now() },
    { src: "https://i.ibb.co/0nJ0pVH/Rectangle-5307-3.png", timestamp: Date.now() + 1 },
    { src: "https://i.ibb.co/Vwm8kST/Rectangle-5307-2.png", timestamp: Date.now() + 2 },
    { src: null, timestamp: Date.now() + 3 },
  ];

  const [images, setImages] = useState(initialImages);

  const base64ToFile = (base64: string, filename: string) => {
    const arr = base64.split(",");
    const mimeMatch = arr[0]?.match(/:(.*?);/);
    const mime = mimeMatch ? mimeMatch[1] : "";
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleImageChange = (index: number, newDataUri: string | null) => {
    const updatedImages = [...images];
    if (updatedImages[index].src !== newDataUri) {
      updatedImages[index] = { src: newDataUri, timestamp: Date.now() };
      setImages(updatedImages);

      if (newDataUri) {
        const file = base64ToFile(newDataUri, `profile-image-${index}.png`);
        // console.log(`Image file at index ${index}:`, file); 
      }
    }
  };

  // Sort by timestamp and take the top 4 images
  const topImages = [...images]
    .filter((img) => img.src) // Exclude null images
    .sort((a, b) => b.timestamp - a.timestamp) // Sort by most recent
    .slice(0, 4); // Take the top 4 images

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
      {topImages.map((image, index) => (
        <ReactImagePickerEditor
          key={index}
          config={config}
          imageSrcProp={image.src || ""}
          imageChanged={(newDataUri: any) => handleImageChange(index, newDataUri)}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
