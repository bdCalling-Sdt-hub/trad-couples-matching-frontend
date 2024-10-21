import DropdownInput from '@/components/shared/DropdownInput';
import OutLineBtn from '@/components/shared/OutLineBtn';
import SmallButton from '@/components/shared/SmallButton';
import { Form } from 'antd';
import Link from 'next/link';
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

const EditProfile2 = () => { 
    const option =[
        {
            value:"yes" ,
            label:"Yes"
        } , 
         {
            value:"No" , 
            label:"No"
        }
    ] 

    const children =[ 
        {
            value:1 , 
            label:1 
        } , 
        {
            value:2 ,
            label:2
        } ,
        {
            value:3 ,
            label:3
        } ,
         {
            value:4, 
             label:4
        }
    ] 

    const interest =[
        {
            value:"Christian" , 
            label:"Christian"
        }
    ] 

    const preferredAge=[
        {
            value:"20-30" , 
            label:"20-30"
        } , 
        {
            value:"25-35" ,
            label:"25-35"
        } ,
        {
            value:"30-40" ,
            label:"30-40"
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

    const fitness = [
        {
            value:"fit" ,
            label:"fit"
        }
    ]

    return (
        <div >
            <div className=' container'> 
            <h1 className='text-2xl font-medium text-[#007BA5] my-7'> Edit Your Profile  <span>2/2</span></h1>  

            <Form layout='vertical' className='w-1/2'> 
  <DropdownInput name="haveHome" label="Do you have a home?" options={option} defaultValue="Yes" /> 

  
  <DropdownInput name="liveAlone" label="Do you live alone?" options={option} defaultValue="Yes" /> 

  <DropdownInput name="christian" label="Are you a Christian ?" options={option} defaultValue="Yes" /> 

  <DropdownInput name="believeJesus" label="Do you believe Jesus Christ is the head of the house and then the man ?" options={option} defaultValue="Yes" /> 

  <DropdownInput name="children" label="How many children do you want ?" options={children} defaultValue="1" /> 

  <DropdownInput name="household" label="Do you believe the man is the main provider and protector of the household ?" options={option} defaultValue="Yes" /> 

  <DropdownInput name="anotherMan" label="Are you willing to step up and father another man's children ?" options={option} defaultValue="Yes" /> 

  <DropdownInput name="roleModal" label="Do you believe that men are role models for little boys ?" options={option} defaultValue="Yes" /> 

  <DropdownInput name="standard" label="Do you believe that men set the standard for daughters ?" options={option} defaultValue="Yes" /> 

  <DropdownInput name="interest" label="What are your interests ?" options={interest} defaultValue="Christian" /> 

  <DropdownInput name="preferredAge" label="What is your preferred age range for a partner ?" options={preferredAge} defaultValue="20-30" /> 

  <DropdownInput name="ethnicity" label="What is your preferred ethnicity for partner ?" options={ethnicity} defaultValue="American" /> 

  <DropdownInput name="bodyShape" label="What is your preferred physique in a partner ?" options={bodyShape} defaultValue="Fit" /> 

  <DropdownInput name="fitness" label="What is your preferred fitness level in a partner ?" options={fitness} defaultValue="fit" />  

  
  <div className='flex items-center gap-3 mb-5' > 

                        <Link href="edit-profile-1">  
                        <OutLineBtn className='flex items-center gap-[2px]'>  <span> <BsArrowLeft size={22} /></span> <span> Previous </span> </OutLineBtn>
                        </Link> 

                        <SmallButton className=''>Save & Changes</SmallButton>  

                    </div> 

            </Form>

            </div>
        </div>
    );
};

export default EditProfile2;