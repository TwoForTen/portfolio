import React, { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';

import { DrawerContainer, NavButton, Flags, Flag } from './drawer.styled';
import useChangeLocale from '../../hooks/useChangeLocale';

interface DrawerProps {
  drawerOpen: boolean;
  [rest: string]: any;
}

const Drawer: React.FC<DrawerProps> = ({ drawerOpen, ...rest }) => {
  const theme = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);
  const { languages } = useI18next();
  const changeLocale = useChangeLocale();

  useEffect(() => {
    if (drawerOpen && drawerRef.current) {
      drawerRef.current.style.left = '0';
    } else if (!drawerOpen && drawerRef.current) {
      drawerRef.current.style.left = `-${theme.layout.drawerWidth}`;
    }
  }, [drawerOpen]);

  return (
    <DrawerContainer {...rest} ref={drawerRef}>
      <NavButton href="#projects">
        <Trans>{`appbar.work`}</Trans>
      </NavButton>
      <NavButton href="#about_me">
        <Trans>{`appbar.about_me`}</Trans>
      </NavButton>
      <NavButton
        primary
        target="_blank"
        href="https://res.cloudinary.com/imaginary-friends-app/image/upload/v1610238927/CV_Noel_Denis_Rostohar_ec450c79a6.pdf"
      >
        <strong>
          <Trans>{`appbar.download_resume`}</Trans>
        </strong>
      </NavButton>
      <Flags>
        {languages.map((lang) => {
          return (
            <Flag
              key={lang}
              src={require(`../../../static/${lang}.png`)}
              onClick={() => changeLocale(lang)}
            />
          );
        })}
      </Flags>
    </DrawerContainer>
  );
};

export default Drawer;
