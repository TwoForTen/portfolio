import React, { useState } from "react";

import {
  AppbarContainer,
  Navigation,
  NavButton,
  LangDropdown,
  LangButton,
  ToggleDropdown,
  Flag,
} from "./StyledAppbar";
import en from "../../assets/en.png";
import hr from "../../assets/hr.png";

const Appbar = () => {
  const [toggleLang, setToggleLang] = useState<boolean>(false);

  return (
    <AppbarContainer>
      <Navigation>
        <NavButton>Work</NavButton>
        <NavButton>About Me</NavButton>
        <NavButton primary>
          <strong>Download Resume</strong>
        </NavButton>
        <ToggleDropdown
          onClick={() => setToggleLang(prev => !prev)}
          onBlur={() => setToggleLang(false)}
          active={toggleLang}
        >
          EN
          <Flag src={en} />
        </ToggleDropdown>
        {toggleLang && (
          <LangDropdown>
            <LangButton>
              EN
              <Flag src={en} />
            </LangButton>
            <LangButton>
              HR
              <Flag src={hr} />
            </LangButton>
          </LangDropdown>
        )}
      </Navigation>
    </AppbarContainer>
  );
};

export default Appbar;
