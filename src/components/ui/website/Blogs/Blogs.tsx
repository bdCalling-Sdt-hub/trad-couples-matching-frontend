/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import Heading from '@/components/shared/Heading';
import { useRouter } from 'next/navigation';
import { useGetAllBlogsQuery } from '@/redux/features/footer/footerSlice';
import { imageUrl } from '@/redux/base/baseApi';

const Blogs = () => {
  const router = useRouter()
  const { data: blogs } = useGetAllBlogsQuery(undefined)
  const blogsData = blogs?.data

  const handleBlog = (id: number | string) => {
    router.push(`/blog/${id}`)
  }

  return (
    <div className='container lg:my-12 my-6'>
      <Heading className='mb-3'> Blogs for you</Heading>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 pb-[100px]">
        {blogsData?.blogs?.map((news: { _id: string; image: string; title: string }, index: number) => {
          return (
            <div
              key={index}
              className="flex relative  items-end group overflow-hidden cursor-pointer"
              onClick={() => handleBlog(news?._id)}
            >
              <img
                alt="news"
                src={news?.image?.startsWith("http") ? news?.image : `${imageUrl}${news?.image}`}

                style={{ borderRadius: "10px" }}
                className='w-full h-[350px] object-cover'
              />

              <div className="absolute w-full left-0  p-4">
                <div className="translate-y-[86px]  transition-all duration-500 group-hover:translate-y-0">
                  <p
                    className="font-semibold text-[24px] leading-[32px] mb-6 text-[#FAFAFA]"
                  > {news?.title} </p>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;