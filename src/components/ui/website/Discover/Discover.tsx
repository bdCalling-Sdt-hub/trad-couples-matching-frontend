"use client"
import SingleCard from '@/components/shared/SingleCard';
import React from 'react'; 
import Heading from '@/components/shared/Heading';
import "./style.css"    
import { useGetAllDiscoverQuery } from '@/redux/features/discover/discoverSlice';
import { imageUrl } from '@/redux/base/baseApi';

const Discover = () => {  
    const {data , refetch} = useGetAllDiscoverQuery(undefined) 
        const discoverData = data?.data

        const profiles = discoverData?.peoples?.map((person: { user: { image: string, name: string, _id: string }, age: number, country: string , isFavorite: boolean }) => ({
            id: person?.user?._id,
            image: person?.user?.image?.startsWith("http") ? person?.user?.image : `${imageUrl}${person?.user?.image}`,
            name: person?.user?.name,
            age: person?.age,
            address: person?.country,  
            isFavorite: person?.isFavorite
          }
          ));  
           

    return (
        <div className='container  pb-7 font-sans'>
               <Heading className=' pb-2 pt-2'>Discover</Heading> 
               <p className='border-b-2 border-[#D1D1D1]  mb-5'></p>
              <div className=' grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:gap-6 gap-4 justify-self-center'>
                {
                    profiles?.map((value:{id:string , image:string , name:string , age:number , address:string} , index:number)=> <SingleCard key={index} value={value} refetch={refetch} />
                    )
                }
              </div> 
 
 <div className='mt-9'> 
 {/* <ConfigProvider
  theme={{
    token: {
        colorPrimary:"#007ba5" , 
        

    },
  }}
>  

              <Pagination align="center" current={page}   total={profiles.length} onChange={(page)=>setPage(page)}   pageSize={pageSize} /> 
</ConfigProvider>  */}
 </div>
        </div>
    );
};

export default Discover;