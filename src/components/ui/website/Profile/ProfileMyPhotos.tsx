"use client";

import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css';
import PhotoGallery from './PhotoGallery';


const ReactImagePickerEditor = dynamic(
  () => import('react-image-picker-editor'),
  { ssr: false }
);

const ProfileMyPhotos = () => {  

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
    const initialImage = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400';  

    const handleImageChange = (newDataUri: string) => {
      setImageSrc(newDataUri); 
      if (newDataUri) {
        const file = base64ToFile(newDataUri, 'profile-image.png');
        console.log('Image file:', file); 
      }
    }; 

    return (
        <div>
            <p className='text-[#6B6B6B] py-2 font-semibold text-[16px]'> Profile Image</p> 
            <div >
                <ReactImagePickerEditor
                    config={config}
                    imageSrcProp={initialImage}
                    imageChanged={handleImageChange} 
                />
            </div>  

            <p className='text-[#6B6B6B] py-6 font-semibold text-[16px]'> Photo Gallery</p>   
            <PhotoGallery/>
        </div>
    );
};

export default ProfileMyPhotos;
