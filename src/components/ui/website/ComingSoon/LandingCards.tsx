/* eslint-disable @next/next/no-img-element */
import React from 'react'
import img3 from "@/assets/couple.jpg"
import img4 from "@/assets/blah.jpg"
import Image from 'next/image';
import Heading from '@/components/shared/Heading';
import { Inter } from 'next/font/google'
import Link from 'next/link';
import SmallButton from '@/components/shared/SmallButton';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { GoDot } from 'react-icons/go';
import { Checkbox, Form } from 'antd';
import TextInput from '@/components/shared/TextInput';
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const LandingCards = () => {
    return (
        <div className={`${inter.className}`}>
        {/* 1st section   */}
        <div className="bg-gray-100">
      
              <div className=' container grid grid-cols-12  items-center gap-4 lg:pt-24 pt-10  '>
  
                  <div className=' lg:col-span-6 col-span-12 justify-self-center lg:w-[80%] w-[100%] mb-3 lg:mb-0  lg:-order-1 -order-1 lg:text-start text-center '>
                      <Heading className='py-5 font-bold text-[22px] ' > The Matchmaking Platform for Traditional Values </Heading>
  
                      <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px]  '>Trad Couples is designed for those who seek a husband or wife with old-fashioned, time-tested values, without the influence of modern trends. Our precision matching system, based on conservative, traditional values, brings together like-minded singles who want genuine commitment</p> 

                      <Link href="/home" className='flex gap-1 items-center justify-center lg:justify-start' >
                    <SmallButton className={`mt-6 flex gap-1 items-center justify-center  lg:h-[65px] h-[50px]  ${inter.className}`}>
                        <span>Join the Waitlist Today</span>
                        <span><MdOutlineKeyboardArrowRight size={22} /></span>
                    </SmallButton> 
                </Link> 

                  </div>
  
                  <div className=' lg:col-span-6 col-span-12 justify-self-center'>
                      <img src="/welcome.png" alt='' height={500} width={500} style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"  }} className='rounded-t-[50px] ' />
                  </div>
  
  
              </div>
   </div>
  
   <div className=' '>
  
              {/* 2nd  section   */}
              <div className=' container grid grid-cols-12 flex-col-reverse items-center lg:py-32 py-12 w-full gap-4'>
  
                  <div className='lg:col-span-6 col-span-12 lg:-order-1 -order-1 justify-self-center'>
                      <Image src={img3} alt='' height={500} width={550} />
                  </div>
  
                  <div className=' lg:col-span-6 col-span-12 justify-self-center  w-[100%] mb-3 lg:mb-0 lg:text-start text-center'>
                      <Heading className='py-5 font-bold  text-[16px] lg:w-[75%]'>Say Goodbye to Endless Swiping
                      </Heading>
                      <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px] lg:w-[75%]'>No more endless swiping through thousands of profiles. Find individual matches by completing brief, and to the point questions about yourself and what you would like in a partner.</p> 
                      <div> 

                      <div className='text-[#6B6B6B] flex   gap-[2px] text-[16px] pt-3 font-[400]' > 
                         <span> <GoDot  size={20} className='pt-1' /> </span>  
                            <p>
                          <span className='font-semibold'>Guided Communication Channels: </span> <span>Make every conversation purposeful and aligned with your values.
                          </span> 
                            </p>
                           
                         </div>

                      <div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[15px] py-2 font-[400]'> <p> <GoDot  size={18} />  </p>  <p className='font-semibold'>High-Standards Matching: </p> <p>We focus on quality matches with conservative values.
                      </p> </div> 

                      </div>
                  </div>
              </div>
  
  
  
              {/* 3rd section   */}
              <div className=' container grid grid-cols-12  items-center lg:pb-32 pb-14 gap-4  '>
  
                  <div className=' lg:col-span-6 col-span-12 justify-self-center lg:w-[75%] w-[100%] mb-3 lg:mb-0  lg:-order-1 order-1 lg:text-start text-center '>
                      <Heading className=' text-[22px] py-5 font-bold '>Find Your Match – Free 1-Month Subscription for Early Access!
                      </Heading>
                      <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px] mb-4  '>Our site officially launches in December. Subscribe now to receive a free or discounted profile and secure your place among the first members.</p> 

                      <div> 
                      <Form  layout="vertical" className=' w-full'>
          <TextInput name='email' label='Email' placeholder="Full Name" />
          <TextInput name='email' label='Email' placeholder="Email Address" />
          <TextInput name='email' label='Email' placeholder="Country" />

          <div className=' flex items-center justify-between mb-[10px]' > 
          <Checkbox ><span className='lg:text-[18px] text-[14px] ' style={{
                color: "#6A6D7C",
                fontWeight: 400,
               
                marginBottom: "10px",
              }}> I agree with </span> <Link href="/terms" className='text-[#54A7C3]'>Terms & Condition</Link> and <Link href="/privacy" className='text-[#54A7C3]'>Privacy Policy</Link></Checkbox>
          </div> 

          <Link href="/home" className=' ' >
                <SmallButton className={`mt-5  lg:h-[60px] h-[50px]  ${inter.className}`}>
                Claim Your Free Month
                   
                </SmallButton> 
            </Link>  

            <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px] mt-4  '>Your privacy is our priority. We’ll keep your information secure and private.Standard subscription fees will start from $20 per month after launch.</p> 

        </Form>
                      </div>
                  </div>
  
                  <div className='lg:col-span-6 col-span-12  justify-self-center'>
                      <Image src="/landing.jpg" alt='' height={500} width={550} />
  
  
                  </div>
  
  
              </div>
  
              {/* 4th section   */}
              <div className='   '> 
                  <div className=' container   grid grid-cols-12 items-center lg:pb-32 pb-14 gap-4 lg:text-start text-center'>
  
                  <div className='lg:col-span-6 col-span-12  lg:-order-1 -order-1 justify-self-center'>
                  <Image src={img4} alt='' height={500} width={550} />
                  </div>
  
                  <div className='lg:col-span-6 col-span-12  justify-self-center  lg:w-[75%] w-[100%]  lg:mb-0 mb-3  '>
                  <Heading className=' text-[22px] py-5 font-bold '>Find a Partner Who Shares Your Values
                      </Heading>
                      <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px]  '>Trad Couples brings together individuals who believe in conservative values, commitment, and clear relationship roles. If you’re marriage-minded and seek a lasting connection grounded in traditional principles, this is the platform for you.</p>  


                  </div>
                  </div>
  
              </div>   



              {/* 4th section   */}
              <div className='   '> 
                  <div className=' container   grid grid-cols-12 items-center lg:pb-32 pb-14 gap-4 lg:text-start text-center'>
  
                  <div className='lg:col-span-6 col-span-12  lg:order-1 -order-1 justify-self-center'>
                  <Image src={img4} alt='' height={500} width={550} />
                  </div>
  
                  <div className='lg:col-span-6 col-span-12  justify-self-center  lg:w-[85%] w-[100%]  lg:mb-0 mb-3  '>
                  <Heading className=' text-[22px] py-5 font-bold '>Value Statements
                      </Heading>
                   

                       <div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[18px] pt-3 font-[500]'> <p> <GoDot  size={18} /> </p> <p>Where men are men, and women are women.

</p> </div> 

<div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[18px] pt-3 font-[500]'> <p> <GoDot  size={18} /> </p> <p>High standards, conservative values, and age-old traditions.

</p> </div> 

<div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[18px] pt-3 font-[500]'> <p> <GoDot  size={18} /> </p> <p>A community for those who seek serious relationships.

</p> </div> 

<div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[18px] pt-3 font-[500]'> <p> <GoDot  size={18} /> </p> <p>Restoring the nuclear family


</p> </div>
<div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[18px] pt-3 font-[500]'> <p> <GoDot  size={18} /> </p> <p>Cherishing tradition


</p> </div>
<div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[18px] pt-3 font-[500]'> <p> <GoDot  size={18} /> </p> <p>Defying modernism.

</p> </div>
<div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[18px] pt-3 font-[500]'> <p> <GoDot  size={18} /> </p> <p>Embracing Christian Values.
</p> </div>
<div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[18px] pt-3 font-[500]'> <p> <GoDot  size={18} /> </p> <p>FAITH. FAMILY. FREEDOM.


</p> </div>
                  </div>
                  </div>
  
              </div>  



              {/* 5th section   */}
              <div className='   '> 
                  <div className=' container   grid grid-cols-12 items-center lg:pb-32 pb-14 gap-4 lg:text-start text-center'>
  
                  <div className='lg:col-span-6 col-span-12  lg:-order-1 -order-1 justify-self-center'>
                  <Image src={img4} alt='' height={500} width={550} />
                  </div>
  
                  <div className='lg:col-span-6 col-span-12  justify-self-center  lg:w-[75%] w-[100%]  lg:mb-0 mb-3  '>
                  <Heading className=' text-[22px] py-5 font-bold '>Your Safety, Our Priority
                      </Heading>
                      <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px]  '>At Trad Couples, we prioritize a safe and respectful environment. Our verification measures ensure a trustworthy community so you can focus on finding someone who shares your values and dreams.</p>  

                      <div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[15px] pt-3 font-[400]'> <p> <GoDot  size={18} /> </p> <p>Verified profiles

                      </p> </div> 

                      <div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[15px] py-2 font-[400]'> <p> <GoDot  size={18} /> </p> <p>Safe and respectful community standards

                      </p> </div>
                      <div className='text-[#6B6B6B] flex items-center  gap-[2px] text-[15px] font-[400]'> <p> <GoDot  size={18} /> </p> <p>Commitment to privacy and security

                      </p> </div>

                  </div>
                  </div>
  
              </div> 

                     {/* 6th section   */}
                     <div className=' container grid grid-cols-12  items-center lg:pb-32 pb-14 gap-4  '>
  
  <div className=' lg:col-span-6 col-span-12 justify-self-center lg:w-[75%] w-[100%] mb-3 lg:mb-0  lg:-order-1 order-1 lg:text-start text-center '>
      <Heading className=' text-[22px] py-5 font-bold '>Join Today for Free or Discounted Access!
      </Heading>
      <p className=' text-[#6B6B6B] font-[400] lg:text-[18px] text-[14px] leading-[24px] mb-4  '>Subscribe now to receive a free or discounted profile and secure your place among the first members.</p> 

      <div> 
      <Form  layout="vertical" className=' w-full'>
<TextInput name='email' label='Email' placeholder="Full Name" />
<TextInput name='email' label='Email' placeholder="Email Address" />

<div className=' flex items-center justify-between mb-[10px]' > 
<Checkbox ><span className='lg:text-[18px] text-[14px] ' style={{
color: "#6A6D7C",
fontWeight: 400,

marginBottom: "10px",
}}> I agree with </span> <Link href="/terms" className='text-[#54A7C3]'>Terms & Condition</Link> and <Link href="/privacy" className='text-[#54A7C3]'>Privacy Policy</Link></Checkbox>
</div> 

<Link href="/home" className=' ' >
<SmallButton className={`mt-5  lg:h-[60px] h-[50px]  ${inter.className}`}>
Subscribe Now
   
</SmallButton> 
</Link>  


</Form>
      </div>
  </div>

  <div className='lg:col-span-6 col-span-12  justify-self-center'>
      <Image src="/landing.jpg" alt='' height={500} width={550} />


  </div>


</div> 



   </div>
          </div>
    );
};

export default LandingCards;