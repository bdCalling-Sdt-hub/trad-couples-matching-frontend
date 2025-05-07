
import Link from 'next/link';
import React from 'react';
import { Montserrat } from 'next/font/google';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';


const montserrat = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] }); 

const Footer = () => {
    const item = [
        {
            label: "Press",
            path: "/press"
        },
        {
            label: "Affiliate Program",
            path: "/affiliate-program"
        },
        {
            label: "Support",
            path: "/support"
        },
        {
            label: "Blogs",
            path: "/blogs"
        },
        {
            label: "Terms",
            path: "/terms"
        },
        {
            label: "Privacy Policy",
            path: "/privacy"
        },
        {
            label: "Safety Tips",
            path: "/safety-policy"
        },
        {
            label: "Cookie Policy",
            path: "/cookie-policy-web"
        },

    ]


    return (
        <div
            className='bg-[#0E0E0E] border-t border-gray-600'        >

            <div className=' lg:pt-16 pb-7 pt-5 container flex flex-col lg:items-start items-center justify-center gap-5  '>
                <div className='flex flex-col    '>
                    <p className={` font-[500] text-[#EEEEEE]  text-[23px] leading-none tracking-wider ${montserrat.className}`}>TradCouples</p>
                    <p className=' text-[13px] leading-none text-[#EEEEEE] font-sans tracking-wider '>Matchmaking Services</p>
                </div>

                <div className=' grid grid-cols-12  justify-items-stretch  items-center   '>


                    <div className='lg:col-span-8 col-span-12 w-full  '>
                        <div className='flex lg:flex-row flex-col  lg:gap-[16px] gap-3 lg:mb-0 mb-4 '>
                            {
                                item.map((menu, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            className={`text-secondary  `}
                                            href={`${menu.path}`}
                                        >
                                            {menu.label}
                                        </Link>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div> 

            </div>

                <div className=' flex lg:flex-row flex-row-reverse lg:items-center justify-between w-full container pb-8 '> 
        
                    <div className='text-center text-gray-300 '>© All right reserved by TradeCouples
                    </div>
                   
                   <div className='flex gap-x-8'> 
                    <span><FaFacebookF size={20} color='#EEEEEE' /> </span> 
                    <span> <FaXTwitter size={20} color='#EEEEEE'/> </span> 
                    <span> <FaInstagram size={20}  color='#EEEEEE'/> </span> 
                   </div>

                </div>

        </div>
    );
};

export default Footer;