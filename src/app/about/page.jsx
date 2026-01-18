import React from 'react';
import StorySection from './aboutsection/StorySection';
import AboutMeSection from './aboutsection/AboutMeSection';
import CreativeAnalyticsSection from './aboutsection/CreativeAnalyticsSection';
import MySkillsSection from './aboutsection/MySkillsSection';
import CareerJourneySection from './aboutsection/CareerJourneySection';
import SpecialSection from './aboutsection/SpecialSection';

const page = () => {
    return (
        <div className='mt-45'>
           {/* <StorySection></StorySection>  */}
           <AboutMeSection></AboutMeSection>
           <MySkillsSection></MySkillsSection>
           <CreativeAnalyticsSection></CreativeAnalyticsSection>
           
           <CareerJourneySection></CareerJourneySection>
           <SpecialSection></SpecialSection>
        </div>
    );
};

export default page;