import React, { useState } from 'react';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';

import {
  AppbarContainer,
  Navigation,
  NavButton,
  LangDropdown,
  LangButton,
  ToggleDropdown,
  Flag,
} from './StyledAppbar';
import { Typography } from '../../styles/globalComponents';

const Appbar = () => {
  const [toggleLang, setToggleLang] = useState<boolean>(false);
  const { changeLanguage, languages, language } = useI18next();

  const changeLocale = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <AppbarContainer>
      <Navigation>
        <NavButton>
          <Trans>{`appbar.work`}</Trans>
        </NavButton>
        <NavButton>
          <Trans>{`appbar.about_me`}</Trans>
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
