import React from 'react'; 

interface IHeadingProps {
    name?: React.ReactNode;
    children?: React.ReactNode;
    className: string;
  } 
const Heading: React.FC<IHeadingProps>  = ({children , className }) => {
    return <div className={`${className} text-[#222222] font-[400] lg:text-[36px] text-[18px] lg:leading-[40px] leading-8  tracking-wide `}> {children}  </div>
};

export default Heading;