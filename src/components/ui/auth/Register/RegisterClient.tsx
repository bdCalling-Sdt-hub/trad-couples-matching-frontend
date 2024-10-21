"use client"
import DropdownInput from '@/components/shared/DropdownInput';
import Heading from '@/components/shared/Heading';
import LargeButton from '@/components/shared/LargeButton';
import PasswordInput from '@/components/shared/PasswordInput';
import TextInput from '@/components/shared/TextInput';
import { SetLocalStorage } from '@/util/LocalStroage';
import { Checkbox, Form, Input } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'; 
import { Poppins } from 'next/font/google'; 

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

interface signUpProps{
  userName:string 
  gender:string 
  email:string 
  password:string|number 
  confirm_password:string|number
}
const RegisterClient = () => { 
    const [show, setShow] = useState(false); 
    const router = useRouter()

    useEffect(() => {
        setShow(true); 
    }, []); 

    const onFinish =(values:signUpProps) =>{ 
     console.log(values); 
     const value = {
        userType: "registerUser" , 
        email: values?.email
     } 
     if(values?.email){
        SetLocalStorage("userInfo", value)
     }  
   router.push("/otp-verify")  
    } 

    const option=[
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ]
    return ( 
      <div className=' flex justify-end items-center'>

        <div className={`lg:w-[40%] w-full  bg-white/90 h-[calc(100vh-85px)] transition-all duration-1000 ease-in-out  pt-[85px] flex  items-center justify-center ${poppins.className}
            ${show ? 'opacity-100 -translate-x-0' : 'opacity-0 translate-x-12'}`}>  
             
             <div className='w-3/4'> 
             <Heading className='text-center pb-4'>Sign up </Heading>
             <p className="text-center text-[18px] pb-7 text-[#6B6B6B]">
             Please Enter Your Personal Data
          </p>
 

          <Form onFinish={onFinish} layout="vertical"  className=' w-full'>
 <TextInput name='userName' label='Name' placeholder="Your Name" />  
 <DropdownInput name='gender' label='' defaultValue='Male' options={option}  />  
 <TextInput name='email' label='Email' placeholder="Enter Your Email" /> 
            <PasswordInput name='password' label="Password" placeholder='Enter Your Password' />  
            
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
              height: 45,
              boxShadow: "none",
              outline: "none",
              border: "1px solid #BABABA",
              borderRadius: 6,
              background: "#FEFEFE",
            }}
          />
        </Form.Item>  


            <div
             
            >
            <Checkbox ><span   style={{
                  color: "#6A6D7C",
                  fontWeight: 400,
                  fontSize: "18px",
                  marginBottom: "10px",
                }}> I agree with </span> <Link href="/terms" className='text-[#54A7C3]'>Terms & Condition</Link> and <Link href="/privacy" className='text-[#54A7C3]'>Privacy Policy</Link></Checkbox>
            </div> 

              <LargeButton  className="">
                Sign In
              </LargeButton>
           
          </Form> 

          <p className='py-4 text-[#6B6B6B] text-center'> have an account? <Link href="/login"  className='text-[#00445B] font-semibold '>Log In</Link></p>
             </div>
                          
     
    </div>
      </div>
    );
};

export default RegisterClient;