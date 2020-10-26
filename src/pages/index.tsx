import React from 'react';
import GlobalStyle from '../styles/global';
import { Layout, Typography, Row } from '../styles/globalComponents';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';

import Appbar from '../components/Appbar';
import Hero from '../components/Hero';
import ProjectComponent from '../components/Project';
import { Project } from '../types';
import { graphql } from 'gatsby';

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

interface Props {
  data: any;
}

const Home: React.FC<Props> = ({ data }): JSX.Element => {
  const { projects } = data.strapi;

  return (
    <>
      <GlobalStyle />
      <Appbar />
      <Hero />
      <Layout>
        <Typography variant="h1" style={{ margin: '40px 0 20px 0' }}>
          <Trans>{`projects`}</Trans>
        </Typography>
        <ProjectContainer>
          {projects.map((project: Project) => {
            return <ProjectComponent project={project} key={project.id} />;
          })}
        </ProjectContainer>
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
    }
  }
`;
