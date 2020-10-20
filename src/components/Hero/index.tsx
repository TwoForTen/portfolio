import React from "react";
import { useTheme } from "styled-components";

import { CallToAction, HeroContainer, HeroText } from "./StyledHero";
import { Typography } from "../../styles/globalComponents";

const Hero = () => {
  const theme = useTheme();
  return (
    <HeroContainer>
      <HeroText>
        <Typography variant="span">Noel Rostohar</Typography>
        <Typography variant="h1" style={{ fontSize: "64px" }}>
          <span style={{ color: theme.colors.primary }}>React</span> enthusiast
        </Typography>
        <Typography variant="span" style={{ marginTop: "5px" }}>
          "Frontend development is the perfect mixture of design and logic"
        </Typography>
        <CallToAction>
          <Typography variant="span">See my work</Typography>
        </CallToAction>
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;
