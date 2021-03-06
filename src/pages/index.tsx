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
import Drawer from '../components/Drawer';

import { Project } from '../types';

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const AboutMeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  media: [],
  title: '',
  translations: {},
};

const Home: React.FC<Props> = ({ data }): JSX.Element => {
  const { projects, experiences } = data.strapi;

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
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
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <GlobalStyle />
      <Appbar setDrawerOpen={setDrawerOpen} />
      <Hero />
      <Layout>
        <section id="projects">
          <Typography variant="h1" style={{ margin: '40px 0 20px 0' }}>
            <Trans>{`projects`}</Trans>
          </Typography>
          <ProjectContainer>
            {projects &&
              projects.map((project: Project) => {
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
        <section id="about_me" style={{ marginTop: '50px' }}>
          <AboutMeGrid>
            <BasicInfo />
            <Experience
              experiences={experiences && [...experiences].reverse()}
            />
          </AboutMeGrid>
        </section>
        {projectModalStatus.open && (
          <ProjectModal
            project={projectModalStatus.project}
            setProjectModalStatus={setProjectModalStatus}
          />
        )}
        <Drawer onClick={() => setDrawerOpen(false)} drawerOpen={drawerOpen} />
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
        media {
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
          id
          title
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
