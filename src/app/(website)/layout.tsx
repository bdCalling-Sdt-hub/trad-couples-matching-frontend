
import React from 'react';
import ClientNavbar from './ClientNavbar';
// import ProtectedRoute from './ProtectedRoute'; 
const layout = ({children}: {children: React.ReactNode}) => { 
    
    return (
        <div className=' '>  
        {/* <ProtectedRoute>   */}
         <ClientNavbar >
                {children}
         </ClientNavbar>
        {/* </ProtectedRoute>  */}
          
        </div>
    );
};

export default layout;