"use client"
import React from 'react';
import { Collapse, theme } from 'antd';
import Heading from '@/components/shared/Heading';
import { Plus } from 'lucide-react';
import { useGetAllFaqsQuery } from '@/redux/features/faq/faqSlice';


const FAQ = () => {  
    const {data} = useGetAllFaqsQuery(undefined) 
    const faqData = data?.data;  
    const { token } = theme.useToken(); 

    const getItems = () =>
      faqData?.faqs?.map((faq:{question:string,answer:string,_id:string}) => ({
        key: faq._id,
        label: (
          <p
            className="font-sans"
            style={{ color: '#4E4E4E', fontSize: '19px' }}
          >
            {faq.question}
          </p>
        ),
        children: (
          <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{faq.answer}</p>
        ),
        style: panelStyle,
      }));  


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
      items={getItems()}
    /> 

             </div>   

             </div>  
        </div>
    );
};

export default FAQ;