/* eslint-disable @next/next/no-img-element */
import React from 'react'
import img3 from "@/assets/couple.jpg"
import img4 from "@/assets/blah.jpg"
import Image from 'next/image';
import Heading from '@/components/shared/Heading';
import { Inter } from 'next/font/google'
import Link from 'next/link';
import SmallButton from '@/components/shared/SmallButton';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { GoDot } from 'react-icons/go';
import { Checkbox, Form } from 'antd';
import TextInput from '@/components/shared/TextInput';
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const LandingCards = () => {
    return (
        <div className={`${inter.className}`}>
        {/* 1st section   */}
        <div className="bg-gray-100">
      
              <div className=' container grid grid-cols-12  items-center gap-4 lg:pt-24 pt-10  '>
  
                  <div className=' lg:col-span-6 col-span-12 justify-self-center lg:w-[75%] w-[100%] mb-3 lg:mb-0  lg:-order-1 -order-1 lg:text-start text-center '>
                      <Heading className='py-5 font-bold text-[22px] ' > Welcome to Trad Couples </Heading>
  
                      <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px]  '>Trad Couples is the premier matchmaking platform for singles who embrace the timeless beauty of traditional family roles. Join a like-minded community that values respect, commitment, and lasting relationships</p> 

                      <Link href="/home" className='flex gap-1 items-center justify-center lg:justify-start' >
                    <SmallButton className={`mt-6 flex gap-1 items-center justify-center  lg:h-[65px] h-[50px]  ${inter.className}`}>
                        <span>Join the Waitlist Today</span>
                        <span><MdOutlineKeyboardArrowRight size={22} /></span>
                    </SmallButton> 
                </Link> 

                  </div>
  
                  <div className=' lg:col-span-6 col-span-12 justify-self-center'>
                      <img src="/welcome.png" alt='' height={500} width={500} style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"  }} className='rounded-t-[50px] ' />
                  </div>
  
  
              </div>
   </div>
  
   <div className=' '>
  
              {/* 2nd  section   */}
              <div className=' container grid grid-cols-12 flex-col-reverse items-center lg:py-32 py-12 w-full gap-4'>
  
                  <div className='lg:col-span-6 col-span-12 lg:-order-1 -order-1 justify-self-center'>
                      <Image src={img3} alt='' height={500} width={550} />
                  </div>
  
                  <div className=' lg:col-span-6 col-span-12 justify-self-center lg:w-[75%] w-[100%] mb-3 lg:mb-0 lg:text-start text-center'>
                      <Heading className='py-5 font-bold  text-[16px]'>Where Tradition Meets Connection
                      </Heading>
                      <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px] '>Our community is dedicated to singles who believe in the strength of complementary roles within relationships. Here, men take pride in providing, and women excel in nurturing a home. Trad Couples is for those ready to build a meaningful future grounded in respect and shared values.</p> 
                      <div>
                      <div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[15px] pt-3 font-[400]' > <p> <GoDot  size={18} /> </p> <p>Connect with like-minded singles
                      </p> </div> 

                      <div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[15px] py-2 font-[400]'> <p> <GoDot  size={18} /> </p> <p>Build relationships based on traditional values
                      </p> </div>
                      <div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[15px] font-[400]'> <p> <GoDot  size={18} /> </p> <p>Create a lasting foundation for family life

                      </p> </div>
                      </div>
                  </div>
              </div>
  
  
  
              {/* 3rd section   */}
              <div className=' container grid grid-cols-12  items-center lg:pb-32 pb-14 gap-4  '>
  
                  <div className=' lg:col-span-6 col-span-12 justify-self-center lg:w-[75%] w-[100%] mb-3 lg:mb-0  lg:-order-1 order-1 lg:text-start text-center '>
                      <Heading className=' text-[22px] py-5 font-bold '>Be First to Join – Free 1-Month Subscription for Early Access!
                      </Heading>
                      <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px] mb-4  '>Sign up today to receive a voucher for a free 1-month subscription when we launch.</p> 

                      <div> 
                      <Form  layout="vertical" className=' w-full'>
          <TextInput name='email' label='Email' placeholder="Full Name" />
          <TextInput name='email' label='Email' placeholder="Email Address" />
          <TextInput name='email' label='Email' placeholder="Country" />

          <div className=' flex items-center justify-between mb-[10px]' > 
          <Checkbox ><span className='lg:text-[18px] text-[14px] ' style={{
                color: "#6A6D7C",
                fontWeight: 400,
               
                marginBottom: "10px",
              }}> I agree with </span> <Link href="/terms" className='text-[#54A7C3]'>Terms & Condition</Link> and <Link href="/privacy" className='text-[#54A7C3]'>Privacy Policy</Link></Checkbox>
          </div> 

          <Link href="/home" className=' ' >
                <SmallButton className={`mt-5  lg:h-[60px] h-[50px]  ${inter.className}`}>
                Claim Your Free Month
                   
                </SmallButton> 
            </Link>  

            <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px] mt-4  '>Your privacy is our priority. We’ll keep your information secure and private.</p> 

        </Form>
                      </div>
                  </div>
  
                  <div className='lg:col-span-6 col-span-12  justify-self-center'>
                      <Image src="/landing.jpg" alt='' height={500} width={550} />
  
  
                  </div>
  
  
              </div>
  
              {/* 4th section   */}
              <div className='   '> 
                  <div className=' container   grid grid-cols-12 items-center lg:pb-32 pb-14 gap-4 lg:text-start text-center'>
  
                  <div className='lg:col-span-6 col-span-12  lg:-order-1 -order-1 justify-self-center'>
                  <Image src={img4} alt='' height={500} width={550} />
                  </div>
  
                  <div className='lg:col-span-6 col-span-12  justify-self-center  lg:w-[75%] w-[100%]  lg:mb-0 mb-3  '>
                  <Heading className=' text-[22px] py-5 font-bold '>Your Safety, Our Priority
                      </Heading>
                      <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px]  '>At Trad Couples, we prioritize a safe and respectful environment. Our verification measures ensure a trustworthy community so you can focus on finding someone who shares your values and dreams.</p>  

                      <div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[15px] pt-3 font-[400]'> <p> <GoDot  size={18} /> </p> <p>Verified profiles

                      </p> </div> 

                      <div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[15px] py-2 font-[400]'> <p> <GoDot  size={18} /> </p> <p>Safe and respectful community standards

                      </p> </div>
                      <div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[15px] font-[400]'> <p> <GoDot  size={18} /> </p> <p>Commitment to privacy and security

                      </p> </div>

                  </div>
                  </div>
  
              </div>
   </div>
          </div>
    );
};

export default LandingCards;