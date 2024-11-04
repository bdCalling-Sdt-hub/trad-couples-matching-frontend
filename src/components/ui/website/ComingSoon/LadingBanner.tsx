import React from 'react'; 
import Link from 'next/link';
import SmallButton from '@/components/shared/SmallButton';  
// import "./style.css"  
import { Inter } from 'next/font/google'
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const LadingBanner = () => {
    return (
        <div 
            className="relative lg:h-[calc(100vh+85px)] h-[100vh]  w-full"
            style={{ 
                width:"100%" ,
                backgroundImage: `url('/Banner.jpg')`, 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", 
               
            }}> 


   

        <div className="container relative z-10 flex flex-col  gap-0 justify-center items-start  text-white lg:-mt-20 pt-3 h-full ">
         
            <h1 className={`flex lg:text-[34px] lg:w-[700px] text-[25px] font-[500] uppercase ${inter.className}`}>
            Connecting Singles Who Cherish  Traditional Family Roles 
            </h1>
            
    
            <p className={`my-5 px-0  lg:text-[20px] text-[16px] font-[400] ${inter.className} tracking-wide lg:text-start lg:w-[460px] text-white ` }>
            Join now to find someone who shares your values and vision for family life
            </p> 

            <Link href="/home" className='' >
                <SmallButton className={`  lg:h-[60px] h-[50px]  ${inter.className}`}>
                Claim Your Free Month
                   
                </SmallButton> 
            </Link> 

            <p className={`my-3  lg:text-[20px] text-[16px] font-[400] ${inter.className} tracking-wide font-bold lg:text-start lg:w-[660px]  text-white  ` }>
            Our official launch is in December! Subscribe now to be among the first to create a free or discounted profile.
            </p>  

        </div> 

     
    </div>
    );
};

export default LadingBanner;