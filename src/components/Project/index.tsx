import React from 'react';
import { format } from 'date-fns';
import { enUS, hr } from 'date-fns/locale';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { Project } from '../../types';
import { Image, ImageContainer, ProjectContainer } from './project.styled';
import { Typography, Row } from '../../styles/globalComponents';

interface ProjectProps {
  project: Project;
}

const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {
  const { language } = useI18next();

  return (
    <ProjectContainer>
      <ImageContainer>
        <Image src={`http://localhost:1337${project.image.url}`} />
      </ImageContainer>
      <Typography variant="h2">{project.title}</Typography>
      <Row>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="18px"
          height="18px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
        </svg>
        <Typography variant="span" style={{ textTransform: 'capitalize' }}>
          {format(new Date(project.date), 'LLLL, y', {
            locale: language === 'en' ? enUS : hr,
          })}
        </Typography>
      </Row>
      <Row>
        {project.technologies.map((tech) => {
          return <h6 key={tech.tech_name}>{tech.tech_name}</h6>;
        })}
      </Row>
      <Typography variant="p">{project.description}</Typography>
    </ProjectContainer>
  );
};

export default ProjectComponent;
