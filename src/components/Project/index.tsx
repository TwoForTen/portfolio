import React from 'react';
import { format } from 'date-fns';
import { enUS, hr } from 'date-fns/locale';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { useTheme } from 'styled-components';

import TechnologyComponent from '../Technology';
import { Project } from '../../types';
import { Image, ImageContainer, ProjectContainer } from './project.styled';
import { Typography, Row } from '../../styles/globalComponents';

interface ProjectProps {
  project: Project;
  justifyEnd: boolean;
}

const ProjectComponent: React.FC<ProjectProps> = ({ project, justifyEnd }) => {
  const { language } = useI18next();
  const theme = useTheme();

  return (
    <ProjectContainer style={{ justifySelf: justifyEnd ? 'end' : 'start' }}>
      <ImageContainer>
        <Image src={process.env.GATSBY_API_URL + project.image.url} />
      </ImageContainer>
      <Typography
        variant="h2"
        style={{ marginTop: '5px', fontWeight: 'normal' }}
      >
        {project.title}
      </Typography>
      <Row withMargin>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={theme.colors.darkGray}
          width="18px"
          height="18px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
        </svg>
        <Typography
          variant="span"
          color="darkGray"
          style={{
            textTransform: 'capitalize',
            marginLeft: '5px',
            fontWeight: 'lighter',
          }}
        >
          {format(new Date(project.date), 'LLLL, y', {
            locale: language === 'en' ? enUS : hr,
          })}
        </Typography>
      </Row>
      <Row>
        {project.technologies.map((tech) => {
          return <TechnologyComponent technology={tech} key={tech.id} />;
        })}
      </Row>
      <Typography variant="p" style={{ fontSize: '16px' }}>
        {project.description}
      </Typography>
    </ProjectContainer>
  );
};

export default ProjectComponent;
