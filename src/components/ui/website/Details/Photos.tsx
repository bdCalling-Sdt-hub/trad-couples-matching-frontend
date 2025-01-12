import Image from 'next/image';
import React from 'react'; 
import { imageUrl } from '@/redux/base/baseApi';

const Photos = ({personDetails}:any) => {  
    return (
        <div className='mb-5'> 

<Image src={personDetails?.image?.startsWith("http") ? personDetails?.image : `${imageUrl}${personDetails?.image}`} alt='' height={350} width={350} style={{height:"auto" , width:"auto" , borderRadius:"10px" }} />

            <div className='grid lg:grid-cols-5 grid-cols-1 items-center gap-5 mt-5'>
            {
                personDetails?.gallery?.map((value:{image:string} , index:number) =><div key={index}> 
 <Image src={value?.image?.startsWith("http") ? value?.image : `${imageUrl}${value?.image}`} alt='' height={350} width={350} style={{height:"auto" , width:"auto" , borderRadius:"10px" }} />
                </div>)
            }
            </div>
        </div>
    );
};

export default Photos;