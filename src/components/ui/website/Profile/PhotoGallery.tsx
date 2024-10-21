"use client";
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import  { ImagePickerConf } from 'react-image-picker-editor';
const ReactImagePickerEditor = dynamic(
    () => import('react-image-picker-editor'),
    { ssr: false }
  );
const PhotoGallery = () => { 
 
    const config:ImagePickerConf = {
        borderRadius: '8px',
        language: 'en',
        width: '330px',
        height: '250px',
        objectFit: 'contain',
        // aspectRatio: 4 / 3,
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
  
      const [imageSrc, setImageSrc] = useState<string | null | undefined>('');  
      console.log(imageSrc);
      const initialImage = '';  
  
      const handleImageChange = (newDataUri: string) => {
        setImageSrc(newDataUri); 
        if (newDataUri) {
          const file = base64ToFile(newDataUri, 'profile-image.png');
          console.log('Image file:', file); 
        }
      }; 

    return (
        <div className='grid lg:grid-cols-5 grid-cols-1 gap-5'>
      
                <ReactImagePickerEditor
                    config={config}
                    imageSrcProp={initialImage} 
                     imageChanged={handleImageChange}
                />
      
                <ReactImagePickerEditor
                    config={config}
                    imageSrcProp={initialImage} 
                     imageChanged={handleImageChange}
                />
      
                <ReactImagePickerEditor
                    config={config}
                    imageSrcProp={initialImage} 
                     imageChanged={handleImageChange}
                />
      
                <ReactImagePickerEditor
                    config={config}
                    imageSrcProp={initialImage} 
                     imageChanged={handleImageChange}
                />
      
                <ReactImagePickerEditor
                    config={config}
                    imageSrcProp={initialImage} 
                     imageChanged={handleImageChange}
                />
      
                <ReactImagePickerEditor
                    config={config}
                    imageSrcProp={initialImage} 
                     imageChanged={handleImageChange}
                />
    
        
        </div>
    );
};

export default PhotoGallery;
