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
    <div className={`lg:w-[40%] w-full bg-white/90 h-[calc(100vh-85px)] transition-all duration-1000 delay-500 ease-in-out  flex  items-center justify-center ${poppins.className}  ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>

      <div className='lg:w-3/4 w-full lg:px-0 px-5'>
        <Heading className={`text-center lg:pb-4 pb-2 ${poppins.className} font-semibold`}>Log in to your account </Heading>
        <p className="text-center lg:text-[18px] text-[14px] lg:pb-14 pb-10 text-[#6B6B6B]">
          Please enter your email and password to continue
        </p>


        <Form onFinish={onFinish} layout="vertical" className=' w-full'>
          <TextInput name='email' label='Email' placeholder="Enter Your Email" />


          <PasswordInput name='password' label="Password" placeholder='Enter Your Password' />

          <div className=' flex items-center justify-between mb-[10px]' > 

            <div>

            <Checkbox ><span className='text-[#6A6D7C] font-[400] lg:text-[18px] text-[16px] ' > Remember Password </span></Checkbox>
            </div>

            <Link
          className='text-primary font-[500] lg:text-[18px] text-[16px] '
              href="/forgetPassword"
            >
              Forgot password?
            </Link>

          </div>

          <LargeButton className="">
            Sign In
          </LargeButton>

        </Form>

        <div className='py-8 text-[#6B6B6B] text-center'>Don’t have an account? <Link href="/register" className='text-[#00445B] font-semibold '>Register now</Link></div>
      </div>


    </div>
  );
};

export default LoginClient;