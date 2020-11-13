import React from 'react';
import { MdToday, MdFullscreen, MdFullscreenExit } from 'react-icons/md';
import { format } from 'date-fns';
import { enUS, hr } from 'date-fns/locale';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { useTheme } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

import TechnologyComponent from '../../Technology';
import { ProjectInfoContainer, TitleRow } from './projectInfo.styled';
import { ProjectProp } from '../../../types';
import { Typography, Row } from '../../../styles/globalComponents';

interface ProjectInfoProps extends ProjectProp {
  fullscreen: boolean;
  setFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  project,
  fullscreen,
  setFullscreen,
}) => {
  const { language } = useI18next();
  const theme = useTheme();
  return (
    <ProjectInfoContainer fullscreen={fullscreen}>
      <TitleRow>
        <Typography
          variant="h2"
          style={{ marginTop: '5px', fontWeight: 'normal' }}
        >
          {project.title}
        </Typography>
        {!fullscreen ? (
          <MdFullscreen
            size={26}
            color={theme.colors.darkText}
            onClick={() => setFullscreen(true)}
            cursor="pointer"
          />
        ) : (
          <MdFullscreenExit
            size={26}
            color={theme.colors.darkText}
            onClick={() => setFullscreen(false)}
            cursor="pointer"
          />
        )}
      </TitleRow>
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
        {project.technologies.map((tech, index) => {
          return (
            <TechnologyComponent
              technology={tech}
              delay={index / 5}
              key={tech.id}
            />
          );
        })}
      </Row>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginTop: '15px', fontSize: '14px' }}
        transition={{ delay: 0.5 }}
      >
        <ReactMarkdown>
          {project.translations && project.translations[language].description}
        </ReactMarkdown>
      </motion.div>
    </ProjectInfoContainer>
  );
};

export default ProjectInfo;
