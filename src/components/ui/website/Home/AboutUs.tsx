import Heading from '@/components/shared/Heading';
import React from 'react';
import { Inter } from 'next/font/google'
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const AboutUs = () => {
    return (
        <div className={` bg-[#E9E9E9] text-[#E6E6E6]  py-3 lg:py-32  flex items-center justify-center lg:text-center ${inter.className} `}>

            <div className='container '>
                <Heading className='font-sans text-center text-[22px] font-semibold '>About Us</Heading>
                <p className='font-[400] lg:text-[20px] text-[16px] leading-[26px] lg:py-7 py-4 tracking-wide   lg:w-3/4 w-full  lg:mx-auto text-[#6B6B6B] font-sans'>TradCouples Matchmaking Services stands at the forefront of sophisticated matchmaking, where accomplished individuals can make exceptional connections. Here you can find women of your choice by sharing your thoughts and opinions
                </p>

                <p className='text-[#999999] text-[16px] font-[400] font-sans'>You deserve nothing less than extraordinary – find someone born for you.</p>
            </div>

        </div>
    );
};

export default AboutUs;