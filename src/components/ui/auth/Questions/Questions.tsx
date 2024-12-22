"use client"
import { useState } from 'react';
import {Form, Progress } from 'antd';

import SectionHeader from './SectionHeader';
import StepsFooterBtn from './StepsFooterBtn';
import QuestionDropdown from '@/components/shared/QuestionDropdown';
import { Poppins } from 'next/font/google';
import {homeOwnership, livingAlone, beliefInChrist, childrenDesired, mainProviderBelief, willingToFatherOthersChildren, roleModelsForBoys, standardForDaughters, interests, preferredAgeRange, preferredEthnicity, preferredPhysique, preferredFitnessLevel } from "@/components/shared/Option"
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

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
        //for male 
        {
            title: "Do You Have A Home?",
            content: <div className='w-full '>
                <QuestionDropdown name='haveAHome' placeholder='Yes/No'
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
                <QuestionDropdown name='christian' placeholder='Yes/No'
                    options={option} />
            </div>
        },
        {
            title: "Do You Believe Jesse Christ Is The Head Of The House And Then The Man ?",
            content: <div className='w-full '>
                <QuestionDropdown name='believeJesusIsHead' placeholder='Yes/No'
                    options={beliefInChrist} />
            </div>
        }, 
        // change name 
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
                <QuestionDropdown name='manIsMainProvider' placeholder='Yes/No'
                    options={mainProviderBelief} />
            </div>
        }, 
        // for male 
        {
            title: "Are You Willing To Step Up and Father Another Man’s Children ?",
            content: <div className='w-full '>
                <QuestionDropdown name='stepUpAsFather' placeholder='Yes/No'
                    options={willingToFatherOthersChildren} />
            </div>
        },
        {
            title: "Do You Believe That Man Are Role Models For Little Boy ?",
            content: <div className='w-full '>
                <QuestionDropdown name='menRoleModelsForBoys' placeholder='Yes/No'
                    options={roleModelsForBoys} />
            </div>
        },
        {
            title: "Do You Believe That Man Set The Standard For Daughters ?",
            content: <div className='w-full '>
                <QuestionDropdown name='menSetStandardForDaughters' placeholder='Yes/No'
                    options={standardForDaughters} />
            </div>
        },
        {
            title: "What Are Your Interests /Shorts/Hobbies ?",
            content: <div className='w-full '>
                <QuestionDropdown name='interestsHobbies' placeholder='interests /shorts/hobbies'
                    options={interests} />
            </div>
        },
        {
            title: "What Is Your Preferred Age Range For A Partner ?",
            content: <div className='flex items-center  lg:w-2/3 w-full gap-3 '>
                <QuestionDropdown name='preferredAgeRange' placeholder='20'
                    options={preferredAgeRange} />

            </div>
        },
        {
            title: "What Is Your Preferred Ethnicity For Partner ?",
            content: <div className='w-full '>
                <QuestionDropdown name='preferredEthnicity' placeholder='Select'
                    options={preferredEthnicity} />
            </div>
        },
        {
            title: "What Is Your Preferred Physique In A Partner ?",
            content: <div className='w-full '>
                <QuestionDropdown name='preferredPhysique' placeholder='Select'
                    options={preferredPhysique} />
            </div>
        },
        {
            title: "What Is Your Preferred Fitness Level In A Partner ?",
            content: <div className='w-full '>
                <QuestionDropdown name='preferredFitnessLevel' placeholder='Select'
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
