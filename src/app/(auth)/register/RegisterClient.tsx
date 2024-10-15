"use client"
import DropdownInput from '@/components/shared/DropdownInput';
import Heading from '@/components/shared/Heading';
import LargeButton from '@/components/shared/LargeButton';
import PasswordInput from '@/components/shared/PasswordInput';
import TextInput from '@/components/shared/TextInput';
import { SetLocalStorage } from '@/util/LocalStroage';
import { Checkbox, Form, Input } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const RegisterClient = () => { 
    const [show, setShow] = useState(false); 
    const router = useRouter()

    useEffect(() => {
        setShow(true); 
    }, []); 

    const onFinish =(values:any) =>{ 
     console.log(values); 
     const value = {
        userType: "registerUser" , 
        email: values?.email
     } 
     if(values?.email){
        SetLocalStorage("userInfo", value)
     }  
   router.push("/otp-verify")  
    } 

    const option=[
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ]
    return (
        <div className={`w-[50%] bg-[#EEEEEE]/80 min-h-screen transition-all duration-1000 ease-in-out  pt-[85px] flex  items-center justify-center
            ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>  
             
             <div className='w-3/4'> 
             <Heading className='text-center pb-4'>Sign up </Heading>
             <p className="text-center text-[18px] pb-7 text-[#6B6B6B]">
             Please Enter Your Personal Data
          </p>
 

          <Form onFinish={onFinish} layout="vertical"  className=' w-full'>
          <TextInput name='name' label='Full Name' placeholder="Full Name" /> 
 <DropdownInput name='gender' label='gender' placeholder='Gender' options={option}  />  

 <TextInput name='contact' label='Contact Number' placeholder="Contact No" />  
 <TextInput name='email' label='Email' placeholder="Enter Your Email" /> 
           
            <PasswordInput name='password' label="Password" placeholder='Enter Your Password' />  
            
          <Form.Item
          name="confirm_password"
         
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Enter Confirm Password"
            className="placeholder:text-[#818181] placeholder:text-[16px] placeholder:font-normal placeholder:leading-6"
            style={{
              width: "100%",
              height: 45,
              boxShadow: "none",
              outline: "none",
              border: "1px solid #E0E0E0",
              borderRadius: 6,
              background: "#FEFEFE",
            }}
          />
        </Form.Item>  


            <div
             
            >
            <Checkbox ><span   style={{
                  color: "#6A6D7C",
                  fontWeight: 400,
                  fontSize: "18px",
                  marginBottom: "10px",
                }}> I agree with </span> <Link href="/terms" className='text-[#54A7C3]'>Terms & Condition</Link> and <Link href="/privacy" className='text-[#54A7C3]'>Privacy Policy</Link></Checkbox>
            </div> 

              <LargeButton  className="">
                Sign In
              </LargeButton>
           
          </Form> 

          <p className='py-4 text-[#6B6B6B] text-center'> have an account? <Link href="/login"  className='text-[#00445B] font-semibold '>Log In</Link></p>
             </div>
                          
     
    </div>
    );
};

export default RegisterClient;