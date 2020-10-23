import React from 'react';

import { TechnologyContainer, Image } from './technology.styled';
import { Typography, Row } from '../../styles/globalComponents';
import { Technology } from '../../types';

interface TechonolgyProps {
  technology: Technology;
}

const TechnologyComponent: React.FC<TechonolgyProps> = ({ technology }) => {
  return (
    <TechnologyContainer>
      <Row>
        <Image src={process.env.GATSBY_API_URL + technology.tech_image.url} />
        <Typography variant="small">{technology.tech_name}</Typography>
      </Row>
    </TechnologyContainer>
  );
};

export default TechnologyComponent;
