"use client";

import dynamic from 'next/dynamic';
import React, { useContext, useState } from 'react';
import { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css';
import PhotoGallery from './PhotoGallery';
import { useCreateProfilePictureMutation, useGetProfilePictureQuery } from '@/redux/features/profile/profileSlice';
import { UserContext } from '@/provider/User';


const ReactImagePickerEditor = dynamic(
  () => import('react-image-picker-editor'),
  { ssr: false }
);

const ProfileMyPhotos = () => {   
  const {data:getPhotos} = useGetProfilePictureQuery(undefined)  
  const getProfilePictures = getPhotos?.data 
  const [CreateProfilePicture]  = useCreateProfilePictureMutation()  
  // const { user } = useContext(UserContext); 

    const config:ImagePickerConf = {
      borderRadius: '8px',
      language: 'en',
      width: '330px',
      height: '250px',
      objectFit: 'contain',
      // aspectRatio: 4 / 3, 
      hideDeleteBtn:true ,
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
    // console.log(imageSrc); 
    const initialImage = 'https://i.ibb.co.com/Vwm8kST/Rectangle-5307-2.png';  

    const handleImageChange = (newDataUri: string) => {
      setImageSrc(newDataUri); 
      if (newDataUri) {
        const file = base64ToFile(newDataUri, 'profile-image.png');
        // console.log('Image file:', file);  
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
