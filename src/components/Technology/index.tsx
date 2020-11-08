import React from 'react';

import { TechnologyContainer, Image } from './technology.styled';
import { Typography, Row } from '../../styles/globalComponents';
import { Technology } from '../../types';

interface TechonolgyProps {
  technology: Technology;
  delay: number;
}

const TechnologyComponent: React.FC<TechonolgyProps> = ({
  technology,
  delay,
}) => {
  return (
    <TechnologyContainer
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay,
        duration: 1,
        type: 'spring',
        damping: 10,
      }}
      style={{ originY: 0.5, originX: 0 }}
    >
      <Row>
        <Image src={process.env.GATSBY_API_URL + technology.tech_image.url} />
        <Typography variant="small">{technology.tech_name}</Typography>
      </Row>
    </TechnologyContainer>
  );
};

export default TechnologyComponent;
