import React from 'react';  
import { Montserrat } from 'next/font/google'; 

const montserrat = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const Navbar = () => {
    return (
        <div className='bg-[#FEFEFE]  w-full h-[85px] '>
            <div className=' p-5 container ps-0 '>
                
                <div className={`flex flex-col lg:items-start items-center lg:justify-start justify-center  ${montserrat.className}  `}>
                    <p className=' font-[500] text-[#222222]  text-[24px] leading-none tracking-wider'>TradCouples</p>
                    <p className=' text-[13px] leading-none text-[#222222] font-sans tracking-wider '>Matchmaking Services</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;