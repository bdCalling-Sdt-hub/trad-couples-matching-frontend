"use client"
import Heading from '@/components/shared/Heading';
import { useGetTermsQuery } from '@/redux/features/footer/footerSlice';
import React from 'react'; 


const Terms = () => { 
    const {data} = useGetTermsQuery(undefined);
    return (
        <div className=" container  lg:my-12 my-6" 
      >
          <Heading className=" mb-3"> Terms & Conditions  </Heading>
    
          <div
              className=" text-[16px] text-black pb-2  tracking-wide "
              dangerouslySetInnerHTML={{ __html: data?.data?.content }}  
          
            />
        </div>
    );
};

export default Terms;