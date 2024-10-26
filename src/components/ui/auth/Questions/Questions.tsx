"use client"
import { useState } from 'react';
import { ConfigProvider, DatePicker, Form, Input, Progress } from 'antd';

import SectionHeader from './SectionHeader';
import StepsFooterBtn from './StepsFooterBtn';
import QuestionDropdown from '@/components/shared/QuestionDropdown';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const country = [
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

const interest = [
    {
        value: "Nobel",
        label: "Nobel"
    },

]

const preferredAgeFirst = [
    {
        value: 20,
        label: 20
    },
    {
        value: 30,
        label: 30
    },
    {
        value: 40,
        label: 40
    },
]
const preferredAgeSecond = [
    {
        value: 30,
        label: 30
    },
    {
        value: 40,
        label: 40
    },
    {
        value: 50,
        label: 50
    },
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
                    options={education} />
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
                    options={MaritalStatus} />
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
                    options={option} />
            </div>
        },
        {
            title: "Would You Like Rural/Homesteading/Urban Living/Either ?",
            content: <div className='w-full '>
                <QuestionDropdown name='rural ' placeholder='Yes/No'
                    options={option} />
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
                    options={option} />
            </div>
        },
        {
            title: "Do You Live Alone?",
            content: <div className='w-full '>
                <QuestionDropdown name='liveAlone' placeholder='Yes/No'
                    options={option} />
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
                    options={option} />
            </div>
        },
        {
            title: "How Many Children Do You Want ?",
            content: <div className='w-full '>
                <QuestionDropdown name='howManyChildren' placeholder='Number of Children '
                    options={children} />
            </div>
        },
        {
            title: "Do You Believe The Man Is The Main Provider And Protector Of The Household ?",
            content: <div className='w-full '>
                <QuestionDropdown name='believe' placeholder='Yes/No'
                    options={option} />
            </div>
        },
        {
            title: "Are You Willing To Step Up and Father Another Man’s Children ?",
            content: <div className='w-full '>
                <QuestionDropdown name='willing' placeholder='Yes/No'
                    options={option} />
            </div>
        },
        {
            title: "Do You Believe That Man Are Role Models For Little Boy ?",
            content: <div className='w-full '>
                <QuestionDropdown name='roleModal' placeholder='Yes/No'
                    options={option} />
            </div>
        },
        {
            title: "Do You Believe That Man Set The Standard For Daughters ?",
            content: <div className='w-full '>
                <QuestionDropdown name='standard' placeholder='Yes/No'
                    options={option} />
            </div>
        },
        {
            title: "What Are Your Interests /Shorts/Hobbies ?",
            content: <div className='w-full '>
                <QuestionDropdown name='interest' placeholder='interests /shorts/hobbies'
                    options={interest} />
            </div>
        },
        {
            title: "What Is Your Preferred Age Range For A Partner ?",
            content: <div className='flex items-center  lg:w-1/2 w-full gap-3 '>
                <QuestionDropdown name='preferredAgeFirst' placeholder='20'
                    options={preferredAgeFirst} />
                <p className=' text-[19px] text-[#7F7F7F] pb-5 '>to</p>
                <QuestionDropdown name='preferredAgeSecond' placeholder='30' options={preferredAgeSecond} />
            </div>
        },
        {
            title: "What Is Your Preferred Ethnicity For Partner ?",
            content: <div className='w-full '>
                <QuestionDropdown name='ethnicity' placeholder='Select'
                    options={ethnicity} />
            </div>
        },
        {
            title: "What Is Your Preferred Physique In A Partner ?",
            content: <div className='w-full '>
                <QuestionDropdown name='physique' placeholder='Select'
                    options={bodyShape} />
            </div>
        },
        {
            title: "What Is Your Preferred Fitness Level In A Partner ?",
            content: <div className='w-full '>
                <QuestionDropdown name='fitness' placeholder='Select'
                    options={bodyShape} />
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
