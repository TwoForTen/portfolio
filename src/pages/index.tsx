import React, { useEffect, useState } from 'react';
import GlobalStyle from '../styles/global';
import { Layout, Typography, Row } from '../styles/globalComponents';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';

import Appbar from '../components/Appbar';
import Hero from '../components/Hero';
import ProjectComponent from '../components/Project';
import axios from '../axiosInstance';
import { Project } from '../types';

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Home: React.FC = (): JSX.Element => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    axios.get('/projects').then(({ data }) => setProjects(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Appbar />
      <Hero />
      <Layout>
        <Typography variant="h1" style={{ margin: '40px 0' }}>
          <Trans>{`projects`}</Trans>
        </Typography>
        <ProjectContainer>
          {projects.map((project, i) => {
            return (
              <ProjectComponent
                justifyEnd={i % 2 !== 0}
                project={project}
                key={project.id}
              />
            );
          })}
        </ProjectContainer>
      </Layout>
    </>
  );
};

export default Home;
