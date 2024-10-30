"use client"
import type { CSSProperties } from 'react';
import React from 'react';

import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd';

import Link from 'next/link';
import SmallButton from '@/components/shared/SmallButton'; 
import { Inter } from 'next/font/google'
import { Plus } from 'lucide-react';
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: <p className='font-sans' style={{ color: '#A0A0A0', fontSize: '19px' }}> This is panel header 1 </p> ,
    children: <p style={{ color: '#A0A0A0', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <p style={{ color: '#A0A0A0', fontSize: '19px' }}> This is panel header 2 </p> ,
    children: <p style={{ color: '#A0A0A0', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <p style={{ color: '#A0A0A0', fontSize: '19px' }}> This is panel header 3 </p>,
    children: <p style={{ color: '#A0A0A0', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: <p style={{ color: '#A0A0A0', fontSize: '19px' }}> This is panel header 4</p> ,
    children: <p style={{ color: '#A0A0A0', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },

]; 

const FAQSection = () => {  
 
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
      items={getItems(panelStyle)}
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