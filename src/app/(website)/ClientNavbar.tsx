"use client"
import { usePathname } from 'next/navigation';
import WithLoginNavbar from '@/components/shared/WithLoginNavbar';
import React, { useState } from 'react';
import Footer from '@/components/shared/Footer';

const ClientNavbar = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = (isOpen: boolean) => {
        setIsDrawerOpen(isOpen);
    };


    return (
        <div className={`transition-transform duration-300 ${isDrawerOpen ? "translate-x-64" : ""
            }`}>
            {
                pathname !== "/" && pathname !== "/home" && (
                    <WithLoginNavbar onDrawerToggle={handleDrawerToggle} />
                )
            }

            <div className={`min-h-screen ${(pathname !== "/" && pathname !== "/home") && "pt-[85px]"} ${isDrawerOpen && "mt-0"}`}>
                {children}
            </div>

            {pathname === "/" || pathname === "/home" ? <Footer /> : ""}

        </div>
    );
};

export default ClientNavbar;