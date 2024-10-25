import React from 'react';

interface ButtonType{
    children: React.ReactNode , 
    className: string
}
const LargeButton = ({children , className} :ButtonType) => {
  return  <button type='submit' className={`mt-6  h-[56px] w-full bg-[#007BA5] text-white rounded-lg  text-lg  font-semibold${className}` } >
    {children}
 </button>

};

export default LargeButton;