"use client"
import SingleCard from '@/components/shared/SingleCard';

import Heading from '@/components/shared/Heading';
import { useGetFavoriteQuery } from '@/redux/features/favorite/favoriteSlice';
import { imageUrl } from '@/redux/base/baseApi';


const MyFavorites = () => {  
     const {data , refetch} = useGetFavoriteQuery(undefined)  
        const favoriteData = data?.data  
    
        const profiles = favoriteData?.map((person: {  favoriteUserId: { image: string, name: string, _id: string }, age: number, country: string , isFavorite: boolean }) => ({
            id: person?.favoriteUserId?._id,
            image: person?.favoriteUserId?.image?.startsWith("http") ? person?.favoriteUserId?.image : `${imageUrl}${person?.favoriteUserId?.image}`,
            name: person?.favoriteUserId?.name,
            age: person?.age,
            address: person?.country,  
            isFavorite: person?.isFavorite
          }
          ));  
    return (
        <div className='container  pb-7 font-sans'>
        <Heading className=' pb-2 pt-2'>My Favorites</Heading> 
        <p className='border-b-2 border-[#D1D1D1]  mb-5'></p>
       <div className=' cards grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:gap-6 gap-4 justify-self-center'>
         {
             profiles?.map((value:{id:string , image:string , name:string , age:number , address:string} , index:number)=> <SingleCard key={index} value={value} refetch={refetch} />
             )
         }
       </div> 

 </div> 
    );
};

export default MyFavorites;