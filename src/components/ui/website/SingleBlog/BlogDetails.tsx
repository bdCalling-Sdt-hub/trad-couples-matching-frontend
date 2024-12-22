"use client"
import Image from 'next/image';
import React from 'react'; 
import Heading from '@/components/shared/Heading';
import { useParams } from 'next/navigation';
import { useGetBlogQuery } from '@/redux/features/footer/footerSlice';
import { imageUrl } from '@/redux/base/baseApi';

const BlogDetails = () => { 
  const {blogId} = useParams();  
  const {data} = useGetBlogQuery(blogId); 
  const blogData = data?.data;
  console.log(blogData);
    return (
        <div className="container my-10">
      <div className="w-full h-[456px] relative">
        <Image
          alt="new details"
          src={blogData?.image?.startsWith("http") ? blogData?.image : `${imageUrl}${blogData?.image}`}
          fill
          // style={{objectFit: "contain"}}
        />

        <div
          className="absolute left-0 -bottom-4 bg-white lg:w-[450px] w-full lg:rounded-r-3xl rounded-r-xl py-2"
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }}
        >
          <Heading
            className="font-normal lg:text-[32px] text-[24px] text-center   leading-[48px] text-[#3E3E3E]"
          > {blogData?.title} </Heading>
        </div>
      </div>

      <p className="text-[#767676] text-[16px] leading-[21px] font-normal mt-10">
        {blogData?.description}
      </p>
    </div>
    );
};

export default BlogDetails;