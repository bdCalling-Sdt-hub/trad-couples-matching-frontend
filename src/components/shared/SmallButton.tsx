import React from 'react'; 
import { Inter } from 'next/font/google'; 
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'] }); 

interface IButtonProps {
  name?: React.ReactNode;
  children?: React.ReactNode;
  className: string;
}

const SmallButton: React.FC<IButtonProps> = ({ children, className }) => {
  return <button type="submit" className={` lg:px-6 px-2 lg:py-3 py-3  bg-primary  text-white rounded-lg  lg:text-[18px] text-[14px] ${inter.className} ${className}`} >
    {children}
  </button>

};

export default SmallButton;