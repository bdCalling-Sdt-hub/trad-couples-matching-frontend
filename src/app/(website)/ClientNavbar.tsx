"use client"
import { usePathname } from 'next/navigation'; 
import Navbar from '@/components/shared/Navbar';
import WithLoginNavbar from '@/components/shared/WithLoginNavbar'; 
import React, { useState } from 'react';

const ClientNavbar = ({children}:{children:React.ReactNode}) => { 
    const pathname = usePathname()   
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); 

    const handleDrawerToggle = (isOpen: boolean) => {
        setIsDrawerOpen(isOpen);
      }; 


    return (
        <div  className={`transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-64" : ""
          }`}>
            {
                pathname === "/" ? <Navbar /> : <WithLoginNavbar onDrawerToggle={handleDrawerToggle}/>
            } 

<div className={` pt-[2px] min-h-screen ${ pathname !== "/" && "pt-[85px]"} ${isDrawerOpen && "mt-0"}`}>
                {children}
            </div>  
            
        </div>
    );
};

export default ClientNavbar;