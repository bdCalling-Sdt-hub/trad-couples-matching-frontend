/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import img3 from "@/assets/couple.jpg"
import img4 from "@/assets/blah.jpg"
import Image from 'next/image';
import Heading from '@/components/shared/Heading';
import { Inter } from 'next/font/google'
import Link from 'next/link';
import SmallButton from '@/components/shared/SmallButton';
// import { MdOutlineKeyboardArrowRight } from 'react-icons/md'; 
import { GoDot, GoDotFill } from 'react-icons/go';
import { Checkbox, Form, message } from 'antd';
import TextInput from '@/components/shared/TextInput';
import { useCreateSubscriberMutation } from '@/redux/features/subscriber/subscriberSlice';
import { useRouter } from 'next/navigation';
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });



const LandingCards = ({ fourthSectionRef}:any) => {  
 const [createSubscriber] =  useCreateSubscriberMutation() 
 const router = useRouter()
    const onFinish = async(values: any) => {       
        await createSubscriber(values).then((res) => { 
            if(res?.data?.success){
                message.success(res?.data?.message) 
                router.push("/home")
            }
        })
     };

    return (
        <div className={`${inter.className}`}> 
        

                {/* 1st  section   */}
                <div className=' container grid grid-cols-12 flex-col-reverse items-center  lg:py-32 py-12 w-full gap-4'>

                    <div className='lg:col-span-6 col-span-12 lg:order-1 order-1 justify-self-center'>
                        <Image src="/couples.png" alt='' height={700} width={650} />  
                    </div>

                    <div className=' lg:col-span-6 col-span-12 justify-self-center  lg:w-[75%] w-[100%] mb-3 lg:mb-0  '>
                        <div className='justify-self-center '>
                        <p className=' text-black   lg:text-[20px] text-[18px] leading-[30px] py-5 font-bold  lg:text-start text-center  '>TradCouples – the new premier matchmaking platform for conservatives</p>
                            <div className='text-[#6B6B6B] flex   gap-[2px] lg:text-[16px] text-[14px]  pt-3 font-semibold' >
                                <span> <GoDotFill size={20} className='pt-1' /> </span>
                                <p>
                                     <span>No more endless swiping through thousands of profiles
                                    </span>
                                </p>

                            </div>

                            <div className='text-[#6B6B6B] flex   gap-[2px] lg:text-[16px] text-[14px] py-2 font-semibold'> <span> <GoDotFill size={20} className='pt-1' /> </span>
                                <p>
                                    <span>Find matches by completing brief questions about yourself and what you would like in a partner.  </span>
                                </p>
                            </div> 

                            <div className='text-[#6B6B6B] flex   gap-[2px] lg:text-[16px] text-[14px] py-2 font-semibold'> <span> <GoDotFill size={20} className='pt-1' fill='#6B6B6B' /> </span>
                                <p>
                                    <span> Our specialised, patented system will connect you with the right people.  </span>
                                </p>
                            </div> 

                            <div className='text-[#6B6B6B] flex   gap-[2px] lg:text-[16px] text-[14px] py-2 font-semibold'> <span> <GoDotFill size={20} className='pt-1' /> </span>
                                <p>
                                    <span>Clear, concise and safe communication channels.  </span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>


                {/* 2nd section   */}
                    <div className=' container   grid grid-cols-12 items-center lg:pb-32 pb-12 gap-4 '>

                        <div className='lg:col-span-6 col-span-12  lg:-order-1 -order-1 justify-self-center'>
                            <Image src={img4} alt='' height={700} width={650} />
                        </div>

                        <div className='lg:col-span-6 col-span-12  lg:justify-self-center  lg:w-[85%] w-[100%]  lg:mb-0 mb-3   '>

                            <div className='text-[#6B6B6B] flex text-start items-center lg:text-[20px] text-[14px] pt-3 font-semibold'>
                                <span><GoDotFill size={20} className='' /></span>
                                <span>Cherishing tradition</span>
                            </div>

                            <div className='text-[#6B6B6B] flex text-start items-center lg:text-[20px] text-[14px] pt-3 font-semibold'>
                                <span><GoDotFill size={20} className='' /></span>
                                <span>Embracing Christian values.</span>
                            </div>

                            <div className='text-[#6B6B6B] flex text-start items-center lg:text-[20px] text-[14px] pt-3 font-semibold'>
                                <span><GoDotFill  size={20} className='' /></span>
                                <span>Restoring the nuclear family.</span>
                            </div>

                       

                        </div>
                    </div>


    {/* 3rd section   */}
        <div className=' container grid grid-cols-12  items-center lg:pb-32 pb-12 gap-4  ' ref={fourthSectionRef}>

    <div className=' lg:col-span-6 col-span-12 justify-self-center lg:w-[75%] w-[100%] mb-3 lg:mb-0  lg:-order-1 order-1 lg:text-start text-center '>
        <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px] mb-4  '>Our site officially launches in December. Subscribe now to receive a free or discounted profile and secure your place among the first members.</p>

        <div>
            <Form layout="vertical" className=' w-full' onFinish={onFinish}>
                <TextInput name='name' label='Email' placeholder="Full Name" />
                <TextInput name='email' label='Email' placeholder="Email Address" />
                <TextInput name='country' label='Email' placeholder="Country" />            
                    <SmallButton className={`mt-5  lg:h-[60px] h-[50px]  ${inter.className}`}>
                        Claim Your Free Month

                    </SmallButton>

                <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px] mt-4  '>Your privacy is our priority. We’ll keep your information secure and private.Standard subscription fees will start from $20 per month after launch.</p>

            </Form>
        </div>
    </div>

    <div className='lg:col-span-6 col-span-12  justify-self-center'>
        <Image src="/cross.svg" alt='' height={700} width={750} />


    </div>


    </div>

                {/* 4th section   */}
                    <div className=' container   grid grid-cols-12 items-center lg:pb-32 pb-12 gap-4 lg:text-start text-center'>

                        <div className='lg:col-span-6 col-span-12  lg:-order-1 -order-1 justify-self-center'>
                            <Image src="/safety.png" alt='' height={700} width={650} />
                        </div>

                        <div className='lg:col-span-6 col-span-12  justify-self-center  lg:w-[75%] w-[100%]  lg:mb-0 mb-3  '>
                            <p className=' text-[#6B6B6B] font-[600] lg:text-[23px] text-[18px] leading-[24px] pb-3 '>Your safety, our priority
                           </p> 

                            <p className=' text-[#6B6B6B] font-[500] lg:text-[17px] text-[14px] leading-[24px] ps-1 '>
                            At TradCouples, we prioritise a safe and respectful environment</p>

                            <div className='text-[#6B6B6B] flex text-start lg:text-[17px] text-[14px] pt-3 font-[500]'>
                                <span><GoDotFill size={20} className='pt-1' /></span>
                                <span>Verified profiles</span>
                            </div>

                            <div className='text-[#6B6B6B] flex text-start lg:text-[17px] text-[14px] pt-3 font-[500]'>
                                <span><GoDotFill size={20} className='pt-1' /></span>
                                <span>Safe and respectful community standards</span>
                            </div>

                            <div className='text-[#6B6B6B] flex text-start lg:text-[17px] text-[14px] pt-3 font-[500]'>
                                <span><GoDotFill size={20} className='pt-1' /></span>
                                <span>Commitment to privacy and security</span>
                            </div>


                        </div>
                    </div>


                {/* 5th section   */}
                <div className=' container grid grid-cols-12  items-center  gap-4  '>

                    <div className=' lg:col-span-6 col-span-12 justify-self-center lg:w-[75%] w-[100%] mb-3 lg:mb-0  lg:-order-1 order-1 lg:text-start text-center '>
                        <Heading className=' text-[22px] py-5 font-bold '>Join Today for Free or Discounted Access!
                        </Heading>
                        <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px] mb-4  '>Subscribe now to receive a free or discounted profile and secure your place among the first members.</p>

                        <div>
                            <Form layout="vertical" className=' w-full' onFinish={onFinish}>
                                <TextInput name='name' label='Email' placeholder="Full Name" />
                                <TextInput name='email' label='Email' placeholder="Email Address" />
                                    <SmallButton className={`mt-5  lg:h-[60px] h-[50px]  ${inter.className}`}>
                                        Subscribe Now

                                    </SmallButton>
                            
                            </Form>
                        </div> 
                        <p className="text-[#6B6B6B] font-[500] lg:text-[18px] text-[14px] leading-[24px] my-14 italic justify-self-start">
      Genesis 2:18 ‘Then the Lord God said, ‘It is not good that the man should be alone; I will make him a helper fit for him.’’.
    </p>
                    </div>

                    <div className='lg:col-span-6 col-span-12  justify-self-center lg:-mt-20'>
                        <Image src="/cross.svg" alt='' height={500} width={550} />


                    </div>

                   
                </div>
                <div className="w-1/2 flex items-center justify-center">

</div>
        </div>
    );
};

export default LandingCards;