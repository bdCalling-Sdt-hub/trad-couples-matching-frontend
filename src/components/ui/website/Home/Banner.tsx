import React from 'react'; 
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
import Link from 'next/link';
import SmallButton from '@/components/shared/SmallButton';  
import "./style.css" 
import { Inter } from 'next/font/google'
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const Banner = () => { 

    return (
        <div 
            className="relative  background-container"
            >  

            <div className=' text-end lg:pt-[32px] pt-2 pe-2 lg:pe-[150px] hidden lg:block'> 
                <Link href="/login"> 
                <button className='text-primary font-semibold px-5 py-2  text-[16px] tracking-wider rounded-lg border-2 border-primary hover:bg-primary  hover:text-white'>Login</button>
                </Link>
            </div>
        

            <div className="container relative z-10 flex flex-col  gap-0 lg:justify-center items-center lg:items-start text-center text-white lg:-mt-20 pt-3 lg:bg-transparent bg-black lg:h-full h-32">
             
                <h1 className={`flex lg:text-[45px] text-[25px] font-[500] lg:tracking-[0.5em] tracking-[0.3em] uppercase ${inter.className}`}>
                    TradCouples <><AiOutlineTrademarkCircle size={18}  className='mt-3'/></>
                </h1>
                
        
                <p className={`my-1 lg:px-0 px-4 lg:text-[24px] text-[16px] font-[400] ${inter.className} tracking-wide lg:text-start lg:w-[400px] lg:text-white text-gray-300 ` }>
                    Connecting Singles Who Cherish  Traditional Family Roles
                </p> 

                <Link href="/login" className='lg:block hidden' >
                    <SmallButton className={`mt-6 flex gap-1 items-center  lg:h-[65px] h-[50px]  ${inter.className}`}>
                        <span>Start your journey</span>
                        <span><MdOutlineKeyboardArrowRight size={22} /></span>
                    </SmallButton> 
                </Link> 

                <p className='  text-white lg:block  absolute bottom-8 hidden   lg:text-[22px] text-[14px] leading-[24px]   ps-2 font-bold  '>FAITH. FAMILY. FREEDOM.</p> 

            </div>  

        

            <div className=' absolute bottom-16   lg:hidden flex flex-col  gap-1 w-full'> 
                <Link href="/login" className='w-full flex justify-center items-center' >
                    <SmallButton className={`flex gap-1 items-center justify-center   w-[80%] h-[45px] my-3  ${inter.className}`}>
                        <span>Start your journey</span>
                        <span><MdOutlineKeyboardArrowRight size={22} /></span>
                    </SmallButton> 
                </Link>  

                <Link href="/login" className='w-full flex justify-center items-center'> 
                <button className=' font-semibold  w-[80%] h-[45px]  text-[16px] tracking-wider rounded-lg border-2 border-[#fefefe]   text-[#fefefe]'>Login</button>
                </Link> 

            </div>
        </div>
    );
};

export default Banner;
