"use client"
import Heading from '@/components/shared/Heading';
import LargeButton from '@/components/shared/LargeButton';
import TextInput from '@/components/shared/TextInput';
import { SetLocalStorage } from '@/util/LocalStroage';
import { Form } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

interface forgetPassProps {
    email: string
}

const ForgetPassClient = () => {
    const [show, setShow] = useState(false);
    const router = useRouter()

    useEffect(() => {
        setShow(true);
    }, []);


    const onFinish = (values: forgetPassProps) => {

        const value = {
            userType: "loginUser",
            email: values?.email
        }
        if (values?.email) {
            SetLocalStorage("userInfo", value)
        }

        router.push("/otp-verify")
    }

    return (
        <div className={`lg:w-[40%] w-[100%] bg-white/90 h-[calc(100vh-85px)] transition-all duration-1000 delay-300 ease-in-out  pt-[85px] flex  items-center justify-center
         ${poppins.className}   ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>

            <div className='w-3/4'>
                <Heading className='text-center pb-4'>Forgot Password ? </Heading>
                <p className="text-center text-[18px] pb-14 text-[#6B6B6B]">
                    Please enter your email and password to continue
                </p>


                <Form onFinish={onFinish} layout="vertical" className=' w-full'>
                    <TextInput name='email' label='Email' placeholder="Enter Your Email" />

                    <LargeButton className="">
                        Send Code
                    </LargeButton>

                </Form>

                <p className='py-4 text-[#6B6B6B] text-center'>Don’t have an account? <Link href="/register" className='text-[#00445B] font-semibold '>Register now</Link></p>
            </div>


        </div>
    );
};

export default ForgetPassClient;