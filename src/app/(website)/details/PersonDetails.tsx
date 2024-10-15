"use client"
import AboutMe from '@/components/Details/AboutMe';
import MyChoice from '@/components/Details/MyChoice';
import { ConfigProvider, Form, Input, Tabs } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { LuHeart } from 'react-icons/lu';

const PersonDetails = () => { 
    const [isMessage , setIsMessage] = useState(false)  

    const items = [
        {
          key: '1',
          label: <p className='text-[15px] font-medium'> About Me</p>,
          children: <AboutMe />,
        },
        {
          key: '2',
          label: <p className='text-[15px] font-medium'> My Choice</p>,
          children:<MyChoice/>,
        },
    
      ]; 


const handleMessage =()=>{
    setIsMessage(!isMessage)
}
    return (
        <div >
            
            <div className='relative'>  
                {/* cover photo  */}
                <div>
                <Image src="/about.png" alt="" height={200}  width={1400} style={{width:"100%" , height:"210px" , objectFit:"cover"}} /> 
                <Link href="/peoples" className='flex items-center gap-[2px] absolute top-3 left-2 text-white bg-black/90  rounded-lg  ' > <span> <BiLeftArrowAlt size={22} /> </span> <span>Back</span></Link>
                </div> 
  
  <div className='container'>

  {/* profile image and info's   */}
                <div className='container flex justify-between '> 
 <div className='flex gap-3'>
<Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400" alt='' height={450} width={280} style={{borderRadius:"20px" , height:"290px" , width:"250px"}}   className=' -mt-[145px] border-2 border-white'/> 
 
 <div>
<p className=' font-semibold text-2xl tracking-wider py-2'>Mariam Star</p> 
<p className='text-[#6B6B6B] flex gap-5 text-[15px] font-medium'> <span>Age:25 </span> <span> New York, USA</span></p>
 </div>
 </div> 

{/* message , wishlist , block option  */}
 <div className=' flex gap-x-4 pt-3'>
 <div
  onClick={handleMessage}
  className={`flex items-center justify-center gap-1 text-white font-medium h-[45px] w-[120px] rounded-lg ${
    isMessage ? "bg-[#7F7F7F]" : "bg-[#007BA5]"} `}
>
  <FiSend size={21} />
  <p>Message</p>
</div>

 <p className=' w-10 h-10 bg-[#7F7F7F] flex justify-center items-center text-red-500 rounded-full '><LuHeart size={20} /></p> 

 <div className='w-10 h-10 bg-[#7F7F7F] flex justify-center items-center text-white rounded-full font-semibold '><HiOutlineDotsHorizontal size={22} /></div>
 </div>
                </div> 

                {/* Message  */}  {
                    isMessage ?  <div className='mt-2'>
                    <Form  > 
 <Form.Item name="message"> 
<Input.TextArea rows={4} className='w-full rounded-lg resize-none bg-[#EEEEEE]' /> 
 </Form.Item> 

 <button className=' bg-primary text-white font-semibold h-[45px] w-[200px]  rounded-lg '>Send Message</button>
                    </Form>
                </div>  : ""
                } 

                {/* tabs  */} 
                <div className='my-4'> 
                <ConfigProvider
  theme={{
    components: {
      Tabs: {
        itemActiveColor:"#007BA5" ,
        itemSelectedColor:"#007BA5" ,
        inkBarColor:"#007BA5" ,
        itemHoverColor:"#007BA5"
      },
    },
  }}
>
                <Tabs defaultActiveKey="1" items={items} />
</ConfigProvider>
                </div>
               
  </div>
            </div>
        </div>
    );
};

export default PersonDetails;