"use client"
import React from 'react'; 
import img1 from "@/assets/home3.png"
import img2 from "@/assets/home4.png"
import Heading from '@/components/shared/Heading';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Blogs = () => {    
    const router = useRouter()

    const blogsData = [
        {
            id:1 ,
            title:"A Scriptural look at Jesus’ teachings on marriage" ,
            imgUrl:img1,
        } ,
        {
            id:2 ,
            title:"I Want Him to Want Me" ,
            imgUrl: img2
        },
        {
            id:3 ,
            title:"How a Relationship  Becomes a God" ,
            imgUrl: img1
        },
        {
            id:4 ,
            title:"Relationships are easy  to break, hard to build." ,
            imgUrl: img2
        },
        {
            id:5 ,
            title:"What Makes a Marriage  Distinctively Christian?" ,
            imgUrl: img1
        },
        {
            id:6 ,
            title:"Christian marriage has a  different kind of love" ,
            imgUrl: img2
        },
    ] 

    const handleBlog =(id:number|string)=>{
 router.push(`/blog/${id}`)
    } 

    return (
        <div className='container '>
            <Heading className='mb-3'> Blogs for you</Heading>  

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mb-5">
          {blogsData?.map((news: any, index: number) => {
            return (
              <div
                key={index}
                className="flex relative  items-end group overflow-hidden cursor-pointer" 
                onClick={()=>handleBlog(news?.id)}
              >
                <Image
                  alt="news"
                  src={news?.imgUrl}
                  width={1300}
                  height={300} 
                  style={{borderRadius:"10px"}}
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