"use client"
import { useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';  

interface propsType{
    current:number ,
    setCurrent:Dispatch<SetStateAction<number>> , 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    steps:({ title: string; content: React.JSX.Element; } | { content: string; title?: undefined; })[]; 
}

const BioFooter = ({current ,setCurrent, steps}:propsType) => { 
    const router = useRouter()
    
    const next = () => {
        setCurrent(prev => Math.min(prev + 1, steps.length - 1));
    };

    const prev = () => {
        setCurrent(prev => Math.max(prev - 1, 0));
    }; 
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
                        <button   onClick={() =>{router.push("/verify-questions")}} className='mt-6 px-5 py-[10px] bg-primary text-white rounded-lg' >
                            Done
                        </button>
                    )}
                    
                </div>
    );
};

export default BioFooter;