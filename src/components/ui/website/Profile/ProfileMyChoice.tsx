import { useGetQuestionnaireQuery } from '@/redux/features/profile/profileSlice';
import React from 'react';
import { GoDotFill } from 'react-icons/go';

const ProfileMyChoice = () => {   
    const {data:allQuestion} = useGetQuestionnaireQuery(undefined) 
    console.log(allQuestion);
    const data=[
        "I Have a home ." , 
        "I am living with my parents ." , 
        "I am a Cristian." ,
        "I believe Jesus Christ is the head of the house and then the man." ,
        "My preferred ethnicity for partner should be American ." ,
        "My preferred age range for a partner should be 28-35." ,
        "I believe that men are role models for little boys." ,
        "I have no problem to step up and father another man's children." ,
        "I want 3 children." ,
        "I believe the man is the main provider and protector of the household." ,
        "I believe Jesus Christ is the head of the house and then the man."
    ] 
    return (
        <div>
           <div>
                {
                    data?.map((value , index:number)=><div key={index} className='bg-[#EEEEEE] py-3 px-3 rounded-full mb-3'>  
                    <div className='text-[#4E4E4E] flex items-center  gap-[2px] text-[15px]'> <p> <GoDotFill size={18} /> </p> <p>{value}</p> </div>
                         </div>)
                }
             </div>
        </div> 
    );
};

export default ProfileMyChoice;