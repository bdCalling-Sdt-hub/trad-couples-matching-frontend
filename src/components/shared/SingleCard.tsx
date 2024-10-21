/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { GoHeart } from 'react-icons/go';
import { IoIosHeartEmpty } from 'react-icons/io';


const SingleCard = ({value}:any) => { 
    const router = useRouter() 
    const handleDetails =(id:any) =>{
        router.push(`/details/${id}`)
    }
    return (
        <div  className='font-sans group' onClick={()=>handleDetails(value?.id)} >
    <div className='relative  '> 

        <div className='  overflow-hidden rounded-lg z-0 hover:z-20 '> 
        <Image src={value?.image} alt=' ' height={300} width={350} className='rounded-lg transition  delay-200  scale-100  hover:scale-110  duration-300 ' /> 
        </div>

        <p className='group-hover:hidden group-hover:delay-700  absolute top-1 right-1 h-10 w-10 rounded-full flex justify-center items-center bg-white/70 z-0'> <span className='text-[#FF7C70]'> <GoHeart size={22} /></span></p>  

        <p className='text-black py-2 pb-0 font-medium  text-xl '>{value?.name}</p>   

        <div className=' flex lg:flex flex-wrap justify-between items-center gap-3'> 
            <div className='flex items-center gap-1'>
        <p className=' text-[#999999] text-[14px]'>{value?.age},</p>  
        <p className=' text-[#999999] text-[14px] truncate'> {value?.address}</p> 
            </div> 
            <div className=' flex gap-1'>  

                <Link href="/chat">          
            <p className='w-9 h-9 rounded-full bg-[#EEEEEE] text-secondary flex justify-center items-center'><AiOutlineMessage size={22} /></p> 
                </Link>

            <p className='w-9 h-9 rounded-full bg-[#EEEEEE] text-[#FF7C70] flex justify-center items-center'><IoIosHeartEmpty size={22} /></p>

            </div>
        </div>
    </div>
                    </div>
    );
};

export default SingleCard;