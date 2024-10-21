import Footer from '@/components/shared/Footer';
import React from 'react';
import ClientNavbar from './ClientNavbar';
const layout = ({children}: {children: React.ReactNode}) => { 
   
    
    return (
        <div className=' '> 
         <ClientNavbar >
                {children}
         </ClientNavbar>
            <Footer/>
        </div>
    );
};

export default layout;