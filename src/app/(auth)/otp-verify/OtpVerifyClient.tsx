"use client"
import Heading from '@/components/shared/Heading';
import LargeButton from '@/components/shared/LargeButton';
import { GetLocalStorage } from '@/util/LocalStroage';
import { Form, Input } from 'antd';
import {useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const OtpVerifyClient = () => { 
    const [show, setShow] = useState(false);    
    const [email, setEmail] = useState<string | null>(null); 
    const router  = useRouter()

    useEffect(() => {
      setShow(true); 
      const userInfo = GetLocalStorage("userInfo");
      if (userInfo?.email) {
        setEmail(userInfo.email);
      }
    }, []);
 
    const handleResend =() =>{

    } 

    const onFinish =(values:any) =>{
    router.push("/reset-password")  
    }  

    return (
        <div className={`w-[50%] bg-[#EEEEEE]/80 min-h-screen transition-all duration-1000 ease-in-out  pt-[85px] flex  items-center justify-center
            ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>  
             
             <div className='w-3/4'> 
             <Heading className='text-center pb-4'>Verification code</Heading>
             <p className="text-center text-[18px] pb-8 text-[#6B6B6B] " > 
             We sent a reset link to {email ? email :""} <br />  enter 5 digit code that is mentioned in the email    </p> 

        
      
 

          <Form onFinish={onFinish} layout="vertical"  className=' w-full mx-auto'> 

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
              width: "100%",
              height: 55,
              boxShadow: "none",
              outline: "none",
              background: "transparent", 
              
            }}
            className=" placeholder:text-[#818181] placeholder:text-[22px] placeholder:font-medium placeholder:leading-6"
          />
        </Form.Item> 

              <LargeButton  className="">
              Verify Code
              </LargeButton>
           
          </Form> 

          <p className='py-4 text-[#6B6B6B] text-center'>You have not received the email? <span  onClick={handleResend}  className='text-[#00445B] font-semibold '>Resend</span></p>
             </div>
                          
     
    </div>
    );
};

export default OtpVerifyClient;