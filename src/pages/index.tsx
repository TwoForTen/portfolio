import React, { useState, useEffect } from 'react';
import GlobalStyle from '../styles/global';
import { Layout, Typography } from '../styles/globalComponents';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Appbar from '../components/Appbar';
import Hero from '../components/Hero';
import ProjectComponent from '../components/Project';
import BasicInfo from '../components/AboutMe/BasicInfo';
import Experience from '../components/AboutMe/Experience';
import ProjectModal from '../components/ProjectModal';

import { Project } from '../types';

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const AboutMeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 40px;
`;

interface Props {
  data: any;
}

export interface ProjectModalStatus {
  open: boolean;
  project: Project;
}

export const EMPTY_PROJECT: Project = {
  date: '',
  technologies: [],
  id: -1,
  image: {
    url: '',
  },
  title: '',
  translations: {},
};

const Home: React.FC<Props> = ({ data }): JSX.Element => {
  const { projects, experiences } = data.strapi;

  const [projectModalStatus, setProjectModalStatus] = useState<
    ProjectModalStatus
  >({
    open: false,
    project: EMPTY_PROJECT,
  });

  const openProjectModal = (project: Project) =>
    setProjectModalStatus((prev) => {
      return {
        open: !prev.open,
        project,
      };
    });

  useEffect(() => {
    if (projectModalStatus.open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [projectModalStatus.open]);

  return (
    <>
      <Helmet>
        <title>Noel Rostohar - Frontend Developer</title>
      </Helmet>
      <GlobalStyle />
      <Appbar />
      <Hero />
      <Layout>
        <section>
          <Typography variant="h1" style={{ margin: '40px 0 20px 0' }}>
            <Trans>{`projects`}</Trans>
          </Typography>
          <ProjectContainer>
            {projects.map((project: Project) => {
              return (
                <ProjectComponent
                  onClick={() => openProjectModal(project)}
                  project={project}
                  key={project.id}
                />
              );
            })}
          </ProjectContainer>
        </section>
        <section style={{ marginTop: '50px' }}>
          <AboutMeGrid>
            <BasicInfo />
            <Experience experiences={[...experiences].reverse()} />
          </AboutMeGrid>
        </section>
        {projectModalStatus.open && (
          <ProjectModal
            project={projectModalStatus.project}
            setProjectModalStatus={setProjectModalStatus}
          />
        )}
      </Layout>
    </>
  );
};

export default Home;

export const query = graphql`
  query MyQuery {
    strapi {
      projects {
        id
        image {
          url
        }
        date
        title
        technologies {
          id
          tech_image {
            url
          }
          tech_name
        }
        translations {
          en {
            overview
            description
          }
          hr {
            overview
            description
          }
        }
      }
      experiences {
        id
        company_name
        date_from
        date_to
        image {
          url
        }
        obligations {
          translations {
            en {
              description
            }
            hr {
              description
            }
          }
        }
      }
    }
  }
`;
