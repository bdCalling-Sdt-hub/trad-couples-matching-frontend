import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import WithLoginNavbar from '@/components/shared/WithLoginNavbar';
import React from 'react';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className=' '> 
            {/* <Navbar/>  */} 
            <WithLoginNavbar />
            <div className='mt-[86px] pt-[2px] min-h-screen'>
                {children}
            </div> 
            <Footer/>
        </div>
    );
};

export default layout;