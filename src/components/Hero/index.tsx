import React from 'react';
import { useTheme } from 'styled-components';
import { Trans } from 'gatsby-plugin-react-i18next';
import { motion } from 'framer-motion';

import reactIcon from '../../assets/react_icon.png';

import {
  CallToAction,
  HeroContainer,
  HeroText,
  StyleDots,
  Dot,
  ReactAnimation,
} from './hero.styled';
import { Typography } from '../../styles/globalComponents';

const Hero = () => {
  const theme = useTheme();

  return (
    <HeroContainer>
      <HeroText>
        <div>
          <ReactAnimation
            initial={{ left: -10, opacity: 1 }}
            animate={{
              left: '100%',
              opacity: 0,
              transitionEnd: { display: 'none' },
            }}
            transition={{ duration: 1, delay: 0.8 }}
            src={reactIcon}
            height={65}
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
          >
            <Typography variant="h1" style={{ fontSize: '64px' }}>
              <span style={{ color: theme.colors.primary }}>React</span>{' '}
              <Trans>{`hero.title`}</Trans>
            </Typography>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <Typography variant="span" style={{ marginTop: '5px' }}>
            <Trans>{`hero.quote`}</Trans>
          </Typography>
        </motion.div>
        <CallToAction href="#projects">
          <Typography variant="small">
            <Trans>{`hero.button`}</Trans>
          </Typography>
        </CallToAction>
        <StyleDots>
          {new Array(16).fill(undefined).map((_, i) => (
            <Dot
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: Math.min(i / 4, 2), delay: 1.8 }}
            />
          ))}
        </StyleDots>
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;
