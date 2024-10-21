import Heading from '@/components/shared/Heading';
import React from 'react';


const AboutUs = () => {
    return (
        <div className=' bg-[#E9E9E9] text-[#E6E6E6] lg:h-[295px] py-3 lg:py-0  flex items-center justify-center text-center  '>   

        <div className='container '>
  <Heading className='font-sans '>About Us</Heading>
 <p className='font-[400] text-[20px] leading-[26px] lg:py-7 py-4 tracking-wide   lg:w-3/4 w-full  mx-auto text-[#6B6B6B] font-sans'>TradCouples Matchmaking Services stands at the forefront of sophisticated matchmaking, where accomplished individuals can make exceptional connections. Here you can find women of your choice by sharing your thoughts and opinions
 </p>  

 <p className='text-[#999999] text-[16px] font-[400] font-sans'>You deserve nothing less than extraordinary – find someone born for you.</p>
        </div> 

        </div>
    );
};

export default AboutUs;