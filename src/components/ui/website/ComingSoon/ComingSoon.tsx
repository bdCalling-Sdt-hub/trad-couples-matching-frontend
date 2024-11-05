"use client"
import React, { useRef } from 'react';
import LadingBanner from './LadingBanner';
import LandingCards from './LandingCards';
import ComingSoonFooter from './ComingSoonFooter';

const ComingSoon = () => { 
    const fourthSectionRef = useRef<HTMLDivElement>(null);
    const scrollToFourthSection = () => {
        if (fourthSectionRef.current) {
            fourthSectionRef.current.scrollIntoView({ behavior: 'smooth' }); 
        }
    };
    return (
        <div className='pt-0'>
           <LadingBanner scrollToFourthSection={scrollToFourthSection} />  
           <LandingCards  fourthSectionRef={fourthSectionRef}/> 
           <ComingSoonFooter />
        </div>
    );
};

export default ComingSoon;