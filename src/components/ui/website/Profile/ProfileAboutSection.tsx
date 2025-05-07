
import React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsPersonVcard } from 'react-icons/bs';
import { CgGirl } from 'react-icons/cg';
import { FaChildren, FaRegEye, FaRegMap } from 'react-icons/fa6';
import { GiBodyHeight } from 'react-icons/gi';
import { GoHeartFill } from 'react-icons/go';
import { IoIosBody } from 'react-icons/io';
import { IoPersonSharp } from 'react-icons/io5';
import { MdOutlineDateRange, MdOutlineTempleHindu } from 'react-icons/md';
import { SiEthers } from 'react-icons/si';  

interface bioDataType { 
    _id: string
    aboutMe: string
    age: string
    height: string
    bodyShape: string
    educationOn: string
    ethnicity: string
    country: string
    region: string
    hairColor: string
    eyeColor: string
    maritalStatus: string
    children: string
    howManyChildren: number
    childrenAges: any[]
    searchingRightPartner: string
    wantToLive: string
    occupation: string
}


const ProfileAboutSection = ({bioData , userProfile}:{bioData:bioDataType , userProfile:{gender:string}}) => { 
  
     
    const data = [
        {
            icon: <p className='text-white '><IoPersonSharp size={20}/></p>, 
             title:"Gender" ,
             value: userProfile?.gender
        } , 
        
        {
            icon: <p className='text-white '><MdOutlineDateRange size={20}/></p>, 
             title:"Age" ,
             value: `${bioData?.age}  `
        } , 
        
        {
            icon: <p className='text-white '><FaRegMap size={20}/></p>, 
             title:"Country" ,
             value: bioData?.country
        } , 
        
        {
            icon: <p className='text-white '><AiOutlineGlobal size={20}/></p>, 
             title:"Province/Region" ,
             value: bioData?.region
        } , 
        
        {
            icon: <p className='text-white '><SiEthers size={20}/></p>, 
             title:"Ethnicity" ,
             value: bioData?.ethnicity
        } , 
    
        {
            icon: <p className='text-white '><BsPersonVcard size={20}/></p>, 
             title:"Occupation" ,
             value: bioData?.occupation
        } , 
        
        {
            icon: <p className='text-white '><MdOutlineTempleHindu size={20}/></p>, 
             title:"Region" ,
             value: bioData?.region
        } , 
        
        {
            icon: <p className='text-white '><GoHeartFill size={20}/></p>, 
             title:"Marital status" ,
             value: bioData?.maritalStatus
        } , 
        
        {
            icon: <p className='text-white '><FaChildren size={20}/></p>, 
             title:"Children" ,
             value: ` ${bioData?.howManyChildren} `
        } , 
        
        {
            icon: <p className='text-white '><GiBodyHeight size={20}/></p>, 
             title:"Height" ,
             value: bioData?.height
        } , 
        
        {
            icon: <p className='text-white '><IoIosBody size={20}/></p>, 
             title:"Body Shape" ,
             value: bioData?.bodyShape
        } , 
        
        {
            icon: <p className='text-white '><CgGirl size={20}/></p>, 
             title:"Hair Color" ,
             value: bioData?.hairColor
        } , 
        
        {
            icon: <p className='text-white '><FaRegEye size={20}/></p>, 
             title:"Eye Color" ,
             value: bioData?.eyeColor
        } , 
        
    ]  

    return (
        <div className=' mb-5'>
           <div className=' bg-[#EEEEEE] p-5 text-[#4E4E4E] rounded-lg text-[16px] mb-4  '>{bioData?.aboutMe}</div>  

           <div className='grid lg:grid-cols-2 grid-cols-1  items-center bg-[#EEEEEE] py-4 rounded-lg lg:px-5 px-3'>
{
    data?.map((value, index:number)=><div key={index} className='flex lg:w-2/3 w-full items-center  mb-4'> 
  <div className='flex items-center gap-2 lg:w-1/2 w-full text-start'>
    <div className=' flex justify-center items-center bg-primary h-8 w-8 rounded-full  '>{value?.icon}</div> 
    <p className='text-[#4E4E4E]  text-[14px]'>{value?.title}</p>
  </div> 
   <div className='text-[#4E4E4E] text-[14px] lg:w-1/2 w-full text-start '>:  <span className='ms-2'> {value?.value} </span></div>
    </div>)
}
           </div>
        </div>
    );
};

export default ProfileAboutSection;