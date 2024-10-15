
import React from 'react'; 
import YellowButton from '../shared/SmallButton';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
import Link from 'next/link';

const Banner = () => {
    return (
            <div 
            className="relative h-[calc(100vh)] w-full"
            style={{ 
                width:"100%" ,
                backgroundImage: `url('/Banner.png')`, 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
          
    
                {/* Text Content */}
                <div className="container relative z-10 flex flex-col items-start justify-center h-full text-center text-white">
                    <h1 className="flex text-[40px] font-[500] tracking-[0.3em] uppercase"> TradCouples <><AiOutlineTrademarkCircle size={18}  className='mt-3'/></> </h1>
                  
                    <p className="my-4 text-[20px] tracking-widest">Connecting Singles Who Cherish Traditional Family Roles</p> 
                    <Link href="/login">
                 <YellowButton className='flex gap-1 items-center font-semibold ' > <span>Start Your Journey </span> <span><MdOutlineKeyboardArrowRight size={22} /></span>  </YellowButton> 
                 </Link>
                </div>
            </div>
    )
};

export default Banner;