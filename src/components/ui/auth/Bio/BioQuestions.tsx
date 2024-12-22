"use client"
import { useState } from 'react';
import { ConfigProvider, DatePicker, Form, Input, Progress } from 'antd';


import QuestionDropdown from '@/components/shared/QuestionDropdown';
import { Poppins } from 'next/font/google';
import { height, bodyShape, educationOn, ethnicity, country, province, hairColor, eyeColor, maritalStatus, relocationWillingness, livingEnvironment, occupation} from "@/components/shared/Option"
import BioHeader from './BioHeader';
import BioFooter from './BioFooter';
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

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

const option = [
    {
        value: "Yes",
        label: "Yes"
    },
    {
        value: "No",
        label: "No"
    }
]
const BioQuestions = () => { 
    const [current, setCurrent] = useState(0);

    const steps = [
        {
            title: "Mention Your Age/ Date Of Birth",
            content: <>
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
                    <Form.Item name="dob" className='mb-5'>
                        <DatePicker className='lg:w-1/3 w-full h-[45px]   border border-[#BABABA]' placeholder='Date of Birth ' />
                    </Form.Item>

                </ConfigProvider>

                <Form.Item name="age" className='lg:w-[11%] w-1/2'>
                    <Input className='h-[45px] border border-[#BABABA] ' style={{ height: "45px", background: "white" }} placeholder='Age' />
                </Form.Item>
            </>
        },
        {
            title: "Include Your Hight And Body Shape",
            content: <div className='flex flex-col gap-y-5  w-full '>
                <QuestionDropdown name='height' placeholder='Hight/cm'
                    options={height} />
                <QuestionDropdown name='bodyShape' placeholder='Body Shape' options={bodyShape} />
            </div>
        },
        {
            title: "Your Educational Status.",
            content: <div className='flex flex-col gap-y-5  w-full '>
                <QuestionDropdown name='educationOn' placeholder='Education on'
                    options={educationOn} />
                <QuestionDropdown name='educationFrom' placeholder='Education From' options={university} />
            </div>
        },
        {
            title: "Include Your Ethnicity",
            content: <div className='w-full '>
                <QuestionDropdown name='ethnicity' placeholder='Ethnicity'
                    options={ethnicity} />
            </div>
        },
        {
            title: "Select Your Country",
            content: <div className='w-full '>
                <QuestionDropdown name='country' placeholder='Country'
                    options={country} />
            </div>
        },
        {
            title: "Select Your Province/ Region",
            content: <div className='w-full '>
                <QuestionDropdown name='region' placeholder='Province/region'
                    options={province} />
            </div>
        },
        {
            title: "What Is Your Hair Color ?",
            content: <div className='w-full '>
                <QuestionDropdown name='hairColor' placeholder='Hair Color'
                    options={hairColor} />
            </div>
        },
        {
            title: "What Is Your Eye Color ?",
            content: <div className='w-full '>
                <QuestionDropdown name='eyeColor' placeholder='Eye Color'
                    options={eyeColor} />
            </div>
        },
        {
            title: "Share Your Marital Status",
            content: <div className='w-full '>
                <QuestionDropdown name='maritalStatus' placeholder='Single/Divorced/Widow/Widower'
                    options={maritalStatus} />
            </div>
        },
        {
            title: "Do You Have Any Children ?",
            content: <div className='w-full '>
                <QuestionDropdown name='children' placeholder='Yes/No'
                    options={option} />
            </div>
        },
        {
            title: "Are You Willing To Relocate For The Right Partner?",
            content: <div className='w-full '>
                <QuestionDropdown name='searchingRightPartner' placeholder='Yes/No'
                    options={relocationWillingness} />
            </div>
        },
        {
            title: "Would You Like Rural/Homesteading/Urban Living/Either ?",
            content: <div className='w-full '>
                <QuestionDropdown name='wantToLive' placeholder='Yes/No'
                    options={livingEnvironment} />
            </div>
        },
        {
            title: "Your Occupation",
            content: <div className='w-full '>
                <QuestionDropdown name='occupation' placeholder='Select your occupation'
                    options={occupation} />
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
            <BioFooter      current={current} setCurrent={setCurrent} steps={steps} />

        </div>
    </div>
    );
};

export default BioQuestions;