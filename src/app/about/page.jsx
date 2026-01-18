import React from 'react';
import StorySection from './aboutsection/StorySection';
import AboutMeSection from './aboutsection/AboutMeSection';
import CreativeAnalyticsSection from './aboutsection/CreativeAnalyticsSection';

const page = () => {
    return (
        <div className='mt-45'>
           {/* <StorySection></StorySection>  */}
           <AboutMeSection></AboutMeSection>
           <CreativeAnalyticsSection></CreativeAnalyticsSection>
        </div>
    );
};

export default page;