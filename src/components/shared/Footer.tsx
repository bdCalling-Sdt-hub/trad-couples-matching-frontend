
import Link from 'next/link';
import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image'; 
import facebook from "@/assets/facebook.svg" 
import instagram from "@/assets/instagram.svg" 
import youtube from "@/assets/youtube.svg" 
import twitter from "@/assets/twitter.svg"

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
        {
            label: "Site Map",
            path: "/site-map"
        },
    ]


    return (
        <div
            className='bg-[#222222]'        >

            <div className='lg:h-[199px] h-full lg:py-3 py-5 container flex flex-col lg:items-start items-center justify-center gap-5 '>
                <div className='flex flex-col  pb-4   '>
                    <p className={` font-[500] text-[#EEEEEE]  text-[23px] leading-none tracking-wider ${montserrat.className}`}>TradCouples</p>
                    <p className=' text-[13px] leading-none text-[#EEEEEE] font-sans tracking-wider '>Matchmaking Services</p>
                </div>

                <div className=' grid grid-cols-12  justify-items-stretch   '>


                    <div className='lg:col-span-10 col-span-12 w-full  '>
                        <div className='flex lg:flex flex-wrap   font-semibold  lg:gap-[16px] gap-3 '>
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

                    <div className='lg:col-span-1 col-span-12 lg:justify-self-end justify-items-center  '>
                        <div className='flex items-center gap-6 lg:justify-start justify-center  py-3 lg:py-0   '>
             
                            <Image src={facebook} alt="" height={24} width={24} style={{height:"auto" , width:"auto"}} /> 

                            <Image src={instagram} alt="" height={24} width={24} style={{height:"auto" , width:"auto"}} /> 

                            <Image src={youtube} alt="" height={24} width={24} style={{height:"auto" , width:"auto"}} /> 

                            <Image src={twitter} alt="" height={24} width={24} style={{height:"auto" , width:"auto"}} /> 
                        </div>
                    </div>




                </div>
            </div>


            <div className='bg-[#6B6B6B] py-3'>
                <p className='text-center text-[#ffffff]'>© All right reserved by TradeCouples
</p>
            </div>
        </div>
    );
};

export default Footer;