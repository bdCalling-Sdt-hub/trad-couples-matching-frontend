/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { useCreateBioQuestionsMutation } from '@/redux/features/questions/questionsSlice';
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
        aboutMe: string|null,
        age: string|null,
        height: string|null,
        bodyShape: string|null,
        educationOn: string|null,
        ethnicity: string|null,
        country: string|null,
        region: string|null,
        hairColor: string|null,
        eyeColor: string|null,
        maritalStatus: string|null,
        children: string|null,
        searchingRightPartner: string|null,
        wantToLive: string|null,
        occupation: string|null,
    }
}

const BioFooter = ({current ,setCurrent, steps , formData}:propsType) => { 
    const router = useRouter() 
    const [createBioQuestions] = useCreateBioQuestionsMutation()
    
    const next = () => {
        setCurrent(prev => Math.min(prev + 1, steps.length - 1));
    };

    const prev = () => {
        setCurrent(prev => Math.max(prev - 1, 0));
    };  

    const handleSubmit = async() => {
       
        await createBioQuestions(formData).then((res) => { 
         console.log(res);
            if (res?.data?.success) {
                Swal.fire({
                  text: res?.data?.message,
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1500,
                }).then(()=>{
                    router.push("/verify-questions")
                })
              } else {
                Swal.fire({
                  title: "Oops", 
                  //@ts-ignore
                  text: res?.error?.data?.message,
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

export default BioFooter;