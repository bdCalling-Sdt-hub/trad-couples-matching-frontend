"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GoHeart } from 'react-icons/go';
import { IoLocationSharp } from 'react-icons/io5';
import { MdCake } from 'react-icons/md';

const SingleCard = ({value}:any) => { 
    const router = useRouter() 
    const handleDetails =(id:any) =>{
        router.push(`/details/${id}`)
    }
    return (
        <div  className='relative' onClick={()=>handleDetails(value?.id)} >
    <div>
        <Image src={value?.image} alt=' ' height={500} width={360} className='rounded-lg' /> 
        <p className='absolute top-1 right-1 h-10 w-10 rounded-full flex justify-center items-center bg-white/70'> <span className='text-primary'> <GoHeart size={22} /></span></p>  

        <p className='text-black py-2 font-medium  text-xl p'>{value?.name}</p>   

        <div className=' flex justify-between items-center'>
        <p className='flex items-center gap-1 text-primary text-[14px]'> <span> <MdCake size={20} /> </span> <span> {value?.age} </span></p>  

        <p className='flex items-center gap-1 text-primary text-[14px] truncate'> <span> <IoLocationSharp size={22} /> </span> <span> {value?.address} </span></p> 
        </div>
    </div>
                    </div>
    );
};

export default SingleCard;