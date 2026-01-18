import Features from '@/pages/Features';
import Hero from '@/pages/Hero';
import ImageSection from '@/pages/ImageSection';
import React from 'react';
import BlogSection from './blog/page';

const page = () => {
  return (
    <div className='bg-[#f4f4f7]'>
      <Hero></Hero>
      <Features></Features>
      <ImageSection></ImageSection>
      <BlogSection></BlogSection>
    </div>
  );
};

export default page;