"use client"
import Heading from '@/components/shared/Heading';
import LargeButton from '@/components/shared/LargeButton';
import PasswordInput from '@/components/shared/PasswordInput';
import TextInput from '@/components/shared/TextInput';
import { SetLocalStorage } from '@/util/LocalStroage';
import { Checkbox, ConfigProvider, Form, Input, Select } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

interface signUpProps {
  userName: string
  gender: string
  email: string
  password: string | number
  confirm_password: string | number
}
const RegisterClient = () => {
  const [show, setShow] = useState(false);
  const router = useRouter()

  useEffect(() => {
    setShow(true);
  }, []);

  const onFinish = (values: signUpProps) => {
    console.log(values);
    const value = {
      userType: "registerUser",
      email: values?.email
    }
    if (values?.email) {
      SetLocalStorage("userInfo", value)
    }
    router.push("/otp-verify")
  }

  const option = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ]
  return (
    <div className=' flex justify-end items-center'>

      <div className={`lg:w-[40%] w-full  bg-white/90 lg:h-[calc(100vh)] h-[100vh] transition-all duration-1000 ease-in-out flex  items-center justify-center ${poppins.className}
            ${show ? 'opacity-100 -translate-x-0' : 'opacity-0 translate-x-12'}`}>

        <div className='lg:w-3/4 w-full px-5 lg:px-0'>
          <Heading className='text-center lg:pb-4 pb-2'>Sign up </Heading>
          <p className="text-center text-[18px] pb-7 text-[#6B6B6B]">
            Please Enter Your Personal Data
          </p>


          <Form onFinish={onFinish} layout="vertical" className=' w-full'> 

            <TextInput name='userName' label='Name' placeholder="Your Name" />

            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    activeBorderColor: "#BABABA",
                    hoverBorderColor: "#BABABA" , 
                  },
                }, 
                token: {
                  colorBgContainer:"transparent" , 
                       fontFamily: 'Poppins, sans-serif',
                colorTextPlaceholder: "#6B6B6B"
                },
              }}
            >
              <Form.Item name='gender' style={{ background: "transparent" }} >
                <Select defaultValue="Male" options={option}
                style={{
                  height: "56px",  
                  border: "1px solid #BABABA", 
                  borderRadius: "8px",
                }}
                />
              </Form.Item>
            </ConfigProvider>


            <TextInput name='email' label='Email' placeholder="Enter Your Email" />
            <PasswordInput name='password' label="Password" placeholder='Enter Your Password' />
 
            <ConfigProvider
        theme={{
            token: {
                fontFamily: 'Poppins, sans-serif',
                colorTextPlaceholder: "#6B6B6B"
            }
        }}
    >  
    
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
                  height: 56,
                  boxShadow: "none",
                  outline: "none",
                  border: "1px solid #BABABA",
                  borderRadius: 6,
                  background: "transparent",
                }}
              />
            </Form.Item>
     </ConfigProvider>
     
            <div

            >
              <Checkbox ><span style={{
                color: "#6A6D7C",
                fontWeight: 400,
                fontSize: "18px",
                marginBottom: "10px",
              }}> I agree with </span> <Link href="/terms" className='text-[#54A7C3]'>Terms & Condition</Link> and <Link href="/privacy" className='text-[#54A7C3]'>Privacy Policy</Link></Checkbox>
            </div>

            <LargeButton className="">
              Sign In
            </LargeButton>

          </Form>

          <p className='py-4 text-[#6B6B6B] text-center'> have an account? <Link href="/login" className='text-[#00445B] font-semibold '>Log In</Link></p>
        </div>


      </div>
    </div>
  );
};

export default RegisterClient;