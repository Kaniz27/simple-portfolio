import Features from '@/pages/Features';
import Hero from '@/pages/Hero';
import ImageSection from '@/pages/ImageSection';
import React from 'react';

const page = () => {
  return (
    <div className='bg-[#f4f4f7]'>
      <Hero></Hero>
      <Features></Features>
      <ImageSection></ImageSection>
    </div>
  );
};

export default page;