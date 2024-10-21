"use client";
import { ConfigProvider, Tabs } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import ProfileAboutSection from "./ProfileAboutSection";
import ProfileMyChoice from "./ProfileMyChoice";
import ProfileMyPhotos from "./ProfileMyPhotos";
import Link from "next/link";
import profile1 from "@/assets/profile12.svg" 

const ProfileDetails = () => {

    const [coverFile, setCoverFile] = useState<File | null>(null);
    const [coverUrl, setCoverUrl] = useState<string>("/about.png");

    const [profileFile, setProfileFile] = useState<File | null>(null);
    const [profileUrl, setProfileUrl] = useState<string>(profile1);

    useEffect(() => {
        if (coverFile) {
            setCoverUrl(URL.createObjectURL(coverFile));
        }
    }, [coverFile]);

    useEffect(() => {
        if (profileFile) {
            setProfileUrl(URL.createObjectURL(profileFile));
        }
    }, [profileFile]);

    const onCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setCoverFile(file);
        }
    };

    const onProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setProfileFile(file);
        }
    };

    const items = [
        {
            key: '1',
            label: <p className='text-[15px] font-medium'> About Me</p>,
            children: <ProfileAboutSection />,
        },
        {
            key: '2',
            label: <p className='text-[15px] font-medium'> My Choice</p>,
            children: <ProfileMyChoice />,
        },
        {
            key: "3",
            label: <p className='text-[15px] font-medium'>Photos</p>,
            children: <ProfileMyPhotos />,
        }
    ];

    return (
        <div className="font-sans">
            {/* Cover photo */}
            <div className="lg:h-[200px] h-[250px] relative z-0">
                <Image
                    src={coverUrl}
                    alt="host-profile"
                    width={1000}
                    height={1000}
                    style={{
                        height: "100%",
                        width: "100%",
                        zIndex: 0,
                        objectFit: "cover",
                    }}
                />
                <label
                    htmlFor="imageUploadBanner"
                    style={{
                        position: "absolute",
                        top: 4,
                        right: 5,
                        backgroundColor: "white",
                        width: 35,
                        height: 35,
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                >
                    <CiEdit size={25} color="#929394" />
                </label>

                <input
                    id="imageUploadBanner"
                    type="file"
                    onChange={onCoverImageChange}
                    style={{ display: "none" }}
                />
            </div>

            {/* Profile */}
            <div className='container flex lg:flex flex-wrap justify-between'>
                <div className='flex flex-col lg:flex-row lg:gap-2 gap-0'>
                    <div className="z-10 relative">
                        <Image src={profileUrl} alt='' height={450} width={280} style={{ borderRadius: "20px", height: "250px", width: "230px" , objectFit:"cover"}} className='-mt-[125px] border-2 border-white z-10' />
                        <label
                            htmlFor="imageUploadProfile"
                            style={{
                                position: "absolute",
                                top: 0,
                                right: "50%",
                                backgroundColor: "white",
                                width: 35,
                                height: 35,
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                            }}
                        >
                            <CiEdit size={25} color="#929394" />
                        </label>

                        <input
                            id="imageUploadProfile"
                            type="file"
                            onChange={onProfileImageChange}
                            style={{ display: "none" }}
                        />
                    </div>

                    <div className="mt-3">
                        <div className='font-semibold text-2xl tracking-wider py-2'>Mariam Star</div>
                        <div className='text-[#6B6B6B] flex gap-5 text-[15px] font-medium'>
                            <p>Age: 25</p>
                            <p>New York, USA</p>
                        </div>
                    </div>
                </div>
                <Link href="/edit-profile-1" className="mt-3">

                    <button className="h-[45px] mt-2 px-4 tracking-wide font-medium bg-primary text-white rounded-lg" >Edit Profile</button>
                </Link>
            </div>

            {/* Tabs */}
            <div className='my-4 container'>
                <ConfigProvider
                    theme={{
                        components: {
                            Tabs: {
                                itemActiveColor: "#007BA5",
                                itemSelectedColor: "#007BA5",
                                inkBarColor: "#007BA5",
                                itemHoverColor: "#007BA5"
                            },
                        },
                    }}
                >
                    <Tabs defaultActiveKey="1" items={items} />
                </ConfigProvider>
            </div>
        </div>
    );
};

export default ProfileDetails;
