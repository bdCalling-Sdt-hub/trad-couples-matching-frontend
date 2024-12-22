"use client"
import React from 'react';
import { Collapse, theme } from 'antd';

import Link from 'next/link';
import SmallButton from '@/components/shared/SmallButton'; 
import { Inter } from 'next/font/google'
import { Plus } from 'lucide-react';
import { useGetAllFaqsQuery } from '@/redux/features/faq/faqSlice';
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });



const FAQSection = () => {   
  const {data} = useGetAllFaqsQuery(undefined) 
  const faqData = data?.data; 

  const getItems = () =>
    faqData?.slice(0, 4)?.map((faq:{question:string,answer:string,_id:string}) => ({
      key: faq._id,
      label: (
        <p
          className="font-sans"
          style={{ color: '#A0A0A0', fontSize: '19px' }}
        >
          {faq.question}
        </p>
      ),
      children: (
        <p style={{ color: '#A0A0A0', fontSize: '16px' }}>{faq.answer}</p>
      ),
      style: panelStyle,
    })); 
 
    const { token } = theme.useToken();

    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: "#222222",  
      borderRadius: token.borderRadiusLG,
      border: 'none',
    }; 

    return ( 
        <div className={` bg-[#0E0E0E] font-sans  ${inter.className}`}>

        <div className='container py-[40px] pt-14 '> 
             
             <div className='lg:text-center pb-4 '>
                <h1 className='text-white font-[400] lg:text-[32px] text-[20px] lg:leading-[40px]  font-sans text-center '>Popular Frequently Asked Questions</h1> 
                <p className=' text-[#E6E6E6] lg:py-3 lg:px-0 px-8 mb-3 text-[13px] lg:text-[18px]'>we provide a secure and fastest ranting system Our mission is to make. Do you have a question regarding our service?</p>
             </div> 

             <div className=' w-full  flex justify-center items-center'>  
              <div className='lg:w-[65%] w-[100%]'>

             <Collapse
      bordered={false}
      expandIcon={({ isActive }) => <Plus  size={22} style={{ 
        transform: `rotate(${isActive ? 0 : 270}deg)`,
        transition: 'transform 0.3s ease', 
        color: 'white' 
      }}  />} 
     expandIconPosition="end"
      style={{ background: "#fffff"  , color: '#fffff'}}  
      items={getItems()}
    />
              </div>
             </div> 
 
 <Link href="/faq" className='flex justify-center items-center' >
             <SmallButton className=''> View More</SmallButton>
 </Link>
        </div>
        </div>
    );
};

export default FAQSection;