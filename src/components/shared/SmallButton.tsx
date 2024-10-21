import React from 'react'; 
import { Poppins } from 'next/font/google'; 
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] }); 

interface IButtonProps {
  name?: React.ReactNode;
  children?: React.ReactNode;
  className: string;
}

const SmallButton: React.FC<IButtonProps> = ({ children, className }) => {
  return <button type="submit" className={`mt-6 px-6 py-3 bg-primary  text-white rounded-lg font-medium ${poppins.className} ${className}`} >
    {children}
  </button>

};

export default SmallButton;