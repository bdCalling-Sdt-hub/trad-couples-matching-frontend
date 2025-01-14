/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { ReactPhotoEditor } from "react-photo-editor";
import "react-photo-editor/dist/style.css";
import { useProfileQuery } from "@/redux/features/auth/authApi";
import {
  useCreateProfilePictureMutation,
  useDeletePictureMutation,
  useGetProfilePictureQuery,
  useUpdatePictureMutation,
} from "@/redux/features/profile/profileSlice";
import { imageUrl } from "@/redux/base/baseApi";
import { AiOutlineEdit } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";

const CustomPhotoEditor = () => {
  const [images, setImages] = useState<(string | null)[]>([null, null, null, null]);
  const [imageIds, setImageIds] = useState<(string | null)[]>([null, null, null, null]);
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [editorVisible, setEditorVisible] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const { data: profile } = useProfileQuery(undefined);
  const { data: pictures, refetch } = useGetProfilePictureQuery(undefined);
  const [CreateProfilePicture] = useCreateProfilePictureMutation();
  const [updatePicture] = useUpdatePictureMutation();
  const [deletePicture] = useDeletePictureMutation()
  const allPictures = pictures?.data;

  useEffect(() => {
    if (allPictures) {
      const formattedImages = allPictures.map((picture: { image: string; }) =>
        picture.image.startsWith("http")
          ? picture.image
          : `${imageUrl}${picture.image}`
      );
      const ids = allPictures.map((picture: { _id: string; }) => picture._id);
      setImages([...formattedImages]);
      setImageIds([...ids]);
    }
  }, [allPictures]);

  const userProfile = profile?.data;
  const profileImage = userProfile?.image?.startsWith("http")
    ? userProfile?.image
    : `${imageUrl}${userProfile?.image}`;

  const openEditor = async (index: number) => {
    const imageUrl = images[index];
    if (!imageUrl) return;

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], `image-${index}.jpg`, { type: blob.type });
      setCurrentFile(file);
      setEditingIndex(index);
      setEditorVisible(true);
    } catch (error) {
      console.error("Failed to load image for editing:", error);
    }
  };

  const saveEditedImage = async (editedFile: File) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      const editedDataUrl = reader.result as string;

      if (editingIndex !== null) {
        // Replace the edited image locally in the state
        setImages((prev) =>
          prev.map((img, idx) => (idx === editingIndex ? editedDataUrl : img))
        );

        const file = dataURLToFile(editedDataUrl, `edited-image-${editingIndex}.jpg`);
        const imageId = imageIds[editingIndex];

        try {
          if (imageId) {
            const formData = new FormData();
            formData.append("image", file);

            await updatePicture({
              id: imageId,
              data: formData,
            }).unwrap();

          } else {

            const formData = new FormData();
            formData.append("image", file);
            const response = await CreateProfilePicture(formData).unwrap();
         

            setImageIds((prev) =>
              prev.map((id, idx) =>
                idx === editingIndex ? response.data?.id || null : id
              )
            );
          }
        } catch (error) {
          console.error("Failed to save the image:", error);
        }

        setEditorVisible(false);
        setEditingIndex(null);
        setCurrentFile(null);
      }
    };
    reader.readAsDataURL(editedFile);
  };

  const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    await CreateProfilePicture(formData).then((res) => {
      if (res?.data?.success) {
        refetch()
      } else {
        Swal.fire({
          title: "Oops",
          text: res?.data?.message,
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });

  }

  const handleDelete = async (index: number) => {
    const imageId = imageIds[index];

    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this image?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await deletePicture(imageId).unwrap();

        // Remove the deleted image from the local state
        setImages((prev) => prev.map((img, idx) => (idx === index ? null : img)));
        setImageIds((prev) => prev.map((id, idx) => (idx === index ? null : id)));

        Swal.fire({
          title: "Deleted!",
          text: "Your image has been deleted.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Failed to delete the image.",
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
        console.error("Failed to delete the image:", error);
      }
    }
  };

  const dataURLToFile = (dataUrl: string, filename: string) => {
    const arr = dataUrl.split(",");
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

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4 uppercase mt-5 text-gray-700">
        Profile Image
      </h2>
      <img
        src={profileImage}
        alt="Profile"
        style={{
          borderRadius: "20px",
          height: "250px",
          width: "230px",
          objectFit: "cover",
        }}
        className="rounded-lg shadow-lg border border-gray-300"
      />

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold mb-4 mt-5 text-gray-700 uppercase">Photo Gallery</h2>


  

      <div className={`${images.length >= 4 ? "hidden" : ""}`}>
        <div className="relative">
          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="upload-new-image"
            onChange={(e) => handleAddImage(e)}
          />
          <label
            htmlFor="upload-new-image"
            className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full text-lg shadow cursor-pointer"
          >
            <FaPlus color="#fff" size={20} />
          </label>
        </div>


      </div> 
          </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {images.map((image, index) => (
          <div key={index} className="relative">
            {image ? (
              <>
                <img
                  src={image}
                  alt={`Image ${index}`}
                  style={{
                    borderRadius: "8px",
                    width: "100%",
                    height: "250px",
                    objectFit: "fill",
                  }}
                  className="rounded-lg shadow-lg border border-gray-300"
                />
                <button
                  onClick={() => openEditor(index)}
                  className="absolute top-2 right-14 w-10 h-10 flex items-center justify-center bg-black/50 rounded-full shadow "
                >
                  <AiOutlineEdit color="#fff" size={20} />
                </button>

                <button
                  onClick={() => handleDelete(index)}
                  className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-white/50 rounded-full shadow "
                >
                  <RiDeleteBin6Line color="red" size={20} />

                </button>

              </>
            ) : ""}
          </div>
        ))}
      </div>


      {editorVisible && currentFile && (
        <ReactPhotoEditor
          open={editorVisible}
          onClose={() => setEditorVisible(false)}
          file={currentFile}
          onSaveImage={saveEditedImage}
        />
      )}
    </div>
  );
};

export default CustomPhotoEditor;
