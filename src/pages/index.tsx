import React, { useEffect, useState } from 'react';
import GlobalStyle from '../styles/global';
import { Layout } from '../styles/globalComponents';

import Appbar from '../components/Appbar';
import Hero from '../components/Hero';
import ProjectComponent from '../components/Project';
import axios from '../axiosInstance';
import { Project } from '../types';

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
        {projects.map((project) => {
          return <ProjectComponent project={project} />;
        })}
      </Layout>
    </>
  );
};

export default Home;
