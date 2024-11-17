import React from 'react';
import SmallButton from '@/components/shared/SmallButton';
import "./style.css"  
import { Inter } from 'next/font/google'
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const LadingBanner = ({scrollToFourthSection}:any) => {
    return (
        <div
            className="relative  background-container  w-full ">


<h1 className={`flex lg:text-[25px] text-[25px] font-[500] lg:tracking-[0.5em] tracking-[0.3em] uppercase ${inter.className} container text-white  pt-20`}>
                    TradCouples <><AiOutlineTrademarkCircle size={18}  className='mt-3'/></>
                </h1> 


            <div className="container  z-10 flex flex-col  gap-0 items-start  text-white  pt-3 h-full ">



                <p className={`mt-24 px-0  lg:text-[20px] text-[16px] font-[400] ${inter.className} tracking-wide lg:text-start lg:w-[600px] text-white `}>
                    Welcome to the online matchmaking site for traditional, conservative couples.
                </p> 



                <div  className=' mt-36 ' onClick={scrollToFourthSection} >
                    <SmallButton className={`  lg:h-[60px] h-full   ${inter.className}`}>
                        Subscribe Now for Exclusive Early Access

                    </SmallButton>
                </div>

                <p className=' text-white absolute bottom-10 lg:w-[550px]  lg:text-[22px] text-[14px] leading-[24px]  pb-20 ps-2 font-bold '>FAITH. FAMILY. FREEDOM.</p> 
                


            </div>


        </div>
    );
};

export default LadingBanner;