import Navbar from '@/components/shared/Navbar';
import React from 'react';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar /> 

            <div 
             className=" h-[calc(100vh)] w-full "
             style={{ 
                 backgroundImage: `url('/Banner.png')`, 
                 backgroundPosition: "center",
                 backgroundRepeat: "no-repeat",
                 backgroundSize: "cover",
             }}> 

                {children}
            </div>
        </div>
    );
};

export default layout;