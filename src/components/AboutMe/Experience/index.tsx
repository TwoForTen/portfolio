import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';

import ExperienceCard from './ExperienceCard';
import { SectionTitle } from '../aboutMe.styled';
import { Experience } from '../../../types';

interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceComponent: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div style={{ flex: 5 }}>
      <SectionTitle>
        <Trans>{'about_me.experience'}</Trans>
      </SectionTitle>
      <div>
        {experiences.map((experience) => {
          return <ExperienceCard experience={experience} key={experience.id} />;
        })}
      </div>
    </div>
  );
};

ExperienceComponent.defaultProps = {
  experiences: [],
};

export default ExperienceComponent;
