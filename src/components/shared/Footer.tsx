
import Link from 'next/link';
import React from 'react';
import { Montserrat } from 'next/font/google';


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

            <div className=' lg:py-16 py-5 container flex flex-col lg:items-start items-center justify-center gap-5 '>
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

                    <div className='lg:col-span-4 col-span-12 lg:justify-self-end justify-items-center  '>
                    <p className='text-center text-gray-300 '>© All right reserved by TradeCouples
                    </p>
                    </div> 




                </div>
            </div>

        </div>
    );
};

export default Footer;