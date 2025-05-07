"use client"
import { useState } from 'react';
import {ConfigProvider, Form, Progress, Select } from 'antd';

import SectionHeader from './SectionHeader';
import StepsFooterBtn from './StepsFooterBtn';
import QuestionDropdown from '@/components/shared/QuestionDropdown';
import { Poppins } from 'next/font/google';
import {homeOwnership, livingAlone, beliefInChrist, childrenDesired, mainProviderBelief, willingToFatherOthersChildren, roleModelsForBoys, standardForDaughters, interests, preferredAgeRange, preferredEthnicity, preferredPhysique, preferredFitnessLevel , christianityOptions, womanAsNurturer, willingToMothersOthersChildren, makeHome  } from "@/components/shared/Option"
import { useProfileQuery } from '@/redux/features/auth/authApi';
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });



const Questions = () => {
    const [current, setCurrent] = useState(0);   
    const {data:profile} = useProfileQuery(undefined)  
    const gender = profile?.data?.gender


    const [formData, setFormData] = useState({ 
        liveAlone: "",
        liveWithParents: "",
        christian: "",
        believeJesusIsHead: "",
        numberOfChildrenWanted: "",
        manIsMainProvider: "",
        menRoleModelsForBoys: "",
        menSetStandardForDaughters: "",
        interestsHobbies: "",
        preferredAgeRange: "",
        preferredEthnicity: "",
        preferredPhysique: "",
        preferredFitnessLevel: "",
        stepUpAsMother: "",
        mothersAreNurturers: "",
        womenMakeHome: "",
        preferHomesteadingOrUrban: "",
        haveAHome: "",
        stepUpAsFather: "",
      }); 

      const handleChange = (key: string, value: any) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
      };   

console.log(formData);
    const steps = [ 
       
   
        {
            title: "Do You Live Alone?",
            content: <div className='w-full '>
                <QuestionDropdown name='liveAlone' placeholder=''
                    options={livingAlone} onChange={(value) => handleChange("liveAlone", value)} />
            </div>
        },
        {
            title: "Are You A Christian?",
            content: <div className='w-full '>
                <QuestionDropdown name='christian' placeholder=''
                    options={christianityOptions}  onChange={(value) => handleChange("christian", value)} />
            </div>
        },
        {
            title: "Do You Believe Jesus Christ Is The Head Of The House And Then The Man ?",
            content: <div className='w-full '>
                <QuestionDropdown name='believeJesusIsHead' placeholder=''
                    options={beliefInChrist} onChange={(value) => handleChange("believeJesusIsHead", value)} />
            </div>
        }, 
        // change name 
        {
            title: "How Many Children Do You Want ?",
            content: <div className='w-full '>
                <QuestionDropdown name='numberOfChildrenWanted' placeholder='Number of Children '
                    options={childrenDesired} onChange={(value) => handleChange("numberOfChildrenWanted", value)}  />
            </div>
        },
     
        // for male  
        ...(gender === "Female" ? [
            {
                title: "Are You Willing To Step Up and Mother Another Woman’s Children?",
                content: <div className='w-full'>
                    <QuestionDropdown name='stepUpAsMother' placeholder=''
                        options={willingToMothersOthersChildren} onChange={(value) => handleChange("stepUpAsMother", value)} />
                </div>
            } ,  
            {
                title: "Do You Believe That Mothers Are Nurturers ?",
                content: <div className='w-full '>
                    <QuestionDropdown name='mothersAreNurturers' placeholder=''
                        options={womanAsNurturer} onChange={(value) => handleChange("mothersAreNurturers", value)} />
                </div>
            }, 
            {
                title: "Do You Believe That Women Make The Home ?",
                content: <div className='w-full '> 
                    <QuestionDropdown name='womenMakeHome' placeholder=''
                        options={makeHome} onChange={(value) => handleChange("womenMakeHome", value)} />
                </div>
            }

        ] : [ 
            {
                title: "Do You Have A Home?",
                content: <div className='w-full '>
                    <QuestionDropdown name='haveAHome' placeholder=''
                        options={homeOwnership} onChange={(value) => handleChange("haveAHome", value)}  />
                </div>
            },
            {
                title: "Are You Willing To Step Up and Father Another Man’s Children?",
                content: <div className='w-full '>
                    <QuestionDropdown name='stepUpAsFather' placeholder='Yes/No'
                        options={willingToFatherOthersChildren} onChange={(value) => handleChange("stepUpAsFather", value)} />
                </div>
            }
        ]), 

        {
            title: "Do You Believe The Man Is The Main Provider And Protector Of The Household ?",
            content: <div className='w-full '>
                <QuestionDropdown name='manIsMainProvider' placeholder='Yes/No'
                    options={mainProviderBelief} onChange={(value) => handleChange("manIsMainProvider", value)} />
            </div>
        }, 
       
        {
            title: "Do You Believe That Man Are Role Models For Little Boy ?",
            content: <div className='w-full '>
                <QuestionDropdown name='menRoleModelsForBoys' placeholder='Yes/No'
                    options={roleModelsForBoys} onChange={(value) => handleChange("menRoleModelsForBoys", value)} />
            </div>
        },
        {
            title: "Do You Believe That Man Set The Standard For Daughters ?",
            content: <div className='w-full '>
                <QuestionDropdown name='menSetStandardForDaughters' placeholder='Yes/No'
                    options={standardForDaughters} onChange={(value) => handleChange("menSetStandardForDaughters", value)} />
            </div>
        },
        {
            title: "What Are Your Interests /Shorts/Hobbies ?",
            content: <div className='w-full '> 
             <ConfigProvider
      theme={{
        components: {
          Select: {
            activeBorderColor: "#BABABA",
            hoverBorderColor: "#BABABA"
          },
        },
      }}
    >

      <Form.Item
       name='interestsHobbies' className=' lg:w-1/3 w-full '
      >
        <Select mode="multiple" placeholder='interests /shorts/hobbies' options={interests} style={{ height: "60px" ,  }}    onChange={(value) => handleChange("interestsHobbies", value)}  />

      </Form.Item>

    </ConfigProvider> 
            </div>
        },
        {
            title: "What Is Your Preferred Age Range For A Partner ?",
            content: <div className='flex items-center  lg:w-2/3 w-full gap-3 '>
                <QuestionDropdown name='preferredAgeRange' placeholder='20'
                    options={preferredAgeRange} onChange={(value) => handleChange("preferredAgeRange", value)} />

            </div>
        },
        {
            title: "What Is Your Preferred Ethnicity For Partner ?",
            content: <div className='w-full '>
                <QuestionDropdown name='preferredEthnicity' placeholder='Select'
                    options={preferredEthnicity} onChange={(value) => handleChange("preferredEthnicity", value)} />
            </div>
        },
        {
            title: "What Is Your Preferred Physique In A Partner ?",
            content: <div className='w-full '>
                <QuestionDropdown name='preferredPhysique' placeholder='Select'
                    options={preferredPhysique} onChange={(value) => handleChange("preferredPhysique", value)} />
            </div>
        },
        {
            title: "What Is Your Preferred Fitness Level In A Partner ?",
            content: <div className='w-full '>
                <QuestionDropdown name='preferredFitnessLevel' placeholder='Select'
                    options={preferredFitnessLevel} onChange={(value) => handleChange("preferredFitnessLevel", value)} />
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
                <StepsFooterBtn current={current} setCurrent={setCurrent} steps={steps} formData={formData} />

            </div>
        </div>
    );
};

export default Questions;
