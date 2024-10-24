
import Link from 'next/link';
import React from 'react';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs'; 
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] }); 

const Footer = () => {
    const item = [
        {
            label: "Press",
            path: "/"
        },
        {
            label: "Affiliate Program",
            path: "/"
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
            path: "/"
        },
    ]


    return (
        <div
            className='bg-[#222222]'        >

            <div className='lg:h-[185px] h-full lg:py-3 py-5 container flex flex-col lg:items-start items-center justify-center gap-5 '>
                <div className='flex flex-col    '>
                    <p className={` font-[500] text-[#EEEEEE]  text-[23px] leading-none tracking-wider ${montserrat.className}`}>TradCouples</p>
                    <p className=' text-[13px] leading-none text-[#EEEEEE] font-sans tracking-wider '>Matchmaking Services</p>
                </div>

                <div className=' grid grid-cols-12 justify-items-stretch gap-8   '>


                    <div className='lg:col-span-9 col-span-12  '>
                        <div className='flex flex-wrap items-center lg:items-start justify-center  lg:gap-10 gap-3 '>
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

                    <div className='lg:col-span-3 col-span-12 lg:justify-self-end justify-self-center '>
                        <div className='flex items-center gap-6  '>
                            <a href="https://www.facebook.com/" target='_blank'>
                                <p className='text-white '><RiFacebookCircleLine size={34} /></p>
                            </a>

                            <a href='https://www.instagram.com/' target='_blank'>
                                <p className='text-white '> <FiInstagram
                                    size={30} /></p>
                            </a>

                            <a href='https://www.linkedin.com/' target='_blank'>
                                <p className='text-white '><AiOutlineYoutube size={34} /></p>
                            </a>

                            <a href='https://www.twitter.com/' target='_blank'>
                                <p className='text-white '><BsTwitterX size={27} /></p>
                            </a>
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