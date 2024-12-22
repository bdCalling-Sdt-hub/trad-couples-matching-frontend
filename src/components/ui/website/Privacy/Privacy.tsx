"use client"
import React from 'react';
import Heading from '@/components/shared/Heading';
import { useGetPrivacyQuery } from '@/redux/features/footer/footerSlice';

const Privacy = () => { 
    const {data} = useGetPrivacyQuery(undefined)
    return (
        <div className=" container  lg:my-12 my-6" 
        >
            <Heading className=" mb-3"> Privacy Policy   </Heading>
      
            <div
                className=" text-[16px] text-black pb-2  tracking-wide "
                dangerouslySetInnerHTML={{ __html: data?.data?.content }}  
            
              />
          </div>
    );
};

export default Privacy;