"use client"
import Heading from '@/components/shared/Heading';
import LargeButton from '@/components/shared/LargeButton';
import PasswordInput from '@/components/shared/PasswordInput';
import { ConfigProvider, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const ResetPasswordClient = () => {
  const [show, setShow] = useState(false);
  const router = useRouter()

  useEffect(() => {
    setShow(true);
  }, []);

  const onFinish = () => {
    router.push("/login")
  }

  return (
    <div className={`lg:w-[40%] w-full bg-white/90 h-[calc(100vh-85px)] transition-all duration-1000 delay-300 ease-in-out  flex  items-center justify-center
        ${poppins.className}    ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>

      <div className='lg:w-3/4 w-full px-5 lg:px-0'>
        <Heading className='text-center lg:pb-4 pb-2 font-semibold'>Set a new password</Heading>
        <p className="text-center lg:text-[18px] text-[14px] lg:pb-14 pb-10 text-[#6B6B6B] lg:px-5">
          Create a new password. Ensure it  differs from 
          previous ones for security
        </p>


        <Form onFinish={onFinish} layout="vertical" className=' w-full'>
          <PasswordInput name='new_password' label='New Password' placeholder="Enter Your Password" />

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

          <LargeButton className="">
            Update Password
          </LargeButton>

        </Form>


      </div>


    </div>
  );
};

export default ResetPasswordClient;