import { useGetQuestionnaireQuery } from '@/redux/features/profile/profileSlice';
import React from 'react';
import { GoDotFill } from 'react-icons/go';

const ProfileMyChoice = () => {   
    const {data:allQuestion} = useGetQuestionnaireQuery(undefined)  
    console.log(allQuestion);
 
    return (
        <div>
           <div>
           {
                    allQuestion?.map((value: string |any, index: number) => {
                        if (index === 0 || value === '') return null;

                        return (
                            <div key={index} className='bg-[#EEEEEE] py-3 px-3 rounded-full mb-3'>  
                                <div className='text-[#4E4E4E] flex items-center gap-[2px] text-[15px]'>
                                    <p> <GoDotFill size={18} /> </p> 
                                    <p>{value}</p> 
                                </div>
                            </div>
                        );
                    })
                }
             </div>
        </div> 
    );
};

export default ProfileMyChoice;