
import BackgroundWrapper from '@/components/ui/auth/BackgroundWrapper';
import React from 'react';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='h-[calc(100vh)]'>
         

            <BackgroundWrapper> 
                {children}
            </BackgroundWrapper>
        </div>
    );
};

export default layout;