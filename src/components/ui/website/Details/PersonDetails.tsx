"use client"
import AboutMe from '@/components/ui/website/Details/AboutMe';
import MyChoice from '@/components/ui/website/Details/MyChoice';
import Photos from '@/components/ui/website/Details/Photos';
import { ConfigProvider, Dropdown, Form, Input, Tabs } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoMdKey } from 'react-icons/io';
import { LuHeart } from 'react-icons/lu'; 
import profile1 from "@/assets/profile12.svg" 

const PersonDetails = () => {
  const [isMessage, setIsMessage] = useState(false) 

  const items = [
    {
      label: <p className='text-[15px] font-medium  hover:text-primary text-[#A3A3A3] w-[100px] '>Hide</p>,
      key: '0',
    },
    {
      label: <p className='text-[15px] font-medium  hover:text-primary text-[#A3A3A3]'>Block</p>,
      key: '1',
    },
    {
      label: <p className='text-[15px] font-medium  hover:text-primary text-[#A3A3A3]'>Report</p>,
      key: '2',
    },
  
  ]; 

  const profileItems = [
    {
      key: '1',
      label: <p className='text-[15px] font-medium'> About Me</p>,
      children: <AboutMe />,
    },
    {
      key: '2',
      label: <p className='text-[15px] font-medium'> My Choice</p>,
      children: <MyChoice />,
    },
    {
      key: '3',
      label: <p className='text-[15px] font-medium'>Photos</p>,
      children: <Photos />,
    },

  ];


  const handleMessage = () => {
    setIsMessage(!isMessage)
  }
  return (
    <div className='' >

      <div className='relative'>
        {/* cover photo  */}
        <div>
          <Image src="/about.svg" alt="" height={200} width={1400} style={{ width: "100%", height: "210px", objectFit: "cover" }} />
          <Link href="/discover" className='flex items-center gap-[2px] absolute top-3 left-2 text-white bg-black/90  rounded-lg  ' > <span> <BiLeftArrowAlt size={22} /> </span> <span>Back</span></Link>
        </div>

        <div className='container'>

          {/* profile image and info's   */}
          <div className='container flex lg:flex flex-wrap justify-between '>
            <div className='flex flex-col lg:flex-row gap-3'>
              <Image src={profile1} alt='' height={450} width={280} style={{ borderRadius: "20px", height: "290px", width: "250px" , objectFit:"cover" }} className=' -mt-[145px] border-2 border-white' />

              <div>
                <p className=' font-semibold text-2xl tracking-wider py-2'>Mariam Star</p>
                <p className='text-[#6B6B6B] flex  gap-5 text-[15px] font-medium'> <span>Age:25 </span> <span> New York, USA</span></p>
              </div>
            </div>

            {/* message , wishlist , block option  */}
            <div className=' flex gap-x-4 pt-3'>
              <div
                onClick={handleMessage}
                className={`flex items-center justify-center gap-1  font-medium h-[45px] w-[120px] rounded-lg cursor-pointer ${isMessage ? "bg-[#EBEBEB] text-[#999999]" : "bg-[#007BA5] text-white"} `}
              >
                <FiSend size={21} />
                <p>Message</p>
              </div>

              <p className=' w-10 h-10 bg-[#EBEBEB] cursor-pointer flex justify-center items-center text-red-500 rounded-full '><LuHeart size={20} /></p>
              <p className=' w-10 h-10 bg-[#EBEBEB] cursor-pointer flex justify-center items-center text-primary rounded-full '><IoMdKey size={20} /></p>

              <Dropdown
    menu={{items}} className=''
  > 
              <p className='w-10 h-10 bg-[#EBEBEB] flex justify-center items-center text-[#4E4E4E] rounded-full font-semibold cursor-pointer'><HiOutlineDotsHorizontal size={22} /></p>
   </Dropdown>
            </div>
          </div>

          {/* Message  */}  {
            isMessage ? <div className='mt-2'>
              <Form  >
                <Form.Item name="message">
                  <Input.TextArea rows={4} className='w-full rounded-lg resize-none bg-[#EEEEEE]' placeholder={`Message with Mariam Star`} />
                </Form.Item>

                <button className=' bg-primary text-white font-semibold h-[45px] w-[200px]  rounded-lg '>Send Message</button>
              </Form>
            </div> : ""
          }

          {/* tabs  */}
          <div className='my-4'>
            <ConfigProvider
              theme={{
                components: {
                  Tabs: {
                    itemActiveColor: "#007BA5",
                    itemSelectedColor: "#007BA5",
                    inkBarColor: "#007BA5",
                    itemHoverColor: "#007BA5"
                  },
                },
              }}
            >
              <Tabs defaultActiveKey="1" items={profileItems} />
            </ConfigProvider>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PersonDetails;