import AboutUs from '@/components/Home/AboutUs';
import Banner from '@/components/Home/Banner';
import Cards from '@/components/Home/Cards';
import FAQSection from '@/components/Home/FAQSection';
import React from 'react';

const HomeClient = () => {
    return (
        <div className=''>
            <Banner/> 
            <Cards /> 
            <AboutUs /> 
            <FAQSection />
        </div>
    );
};

export default HomeClient;