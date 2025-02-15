"use client"
import { useCreateOthersQuestionsMutation } from '@/redux/features/questions/questionsSlice';
import { useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';  
import Swal from 'sweetalert2';

interface propsType{
    current:number ,
    setCurrent:Dispatch<SetStateAction<number>> , 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    steps:({ title: string; content: React.JSX.Element; } | { content: string; title?: undefined; })[];  
    formData:{
        liveAlone: string | null;
        liveWithParents: string | null;
        christian: string | null;
        believeJesusIsHead: string | null;
        numberOfChildrenWanted: string | null;
        manIsMainProvider: string | null;
        menRoleModelsForBoys: string | null;
        menSetStandardForDaughters: string | null;
        interestsHobbies: string | null;
        preferredAgeRange: string | null;
        preferredEthnicity: string | null;
        preferredPhysique: string | null;
        preferredFitnessLevel: string | null;
        stepUpAsMother: string | null;
        mothersAreNurturers: string | null;
        womenMakeHome: string | null;
        preferHomesteadingOrUrban: string | null;
        haveAHome: string | null;
        stepUpAsFather: string | null; 
    }
}
const StepsFooterBtn = ({current ,setCurrent, steps , formData}:propsType) => {  
    const router = useRouter() 
    const [createOthersQuestions] = useCreateOthersQuestionsMutation()
    
    const next = () => {
        setCurrent(prev => Math.min(prev + 1, steps.length - 1));
    };

    const prev = () => {
        setCurrent(prev => Math.max(prev - 1, 0));
    }; 
    
       const handleSubmit = async() => {
           
            await createOthersQuestions(formData).then((res) => { 
                if (res?.data?.success) {
                    Swal.fire({
                      text: res?.data?.message,
                      icon: "success",
                      showConfirmButton: false,
                      timer: 1500,
                    }).then(()=>{
                        router.push("/profile")
                    })
                  } else {
                    Swal.fire({
                      title: "Oops",
                      text: res?.data?.message,
                      icon: "error",
                      timer: 1500,
                      showConfirmButton: false,
                    });
                  } 
            })
           
        } 

    return (
        <div className="steps-action flex items-center justify-end gap-3"> 
        {current > 0 && (
                <button  onClick={prev} className='text-primary font-medium border-2 border-primary rounded-lg mt-6 px-5 py-2  flex items-center gap-1'>
                  <span> <BsArrowLeft /> </span>  <span>Previous </span>  
                </button>
            )} 

            {current < steps.length - 1 && (
                <button onClick={next} className='mt-6 px-5 py-[10px] bg-primary text-white rounded-lg flex items-center gap-1'> 
                <span>Next</span> <span><BsArrowRight size={22} /> </span>
                </button>
            )}
            {current === steps.length - 1 && (
                <button   onClick={() =>{handleSubmit()}} className='mt-6 px-5 py-[10px] bg-primary text-white rounded-lg' >
                    Done
                </button>
            )}
            
        </div>
    );
};

export default StepsFooterBtn;