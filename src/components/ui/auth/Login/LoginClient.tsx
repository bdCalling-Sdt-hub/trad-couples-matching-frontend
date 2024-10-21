"use client"
import Heading from '@/components/shared/Heading';
import LargeButton from '@/components/shared/LargeButton';
import PasswordInput from '@/components/shared/PasswordInput';
import TextInput from '@/components/shared/TextInput';
import { Checkbox, Form } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

interface loginProps {
  email: string,
  password: string | number
}

const LoginClient = () => {
  const [show, setShow] = useState(false);
  const router = useRouter()

  useEffect(() => {
    setShow(true);
  }, []);

  const onFinish = (values: loginProps) => {
    console.log(values);
    router.push("/discover")
  }
  return (
    <div className={`lg:w-[40%] w-full bg-white/90 h-[calc(100vh-85px)] transition-all duration-1000 delay-500 ease-in-out  pt-[85px] flex  items-center justify-center ${poppins.className}  ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>

      <div className='w-3/4'>
        <Heading className={`text-center pb-4 ${poppins.className}`}>Log in to your account </Heading>
        <p className="text-center text-[18px] pb-14 text-[#6B6B6B]">
          Please enter your email and password to continue
        </p>


        <Form onFinish={onFinish} layout="vertical" className=' w-full'>
          <TextInput name='email' label='Email' placeholder="Enter Your Email" />


          <PasswordInput name='password' label="Password" placeholder='Enter Your Password' />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Checkbox ><span style={{
              color: "#6A6D7C",
              fontWeight: 400,
              fontSize: "18px",
              marginBottom: "10px",
            }}> Remember Password </span></Checkbox>

            <Link
              className=""
              style={{
                color: "#54A7C3",
                fontWeight: 600,
                fontSize: "18px",
                marginBottom: "10px",
              }}
              href="/forgetPassword"
            >
              Forgot password?
            </Link>
          </div>
          <LargeButton className="">
            Sign In
          </LargeButton>

        </Form>

        <div className='py-4 text-[#6B6B6B] text-center'>Don’t have an account? <Link href="/register" className='text-[#00445B] font-semibold '>Register now</Link></div>
      </div>


    </div>
  );
};

export default LoginClient;