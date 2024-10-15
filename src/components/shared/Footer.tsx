import { Button } from 'antd';
import Image from 'next/image'; 
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/insta.png";
import twitter from "@/assets/twiter.png";
import youtube  from "@/assets/youtube.png"; 
import logo from "@/assets/logoIcon.png";
import Link from 'next/link';
import React from 'react';

const Footer = () => { 
    const item = [
        {
            label: "Blogs",
            path: "/blogs"
        },
        {
            label: "Support",
            path: "/support"
        },
        {
            label: "Safety Policy",
            path: "/safety-policy"
        },
        {
            label: "Cookie Policy",
            path: "/cookie-policy-web"
        },
        {
            label: "Privacy",
            path: "/privacy"
        },
        {
            label: "Terms",
            path: "/terms"
        },
    ]

 
    return (
        <div 
        className='bg-[#222222]'
      
        
    >
        <div className='container grid grid-cols-12  items-center justify-between h-[165px]'>
          
            <div className='col-span-4 justify-self-start '>
                <div className='flex flex-col    '>
                    <p className=' font-[500] text-[#EEEEEE]  text-[23px] leading-none tracking-wider'>TradCouples</p>
                    <p className=' text-[13px] leading-none text-[#EEEEEE] font-sans tracking-wider '>Matchmaking Services</p>
                </div>
           
            </div>


   

            <div className='col-span-8 justify-self-end '>  

                <div className=' flex  gap-8 items-center'>

            <div className='flex  gap-10 '>
                {
                    item.map((menu, index) => {
                        return(
                            <Link 
                                key={index} 
                                className={`text-white  `} 
                                href={`${menu.path}`}
                            >
                                {menu.label}
                            </Link>
                        )
                    })
                }

                </div> 
 <p className='border-r-2 border-white h-10'></p>
            
                <div className='flex items-center gap-6 '>
                    <a href="https://www.facebook.com/" target='_blank'>
                        <Image
                            alt='social-link'
                            src={facebook}
                            width={30}
                            height={30}
                        />
                    </a>

                    <a href='https://www.instagram.com/' target='_blank'>
                        <Image
                            alt='social-link'
                            src={instagram}
                            width={30}
                            height={30}
                        />
                    </a>

                    <a href='https://www.linkedin.com/' target='_blank'>
                        <Image
                            alt='social-link'
                            src={youtube}
                            width={30}
                            height={30}
                            />
                        </a>

                    <a href='https://www.twitter.com/' target='_blank'>
                        <Image
                            alt='social-link'
                            src={twitter}
                            width={30}
                            height={30}
                        />
                    </a>
                </div> 
                </div>


            </div>
        </div>

        <div className='bg-[#6B6B6B] py-3'>
            <p className='text-center text-[#ffffff]'>© Copyright UX/UI 2204 Team Md. Asadujjaman Mahfuz</p>
        </div>
    </div>
    );
};

export default Footer;