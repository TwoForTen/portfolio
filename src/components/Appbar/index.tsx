import React, { useState, useEffect } from 'react';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';
import { AiOutlineMenu } from 'react-icons/ai';
import { useTheme } from 'styled-components';

import {
  AppbarContainer,
  DesktopNavigation,
  MobileNavigation,
  NavButton,
  LangDropdown,
  LangButton,
  ToggleDropdown,
  Flag,
} from './appbar.styled';
import { Typography } from '../../styles/globalComponents';
import useChangeLocale from '../../hooks/useChangeLocale';

interface AppbarProps {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Appbar: React.FC<AppbarProps> = ({ setDrawerOpen }) => {
  const [toggleLang, setToggleLang] = useState<boolean>(false);
  const [appbarOpacity, setAppbarOpacity] = useState<number>(0);
  const { languages, language } = useI18next();
  const theme = useTheme();
  const changeLocale = useChangeLocale();

  const toggleDrawer = (): void => setDrawerOpen((prev) => !prev);

  useEffect(() => {
    const updateAppbarOpacity = () =>
      setAppbarOpacity(
        Math.min(Math.abs(document.body.getBoundingClientRect().y / 100), 0.98)
      );

    window.addEventListener('scroll', updateAppbarOpacity);

    return () => window.removeEventListener('scroll', updateAppbarOpacity);
  }, []);

  return (
    <AppbarContainer
      style={{ backgroundColor: `rgba(240, 240, 240, ${appbarOpacity})` }}
      initial={{ y: `-${theme.layout.appbarHeight}` }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: 'spring', damping: 10 }}
    >
      <DesktopNavigation>
        <NavButton href="#projects">
          <Trans>{`appbar.work`}</Trans>
        </NavButton>
        <NavButton href="#about_me">
          <Trans>{`appbar.about_me`}</Trans>
        </NavButton>
        <NavButton
          primary
          target="_blank"
          href={`${process.env.GATSBY_API_URL}/uploads/CV_Noel_Denis_Rostohar_5178bf9631.pdf`}
        >
          <strong>
            <Trans>{`appbar.download_resume`}</Trans>
          </strong>
        </NavButton>
        <ToggleDropdown
          onClick={() => setToggleLang((prev) => !prev)}
          onBlur={() => setToggleLang(false)}
          active={toggleLang}
        >
          <Typography variant="span">{language.toUpperCase()}</Typography>
          <Flag src={require(`../../../static/${language}.png`)} />

          {toggleLang && (
            <LangDropdown>
              {languages.map((lang) => {
                return (
                  <LocaleButton
                    value={lang}
                    src={require(`../../../static/${lang}.png`)}
                    onClick={() => changeLocale(lang)}
                    key={lang}
                  />
                );
              })}
            </LangDropdown>
          )}
        </ToggleDropdown>
      </DesktopNavigation>
      <MobileNavigation>
        <AiOutlineMenu
          size={24}
          color={theme.colors.darkText}
          cursor="pointer"
          onClick={toggleDrawer}
        />
      </MobileNavigation>
    </AppbarContainer>
  );
};

interface LocaleButtonProps {
  value: string;
  src: string;
  onClick: () => void;
}

const LocaleButton: React.FC<LocaleButtonProps> = ({ value, src, onClick }) => {
  return (
    <LangButton onClick={onClick}>
      <Typography variant="span">{value.toUpperCase()}</Typography>
      <Flag src={src} />
    </LangButton>
  );
};

export default Appbar;
