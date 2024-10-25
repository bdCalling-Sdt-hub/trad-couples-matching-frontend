/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';


const SingleCard = ({value}:any) => {  
    const router = useRouter() 
    const [isFavorite , setIsFavorite] = useState(false)  
    const [userId , setUserId]= useState<number|string>()

    
    const handleDetails =(id:any) =>{
        router.push(`/details/${id}`)
    }  

    const handleFavorite =(e: React.MouseEvent , id:number|string)=>{  
        e.stopPropagation();
        e.preventDefault();   
        setUserId(id)
        setIsFavorite(!isFavorite)
    }

    const handelChat = (e: React.MouseEvent) => { 
        e.stopPropagation();
        e.preventDefault();   
        router.push("/chat")
      };  

    return (
        <div  className='font-sans group cursor-pointer' onClick={()=>handleDetails(value?.id)} >
    <div className='relative  '> 

        <div className='  overflow-hidden rounded-lg z-0 hover:z-20 '> 
        <Image src={value?.image} alt=' ' height={300} width={350} className='rounded-lg transition  delay-200  scale-100  hover:scale-110  duration-300 ' /> 
        </div>

        <p className='text-black py-2 pb-0 font-medium  text-xl '>{value?.name}</p>   

        <div className=' flex lg:flex flex-wrap justify-between items-center gap-3'> 
            <div className='flex items-center gap-1'>
        <p className=' text-[#999999] text-[14px]'>{value?.age},</p>  
        <p className=' text-[#999999] text-[14px] truncate'> {value?.address}</p> 
            </div> 
            <div className=' flex gap-1'>  

            <p className='w-9 h-9 rounded-full bg-[#EEEEEE] text-[#FF7C70] flex justify-center items-center' onClick={(e)=>handleFavorite(e ,value?.id)}>  
                {
                    userId === value?.id ?
                    (
                    isFavorite ?  <IoIosHeart size={22} /> :<IoIosHeartEmpty size={22} />  ) :  <IoIosHeartEmpty size={22} />
                }
                
                </p> 

               
            <p  onClick={handelChat} className='w-9 h-9 rounded-full bg-[#EEEEEE] text-secondary flex justify-center items-center'><AiOutlineMessage size={22} /></p> 
            

            </div>
        </div>
    </div>
                    </div>
    );
};

export default SingleCard;