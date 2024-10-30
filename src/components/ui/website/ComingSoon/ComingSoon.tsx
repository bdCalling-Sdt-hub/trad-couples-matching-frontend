import React from 'react';
import LadingBanner from './LadingBanner';
import LandingCards from './LandingCards';
import ComingSoonFooter from './ComingSoonFooter';

const ComingSoon = () => {
    return (
        <div className='pt-0'>
           <LadingBanner /> 
           <LandingCards/> 
           <ComingSoonFooter />
        </div>
    );
};

export default ComingSoon;