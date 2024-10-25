"use client"
import Heading from '@/components/shared/Heading';
import LargeButton from '@/components/shared/LargeButton';
import { GetLocalStorage } from '@/util/LocalStroage';
import { Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

interface valueProps {
  otp: string | number | null
}

const OtpVerifyClient = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const userInfo = GetLocalStorage("userInfo");
  const userType = userInfo?.userType 
  console.log(userType);
  const router = useRouter()

  useEffect(() => {
    setShow(true);

    if (userInfo?.email) {
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const handleResend = () => {

  }

  const onFinish = (values: valueProps) => {
    console.log(values);
    if (userType === "registerUser") {
      router.push("/verify-questions")
    } else {
      router.push("/reset-password")
    }
  }

  return ( 
    <div className={`flex ${userType === "registerUser" ? " justify-end " : " justify-start"}`}>

    <div className={`lg:w-[40%] w-full bg-white/90 h-[calc(100vh-85px)] transition-all duration-1000 delay-300 ease-in-out  pt-[85px] flex  items-center justify-center
          ${poppins.className}  ${show ? `opacity-100 ${userType === "registerUser" ? "-translate-x-0" : "translate-x-0" }` : `opacity-0   ${userType === "registerUser" ? " translate-x-12" : " -translate-x-12" } `}`}>

      <div className='w-3/4'>
        <Heading className='text-center pb-4 font-semibold'>Verification code</Heading>
        <p className="text-center text-[18px] pb-8 text-[#6B6B6B] " >
          We sent a reset link to {email ? email : ""} <br />  enter 5 digit code that is mentioned in the email    </p>

        <Form onFinish={onFinish} layout="vertical" className=' w-full mx-auto'>

          <Form.Item
            name="otp"

            rules={[
              {
                required: true,
                message: "Please Enter 5 Digit OTP",
              },
            ]}
            className=' flex items-center justify-center'

          >
            <Input.OTP
              length={5}
              size="large"
              style={{
                // width: "100%", 
                // height: 55, 
                boxShadow: "none",
                outline: "none",
                background: "transparent",

              }}
              className=" placeholder:text-[#818181] placeholder:text-[22px] placeholder:font-medium placeholder:leading-6"
            />
          </Form.Item>

          <LargeButton className="">
            Verify Code
          </LargeButton>

        </Form>

        <p className='py-8 text-[#6B6B6B] text-center'>You have not received the email? <span onClick={handleResend} className='text-[#00445B] font-semibold '>Resend</span></p>
      </div>


    </div>
    </div>
  );
};

export default OtpVerifyClient;