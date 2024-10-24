import Image from 'next/image';
import React from 'react'; 
import profile2 from "@/assets/profile10.svg"
import profile3 from "@/assets/profile3.svg"
import profile4 from "@/assets/profile4.svg"
import profile1 from "@/assets/profile12.svg" 
import profile5 from "@/assets/profile5.svg"
import profile6 from "@/assets/profile6.svg"

const Photos = () => { 
    const images = [ profile2 ,profile3 ,profile4 ,profile1 ,profile5 ,profile6
    ]
    return (
        <div className='mb-5'> 

<Image src={profile1} alt='' height={350} width={350} style={{height:"auto" , width:"auto" , borderRadius:"10px" }} />

            <div className='grid lg:grid-cols-5 grid-cols-1 items-center gap-5 mt-5'>
            {
                images?.map((value , index:number) =><div key={index}> 
 <Image src={value} alt='' height={350} width={350} style={{height:"auto" , width:"auto" , borderRadius:"10px" }} />
                </div>)
            }
            </div>
        </div>
    );
};

export default Photos;