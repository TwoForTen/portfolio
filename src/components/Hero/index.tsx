import React from "react";
import { useTheme } from "styled-components";
import { Trans } from "gatsby-plugin-react-i18next";

import {
  CallToAction,
  HeroContainer,
  HeroText,
  StyleDots,
  Dot,
} from "./StyledHero";
import { Typography } from "../../styles/globalComponents";

const Hero = () => {
  const theme = useTheme();

  return (
    <HeroContainer>
      <HeroText>
        <Typography variant="span">Noel Rostohar</Typography>
        <Typography variant="h1" style={{ fontSize: "64px" }}>
          <span style={{ color: theme.colors.primary }}>React</span>{" "}
          <Trans>{`hero.title`}</Trans>
        </Typography>
        <Typography variant="span" style={{ marginTop: "5px" }}>
          <Trans>{`hero.quote`}</Trans>
        </Typography>
        <CallToAction>
          <Typography variant="span">
            <Trans>{`hero.button`}</Trans>
          </Typography>
        </CallToAction>
        <StyleDots>
          {new Array(16).fill(undefined).map((_, i) => (
            <Dot key={i} />
          ))}
        </StyleDots>
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;
