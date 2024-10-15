"use client"
import Heading from '@/components/shared/Heading';
import LargeButton from '@/components/shared/LargeButton';
import PasswordInput from '@/components/shared/PasswordInput';
import { Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ResetPasswordClient = () => { 
    const [show, setShow] = useState(false);  
    const router = useRouter()

    useEffect(() => {
        setShow(true); 
    }, []); 
    
    const onFinish =()=>{
 router.push("/login")
    }

    return (
        <div className={`w-[50%] bg-[#EEEEEE]/80 min-h-screen transition-all duration-1000 ease-in-out  pt-[85px] flex  items-center justify-center
            ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>  
             
             <div className='w-3/4'> 
             <Heading className='text-center pb-4'>Set a new password</Heading>
             <p className="text-center text-[18px] pb-14 text-[#6B6B6B]">
             Create a new password. Ensure it  differs from <br />
             previous ones for security
          </p>
 

          <Form onFinish={onFinish} layout="vertical"  className=' w-full'>
          <PasswordInput name='new_password' label='New Password' placeholder="Enter Your Password" /> 

          <Form.Item
          name="confirm_password"
         
          dependencies={["new_password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("new_password") === value) {
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
              height: 50,
              boxShadow: "none",
              outline: "none",
              border: "1px solid #E0E0E0",
              borderRadius: 6,
              background: "#FEFEFE",
            }}
          />
        </Form.Item>

              <LargeButton  className="">
              Update Password
              </LargeButton>
           
          </Form> 

       
             </div>
                          
     
    </div>
    );
};

export default ResetPasswordClient;