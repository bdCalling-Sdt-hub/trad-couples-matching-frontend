import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return ( 
        <div className=" h-[calc(100vh)] w-full "
        style={{ 
            backgroundImage: `url('/Banner.png')`, 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}> 

<div className=' min-h-screen bg-[#EEEEEE]/80 w-full flex items-center justify-center text-center'>

            <div >
              <h2 className=' text-primary font-[800] text-9xl tracking-wider'>404</h2>
              <p className='py-2'>Visited page not found, please go to homepage.</p>
              <Link href="/" className=' text-primary text-[12px] underline underline-offset-2'>Go Home page</Link>
            </div>
</div>
        </div>
     
        
    );
};

export default NotFound;