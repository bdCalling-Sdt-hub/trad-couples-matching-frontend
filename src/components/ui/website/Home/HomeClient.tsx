
import AboutUs from '@/components/ui/website/Home/AboutUs';
import Banner from '@/components/ui/website/Home/Banner';
import Cards from '@/components/ui/website/Home/Cards';
import FAQSection from '@/components/ui/website/Home/FAQSection';
import React from 'react';

const HomeClient = () => {
    return (
        <div className=''>
            <Banner/> 
            <Cards /> 
            <AboutUs/> 
            <FAQSection />
        </div>
    );
};

export default HomeClient;