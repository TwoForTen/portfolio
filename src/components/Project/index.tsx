import React from 'react';
import { format } from 'date-fns';
import { enUS, hr } from 'date-fns/locale';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { useTheme } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { MdToday } from 'react-icons/md';

import TechnologyComponent from '../Technology';
import { Project } from '../../types';
import { Image, ImageContainer, ProjectContainer } from './project.styled';
import { Typography, Row } from '../../styles/globalComponents';

interface ProjectProps {
  project: Project;
  [rest: string]: any;
}

const ProjectComponent: React.FC<ProjectProps> = ({ project, ...rest }) => {
  const { language } = useI18next();
  const theme = useTheme();

  return (
    <ProjectContainer {...rest} layoutId={project.id.toString()}>
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
        <MdToday color={theme.colors.darkGray} size={20} />
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
      <div style={{ marginTop: '15px', fontSize: '14px' }}>
        <ReactMarkdown>
          {project.translations && project.translations[language].overview}
        </ReactMarkdown>
      </div>
    </ProjectContainer>
  );
};

export default ProjectComponent;
