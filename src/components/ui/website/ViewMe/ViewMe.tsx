"use client"
import SingleCard from '@/components/shared/SingleCard';
import Heading from '@/components/shared/Heading';
import { useGetViewMeQuery } from '@/redux/features/view-me/viewMeSlice';
import { imageUrl } from '@/redux/base/baseApi';

const ViewMe = () => { 
    const {data} = useGetViewMeQuery(undefined)  
    const viewData = data?.data
    console.log(data);   

    const profiles = viewData?.map((person: {  image: string, name: string, _id: string , age: number, country: string , isFavorite: boolean }) => ({
        id: person?._id,
        image: person?.image?.startsWith("http") ? person?.image : `${imageUrl}${person?.image}`,
        name: person?.name,
        age: person?.age,
        address: person?.country,  
        isFavorite: person?.isFavorite
      }
      )); 
    return (
        <div className='container  pb-7 font-sans'>
        <Heading className=' pb-2 pt-2'>View Me</Heading> 
        <p className='border-b-2 border-[#D1D1D1]  mb-5'></p>
       <div className=' cards grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:gap-6 gap-4 justify-self-center'>
         {
             profiles?.map((value:{id:string , image:string , name:string , age:number , address:string} , index:number)=> <SingleCard key={index} value={value} />
             )
         }
       </div> 

 </div> 
    );
};

export default ViewMe;