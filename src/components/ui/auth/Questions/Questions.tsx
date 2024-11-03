"use client"
import { useState } from 'react';
import { ConfigProvider, DatePicker, Form, Input, Progress } from 'antd';

import SectionHeader from './SectionHeader';
import StepsFooterBtn from './StepsFooterBtn';
import QuestionDropdown from '@/components/shared/QuestionDropdown';
import { Poppins } from 'next/font/google'; 
import {height  , bodyShape , educationOn , ethnicity , country ,province ,hairColor ,eyeColor ,maritalStatus ,relocationWillingness ,livingEnvironment ,occupation ,homeOwnership , livingAlone ,beliefInChrist, childrenDesired ,mainProviderBelief , willingToFatherOthersChildren ,roleModelsForBoys ,standardForDaughters , interests ,preferredAgeRange , preferredEthnicity , preferredPhysique , preferredFitnessLevel} from "@/components/shared/Option"
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

const Questions = () => {
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
                    <Form.Item name="date" className='mb-5'>
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
                <QuestionDropdown name='province' placeholder='Province/region'
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
                <QuestionDropdown name='MaritalStatus' placeholder='Single/Divorced/Widow/Widower'
                    options={maritalStatus} />
            </div>
        },
        {
            title: "Do You Have Any Children ?",
            content: <div className='w-full '>
                <QuestionDropdown name='anyChild' placeholder='Yes/No'
                    options={option} />
            </div>
        },
        {
            title: "Are You Willing To Relocate For The Right Partner?",
            content: <div className='w-full '>
                <QuestionDropdown name='partner' placeholder='Yes/No'
                    options={relocationWillingness} />
            </div>
        },
        {
            title: "Would You Like Rural/Homesteading/Urban Living/Either ?",
            content: <div className='w-full '>
                <QuestionDropdown name='rural ' placeholder='Yes/No'
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
        {
            title: "Do You Have A Home?",
            content: <div className='w-full '>
                <QuestionDropdown name='haveHome' placeholder='Yes/No'
                    options={homeOwnership} />
            </div>
        },
        {
            title: "Do You Live Alone?",
            content: <div className='w-full '>
                <QuestionDropdown name='liveAlone' placeholder='Yes/No'
                    options={livingAlone} />
            </div>
        },
        {
            title: "Are You A Christian?",
            content: <div className='w-full '>
                <QuestionDropdown name='isChristian' placeholder='Yes/No'
                    options={option} />
            </div>
        },
        {
            title: "Do You Believe Jesse Christ Is The Head Of The House And Then The Man ?",
            content: <div className='w-full '>
                <QuestionDropdown name='isHead' placeholder='Yes/No'
                    options={beliefInChrist} />
            </div>
        },
        {
            title: "How Many Children Do You Want ?",
            content: <div className='w-full '>
                <QuestionDropdown name='howManyChildren' placeholder='Number of Children '
                    options={childrenDesired} />
            </div>
        },
        {
            title: "Do You Believe The Man Is The Main Provider And Protector Of The Household ?",
            content: <div className='w-full '>
                <QuestionDropdown name='believe' placeholder='Yes/No'
                    options={mainProviderBelief} />
            </div>
        },
        {
            title: "Are You Willing To Step Up and Father Another Man’s Children ?",
            content: <div className='w-full '>
                <QuestionDropdown name='willing' placeholder='Yes/No'
                    options={willingToFatherOthersChildren} />
            </div>
        },
        {
            title: "Do You Believe That Man Are Role Models For Little Boy ?",
            content: <div className='w-full '>
                <QuestionDropdown name='roleModal' placeholder='Yes/No'
                    options={roleModelsForBoys} />
            </div>
        },
        {
            title: "Do You Believe That Man Set The Standard For Daughters ?",
            content: <div className='w-full '>
                <QuestionDropdown name='standard' placeholder='Yes/No'
                    options={standardForDaughters} />
            </div>
        },
        {
            title: "What Are Your Interests /Shorts/Hobbies ?",
            content: <div className='w-full '>
                <QuestionDropdown name='interest' placeholder='interests /shorts/hobbies'
                    options={interests} />
            </div>
        },
        {
            title: "What Is Your Preferred Age Range For A Partner ?",
            content: <div className='flex items-center  lg:w-2/3 w-full gap-3 '>
                <QuestionDropdown name='preferredAgeFirst' placeholder='20'
                    options={preferredAgeRange} />
               
            </div>
        },
        {
            title: "What Is Your Preferred Ethnicity For Partner ?",
            content: <div className='w-full '>
                <QuestionDropdown name='ethnicity' placeholder='Select'
                    options={preferredEthnicity} />
            </div>
        },
        {
            title: "What Is Your Preferred Physique In A Partner ?",
            content: <div className='w-full '>
                <QuestionDropdown name='physique' placeholder='Select'
                    options={preferredPhysique} />
            </div>
        },
        {
            title: "What Is Your Preferred Fitness Level In A Partner ?",
            content: <div className='w-full '>
                <QuestionDropdown name='fitness' placeholder='Select'
                    options={preferredFitnessLevel} />
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
                <SectionHeader />

                <div className="steps-content h-[230px] flex items-center justify-start" style={{ margin: '20px 0' }} >
                    <Form className='w-full' >
                        <p className={`lg:text-[32px] text-[28px] font-medium lg:tracking-wide py-4 ${poppins.className}`}>{steps[current].title} </p>
                        {steps[current].content}
                    </Form>
                </div>

                {/* footer buttons   */}
                <StepsFooterBtn current={current} setCurrent={setCurrent} steps={steps} />

            </div>
        </div>
    );
};

export default Questions;
