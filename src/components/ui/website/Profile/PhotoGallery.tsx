"use client";
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { ImagePickerConf } from 'react-image-picker-editor';

const ReactImagePickerEditor = dynamic(
  () => import('react-image-picker-editor'),
  { ssr: false }
);

const PhotoGallery = () => {
  const config: ImagePickerConf = {
    borderRadius: '8px',
    language: 'en',
    width: '330px',
    height: '250px',
    objectFit: 'contain',
    compressInitial: null,
  };

  const base64ToFile = (base64: string, filename: string) => {
    const arr = base64.split(',');
    const mimeMatch = arr[0]?.match(/:(.*?);/);
    const mime = mimeMatch ? mimeMatch[1] : '';
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const initialImages = [
    'https://i.ibb.co.com/NpbQt6G/Rectangle-5306.png',
    'https://i.ibb.co.com/HFkkYh3/Rectangle-5305.png',
    'https://i.ibb.co.com/8zKSXWF/Rectangle-5304.png',
    'https://i.ibb.co.com/0nJ0pVH/Rectangle-5307-3.png',
    'https://i.ibb.co.com/Vwm8kST/Rectangle-5307-2.png',
    null,
  ];

  const [images, setImages] = useState<(string | null)[]>(initialImages);

  const handleImageChange = (index: number, newDataUri: string | null) => {
    const updatedImages = [...images];
    updatedImages[index] = newDataUri; 
    setImages(updatedImages);

    if (newDataUri) {
      const file = base64ToFile(newDataUri, `profile-image-${index}.png`);
      console.log(`Image file at index ${index}:`, file);
    }
  };

  return (
    <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
      {images.map((image, index) => (
        <ReactImagePickerEditor
          key={index}
          config={config}
          imageSrcProp={image || ''} 
          imageChanged={(newDataUri:any) => handleImageChange(index, newDataUri)}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
