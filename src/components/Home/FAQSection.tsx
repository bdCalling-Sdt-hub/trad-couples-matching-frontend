"use client"
import type { CSSProperties } from 'react';
import React from 'react';

import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd';
import { FaCircleChevronDown } from 'react-icons/fa6';
import YellowButton from '../shared/SmallButton';
import Link from 'next/link';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: <p style={{ color: 'white', fontSize: '19px' }}> This is panel header 1 </p> ,
    children: <p style={{ color: 'white', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <p style={{ color: 'white', fontSize: '19px' }}> This is panel header 2 </p> ,
    children: <p style={{ color: 'white', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <p style={{ color: 'white', fontSize: '19px' }}> This is panel header 3 </p>,
    children: <p style={{ color: 'white', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: <p style={{ color: 'white', fontSize: '19px' }}> This is panel header 4</p> ,
    children: <p style={{ color: 'white', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '5',
    label: <p style={{ color: 'white', fontSize: '19px' }}> This is panel header 5 </p> ,
    children: <p style={{ color: 'white', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '6',
    label: <p style={{ color: 'white', fontSize: '19px' }}> This is panel header 6 </p>,
    children: <p style={{ color: 'white', fontSize: '16px' }}>{text}</p>,
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
        <div className=' bg-[#0E0E0E]'>

        <div className='container py-[40px] '> 
             
             <div className='text-center '>
                <h1 className='text-white font-[400] text-[32px] leading-[40px]  tracking-wider'>Popular Frequently Asked Questions</h1> 
                <p className=' text-[#E6E6E6] py-3 mb-3'>we provide a secure and fastest ranting system Our mission is to make. Do you have a question regarding our service?</p>
             </div> 

             <div> 
             <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <FaCircleChevronDown  size={22} style={{ 
        transform: `rotate(${isActive ? 0 : 270}deg)`,
        transition: 'transform 0.3s ease', 
        color: '#00809E' 
      }}  />} 
     expandIconPosition="end"
      style={{ background: "#0E0E0E"  , color: 'white'}}
      items={getItems(panelStyle)}
    />
             </div> 
 
 <Link href="/faq" className='flex justify-center items-center' >
             <YellowButton className=''> View More</YellowButton>
 </Link>
        </div>
        </div>
    );
};

export default FAQSection;