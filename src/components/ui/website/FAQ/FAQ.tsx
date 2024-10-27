"use client"
import type { CSSProperties } from 'react';
import React from 'react';

import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd';

import Heading from '@/components/shared/Heading';
import { Plus } from 'lucide-react';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 1 </p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 2 </p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 3 </p>,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 4</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '5',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 5 </p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '6',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 6 </p>,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '7',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 7</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '8',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 8 </p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },

]; 

const FAQ = () => { 
    const { token } = theme.useToken();

    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: "#E6E6E6",  
    
      borderRadius: token.borderRadiusLG,
      border: 'none', 
      width:"1000px"
    };  
    return (
        <div className='container flex justify-center items-center pt-8'>
             <div>
                <Heading className='text-center'>Popular Frequently Asked Questions</Heading> 
                <p className='text-center py-4 text-[#6B6B6B]'>we provide a secure and fastest ranting system Our mission is to make. Do you have a question regarding our service?</p>
           

             <div> 
             <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <Plus  size={22} style={{ 
        transform: `rotate(${isActive ? 0 : 270}deg)`,
        transition: 'transform 0.3s ease', 
        color: '#00809E' 
      }}  />} 
     expandIconPosition="end"
      style={{ background: "white"  , color: '#4E4E4E'}}
      items={getItems(panelStyle)}
    /> 

             </div>   

             </div>  
        </div>
    );
};

export default FAQ;