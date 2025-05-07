/* eslint-disable @next/next/no-img-element */
import React from 'react'
import img3 from "@/assets/couple.jpg"
import img4 from "@/assets/blah.jpg"
import Image from 'next/image';
import Heading from '@/components/shared/Heading';
import { Inter } from 'next/font/google'
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });


const Cards = () => {
  return (
    <div className={`${inter.className}`}>
      {/* 1st section   */}
      <div className="bg-gray-100">
    
            <div className=' container grid grid-cols-12  items-center gap-4 lg:py-20 py-10  '>

                <div className=' lg:col-span-6 col-span-12 justify-self-center lg:w-[75%] w-[100%] mb-3 lg:mb-0  lg:-order-1 -order-1 lg:text-start text-center '>
                    <Heading className='py-5 font-bold text-[22px] ' > Welcome to Trad Couples </Heading>

                    <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px]  '>Trad Couples is the premier matchmaking platform for singles who embrace the timeless beauty of traditional family roles. In a world where values often shift, we offer a space where you can find like-minded individuals who appreciate respect, commitment, and the art of building lasting relationships. Whether you seek a partner who shares your vision of a traditional home or want to connect with someone who honors the roles that create harmony in family life, Trad Couples is where your journey to genuine connection begins.</p>
                </div>

                <div className=' lg:col-span-6 col-span-12 justify-self-center'>
                    <img src="/couples.png" alt='' height={600} width={600}  className=' ' />
                </div>


            </div>
 </div>

 <div className=' '>

            {/* 2nd  section   */}
            <div className=' container grid grid-cols-12 flex-col-reverse items-center lg:py-32 py-12 w-full gap-4'>

                <div className='lg:col-span-6 col-span-12 lg:-order-1 -order-1 justify-self-center'>
                    <Image src={img3} alt='' height={500} width={550} />
                </div>

                <div className=' lg:col-span-6 col-span-12 justify-self-center lg:w-[75%] w-[100%] mb-3 lg:mb-0 lg:text-start text-center'>
                    <Heading className='py-5 font-bold  text-[16px]'>Where Tradition Meets Connection
                    </Heading>
                    <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px] '>Our community is dedicated to those who believe in the value of complementary roles within relationships—where men take pride in providing, and women excel in nurturing the home. We cater to singles who wish to create a solid foundation for their future, grounded in shared values and mutual respect. At Trad Couples, you&apos;ll meet others who understand the strength found in traditional dynamics, and who are ready to build a meaningful, lasting partnership.</p>
                </div>
            </div>



            {/* 3rd section   */}
            <div className=' container grid grid-cols-12  items-center lg:pb-32 pb-14 gap-4  '>

                <div className=' lg:col-span-6 col-span-12 justify-self-center lg:w-[75%] w-[100%] mb-3 lg:mb-0  lg:-order-1 order-1 lg:text-start text-center '>
                    <Heading className=' text-[22px] py-5 font-bold '>Your Safety, Our Priority
                    </Heading>
                    <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px]  '>We understand the importance of a safe and respectful environment when seeking a serious relationship. Trad Couples takes your privacy and security seriously, with stringent verification measures to ensure a trustworthy community. Our commitment is to protect your experience so that you can focus on what truly matters—finding someone who shares your values and dreams.</p>
                </div>

                <div className='lg:col-span-6 col-span-12  justify-self-center'>
                    <Image src={img4} alt='' height={500} width={550} />


                </div>


            </div>

            {/* 4th section   */}
            <div className='   '> 
                <div className=' container   grid grid-cols-12 items-center lg:pb-32 pb-14 gap-4 lg:text-start text-center'>

                <div className='lg:col-span-6 col-span-12  lg:-order-1 -order-1 justify-self-center'>
                    <img src="/macbook.png" alt=''  className='w-full '   />
                </div>

                <div className='lg:col-span-6 col-span-12  justify-self-center  lg:w-[75%] w-[100%]  lg:mb-0 mb-3  '>
                    <Heading className=' text-[22px] py-5 font-bold '>Find Your Perfect Match
                    </Heading>
                    <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px] '>Discover the joy of meeting a partner who cherishes tradition as much as you do. At Trad Couples, we celebrate relationships that honor time-tested roles, creating a strong family and a brighter future together. Start your journey today and connect with singles who value the qualities that make love and family life truly fulfilling.</p>
                </div>
                </div>

            </div>
 </div>
        </div>
   
  );
};

export default Cards;
