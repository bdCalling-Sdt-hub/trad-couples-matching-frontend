"use client"
import Heading from '@/components/shared/Heading';
import { useGetSupportQuery } from '@/redux/features/footer/footerSlice';
import React from 'react'; 


const Support = () => { 
    const {data} = useGetSupportQuery(undefined)
    return (
        <div className=" container  lg:my-12 my-6" 
        >
            <Heading className=" mb-3"> Support </Heading>
      
            <div
                className=" text-[16px] text-black pb-2  tracking-wide  "
                dangerouslySetInnerHTML={{ __html: data?.data?.content }}  
            
              />
          </div>
    );
};

export default Support;