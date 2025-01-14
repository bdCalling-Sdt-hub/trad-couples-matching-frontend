/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client"
import Heading from '@/components/shared/Heading';
import LargeButton from '@/components/shared/LargeButton';
import { GetLocalStorage, SetLocalStorage } from '@/util/LocalStroage';
import { ConfigProvider, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';
import { useForgetPasswordMutation, useOtpVerifyMutation } from '@/redux/features/auth/authApi';
import Swal from 'sweetalert2';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });


const OtpVerifyClient = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const userInfo = GetLocalStorage("userInfo");
  const [otpVerify] = useOtpVerifyMutation()
  const userType = userInfo?.userType
  const router = useRouter()
  const [forgetPassword] = useForgetPasswordMutation()

  useEffect(() => {
    setShow(true);

    if (userInfo?.email) {
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const handleResendEmail = async () => {
    const value = {
      email: email
    }
    await forgetPassword(value).then((res) => {
      if (res?.data?.success) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        })
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

  const onFinish = async (values: { otp: string | null }) => {
   
    const data = {
      email: email,
      oneTimeCode: parseInt(values?.otp)
    }

    await otpVerify(data).then((res) => {

      if (res?.data?.success) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {

          if (userType === "registerUser") {

            if (data) {
              SetLocalStorage("tradeToken", res?.data?.data?.createToken);
              router.push("/bio-question") 
            }
          } else {
            SetLocalStorage("resetToken", res?.data?.data);
            router.push("/reset-password")
          }

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
  };



  return (
    <div className={`flex ${userType === "registerUser" ? " justify-end " : " justify-start"}`}>

      <div className={`lg:w-[40%] w-full bg-white/90 h-[calc(100vh)] transition-all duration-1000 delay-300 ease-in-out  flex  items-center justify-center
          ${poppins.className}  ${show ? `opacity-100 ${userType === "registerUser" ? "-translate-x-0" : "translate-x-0"}` : `opacity-0   ${userType === "registerUser" ? " translate-x-12" : " -translate-x-12"} `}`}>

        <div className='lg:w-3/4 w-full lg:px-0 px-5'>
          <Heading className='text-center lg:pb-4 pb-2 font-semibold'>Verification code</Heading>
          <p className="text-center lg:text-[18px] text-[14px] pb-8 text-[#6B6B6B] " >
            We sent a reset link to {email ? email : ""} <br />  enter 5 digit code that is mentioned in the email    </p>

          <Form onFinish={onFinish} layout="vertical" className=' w-full mx-auto'>

            <ConfigProvider
              theme={{
                components: {
                  Input: {
                    // lineHeight: 3,
                    controlHeight: 55,

                    borderRadius: 10,
                  },
                },
                token: {
                  colorPrimary: '#292C61',
                },
              }}
            >
              <Form.Item
                className="flex items-center justify-center mx-auto"
                name="otp"
                rules={[{ required: true, message: 'Please input otp code here!' }]}
              >
                <Input.OTP
                  style={{
                    width: 300,
                    height: 50,

                  }}
                  className=""
                  variant="filled"
                  length={5}
                />
              </Form.Item>
            </ConfigProvider>

            <LargeButton className="">
              Verify Code
            </LargeButton>

          </Form>

          <p className='py-8 text-[#6B6B6B] text-center'>You have not received the email? <span onClick={handleResendEmail} className='text-[#00445B] font-semibold '>Resend</span></p>
        </div>


      </div>
    </div>
  );
};

export default OtpVerifyClient;