import React from 'react';

const AboutClient = () => {
    return (
        <div >
           <div className=' flex flex-col w-full'>
            <div className=" h-[calc(75vh)] w-full flex justify-center items-center "
             style={{ 
                 backgroundImage: `url('/about.png')`, 
                 backgroundPosition: "center",
                 backgroundRepeat: "no-repeat",
                 backgroundSize: "cover",
             }}>
 <div className='bg-black/80 p-8 w-[40%] rounded-lg text-center'> 
    <h1 className='text-2xl font-semibold tracking-wide text-[#FFBE00] '>About Us </h1> 
    <p className='text-[16px] leading-7 tracking-wider text-[#E6E6E6] py-3 w-[94%] mx-auto'>TradCouples Matchmaking Services stands at the forefront of sophisticated matchmaking, where accomplished individuals can make exceptional connections. Here you can find women of your choice by sharing your thoughts and opinions  </p> 

    <p className='text-[15px] leading-6 tracking-wider text-[#E6E6E6]'>You deserve nothing less than extraordinary – find someone born for you.</p>
 </div>
            </div>  

            <div className=' container w-1/2 flex justify-center items-center h-[47vh] py-12'> 
            <div className='text-center'>

 <h1 className='text-4xl font-semibold tracking-wide text-primary'>Message from you</h1>  
 <p className='text-[18px] leading-7 tracking-wider text-black py-10 w-[94%] mx-auto'>TradCouples Matchmaking Services stands at the forefront of sophisticated matchmaking, where accomplished individuals can make exceptional connections. Here you can find women of your choice by sharing your thoughts and opinions  </p> 

    <p className='text-[17px] leading-6 tracking-wider text-black'>You deserve nothing less than extraordinary – find someone born for you.</p>
            </div>

            </div>
           </div>
        </div>
    );
};

export default AboutClient;