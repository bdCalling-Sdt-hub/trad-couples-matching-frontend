/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { Montserrat } from 'next/font/google'
import { useCreateFavoritesMutation } from '@/redux/features/favorite/favoriteSlice';
import { message } from 'antd';
import { useCreateInitialChatMutation } from '@/redux/features/chat/chatSlice';


const montserrat = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });


const SingleCard = ({ value , refetch }: any) => {
    const router = useRouter()
    const [userId, setUserId] = useState<number | string>(value?.id) 
    const [createFavorites] = useCreateFavoritesMutation() 
    const [createInitialChat] = useCreateInitialChatMutation()

    const handleDetails = (id: any) => {
        router.push(`/details/${id}`)
    }

    const handleFavorite = async(e: React.MouseEvent, id: number | string) => {
        e.stopPropagation();
        e.preventDefault();
        setUserId(id) 

        const data = {
            favoriteUserId : userId
        }
        console.log(data);
        await createFavorites(data).then((res)=>{
            console.log(res); 
            if(res?.data?.success){ 
                message.success(res?.data?.message)
                refetch()
            }
        })
    }

    const handelChat = async(e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault(); 
        await createInitialChat(userId).then((res) => { 
            console.log(res); 
            if(res?.data?.success){ 
                router.push("/chat")
            }
        })
       
    };

    return (
        <div className='font-sans group cursor-pointer w-full ' onClick={() => handleDetails(value?.id)} >
            <div className='relative  '>

                <div className='  overflow-hidden rounded-lg z-0 hover:z-20 '>
                    <Image src={value?.image} alt=' ' height={300} width={350} className='w-auto mx-auto  rounded-lg transition  delay-200  scale-100  hover:scale-110  duration-300 mb-3' />
                </div>



                <div className=' flex lg:flex  justify-between items-center lg:gap-3 gap-1 whitespace-nowrap'>
                    <div>
                        <p className={`text-black py-2 pb-2 font-medium  lg:text-xl  text-lg ${montserrat.className} `}>{value?.name}</p>

                        <div className={`flex items-center gap-1 ${montserrat.className}`}>
                            <p className=' text-[#999999] text-[14px]'>{value?.age},</p>
                            <p className=' text-[#999999] text-[14px] truncate'> {value?.address}</p>
                        </div>
                    </div>


                    <div className=' flex gap-1'>
                        <p className='lg:w-11 lg:h-11 w-10 h-10 rounded-full bg-[#EEEEEE] text-[#FF7C70] flex justify-center items-center hover:border hover:border-[#FF7C70] ' onClick={(e) => handleFavorite(e, value?.id)}>
                            {
                                userId === value?.id ?
                                    (
                                        value?.isFavorite ? <IoIosHeart size={24} /> : <IoIosHeartEmpty size={24} />) : <IoIosHeartEmpty size={24} />
                            }

                        </p>


                        <p onClick={handelChat} className='lg:w-11 lg:h-11 w-10 h-10 rounded-full bg-[#EEEEEE] text-secondary flex justify-center items-center hover:border hover:border-secondary'><AiOutlineMessage size={26} /></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;