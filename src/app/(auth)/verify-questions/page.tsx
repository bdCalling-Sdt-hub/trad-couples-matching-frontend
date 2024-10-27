import Navbar from '@/components/shared/Navbar';
import Questions from '@/components/ui/auth/Questions/Questions';
import React from 'react';


const page = () => {
    return (
        <div> 
               <Navbar /> 
            <Questions />
        </div>
    );
};

export default page;