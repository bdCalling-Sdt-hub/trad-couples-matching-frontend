import React from 'react'; 

interface buttonProps{
    children:React.ReactNode 
    className:string
}

const OutLineBtn:React.FC<buttonProps> = ({children , className }) => {
    return <button className={`text-primary font-medium border-2 border-primary rounded-lg mt-6 px-6 py-3 ${className}`}>{children}</button>
};

export default OutLineBtn;