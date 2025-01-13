"use client"
import SingleCard from '@/components/shared/SingleCard';
import Heading from '@/components/shared/Heading';
import { useGetViewMeQuery } from '@/redux/features/view-me/viewMeSlice';
import { imageUrl } from '@/redux/base/baseApi';

const ViewMe = () => {
  const { data, refetch } = useGetViewMeQuery(undefined)
  const viewData = data?.data
  console.log(viewData);

  const profiles = viewData?.map((person: { view: { image: string, name: string, _id: string }, age: number, country: string , isFavorite: boolean }) => ({
    id: person?.view?._id,
    image: person?.view?.image?.startsWith("http") ? person?.view?.image : `${imageUrl}${person?.view?.image}`,
    name: person?.view?.name,
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
          profiles?.map((value: { id: string, image: string, name: string, age: number, address: string }, index: number) => <SingleCard key={index} value={value} refetch={refetch} />
          )
        }
      </div>

    </div>
  );
};

export default ViewMe;