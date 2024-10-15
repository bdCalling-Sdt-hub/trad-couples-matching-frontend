import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { IoIosHeartEmpty } from 'react-icons/io';

const WithLoginNavbar = () => { 
    const items = [
        {
            name: "Home",
            path: "/peoples"
        },
        {
            name: "About Us",
            path: "/about"
        },
        {
            name: "Blogs",
            path: "/blogs"
        },
        {
            name: "Subscription",
            path: "/subscriptions"
        }
    ];

    const Icons = [
        {
            icon: <div className='w-9 h-9 rounded-full bg-white text-secondary flex justify-center items-center'><CiSearch size={22} /></div>,
            path: "/search"
        },
        {
            icon: <div className='w-9 h-9 rounded-full bg-white text-secondary flex justify-center items-center'><AiOutlineMessage size={22} /></div>,
            path: "/massage"
        },
        {
            icon: <div className='w-9 h-9 rounded-full bg-white text-secondary flex justify-center items-center'><IoIosHeartEmpty size={22} /></div>,
            path: "/wish-list"
        },
        {
            icon: <Image src="/person.png" height={40} width={40} alt='' className='rounded-full' />,
            path: "/profile"
        }
    ];

    return (
        <div>
            <div className='bg-[#EEEEEE] w-full h-[85px] fixed z-50 top-0  flex items-center justify-center'>
                <div className='container flex items-center justify-between'>

                    <div className='flex flex-col'>
                        <p className='font-[540] text-[#222222] text-[24px] leading-none tracking-wider'>TradCouples</p>
                        <p className='text-[13px] leading-none text-[#222222] font-sans tracking-wider'>Matchmaking Services</p>
                    </div>

                    <div className='flex gap-8 items-center text-[#6B6B6B] tracking-wider font-medium'>
                        {items.map((value: any, index: number) => (
                            <Link key={index} href={value.path}>
                                <span>{value.name}</span>
                            </Link>
                        ))}
                    </div>

                    <div className='flex gap-4 items-center'>
                        {Icons.map((value: any, index: number) => (
                            <Link key={index} href={value.path}>
                                <div>{value.icon}</div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WithLoginNavbar;
