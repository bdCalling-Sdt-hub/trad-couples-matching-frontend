"use client"
import React from 'react';
import Heading from '@/components/shared/Heading';
import { useGetPressQuery } from '@/redux/features/footer/footerSlice';


const Press = () => { 
    const {data} = useGetPressQuery(undefined)
    return (
        <div className=" container  lg:my-12 my-6" 
        >
            <Heading className=" mb-3"> Press   </Heading>
      
            <div
                className=" text-[16px] text-black pb-2  tracking-wide "
                dangerouslySetInnerHTML={{ __html: data?.data?.content }}  
            
              />
          </div>
    );
};

export default Press;