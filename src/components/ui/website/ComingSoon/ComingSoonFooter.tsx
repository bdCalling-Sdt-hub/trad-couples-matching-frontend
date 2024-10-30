import React from 'react'; 
import { Montserrat , Inter } from 'next/font/google';
import Link from 'next/link';
import SmallButton from '@/components/shared/SmallButton';
import { FaXTwitter } from 'react-icons/fa6';
import { PiInstagramLogoLight } from 'react-icons/pi';
import { FiFacebook } from 'react-icons/fi';


const montserrat = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] }); 
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] }); 

const ComingSoonFooter = () => {
    return (
        <div
            className='bg-[#0E0E0E] border-t border-gray-600'        >

            <div className=' lg:py-16 py-5 container  '>
              

                <div className=' flex lg:flex-row flex-col justify-between items-center  '>
                    <div className=' w-full  '> 
                    <div className='flex flex-col  mb-5  '>
                    <p className={` font-[500] text-[#EEEEEE]  text-[23px] leading-none tracking-wider ${montserrat.className}`}>TradCouples</p>
                    <p className=' text-[13px] leading-none text-[#EEEEEE] font-sans tracking-wider '>Matchmaking Services</p>
                </div> 

                    <p className=' text-[#6B6B6B] font-[400] lg:text-[20px] text-[14px] leading-[24px]  '>Launching Soon. Follow us on social media for updates.</p>    
<div className=' flex items-center gap-5 my-5'>

<div> <FiFacebook size={28} color='#EEEEEE' /> </div>
<div> <FaXTwitter  size={26} color='#EEEEEE' /> </div>
<div> <PiInstagramLogoLight size={28} color='#EEEEEE' /> </div>

</div>
                    <div>
 
                    </div>
                    </div>

                
                    <Link href="/login" className='' >
                <SmallButton className={` lg:h-[60px] h-[50px] w-[280px]  ${inter.className}`}>
                Sign Up for Early Access   
                </SmallButton> 
                   </Link> 


                </div>
            </div>

        </div>
    );
};

export default ComingSoonFooter;