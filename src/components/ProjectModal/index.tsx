import React, { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import ProjectMedia from './ProjectMedia';
import ProjectInfo from './ProjectInfo';
import { ModalContainer, FullscreenContainer } from './projectModal.styled';
import { Backdrop } from '../../styles/globalComponents';
import { ProjectProp } from '../../types';
import { ProjectModalStatus, EMPTY_PROJECT } from '../../pages';

interface ProjectModalProps extends ProjectProp {
  setProjectModalStatus: React.Dispatch<
    React.SetStateAction<ProjectModalStatus>
  >;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  setProjectModalStatus,
}) => {
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  return (
    <Backdrop
      onClick={() =>
        setProjectModalStatus({ open: false, project: EMPTY_PROJECT })
      }
    >
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {fullscreen ? (
            <FullscreenContainer
              layoutId="1"
              onClick={(e) => e.stopPropagation()}
            >
              <ProjectMedia project={project} fullscreen={fullscreen} />
              <ProjectInfo
                project={project}
                fullscreen={fullscreen}
                setFullscreen={setFullscreen}
              />
            </FullscreenContainer>
          ) : (
            <ModalContainer layoutId="1" onClick={(e) => e.stopPropagation()}>
              <ProjectMedia project={project} fullscreen={fullscreen} />
              <ProjectInfo
                project={project}
                fullscreen={fullscreen}
                setFullscreen={setFullscreen}
              />
            </ModalContainer>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Backdrop>
  );
};

export default ProjectModal;
