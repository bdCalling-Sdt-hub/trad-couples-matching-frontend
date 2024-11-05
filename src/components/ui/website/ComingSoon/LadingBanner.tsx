import React from 'react';
import SmallButton from '@/components/shared/SmallButton';
// import "./style.css"  
import { Inter } from 'next/font/google'
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const LadingBanner = ({scrollToFourthSection}:any) => {
    return (
        <div
            className="relative lg:h-[calc(100vh+85px)] h-[100vh]  w-full"
            style={{
                width: "100%",
                backgroundImage: `url('/Banner.jpg')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

            }}>


<h1 className={`flex lg:text-[25px] text-[25px] font-[500] lg:tracking-[0.5em] tracking-[0.3em] uppercase ${inter.className} container text-white pt-20`}>
                    TradCouples <><AiOutlineTrademarkCircle size={18}  className='mt-3'/></>
                </h1> 


            <div className="container  z-10 flex flex-col  gap-0 items-start  text-white  pt-3 h-full ">

                {/* <h1 className={`flex lg:text-[34px] lg:w-[700px] text-[25px] font-[500] uppercase ${inter.className}`}>
              
                </h1> */}


                <p className={`mt-24 px-0  lg:text-[20px] text-[16px] font-[400] ${inter.className} tracking-wide lg:text-start lg:w-[600px] text-white `}>
                    Welcome to the online matchmaking site for traditional, conservative couples.
                </p> 

                {/* <p className={`my-2 px-0  lg:text-[20px] text-[16px] font-[400] ${inter.className} tracking-wide lg:text-start lg:w-[600px] text-white `}>
           Marriage-minded individuals.
                </p> */}

                <div  className=' mt-36 ' onClick={scrollToFourthSection} >
                    <SmallButton className={`  lg:h-[60px] h-full   ${inter.className}`}>
                        Subscribe Now for Exclusive Early Access

                    </SmallButton>
                </div>

                <p className=' text-white absolute bottom-20 lg:w-[550px]  font-[400] lg:text-[18px] text-[14px] leading-[24px]  pb-20 '>Trad Couples is designed for those who seek a husband or wife with old-fashioned, time-tested values, without the influence of modern trends. Our precision matching system, based on conservative, traditional values, brings together like-minded singles who want genuine commitment</p>

            </div>


        </div>
    );
};

export default LadingBanner;