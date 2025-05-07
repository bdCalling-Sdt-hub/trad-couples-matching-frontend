"use client"
import { useState } from 'react';
import { ConfigProvider, Form, Input, Progress, TreeSelect } from 'antd';


import QuestionDropdown from '@/components/shared/QuestionDropdown';
import { Poppins } from 'next/font/google';
import { height, bodyShape, educationOn, ethnicity, country, province, hairColor, eyeColor, maritalStatus, relocationWillingness, livingEnvironment, occupation, custodyStatus } from "@/components/shared/Option"
import BioHeader from './BioHeader';
import BioFooter from './BioFooter';
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const BioQuestions = () => {
    const [current, setCurrent] = useState(0);
    const [formData, setFormData] = useState({
        aboutMe: null,
        age: null,
        height: null,
        bodyShape: null,
        educationOn: null,
        ethnicity: null,
        country: null,
        region: null,
        hairColor: null,
        eyeColor: null,
        maritalStatus: null,
        children: null,
        searchingRightPartner: null,
        wantToLive: null,
        occupation: null,
    });

    const handleChange = (key: string, value: any) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const steps = [
        {
            title: "Tell us more about yourself",
            content: <Form.Item name="aboutMe" className=' w-1/2'>
                <Input.TextArea rows={5} className=' border border-[#BABABA] ' style={{ resize: "none", background: "white" }} placeholder='write some thing about yourself'
                    onChange={(e) => handleChange("aboutMe", e.target.value)} />
            </Form.Item>
        },
        {
            title: "Mention Your Age/ Date Of Birth",
            content: <>
                <Form.Item name="age" className='lg:w-[11%] w-1/2'>
                    <Input className='h-[45px] border border-[#BABABA] ' style={{ height: "45px", background: "white" }} placeholder='Age'
                        onChange={(e) => handleChange("age", e.target.value)} />
                </Form.Item>
            </>
        },
        {
            title: "Include Your Height And Body Shape",
            content: <div className='flex flex-col gap-y-5  w-full '>
                <QuestionDropdown name='height' placeholder='Hight/cm'
                    options={height} onChange={(value) => handleChange("height", value)} />

                <QuestionDropdown name='bodyShape' placeholder='Body Shape' options={bodyShape} onChange={(value) => handleChange("bodyShape", value)} />
            </div>
        },
        {
            title: "Your Educational Status.",
            content: <div className='flex flex-col gap-y-5  w-full '>
                <QuestionDropdown name='educationOn' placeholder='Education on'
                    options={educationOn} onChange={(value) => handleChange("educationOn", value)} />
            </div>
        },
        {
            title: "Include Your Ethnicity",
            content: <div className='w-full '>
                <QuestionDropdown name='ethnicity' placeholder='Ethnicity'
                    options={ethnicity} onChange={(value) => handleChange("ethnicity", value)} />
            </div>
        },
        {
            title: "Select Your Country",
            content: <div className='w-full flex flex-col gap-y-5 '>
                <QuestionDropdown name='country' placeholder='Country'
                    options={country} onChange={(value) => handleChange("country", value)} />

                <div className='w-full '>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorBorder: "#BABABA",
                                colorPrimaryBorder: "#BABABA",
                                colorPrimary: "#BABABA",

                            },
                        }}
                    >
                        <Form.Item
                            name="region"
                            className="lg:w-1/3 w-full"
                        >
                            <TreeSelect
                                placeholder="Select Your region"
                                treeData={province}
                                style={{ height: 45 }}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                treeDefaultExpandAll
                                onChange={(value) => handleChange('region', value)}
                            />
                        </Form.Item>

                    </ConfigProvider>
                </div>
            </div>
        },
        // {
        //     title: "Select Your Province/ Region",
        //     content: <div className='w-full '>
        //                    <ConfigProvider
        //                theme={{
        //                 token: {
        //                     colorBorder: "#BABABA", 
        //                     colorPrimaryBorder: "#BABABA", 
        //                     colorPrimary: "#BABABA",

        //                     },
        //                 }}
        //             >
        //                   <Form.Item
        //                         name="region"
        //                         className="lg:w-1/3 w-full"
        //                     >
        //                         <TreeSelect
        //                             placeholder="Select Your region"
        //                             treeData={province}
        //                             style={{ height: 45 }}
        //                             dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        //                             treeDefaultExpandAll 
        //                             onChange={(value) => handleChange('region', value)}
        //                         />
        //                     </Form.Item>

        //             </ConfigProvider>
        //     </div>
        // },
        {
            title: "What Is Your Hair Color ?",
            content: <div className='w-full '>
                <QuestionDropdown name='hairColor' placeholder='Hair Color'
                    options={hairColor} onChange={(value) => handleChange("hairColor", value)} />
            </div>
        },
        {
            title: "What Is Your Eye Color ?",
            content: <div className='w-full '>
                <QuestionDropdown name='eyeColor' placeholder='Eye Color'
                    options={eyeColor} onChange={(value) => handleChange("eyeColor", value)} />
            </div>
        },
        {
            title: " Marital Status",
            content: <div className='w-full '>
                <QuestionDropdown name='maritalStatus' placeholder='Single/Divorced/Widow/Widower'
                    options={maritalStatus} onChange={(value) => handleChange("maritalStatus", value)} />
            </div>
        },
        {
            title: "Do You Have Any Children ?",
            content: <div className='w-full '>
                <QuestionDropdown name='children' placeholder='Yes/No'
                    options={custodyStatus} onChange={(value) => handleChange("children", value)} />
            </div>
        },
        {
            title: "Are You Willing To Relocate For The Right Partner?",
            content: <div className='w-full '>
                <QuestionDropdown name='searchingRightPartner' placeholder='Yes/No'
                    options={relocationWillingness} onChange={(value) => handleChange("searchingRightPartner", value)} />
            </div>
        },
        {
            title: "what do you prefer?",
            content: <div className='w-full '>
                <QuestionDropdown name='wantToLive' placeholder='Yes/No'
                    options={livingEnvironment} onChange={(value) => handleChange("wantToLive", value)} />
            </div>
        },
        {
            title: "Your Occupation",
            content: <div className='w-full '>
                <QuestionDropdown name='occupation' placeholder='Select your occupation'
                    options={occupation} onChange={(value) => handleChange("occupation", value)} />
            </div>
        },
    ];

    const progressPercent = Math.round(((current + 1) / steps.length) * 100);
    const progressColor = '#007BA5'
    return (
        <div className={`bg-[#F7F7F7]  h-[calc(100vh-85px)] transition-all duration-1000 delay-500 ease-in-out opacity-100 translate-x-0 pt-[85px] ${poppins.className}`}>
            <div className='container px-4'>
                {/* Progress bar */}
                <Progress
                    percent={progressPercent}
                    showInfo={false}
                    strokeColor={progressColor}
                />

                {/* header  */}
                <BioHeader />

                <div className="steps-content h-[230px] flex items-center justify-start" style={{ margin: '20px 0' }} >
                    <Form className='w-full' >
                        <p className={`lg:text-[32px] text-[28px] font-medium lg:tracking-wide py-4 ${poppins.className}`}>{steps[current].title} </p>
                        {steps[current].content}
                    </Form>
                </div>

                {/* footer buttons   */}
                <BioFooter current={current} setCurrent={setCurrent} steps={steps} formData={formData} />

            </div>
        </div>
    );
};

export default BioQuestions;