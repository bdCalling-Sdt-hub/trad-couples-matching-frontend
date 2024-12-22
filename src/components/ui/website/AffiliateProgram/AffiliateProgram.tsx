"use client"
import React from 'react';
import Heading from '@/components/shared/Heading';
import { useGetAffiliateQuery } from '@/redux/features/footer/footerSlice';

const AffiliateProgram = () => { 
     const {data} = useGetAffiliateQuery(undefined); 

    return (
        <div className=" container  lg:my-12 my-6" 
        >
            <Heading className=" mb-3"> Affiliate Program  </Heading>
      
            <div
                className=" text-[16px] text-black pb-2  tracking-wide "
                dangerouslySetInnerHTML={{ __html: data?.data?.content }}  
            
              />
          </div>
    );
};

export default AffiliateProgram;