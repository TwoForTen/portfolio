import React from 'react';
import { MdToday } from 'react-icons/md';
import { format } from 'date-fns';
import { enUS, hr } from 'date-fns/locale';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { useTheme } from 'styled-components';
import ReactMarkdown from 'react-markdown';

import TechnologyComponent from '../../Technology';
import { ProjectInfoContainer } from './projectInfo.styled';
import { ProjectProp } from '../../../types';
import { Typography, Row } from '../../../styles/globalComponents';

const ProjectInfo: React.FC<ProjectProp> = ({ project }) => {
  const { language } = useI18next();
  const theme = useTheme();
  return (
    <ProjectInfoContainer>
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
            fontSize: '14px',
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
          {project.translations && project.translations[language].description}
        </ReactMarkdown>
      </div>
    </ProjectInfoContainer>
  );
};

export default ProjectInfo;
