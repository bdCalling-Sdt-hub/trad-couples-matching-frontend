/* eslint-disable @typescript-eslint/ban-ts-comment */
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
import { useForgetPasswordMutation } from '@/redux/features/auth/authApi';
import Swal from 'sweetalert2';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

interface forgetPassProps {
    email: string
}

const ForgetPassClient = () => {
    const [show, setShow] = useState(false);
    const router = useRouter() 
    const [forgetPassword ] = useForgetPasswordMutation()

    useEffect(() => {
        setShow(true);
    }, []);


    const onFinish = async(values: forgetPassProps) => { 

        await forgetPassword(values).then((res)=>{ 
             if (res?.data?.success) {
                    Swal.fire({
                      text: res?.data?.message,
                      icon: "success",
                      showConfirmButton: false,
                      timer: 1500,
                    }).then(() => { 
            
                        const value = {
                            userType: "loginUser",
                            email: values?.email
                        }
                        if (values?.email) {
                            SetLocalStorage("userInfo", value)
                        }
                
                        router.push("/otp-verify")
                    });
                  } else {
                    Swal.fire({
                      title: "Oops",
                      //@ts-ignore
                      text: res?.error?.data?.message,
                      icon: "error",
                      timer: 1500,
                      showConfirmButton: false,
                    });
            
                  }
                
        })
    }

    return (
        <div className={`lg:w-[40%] w-[100%] bg-white/90 h-[calc(100vh)] transition-all duration-1000 delay-300 ease-in-out   flex  items-center justify-center
         ${poppins.className}   ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>

            <div className='lg:w-3/4 w-full lg:px-0 px-5'>
                <Heading className='text-center lg:pb-4 pb-2 font-semibold'>Forgot Password ? </Heading>
                <p className="text-center lg:text-[18px] text-[14px] lg:pb-14 pb-10 text-[#6B6B6B]">
                    Please enter your email and password to continue
                </p>


                <Form onFinish={onFinish} layout="vertical" className=' w-full'>
                    <TextInput name='email' label='Email' placeholder="Enter Your Email" />

                    <LargeButton className="">
                        Send Code
                    </LargeButton>

                </Form>

                <p className='py-8 text-[#6B6B6B] text-center'>Don’t have an account? <Link href="/register" className='text-[#00445B] font-semibold '>Register now</Link></p>
            </div>


        </div>
    );
};

export default ForgetPassClient;