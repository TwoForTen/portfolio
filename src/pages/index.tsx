import React from "react";
import GlobalStyle from "../styles/global";

import Appbar from "../components/Appbar";
import Hero from "../components/Hero";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Appbar />
      <Hero />
    </>
  );
};

export default Home;
