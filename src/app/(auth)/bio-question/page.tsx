import Navbar from '@/components/shared/Navbar';
import BioQuestions from '@/components/ui/auth/Bio/BioQuestions';
import React from 'react';

const bioPage = () => {
    return (
        <div> 
            <Navbar />
            <BioQuestions />
        </div>
    );
};

export default bioPage;