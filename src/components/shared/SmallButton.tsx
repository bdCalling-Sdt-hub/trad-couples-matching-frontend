import React from 'react';
interface IButtonProps {
    name?: React.ReactNode;
    children?: React.ReactNode;
    className: string;
  } 

const SmallButton: React.FC<IButtonProps>  = ({children , className}) => {
    return  <button className={`mt-6 px-6 py-3 bg-[#007BA5] text-white rounded-lg ${className}` } >
       {children}
    </button>

};

export default SmallButton;