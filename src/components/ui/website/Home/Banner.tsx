import React from 'react'; 
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
import Link from 'next/link';
import SmallButton from '@/components/shared/SmallButton';  
import { Inter } from 'next/font/google'
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const Banner = () => { 

    return (
        <div 
            className="relative h-[100vh]  w-full"
            style={{ 
                width:"100%" ,
                backgroundImage: `url('/Banner.jpg')`, 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>  

            <div className=' text-end lg:pt-[32px] pt-2 pe-2 lg:pe-[150px]'> 
                <Link href="/login"> 
                <button className='text-primary font-semibold px-5 py-2  text-[16px] tracking-wider rounded-lg border-2 border-primary hover:bg-primary  hover:text-white'>Login</button>
                </Link>
            </div>
  

            <div className="container relative z-10 flex flex-col lg:items-start  gap-0 justify-center h-full text-center text-white -mt-20">
             
                <h1 className={`flex lg:text-[45px] text-[29px] font-[500] lg:tracking-[0.5em] tracking-[0.3em] uppercase ${inter.className}`}>
                    TradCouples <><AiOutlineTrademarkCircle size={18}  className='mt-3'/></>
                </h1>
                
        
                <p className={`my-1 lg:text-[24px] text-[18px] font-[400] ${inter.className} tracking-wide text-start lg:w-[400px] ` }>
                    Connecting Singles Who Cherish  Traditional Family Roles
                </p> 

                <Link href="/login" >
                    <SmallButton className={`flex gap-1 items-center  lg:h-[65px] h-[50px]  ${inter.className}`}>
                        <span>Start your journey</span>
                        <span><MdOutlineKeyboardArrowRight size={22} /></span>
                    </SmallButton> 
                </Link>
            </div>
        </div>
    );
};

export default Banner;
