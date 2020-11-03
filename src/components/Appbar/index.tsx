import React, { useState, useEffect, useRef } from 'react';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';

import {
  AppbarContainer,
  Navigation,
  NavButton,
  LangDropdown,
  LangButton,
  ToggleDropdown,
  Flag,
} from './appbar.styled';
import { Typography } from '../../styles/globalComponents';

const Appbar = () => {
  const [toggleLang, setToggleLang] = useState<boolean>(false);
  const [appbarOpacity, setAppbarOpacity] = useState<number>(0);
  const { changeLanguage, languages, language } = useI18next();

  const changeLocale = (lang: string) => {
    changeLanguage(lang);
  };

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
    >
      <Navigation>
        <NavButton>
          <a href="#projects">
            <Trans>{`appbar.work`}</Trans>
          </a>
        </NavButton>
        <NavButton>
          <a href="#about_me">
            <Trans>{`appbar.about_me`}</Trans>
          </a>
        </NavButton>
        <NavButton primary>
          <strong>
            <Trans>{`appbar.download_resume`}</Trans>
          </strong>
        </NavButton>
        <ToggleDropdown
          onClick={() => setToggleLang((prev) => !prev)}
          // onBlur={() => setToggleLang(false)}
          active={toggleLang}
        >
          <Typography variant="span">{language.toUpperCase()}</Typography>
          <Flag src={require(`../../assets/${language}.png`)} />
        </ToggleDropdown>
        {toggleLang && (
          <LangDropdown>
            {languages.map((language) => {
              return (
                <LocaleButton
                  value={language}
                  src={require(`../../assets/${language}.png`)}
                  onClick={() => changeLocale(language)}
                  key={language}
                />
              );
            })}
          </LangDropdown>
        )}
      </Navigation>
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
