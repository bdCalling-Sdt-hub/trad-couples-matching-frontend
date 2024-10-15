import React from 'react'; 

const Navbar = () => {
    return (
        <div className='bg-[#EEEEEE]  w-full h-[85px]  fixed z-50 top-0 ps-24'>
            <div className=' p-5 container ps-0 '>
                
                <div className='flex flex-col    '>
                    <p className=' font-[540] text-[#222222]  text-[24px] leading-none tracking-wider'>TradCouples</p>
                    <p className=' text-[13px] leading-none text-[#222222] font-sans tracking-wider '>Matchmaking Services</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;