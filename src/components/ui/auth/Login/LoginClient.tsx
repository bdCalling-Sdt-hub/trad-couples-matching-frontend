/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import Heading from '@/components/shared/Heading';
import LargeButton from '@/components/shared/LargeButton';
import PasswordInput from '@/components/shared/PasswordInput';
import TextInput from '@/components/shared/TextInput';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { SetLocalStorage } from '@/util/LocalStroage';
import { Checkbox, Form } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


interface loginProps {
  email: string,
  password: string | number
}

const LoginClient = () => {
  const [show, setShow] = useState(false);
  const router = useRouter()
  const [login, { isSuccess, isError, data, error, isLoading }] = useLoginMutation()

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        Swal.fire({
          title: "Login Successful",
          text: "Welcome to TradeCouples",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        }).then(() => {

          if (data) {
            SetLocalStorage("tradeToken", data?.data);
          }
          router.push("/discover");

        });
      }

    }
    if (isError) {
      Swal.fire({
        title: "Failed to Login",
        //@ts-ignore
        text: error?.data?.message,
        icon: "error",
      });
    }
  }, [isSuccess, isError, error, data, router]);


  const onFinish = async (values: loginProps) => {
    await login(values)
  };


  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`lg:w-[40%] w-full bg-white/90 h-[calc(100vh)] transition-all duration-1000 delay-150   flex  items-center justify-center  ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>

      <div className='lg:w-3/4 w-full lg:px-0 px-5'>
        <Heading className={`text-center lg:pb-4 pb-2  font-semibold`}>Log in to your account </Heading>
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
              href="/forget-password"
            >
              Forgot password?
            </Link>

          </div>

          <LargeButton className="">
            {isLoading ? "Loading..." : "Sign In"}
          </LargeButton>

        </Form>

        <div className='py-8 text-[#6B6B6B] text-center'>Don’t have an account? <Link href="/register" className='text-[#00445B] font-semibold '>Register now</Link></div>
      </div>


    </div>
  );
};

export default LoginClient;