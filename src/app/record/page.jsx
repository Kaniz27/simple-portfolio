import React from 'react';
import ProjectDetailSection from './recordsection/ProjectDetailSection';
import ProjectDescriptionSection from './recordsection/ProjectDescriptionSection';
import ProjectsSection from './recordsection/ProjectsSection';

const page = () => {
    return (
        <div>
          <ProjectDetailSection></ProjectDetailSection>  
          <ProjectDescriptionSection></ProjectDescriptionSection>
          <ProjectsSection></ProjectsSection>
        </div>
    );
};

export default page;