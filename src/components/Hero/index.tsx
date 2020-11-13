import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';
import { Trans } from 'gatsby-plugin-react-i18next';
import { motion, useAnimation } from 'framer-motion';

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
  const animation = useAnimation();

  useEffect(() => {
    (async function () {
      animation.start({ left: '100%' });
      await animation.start({ opacity: 0 });
      await animation.start({ opacity: 0.4 });
    })();
  }, [animation]);

  return (
    <HeroContainer>
      <HeroText>
        <div>
          <ReactAnimation
            initial={{ left: -10, opacity: 1 }}
            animate={animation}
            transition={{ duration: 0.8, delay: 0.8 }}
            src={reactIcon}
            height={65}
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
          >
            <Typography
              variant="h1"
              style={{ fontSize: 'clamp(28px, 8vw, 64px)' }}
            >
              <span style={{ color: theme.colors.primary }}>React</span>{' '}
              <Trans>{`hero.title`}</Trans>
            </Typography>
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
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <Typography
            variant="span"
            style={{
              marginTop: '5px',
              fontFamily: 'Playfair Display',
              fontWeight: 500,
            }}
          >
            <Trans>{`hero.quote`}</Trans>
          </Typography>
        </motion.div>
        <CallToAction
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          onClick={() => {
            document.getElementById('projects')?.scrollIntoView();
          }}
        >
          <Typography variant="small">
            <Trans>{`hero.button`}</Trans>
          </Typography>
        </CallToAction>
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;
