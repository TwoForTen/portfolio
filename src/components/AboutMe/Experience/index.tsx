import React from 'react';

import ExperienceCard from './ExperienceCard';
import { SectionTitle } from '../aboutMe.styled';
import { Experience } from '../../../types';

interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceComponent: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div style={{ flex: 5, minWidth: '300px' }}>
      <SectionTitle>Experience And Education</SectionTitle>
      {experiences.map((experience) => {
        return <ExperienceCard experience={experience} key={experience.id} />;
      })}
    </div>
  );
};

export default ExperienceComponent;
