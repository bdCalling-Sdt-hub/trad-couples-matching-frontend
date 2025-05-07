/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client"
import OutLineBtn from '@/components/shared/OutLineBtn';
import ProfileEditDropdown from '@/components/shared/ProfileEditDropdown';
import SmallButton from '@/components/shared/SmallButton';
import {  useGetBioQuery, useUpdateBioMutation } from '@/redux/features/profile/profileSlice';
import {Form, Input } from 'antd';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsArrowLeft, BsArrowRight, BsPersonVcard } from 'react-icons/bs';
import { CgGirl } from 'react-icons/cg';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaRegEye, FaRegMap } from 'react-icons/fa6';
import { GiBodyHeight } from 'react-icons/gi';
import { IoIosBody } from 'react-icons/io';
import { MdCastForEducation } from 'react-icons/md';
import { SiEthers } from 'react-icons/si';
import { height, bodyShape, educationOn, ethnicity, country, province, hairColor, eyeColor, occupation } from "@/components/shared/Option"
import Swal from 'sweetalert2';


const EditProfile1 = () => {
    const [form] = Form.useForm();
    const { data: getBio } = useGetBioQuery(undefined)
    const bioData = getBio?.data
  
    const [updateBio] = useUpdateBioMutation()

    useEffect(() => {
        if (bioData) {
            form.setFieldsValue({
                maritalStatus: bioData.maritalStatus,
                age: bioData.age,
                country: bioData.country,
                height: bioData.height,
                province: bioData.region,
                bodyShape: bioData.bodyShape,
                ethnicity: bioData.ethnicity,
                hairColor: bioData.hairColor,
                educationOn: bioData.educationOn,
                eyeColor: bioData.eyeColor,
                occupation: bioData.occupation,
                aboutMe: bioData.aboutMe,
            });
        }
    }, [bioData, form]);

    const onFinish = async (values: any) => {
        await updateBio(values).then((res) => { 

            if (res?.data?.success) {
                Swal.fire({
                    text: res?.data?.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                })
            } else {
                Swal.fire({
                    title: "Oops",
                    text: res?.data?.message,
                    icon: "error",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        })
    };


    return (
        <div className=''>

            <div className='flex items-center container gap-2 '>
                <Link href="/profile" className=' lg:-ms-10 bg-gray-200 rounded-full px-[6px] py-[6px]'>
                    <span><BsArrowLeft size={21} className='text-[#007BA5]' /></span>

                </Link>

                <h1 className='lg:text-2xl text-xl font-medium text-[#007BA5] my-7'> Edit Your Profile  <span>1/2</span></h1>

            </div>

            <div className='container'>
                <Form layout='vertical' form={form} onFinish={onFinish}>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 gap-x-16 '>            
                        {/* age  */}
                        <Form.Item name="age" label={<div className='flex items-center gap-2 text-start'>
                            <div className=' flex justify-center items-center bg-primary h-7 w-7 rounded-full  '> <p className='text-white text-lg'><FaRegCalendarAlt /></p></div>
                            <p className='text-[#4E4E4E]  text-[15px] font-medium '>Age</p>
                        </div>} >
                            <Input style={{ height: "45px", width: "100%" }} />
                        </Form.Item>

                        {/* <ProfileEditDropdown name='children' label="Children" defaultValue="0" options={children} icon={<FaChildren />} /> */}


                        <ProfileEditDropdown name='country' label="Country" options={country} icon={<FaRegMap />} />


                        <ProfileEditDropdown name='height' label="Height" options={height} icon={<GiBodyHeight />} />

                        <ProfileEditDropdown name='province' label="Province/Region" options={province} icon={<AiOutlineGlobal />} />

                        <ProfileEditDropdown name='bodyShape' label="Body Shape" options={bodyShape} icon={<IoIosBody />} />


                        <ProfileEditDropdown name='ethnicity' label="Ethnicity" options={ethnicity} icon={<SiEthers />} />


                        <ProfileEditDropdown name='hairColor' label="Hair Color" options={hairColor} icon={<CgGirl />} />

                        {/* education   */}
                        <div className=' flex gap-2 items-center w-full'>
                            <div className='w-1/3'>
                                <ProfileEditDropdown name='educationOn' label="Education" options={educationOn} icon={<MdCastForEducation />} />
                            </div>
                        </div>

                        <ProfileEditDropdown name='eyeColor' label="Eye Color" options={eyeColor} icon={<FaRegEye />} />

                        <ProfileEditDropdown name='occupation' label="Occupation" options={occupation} icon={<BsPersonVcard />} />
                    </div>

                    <p className='w-full border-b-2 border-[#e2dddd] my-4'></p>

                    <Form.Item name="aboutMe" label={<p className='font-medium text-[15px]'>Description</p>}>
                        <Input.TextArea rows={5} style={{ width: "100%" }} />
                    </Form.Item>

                    <div className='flex items-center gap-3 mb-5' >
                        <SmallButton className='mt-6'>Save & Changes</SmallButton>

                        <Link href="edit-profile-2">
                            <OutLineBtn className='flex items-center gap-[2px]'> <span> Next </span> <span> <BsArrowRight size={22} /></span></OutLineBtn>
                        </Link>

                    </div>
                </Form>
            </div>
        </div>
    );
};

export default EditProfile1;