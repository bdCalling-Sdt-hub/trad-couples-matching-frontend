import React from 'react'; 

interface IHeadingProps {
    name?: React.ReactNode;
    children?: React.ReactNode;
    className: string;
  } 
const Heading: React.FC<IHeadingProps>  = ({children , className }) => {
    return <div className={`${className} text-[#222222] font-[400] lg:text-[32px] text-[28px] leading-[40px]  tracking-wide `}> {children}  </div>
};

export default Heading;