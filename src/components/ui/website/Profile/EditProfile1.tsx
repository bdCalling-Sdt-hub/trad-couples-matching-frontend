"use client"
import OutLineBtn from '@/components/shared/OutLineBtn';
import ProfileEditDropdown from '@/components/shared/ProfileEditDropdown';
import SmallButton from '@/components/shared/SmallButton';
import { ConfigProvider, DatePicker, Form, Input } from 'antd';
import Link from 'next/link';
import React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsArrowLeft, BsArrowRight, BsPersonVcard } from 'react-icons/bs';
import { CgGirl } from 'react-icons/cg';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaChildren, FaRegEye, FaRegMap } from 'react-icons/fa6';
import { GiBodyHeight } from 'react-icons/gi';
import { GoHeartFill } from 'react-icons/go';
import { IoIosBody } from 'react-icons/io';
import { IoPersonSharp } from 'react-icons/io5';
import { MdCastForEducation, MdOutlineTempleHindu } from 'react-icons/md';
import { SiEthers } from 'react-icons/si';

const EditProfile1 = () => {
    const location = [
        {
            value: "BanglaDesh",
            label: "Bangladesh"
        },
        {
            value: "India",
            label: "India"
        },
        {
            value: "China",
            label: "China"
        },
        {
            value: "USA",
            label: "USA"
        },

    ]

    const MaritalStatus = [
        {
            value: "Single",
            label: "Single"
        },
        {
            value: "Mingle",
            label: "Mingle"
        },
        {
            value: "Married",
            label: "Married"
        }
    ]

    const children = [
        {
            value: 1,
            label: 1
        },
        {
            value: 2,
            label: 2
        },
        {
            value: 3,
            label: 3
        }
    ]

    const height = [
        {
            value: "150cm",
            label: "150cm"
        },
        {
            value: "160cm",
            label: "160cm"
        },
        {
            value: "170cm",
            label: "170cm"
        }
    ]

    const bodyShape = [
        {
            value: "Fit",
            label: "Fit"
        },
        {
            value: "Fat",
            label: "Fat"
        }
    ]

    const hairColor = [
        {
            value: "Black",
            label: "black"
        },
        {
            value: "Brown",
            label: "Brown"
        }
    ]

    const eyeColor = [
        {
            value: "Black",
            label: "Black"
        },
        {
            value: "Brown",
            label: "Brown"
        }
    ]

    const education = [
        {
            value: "Graduate",
            label: "Graduate"
        }
    ]

    const university = [
        {
            value: "From USA University",
            label: "From USA University"
        },
        {
            value: "From Dhaka University",
            label: "From Dhaka University"
        }
    ]

    const occupation = [
        {
            value: "Teacher",
            label: "Teacher"
        },
        {
            value: "Programmer",
            label: "Programmer"
        }
    ]

    const religion = [
        {
            value: "Cristian",
            label: "Cristian"
        },
        {
            value: "Muslim",
            label: "Muslim"
        },
        {
            value: "Hindu",
            label: "Hindu"
        }
    ]

    const gender = [
        {
            value: "female",
            label: "Female"
        },
        {
            value: "male",
            label: "Male"
        }
    ]

    const province = [
        {
            value: "New York",
            label: "New York"
        },
        {
            value: "Dhaka",
            label: "Dhaka"
        }
    ]

    const ethnicity = [
        {
            value: "American",
            label: "American"
        }, {
            value: "Bengali",
            label: "Bengali"
        }
    ]
    return (
        <div className=''>

            <div className='flex items-center container gap-2 '>
                <Link href="/profile" className=' lg:-ms-10 bg-gray-200 rounded-full px-[6px] py-[6px]'>
                    <span><BsArrowLeft size={21} className='text-[#007BA5]' /></span>

                </Link>

                <h1 className='lg:text-2xl text-xl font-medium text-[#007BA5] my-7'> Edit Your Profile  <span>1/2</span></h1>

            </div>

            <div className='container'>
                <Form layout='vertical'>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 gap-x-16 '>
                        <ProfileEditDropdown name='gender' label="Gender" defaultValue="Female" options={gender} icon={<IoPersonSharp />} />
                        <ProfileEditDropdown name='religion' label="Religion" defaultValue="Christian" options={religion} icon={<MdOutlineTempleHindu />} />

                        {/* date of birth  */}
                        <ConfigProvider
                            theme={{
                                components: {
                                    DatePicker: {
                                        activeBorderColor: "#BABABA",
                                        hoverBorderColor: "#BABABA"
                                    },
                                },
                            }}
                        >
                            <Form.Item
                                name="dob"
                                label={<div className='flex items-center gap-2 text-start'>
                                    <div className=' flex justify-center items-center bg-primary h-7 w-7 rounded-full  '> <p className='text-white text-lg'><FaRegCalendarAlt /></p></div>
                                    <p className='text-[#4E4E4E]  text-[15px] font-medium '>Date of Birth</p>
                                </div>}
                            >
                                <DatePicker style={{ height: "45px", width: "100%" }} />
                            </Form.Item>
                        </ConfigProvider>

                        <ProfileEditDropdown name='martialStatus' label="Marital Status" defaultValue="Single" options={MaritalStatus} icon={<GoHeartFill />} />

                        {/* age  */}
                        <Form.Item name="age" label={<div className='flex items-center gap-2 text-start'>
                            <div className=' flex justify-center items-center bg-primary h-7 w-7 rounded-full  '> <p className='text-white text-lg'><FaRegCalendarAlt /></p></div>
                            <p className='text-[#4E4E4E]  text-[15px] font-medium '>Age</p>
                        </div>} >
                            <Input style={{ height: "45px", width: "100%" }} />
                        </Form.Item>

                        <ProfileEditDropdown name='children' label="Children" defaultValue="0" options={children} icon={<FaChildren />} />


                        <ProfileEditDropdown name='country' label="Country" defaultValue="USA" options={location} icon={<FaRegMap />} />


                        <ProfileEditDropdown name='height' label="Height" defaultValue="170cm" options={height} icon={<GiBodyHeight />} />

                        <ProfileEditDropdown name='province' label="Province/Region" defaultValue="New York" options={province} icon={<AiOutlineGlobal />} />

                        <ProfileEditDropdown name='bodyShape' label="Body Shape" defaultValue="fit" options={bodyShape} icon={<IoIosBody />} />


                        <ProfileEditDropdown name='ethnicity' label="Ethnicity" defaultValue="American" options={ethnicity} icon={<SiEthers />} />


                        <ProfileEditDropdown name='hairColor' label="Hair Color" defaultValue="Brown" options={hairColor} icon={<CgGirl />} />

                        {/* education   */}
                        <div className=' flex gap-2 items-center w-full'>
                            <div className='w-1/3'>
                                <ProfileEditDropdown name='education' label="Education" defaultValue="Graduate" options={education} icon={<MdCastForEducation />} />
                            </div>

                            <div className='w-2/3'>
                                <ProfileEditDropdown name='educationFrom' label="" defaultValue="From USA University" options={university} icon={""} />
                            </div>

                        </div>

                        <ProfileEditDropdown name='eyeColor' label="Eye Color" defaultValue="Brown" options={eyeColor} icon={<FaRegEye />} />

                        <ProfileEditDropdown name='occupation' label="Occupation" defaultValue="Teacher" options={occupation} icon={<BsPersonVcard />} />
                    </div>

                    <p className='w-full border-b-2 border-[#e2dddd] my-4'></p>

                    <Form.Item name="description" label={<p className='font-medium text-[15px]'>Description</p>}>
                        <Input.TextArea rows={5} style={{ width: "100%" }} />
                    </Form.Item>

                    <div className='flex items-center gap-3 mb-5' >
                        <SmallButton className=''>Save & Changes</SmallButton>

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