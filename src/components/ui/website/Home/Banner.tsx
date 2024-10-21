import React from 'react'; 
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
import Link from 'next/link';
import SmallButton from '@/components/shared/SmallButton';  
import { Lora, Montserrat } from 'next/font/google'

const lora = Lora({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });
const montserrat = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const Banner = () => {
    return (
        <div 
            className="relative lg:h-[calc(100vh-89px)] h-[calc(80vh-89px)] w-full"
            style={{ 
                width:"100%" ,
                backgroundImage: `url('/Banner.svg')`, 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
  

            <div className="container relative z-10 flex flex-col lg:items-start items-center gap-3 justify-center h-full text-center text-white">
             
                <h1 className={`flex lg:text-[40px] text-[29px] font-[500] lg:tracking-[0.5em] tracking-[0.3em] uppercase ${montserrat.className}`}>
                    TradCouples <><AiOutlineTrademarkCircle size={18}  className='mt-3'/></>
                </h1>
                
        
                <p className={`my-4 text-[20px] font-[400] ${lora.className}`}>
                    Connecting Singles Who Cherish Traditional Family Roles
                </p> 

                <Link href="/login">
                    <SmallButton className='flex gap-1 items-center lg:h-[56px] h-[45px]'>
                        <span>Start Your Journey</span>
                        <span><MdOutlineKeyboardArrowRight size={22} /></span>
                    </SmallButton> 
                </Link>
            </div>
        </div>
    );
};

export default Banner;
