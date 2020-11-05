import React from 'react';

import ProjectMedia from './ProjectMedia';
import ProjectInfo from './ProjectInfo';
import { ModalContainer } from './projectModal.styled';
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
  return (
    <Backdrop
      onClick={() =>
        setProjectModalStatus({ open: false, project: EMPTY_PROJECT })
      }
    >
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ProjectMedia project={project} />
        <ProjectInfo project={project} />
      </ModalContainer>
    </Backdrop>
  );
};

export default ProjectModal;
