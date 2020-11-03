import React from 'react';

import ProjectImages from './ProjectMedia';
import ProjectInfo from './ProjectInfo';
import { Backdrop, ModalContainer } from './projectModal.styled';
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
  return (
    <Backdrop
      onClick={() =>
        setProjectModalStatus({ open: false, project: EMPTY_PROJECT })
      }
    >
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ProjectImages />
        <ProjectInfo project={project} />
      </ModalContainer>
    </Backdrop>
  );
};

export default ProjectModal;