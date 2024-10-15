import React from 'react'; 
import img1 from "@/assets/home1.png"
import img2 from "@/assets/home2.png"
import img3 from "@/assets/home3.png"
import img4 from "@/assets/home4.png"
import img5 from "@/assets/home5.png"
import Image from 'next/image';
import Heading from '../shared/Heading';

const Cards = () => {
    return (
        <div className='container py-12'> 
             
        {/* 1st section   */} 

    <div className=' grid grid-cols-12 gap-10 items-center'>  

    <div className=' col-span-6 justify-self-center  w-full '> 
        <Heading className='py-5' > Welcome to Trad Couples </Heading>

 <p className=' text-[#6B6B6B] font-[400] text-[16px] leading-[24px] tracking-wider'>Trad Couples is the premier matchmaking platform for singles who embrace the timeless beauty of traditional family roles. In a world where values often shift, we offer a space where you can find like-minded individuals who appreciate respect, commitment, and the art of building lasting relationships. Whether you seek a partner who shares your vision of a traditional home or want to connect with someone who honors the roles that create harmony in family life, Trad Couples is where your journey to genuine connection begins.</p>
        </div> 

        <div className=' col-span-6 justify-self-center'> 
            <div className='flex gap-5'>
        <Image src={img1} alt=''  height={300} width={300} />
        <Image src={img2} alt=''  height={300} width={300} />
         </div>
        </div> 

    
    </div>  


    {/* 2nd  section   */}
    <div className=' grid grid-cols-12 gap-12 items-center pt-8 w-full'>  

<div className=' col-span-6 justify-self-start'>        
<Image src={img3} alt=''  height={500} width={600} /> 
</div>  

<div className=' col-span-6 justify-self-center  w-full '>
<Heading className='py-5'>Where Tradition Meets Connection
</Heading> 
<p className=' text-[#6B6B6B] font-[400] text-[16px] leading-[24px] tracking-wider'>Our community is dedicated to those who believe in the value of complementary roles within relationships—where men take pride in providing, and women excel in nurturing the home. We cater to singles who wish to create a solid foundation for their future, grounded in shared values and mutual respect. At Trad Couples, you'll meet others who understand the strength found in traditional dynamics, and who are ready to build a meaningful, lasting partnership.</p>
</div>    
</div>   



    {/* 3rd section   */}
    <div className=' grid grid-cols-12 gap-12 items-center pt-8'>  

    <div className=' col-span-6 justify-self-start  w-full '>
 <Heading className=' py-5 '>Your Safety, Our Priority
 </Heading> 
 <p className=' text-[#6B6B6B] font-[400] text-[16px] leading-[24px] tracking-wider'>We understand the importance of a safe and respectful environment when seeking a serious relationship. Trad Couples takes your privacy and security seriously, with stringent verification measures to ensure a trustworthy community. Our commitment is to protect your experience so that you can focus on what truly matters—finding someone who shares your values and dreams.</p>
        </div> 

        <div className=' col-span-6 justify-self-center'>        
        <Image src={img4} alt=''  height={600} width={1000} style={{ width:"100%"}} />
     
         
        </div> 

       
    </div>   

    {/* 4th section   */} 
    <div className=' grid grid-cols-12 gap-12 items-center pt-8'>  

                <div className=' col-span-6 justify-self-start'>        
        <Image src={img5} alt=''  height={500} width={600} /> 
        </div>  

    <div className=' col-span-6 justify-self-center  w-full '>
 <Heading className='py-5'>Find Your Perfect Match 
 </Heading> 
 <p className=' text-[#6B6B6B] font-[400] text-[16px] leading-[24px] tracking-wider'>Discover the joy of meeting a partner who cherishes tradition as much as you do. At Trad Couples, we celebrate relationships that honor time-tested roles, creating a strong family and a brighter future together. Start your journey today and connect with singles who value the qualities that make love and family life truly fulfilling.</p>
        </div>    
    </div>   



        </div>
    );
};

export default Cards;